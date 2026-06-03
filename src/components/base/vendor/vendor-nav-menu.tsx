import { Link, useLocation } from "@tanstack/react-router";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "#/components/ui/sidebar";
import { cn } from "#/lib/utils";
import type { VendorNavItem } from "#/types/vendor";

type Props = {
  items: VendorNavItem[];
  className?: string;
};

export default function VendorNavMenu({ items, className }: Props) {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <SidebarMenu className={cn(className)}>
      {items.map((item) => {
        const isActive =
          pathname === item.href || pathname.startsWith(`${item.href}/`);
        const Icon = item.icon;

        return (
          <SidebarMenuItem key={item.href}>
            <SidebarMenuButton asChild isActive={isActive} tooltip={item.title}>
              <Link preload={false} to={item.href}>
                <Icon />
                <span>{item.title}</span>
                {item.badge && (
                  <span className="ml-auto flex size-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                    {item.badge}
                  </span>
                )}
              </Link>
            </SidebarMenuButton>

            {item.items && item.items.length > 0 && (
              <SidebarMenuSub>
                {item.items.map((subItem) => {
                  const isSubActive = pathname === subItem.href;
                  return (
                    <SidebarMenuSubItem key={subItem.href}>
                      <SidebarMenuSubButton asChild isActive={isSubActive}>
                        <Link to={subItem.href}>
                          <span>{subItem.title}</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  );
                })}
              </SidebarMenuSub>
            )}
          </SidebarMenuItem>
        );
      })}
    </SidebarMenu>
  );
}
