'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { number: 50, label: 'Projects Delivered', suffix: '+' },
  { number: 30, label: 'Happy Clients', suffix: '+' },
  { number: 5, label: 'Years on Market', suffix: '' },
  { number: 4, label: 'Countries Served', suffix: '' },
]

interface StatItemProps {
  stat: typeof stats[0]
  index: number
}

function StatItem({ stat, index }: StatItemProps) {
  const [count, setCount] = useState(0)
  const itemRef = useRef<HTMLDivElement>(null)
  const hasCountedRef = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasCountedRef.current) {
          hasCountedRef.current = true

          // Stagger animations
          setTimeout(() => {
            const duration = 2000
            const steps = 60
            const increment = stat.number / steps
            let currentCount = 0

            const interval = setInterval(() => {
              currentCount += increment
              if (currentCount >= stat.number) {
                setCount(stat.number)
                clearInterval(interval)
              } else {
                setCount(Math.floor(currentCount))
              }
            }, duration / steps)
          }, index * 150)
        }
      },
      { threshold: 0.5 }
    )

    if (itemRef.current) observer.observe(itemRef.current)
    return () => observer.disconnect()
  }, [stat.number, index])

  return (
    <div ref={itemRef} className="text-center">
      <div className="text-6xl md:text-7xl font-serif font-bold mb-4" style={{ color: '#C9A84C' }}>
        {count}
        {stat.suffix && <span style={{ color: '#E8C97A' }}>{stat.suffix}</span>}
      </div>
      <p className="text-lg font-medium" style={{ color: '#F5F4F0' }}>{stat.label}</p>
    </div>
  )
}

export function Stats() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#042147' }}>
      <div className="max-w-7xl mx-auto">
        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(201, 168, 76, 0.3)' }} />
          <span className="text-2xl" style={{ color: '#C9A84C', opacity: 0.6 }}>◇</span>
          <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(201, 168, 76, 0.3)' }} />
        </div>

        {/* Stats grid */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12">
          {stats.map((stat, idx) => (
            <StatItem key={stat.label} stat={stat} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
