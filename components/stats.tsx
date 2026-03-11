'use client'

import { SectionOrnaments } from '@/components/section-ornaments'
import { useLanguage } from '@/components/language-provider'
import { useEffect, useRef, useState, type CSSProperties } from 'react'

const stats = [
  { number: 50, suffix: '+' },
  { number: 30, suffix: '+' },
  { number: 5, suffix: '' },
  { number: 4, suffix: '' },
]

interface StatItemProps {
  stat: (typeof stats)[number]
  index: number
  label: string
  isVisible: boolean
}

function StatItem({ stat, index, label, isVisible }: StatItemProps) {
  const [count, setCount] = useState(0)
  const hasAnimatedRef = useRef(false)

  useEffect(() => {
    if (!isVisible || hasAnimatedRef.current) return

    hasAnimatedRef.current = true
    let rafId = 0
    let startTime = 0
    const delay = index * 120
    const duration = 1200

    const tick = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime

      if (elapsed < delay) {
        rafId = requestAnimationFrame(tick)
        return
      }

      const progress = Math.min((elapsed - delay) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setCount(Math.round(stat.number * eased))

      if (progress < 1) {
        rafId = requestAnimationFrame(tick)
      }
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [isVisible, index, stat.number])

  const transitionStyle: CSSProperties = {
    transitionDelay: `${70 + index * 80}ms`,
    willChange: 'transform, opacity',
  }

  return (
    <div
      className={`text-center transform-gpu transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:transform-none ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={transitionStyle}
    >
      <div className="text-6xl md:text-7xl font-serif font-bold mb-4" style={{ color: '#C9A84C' }}>
        {count}
        {stat.suffix && <span style={{ color: '#E8C97A' }}>{stat.suffix}</span>}
      </div>
      <p className="text-lg font-medium" style={{ color: '#F5F4F0' }}>{label}</p>
    </div>
  )
}

export function Stats() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!sectionRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => setIsVisible(true))
          observer.disconnect()
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="section-shell-dark relative overflow-hidden py-24 px-6"
      style={{ backgroundColor: '#042147' }}
    >
      <SectionOrnaments tone="dark" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(201, 168, 76, 0.3)' }} />
          <span className="text-2xl" style={{ color: '#C9A84C', opacity: 0.6 }}>◇</span>
          <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(201, 168, 76, 0.3)' }} />
        </div>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12">
          {stats.map((stat, idx) => (
            <StatItem
              key={idx}
              stat={stat}
              index={idx}
              label={t.stats.items[idx]?.label ?? t.stats.items[0].label}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
