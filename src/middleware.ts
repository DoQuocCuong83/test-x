import { withAuth } from 'next-auth/middleware'
import { ROUTERS } from './app/constant/router'

export default withAuth({
  pages: {
    signIn: ROUTERS.TEST_1,
    error: ROUTERS.TEST_1,
  },
})

export const config = { matcher: ['/test2/:path*'] }
