import { createFileRoute } from "@tanstack/react-router";
import { PageSkeleton } from "#/components/base/common/page-skeleton";
import AdminOrdersTemplate from "#/components/templates/admin/admin-orders-template";
import { createAdminOrdersFetcher } from "#/hooks/admin/use-admin-entity-fetchers";
import { useAdminOrderStats } from "#/hooks/admin/use-admin-orders";
import { listSearchSchema } from "#/lib/validators/list-search";

export const Route = createFileRoute("/(admin)/admin/orders/")({
  validateSearch: (search) => listSearchSchema.parse(search),
  component: RouteComponent,
  pendingComponent: PageSkeleton,
});

function RouteComponent() {
  const server = createAdminOrdersFetcher();
  const { data: stats } = useAdminOrderStats();

  return <AdminOrdersTemplate server={server} stats={stats} />;
}
