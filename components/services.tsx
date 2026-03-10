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
    <section id="services" ref={sectionRef} className="bg-navy py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="flex-1 h-px bg-gold/30" />
          <span className="text-gold text-2xl opacity-60">◇</span>
          <div className="flex-1 h-px bg-gold/30" />
        </div>

        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-gold mb-4">
            Why Avenir?
          </h2>
          <p className="text-gold/70 text-lg max-w-md mx-auto">
            Our approach to building exceptional digital products
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div
              key={service.title}
              data-card
              className="opacity-0 translate-y-5 bg-navy border border-gold/20 p-8 hover:border-gold/60 hover:shadow-lg hover:shadow-gold/10 transition-all duration-200 group"
            >
              {/* Icon with gold accent */}
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-lg bg-gold/10 group-hover:bg-gold/20 transition-colors duration-200">
                <span className="text-3xl">{service.icon}</span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-serif font-bold text-cream mb-3">
                {service.title}
              </h3>
              <p className="text-cream/70 leading-relaxed">
                {service.description}
              </p>

              {/* Gold accent line on hover */}
              <div className="mt-4 h-1 w-8 bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
