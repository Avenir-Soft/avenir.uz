'use client'

/* Oxirgi chegara: ildiz maketining o'zi qulasa shu ekran chiqadi. Bu yerda
   v2.css yuklanmagan bo'lishi mumkin, shuning uchun uslublar to'g'ridan-to'g'ri
   yozilgan va matn uch tilda — qaysi til ekani hali ma'lum emas. */

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('[avenir] ildiz xatosi:', error)
  }, [error])

  return (
    <html lang="uz">
      <body style={{ margin: 0, background: '#04101f', color: '#fff', fontFamily: 'Inter, system-ui, sans-serif' }}>
        <main
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.2rem',
            padding: '0 1.5rem',
            textAlign: 'center',
          }}
        >
          <h1 style={{ maxWidth: '34rem', fontSize: 'clamp(1.4rem, 3.4vw, 2rem)', fontWeight: 800 }}>
            Sahifani ko&#8217;rsatib bo&#8217;lmadi
          </h1>
          <p style={{ maxWidth: '32rem', fontSize: '0.98rem', color: 'rgba(255,255,255,0.55)' }}>
            Не удалось показать страницу · This page could not be shown
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: 'center' }}>
            <button
              type="button"
              onClick={reset}
              style={{
                cursor: 'pointer',
                borderRadius: '999px',
                border: 0,
                padding: '0.8rem 1.6rem',
                fontSize: '0.95rem',
                fontWeight: 600,
                background: '#fff',
                color: '#04101f',
              }}
            >
              Qayta urinish · Повторить · Try again
            </button>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- ildiz qulaganda router ham ishlamayotgan bo'lishi mumkin: to'liq qayta yuklash kerak */}
            <a
              href="/"
              style={{
                borderRadius: '999px',
                padding: '0.8rem 1.6rem',
                fontSize: '0.95rem',
                fontWeight: 600,
                border: '1px solid rgba(255,255,255,0.24)',
                color: '#fff',
                textDecoration: 'none',
              }}
            >
              avenir.uz
            </a>
          </div>
        </main>
      </body>
    </html>
  )
}
