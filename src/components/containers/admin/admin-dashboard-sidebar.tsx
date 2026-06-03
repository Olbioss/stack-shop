import { Building2 } from "lucide-react";
import VendorNavMenu from "#/components/base/vendor/vendor-nav-menu";
import VendorUserMenu from "#/components/base/vendor/vendor-user-menu";
import { adminNavItems } from "#/lib/constants/admin.routes";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

const mockAdmin = {
  name: "Super Admin",
  email: "admin@shopstack.com",
  avatar: "",
  role: "Super Admin",
};

export default function AdminDashboardSidebar() {
  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-4">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Building2 className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">ShopStack</span>
            <span className="truncate text-muted-foreground text-xs">
              Admin Portal
            </span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Administration</SidebarGroupLabel>
          <SidebarGroupContent>
            <VendorNavMenu items={adminNavItems} />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <VendorUserMenu user={mockAdmin} />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
