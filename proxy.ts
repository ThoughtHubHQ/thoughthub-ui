import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken")?.value;
  const { pathname, search } = request.nextUrl;

  const isGuestOnlyRoute =
    pathname === "/login" ||
    pathname === "/register" ||
    pathname === "/forgot-password";

  const isPublicAsset =
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico";

  if (!accessToken && !isGuestOnlyRoute && !isPublicAsset) {
    const callbackUrl = encodeURIComponent(`${pathname}${search}`);
    return NextResponse.redirect(
      new URL(`/login?next=${callbackUrl}`, request.url)
    );
  }

  if (accessToken && isGuestOnlyRoute) {
    const nextParam = request.nextUrl.searchParams.get("next");
    const destination = nextParam
      ? decodeURIComponent(nextParam)
      : "/dashboard";

    return NextResponse.redirect(new URL(destination, request.url));
  }

  if (pathname.startsWith("/api/proxy")) {
    const targetUrl = new URL(
      pathname.replace("/api/proxy", ""),
      "https://server.thoughthubhq.com"
    );
    return NextResponse.rewrite(targetUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};