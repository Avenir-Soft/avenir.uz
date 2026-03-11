'use client'

import { useState } from 'react'
import { useLanguage } from '@/components/language-provider'
import { SectionOrnaments } from '@/components/section-ornaments'

const UZ_PHONE_PREFIX = '+998'
const UZ_PHONE_PATTERN_SOURCE = String.raw`\+998 \(\d{2}\) \d{3} \d{2} \d{2}`

type GtagEvent = (command: 'event', eventName: string, params?: Record<string, unknown>) => void

function trackLeadSubmit(params: { hasCompany: boolean; hasEmail: boolean; hasProject: boolean; language: string }) {
  if (typeof window === 'undefined') return

  const gtag = (window as Window & { gtag?: GtagEvent }).gtag
  if (typeof gtag !== 'function') return

  gtag('event', 'lead_submit', {
    event_category: 'engagement',
    event_label: 'contact_form',
    lead_type: 'contact_form',
    has_company: params.hasCompany ? 1 : 0,
    has_email: params.hasEmail ? 1 : 0,
    has_project: params.hasProject ? 1 : 0,
    ui_language: params.language,
  })
}

function formatUzPhone(input: string) {
  const digitsOnly = input.replace(/\D/g, '')
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

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: UZ_PHONE_PREFIX,
    project: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const { t, language } = useLanguage()

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target

    setSubmitError('')

    if (name === 'phone') {
      setFormData(prev => ({ ...prev, phone: formatUzPhone(value) }))
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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit contact form')
      }

      trackLeadSubmit({
        hasCompany: Boolean(formData.company.trim()),
        hasEmail: Boolean(formData.email.trim()),
        hasProject: Boolean(formData.project.trim()),
        language,
      })

      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: UZ_PHONE_PREFIX,
          project: '',
        })
      }, 5000)
    } catch (error) {
      console.error(error)
      setSubmitError('Не удалось отправить заявку. Попробуйте ещё раз.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-shell-dark relative overflow-hidden py-24 px-6" style={{ backgroundColor: '#042147' }}>
      <SectionOrnaments tone="dark" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(201, 168, 76, 0.3)' }} />
          <span className="text-2xl" style={{ color: '#C9A84C', opacity: 0.6 }}>◇</span>
          <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(201, 168, 76, 0.3)' }} />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4" style={{ color: '#C9A84C' }}>
                {t.contact.title}
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: 'rgba(245, 244, 240, 0.7)' }}>
                {t.contact.description}
              </p>
            </div>

            <div className="space-y-6 pt-8" style={{ borderTop: '1px solid rgba(201, 168, 76, 0.2)' }}>
              <div>
                <p className="text-sm uppercase tracking-widest mb-2" style={{ color: 'rgba(201, 168, 76, 0.6)' }}>
                  {t.contact.labels.email}
                </p>
                <a
                  href="mailto:info@avenir.uz"
                  className="text-lg transition-colors"
                  style={{ color: '#F5F4F0' }}
                >
                  info@avenir.uz
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-widest mb-2" style={{ color: 'rgba(201, 168, 76, 0.6)' }}>
                  {t.contact.labels.phone}
                </p>
                <a
                  href="tel:+998712345678"
                  className="text-lg transition-colors"
                  style={{ color: '#F5F4F0' }}
                >
                  +998 93 529 88 07
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-widest mb-2" style={{ color: 'rgba(201, 168, 76, 0.6)' }}>
                  {t.contact.labels.location}
                </p>
                <p style={{ color: '#F5F4F0' }}>{t.contact.locationValue}</p>
              </div>
            </div>

            <div className="flex gap-6 pt-4">
              <a href="#" className="text-lg transition-colors" style={{ color: '#C9A84C' }}>
                {t.contact.socialLinks.linkedin}
              </a>
              <a href="#" className="text-lg transition-colors" style={{ color: '#C9A84C' }}>
                {t.contact.socialLinks.twitter}
              </a>
              <a
                href="https://www.instagram.com/avenir.uz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg transition-colors"
                style={{ color: '#C9A84C' }}
              >
                {t.contact.socialLinks.instagram}
              </a>
            </div>
          </div>

          <div>
            {submitted ? (
              <div
                className="contact-success-card animate-scale-in relative flex h-full min-h-82.5 items-center justify-center overflow-hidden rounded-[1.6rem] px-6 py-10 text-center sm:px-10"
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

                  <div className="mb-5 flex items-center justify-center gap-3">
                    <span className="h-px w-10" style={{ backgroundColor: 'rgba(240, 218, 146, 0.48)' }} />
                    <span className="text-sm" style={{ color: 'rgba(240, 218, 146, 0.84)' }}>◇</span>
                    <span className="h-px w-10" style={{ backgroundColor: 'rgba(240, 218, 146, 0.48)' }} />
                  </div>

                  <h3 className="contact-success-title text-3xl font-serif font-bold sm:text-4xl">
                    {t.contact.successTitle || 'Спасибо!'}
                  </h3>
                  <p
                    className="contact-success-message mx-auto mt-3 max-w-md text-base leading-relaxed sm:text-lg"
                    style={{ color: 'rgba(245, 244, 240, 0.92)' }}
                  >
                    {t.contact.successMessage || 'Мы получили ваше сообщение и скоро свяжемся с вами.'}
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
                  <input
                    type="text"
                    name="name"
                    placeholder={t.contact.form.name}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border transition-colors"
                    style={{
                      borderColor: 'rgba(201, 168, 76, 0.3)',
                      color: '#F5F4F0',
                      borderRadius: '4px',
                    }}
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder={t.contact.form.phone}
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    inputMode="numeric"
                    pattern={UZ_PHONE_PATTERN_SOURCE}
                    title="+998 (99) 999 99 99"
                    className="w-full px-4 py-3 bg-transparent border transition-colors"
                    style={{
                      borderColor: 'rgba(201, 168, 76, 0.3)',
                      color: '#F5F4F0',
                      borderRadius: '4px',
                    }}
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder={t.contact.form.company}
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border transition-colors"
                    style={{
                      borderColor: 'rgba(201, 168, 76, 0.3)',
                      color: '#F5F4F0',
                      borderRadius: '4px',
                    }}
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder={t.contact.form.email}
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border transition-colors"
                    style={{
                      borderColor: 'rgba(201, 168, 76, 0.3)',
                      color: '#F5F4F0',
                      borderRadius: '4px',
                    }}
                  />
                </div>

                <div>
                  <textarea
                    name="project"
                    placeholder={t.contact.form.project}
                    value={formData.project}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-transparent border transition-colors resize-none"
                    style={{
                      borderColor: 'rgba(201, 168, 76, 0.3)',
                      color: '#F5F4F0',
                      borderRadius: '4px',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  className="btn-avenir btn-avenir-on-dark w-full px-8 py-3 text-lg disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? 'Отправка...' : t.contact.form.submit}
                </button>

                {submitError ? (
                  <p className="text-sm text-center" style={{ color: '#f4d68e' }}>
                    {submitError}
                  </p>
                ) : null}

                <p className="text-sm text-center" style={{ color: 'rgba(245, 244, 240, 0.5)' }}>
                  {t.contact.form.responseTime}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
