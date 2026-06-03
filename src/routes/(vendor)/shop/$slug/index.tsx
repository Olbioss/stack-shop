import { createFileRoute } from "@tanstack/react-router";
import { DollarSign, Package, ShoppingBag, TrendingUp } from "lucide-react";
import { ShopDashboardSkeleton } from "#/components/base/vendor/skeleton/shop-dashboard-skeleton";
import ShopDashboardTemplate from "#/components/templates/vendor/shop-dashboard-template";

export const Route = createFileRoute("/(vendor)/shop/$slug/")({
  component: RouteComponent,
  loader: async () => {
    // Simulate a delay to show the loading state
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {};
  },
  pendingComponent: ShopDashboardSkeleton,
  pendingMs: 0,
});

export const shopStats = [
  {
    title: "Monthly Revenue",
    value: "$12,345",
    change: "+12.5% from last month",
    icon: DollarSign,
    trend: "up" as const,
  },
  {
    title: "Total Products",
    value: "123",
    change: "+8 new products",
    icon: Package,
    trend: "up" as const,
  },
  {
    title: "Total Orders",
    value: "456",
    change: "+23% from last month",
    icon: ShoppingBag,
    trend: "up" as const,
  },
  {
    title: "Conversion Rate",
    value: "3.2%",
    change: "+0.5% from last month",
    icon: TrendingUp,
    trend: "up" as const,
  },
];

function RouteComponent() {
  const { slug } = Route.useParams();

  return <ShopDashboardTemplate shopName={slug} stats={shopStats} />;
}
