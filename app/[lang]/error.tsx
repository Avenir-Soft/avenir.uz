'use client'

/* Xato chegarasi. Ilgari umuman yo'q edi: mijoz tomonidagi bitta xato butun
   sahifani Next'ning standart «Application error» ekraniga aylantirardi.
   Endi sarlavha va podval joyida qoladi, foydalanuvchi esa davom eta oladi. */

import { useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { defaultLanguage, isLanguage, type Language } from '@/lib/languages'
import { localizedPath } from '@/lib/paths'

const COPY: Record<Language, { eyebrow: string; title: string; text: string; retry: string; home: string }> = {
  uz: {
    eyebrow: 'Xatolik',
    title: 'Sahifani ko‘rsatib bo‘lmadi',
    text: 'Vaqtinchalik nosozlik. Sahifani qayta yuklab ko‘ring — odatda shu yetadi.',
    retry: 'Qayta urinish',
    home: 'Bosh sahifa',
  },
  ru: {
    eyebrow: 'Ошибка',
    title: 'Не удалось показать страницу',
    text: 'Временный сбой. Попробуйте перезагрузить страницу — обычно этого достаточно.',
    retry: 'Повторить',
    home: 'На главную',
  },
  en: {
    eyebrow: 'Error',
    title: 'This page could not be shown',
    text: 'A temporary glitch. Try reloading the page — that usually does it.',
    retry: 'Try again',
    home: 'Home',
  },
}

export default function LanguageError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('[avenir] sahifa xatosi:', error)
    /* Parda ochiq qolgan bo'lishi mumkin — u faqat JS bilan olinadi. */
    try {
      document.body.classList.remove('intro-on')
      document.getElementById('intro')?.remove()
    } catch { /* mumkin emas — mayli */ }
  }, [error])

  const params = useParams<{ lang?: string }>()
  const raw = typeof params?.lang === 'string' ? params.lang : ''
  const lang: Language = isLanguage(raw) ? raw : defaultLanguage
  const t = COPY[lang]

  return (
    <main
      id="main"
      style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.4rem',
        padding: '6rem 1.5rem',
        textAlign: 'center',
      }}
    >
      <p style={{ fontSize: '0.8rem', letterSpacing: '0.28em', color: 'var(--w-34)' }}>
        {t.eyebrow.toUpperCase()}
      </p>
      <h1 style={{ maxWidth: '34rem', fontSize: 'clamp(1.6rem, 3.4vw, 2.3rem)', fontWeight: 800, color: 'var(--white)' }}>
        {t.title}
      </h1>
      <p style={{ maxWidth: '30rem', fontSize: '1rem', color: 'var(--w-52)' }}>{t.text}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: 'center' }}>
        <button type="button" onClick={reset} className="btn btn--w">
          {t.retry}
        </button>
        <Link href={localizedPath(lang)} className="btn">
          {t.home}
        </Link>
      </div>
    </main>
  )
}
