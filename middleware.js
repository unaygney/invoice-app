import { NextResponse } from "next/server";
import { verifyJwtToken } from "./lib/auth";
import { isAuthPages } from "./utils/isAuthPages";

export async function middleware(request) {
  const { url, nextUrl } = request;
  const allCokies = request.cookies.getAll();
  const { value } = allCokies[0] ?? { value: null };

  const hasVerifiedToken = value && (await verifyJwtToken(value));
  const isAuthPageRequested = isAuthPages(nextUrl.pathname);

  if (isAuthPageRequested) {
    if (!hasVerifiedToken) {
      const response = NextResponse.next();
      return response;
    }
    const response = NextResponse.redirect(new URL("/dashboard", url));
    return response;
  }

  if (!hasVerifiedToken) {
    return NextResponse.redirect(new URL("/login", url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard:path*", "/", "/login"],
};
