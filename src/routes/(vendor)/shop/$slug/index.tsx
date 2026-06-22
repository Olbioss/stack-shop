import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { ShopDashboardSkeleton } from "#/components/base/vendor/skeleton/shop-dashboard-skeleton";
import ShopDashboardTemplate from "#/components/templates/vendor/shop-dashboard-template";
import { useShopDashboard } from "#/hooks/vendor/use-shop-dashboard";
import { shopBySlugQueryOptions } from "#/hooks/vendor/use-shops";

export const Route = createFileRoute("/(vendor)/shop/$slug/")({
  component: RouteComponent,
  pendingComponent: ShopDashboardSkeleton,
});

function RouteComponent() {
  const { slug } = Route.useParams();

  // Get shop data to retrieve shopId
  const { data: shopData } = useSuspenseQuery(shopBySlugQueryOptions(slug));
  const shopId = shopData?.shop?.id ?? "";

  // Fetch aggregated dashboard data
  const { data: dashboardData } = useShopDashboard(shopId, slug);

  return (
    <ShopDashboardTemplate shopName={slug} dashboardData={dashboardData} />
  );
}
