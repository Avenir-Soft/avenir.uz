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
  requestId: 64,
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
  /* Brauzer o'ylab topadigan bir martalik identifikator. CRM uni external_id
     sifatida oladi va shu id bilan kelgan takroriy so'rovdan dubl yasamaydi —
     javobda status: duplicate qaytadi. Tarmoq uzilib qayta yuborilganda
     menejer bitta lidni ikki marta ko'rmaydi. */
  requestId: string
}

type RateEntry = { hits: number[]; }
const rateBuckets = new Map<string, RateEntry>()

/* Ilova oldida nechta ISHONCHLI proksi turibdi. Dokploy (Traefik) — 1 ta.
   Oldiga CDN qo'yilsa (Cloudflare va shu kabi) — 2 qilib qo'ying. */
const TRUSTED_PROXY_HOPS = Math.max(1, Number(process.env.CONTACT_TRUSTED_PROXY_HOPS ?? 1))

/* X-Forwarded-For ning BIRINCHI elementini mijozning o'zi yozadi, ya'ni uni
   xohlagancha to'qib chiqarish mumkin edi: har so'rovda yangi «IP» — va
   chastota chegarasi butunlay chetlab o'tilardi (o'lchov: 10 ta soxta IP bilan
   10 tadan 10 tasi o'tib ketdi, chegara «10 daqiqada 5 ta» bo'lgani holda).
   Oxiridan sanaymiz: zanjirning oxirgi bo'g'inini bizning o'z proksimiz
   yozadi, uni mijoz almashtira olmaydi. */
function clientIp(request: Request) {
  const chain = (request.headers.get('x-forwarded-for') || '')
    .split(',')
    .map(part => part.trim())
    .filter(Boolean)

  if (chain.length) {
    const index = chain.length - TRUSTED_PROXY_HOPS
    return chain[index >= 0 ? index : 0]
  }

  /* Zanjir umuman yo'q — demak proksi ham yo'q. Bu holatda X-Real-IP dan
     boshqa signal qolmaydi (uni ham mijoz yuborishi mumkin, lekin proksisiz
     ishonchli manba umuman yo'q). */
  return request.headers.get('x-real-ip')?.trim() || 'unknown'
}

/** null — ruxsat; son — necha soniyadan keyin qayta urinish mumkin. Yozmaydi. */
function rateCheck(ip: string): number | null {
  const now = Date.now()
  const entry = rateBuckets.get(ip)
  if (!entry) return null
  entry.hits = entry.hits.filter(at => now - at < RATE_WINDOW_MS)

  const last = entry.hits[entry.hits.length - 1]
  if (last !== undefined && now - last < RATE_MIN_INTERVAL_MS) {
    return Math.ceil((RATE_MIN_INTERVAL_MS - (now - last)) / 1000)
  }
  if (entry.hits.length >= RATE_MAX_PER_WINDOW) {
    return Math.ceil((RATE_WINDOW_MS - (now - entry.hits[0])) / 1000)
  }
  return null
}

/* Urinishni FAQAT validatsiyadan o'tgandan keyin yozamiz. Ilgari yozuv eng
   boshida turardi: bo'sh aylanma tufayli 400 olgan odam maydonni to'ldirib
   qayta bosardi va 15 soniya o'tmagani uchun 429 ga tushardi — xabar esa
   ikkala holatda ham bir xil edi. Ya'ni o'z xatosini tuzatgan odam
   jazolanardi. Botlar uchun qimmat yo'l (CRM va Telegram) baribir yopiq:
   u faqat to'g'ri arizadan keyin ochiladi. */
function rateHit(ip: string) {
  const now = Date.now()
  const entry = rateBuckets.get(ip) ?? { hits: [] }
  entry.hits = entry.hits.filter(at => now - at < RATE_WINDOW_MS)
  entry.hits.push(now)
  rateBuckets.set(ip, entry)

  // Xotira o'smasligi uchun eskirgan yozuvlarni tozalab turamiz.
  if (rateBuckets.size > 5000) {
    for (const [key, value] of rateBuckets) {
      if (value.hits.every(at => now - at >= RATE_WINDOW_MS)) rateBuckets.delete(key)
    }
  }
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

  /* «Сотрудники кол-во» — eski nom: maydon aylanmaga aylangan, imzo esa
     qolib ketgan edi. Menejer lidning yagona saralash belgisini boshqa nom
     ostida ko'rar va yo e'tibor bermas, yo qaytadan so'rardi. */
  return [
    'Новая заявка с сайта avenir.uz',
    '',
    `Имя: ${data.name}`,
    `Номер телефона: ${data.phone}`,
    `Telegram username: ${data.telegramUsername || '—'}`,
    `Оборот: ${data.employeeCount || '—'}`,
    `Язык сайта: ${data.language || '—'}`,
    `Время: ${timestamp}`,
  ].join('\n')
}

/* AvenirOS lid kartochkasidagi «Ответы из формы» bloki. Uning hujjatida
   to'g'ridan-to'g'ri yozilgan: «Не склеивайте их в одну строку и не обрезайте:
   обрезанный хвост восстановить уже нельзя» — lending esa aynan shuni qilardi,
   hamma narsani bitta `notes` satriga yopishtirib. */
function buildFormAnswers(data: ContactFormData) {
  const answers: Array<{ q: string; a: string }> = []
  if (data.employeeCount) answers.push({ q: 'Оборот компании в месяц', a: data.employeeCount })
  return answers
}

/** 'created' — yangi lid; 'duplicate' — shu external_id allaqachon bor. */
async function sendToCRM(data: ContactFormData): Promise<'created' | 'duplicate'> {
  const crmKey = process.env.CRM_API_KEY?.trim()
  if (!crmKey) throw new Error('CRM key is missing')

  const crmUrl = (process.env.CRM_INTAKE_URL?.trim() || DEFAULT_CRM_INTAKE_URL).replace(/\/$/, '')
  const response = await fetch(crmUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-API-Key': crmKey },
    body: JSON.stringify({
      /* Ilgari sarlavha hammada bir xil edi — lidlar ro'yxatida ularni
         ajratib bo'lmasdi. */
      title: `Заявка с сайта avenir.uz — ${data.name}`,
      contact_name: data.name,
      contact_phone: data.phone,
      /* AvenirOS da Telegram uchun ALOHIDA maydon bor va kontakt aynan
         u bo'yicha topiladi yoki yaratiladi. Ilgari username `notes` ichida
         oddiy matn bo'lib yotardi va kontaktga hech qanday aloqasi yo'q edi. */
      contact_telegram: data.telegramUsername || undefined,
      source: 'website',
      form_name: 'avenir.uz · форма заявки',
      external_id: data.requestId || undefined,
      form_answers: buildFormAnswers(data),
      notes: `Язык сайта: ${data.language || '—'}`,
    }),
    signal: AbortSignal.timeout(CRM_REQUEST_TIMEOUT_MS),
  })

  if (!response.ok) {
    const responseText = await response.text().catch(() => '')
    throw new Error(`CRM intake failed with HTTP ${response.status}${responseText ? `: ${responseText}` : ''}`)
  }

  const body = (await response.json().catch(() => null)) as { status?: string } | null
  return body?.status === 'duplicate' ? 'duplicate' : 'created'
}

export const runtime = 'nodejs'

export async function POST(request: Request) {
  const ip = clientIp(request)
  const retryAfter = rateCheck(ip)
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
    requestId: cleanString(payload.requestId, MAX_LENGTHS.requestId),
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

  /* Ariza to'g'ri — endi urinishni chegaraga yozamiz. */
  rateHit(ip)

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
  let crmStatus: 'created' | 'duplicate' | 'failed' | 'skipped' = 'skipped'
  let crmError: string | null = null

  if (hasCrmTarget) {
    try {
      crmStatus = await sendToCRM(formData)
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
  const anyDelivered = crmStatus === 'created' || crmStatus === 'duplicate' || delivered > 0

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
