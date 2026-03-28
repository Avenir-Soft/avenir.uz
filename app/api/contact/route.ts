import { NextResponse } from 'next/server'

const UZ_PHONE_PATTERN = /^\+998 \(\d{2}\) \d{3} \d{2} \d{2}$/
const TELEGRAM_API_BASE = (process.env.TELEGRAM_API_BASE ?? 'https://api.telegram.org').replace(/\/$/, '')
const TELEGRAM_REQUEST_TIMEOUT_MS = Number(process.env.TELEGRAM_REQUEST_TIMEOUT_MS ?? 10_000)
const TELEGRAM_RETRY_COUNT = Number(process.env.TELEGRAM_RETRY_COUNT ?? 2)

type TelegramSendMessageResponse = {
  ok: boolean
  description?: string
}

function cleanString(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

function parseChatIds(source: string | undefined) {
  if (!source) return []
  return source
    .split(/[,;\s]+/)
    .map(item => item.trim())
    .filter(Boolean)
}

function toErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message
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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          disable_web_page_preview: true,
        }),
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
        const reason = payload?.description ?? `HTTP ${response.status}`
        throw new Error(reason)
      }

      return
    } catch (error) {
      lastError = error
      if (attempt < TELEGRAM_RETRY_COUNT) {
        await sleep(300 * (attempt + 1))
      }
    }
  }

  throw new Error(`Telegram sendMessage failed for chat "${chatId}": ${toErrorMessage(lastError)}`)
}

function buildTelegramMessage(data: {
  name: string
  phone: string
  telegramUsername: string
  employeeCount: string
  annualTurnover: string
}) {
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
    `Годовой оборот: ${data.annualTurnover || '—'}`,
    `Время: ${timestamp}`,
  ].join('\n')
}

const TURNOVER_TO_VALUE: Record<string, number> = {
  '$10k - $100k': 55_000,
  '$100k - $1m': 550_000,
  '$1m - < $5m': 3_000_000,
}

async function sendToCRM(data: {
  name: string
  phone: string
  telegramUsername: string
  employeeCount: string
  annualTurnover: string
}) {
  const crmUrl = process.env.CRM_INTAKE_URL
  const crmKey = process.env.CRM_API_KEY
  if (!crmUrl || !crmKey) return

  const notes = [
    `Сотрудники: ${data.employeeCount}`,
    `Годовой оборот: ${data.annualTurnover}`,
  ].join('\n')

  try {
    await fetch(crmUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': crmKey,
      },
      body: JSON.stringify({
        contact_name: data.name,
        contact_phone: data.phone,
        contact_telegram: data.telegramUsername,
        source: 'website',
        value_estimate: TURNOVER_TO_VALUE[data.annualTurnover] ?? 0,
        notes,
      }),
      signal: AbortSignal.timeout(10_000),
    })
  } catch (error) {
    console.error('CRM intake failed:', error instanceof Error ? error.message : error)
  }
}

export const runtime = 'nodejs'

export async function POST(request: Request) {
  let rawBody: unknown
  try {
    rawBody = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  if (!rawBody || typeof rawBody !== 'object') {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
  }

  const payload = rawBody as Record<string, unknown>
  const name = cleanString(payload.name)
  const phone = cleanString(payload.phone)
  const telegramUsername = cleanString(payload.telegramUsername)
  const employeeCount = cleanString(payload.employeeCount)
  const annualTurnover = cleanString(payload.annualTurnover)

  if (!name || !phone || !telegramUsername || !employeeCount || !annualTurnover) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
  }

  if (!UZ_PHONE_PATTERN.test(phone)) {
    return NextResponse.json({ error: 'Phone format is invalid' }, { status: 400 })
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatIds = parseChatIds(process.env.TELEGRAM_CHAT_IDS)

  if (!botToken || chatIds.length === 0) {
    console.error('Contact form Telegram config is missing')
    return NextResponse.json({ error: 'Server is not configured' }, { status: 500 })
  }

  const message = buildTelegramMessage({
    name,
    phone,
    telegramUsername,
    employeeCount,
    annualTurnover,
  })

  const failedByChatId: Array<{ chatId: string; reason: string }> = []

  for (const chatId of chatIds) {
    try {
      await sendTelegramMessage(botToken, chatId, message)
    } catch (error) {
      failedByChatId.push({
        chatId,
        reason: toErrorMessage(error),
      })
    }
  }

  if (failedByChatId.length > 0) {
    console.error('Failed to deliver contact form to all Telegram recipients:', failedByChatId)
    return NextResponse.json(
      {
        error: 'Failed to deliver message to all recipients',
        failedRecipients: failedByChatId.map(item => item.chatId),
      },
      { status: 502 },
    )
  }

  // Fire-and-forget: send lead to CRM (don't block response)
  sendToCRM({ name, phone, telegramUsername, employeeCount, annualTurnover }).catch(() => {})

  return NextResponse.json({ ok: true, delivered: chatIds.length, total: chatIds.length })
}
