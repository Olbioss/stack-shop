import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import ShopTransactionsTemplate from "#/components/templates/vendor/shop-transactions-template";
import { createVendorTransactionsFetcher } from "#/hooks/vendor/use-vendor-entity-fetcher";
import { useVendorTransactionStats } from "#/hooks/vendor/use-vendor-transactions";

// claude --resume bed7ec17-2589-4202-b88b-59dca55fa760
export const Route = createFileRoute("/(vendor)/shop/$slug/transactions")({
  component: RouteComponent,
});

function RouteComponent() {
  const { slug } = Route.useParams();

  // Create fetcher for server-side pagination
  const server = useMemo(() => createVendorTransactionsFetcher(slug), [slug]);
  // Get transaction stats (small query, can stay as hook)
  const { data: stats } = useVendorTransactionStats(slug);

  return (
    <ShopTransactionsTemplate server={server} stats={stats} shopSlug={slug} />
  );
}
