import { NextRequest, NextResponse } from 'next/server'

const PASSWORD = 'open'

const passwordPage = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Building Open</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background: #09090b;
      color: #fafafa;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .container { text-align: center; max-width: 360px; padding: 24px; }
    .logo { width: 48px; height: 48px; margin: 0 auto 24px; }
    h1 { font-size: 20px; font-weight: 600; margin-bottom: 8px; }
    p { color: #71717a; font-size: 14px; margin-bottom: 24px; }
    form { display: flex; gap: 8px; }
    input {
      flex: 1; padding: 10px 14px; background: #18181b;
      border: 1px solid #27272a; border-radius: 8px;
      color: #fafafa; font-size: 14px; outline: none;
    }
    input:focus { border-color: #3f3f46; }
    button {
      padding: 10px 20px; background: #22c55e; color: #000;
      border: none; border-radius: 8px; font-size: 14px;
      font-weight: 500; cursor: pointer;
    }
    button:hover { background: #4ade80; }
    .error { color: #ef4444; font-size: 13px; margin-top: 12px; display: none; }
  </style>
</head>
<body>
  <div class="container">
    <svg viewBox="0 0 48 40" xmlns="http://www.w3.org/2000/svg" class="logo">
      <text x="0" y="32" font-family="Space Grotesk, system-ui, sans-serif" font-weight="700" font-size="40" fill="#22c55e">b</text>
      <circle cx="36" cy="22" r="11" fill="#22c55e"/>
    </svg>
    <h1>Building Open</h1>
    <p>This site is in preview. Enter the password to continue.</p>
    <form method="POST" action="/api/auth">
      <input type="password" name="password" placeholder="Password" autofocus>
      <button type="submit">Enter</button>
    </form>
    ERRORMSG
  </div>
</body>
</html>`

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

  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/favicon') ||
    pathname === '/logo.svg' ||
    pathname === '/og-image.png'
  ) {
    return NextResponse.next()
  }

  const authed = request.cookies.get('bo_auth')?.value === '1'
  if (authed) {
    return NextResponse.next()
  }

  const errorParam = request.nextUrl.searchParams.get('error')
  const html = passwordPage.replace(
    'ERRORMSG',
    errorParam ? '<p class="error" style="display:block">Wrong password.</p>' : ''
  )

  return new NextResponse(html, {
    status: 200,
    headers: { 'Content-Type': 'text/html' },
  })
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon\\.ico|favicon\\.png|logo\\.svg|og-image\\.png).*)'],
}
