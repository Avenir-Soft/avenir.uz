'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useId, useRef, useState, useSyncExternalStore } from 'react'
import { createPortal } from 'react-dom'
import { useLanguage } from '@/components/language-provider'
import { languages, type Language } from '@/lib/languages'
import { switchLanguagePath } from '@/lib/paths'

/** Til nomlari tarjima qilinmaydi — har biri o'z tilida yoziladi. */
const nativeNames: Record<Language, string> = {
  uz: "O'zbekcha",
  ru: 'Русский',
  en: 'English',
}

const MENU_WIDTH = 176
const GAP = 8

interface LanguageSwitcherProps {
  /** To'q fon ustida turibdimi — tugma rangini shunga qarab tanlaymiz. */
  onDark?: boolean
  size?: 'bar' | 'menu'
  onNavigate?: () => void
}

export function LanguageSwitcher({ onDark = false, size = 'bar', onNavigate }: LanguageSwitcherProps) {
  const { language, t } = useLanguage()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  // Portal faqat gidratatsiyadan keyin chiziladi. useState bilan qilinsa
  // server va klient render'i mos kelmay, React #418 xatosi chiqadi.
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  )
  const [position, setPosition] = useState({ top: 0, left: 0, placement: 'below' as 'below' | 'above' })
  const buttonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLUListElement>(null)
  const listId = useId()

  // Ro'yxat navbar ichidagi `overflow: hidden` bilan kesilmasligi uchun
  // portalda, body'ning ostida chiziladi — joyini o'zimiz hisoblaymiz.
  const updatePosition = useCallback(() => {
    const button = buttonRef.current
    if (!button) return

    const rect = button.getBoundingClientRect()
    const estimatedHeight = languages.length * 44 + 12
    const spaceBelow = window.innerHeight - rect.bottom
    const placement = spaceBelow < estimatedHeight + GAP && rect.top > estimatedHeight ? 'above' : 'below'

    setPosition({
      top: placement === 'below' ? rect.bottom + GAP : rect.top - GAP - estimatedHeight,
      left: Math.max(GAP, Math.min(rect.right - MENU_WIDTH, window.innerWidth - MENU_WIDTH - GAP)),
      placement,
    })
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node
      if (buttonRef.current?.contains(target) || menuRef.current?.contains(target)) return
      setIsOpen(false)
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setIsOpen(false)
      buttonRef.current?.focus()
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('touchstart', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    window.addEventListener('scroll', updatePosition, { passive: true })
    window.addEventListener('resize', updatePosition)

    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('touchstart', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('scroll', updatePosition)
      window.removeEventListener('resize', updatePosition)
    }
  }, [isOpen, updatePosition])

  // Sahifa almashsa ro'yxat yopiladi (render paytida moslash — effekt emas).
  const [lastPath, setLastPath] = useState(pathname)
  if (lastPath !== pathname) {
    setLastPath(pathname)
    setIsOpen(false)
  }

  const triggerColor = onDark ? 'rgba(245, 244, 240, 0.95)' : 'rgba(4, 33, 71, 0.9)'
  const triggerBorder = onDark ? 'rgba(245, 244, 240, 0.32)' : 'rgba(4, 33, 71, 0.2)'
  const triggerBackground = onDark ? 'rgba(4, 33, 71, 0.4)' : 'rgba(255, 255, 255, 0.36)'

  const menu = (
    <ul
      ref={menuRef}
      id={listId}
      role="listbox"
      aria-label={t.nav.languageLabel}
      className={`lang-menu ${isOpen ? 'lang-menu-open' : 'lang-menu-closed'} ${
        position.placement === 'above' ? 'lang-menu-above' : ''
      }`}
      style={{ top: position.top, left: position.left, width: MENU_WIDTH }}
    >
      {languages.map(code => {
        const isActive = code === language

        return (
          <li key={code} role="option" aria-selected={isActive}>
            <Link
              href={switchLanguagePath(pathname, code)}
              hrefLang={code}
              lang={code}
              tabIndex={isOpen ? 0 : -1}
              onClick={() => {
                setIsOpen(false)
                onNavigate?.()
              }}
              className="flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors duration-200"
              style={{
                color: isActive ? '#6d5015' : 'rgba(4, 33, 71, 0.88)',
                backgroundColor: isActive ? 'rgba(201, 168, 76, 0.22)' : 'transparent',
                fontWeight: isActive ? 600 : 500,
              }}
            >
              <span>{nativeNames[code]}</span>
              <span
                className="text-[11px] tracking-[0.14em]"
                style={{ color: isActive ? '#6d5015' : 'rgba(4, 33, 71, 0.55)' }}
              >
                {code.toUpperCase()}
              </span>
            </Link>
          </li>
        )
      })}
    </ul>
  )

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listId}
        aria-label={t.nav.languageLabel}
        onClick={() => {
          // Joyni ochishdan oldin hisoblaymiz — effekt kerak emas.
          if (!isOpen) updatePosition()
          setIsOpen(open => !open)
        }}
        className={`liquid-chip flex items-center gap-1.5 rounded-full font-semibold transition-colors duration-200 ${
          size === 'menu' ? 'px-4 py-2 text-sm' : 'px-3.5 py-2 text-[13px]'
        }`}
        style={{
          color: triggerColor,
          borderColor: triggerBorder,
          backgroundColor: triggerBackground,
        }}
      >
        <span className="tracking-[0.06em]">{language.toUpperCase()}</span>
        <svg
          viewBox="0 0 12 8"
          aria-hidden="true"
          className={`h-2 w-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
        >
          <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {isMounted ? createPortal(menu, document.body) : null}
    </>
  )
}
