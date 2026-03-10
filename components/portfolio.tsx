'use client'

import { useEffect, useRef, useState } from 'react'

const projects = [
  {
    id: 1,
    name: 'Saffron Market',
    category: 'E-commerce',
    year: 2024,
    color: 'from-gold to-gold-light',
  },
  {
    id: 2,
    name: 'MedLink UZ',
    category: 'Healthcare SaaS',
    year: 2023,
    color: 'from-navy to-navy-light',
  },
  {
    id: 3,
    name: 'TashTrack',
    category: 'Logistics Dashboard',
    year: 2024,
    color: 'from-navy-light to-navy',
  },
  {
    id: 4,
    name: 'Edu Portal',
    category: 'EdTech Platform',
    year: 2023,
    color: 'from-gold-light to-gold',
  },
  {
    id: 5,
    name: 'Halal Finance',
    category: 'FinTech App',
    year: 2024,
    color: 'from-navy to-gold',
  },
  {
    id: 6,
    name: 'Textile Hub',
    category: 'B2B Marketplace',
    year: 2022,
    color: 'from-gold to-navy-light',
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
    >
      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.color} transition-transform duration-300 group-hover:scale-105`}
      />

      {/* Content overlay */}
      <div className="relative h-full p-8 flex flex-col justify-between text-cream">
        {/* Project info */}
        <div>
          <p className="text-sm font-medium opacity-75 mb-2">{project.category}</p>
          <h3 className="text-3xl font-serif font-bold">{project.name}</h3>
        </div>

        {/* Year */}
        <p className="text-sm font-medium opacity-75">{project.year}</p>
      </div>

      {/* Hover overlay with CTA */}
      <div
        className={`absolute inset-0 bg-navy/95 flex items-center justify-center transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="text-center">
          <p className="text-gold font-serif text-2xl font-bold">
            View Case <span className="text-gold/60">→</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null)

  return (
    <section id="portfolio" ref={sectionRef} className="bg-cream py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="flex-1 h-px bg-navy/20" />
          <span className="text-gold text-2xl opacity-60">◇</span>
          <div className="flex-1 h-px bg-navy/20" />
        </div>

        {/* Section title */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-navy mb-4 text-balance">
            Our Work
          </h2>
          <div className="flex gap-3 items-center">
            <p className="text-navy/60 text-lg">Recent projects</p>
            <div className="h-1 w-12 bg-gold" />
          </div>
        </div>

        {/* Masonry grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
