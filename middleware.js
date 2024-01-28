import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export function middleware(request) {
  const cookiesList = cookies();
  const hasUser = cookiesList.has("user");

  if (!hasUser) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (request.nextUrl.pathname.endsWith("/")) {
    if (hasUser) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    return NextResponse.rewrite(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/dashboard", "/"],
};
