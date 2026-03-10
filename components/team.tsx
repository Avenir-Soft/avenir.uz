'use client'

import { useEffect, useRef } from 'react'

const teamMembers = [
  {
    id: 1,
    name: 'Amir Karimov',
    role: 'Lead Full-Stack Developer',
    bio: 'Architect of scalable web systems with 7+ years experience',
    initials: 'AK',
    gradient: 'from-navy to-navy-light',
  },
  {
    id: 2,
    name: 'Dilnoza Yusupova',
    role: 'UI/UX Designer',
    bio: 'Crafting interfaces that are beautiful and purposeful',
    initials: 'DY',
    gradient: 'from-navy-light to-navy',
  },
  {
    id: 3,
    name: 'Bobur Tashmatov',
    role: 'Backend Engineer',
    bio: 'Django & Node.js specialist, API design expert',
    initials: 'BT',
    gradient: 'from-navy to-navy-light',
  },
  {
    id: 4,
    name: 'Kamola Rakhimova',
    role: 'Project Manager',
    bio: 'Ensuring every project lands on time and exceeds expectations',
    initials: 'KR',
    gradient: 'from-navy-light to-navy',
  },
]

interface TeamCardProps {
  member: typeof teamMembers[0]
  index: number
}

function TeamCard({ member, index }: TeamCardProps) {
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
      className="opacity-0 translate-y-5 flex flex-col items-center text-center group"
    >
      {/* Avatar with gold ring */}
      <div className="mb-6 relative">
        <div
          className={`w-40 h-40 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-cream text-5xl font-serif font-bold border-4 border-gold group-hover:shadow-lg group-hover:shadow-gold/30 transition-all duration-300`}
        >
          {member.initials}
        </div>
      </div>

      {/* Name */}
      <h3 className="text-2xl font-serif font-bold text-navy mb-2">
        {member.name}
      </h3>

      {/* Role */}
      <p className="text-gold font-medium text-sm tracking-widest uppercase mb-4">
        {member.role}
      </p>

      {/* Bio */}
      <p className="text-navy/70 text-sm leading-relaxed max-w-xs mb-6">
        {member.bio}
      </p>

      {/* Social icons */}
      <div className="flex gap-4">
        <a
          href="#"
          className="w-8 h-8 flex items-center justify-center text-navy hover:text-gold hover:bg-navy/5 rounded-full transition-all duration-200"
          aria-label="GitHub"
        >
          {/* GitHub icon */}
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
        <a
          href="#"
          className="w-8 h-8 flex items-center justify-center text-navy hover:text-gold hover:bg-navy/5 rounded-full transition-all duration-200"
          aria-label="LinkedIn"
        >
          {/* LinkedIn icon */}
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.435-.103.25-.129.599-.129.948v5.422h-3.554s.047-8.733 0-9.646h3.554v1.364c.43-.664 1.189-1.609 2.894-1.609 2.113 0 3.695 1.38 3.695 4.346v5.545zM5.337 9.432c-1.144 0-1.915-.758-1.915-1.706 0-.968.77-1.707 1.968-1.707 1.197 0 1.916.738 1.94 1.707 0 .948-.743 1.706-1.993 1.706zm1.582 11.02H3.755V9.806h3.164v10.646zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export function Team() {
  const sectionRef = useRef<HTMLDivElement>(null)

  return (
    <section id="team" ref={sectionRef} className="bg-cream py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="flex-1 h-px bg-navy/20" />
          <span className="text-gold text-2xl opacity-60">◇</span>
          <div className="flex-1 h-px bg-navy/20" />
        </div>

        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-navy mb-4">
            The Team Behind Avenir
          </h2>
          <p className="text-navy/60 text-lg">
            Talented professionals dedicated to your success
          </p>
        </div>

        {/* Team grid */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12">
          {teamMembers.map((member, idx) => (
            <TeamCard key={member.id} member={member} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
