'use client'

import Link from 'next/link'
import { SectionOrnaments } from '@/components/section-ornaments'
import { useLanguage } from '@/components/language-provider'
import { portfolioCatalog, type ProjectLayout } from '@/lib/portfolio-catalog'
import { localizedPath } from '@/lib/paths'
import Image from 'next/image'
import { useEffect, useRef, useState, type CSSProperties } from 'react'
import type { Language } from '@/lib/languages'

interface LocalizedProject {
  id: number
  year: number
  image: string
  slug: string
  layout: ProjectLayout
  name: string
  category: string
  summary: string
  tags: string[]
}

interface ProjectCardProps {
  project: LocalizedProject
  index: number
  viewCaseLabel: string
  imageAltSuffix: string
  isVisible: boolean
  language: Language
}

function ProjectCard({
  project,
  index,
  viewCaseLabel,
  imageAltSuffix,
  isVisible,
  language,
}: ProjectCardProps) {
  const isFeature = project.layout === 'feature'

  const layoutClass = isFeature
    ? 'md:col-span-2 lg:col-span-2 lg:row-span-2'
    : 'md:col-span-1 lg:col-span-1'

  const transitionStyle: CSSProperties = {
    transitionDelay: `${120 + index * 75}ms`,
    willChange: 'transform, opacity',
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl aspect-[4/5] transform-gpu transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:transform-none ${layoutClass} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        ...transitionStyle,
        border: '1px solid rgba(4, 33, 71, 0.12)',
        boxShadow: '0 14px 36px -24px rgba(4, 33, 71, 0.55)',
      }}
    >
      <Image
        src={project.image}
        alt={`${project.name} — ${imageAltSuffix}`}
        fill
        loading="lazy"
        quality={75}
        sizes={
          isFeature
            ? '(min-width: 1280px) 56vw, (min-width: 768px) 66vw, 100vw'
            : '(min-width: 1280px) 28vw, (min-width: 768px) 50vw, 100vw'
        }
        className="object-cover transform-gpu transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(4, 33, 71, 0.08) 0%, rgba(4, 33, 71, 0.35) 50%, rgba(4, 33, 71, 0.82) 75%, rgba(4, 33, 71, 0.95) 100%)',
        }}
      />

      {/* Hover gold glow */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(circle at 18% 12%, rgba(201, 168, 76, 0.28) 0%, rgba(201, 168, 76, 0) 44%)',
        }}
      />

      {/* Hover gold line */}
      <div
        className="pointer-events-none absolute left-5 right-5 top-5 h-px scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
        style={{
          background:
            'linear-gradient(90deg, rgba(201, 168, 76, 0), rgba(201, 168, 76, 0.95), rgba(201, 168, 76, 0))',
          transformOrigin: 'left center',
        }}
      />

      <div className="relative flex h-full flex-col justify-between p-6 md:p-7 lg:p-8">
        <div className="flex items-start justify-between gap-4">
          <span
            className="rounded-full px-3 py-1 text-[11px] uppercase tracking-widest"
            style={{
              backgroundColor: 'rgba(245, 244, 240, 0.14)',
              border: '1px solid rgba(245, 244, 240, 0.24)',
              color: 'rgba(245, 244, 240, 0.92)',
            }}
          >
            {project.category}
          </span>
          <span className="text-xs font-medium" style={{ color: 'rgba(245, 244, 240, 0.72)' }}>
            {project.year}
          </span>
        </div>

        <div>
          <h3
            className={`font-serif font-semibold leading-tight ${
              isFeature ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl'
            }`}
            style={{ color: '#F5F4F0' }}
          >
            {project.name}
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-relaxed" style={{ color: 'rgba(245, 244, 240, 0.76)' }}>
            {project.summary}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="rounded-full px-2.5 py-1 text-[11px]"
                style={{
                  backgroundColor: 'rgba(4, 33, 71, 0.28)',
                  border: '1px solid rgba(245, 244, 240, 0.2)',
                  color: 'rgba(245, 244, 240, 0.9)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <Link
            href={localizedPath(language, `/portfolio/${project.slug}`)}
            className="btn-avenir btn-avenir-on-dark mt-6 inline-flex items-center gap-2 px-5 py-2 text-sm"
          >
            {viewCaseLabel}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export function Portfolio() {
  const { t, language } = useLanguage()
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
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const localizedProjects: LocalizedProject[] = portfolioCatalog.flatMap((project, index) => {
    const copy = t.portfolio.projects[index]
    if (!copy) return []
    return [{ ...project, name: copy.name, category: copy.category, summary: copy.summary, tags: copy.tags }]
  })

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="section-shell relative overflow-hidden py-24 px-6"
      style={{ backgroundColor: '#F5F4F0' }}
    >
      <SectionOrnaments tone="light" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(4, 33, 71, 0.15)' }} />
          <span className="text-2xl" style={{ color: '#C9A84C', opacity: 0.6 }}>◇</span>
          <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(4, 33, 71, 0.15)' }} />
        </div>

        <div
          className={`text-center mb-16 transform-gpu transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:transform-none ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '40ms' }}
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4" style={{ color: '#042147' }}>
            {t.portfolio.title}
          </h2>
          <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(4, 33, 71, 0.72)' }}>
            {t.portfolio.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {localizedProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              viewCaseLabel={t.portfolio.viewCase}
              imageAltSuffix={t.portfolio.imageAltSuffix}
              isVisible={isVisible}
              language={language}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
