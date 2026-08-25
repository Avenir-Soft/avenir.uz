import Link from 'next/link'
import { defaultLanguage } from '@/lib/languages'
import { localizedPath } from '@/lib/paths'

export default function NotFound() {
  return (
    <main
      id="main"
      className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center"
      style={{ backgroundColor: '#F5F4F0', color: '#042147' }}
    >
      <p className="text-sm uppercase tracking-[0.28em]" style={{ color: 'rgba(4, 33, 71, 0.72)' }}>
        404
      </p>
      <h1 className="max-w-xl text-4xl font-serif font-bold md:text-5xl">
        Sahifa topilmadi · Страница не найдена · Page not found
      </h1>
      <p className="max-w-lg text-lg" style={{ color: 'rgba(4, 33, 71, 0.7)' }}>
        Bu manzil bo&apos;yicha sahifa yo&apos;q. Bosh sahifadan davom eting.
      </p>
      <Link href={localizedPath(defaultLanguage)} className="btn-avenir btn-avenir-primary px-8 py-3 text-base">
        Avenir.uz
      </Link>
    </main>
  )
}
