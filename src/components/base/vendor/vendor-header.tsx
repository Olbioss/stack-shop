import { Link } from "@tanstack/react-router";
import { Bell, Settings } from "lucide-react";
import { Button } from "#/components/ui/button";
import { SidebarTrigger } from "#/components/ui/sidebar";
import { cn } from "#/lib/utils";
import { ModeToggle } from "../provider/mode-toggle";
import DashboardCommandPalette, {
  type DashboardSearchContext,
} from "./dashboard-command-palette";
import NotificationDropdown from "./notification-dropdown";

type Props = {
  title?: string;
  showSearch?: boolean;
  className?: string;
  shopSlug?: string;
  searchContext?: DashboardSearchContext;
};

export default function VendorHeader({
  title,
  showSearch = true,
  className,
  shopSlug,
  searchContext,
}: Props) {
  return (
    <header
      className={cn(
        "sticky top-0 z-10 flex h-16 items-center gap-4 border-b-2 border-dashed bg-background px-4 md:px-6",
        className
      )}
    >
      <SidebarTrigger />

      <div className="flex flex-1 items-center gap-4">
        <h1 className="font-bold text-lg uppercase tracking-tight md:text-xl">
          {title}
        </h1>

        {showSearch && (
          <div className="ml-auto flex w-full max-w-md items-center gap-2">
            <DashboardCommandPalette
              context={searchContext ?? { kind: "vendor" }}
            />
          </div>
        )}
      </div>

      <div className="flex items-center gap-2">
        {shopSlug ? (
          <NotificationDropdown shopSlug={shopSlug} />
        ) : (
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="size-5" />
            <span className="sr-only">Notifications</span>
          </Button>
        )}

        <Button variant="ghost" size="icon" asChild>
          <Link to="/admin/settings">
            <Settings className="size-5" />
            <span className="sr-only">Settings</span>
          </Link>
        </Button>

        <ModeToggle />
      </div>
    </header>
  );
}
