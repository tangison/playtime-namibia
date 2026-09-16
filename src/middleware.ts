import { NextResponse, type NextRequest } from "next/server";

/**
 * Demo mode (DEMO_MODE=true): only the home page and the coaching team
 * page are open. Every other real route is rewritten to /locked with the
 * original path preserved in the URL bar. Unknown paths fall through to
 * the natural 404. Static assets, robots, sitemap and the manifest stay
 * reachable so the open pages keep working.
 *
 * With DEMO_MODE unset (the production build), everything passes through
 * untouched. The whole demo is also marked noindex so it cannot leak
 * into search results.
 */

const DEMO = process.env.DEMO_MODE === "true";

const OPEN_PATHS = new Set([
  "/",
  "/coaches",
  "/locked",
  "/robots.txt",
  "/sitemap.xml",
  "/manifest.webmanifest",
  "/favicon.ico",
]);

const OPEN_PREFIXES = ["/_next/", "/images/", "/favicon/"];

const LOCKED_ROUTES = new Set([
  "/about",
  "/programmes",
  "/programmes/school-partnerships",
  "/facilities",
  "/coaches-corner",
  "/gallery",
  "/events",
  "/partners",
  "/get-involved",
  "/contact",
  "/privacy",
]);

export function middleware(request: NextRequest) {
  if (!DEMO) return NextResponse.next();

  const { pathname } = request.nextUrl;
  const normalized = pathname.replace(/\/+$/, "") || "/";

  let response: NextResponse;

  const isOpen =
    OPEN_PATHS.has(normalized) ||
    OPEN_PREFIXES.some((prefix) => pathname.startsWith(prefix));

  if (isOpen || !LOCKED_ROUTES.has(normalized)) {
    response = NextResponse.next();
  } else {
    const url = request.nextUrl.clone();
    url.pathname = "/locked";
    url.search = `?from=${encodeURIComponent(normalized)}`;
    response = NextResponse.rewrite(url);
  }

  response.headers.set("X-Robots-Tag", "noindex, nofollow");
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
