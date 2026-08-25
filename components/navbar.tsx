'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { localizedPath } from '@/lib/paths'
import { useLanguage } from '@/components/language-provider'
import { LanguageSwitcher } from '@/components/language-switcher'

function isDarkBackgroundColor(color: string) {
  const match = color.match(/rgba?\(([^)]+)\)/)
  if (!match) return false

  const values = match[1]
    .split(',')
    .map(value => Number.parseFloat(value.trim()))

  const [r, g, b, alpha] = values
  if ([r, g, b].some(value => Number.isNaN(value))) return false
  if (typeof alpha === 'number' && !Number.isNaN(alpha) && alpha < 0.08) return false

  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255
  return luminance < 0.46
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isOnDarkBackground, setIsOnDarkBackground] = useState(false)
  const liquidRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const { language, t } = useLanguage()

  useEffect(() => {
    let ticking = false
    let lastProbe = 0

    const handleScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(timestamp => {
        setIsScrolled(window.scrollY > 50)

        // elementFromPoint + getComputedStyle layout'ni qayta hisoblatadi,
        // shuning uchun har kadrda emas, ~150 ms da bir marta o'lchaymiz.
        if (timestamp - lastProbe > 150) {
          lastProbe = timestamp
          const probeX = Math.floor(window.innerWidth / 2)
          const probeY = Math.min(window.innerHeight - 1, 140)
          const probeElement = document.elementFromPoint(probeX, probeY)
          const section = probeElement?.closest('section, footer')

          if (section) {
            const background = window.getComputedStyle(section).backgroundColor
            setIsOnDarkBackground(isDarkBackgroundColor(background))
          } else {
            setIsOnDarkBackground(false)
          }
        }

        ticking = false
      })
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const homeHref = localizedPath(language)
  const isHomePage = pathname === homeHref
  const sectionPrefix = isHomePage ? '' : homeHref

  const navLinks = [
    { key: 'portfolio', label: t.nav.links.portfolio, href: `${sectionPrefix}#portfolio` },
    { key: 'services', label: t.nav.links.services, href: `${sectionPrefix}#services` },
    { key: 'contact', label: t.nav.links.contact, href: `${sectionPrefix}#contact` },
  ]

  const closeMenu = () => setIsMenuOpen(false)

  const handleLiquidMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!liquidRef.current) return
    const rect = liquidRef.current.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100
    liquidRef.current.style.setProperty('--liquid-x', `${x.toFixed(2)}%`)
    liquidRef.current.style.setProperty('--liquid-y', `${y.toFixed(2)}%`)
  }

  const resetLiquid = () => {
    if (!liquidRef.current) return
    liquidRef.current.style.setProperty('--liquid-x', '18%')
    liquidRef.current.style.setProperty('--liquid-y', '14%')
  }

  const isGlassActive = isScrolled || isMenuOpen
  const useLightText = isOnDarkBackground && !isMenuOpen
  // To'q bo'limlar ustida menyu ham yorug' bo'lishi kerak — avval bu qiymat
  // hisoblanardi-yu, havolalarga qo'llanmasdan qolib ketgan edi.
  const navTextColor = useLightText ? 'rgba(245, 244, 240, 0.95)' : 'rgba(4, 33, 71, 0.9)'
  const navLineColor = useLightText ? '#F5F4F0' : '#042147'
  const logoSrc = '/Avenir-logo.png'

  return (
    <>
      <nav aria-label={t.nav.languageLabel} className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 sm:pt-4">
        <div className="relative mx-auto max-w-7xl rounded-[2.35rem] sm:rounded-full">
          <div
            ref={liquidRef}
            onMouseMove={handleLiquidMove}
            onMouseLeave={resetLiquid}
            className={`liquid-glass transition-transform duration-300 ${
              isGlassActive ? 'liquid-glass-active scale-100' : 'scale-[0.995]'
            }`}
            style={{ borderRadius: 'inherit' }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
            >
              <span
                className="absolute -left-12 top-2 h-14 w-36 rounded-full blur-2xl"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.44)' }}
              />
              <span
                className="absolute right-8 top-0 h-12 w-28 rounded-full blur-xl"
                style={{ backgroundColor: 'rgba(201, 168, 76, 0.22)' }}
              />
            </div>

            <div className="flex items-center justify-between gap-4 px-5 py-3.5 sm:px-6 sm:py-4">
              <Link
                href={homeHref}
                aria-label={t.nav.homeAria}
                className="flex items-center transition-opacity duration-200 hover:opacity-80"
                onClick={closeMenu}
              >
                <div className="relative h-10 w-24 sm:h-14 sm:w-32">
                  <Image
                    src={logoSrc}
                    alt={t.nav.logoAlt}
                    fill
                    priority
                    sizes="(min-width: 640px) 128px, 96px"
                    className="object-contain"
                  />
                </div>
              </Link>

              <div className="hidden items-center gap-6 md:flex lg:gap-8">
                {navLinks.map(link => (
                  <a
                    key={link.key}
                    href={link.href}
                    className="nav-link-gold text-[15px] lg:text-base font-semibold tracking-[0.01em] transition-colors duration-200"
                    style={{ color: navTextColor }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-3">
                {/* Til tanlash: bosilganda tagidan ro'yxat ochiladi.
                    md'dan boshlab ko'rinadi — 768-1023 px oralig'ida
                    ilgari na gamburger, na til tugmasi ko'rinmasdi. */}
                <div className="hidden md:block">
                  <LanguageSwitcher onDark={useLightText} />
                </div>

                <button
                  type="button"
                  aria-label={t.nav.toggleMenuAria}
                  aria-expanded={isMenuOpen}
                  className="liquid-chip relative flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200 md:hidden"
                  style={{
                    borderColor: useLightText ? 'rgba(245, 244, 240, 0.26)' : 'rgba(4, 33, 71, 0.2)',
                    backgroundColor: useLightText ? 'rgba(4, 33, 71, 0.3)' : 'rgba(255, 255, 255, 0.3)',
                  }}
                  onClick={() => setIsMenuOpen(prev => !prev)}
                >
                  <span
                    className={`absolute h-0.5 w-5 rounded-full transition-[transform,opacity] duration-300 ${
                      isMenuOpen ? 'translate-y-0 rotate-45' : '-translate-y-1.5'
                    }`}
                    style={{ backgroundColor: navLineColor }}
                  />
                  <span
                    className={`absolute h-0.5 w-5 rounded-full transition-[transform,opacity] duration-300 ${
                      isMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                    style={{ backgroundColor: navLineColor }}
                  />
                  <span
                    className={`absolute h-0.5 w-5 rounded-full transition-[transform,opacity] duration-300 ${
                      isMenuOpen ? 'translate-y-0 -rotate-45' : 'translate-y-1.5'
                    }`}
                    style={{ backgroundColor: navLineColor }}
                  />
                </button>
              </div>
            </div>
          </div>

          <div
            className={`absolute inset-x-0 top-full mt-2 origin-top transition-[opacity,transform] duration-300 md:hidden ${
              isMenuOpen
                ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
                : 'pointer-events-none -translate-y-2 scale-[0.98] opacity-0'
            }`}
          >
            <div
              className="liquid-menu overflow-hidden rounded-[1.8rem] p-5"
              style={{
                borderColor: 'rgba(201, 168, 76, 0.28)',
              }}
            >
              <div className="space-y-1">
                {navLinks.map((link, idx) => (
                  <a
                    key={link.key}
                    href={link.href}
                    onClick={closeMenu}
                    className={`group flex items-center justify-between rounded-xl px-3 py-3 text-base font-medium transition-[opacity,transform,background-color,color] duration-300 hover:bg-white/45 ${
                      isMenuOpen
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-2 opacity-0'
                    }`}
                    style={{
                      color: 'rgba(4, 33, 71, 0.9)',
                      transitionDelay: `${70 + idx * 45}ms`,
                    }}
                  >
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>

              <div
                className="mt-4 flex items-center justify-between pt-4"
                style={{ borderTop: '1px solid rgba(4, 33, 71, 0.12)' }}
              >
                <p
                  className="text-xs uppercase tracking-[0.18em]"
                  style={{ color: 'rgba(4, 33, 71, 0.55)' }}
                >
                  {t.nav.languageLabel}
                </p>
                <LanguageSwitcher size="menu" onNavigate={closeMenu} />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <button
        type="button"
        aria-label={t.nav.closeMenuAria}
        className={`liquid-overlay md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{ backgroundColor: 'rgba(4, 33, 71, 0.2)' }}
        onClick={closeMenu}
      />
    </>
  )
}
