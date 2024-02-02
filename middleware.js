import { NextResponse } from "next/server";

export function middleware(request) {
  const allCokies = request.cookies.getAll();
  const { value } = allCokies[0];

  if (!value) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (request.nextUrl.pathname.endsWith("/")) {
    if (value) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    return NextResponse.rewrite(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/dashboard:path*", "/"],
};
