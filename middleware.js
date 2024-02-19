import { NextResponse } from "next/server";
import { verifyJwtToken } from "./lib/auth";
import { isAuthPages } from "./utils/isAuthPages";

export async function middleware(request) {
  const { url, nextUrl } = request;
  const allCookies = request.cookies.getAll();
  const { value } = allCookies[0] ?? { value: null };

  const hasVerifiedToken = value && (await verifyJwtToken(value));
  const isAuthPageRequested = isAuthPages(nextUrl.pathname);

  // root
  if (nextUrl.pathname === "/") {
    if (hasVerifiedToken) {
      const response = NextResponse.redirect(new URL("/dashboard", url));
      return response;
    }
    const response = NextResponse.redirect(new URL("/login", url));
    return response;
  }

  // auth page
  if (isAuthPageRequested) {
    if (!hasVerifiedToken) {
      const response = NextResponse.next();
      return response;
    }
    const response = NextResponse.redirect(new URL("/dashboard", url));
    return response;
  }

  //* is there a verify token

  if (!hasVerifiedToken) {
    const response = NextResponse.redirect(new URL("/login", url));
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/", "/login", "/signup"],
};
