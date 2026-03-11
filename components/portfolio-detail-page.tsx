'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Clock3, Layers3, Sparkles, Target } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { Navbar } from '@/components/navbar'
import { SectionOrnaments } from '@/components/section-ornaments'
import { type Language } from '@/lib/i18n'
import { getPortfolioBySlug, type PortfolioSlug } from '@/lib/portfolio-catalog'

const detailCopy: Record<
  Language,
  {
    home: string
    portfolio: string
    backToPortfolio: string
    demoCase: string
    challenge: string
    solution: string
    impact: string
    timelineLabel: string
    stackLabel: string
    cta: string
  }
> = {
  uz: {
    home: 'Bosh sahifa',
    portfolio: 'Portfolio',
    backToPortfolio: 'Portfolio bo`limiga qaytish',
    demoCase: 'Demo case',
    challenge: 'Vazifa',
    solution: 'Yechim',
    impact: 'Natijalar (demo)',
    timelineLabel: 'Loyiha muddati',
    stackLabel: 'Texnologiyalar',
    cta: 'Shunga o`xshash loyiha boshlash',
  },
  ru: {
    home: 'Главная',
    portfolio: 'Портфолио',
    backToPortfolio: 'Вернуться в портфолио',
    demoCase: 'Демо-кейс',
    challenge: 'Задача',
    solution: 'Решение',
    impact: 'Результаты (демо)',
    timelineLabel: 'Срок проекта',
    stackLabel: 'Технологии',
    cta: 'Запустить похожий проект',
  },
  en: {
    home: 'Home',
    portfolio: 'Portfolio',
    backToPortfolio: 'Back to portfolio',
    demoCase: 'Demo case',
    challenge: 'Challenge',
    solution: 'Solution',
    impact: 'Outcomes (demo)',
    timelineLabel: 'Project timeline',
    stackLabel: 'Tech stack',
    cta: 'Start a similar project',
  },
}

function getFakeDetails(language: Language, projectName: string, category: string) {
  if (language === 'uz') {
    return {
      challengeText:
        projectName +
        ' loyihasida asosiy maqsad ' +
        category.toLowerCase() +
        ' yo`nalishida foydalanuvchi yo`lini soddalashtirish va konversiyani oshirish edi. Hozircha bu sahifadagi ma`lumotlar demo formatda ko`rsatilgan.',
      solutionText:
        'Biz UX oqimini qayta loyihalab, asosiy sahifalar uchun yangi komponent tizimi yaratdik. Shuningdek, admin panel bilan integratsiya va analitika eventlari demo rejimda sozlandi.',
      impactItems: [
        'Demo testda conversion +32%',
        'Sahifa yuklanish tezligi 2.1s gacha tushirildi',
        'Operatorlarga tushadigan qo`lda ish hajmi kamaydi',
      ],
      timeline: '8-10 hafta',
    }
  }

  if (language === 'ru') {
    return {
      challengeText: `В проекте ${projectName} ключевой задачей было упростить пользовательский путь в категории «${category}» и увеличить конверсию. Сейчас на странице размещено демо-описание с тестовыми данными.`,
      solutionText:
        'Мы переработали UX-сценарии, собрали новую компонентную систему и настроили интеграции с админ-панелью. Дополнительно подключили демо-аналитику ключевых действий.',
      impactItems: [
        'Конверсия на демо-этапе +32%',
        'Скорость загрузки основных экранов до 2.1s',
        'Снижение ручных операций у внутренней команды',
      ],
      timeline: '8-10 недель',
    }
  }

  return {
    challengeText: `For ${projectName}, the main goal was to simplify the user journey within the ${category} flow and improve conversion. This page currently contains demo content with placeholder data.`,
    solutionText:
      'We redesigned the UX flow, introduced a reusable UI component system, and connected key admin integrations. We also configured demo-level analytics for primary events.',
    impactItems: [
      'Demo conversion uplift: +32%',
      'Core pages load in about 2.1s',
      'Reduced manual operations for internal teams',
    ],
    timeline: '8-10 weeks',
  }
}

interface PortfolioDetailPageProps {
  slug: PortfolioSlug
}

export function PortfolioDetailPage({ slug }: PortfolioDetailPageProps) {
  const { language, t } = useLanguage()
  const project = getPortfolioBySlug(slug)
  const copy = detailCopy[language]

  if (!project) return null

  const localizedProject = t.portfolio.projects[project.id - 1] ?? t.portfolio.projects[0]
  const details = getFakeDetails(language, localizedProject.name, localizedProject.category)

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
              'radial-gradient(circle at 16% 18%, rgba(201, 168, 76, 0.18) 0%, rgba(201, 168, 76, 0) 42%), radial-gradient(circle at 84% 72%, rgba(245, 244, 240, 0.08) 0%, rgba(245, 244, 240, 0) 44%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-7 flex items-center gap-2 text-sm" style={{ color: 'rgba(245, 244, 240, 0.64)' }}>
            <Link href="/" className="transition-colors hover:text-[#F5F4F0]">
              {copy.home}
            </Link>
            <span>/</span>
            <Link href="/#portfolio" className="transition-colors hover:text-[#F5F4F0]">
              {copy.portfolio}
            </Link>
            <span>/</span>
            <span style={{ color: '#F5F4F0' }}>{localizedProject.name}</span>
          </div>

          <Link
            href="/#portfolio"
            className="mb-6 inline-flex items-center gap-2 text-sm transition-colors"
            style={{ color: 'rgba(232, 201, 122, 0.9)' }}
          >
            <ArrowLeft size={16} />
            <span>{copy.backToPortfolio}</span>
          </Link>

          <div className="grid items-start gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
            <div>
              <p
                className="inline-flex rounded-full px-3 py-1 text-xs uppercase tracking-[0.22em]"
                style={{
                  backgroundColor: 'rgba(245, 244, 240, 0.1)',
                  border: '1px solid rgba(245, 244, 240, 0.2)',
                  color: '#E8C97A',
                }}
              >
                {copy.demoCase}
              </p>
              <h1 className="mt-4 text-5xl font-serif font-bold leading-tight md:text-6xl" style={{ color: '#C9A84C' }}>
                {localizedProject.name}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed" style={{ color: 'rgba(245, 244, 240, 0.78)' }}>
                {localizedProject.summary}
              </p>
              <Link href="/#contact" className="btn-avenir btn-avenir-on-dark mt-8 inline-flex px-8 py-3 text-base">
                {copy.cta}
              </Link>
            </div>

            <article
              className="rounded-2xl p-3"
              style={{
                background: 'linear-gradient(165deg, rgba(245, 244, 240, 0.08) 0%, rgba(245, 244, 240, 0.03) 100%)',
                border: '1px solid rgba(201, 168, 76, 0.35)',
                boxShadow: '0 16px 34px -24px rgba(4, 33, 71, 0.86)',
              }}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                <Image
                  src={project.image}
                  alt={`${localizedProject.name} cover`}
                  fill
                  sizes="(min-width: 1024px) 36vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="grid gap-4 p-4 md:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(232, 201, 122, 0.86)' }}>
                    {localizedProject.category}
                  </p>
                  <p className="mt-1 text-sm" style={{ color: 'rgba(245, 244, 240, 0.74)' }}>
                    {project.year}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(232, 201, 122, 0.86)' }}>
                    {copy.timelineLabel}
                  </p>
                  <p className="mt-1 text-sm" style={{ color: 'rgba(245, 244, 240, 0.74)' }}>
                    {details.timeline}
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-shell relative overflow-hidden px-6 py-20">
        <SectionOrnaments tone="light" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <article
            className="rounded-2xl p-6 md:p-7"
            style={{
              background: 'linear-gradient(160deg, rgba(255, 255, 255, 0.92) 0%, rgba(245, 244, 240, 0.86) 100%)',
              border: '1px solid rgba(4, 33, 71, 0.12)',
              boxShadow: '0 16px 30px -24px rgba(4, 33, 71, 0.52)',
            }}
          >
            <div className="mb-4 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em]" style={{ color: '#7E6B2C' }}>
              <Target size={16} />
              <span>{copy.challenge}</span>
            </div>
            <p className="text-sm leading-relaxed md:text-base" style={{ color: 'rgba(4, 33, 71, 0.76)' }}>
              {details.challengeText}
            </p>
          </article>

          <article
            className="rounded-2xl p-6 md:p-7"
            style={{
              background: 'linear-gradient(160deg, rgba(255, 255, 255, 0.92) 0%, rgba(245, 244, 240, 0.86) 100%)',
              border: '1px solid rgba(4, 33, 71, 0.12)',
              boxShadow: '0 16px 30px -24px rgba(4, 33, 71, 0.52)',
            }}
          >
            <div className="mb-4 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em]" style={{ color: '#7E6B2C' }}>
              <Sparkles size={16} />
              <span>{copy.solution}</span>
            </div>
            <p className="text-sm leading-relaxed md:text-base" style={{ color: 'rgba(4, 33, 71, 0.76)' }}>
              {details.solutionText}
            </p>
          </article>
        </div>
      </section>

      <section className="section-shell relative overflow-hidden px-6 pb-24">
        <div className="relative z-10 mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article
            className="rounded-2xl p-6 md:p-7"
            style={{
              background: 'linear-gradient(160deg, rgba(255, 255, 255, 0.92) 0%, rgba(245, 244, 240, 0.86) 100%)',
              border: '1px solid rgba(4, 33, 71, 0.12)',
              boxShadow: '0 16px 30px -24px rgba(4, 33, 71, 0.52)',
            }}
          >
            <div className="mb-5 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em]" style={{ color: '#7E6B2C' }}>
              <Clock3 size={16} />
              <span>{copy.impact}</span>
            </div>
            <ul className="space-y-3">
              {details.impactItems.map(item => (
                <li
                  key={item}
                  className="rounded-xl px-4 py-3 text-sm leading-relaxed md:text-base"
                  style={{
                    backgroundColor: 'rgba(4, 33, 71, 0.06)',
                    border: '1px solid rgba(4, 33, 71, 0.1)',
                    color: 'rgba(4, 33, 71, 0.78)',
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article
            className="rounded-2xl p-6 md:p-7"
            style={{
              background: 'linear-gradient(160deg, rgba(255, 255, 255, 0.92) 0%, rgba(245, 244, 240, 0.86) 100%)',
              border: '1px solid rgba(4, 33, 71, 0.12)',
              boxShadow: '0 16px 30px -24px rgba(4, 33, 71, 0.52)',
            }}
          >
            <div className="mb-4 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em]" style={{ color: '#7E6B2C' }}>
              <Layers3 size={16} />
              <span>{copy.stackLabel}</span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {localizedProject.tags.map(tag => (
                <span
                  key={tag}
                  className="rounded-full px-3 py-1.5 text-xs font-medium"
                  style={{
                    backgroundColor: 'rgba(4, 33, 71, 0.08)',
                    border: '1px solid rgba(4, 33, 71, 0.14)',
                    color: '#042147',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold transition-[gap] duration-200 hover:gap-3"
              style={{ color: '#7E6B2C' }}
            >
              <span>{copy.cta}</span>
              <ArrowUpRight size={16} />
            </Link>
          </article>
        </div>
      </section>
    </main>
  )
}
