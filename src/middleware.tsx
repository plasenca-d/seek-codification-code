import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

import { SESSION_COOKIE_NAME } from "@/config/constants/session";

// const protectedRoutes = ["/", "/working-on", "/home"];
const publicRoutes = ["/auth/login"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  const isPublicRoute = publicRoutes.includes(path);

  const session = (await cookies()).get(SESSION_COOKIE_NAME)?.value;

  if (isPublicRoute && !session) {
    return NextResponse.next();
  }

  if (isPublicRoute && session) {
    return NextResponse.redirect(new URL(path, req.nextUrl));
  }

  if (!session) {
    if (req.cookies.has(SESSION_COOKIE_NAME)) {
      req.cookies.delete(SESSION_COOKIE_NAME);
    }
    return NextResponse.redirect(new URL("/auth/login", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
