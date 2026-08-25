'use client'

import { useId, useState } from 'react'
import { useLanguage } from '@/components/language-provider'
import { SectionOrnaments } from '@/components/section-ornaments'

const UZ_PHONE_PREFIX = '+998'
// Xalqaro raqamlar ham qabul qilinadi: ilgari faqat +998 mask'iga tushgan
// raqam yuborilardi, ya'ni chet ellik mijoz formani to'ldira olmasdi.
const PHONE_PATTERN_SOURCE = String.raw`\+?[0-9][0-9 ()\-]{6,20}`

const MAX_LENGTHS = {
  name: 80,
  phone: 24,
  telegramUsername: 64,
  employeeCount: 6,
} as const

type GtagEvent = (command: 'event', eventName: string, params?: Record<string, unknown>) => void
type FbqEvent = (
  command: 'track' | 'trackCustom',
  eventName: string,
  params?: Record<string, unknown>,
) => void

function isGaDebugEnabled() {
  if (typeof window === 'undefined') return false

  const searchParams = new URLSearchParams(window.location.search)
  const queryValue = searchParams.get('ga_debug')
  if (queryValue === '1' || queryValue === 'true') return true

  const storedValue = window.localStorage.getItem('ga_debug')
  return storedValue === '1' || storedValue === 'true'
}

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
      debug_mode: isGaDebugEnabled(),
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

  if (!isUz) return input.slice(0, MAX_LENGTHS.phone)

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

const inputStyle = {
  // Maydonga o'z foni berildi: aks holda orqadagi bezak yulduzchalari
  // input ichidan ko'rinib turardi.
  backgroundColor: 'rgba(3, 24, 52, 0.55)',
  borderColor: 'rgba(201, 168, 76, 0.62)',
  color: '#F5F4F0',
  borderRadius: '4px',
} as const

const labelClass = 'mb-1.5 block text-xs uppercase tracking-[0.16em]'
const labelStyle = { color: 'rgba(240, 226, 190, 0.86)' } as const
const inputClass =
  'contact-input w-full border px-4 py-3 transition-colors placeholder:text-[rgba(245,244,240,0.58)]'

export function Contact() {
  const fieldId = useId()
  const [formData, setFormData] = useState({
    name: '',
    phone: UZ_PHONE_PREFIX,
    telegramUsername: '',
    employeeCount: '',
    // Honeypot: odam ko'rmaydi, bot to'ldiradi.
    company: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const { t, language } = useLanguage()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    setSubmitError('')

    if (name === 'phone') {
      setFormData(prev => ({ ...prev, phone: formatPhone(value) }))
      return
    }

    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    setIsSubmitting(true)
    setSubmitError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, language }),
      })

      if (!response.ok) throw new Error(`Contact form failed with ${response.status}`)

      trackLead({
        hasTelegram: Boolean(formData.telegramUsername.trim()),
        hasEmployees: Boolean(formData.employeeCount.trim()),
        language,
      })

      setSubmitted(true)
    } catch (error) {
      console.error(error)
      setSubmitError(t.contact.form.error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-shell-dark relative overflow-hidden py-24 px-6" style={{ backgroundColor: '#042147' }}>
      <SectionOrnaments tone="dark" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-12" aria-hidden="true">
          <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(201, 168, 76, 0.3)' }} />
          <span className="text-2xl" style={{ color: '#C9A84C', opacity: 0.6 }}>◇</span>
          <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(201, 168, 76, 0.3)' }} />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="order-1 md:col-start-1 md:row-start-1">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4" style={{ color: '#C9A84C' }}>
              {t.contact.title}
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: 'rgba(245, 244, 240, 0.78)' }}>
              {t.contact.description}
            </p>
          </div>

          <div className="order-2 md:col-start-2 md:row-start-1 md:row-span-2">
            {submitted ? (
              <div
                className="contact-success-card animate-scale-in relative flex h-full min-h-82.5 items-center justify-center overflow-hidden rounded-[1.6rem] px-6 py-10 text-center sm:px-10"
                role="status"
                style={{
                  backgroundColor: 'rgba(8, 45, 90, 0.86)',
                  border: '1px solid rgba(240, 218, 146, 0.36)',
                  boxShadow: '0 24px 44px -24px rgba(4, 33, 71, 0.78)',
                }}
              >
                <div className="contact-success-content" style={{ color: '#F5F4F0' }}>
                  <div
                    className="contact-success-seal mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full"
                    style={{
                      background: 'linear-gradient(138deg, #f6de9f 0%, #dbb86a 42%, #bd923c 100%)',
                      border: '1px solid rgba(240, 218, 146, 0.88)',
                    }}
                  >
                    <svg
                      viewBox="0 0 32 32"
                      className="contact-success-check h-9 w-9"
                      aria-hidden="true"
                      fill="none"
                      style={{ color: '#042147' }}
                    >
                      <path
                        d="M7.5 16.5L13.5 22.5L24.5 11.5"
                        stroke="currentColor"
                        strokeWidth="2.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="mb-5 flex items-center justify-center gap-3" aria-hidden="true">
                    <span className="h-px w-10" style={{ backgroundColor: 'rgba(240, 218, 146, 0.48)' }} />
                    <span className="text-sm" style={{ color: 'rgba(240, 218, 146, 0.84)' }}>◇</span>
                    <span className="h-px w-10" style={{ backgroundColor: 'rgba(240, 218, 146, 0.48)' }} />
                  </div>

                  <h3 className="contact-success-title text-3xl font-serif font-bold sm:text-4xl">
                    {t.contact.successTitle}
                  </h3>
                  <p
                    className="contact-success-message mx-auto mt-3 max-w-md text-base leading-relaxed sm:text-lg"
                    style={{ color: 'rgba(245, 244, 240, 0.92)' }}
                  >
                    {t.contact.successMessage}
                  </p>

                  <div className="contact-success-sparkles mt-7" aria-hidden="true">
                    <span className="contact-success-spark" />
                    <span className="contact-success-spark" />
                    <span className="contact-success-spark" />
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className={labelClass} style={labelStyle} htmlFor={`${fieldId}-name`}>
                    {t.contact.form.name}
                  </label>
                  <input
                    id={`${fieldId}-name`}
                    type="text"
                    name="name"
                    autoComplete="name"
                    maxLength={MAX_LENGTHS.name}
                    placeholder={t.contact.form.name}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label className={labelClass} style={labelStyle} htmlFor={`${fieldId}-phone`}>
                    {t.contact.form.phone}
                  </label>
                  <input
                    id={`${fieldId}-phone`}
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    maxLength={MAX_LENGTHS.phone}
                    placeholder="+998 (99) 123 45 67"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    inputMode="tel"
                    pattern={PHONE_PATTERN_SOURCE}
                    title="+998 (99) 123 45 67"
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label className={labelClass} style={labelStyle} htmlFor={`${fieldId}-telegram`}>
                    {t.contact.form.telegram}
                  </label>
                  <input
                    id={`${fieldId}-telegram`}
                    type="text"
                    name="telegramUsername"
                    autoComplete="username"
                    maxLength={MAX_LENGTHS.telegramUsername}
                    placeholder="@username"
                    value={formData.telegramUsername}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label className={labelClass} style={labelStyle} htmlFor={`${fieldId}-employees`}>
                    {t.contact.form.employeesCount}
                  </label>
                  <input
                    id={`${fieldId}-employees`}
                    type="number"
                    name="employeeCount"
                    maxLength={MAX_LENGTHS.employeeCount}
                    placeholder="10"
                    value={formData.employeeCount}
                    onChange={handleChange}
                    required
                    min="1"
                    max="100000"
                    inputMode="numeric"
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>

                {/* Honeypot — ekrandan tashqarida, botlar uchun tuzoq. */}
                <div className="contact-honeypot" aria-hidden="true">
                  <label htmlFor={`${fieldId}-company`}>Company</label>
                  <input
                    id={`${fieldId}-company`}
                    type="text"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  className="btn-avenir btn-avenir-on-dark w-full px-8 py-3 text-lg disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? t.contact.form.submitting : t.contact.form.submit}
                </button>

                {submitError ? (
                  <p className="text-sm text-center" role="alert" style={{ color: '#f7dfa6' }}>
                    {submitError}
                  </p>
                ) : null}

                <p className="text-sm text-center" style={{ color: 'rgba(245, 244, 240, 0.68)' }}>
                  {t.contact.form.responseTime}
                </p>
              </form>
            )}
          </div>

          <div className="order-3 space-y-8 md:col-start-1 md:row-start-2">
            <div className="space-y-6 pt-8" style={{ borderTop: '1px solid rgba(201, 168, 76, 0.2)' }}>
              <div>
                <p className="text-sm uppercase tracking-widest mb-2" style={{ color: 'rgba(232, 201, 122, 0.92)' }}>
                  {t.contact.labels.email}
                </p>
                <a href="mailto:info@avenir.uz" className="text-lg transition-colors" style={{ color: '#F5F4F0' }}>
                  info@avenir.uz
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-widest mb-2" style={{ color: 'rgba(232, 201, 122, 0.92)' }}>
                  {t.contact.labels.phone}
                </p>
                <a href="tel:+998935298807" className="text-lg transition-colors" style={{ color: '#F5F4F0' }}>
                  +998 93 529 88 07
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-widest mb-2" style={{ color: 'rgba(232, 201, 122, 0.92)' }}>
                  {t.contact.labels.location}
                </p>
                <p style={{ color: '#F5F4F0' }}>{t.contact.locationValue}</p>
              </div>
            </div>

            <div className="flex gap-6 pt-4">
              <a
                href="https://www.instagram.com/avenir.uz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg transition-colors"
                style={{ color: '#E8C97A' }}
              >
                {t.contact.socialLinks.instagram}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
