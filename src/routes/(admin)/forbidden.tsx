import { createFileRoute } from "@tanstack/react-router";
import { AdminAccessDenied } from "#/components/base/error/admin-error-component";

export const Route = createFileRoute("/(admin)/forbidden")({
  component: AdminAccessDenied,
});
