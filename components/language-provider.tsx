'use client'

import { createContext, useContext, useMemo, type ReactNode } from 'react'
import type { Dictionary, Language } from '@/lib/languages'

interface LanguageContextValue {
  language: Language
  t: Dictionary
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

/**
 * Til endi URL'dan keladi (`/uz`, `/ru`, `/en`), localStorage'dan emas.
 * Lug'at server komponentida tanlanib, prop sifatida beriladi — shuning uchun
 * brauzerga faqat bitta tilning matni tushadi.
 */
export function LanguageProvider({
  language,
  dictionary,
  children,
}: {
  language: Language
  dictionary: Dictionary
  children: ReactNode
}) {
  const value = useMemo(() => ({ language, t: dictionary }), [language, dictionary])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }

  return context
}
