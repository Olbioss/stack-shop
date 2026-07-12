import VendorHeader from "#/components/base/vendor/vendor-header";
import ShopDashboardSidebar from "#/components/containers/vendor/shop/shop-dashboard-sidebar";
import { SidebarInset, SidebarProvider } from "#/components/ui/sidebar";
import { cn } from "#/lib/utils";

type Props = {
  shopName: string;
  shopSlug: string;
  headerTitle?: string;
  showSearch?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export default function ShopDashboardLayout({
  shopName,
  shopSlug,
  headerTitle,
  showSearch = true,
  className,
  children,
}: Props) {
  return (
    <SidebarProvider>
      <ShopDashboardSidebar shopName={shopName} shopSlug={shopSlug} />
      <SidebarInset>
        <VendorHeader
          title={headerTitle || `${shopName} Dashboard`}
          showSearch={showSearch}
          shopSlug={shopSlug}
          searchContext={{ kind: "shop", shopSlug }}
        />
        <main
          className={cn(
            "m-4 flex flex-1 flex-col gap-4 rounded-2xl border-2 border-dashed p-4 md:m-6 md:gap-6 md:p-6",
            className
          )}
        >
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
