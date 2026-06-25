import { createFileRoute } from "@tanstack/react-router";
import OrderTemplate from "#/components/templates/store/accounts/order-template";
import { authMiddleware } from "#/lib/middleware/auth";

export const Route = createFileRoute("/(store)/_layout/orders")({
  server: { middleware: [authMiddleware] },
  component: OrderTemplate,
});
