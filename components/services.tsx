'use client'

import { Handshake, Layers3, Rocket, Sparkles, type LucideIcon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/components/language-provider'
import { SectionOrnaments } from '@/components/section-ornaments'

const serviceIcons: LucideIcon[] = [Rocket, Layers3, Sparkles, Handshake]

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

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
      className="section-shell-dark relative overflow-hidden py-24 px-6"
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

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(201, 168, 76, 0.3)' }} />
          <span className="text-2xl" style={{ color: '#C9A84C', opacity: 0.6 }}>◇</span>
          <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(201, 168, 76, 0.3)' }} />
        </div>

        <div
          className={`text-center mb-16 transform-gpu transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:transform-none ${
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
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4" style={{ color: '#C9A84C' }}>
            {t.services.title}
          </h2>
          <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(201, 168, 76, 0.7)' }}>
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {t.services.items.map((service, idx) => {
            const Icon = serviceIcons[idx] ?? Rocket
            return (
              <article
                key={service.title}
                className={`group relative overflow-hidden rounded-2xl p-7 transform-gpu transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{
                  transitionDelay: `${120 + idx * 70}ms`,
                  willChange: 'transform, opacity',
                  background:
                    'linear-gradient(160deg, rgba(245, 244, 240, 0.06) 0%, rgba(245, 244, 240, 0.02) 100%)',
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

                <div className="mb-7 flex items-center justify-between">
                  <span
                    className="text-xs tracking-[0.24em]"
                    style={{ color: 'rgba(245, 244, 240, 0.52)' }}
                  >
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

                <h3 className="text-2xl font-serif font-semibold mb-3" style={{ color: '#F5F4F0' }}>
                  {service.title}
                </h3>
                <p className="leading-relaxed" style={{ color: 'rgba(245, 244, 240, 0.7)' }}>
                  {service.description}
                </p>

                <div
                  className="mt-6 h-px w-10 transition-[width] duration-300 group-hover:w-20"
                  style={{ backgroundColor: 'rgba(201, 168, 76, 0.7)' }}
                />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
