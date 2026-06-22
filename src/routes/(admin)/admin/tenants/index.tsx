import { createFileRoute } from "@tanstack/react-router";
import { PageSkeleton } from "#/components/base/common/page-skeleton";
import AdminTenantsTemplate from "#/components/templates/admin/tenants/admin-tenants-template";
import { createAdminTenantsFetcher } from "#/hooks/admin/use-admin-entity-fetchers";

export const Route = createFileRoute("/(admin)/admin/tenants/")({
  component: RouteComponent,
  pendingComponent: PageSkeleton,
});

function RouteComponent() {
  const server = createAdminTenantsFetcher();

  return <AdminTenantsTemplate server={server} />;
}
