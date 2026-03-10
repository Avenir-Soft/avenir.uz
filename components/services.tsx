'use client'

import { useEffect, useRef } from 'react'

const services = [
  {
    icon: '⚡',
    title: 'Fast Delivery',
    description: 'Agile sprints, on-time launches',
  },
  {
    icon: '🏗️',
    title: 'Scalable Architecture',
    description: 'Built for growth from day one',
  },
  {
    icon: '🎨',
    title: 'Premium Design',
    description: 'UI/UX that converts and impresses',
  },
  {
    icon: '🤝',
    title: 'Long-term Partnership',
    description: 'We stay with you post-launch',
  },
]

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll('[data-card]')
          cards.forEach((card, idx) => {
            setTimeout(() => {
              card.classList.add('animate-fade-in-up')
            }, idx * 100)
          })
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-24 px-6" style={{ backgroundColor: '#042147' }}>
      <div className="max-w-7xl mx-auto">
        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(201, 168, 76, 0.3)' }} />
          <span className="text-2xl" style={{ color: '#C9A84C', opacity: 0.6 }}>◇</span>
          <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(201, 168, 76, 0.3)' }} />
        </div>

        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4" style={{ color: '#C9A84C' }}>
            Why Avenir?
          </h2>
          <p className="text-lg max-w-md mx-auto" style={{ color: 'rgba(201, 168, 76, 0.7)' }}>
            Our approach to building exceptional digital products
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div
              key={service.title}
              data-card
              className="opacity-0 translate-y-5 p-8 transition-all duration-200 group"
              style={{ 
                borderTop: '1px solid rgba(201, 168, 76, 0.2)',
                borderRight: '1px solid rgba(201, 168, 76, 0.2)',
                borderBottom: '1px solid rgba(201, 168, 76, 0.2)',
                borderLeft: '1px solid rgba(201, 168, 76, 0.2)'
              }}
            >
              {/* Icon with gold accent */}
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-lg transition-colors duration-200" style={{ backgroundColor: 'rgba(201, 168, 76, 0.1)' }}>
                <span className="text-3xl">{service.icon}</span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-serif font-bold mb-3" style={{ color: '#F5F4F0' }}>
                {service.title}
              </h3>
              <p className="leading-relaxed" style={{ color: 'rgba(245, 244, 240, 0.7)' }}>
                {service.description}
              </p>

              {/* Gold accent line on hover */}
              <div className="mt-4 h-1 w-8 transition-opacity duration-200" style={{ backgroundColor: '#C9A84C', opacity: 0 }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
