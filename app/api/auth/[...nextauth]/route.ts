import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { getConnection } from "@/lib/db";

const handler = NextAuth({
  providers: [
    //  Google
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    //  Facebook
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
      authorization: {
        params: { scope: "email" },
      },
    }),

    //  Email/Password
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }

        const db = getConnection();

        const [rows]: any = await db.query(
          "SELECT * FROM users WHERE email = ?",
          [credentials.email]
        );

        if (!rows.length) {
          throw new Error("User not found");
        }

        const user = rows[0];

        const isMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isMatch) {
          throw new Error("Invalid password");
        }

        return {
          id: user.id.toString(),
          name: user.full_name,
          email: user.email,
        };
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async signIn({ user, account }) {
      const db = getConnection();

      //  Handle Google & Facebook users
      if (
        account?.provider === "google" ||
        account?.provider === "facebook"
      ) {
        console.log("USER:", user)
      console.log("ACCOUNT:", account)
        const [existing]: any = await db.query(
          "SELECT * FROM users WHERE email = ?",
          [user.email]
        );

        if (!existing.length) {
          await db.query(
            "INSERT INTO users (full_name, email, provider, providerAccountId) VALUES (?, ?, ?, ?)",
            [user.name, user.email, account?.provider, account?.providerAccountId]
          );
        }
      }

      return true;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };