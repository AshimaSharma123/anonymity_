import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { supabase } from "@/lib/supabase";

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

        // Find user
        const { data: users, error } = await supabase
          .from("users")
          .select("*")
          .eq("email", credentials.email)
          .limit(1);

        if (error) {
          throw new Error(error.message);
        }

        if (!users || users.length === 0) {
          throw new Error("User not found");
        }

        const user = users[0];

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
  if (account?.provider === "google" || account?.provider === "facebook") {

    await supabase
      .from("users")
      .upsert(
        {
          full_name: user.name,
          email: user.email,
          provider: account.provider,
          provider_account_id: account.providerAccountId,
        },
        {
          onConflict: "email",
        }
      );
  }

  return true;
},
  },

  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };