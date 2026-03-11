'use client'

import Link from 'next/link'
import {
  AppWindow,
  ArrowUpRight,
  Bot,
  Globe,
  Send,
  Smartphone,
  type LucideIcon,
} from 'lucide-react'
import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { useLanguage } from '@/components/language-provider'
import { SectionOrnaments } from '@/components/section-ornaments'
import { serviceCatalog, type ServiceIcon } from '@/lib/service-catalog'

const iconMap: Record<ServiceIcon, LucideIcon> = {
  globe: Globe,
  smartphone: Smartphone,
  bot: Bot,
  send: Send,
  app: AppWindow,
}

const detailsLabel = {
  uz: 'Batafsil',
  ru: 'Подробнее',
  en: 'View details',
} as const

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const { t, language } = useLanguage()

  useEffect(() => {
    if (!sectionRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => setIsVisible(true))
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-shell-dark relative overflow-hidden px-6 py-24"
      style={{ backgroundColor: '#042147' }}
    >
      <SectionOrnaments tone="dark" />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 12% 18%, rgba(201, 168, 76, 0.16) 0%, rgba(201, 168, 76, 0) 42%), radial-gradient(circle at 88% 78%, rgba(245, 244, 240, 0.08) 0%, rgba(245, 244, 240, 0) 44%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 flex items-center justify-center gap-4">
          <div className="h-px flex-1" style={{ backgroundColor: 'rgba(201, 168, 76, 0.3)' }} />
          <span className="text-2xl" style={{ color: '#C9A84C', opacity: 0.6 }}>
            ◇
          </span>
          <div className="h-px flex-1" style={{ backgroundColor: 'rgba(201, 168, 76, 0.3)' }} />
        </div>

        <div
          className={`mb-16 text-center transform-gpu transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:transform-none ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '40ms' }}
        >
          <p
            className="mb-3 text-xs uppercase tracking-[0.28em]"
            style={{ color: 'rgba(201, 168, 76, 0.7)' }}
          >
            {t.services.eyebrow}
          </p>
          <h2 className="mb-4 text-5xl font-serif font-bold md:text-6xl" style={{ color: '#C9A84C' }}>
            {t.services.title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed" style={{ color: 'rgba(201, 168, 76, 0.72)' }}>
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {serviceCatalog.map((service, idx) => {
            const Icon = iconMap[service.icon]
            const content = service.content[language]
            const cardDelay = 120 + idx * 70
            const transitionStyle: CSSProperties = {
              transitionDelay: `${cardDelay}ms`,
              willChange: 'transform, opacity',
            }

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`group relative overflow-hidden rounded-2xl p-6 transform-gpu transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{
                  ...transitionStyle,
                  background: 'linear-gradient(160deg, rgba(245, 244, 240, 0.06) 0%, rgba(245, 244, 240, 0.02) 100%)',
                  border: '1px solid rgba(201, 168, 76, 0.26)',
                  boxShadow: '0 14px 30px -24px rgba(4, 33, 71, 0.75)',
                }}
              >
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{
                    background:
                      'linear-gradient(90deg, rgba(201, 168, 76, 0), rgba(201, 168, 76, 0.95), rgba(201, 168, 76, 0))',
                    transformOrigin: 'left center',
                  }}
                />

                <div className="mb-6 flex items-center justify-between">
                  <span className="text-xs tracking-[0.24em]" style={{ color: 'rgba(245, 244, 240, 0.52)' }}>
                    0{idx + 1}
                  </span>
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                    style={{
                      backgroundColor: 'rgba(201, 168, 76, 0.12)',
                      border: '1px solid rgba(201, 168, 76, 0.36)',
                      color: '#E8C97A',
                    }}
                  >
                    <Icon size={20} strokeWidth={1.9} />
                  </div>
                </div>

                <h3 className="mb-3 text-2xl font-serif font-semibold" style={{ color: '#F5F4F0' }}>
                  {content.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(245, 244, 240, 0.74)' }}>
                  {content.teaser}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium" style={{ color: '#E8C97A' }}>
                  <span>{detailsLabel[language]}</span>
                  <ArrowUpRight size={16} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
