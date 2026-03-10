'use client'

import { useEffect, useRef } from 'react'

const teamMembers = [
  {
    id: 1,
    name: 'Amir Karimov',
    role: 'Lead Full-Stack Developer',
    bio: 'Architect of scalable web systems with 7+ years experience',
    initials: 'AK',
    bgColor: '#042147',
  },
  {
    id: 2,
    name: 'Dilnoza Yusupova',
    role: 'UI/UX Designer',
    bio: 'Crafting interfaces that are beautiful and purposeful',
    initials: 'DY',
    bgColor: '#1a3a5c',
  },
  {
    id: 3,
    name: 'Bobur Tashmatov',
    role: 'Backend Engineer',
    bio: 'Django & Node.js specialist, API design expert',
    initials: 'BT',
    bgColor: '#042147',
  },
  {
    id: 4,
    name: 'Kamola Rakhimova',
    role: 'Project Manager',
    bio: 'Ensuring every project lands on time and exceeds expectations',
    initials: 'KR',
    bgColor: '#1a3a5c',
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
      className="opacity-0 translate-y-5 group text-center"
    >
      {/* Avatar */}
      <div
        className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center text-white font-serif font-bold text-2xl transition-all duration-300"
        style={{
          backgroundColor: member.bgColor,
          border: '3px solid #C9A84C',
          boxShadow: 'group-hover: 0 8px 16px rgba(201, 168, 76, 0.2)',
        }}
      >
        {member.initials}
      </div>

      {/* Name and role */}
      <h3 className="text-xl font-serif font-bold mb-2" style={{ color: '#042147' }}>
        {member.name}
      </h3>
      <p className="text-sm font-medium mb-3 transition-colors duration-200" style={{ color: '#C9A84C' }}>
        {member.role}
      </p>

      {/* Bio */}
      <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(4, 33, 71, 0.6)' }}>
        {member.bio}
      </p>

      {/* Social links */}
      <div className="flex items-center justify-center gap-4 pt-4 border-t transition-colors duration-200" style={{ borderColor: 'rgba(4, 33, 71, 0.1)' }}>
        <a href="#" className="text-lg transition-colors duration-200" style={{ color: '#C9A84C' }}>
          LinkedIn
        </a>
        <span style={{ color: 'rgba(4, 33, 71, 0.2)' }}>•</span>
        <a href="#" className="text-lg transition-colors duration-200" style={{ color: '#C9A84C' }}>
          Twitter
        </a>
      </div>
    </div>
  )
}

export function Team() {
  const sectionRef = useRef<HTMLDivElement>(null)

  return (
    <section id="team" ref={sectionRef} className="py-24 px-6" style={{ backgroundColor: '#F5F4F0' }}>
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
            Meet the Team
          </h2>
          <p className="text-lg max-w-md mx-auto" style={{ color: 'rgba(4, 33, 71, 0.6)' }}>
            Talented professionals building your digital future
          </p>
        </div>

        {/* Team grid */}
        <div className="grid md:grid-cols-4 gap-12">
          {teamMembers.map((member, idx) => (
            <TeamCard key={member.id} member={member} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
