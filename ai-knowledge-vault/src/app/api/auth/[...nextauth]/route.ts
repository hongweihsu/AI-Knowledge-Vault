import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    })
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async session({ session, token }) {
      // 可以在這裡加入用戶額外資訊
      return session
    },
    async jwt({ token, account, profile }) {
      // 處理 JWT token
      return token
    }
  },
  debug: process.env.NODE_ENV === 'development',
})

export { handler as GET, handler as POST }
