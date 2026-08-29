import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { defaultLanguage, isLanguage } from '@/lib/languages'

const WWW_HOST = 'www.avenir.uz'
const APEX_HOST = 'avenir.uz'

function getHost(request: NextRequest) {
  const forwardedHost = request.headers.get('x-forwarded-host')
  const host = forwardedHost ?? request.headers.get('host')

  if (!host) return null
  return host.split(':')[0].toLowerCase()
}

/** Accept-Language'dan qo'llab-quvvatlanadigan tilni tanlaydi. */
function preferredLanguage(request: NextRequest) {
  const header = request.headers.get('accept-language')
  if (!header) return defaultLanguage

  const ranked = header
    .split(',')
    .map(part => {
      const [tag, ...params] = part.trim().split(';')
      const q = params.find(p => p.trim().startsWith('q='))
      return { tag: tag.trim().toLowerCase(), q: q ? Number.parseFloat(q.split('=')[1]) || 0 : 1 }
    })
    .sort((a, b) => b.q - a.q)

  for (const { tag } of ranked) {
    const base = tag.split('-')[0]
    if (isLanguage(base)) return base
  }

  return defaultLanguage
}

export function proxy(request: NextRequest) {
  const host = getHost(request)

  if (host === WWW_HOST) {
    const url = request.nextUrl.clone()
    url.hostname = APEX_HOST
    url.port = ''
    url.protocol = 'https'
    return NextResponse.redirect(url, 308)
  }

  const { pathname } = request.nextUrl
  const firstSegment = pathname.split('/').filter(Boolean)[0]

  // Til prefiksi bor — tegmaymiz.
  if (firstSegment && isLanguage(firstSegment)) return NextResponse.next()

  // Faqat ildizni tilga yo'naltiramiz; qolgan eski manzillar next.config
  // redirects'ida hal qilinadi.
  if (pathname === '/' || pathname === '') {
    const url = request.nextUrl.clone()
    url.pathname = `/${preferredLanguage(request)}`
    const response = NextResponse.redirect(url, 307)
    response.headers.set('Vary', 'Accept-Language')
    return response
  }

  return NextResponse.next()
}

/* Nuqta ikki teskari chiziq bilan yoziladi. Satr ichida `\.` shunchaki `.` ga
   aylanardi va shablon `.*..*` bo'lib qolardi — bu esa bitta belgidan uzun
   HAR QANDAY yo'lni istisnoga tushirardi. Natijada proxy faqat `/` da ishlagan:
   www.avenir.uz/ru apeksga yo'naltirilmay, sayt ikkita xostda ochilaverardi. */
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon\\.ico|.*\\..*).*)'],
}
