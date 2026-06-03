import { redirect } from "@tanstack/react-router";
import { createMiddleware } from "@tanstack/react-start";
import { auth } from "../auth";

const getRequestUrl = (request: Request) => {
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
};

export const adminMiddleware = createMiddleware().server(
  async ({ next, request }) => {
    const session = await auth.api.getSession({
      headers: request.headers,
    });
    // Redirect to sign-in if no valid session
    if (!session || !session.user) {
      const url = getRequestUrl(request);
      const redirectTo = url.pathname + url.search;
      throw redirect({
        to: "/sign-in",
        search: { redirectTo: redirectTo },
      });
    }
    // Check if user is admin
    if (session.user.role !== "admin") throw redirect({ to: "/forbidden" });

    return next({ context: { session, headers: request.headers } });
  }
);
