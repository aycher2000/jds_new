import NextAuth from "next-auth"
import Google from "@auth/core/providers/google"
import { createTransport } from "nodemailer"

const handler = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    {
      id: "email",
      type: "email",
      from: process.env.EMAIL_FROM,
      server: {
        host: process.env.EMAIL_SERVER_HOST || "https://api.resend.com",
        port: process.env.EMAIL_SERVER_PORT ? parseInt(process.env.EMAIL_SERVER_PORT) : 443,
        auth: {
          user: "resend",
          pass: process.env.RESEND_API_KEY
        }
      },
      async sendVerificationRequest({ identifier, url }) {
        const transport = createTransport({
          host: process.env.EMAIL_SERVER_HOST || "https://api.resend.com",
          port: process.env.EMAIL_SERVER_PORT ? parseInt(process.env.EMAIL_SERVER_PORT) : 443,
          auth: {
            user: "resend",
            pass: process.env.RESEND_API_KEY
          }
        })

        const result = await transport.sendMail({
          to: identifier,
          from: process.env.EMAIL_FROM,
          subject: "Sign in to Just Dope Shop",
          text: `Click here to sign in: ${url}`,
          html: `
            <div style="background-color: #232323; color: white; padding: 20px; border-radius: 10px;">
              <h1 style="color: #C4A484;">Welcome to Just Dope Shop</h1>
              <p>Click the button below to sign in:</p>
              <a href="${url}" style="background-color: #C4A484; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin-top: 10px;">
                Sign in
              </a>
              <p style="margin-top: 20px; font-size: 12px; color: #666;">
                If you didn't request this email, you can safely ignore it.
              </p>
            </div>
          `
        })
        
        const { messageId } = result
        if (!messageId) {
          throw new Error("Failed to send verification email")
        }
      }
    }
  ],
  pages: {
    signIn: '/login',
    verifyRequest: '/verify-request',
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : '/dashboard'
    },
  },
})

export { handler as GET, handler as POST } 