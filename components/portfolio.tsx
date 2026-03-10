'use client'

import { useEffect, useRef, useState } from 'react'

const projects = [
  {
    id: 1,
    name: 'Saffron Market',
    category: 'E-commerce',
    year: 2024,
    bgColor: '#C9A84C',
  },
  {
    id: 2,
    name: 'MedLink UZ',
    category: 'Healthcare SaaS',
    year: 2023,
    bgColor: '#042147',
  },
  {
    id: 3,
    name: 'TashTrack',
    category: 'Logistics Dashboard',
    year: 2024,
    bgColor: '#1a3a5c',
  },
  {
    id: 4,
    name: 'Edu Portal',
    category: 'EdTech Platform',
    year: 2023,
    bgColor: '#E8C97A',
  },
  {
    id: 5,
    name: 'Halal Finance',
    category: 'FinTech App',
    year: 2024,
    bgColor: '#7a5c3a',
  },
  {
    id: 6,
    name: 'Textile Hub',
    category: 'B2B Marketplace',
    year: 2022,
    bgColor: '#3a5a8c',
  },
]

interface ProjectCardProps {
  project: typeof projects[0]
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-fade-in-up')
          }, index * 100)
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={cardRef}
      className="opacity-0 translate-y-5 group relative overflow-hidden aspect-square cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ backgroundColor: project.bgColor, borderRadius: '8px' }}
    >
      {/* Background glow on hover */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          opacity: isHovered ? 0.2 : 0,
          backgroundColor: '#F5F4F0',
        }}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-8">
        {/* Top: Category and year */}
        <div>
          <span className="text-sm font-medium tracking-widest" style={{ color: '#F5F4F0', opacity: 0.7 }}>
            {project.category}
          </span>
          <p className="text-xs mt-2" style={{ color: '#F5F4F0', opacity: 0.5 }}>
            {project.year}
          </p>
        </div>

        {/* Bottom: Title and CTA */}
        <div>
          <h3 className="text-3xl font-serif font-bold mb-6" style={{ color: '#F5F4F0' }}>
            {project.name}
          </h3>

          {/* View Case button */}
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 group-hover:gap-3"
            style={{ color: '#F5F4F0' }}
          >
            View Case
            <span>→</span>
          </a>
        </div>
      </div>

      {/* Overlay on hover */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          backgroundColor: 'rgba(0,0,0,0.3)',
          opacity: isHovered ? 1 : 0,
        }}
      />
    </div>
  )
}

export function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null)

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 px-6" style={{ backgroundColor: '#F5F4F0' }}>
      <div className="max-w-7xl mx-auto">
        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(4, 33, 71, 0.15)' }} />
          <span className="text-2xl" style={{ color: '#C9A84C', opacity: 0.6 }}>◇</span>
          <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(4, 33, 71, 0.15)' }} />
        </div>

        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4" style={{ color: '#042147' }}>
            Our Portfolio
          </h2>
          <p className="text-lg max-w-md mx-auto" style={{ color: 'rgba(4, 33, 71, 0.6)' }}>
            Digital products that made a real impact
          </p>
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
