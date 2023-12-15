import { NextRequestWithAuth, withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'
import { ROUTERS } from './app/constant/router'

const middleware = (req: NextRequestWithAuth, res: NextResponse) => {
  // block ip JP
  let ip = req.ip ?? req.headers.get('x-real-ip')
  const forwardedFor = req.headers.get('x-forwarded-for')
  if (!ip && forwardedFor) {
    ip = forwardedFor.split(',').at(0) ?? 'Unknown'
  }

  /* if (ip?.includes('116.96.46.169')) {
    return NextResponse.redirect(new URL(ROUTERS.PAGE_403, req.url))
  } */

  // authentication
  if (req.nextUrl.pathname === ROUTERS.TEST_2) {
    const withAuthFunction = withAuth({
      pages: {
        signIn: ROUTERS.TEST_1,
        error: ROUTERS.TEST_1,
      },
    }) as Function
    return withAuthFunction(req)
  }

  return
}

export default middleware

export const config = { matcher: ['/test2/:path*', '/'] }
