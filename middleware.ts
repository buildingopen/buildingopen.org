import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl
  const host = request.headers.get('host') || ''

  // Redirect .com to .org (permanent 301)
  if (host.includes('buildingopen.com')) {
    return NextResponse.redirect(
      `https://buildingopen.org${pathname}${search}`,
      { status: 301 }
    )
  }

  // wrapped.buildingopen.org: rewrite paths to /wrapped prefix
  if (host.startsWith('wrapped.')) {
    if (pathname === '/') {
      return NextResponse.rewrite(new URL('/wrapped', request.url))
    }
    if (!pathname.startsWith('/wrapped') && !pathname.startsWith('/api/') && !pathname.startsWith('/_next/')) {
      return NextResponse.rewrite(new URL(`/wrapped${pathname}`, request.url))
    }
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon\\.ico|favicon\\.png|logo\\.svg|og-image\\.png).*)'],
}
