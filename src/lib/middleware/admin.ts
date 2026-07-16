import { redirect } from "@tanstack/react-router";
import { createMiddleware } from "@tanstack/react-start";
import { resolveSignInRedirect } from "@/lib/utils/auth-redirect";
import { auth } from "../auth";

export const adminMiddleware = createMiddleware().server(
  async ({ next, request }) => {
    const session = await auth.api.getSession({
      headers: request.headers,
    });
    // Redirect to sign-in if no valid session
    if (!session || !session.user) {
      throw redirect({
        to: "/sign-in",
        search: { redirectTo: resolveSignInRedirect(request) },
      });
    }
    // Check if user is admin
    if (session.user.role !== "admin") throw redirect({ to: "/forbidden" });

    return next({ context: { session, headers: request.headers } });
  }
);
