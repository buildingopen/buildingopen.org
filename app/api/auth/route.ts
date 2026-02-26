import { NextRequest, NextResponse } from 'next/server'

const PASSWORD = 'open'

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const password = formData.get('password') as string

  if (password === PASSWORD) {
    const response = NextResponse.redirect(new URL('/', request.url), 303)
    response.cookies.set('bo_auth', '1', {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax',
    })
    return response
  }

  return NextResponse.redirect(new URL('/?error=1', request.url), 303)
}
