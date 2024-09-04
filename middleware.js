import { authConfig } from "@/app/authconfig";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(authConfig);

export function middleware(request) {
  const url = request.nextUrl.clone();
  const isLoggedIn = request.cookies.get("next-auth.session-token");

  if (url.pathname.startsWith("/dashboard") && !isLoggedIn) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  if (url.pathname === "/login" && isLoggedIn) {
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
