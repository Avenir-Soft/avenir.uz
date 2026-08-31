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
          {/* Lug'atdagi kalit — butun satr; bo'lib yuborilsa tarjima topilmaydi */}
          {tv(lang, '© 2026 Avenir.uz · Barcha huquqlar himoyalangan')}
        </p>
        {/* «Yechimlar» va «Loyihalar» ro'yxat sahifalariga BITTA ham havola
            yo'q edi: shapkadagi punktlar bosh sahifaning langarlariga olib
            borardi, non ushoqlari ham o'sha yerga. Natijada `/services` va
            `/portfolio` sitemap da bor, saytda esa yetib bo'lmaydigan orolcha
            edi — va ular orqali yagona kirish yo'li bo'lgan mini-app xizmati
            ham. Podvaldan havola — eng arzon yechim: u 51 sahifaning
            hammasida turadi. */}
        <nav>
          <Link href={localizedPath(lang, '/services')}>{tv(lang, 'Yechimlar')}</Link>
          <Link href={localizedPath(lang, '/portfolio')}>{tv(lang, 'Loyihalar')}</Link>
          <Link href={localizedPath(lang, '/privacy')}>{tv(lang, 'Maxfiylik siyosati')}</Link>
          <Link href={localizedPath(lang, '/terms')}>{tv(lang, 'Foydalanish shartlari')}</Link>
        </nav>
      </div>
    </footer>
  )
}
