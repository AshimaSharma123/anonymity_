import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const { pathname } = req.nextUrl;
    const role = token?.role as string | null | undefined;
    const needsRoleSelection = !role;

    if (token && needsRoleSelection) {
      if (
        pathname !== "/select-role" &&
        pathname !== "/auth-redirect"
      ) {
        return NextResponse.redirect(new URL("/select-role", req.url));
      }
      return NextResponse.next();
    }

    if (token && (pathname === "/login" || pathname === "/signup")) {
      if (role === "admin") {
        return NextResponse.redirect(new URL("/admin/dashboard", req.url));
      }
      if (role === "guest_teacher") {
        return NextResponse.redirect(new URL("/my-reports", req.url));
      }
    }

    if (
      !token &&
      (pathname.startsWith("/admin") ||
        pathname.startsWith("/my-reports") ||
        pathname.startsWith("/submit-report"))
    ) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    if (token && pathname.startsWith("/admin") && role !== "admin") {
      return NextResponse.redirect(new URL("/my-reports", req.url));
    }
  },
  {
    callbacks: {
      authorized: () => true,
    },
  }
);

export const config = {
  matcher: [
    "/login",
    "/signup",
    "/admin/:path*",
    "/my-reports",
    "/submit-report",
    "/select-role",
    "/auth-redirect",
  ],
};
