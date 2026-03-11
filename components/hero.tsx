'use client'

import { useLanguage } from '@/components/language-provider'
import { SectionOrnaments } from '@/components/section-ornaments'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section
      className="relative min-h-[100svh] overflow-hidden px-6 pt-28 pb-24 md:pt-32 md:pb-28 flex items-center"
      style={{ backgroundColor: '#F5F4F0' }}
    >
      <SectionOrnaments tone="light" className="opacity-70" />

      <div className="pointer-events-none absolute inset-0">
        <div className="hero-glow-a absolute -top-24 -left-28 h-64 w-64 rounded-full blur-2xl" />
        <div className="hero-glow-b absolute right-[-120px] top-8 h-72 w-72 rounded-full blur-2xl" />
        <div className="hero-glow-c absolute left-1/2 top-[56%] h-56 w-56 -translate-x-1/2 rounded-full blur-2xl" />
        <div
          className="absolute left-0 right-0 top-[44%] h-px"
          style={{
            background:
              'linear-gradient(90deg, rgba(201, 168, 76, 0), rgba(201, 168, 76, 0.45), rgba(201, 168, 76, 0))',
          }}
        />
      </div>

      <div className="relative z-10 w-full mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <div className="space-y-8">
          <div
            className="hero-reveal inline-flex items-center gap-2 rounded-full px-4 py-1.5"
            style={{
              animationDelay: '20ms',
              border: '1px solid rgba(4, 33, 71, 0.18)',
              backgroundColor: 'rgba(245, 244, 240, 0.7)',
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#C9A84C' }} />
            <span
              className="text-xs uppercase tracking-[0.22em]"
              style={{ color: 'rgba(4, 33, 71, 0.75)' }}
            >
              {t.hero.studioBadge}
            </span>
          </div>

          <div className="hero-reveal" style={{ animationDelay: '70ms' }}>
            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold leading-tight text-balance"
              style={{ color: '#042147' }}
            >
              {t.hero.titlePrefix}{' '}
              <span
                className="relative inline-block px-2"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(201, 168, 76, 0) 68%, rgba(201, 168, 76, 0.28) 68%)',
                }}
              >
                {t.hero.titleHighlight}
              </span>
              .
            </h1>
          </div>

          <p
            className="hero-reveal text-lg max-w-xl leading-relaxed"
            style={{ animationDelay: '130ms', color: 'rgba(4, 33, 71, 0.7)' }}
          >
            {t.hero.description}
          </p>

          <div
            className="hero-reveal flex flex-col sm:flex-row gap-4 pt-1"
            style={{ animationDelay: '180ms' }}
          >
            <a href="#portfolio" className="btn-avenir btn-avenir-primary px-8 py-3 text-base">
              {t.hero.ctaPortfolio}
            </a>
            <a href="#team" className="btn-avenir btn-avenir-outline px-8 py-3 text-base">
              {t.hero.ctaTeam}
            </a>
            <a href="#contact" className="btn-avenir btn-avenir-outline px-8 py-3 text-base">
              {t.hero.ctaProject}
            </a>
          </div>
        </div>

        <div className="hero-reveal relative hidden md:block" style={{ animationDelay: '180ms' }}>
          <div className="hero-orbit absolute -inset-8 rounded-[2rem]" />

          <article
            className="relative overflow-hidden rounded-3xl p-7 lg:p-8"
            style={{
              background:
                'linear-gradient(165deg, rgba(4, 33, 71, 0.96) 0%, rgba(7, 48, 93, 0.96) 100%)',
              border: '1px solid rgba(201, 168, 76, 0.32)',
              boxShadow: '0 24px 42px -28px rgba(4, 33, 71, 0.8)',
            }}
          >
            <div className="mb-8">
              <p
                className="text-xs uppercase tracking-[0.24em]"
                style={{ color: 'rgba(201, 168, 76, 0.82)' }}
              >
                {t.hero.frameworkLabel}
              </p>
              <h3
                className="mt-3 text-3xl font-serif font-semibold"
                style={{ color: '#F5F4F0' }}
              >
                {t.hero.frameworkTitle}
              </h3>
              <p
                className="mt-2 text-sm leading-relaxed"
                style={{ color: 'rgba(245, 244, 240, 0.7)' }}
              >
                {t.hero.frameworkDescription}
              </p>
            </div>

            <div className="space-y-4">
              {t.hero.deliveryFlow.map((step, idx) => (
                <div
                  key={step.title}
                  className="rounded-xl p-4"
                  style={{
                    backgroundColor: 'rgba(245, 244, 240, 0.06)',
                    border: '1px solid rgba(245, 244, 240, 0.12)',
                  }}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold" style={{ color: '#F5F4F0' }}>
                      {step.title}
                    </p>
                    <span className="text-xs" style={{ color: 'rgba(245, 244, 240, 0.55)' }}>
                      0{idx + 1}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs" style={{ color: 'rgba(245, 244, 240, 0.66)' }}>
                    {step.detail}
                  </p>
                  <div
                    className="mt-3 h-1 rounded-full overflow-hidden"
                    style={{ backgroundColor: 'rgba(245, 244, 240, 0.14)' }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${54 + idx * 18}%`,
                        background:
                          'linear-gradient(90deg, rgba(201, 168, 76, 0.92), rgba(232, 201, 122, 0.9))',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>

          <div
            className="hero-float-a absolute -right-6 top-10 rounded-xl px-4 py-3"
            style={{
              backgroundColor: 'rgba(245, 244, 240, 0.86)',
              border: '1px solid rgba(4, 33, 71, 0.16)',
              boxShadow: '0 14px 26px -18px rgba(4, 33, 71, 0.6)',
            }}
          >
            <p
              className="text-[10px] uppercase tracking-[0.2em]"
              style={{ color: 'rgba(4, 33, 71, 0.55)' }}
            >
              {t.hero.avgLaunchLabel}
            </p>
            <p className="mt-1 text-sm font-semibold" style={{ color: '#042147' }}>
              {t.hero.avgLaunchValue}
            </p>
          </div>

          <div
            className="hero-float-b absolute -right-6 bottom-10 rounded-xl px-4 py-3"
            style={{
              backgroundColor: 'rgba(4, 33, 71, 0.84)',
              border: '1px solid rgba(201, 168, 76, 0.55)',
              boxShadow: '0 14px 26px -18px rgba(4, 33, 71, 0.72)',
            }}
          >
            <p
              className="text-[10px] uppercase tracking-[0.2em]"
              style={{ color: 'rgba(245, 244, 240, 0.74)' }}
            >
              {t.hero.satisfactionLabel}
            </p>
            <p className="mt-1 text-sm font-semibold" style={{ color: '#F5F4F0' }}>
              {t.hero.satisfactionValue}
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-reveal {
          animation: fadeInUp 0.58s cubic-bezier(0.22, 1, 0.36, 1) both;
          will-change: transform, opacity;
          transform: translateZ(0);
        }

        .hero-glow-a {
          background: radial-gradient(circle, rgba(201, 168, 76, 0.38) 0%, rgba(201, 168, 76, 0) 68%);
          animation: heroFloatY 9s ease-in-out infinite;
          will-change: transform, opacity;
        }
        .hero-glow-b {
          background: radial-gradient(circle, rgba(4, 33, 71, 0.2) 0%, rgba(4, 33, 71, 0) 72%);
          animation: heroFloatX 11s ease-in-out infinite;
          will-change: transform, opacity;
        }
        .hero-glow-c {
          background: radial-gradient(circle, rgba(232, 201, 122, 0.2) 0%, rgba(232, 201, 122, 0) 70%);
          animation: heroPulse 7s ease-in-out infinite;
          will-change: transform, opacity;
        }
        .hero-orbit {
          border: 1px dashed rgba(201, 168, 76, 0.25);
          animation: heroSpin 24s linear infinite;
          will-change: transform;
        }
        .hero-float-a {
          animation: heroFloatY 6.2s ease-in-out infinite;
          will-change: transform;
        }
        .hero-float-b {
          animation: heroFloatY 6.8s ease-in-out infinite 0.9s;
          will-change: transform;
        }

        @keyframes heroFloatY {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes heroFloatX {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-14px);
          }
        }

        @keyframes heroPulse {
          0%,
          100% {
            opacity: 0.65;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes heroSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 1023px) {
          .hero-glow-a,
          .hero-glow-b,
          .hero-glow-c,
          .hero-orbit,
          .hero-float-a,
          .hero-float-b {
            animation: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-reveal,
          .hero-glow-a,
          .hero-glow-b,
          .hero-glow-c,
          .hero-orbit,
          .hero-float-a,
          .hero-float-b {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  )
}
