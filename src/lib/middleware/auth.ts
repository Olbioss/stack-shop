import { createMiddleware } from "@tanstack/react-start";
import { redirect } from "node_modules/@tanstack/router-core/dist/esm/redirect";
import { auth } from "../auth";

export const authMiddleware = createMiddleware().server(
  async ({ request, next }) => {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session || !session.user) {
      const url = new URL(request.url);
      const redirectTo = url.pathname + url.search;
      throw redirect({
        to: "/sign-in",
        search: { redirectTo },
      });
    }

    return next({ context: { session, headers: request.headers } });
  }
);
