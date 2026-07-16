/**
 * Helpers for computing the `redirectTo` search param used by the sign-in
 * flow. Auth middlewares run both as route server middleware (request.url is
 * the page URL) and as server-function middleware (request.url is the
 * `/_serverFn/<hash>` RPC endpoint, which must never be used as a navigation
 * target — see wiki bug "sign-in redirects to _serverFn URL → 404").
 */

const SERVER_FN_BASE = "/_serverFn/";

const AUTH_PAGES = ["/sign-in", "/sign-up"];

/**
 * Returns `path` if it is a safe internal page path, otherwise "/".
 * Rejects absolute/protocol-relative URLs and serverFn RPC endpoints.
 *
 * Auth pages are unwrapped rather than kept: a redirect target of
 * "/sign-in?redirectTo=/checkout" (produced when a guarded call fires while
 * the user is already on the sign-in page) collapses to "/checkout", so
 * post-login navigation never lands back on the sign-in page.
 */
export function sanitizeRedirectTo(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) return "/";
  if (path.startsWith(SERVER_FN_BASE)) return "/";
  const url = new URL(path, "http://internal");
  if (AUTH_PAGES.includes(url.pathname)) {
    const inner = url.searchParams.get("redirectTo");
    return inner ? sanitizeRedirectTo(inner) : "/";
  }
  return path;
}

type RequestLike = {
  url: string;
  headers: Headers;
};

function toAbsoluteUrl(request: RequestLike): URL {
  try {
    return new URL(request.url);
  } catch {
    const headers = request.headers;
    const proto = headers.get("x-forwarded-proto") ?? "http";
    const host =
      headers.get("x-forwarded-host") ??
      headers.get("host") ??
      "localhost:3000";
    return new URL(request.url, `${proto}://${host}`);
  }
}

/**
 * Resolves where the user should return to after signing in.
 *
 * For page requests this is the requested path itself. For serverFn RPC
 * requests the page the user is on only exists in the same-origin Referer
 * header; without one we fall back to "/".
 */
export function resolveSignInRedirect(request: RequestLike): string {
  const url = toAbsoluteUrl(request);

  if (!url.pathname.startsWith(SERVER_FN_BASE)) {
    return sanitizeRedirectTo(url.pathname + url.search);
  }

  const referer = request.headers.get("referer");
  if (!referer) return "/";
  try {
    const refererUrl = new URL(referer);
    if (refererUrl.origin !== url.origin) return "/";
    return sanitizeRedirectTo(refererUrl.pathname + refererUrl.search);
  } catch {
    return "/";
  }
}
