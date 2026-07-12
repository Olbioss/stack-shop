import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import ShopOrdersTemplate from "#/components/templates/vendor/shop-orders-template";
import { createVendorOrdersFetcher } from "#/hooks/vendor/use-vendor-entity-fetcher";
import { useVendorOrderStats } from "#/hooks/vendor/use-vendor-orders";
import { listSearchSchema } from "#/lib/validators/list-search";

export const Route = createFileRoute("/(vendor)/shop/$slug/orders/")({
  validateSearch: (search) => listSearchSchema.parse(search),
  component: RouteComponent,
});

function RouteComponent() {
  const { slug } = Route.useParams() as { slug: string };
  const { data: stats } = useVendorOrderStats(slug);

  const server = useMemo(() => createVendorOrdersFetcher(slug), [slug]);

  return <ShopOrdersTemplate server={server} stats={stats} shopSlug={slug} />;
}
