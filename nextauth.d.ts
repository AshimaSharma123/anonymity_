import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string | null;
      needsRoleSelection?: boolean;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    role?: string | null;
    needsRoleSelection?: boolean;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: string | null;
    needsRoleSelection?: boolean;
  }
}
