import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { Provider } from 'next-auth/providers/index'

const providers: Provider[] = [
  GoogleProvider({
    clientId: String(process.env.GOOGLE_CLIENT_ID),
    clientSecret: String(process.env.GOOGLE_CLIENT_SECRET),
  }),
]

export const authOptions: NextAuthOptions = {
  providers,
  callbacks: {
    async signIn({ account }) {
      if (account?.provider === 'google') {
        return true
      }
      return false
    },
  },
}

export default NextAuth(authOptions)
