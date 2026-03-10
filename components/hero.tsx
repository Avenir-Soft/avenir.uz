'use client'

import { useEffect, useRef } from 'react'

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up')
        }
      },
      { threshold: 0.1 }
    )

    const elements = heroRef.current?.querySelectorAll('[data-animate]')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-6 overflow-hidden"
      style={{ backgroundColor: '#F5F4F0' }}
    >
      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" />

      {/* Animated mesh background on right */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 pointer-events-none" style={{ opacity: 0.1 }}>
        <svg viewBox="0 0 400 400" className="w-full h-full">
          {/* 4-pointed star expanding mesh */}
          <g stroke="#042147" strokeWidth="1" fill="none">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <circle key={i} cx="200" cy="200" r={50 + i * 40} opacity={1 - i * 0.15} />
            ))}
            {/* Star points */}
            <line x1="200" y1="0" x2="200" y2="400" opacity="0.3" />
            <line x1="0" y1="200" x2="400" y2="200" opacity="0.3" />
            <line x1="100" y1="100" x2="300" y2="300" opacity="0.2" />
            <line x1="300" y1="100" x2="100" y2="300" opacity="0.2" />
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Text */}
        <div className="space-y-8">
          <div data-animate className="opacity-0 translate-y-5">
            <h1 className="text-6xl md:text-7xl font-serif font-bold leading-tight text-balance" style={{ color: '#042147' }}>
              We build digital{' '}
              <span className="relative inline-block">
                futures
                <span className="absolute bottom-2 left-0 right-0 h-1" style={{ backgroundColor: '#C9A84C' }} />
              </span>
              .
            </h1>
          </div>

          <p
            data-animate
            className="text-lg max-w-md leading-relaxed opacity-0 translate-y-5"
            style={{ animationDelay: '100ms', color: 'rgba(4, 33, 71, 0.7)' }}
          >
            IT solutions & web platforms for ambitious businesses in Uzbekistan and beyond.
          </p>

          <div
            data-animate
            className="flex flex-col sm:flex-row gap-4 pt-4 opacity-0 translate-y-5"
            style={{ animationDelay: '200ms' }}
          >
            <button className="px-8 py-3 font-serif font-bold transition-colors duration-200 tracking-wide" style={{ backgroundColor: '#C9A84C', color: '#042147' }}>
              View Portfolio
            </button>
            <button className="px-8 py-3 border-2 font-serif font-bold transition-colors duration-200 tracking-wide" style={{ borderColor: '#042147', color: '#042147' }}>
              Meet the Team
            </button>
          </div>
        </div>

        {/* Right: Animated mesh visual - handled by background */}
        <div className="hidden md:block relative h-full">
          <div className="sticky top-1/2 -translate-y-1/2">
            <svg viewBox="0 0 300 300" className="w-full h-full animate-pulse">
              <defs>
                <radialGradient id="meshGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#042147" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Central star shape */}
              <g fill="url(#meshGradient)">
                <circle cx="150" cy="150" r="80" opacity="0.6" />
                <circle cx="150" cy="150" r="100" opacity="0.4" />
                <circle cx="150" cy="150" r="120" opacity="0.2" />
              </g>

              {/* 4-pointed directions */}
              <g stroke="#042147" strokeWidth="2" opacity="0.15" fill="none">
                <line x1="150" y1="20" x2="150" y2="280" />
                <line x1="20" y1="150" x2="280" y2="150" />
                <line x1="50" y1="50" x2="250" y2="250" />
                <line x1="250" y1="50" x2="50" y2="250" />
              </g>

              {/* Decorative diamonds */}
              <g fill="#C9A84C" opacity="0.2">
                <circle cx="150" cy="30" r="4" />
                <circle cx="150" cy="270" r="4" />
                <circle cx="30" cy="150" r="4" />
                <circle cx="270" cy="150" r="4" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
