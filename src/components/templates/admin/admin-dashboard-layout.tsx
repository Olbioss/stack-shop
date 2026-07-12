import type React from "react";
import VendorHeader from "#/components/base/vendor/vendor-header";
import AdminDashboardSidebar from "@/components/containers/admin/admin-dashboard-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

interface AdminDashboardLayoutProps {
  children: React.ReactNode;
  headerTitle?: string;
  showSearch?: boolean;
  className?: string;
}

export default function AdminDashboardLayout({
  children,
  headerTitle,
  showSearch,
  className,
}: AdminDashboardLayoutProps) {
  return (
    <SidebarProvider>
      <AdminDashboardSidebar />
      <SidebarInset>
        <VendorHeader
          title={headerTitle}
          showSearch={showSearch}
          searchContext={{ kind: "admin" }}
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
