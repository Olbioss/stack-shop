import { createFileRoute, Outlet } from "@tanstack/react-router";
import ShopDashboardLayout from "#/components/templates/vendor/shop-dashboard-layout";

export const Route = createFileRoute("/(vendor)/shop/$slug")({
  component: RouteComponent,
});

function RouteComponent() {
  const { slug } = Route.useParams();

  const slugParts = slug.split("-");
  const shopName = (slugParts.length > 1 ? slugParts.slice(0, -1) : slugParts)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <ShopDashboardLayout shopName={shopName} shopSlug={slug}>
      <Outlet />
    </ShopDashboardLayout>
  );
}
