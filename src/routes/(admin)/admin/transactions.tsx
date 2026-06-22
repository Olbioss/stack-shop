import { createFileRoute } from "@tanstack/react-router";
import AdminTransactionsTemplate from "#/components/templates/admin/admin-transactions-template";
import { createAdminTransactionsFetcher } from "#/hooks/admin/use-admin-entity-fetchers";
import { useAdminTransactionStats } from "@/hooks/admin/use-admin-transactions";

export const Route = createFileRoute("/(admin)/admin/transactions")({
  component: RouteComponent,
});

function RouteComponent() {
  const server = createAdminTransactionsFetcher();
  const { data: stats } = useAdminTransactionStats();

  return <AdminTransactionsTemplate server={server} stats={stats} />;
}
