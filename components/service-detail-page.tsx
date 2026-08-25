'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, CheckCircle2, Clock3, Layers3, Sparkles } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { Navbar } from '@/components/navbar'
import { SectionOrnaments } from '@/components/section-ornaments'
import { type Language } from '@/lib/languages'
import { localizedPath } from '@/lib/paths'
import type { ServiceCard, ServiceLocalizedContent } from '@/lib/service-catalog'

const pageCopy: Record<
  Language,
  {
    home: string
    services: string
    backToServices: string
    cta: string
    relatedTitle: string
    relatedSubtitle: string
    viewDetails: string
  }
> = {
  uz: {
    home: 'Bosh sahifa',
    services: 'Xizmatlar',
    backToServices: 'Barcha xizmatlarga qaytish',
    cta: 'Loyihani muhokama qilish',
    relatedTitle: 'Boshqa xizmatlar',
    relatedSubtitle: 'Sizga mos bo`lishi mumkin bo`lgan yo`nalishlar',
    viewDetails: 'Batafsil',
  },
  ru: {
    home: 'Главная',
    services: 'Услуги',
    backToServices: 'Вернуться ко всем услугам',
    cta: 'Обсудить проект',
    relatedTitle: 'Другие услуги',
    relatedSubtitle: 'Направления, которые могут подойти вашему бизнесу',
    viewDetails: 'Подробнее',
  },
  en: {
    home: 'Home',
    services: 'Services',
    backToServices: 'Back to all services',
    cta: 'Discuss your project',
    relatedTitle: 'Other services',
    relatedSubtitle: 'Related directions that may fit your product goals',
    viewDetails: 'View details',
  },
}

interface ServiceDetailPageProps {
  content: ServiceLocalizedContent
  relatedServices: ServiceCard[]
}

export function ServiceDetailPage({ content, relatedServices }: ServiceDetailPageProps) {
  const { language } = useLanguage()
  const copy = pageCopy[language]
  const homeHref = localizedPath(language)

  return (
    <main style={{ backgroundColor: '#F5F4F0' }}>
      <Navbar />

      <section
        className="section-shell-dark relative overflow-hidden px-6 pb-20 pt-28 md:pt-32"
        style={{ backgroundColor: '#042147' }}
      >
        <SectionOrnaments tone="dark" />

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 14% 18%, rgba(201, 168, 76, 0.16) 0%, rgba(201, 168, 76, 0) 45%), radial-gradient(circle at 86% 72%, rgba(245, 244, 240, 0.09) 0%, rgba(245, 244, 240, 0) 44%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-7 flex items-center gap-2 text-sm" style={{ color: 'rgba(245, 244, 240, 0.64)' }}>
            <Link href={homeHref} className="transition-colors hover:text-[#F5F4F0]">
              {copy.home}
            </Link>
            <span>/</span>
            <Link href={`${homeHref}#services`} className="transition-colors hover:text-[#F5F4F0]">
              {copy.services}
            </Link>
            <span>/</span>
            <span style={{ color: '#F5F4F0' }}>{content.title}</span>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div>
              <Link
                href={`${homeHref}#services`}
                className="mb-6 inline-flex items-center gap-2 text-sm transition-colors"
                style={{ color: 'rgba(232, 201, 122, 0.88)' }}
              >
                <ArrowLeft size={16} />
                <span>{copy.backToServices}</span>
              </Link>

              <h1 className="text-5xl font-serif font-bold leading-tight md:text-6xl" style={{ color: '#C9A84C' }}>
                {content.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed" style={{ color: 'rgba(245, 244, 240, 0.78)' }}>
                {content.intro}
              </p>

              <Link href={`${homeHref}#contact`} className="btn-avenir btn-avenir-on-dark mt-8 inline-flex px-8 py-3 text-base">
                {copy.cta}
              </Link>
            </div>

            <article
              className="rounded-2xl p-6 md:p-7"
              style={{
                background: 'linear-gradient(165deg, rgba(245, 244, 240, 0.08) 0%, rgba(245, 244, 240, 0.03) 100%)',
                border: '1px solid rgba(201, 168, 76, 0.35)',
                boxShadow: '0 16px 34px -24px rgba(4, 33, 71, 0.86)',
              }}
            >
              <div className="flex items-center gap-2 text-sm uppercase tracking-[0.2em]" style={{ color: '#E8C97A' }}>
                <Clock3 size={16} />
                <span>{content.timelineLabel}</span>
              </div>
              <p className="mt-3 text-3xl font-serif font-semibold" style={{ color: '#F5F4F0' }}>
                {content.timeline}
              </p>

              <div className="mt-7 h-px" style={{ backgroundColor: 'rgba(245, 244, 240, 0.14)' }} />

              <div className="mt-7 flex items-center gap-2 text-sm uppercase tracking-[0.2em]" style={{ color: '#E8C97A' }}>
                <Layers3 size={16} />
                <span>{content.stackLabel}</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {content.stack.map(tech => (
                  <span
                    key={tech}
                    className="rounded-full px-3 py-1.5 text-xs font-medium"
                    style={{
                      backgroundColor: 'rgba(245, 244, 240, 0.08)',
                      border: '1px solid rgba(245, 244, 240, 0.2)',
                      color: '#F5F4F0',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="service-details" className="section-shell relative overflow-hidden px-6 py-20">
        <SectionOrnaments tone="light" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <article
              className="rounded-2xl p-6 md:p-7"
              style={{
                background: 'linear-gradient(160deg, rgba(255, 255, 255, 0.9) 0%, rgba(245, 244, 240, 0.86) 100%)',
                border: '1px solid rgba(4, 33, 71, 0.12)',
                boxShadow: '0 16px 32px -24px rgba(4, 33, 71, 0.5)',
              }}
            >
              <div className="mb-5 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em]" style={{ color: '#7E6B2C' }}>
                <Sparkles size={16} />
                <span>{content.outcomesLabel}</span>
              </div>
              <ul className="space-y-4">
                {content.outcomes.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: '#C9A84C' }} />
                    <span className="text-sm leading-relaxed md:text-base" style={{ color: 'rgba(4, 33, 71, 0.76)' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </article>

            <article
              className="rounded-2xl p-6 md:p-7"
              style={{
                background: 'linear-gradient(160deg, rgba(255, 255, 255, 0.9) 0%, rgba(245, 244, 240, 0.86) 100%)',
                border: '1px solid rgba(4, 33, 71, 0.12)',
                boxShadow: '0 16px 32px -24px rgba(4, 33, 71, 0.5)',
              }}
            >
              <div className="mb-5 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em]" style={{ color: '#7E6B2C' }}>
                <Layers3 size={16} />
                <span>{content.includedLabel}</span>
              </div>
              <ul className="space-y-4">
                {content.included.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: '#042147' }} />
                    <span className="text-sm leading-relaxed md:text-base" style={{ color: 'rgba(4, 33, 71, 0.76)' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section-shell relative overflow-hidden px-6 pb-24">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.25em]" style={{ color: 'rgba(4, 33, 71, 0.56)' }}>
              {copy.services}
            </p>
            <h2 className="text-4xl font-serif font-bold md:text-5xl" style={{ color: '#042147' }}>
              {copy.relatedTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed" style={{ color: 'rgba(4, 33, 71, 0.74)' }}>
              {copy.relatedSubtitle}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {relatedServices.map(item => {
              return (
                <Link
                  key={item.slug}
                  href={localizedPath(language, `/services/${item.slug}`)}
                  className="group rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1"
                  style={{
                    background: 'linear-gradient(160deg, rgba(255, 255, 255, 0.9) 0%, rgba(245, 244, 240, 0.86) 100%)',
                    border: '1px solid rgba(4, 33, 71, 0.12)',
                    boxShadow: '0 14px 30px -24px rgba(4, 33, 71, 0.5)',
                  }}
                >
                  <h3 className="text-2xl font-serif font-semibold" style={{ color: '#042147' }}>
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: 'rgba(4, 33, 71, 0.74)' }}>
                    {item.teaser}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: '#7E6B2C' }}>
                    <span>{copy.viewDetails}</span>
                    <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
