import { getToken } from 'next-auth/jwt'
import { NextRequestWithAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'
import { ROUTERS } from './app/constant/router'
import { isIpJapan } from './app/helper/ip'

const middleware = async (req: NextRequestWithAuth) => {
  // block ip JP
  let ip = req.ip ?? req.headers.get('x-real-ip')
  const forwardedFor = req.headers.get('x-forwarded-for')
  if (!ip && forwardedFor) {
    ip = forwardedFor.split(',')?.at(0)?.split(':')?.at(3) ?? 'Unknown'
  }

  if (ip && (await isIpJapan(ip))) {
    return NextResponse.redirect(new URL(ROUTERS.PAGE_403, req.url))
  }

  // authentication
  if (req.nextUrl.pathname === ROUTERS.TEST_2) {
    const token = await getToken({ req })
    if (!token) {
      return NextResponse.redirect(new URL(ROUTERS.TEST_1, req.url))
    }
  }

  return
}

export default middleware

export const config = { matcher: ['/test2/:path*', '/'] }
