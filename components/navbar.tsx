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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-sm border-b border-gold/20'
          : 'bg-transparent'
      }`}
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
              className="text-navy font-medium text-sm tracking-wide hover:text-gold transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side: Language + CTA */}
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-2 text-xs text-navy/60">
            <button className="hover:text-gold transition-colors">RU</button>
            <span className="text-navy/30">/</span>
            <button className="hover:text-gold transition-colors">EN</button>
          </div>

          <button
            className="px-6 py-2 border-2 border-gold text-gold font-medium text-sm hover:bg-gold hover:text-navy transition-all duration-200 tracking-wide"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </nav>
  )
}
