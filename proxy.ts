import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const WWW_HOST = 'www.avenir.uz'
const APEX_HOST = 'avenir.uz'

function getHost(request: NextRequest) {
  const forwardedHost = request.headers.get('x-forwarded-host')
  const host = forwardedHost ?? request.headers.get('host')

  if (!host) return null
  return host.split(':')[0].toLowerCase()
}

export function proxy(request: NextRequest) {
  const host = getHost(request)

  if (host !== WWW_HOST) {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()
  url.host = APEX_HOST
  url.protocol = 'https'

  return NextResponse.redirect(url, 308)
}

export const config = {
  matcher: '/:path*',
}
