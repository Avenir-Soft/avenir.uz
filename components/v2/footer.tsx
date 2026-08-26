import Link from 'next/link'
import { tv } from '@/lib/i18n-v2'
import type { Language } from '@/lib/languages'
import { localizedPath } from '@/lib/paths'

/* Maket podvali (index.html:791-797), yuridik satr bilan. */
export function V2Footer({ lang }: { lang: Language }) {
  return (
    <footer className="foot">
      <div className="shell foot__in">
        <p>
          {tv(lang, "Avenir Soft — Yakka tartibdagi tadbirkor Choriyev Xojiakbar Shuxrat O'g'li")}
          <br />
          © 2026 Avenir.uz · {tv(lang, 'Barcha huquqlar himoyalangan')}
        </p>
        <nav>
          <Link href={localizedPath(lang, '/privacy')}>{tv(lang, 'Maxfiylik siyosati')}</Link>
          <Link href={localizedPath(lang, '/terms')}>{tv(lang, 'Foydalanish shartlari')}</Link>
        </nav>
      </div>
    </footer>
  )
}
