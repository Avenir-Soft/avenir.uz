'use client'

import { useState, useEffect } from 'react'
import { Logo } from './logo'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Team', href: '#team' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? 'rgba(245, 244, 240, 0.95)' : 'transparent',
        borderBottom: isScrolled ? '1px solid rgba(201, 168, 76, 0.2)' : 'none',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center hover:opacity-80 transition-opacity">
          <Logo />
        </a>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-medium text-sm tracking-wide transition-colors duration-200"
              style={{ color: '#042147' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side: Language + CTA */}
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-2 text-xs">
            <button className="transition-colors" style={{ color: 'rgba(4, 33, 71, 0.6)' }}>RU</button>
            <span style={{ color: 'rgba(4, 33, 71, 0.2)' }}>/</span>
            <button className="transition-colors" style={{ color: 'rgba(4, 33, 71, 0.6)' }}>EN</button>
          </div>

          <button
            className="px-6 py-2 border-2 font-medium text-sm transition-all duration-200 tracking-wide"
            style={{ borderColor: '#C9A84C', color: '#C9A84C' }}
          >
            Get a Quote
          </button>
        </div>
      </div>
    </nav>
  )
}
