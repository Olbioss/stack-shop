import { createFileRoute } from "@tanstack/react-router";
import CartTemplate from "#/components/templates/store/cart-template";

export const Route = createFileRoute("/(store)/_layout/cart")({
  component: CartTemplate,
});
