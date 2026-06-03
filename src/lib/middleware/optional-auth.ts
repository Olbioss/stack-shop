import { createMiddleware } from "@tanstack/react-start";
import { auth } from "../auth";

export const optionalAuthMiddleware = createMiddleware().server(
  async ({ request, next }) => {
    let session = null;

    try {
      session = await auth.api.getSession({
        headers: request.headers,
      });
    } catch {
      // No valid session - that's okay for optional auth
    }
    return next({
      context: { session, headers: request.headers },
    });
  }
);
