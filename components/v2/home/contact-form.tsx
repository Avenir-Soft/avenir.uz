'use client'

/* Maket formasi (design/v2/index.html, #aloqa) + eski jonli mantiq:
   telefon formati, honeypot, /api/contact, GA/Pixel «Lead» hodisasi.
   API maydon nomlari o'zgarmagan: name, phone, telegramUsername,
   employeeCount (endi "oylik aylanma" ma'nosida), language, company. */

import Link from 'next/link'
import { useState } from 'react'
import { useLanguage } from '@/components/language-provider'
import { tv, tva } from '@/lib/i18n-v2'
import type { Language } from '@/lib/languages'
import { localizedPath } from '@/lib/paths'

const UZ_PHONE_PREFIX = '+998'
const PHONE_MAX = 24

type GtagEvent = (...args: unknown[]) => void
type FbqEvent = (...args: unknown[]) => void

function trackLead(params: { hasTelegram: boolean; hasEmployees: boolean; language: string }) {
  if (typeof window === 'undefined') return
  const gtag = (window as Window & { gtag?: GtagEvent }).gtag
  if (typeof gtag === 'function') {
    gtag('event', 'lead_submit', {
      event_category: 'engagement',
      event_label: 'contact_form',
      lead_type: 'contact_form',
      has_telegram: params.hasTelegram ? 1 : 0,
      has_employees: params.hasEmployees ? 1 : 0,
      ui_language: params.language,
    })
  }
  const fbq = (window as Window & { fbq?: FbqEvent }).fbq
  if (typeof fbq === 'function') {
    fbq('track', 'Lead', {
      content_name: 'contact_form',
      content_category: 'engagement',
      has_telegram: params.hasTelegram ? 1 : 0,
      has_employees: params.hasEmployees ? 1 : 0,
      ui_language: params.language,
    })
  }
}

/** +998 raqamini o'qishga qulay ko'rinishga keltiradi, boshqa davlat kodiga tegmaydi. */
function formatPhone(input: string) {
  const trimmed = input.replace(/[^\d+]/g, '')
  const isUz = trimmed.startsWith('+998') || trimmed.startsWith('998') || !trimmed.startsWith('+')
  if (!isUz) return input.slice(0, PHONE_MAX)
  const digitsOnly = trimmed.replace(/\D/g, '')
  const nationalDigits = (digitsOnly.startsWith('998') ? digitsOnly.slice(3) : digitsOnly).slice(0, 9)
  const operatorCode = nationalDigits.slice(0, 2)
  const firstBlock = nationalDigits.slice(2, 5)
  const secondBlock = nationalDigits.slice(5, 7)
  const thirdBlock = nationalDigits.slice(7, 9)
  let formatted = UZ_PHONE_PREFIX
  if (operatorCode) {
    formatted += ` (${operatorCode}`
    if (operatorCode.length === 2) formatted += ')'
  }
  if (firstBlock) formatted += ` ${firstBlock}`
  if (secondBlock) formatted += ` ${secondBlock}`
  if (thirdBlock) formatted += ` ${thirdBlock}`
  return formatted
}

export function V2ContactForm({ lang }: { lang: Language }) {
  const { t } = useLanguage()
  const [form, setForm] = useState({
    name: '',
    phone: UZ_PHONE_PREFIX + ' ',
    telegramUsername: '',
    employeeCount: '',
    company: '' /* honeypot */,
  })
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  /* Server yiqilgan holatda odam qo'lsiz qolmasin: xabar yonida Telegram. */
  const [offerTelegram, setOfferTelegram] = useState(false)
  const [done, setDone] = useState(false)

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setError('')
    if (name === 'phone') {
      setForm(prev => ({ ...prev, phone: formatPhone(value) }))
      return
    }
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const el = e.currentTarget
    if (!el.checkValidity()) {
      el.reportValidity()
      return
    }
    setSending(true)
    setError('')
    setOfferTelegram(false)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, language: lang }),
      })
      /* Ilgari bu yerda faqat `response.ok` tekshirilardi va odam 400, 429,
         502 va tarmoq uzilishida BIR XIL «qaytadan urinib ko'ring» ni ko'rardi:
         o'zi xato qildimi yoki server yiqildimi — ajratib bo'lmasdi. */
      if (!response.ok) {
        if (response.status === 429) {
          const sec = Number(response.headers.get('Retry-After')) || 15
          setError(
            tv(lang, "Juda tez-tez yuborilyapti. {n} soniyadan keyin qayta urinib ko'ring")
              .replace('{n}', String(sec)),
          )
        } else if (response.status === 400 || response.status === 413) {
          setError(tv(lang, "Maydonlarni tekshiring: telefon raqami yoki majburiy maydon to'ldirilmagan"))
        } else {
          setError(tv(lang, "Yuborib bo'lmadi. Bizga yozing"))
          setOfferTelegram(true)
        }
        setSending(false)
        return
      }
      trackLead({
        hasTelegram: Boolean(form.telegramUsername.trim()),
        hasEmployees: Boolean(form.employeeCount.trim()),
        language: lang,
      })
      setDone(true)
    } catch (err) {
      /* Bu yerga faqat tarmoq uzilishi tushadi — server javob bergan holatlar
         yuqorida ajratilgan. Odamga yagona ishlaydigan yo'lni ko'rsatamiz. */
      console.error(err)
      setError(t.contact.form.error)
      setOfferTelegram(true)
    } finally {
      setSending(false)
    }
  }

  if (done) {
    return (
      <div className="form sent" role="status" aria-live="polite">
        <div className="sent__s" aria-hidden="true">
          <span className="sent__rip" />
          <span className="sent__rip sent__rip--2" />
          <span className="sent__m">
            {/* Kirish animatsiyasidagi belgi: to'rt o'q, uchlarida romblar,
                markazda botiq yulduz — ustiga tasdiq belgisi chiziladi. */}
            <svg viewBox="0 0 200 200" fill="none">
              <line className="ax" x1="100" y1="100" x2="100" y2="24" />
              <line className="ax" x1="100" y1="100" x2="176" y2="100" />
              <line className="ax" x1="100" y1="100" x2="100" y2="176" />
              <line className="ax" x1="100" y1="100" x2="24" y2="100" />
              <rect className="cap" x="95.5" y="19.5" width="9" height="9" transform="rotate(45 100 24)" />
              <rect className="cap" x="171.5" y="95.5" width="9" height="9" transform="rotate(45 176 100)" />
              <rect className="cap" x="95.5" y="171.5" width="9" height="9" transform="rotate(45 100 176)" />
              <rect className="cap" x="19.5" y="95.5" width="9" height="9" transform="rotate(45 24 100)" />
              <path className="st" d="M100 42 Q100 100 158 100 Q100 100 100 158 Q100 100 42 100 Q100 100 100 42 Z" />
              <path className="tick" d="M78 100 L94 116 L124 86" />
            </svg>
          </span>
        </div>
        <p className="sent__t">{t.contact.successTitle}</p>
        <p className="sent__p">{t.contact.successMessage}</p>
      </div>
    )
  }

  return (
    <form className="form" onSubmit={submit} noValidate>
      <div className="field">
        <label htmlFor="fn">{tv(lang, 'Ismingiz')}</label>
        <input
          id="fn"
          name="name"
          type="text"
          placeholder={tva(lang, 'Ism familiya')}
          required
          maxLength={80}
          autoComplete="name"
          value={form.name}
          onChange={change}
        />
      </div>
      <div className="field">
        <label htmlFor="fp">{tv(lang, 'Telefon raqam')}</label>
        <input
          id="fp"
          name="phone"
          type="tel"
          required
          minLength={9}
          autoComplete="tel"
          value={form.phone}
          onChange={change}
        />
      </div>
      <div className="field">
        <label htmlFor="ft">{tv(lang, 'Telegram username')}</label>
        <input
          id="ft"
          name="telegramUsername"
          type="text"
          placeholder={tva(lang, '@username')}
          required
          maxLength={64}
          value={form.telegramUsername}
          onChange={change}
        />
      </div>
      <div className="field">
        <label htmlFor="fo">{tv(lang, 'Aylanmangiz')}</label>
        <input
          id="fo"
          name="employeeCount"
          type="text"
          placeholder={tva(lang, 'Masalan: oyiga 300 mln')}
          maxLength={32}
          value={form.employeeCount}
          onChange={change}
        />
      </div>

      {/* Honeypot: odam ko'rmaydi, bot to'ldiradi */}
      <input
        name="company"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={form.company}
        onChange={change}
        style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
      />

      <button className="btn btn--w" type="submit" disabled={sending}>
        {sending ? tv(lang, 'Yuborilmoqda…') : tv(lang, 'Xabar yuborish')}{' '}
        <span className="btn__ar">→</span>
      </button>
      {/* Rozilik tugmaning yonida turishi kerak: forma ism, telefon, Telegram
          va aylanmani yig'adi va ularni CRM bilan Telegram ga uzatadi, ya'ni
          bu shaxsiy ma'lumotlarga ishlov berish. Maxfiylik siyosatiga havola
          shu yerda — podvaldagi kichkina qatorda emas. */}
      <p className="form__n form__c">
        {tv(lang, "Ariza yuborish orqali siz shaxsiy ma'lumotlaringizni qayta ishlashga rozilik bildirasiz")}
        {' · '}
        <Link href={localizedPath(lang, '/privacy')}>{tv(lang, 'Maxfiylik siyosati')}</Link>
      </p>
      {error ? (
        <p className="form__n form__c" role="alert" style={{ color: '#F87171' }}>
          {error}
          {offerTelegram ? (
            <>
              {' · '}
              <a href="https://t.me/avenir_uz" target="_blank" rel="noopener noreferrer">
                {tv(lang, 'Telegram')}
              </a>
            </>
          ) : null}
        </p>
      ) : (
        <p className="form__n">{tv(lang, '24 soat ichida javob beramiz')}</p>
      )}
    </form>
  )
}
