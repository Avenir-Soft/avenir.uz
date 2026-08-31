import { NextResponse } from 'next/server'

const DEFAULT_CRM_INTAKE_URL = 'https://api-avenir.uz/api/v1/intake/leads'
const TELEGRAM_API_BASE = (process.env.TELEGRAM_API_BASE ?? 'https://api.telegram.org').replace(/\/$/, '')
const CRM_REQUEST_TIMEOUT_MS = Number(process.env.CRM_REQUEST_TIMEOUT_MS ?? 10_000)
const TELEGRAM_REQUEST_TIMEOUT_MS = Number(process.env.TELEGRAM_REQUEST_TIMEOUT_MS ?? 10_000)
const TELEGRAM_RETRY_COUNT = Number(process.env.TELEGRAM_RETRY_COUNT ?? 2)

/** Bir IP uchun chegaralar. Konteyner nusxasi ichida saqlanadi. */
const RATE_WINDOW_MS = Number(process.env.CONTACT_RATE_WINDOW_MS ?? 10 * 60_000)
const RATE_MAX_PER_WINDOW = Number(process.env.CONTACT_RATE_MAX ?? 5)
const RATE_MIN_INTERVAL_MS = Number(process.env.CONTACT_RATE_MIN_INTERVAL_MS ?? 15_000)

const MAX_BODY_BYTES = 8 * 1024
const MAX_LENGTHS = {
  name: 80,
  phone: 24,
  telegramUsername: 64,
  // v2 formada bu maydon "oylik aylanma" bo'ldi — "oyiga 300 mln" kabi
  // qiymatlar 6 belgidan uzun, jimgina kesilmasin
  employeeCount: 32,
} as const

type TelegramSendMessageResponse = {
  ok: boolean
  description?: string
}

type ContactFormData = {
  name: string
  phone: string
  telegramUsername: string
  employeeCount: string
  language: string
}

type RateEntry = { hits: number[]; }
const rateBuckets = new Map<string, RateEntry>()

function clientIp(request: Request) {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()
  return request.headers.get('x-real-ip')?.trim() || 'unknown'
}

/** null — ruxsat; son — necha soniyadan keyin qayta urinish mumkin. */
function rateLimit(ip: string): number | null {
  const now = Date.now()
  const entry = rateBuckets.get(ip) ?? { hits: [] }
  entry.hits = entry.hits.filter(at => now - at < RATE_WINDOW_MS)

  const last = entry.hits[entry.hits.length - 1]
  if (last !== undefined && now - last < RATE_MIN_INTERVAL_MS) {
    rateBuckets.set(ip, entry)
    return Math.ceil((RATE_MIN_INTERVAL_MS - (now - last)) / 1000)
  }

  if (entry.hits.length >= RATE_MAX_PER_WINDOW) {
    rateBuckets.set(ip, entry)
    return Math.ceil((RATE_WINDOW_MS - (now - entry.hits[0])) / 1000)
  }

  entry.hits.push(now)
  rateBuckets.set(ip, entry)

  // Xotira o'smasligi uchun eskirgan yozuvlarni tozalab turamiz.
  if (rateBuckets.size > 5000) {
    for (const [key, value] of rateBuckets) {
      if (value.hits.every(at => now - at >= RATE_WINDOW_MS)) rateBuckets.delete(key)
    }
  }

  return null
}

function cleanString(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

function normalizePhone(value: string) {
  const compact = value.replace(/[^\d+]/g, '')
  return compact.startsWith('+') ? `+${compact.slice(1).replace(/\D/g, '')}` : compact
}

function isValidPhone(value: string) {
  return /^\+?\d{7,15}$/.test(normalizePhone(value))
}

function parseChatIds(source: string | undefined) {
  if (!source) return []
  return source
    .split(/[,;\s]+/)
    .map(item => item.trim())
    .filter(Boolean)
}

function toErrorMessage(error: unknown) {
  if (error instanceof Error) {
    const cause = 'cause' in error ? error.cause : undefined
    if (cause instanceof Error && cause.message) return `${error.message}: ${cause.message}`
    if (typeof cause === 'string' && cause) return `${error.message}: ${cause}`
    return error.message
  }
  return String(error)
}

async function sleep(ms: number) {
  await new Promise(resolve => setTimeout(resolve, ms))
}

async function sendTelegramMessage(token: string, chatId: string, text: string) {
  let lastError: unknown = null

  for (let attempt = 0; attempt <= TELEGRAM_RETRY_COUNT; attempt += 1) {
    try {
      const response = await fetch(`${TELEGRAM_API_BASE}/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: true }),
        cache: 'no-store',
        signal: AbortSignal.timeout(TELEGRAM_REQUEST_TIMEOUT_MS),
      })

      let payload: TelegramSendMessageResponse | null = null
      try {
        payload = (await response.json()) as TelegramSendMessageResponse
      } catch {
        payload = null
      }

      if (!response.ok || !payload?.ok) {
        throw new Error(payload?.description ?? `HTTP ${response.status}`)
      }

      return
    } catch (error) {
      lastError = error
      if (attempt < TELEGRAM_RETRY_COUNT) await sleep(300 * (attempt + 1))
    }
  }

  throw new Error(`Telegram sendMessage failed for chat "${chatId}": ${toErrorMessage(lastError)}`)
}

function buildTelegramMessage(data: ContactFormData) {
  const timestamp = new Intl.DateTimeFormat('ru-RU', {
    dateStyle: 'medium',
    timeStyle: 'medium',
    timeZone: 'Asia/Tashkent',
  }).format(new Date())

  return [
    'Новая заявка с сайта avenir.uz',
    '',
    `Имя: ${data.name}`,
    `Телефон номер: ${data.phone}`,
    `Telegram username: ${data.telegramUsername || '—'}`,
    `Сотрудники кол-во: ${data.employeeCount || '—'}`,
    `Язык сайта: ${data.language || '—'}`,
    `Время: ${timestamp}`,
  ].join('\n')
}

function buildCrmNotes(data: ContactFormData) {
  return [
    `Telegram username: ${data.telegramUsername || '—'}`,
    `Сотрудники: ${data.employeeCount || '—'}`,
    `Язык сайта: ${data.language || '—'}`,
  ].join('\n')
}

async function sendToCRM(data: ContactFormData) {
  const crmKey = process.env.CRM_API_KEY?.trim()
  if (!crmKey) return false

  const crmUrl = (process.env.CRM_INTAKE_URL?.trim() || DEFAULT_CRM_INTAKE_URL).replace(/\/$/, '')
  const response = await fetch(crmUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-API-Key': crmKey },
    body: JSON.stringify({
      title: 'Заявка с сайта avenir.uz',
      contact_name: data.name,
      contact_phone: data.phone,
      source: 'website',
      notes: buildCrmNotes(data),
    }),
    signal: AbortSignal.timeout(CRM_REQUEST_TIMEOUT_MS),
  })

  if (!response.ok) {
    const responseText = await response.text().catch(() => '')
    throw new Error(`CRM intake failed with HTTP ${response.status}${responseText ? `: ${responseText}` : ''}`)
  }

  return true
}

export const runtime = 'nodejs'

export async function POST(request: Request) {
  const ip = clientIp(request)
  const retryAfter = rateLimit(ip)
  if (retryAfter !== null) {
    return NextResponse.json(
      { error: 'Too many requests' },
      { status: 429, headers: { 'Retry-After': String(retryAfter) } },
    )
  }

  const bodyText = await request.text()
  if (bodyText.length > MAX_BODY_BYTES) {
    return NextResponse.json({ error: 'Payload too large' }, { status: 413 })
  }

  let rawBody: unknown
  try {
    rawBody = JSON.parse(bodyText)
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  if (!rawBody || typeof rawBody !== 'object') {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
  }

  const payload = rawBody as Record<string, unknown>

  // Honeypot: odam bu maydonni ko'rmaydi. To'ldirilgan bo'lsa — bot.
  // Botga xato qaytarmaymiz, shunchaki hech narsa qilmaymiz.
  if (cleanString(payload.company, 200)) {
    return NextResponse.json({ ok: true, crm: 'skipped', delivered: 0, total: 0 })
  }

  const formData: ContactFormData = {
    name: cleanString(payload.name, MAX_LENGTHS.name),
    phone: cleanString(payload.phone, MAX_LENGTHS.phone),
    telegramUsername: cleanString(payload.telegramUsername, MAX_LENGTHS.telegramUsername),
    employeeCount: cleanString(payload.employeeCount, MAX_LENGTHS.employeeCount),
    language: cleanString(payload.language, 2),
  }

  // Aylanma («oborot») MAJBURIY EMAS: formada bu maydonda `required` yo'q va
  // brauzer uni bo'sh qoldirib yuborishga ruxsat beradi. Server esa uni talab
  // qilardi va 400 qaytarardi — odam «qaytadan urinib ko'ring» dan boshqa hech
  // narsa ko'rmasdi, lid esa na CRM ga, na Telegram ga yetib borardi.
  // Quyida `|| '—'` allaqachon bor, ya'ni bo'sh qiymat xabarni buzmaydi.
  if (!formData.name || !formData.phone || !formData.telegramUsername) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
  }

  if (!isValidPhone(formData.phone)) {
    return NextResponse.json({ error: 'Phone format is invalid' }, { status: 400 })
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN?.trim()
  const chatIds = parseChatIds(process.env.TELEGRAM_CHAT_IDS)
  const hasTelegramTargets = Boolean(botToken && chatIds.length > 0)
  const hasCrmTarget = Boolean(process.env.CRM_API_KEY?.trim())

  if (!hasTelegramTargets && !hasCrmTarget) {
    console.error('Contact form integrations are not configured')
    return NextResponse.json({ error: 'Server is not configured' }, { status: 500 })
  }

  // CRM ham, Telegram ham urinib ko'riladi. Ilgari CRM yiqilsa Telegram
  // bosqichiga umuman yetib borilmasdi va lid yo'qolardi.
  let crmStatus: 'created' | 'failed' | 'skipped' = 'skipped'
  let crmError: string | null = null

  if (hasCrmTarget) {
    try {
      await sendToCRM(formData)
      crmStatus = 'created'
    } catch (error) {
      crmStatus = 'failed'
      crmError = toErrorMessage(error)
      console.error('CRM intake failed:', crmError)
    }
  }

  const failedByChatId: Array<{ chatId: string; reason: string }> = []
  let delivered = 0

  if (hasTelegramTargets) {
    const message = buildTelegramMessage(formData)
    const telegramToken = botToken as string

    for (const chatId of chatIds) {
      try {
        await sendTelegramMessage(telegramToken, chatId, message)
        delivered += 1
      } catch (error) {
        failedByChatId.push({ chatId, reason: toErrorMessage(error) })
      }
    }
  }

  if (failedByChatId.length > 0) {
    console.error('Failed to deliver contact form to some Telegram recipients:', failedByChatId)
  }

  // Kamida bitta kanal ishlagan bo'lsa — lid yo'qolmadi, muvaffaqiyat.
  const anyDelivered = crmStatus === 'created' || delivered > 0

  if (!anyDelivered) {
    console.error('Contact form could not be delivered anywhere', { crmError, failedByChatId })
    return NextResponse.json({ error: 'Failed to deliver the request' }, { status: 502 })
  }

  return NextResponse.json({
    ok: true,
    crm: crmStatus,
    delivered,
    total: hasTelegramTargets ? chatIds.length : 0,
    telegramFailedRecipients: failedByChatId.map(item => item.chatId),
  })
}
