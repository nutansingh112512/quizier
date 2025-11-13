import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  const authToken = request.cookies.get("authToken")?.value;
  const loggedin = !!authToken;

  const loginUrl = new URL("/login", request.url);
  const quizUrl = new URL("/quiz", request.url);
  const requestedPage = request.nextUrl.pathname;

  if (requestedPage === "/") return NextResponse.redirect(loginUrl);
  if (loggedin && requestedPage === "/login")
    return NextResponse.redirect(quizUrl);
  if (!loggedin && requestedPage.startsWith("/quiz"))
    return NextResponse.redirect(loginUrl);

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/quiz/:path*", "/login"],
};
