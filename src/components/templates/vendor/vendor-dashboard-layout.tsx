import type { ReactNode } from "react";
import VendorHeader from "#/components/base/vendor/vendor-header";
import VendorDashboardSidebar from "#/components/containers/vendor/vendor-dashboard-sidebar";
import { SidebarInset, SidebarProvider } from "#/components/ui/sidebar";
import { cn } from "#/lib/utils";

type Props = {
  children: ReactNode;
  headerTitle?: string;
  showSearch?: boolean;
  className?: string;
};

export default function VendorDashboardLayout({
  children,
  headerTitle = "Dashboard",
  showSearch = true,
  className,
}: Props) {
  return (
    <SidebarProvider>
      <VendorDashboardSidebar />
      <SidebarInset>
        <VendorHeader title={headerTitle} showSearch={showSearch} />
        <main
          className={cn(
            "@container m-4 flex flex-1 flex-col gap-4 rounded-2xl border-2 border-dashed p-4 md:m-6 md:gap-6 md:p-6",
            className
          )}
        >
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
