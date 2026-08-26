import Link from 'next/link'
import { defaultLanguage } from '@/lib/languages'
import { localizedPath } from '@/lib/paths'

/* 404 — v2 qorong'i mavzusida, maket tugma va rang o'zgaruvchilari bilan */
export default function NotFound() {
  return (
    <main
      id="main"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.4rem',
        padding: '0 1.5rem',
        textAlign: 'center',
      }}
    >
      <p style={{ fontSize: '0.8rem', letterSpacing: '0.28em', color: 'var(--w-34)' }}>404</p>
      <h1 style={{ maxWidth: '38rem', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, color: 'var(--white)' }}>
        Sahifa topilmadi · Страница не найдена · Page not found
      </h1>
      <p style={{ maxWidth: '30rem', fontSize: '1rem', color: 'var(--w-52)' }}>
        Bu manzil bo&apos;yicha sahifa yo&apos;q. Bosh sahifadan davom eting.
      </p>
      <Link href={localizedPath(defaultLanguage)} className="btn btn--w">
        Avenir.uz
      </Link>
    </main>
  )
}
