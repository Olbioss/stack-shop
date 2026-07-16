import { redirect } from "@tanstack/react-router";
import { createMiddleware } from "@tanstack/react-start";
import { auth } from "../auth";
import { resolveSignInRedirect } from "../utils/auth-redirect";

export const authMiddleware = createMiddleware().server(
  async ({ request, next }) => {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session || !session.user) {
      throw redirect({
        to: "/sign-in",
        search: { redirectTo: resolveSignInRedirect(request) },
      });
    }

    return next({ context: { session, headers: request.headers } });
  }
);
