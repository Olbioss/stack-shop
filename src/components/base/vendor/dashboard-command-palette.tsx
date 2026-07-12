"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import {
  ArrowLeft,
  ExternalLink,
  Home,
  Loader2,
  LogOut,
  type LucideIcon,
  Package,
  Search,
  ShoppingBag,
  Store,
  SunMoon,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "#/components/base/provider/theme-provider";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "#/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "#/components/ui/dialog";
import { shopBySlugQueryOptions } from "#/hooks/vendor/use-shops";
import { signOut } from "#/lib/auth-client";
import { adminNavItems } from "#/lib/constants/admin.routes";
import { getShopNavItems } from "#/lib/constants/vendors.routes";
import { getAdminOrders } from "#/lib/functions/admin/order";
import { getAdminProducts } from "#/lib/functions/admin/product";
import { getVendorOrders } from "#/lib/functions/vendor/order";
import { getProducts } from "#/lib/functions/vendor/products";
import { cn } from "#/lib/utils";
import type { VendorNavItem } from "#/types/vendor";

export type DashboardSearchContext =
  | { kind: "shop"; shopSlug: string }
  | { kind: "admin" }
  | { kind: "vendor" };

type PaletteAction = {
  id: string;
  title: string;
  icon: LucideIcon;
  onSelect: () => void;
};

const MIN_QUERY_LENGTH = 2;
const RESULT_LIMIT = 5;

const vendorNavItems: VendorNavItem[] = [
  { title: "Dashboard", href: "/dashboard", icon: Home },
  { title: "My Shops", href: "/my-shop", icon: Store },
];

/** Maps an order status to a semantic-token text color. */
function orderStatusColor(status: string): string {
  switch (status) {
    case "pending":
    case "confirmed":
      return "text-warning";
    case "processing":
    case "shipped":
      return "text-info";
    case "delivered":
      return "text-success";
    case "cancelled":
    case "refunded":
      return "text-destructive";
    default:
      return "text-muted-foreground";
  }
}

function formatPrice(value: string | number): string {
  const num = typeof value === "string" ? Number.parseFloat(value) : value;
  return `$${(Number.isFinite(num) ? num : 0).toFixed(2)}`;
}

export default function DashboardCommandPalette({
  context,
}: {
  context: DashboardSearchContext;
}) {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [isMac, setIsMac] = useState(true);

  const showEntitySearch = context.kind === "shop" || context.kind === "admin";
  const isSearching = debouncedQuery.length >= MIN_QUERY_LENGTH;
  const isRecent = debouncedQuery.length === 0;

  // Platform hint for the trigger shortcut chip.
  useEffect(() => {
    if (typeof navigator !== "undefined") {
      setIsMac(/mac/i.test(navigator.platform));
    }
  }, []);

  // Global ⌘K / Ctrl+K toggle.
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // Debounce the typed query (matches the storefront searchbar timing).
  useEffect(() => {
    const id = setTimeout(() => setDebouncedQuery(query.trim()), 300);
    return () => clearTimeout(id);
  }, [query]);

  // Reset input when the dialog closes.
  useEffect(() => {
    if (!open) {
      setQuery("");
      setDebouncedQuery("");
    }
  }, [open]);

  const run = (fn: () => void) => {
    setOpen(false);
    fn();
  };

  // --- Pages ---------------------------------------------------------------
  const navItems = useMemo<VendorNavItem[]>(() => {
    if (context.kind === "shop") return getShopNavItems(context.shopSlug);
    if (context.kind === "admin") return adminNavItems;
    return vendorNavItems;
  }, [context]);

  const filteredNav = useMemo(() => {
    const q = debouncedQuery.toLowerCase();
    if (!q) return navItems;
    return navItems.filter((item) => item.title.toLowerCase().includes(q));
  }, [navItems, debouncedQuery]);

  // --- Actions -------------------------------------------------------------
  const actions = useMemo<PaletteAction[]>(() => {
    const list: PaletteAction[] = [
      {
        id: "toggle-theme",
        title:
          theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
        icon: SunMoon,
        onSelect: () => setTheme(theme === "dark" ? "light" : "dark"),
      },
      {
        id: "storefront",
        title: "Go to storefront",
        icon: ExternalLink,
        onSelect: () => navigate({ to: "/" }),
      },
    ];
    if (context.kind === "shop") {
      list.push({
        id: "back-to-shops",
        title: "Back to shops",
        icon: ArrowLeft,
        onSelect: () => navigate({ to: "/my-shop" }),
      });
    }
    list.push({
      id: "sign-out",
      title: "Sign out",
      icon: LogOut,
      onSelect: async () => {
        await signOut();
        navigate({ to: "/" });
      },
    });
    return list;
  }, [theme, setTheme, navigate, context]);

  const filteredActions = useMemo(() => {
    const q = debouncedQuery.toLowerCase();
    if (!q) return actions;
    return actions.filter((a) => a.title.toLowerCase().includes(q));
  }, [actions, debouncedQuery]);

  // --- Entity search (orders + products) -----------------------------------
  // Resolve shopId for vendor product search (cached by the products page).
  const shopSlug = context.kind === "shop" ? context.shopSlug : "";
  const { data: shopData } = useQuery({
    ...shopBySlugQueryOptions(shopSlug),
    enabled: open && context.kind === "shop",
  });
  const shopId = shopData?.shop?.id ?? "";

  // Orders run for both an empty query (recent) and an active search.
  const ordersEnabled = open && showEntitySearch && (isRecent || isSearching);
  const ordersQuery = useQuery({
    queryKey: ["command-palette", "orders", context, debouncedQuery],
    queryFn: async () => {
      if (context.kind === "shop") {
        const res = await getVendorOrders({
          data: {
            shopSlug: context.shopSlug,
            search: debouncedQuery,
            limit: RESULT_LIMIT,
            offset: 0,
          },
        });
        return res.orders ?? [];
      }
      const res = await getAdminOrders({
        data: { search: debouncedQuery, limit: RESULT_LIMIT, offset: 0 },
      });
      return res.orders ?? [];
    },
    enabled: ordersEnabled,
    placeholderData: keepPreviousData,
  });

  const productsEnabled =
    open &&
    showEntitySearch &&
    isSearching &&
    (context.kind === "admin" || Boolean(shopId));
  const productsQuery = useQuery({
    queryKey: ["command-palette", "products", context, debouncedQuery, shopId],
    queryFn: async () => {
      if (context.kind === "shop") {
        const res = await getProducts({
          data: {
            shopId,
            search: debouncedQuery,
            limit: RESULT_LIMIT,
            offset: 0,
          },
        });
        return res.data ?? [];
      }
      const res = await getAdminProducts({
        data: { search: debouncedQuery, limit: RESULT_LIMIT, offset: 0 },
      });
      return res.data ?? [];
    },
    enabled: productsEnabled,
    placeholderData: keepPreviousData,
  });

  const orders = ordersEnabled ? (ordersQuery.data ?? []) : [];
  const products = productsEnabled ? (productsQuery.data ?? []) : [];
  const isEntityLoading =
    (ordersEnabled && ordersQuery.isLoading) ||
    (productsEnabled && productsQuery.isLoading);

  const goToOrder = (orderId: string) => {
    if (context.kind === "shop") {
      navigate({
        to: "/shop/$slug/orders/$orderId",
        params: { slug: context.shopSlug, orderId },
      });
    } else {
      navigate({ to: "/admin/orders/$orderId", params: { orderId } });
    }
  };

  const goToProductsList = () => {
    if (context.kind === "shop") {
      navigate({
        to: "/shop/$slug/products",
        params: { slug: context.shopSlug },
      });
    } else {
      navigate({ to: "/admin/products" });
    }
  };

  const showEmpty =
    isSearching &&
    !isEntityLoading &&
    filteredNav.length === 0 &&
    filteredActions.length === 0 &&
    orders.length === 0 &&
    products.length === 0;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex h-9 w-full max-w-md items-center gap-2 rounded-lg border border-input bg-background px-3 text-muted-foreground text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        <Search className="size-4 shrink-0" />
        <span className="flex-1 text-left">Search…</span>
        <kbd className="pointer-events-none hidden select-none items-center gap-0.5 rounded border bg-muted px-1.5 font-mono text-[10px] text-muted-foreground sm:inline-flex">
          {isMac ? "⌘" : "Ctrl"}K
        </kbd>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          showCloseButton={false}
          className="overflow-hidden border-2 border-dashed p-0"
        >
          <DialogTitle className="sr-only">Dashboard search</DialogTitle>
          <DialogDescription className="sr-only">
            Search pages, orders, and products
          </DialogDescription>
          <Command
            shouldFilter={false}
            className="**:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5"
          >
            <CommandInput
              value={query}
              onValueChange={setQuery}
              placeholder="Search pages, orders, products…"
            />
            <CommandList>
              {showEmpty && <CommandEmpty>No results found.</CommandEmpty>}

              {filteredNav.length > 0 && (
                <CommandGroup heading="Pages">
                  {filteredNav.map((item) => {
                    const Icon = item.icon;
                    return (
                      <CommandItem
                        key={item.href}
                        value={`page:${item.href}`}
                        onSelect={() => run(() => navigate({ to: item.href }))}
                      >
                        <Icon />
                        <span>{item.title}</span>
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              )}

              {showEntitySearch && orders.length > 0 && (
                <>
                  <CommandSeparator />
                  <CommandGroup heading={isRecent ? "Recent orders" : "Orders"}>
                    {orders.map((order) => (
                      <CommandItem
                        key={order.id}
                        value={`order:${order.id}`}
                        onSelect={() => run(() => goToOrder(order.id))}
                      >
                        <ShoppingBag />
                        <span className="font-mono">#{order.orderNumber}</span>
                        <span className="ml-auto flex items-center gap-2">
                          <span className="font-mono text-muted-foreground text-xs">
                            {formatPrice(order.totalAmount)}
                          </span>
                          <span
                            className={cn(
                              "text-xs capitalize",
                              orderStatusColor(order.status)
                            )}
                          >
                            {order.status}
                          </span>
                        </span>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </>
              )}

              {showEntitySearch && products.length > 0 && (
                <>
                  <CommandSeparator />
                  <CommandGroup heading="Products">
                    {products.map((product) => (
                      <CommandItem
                        key={product.id}
                        value={`product:${product.id}`}
                        onSelect={() => run(goToProductsList)}
                      >
                        <Package />
                        <span className="truncate">{product.name}</span>
                        <span className="ml-auto font-mono text-muted-foreground text-xs">
                          {formatPrice(product.sellingPrice)}
                        </span>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </>
              )}

              {filteredActions.length > 0 && (
                <>
                  <CommandSeparator />
                  <CommandGroup heading="Actions">
                    {filteredActions.map((action) => {
                      const Icon = action.icon;
                      return (
                        <CommandItem
                          key={action.id}
                          value={`action:${action.id}`}
                          onSelect={() => run(action.onSelect)}
                        >
                          <Icon />
                          <span>{action.title}</span>
                        </CommandItem>
                      );
                    })}
                  </CommandGroup>
                </>
              )}

              {isEntityLoading && (
                <div className="flex items-center justify-center gap-2 py-6 text-muted-foreground text-sm">
                  <Loader2 className="size-4 animate-spin" />
                  Searching…
                </div>
              )}

              {showEntitySearch &&
                debouncedQuery.length > 0 &&
                debouncedQuery.length < MIN_QUERY_LENGTH && (
                  <p className="py-6 text-center text-muted-foreground text-sm">
                    Keep typing to search orders and products…
                  </p>
                )}
            </CommandList>

            <div className="flex items-center gap-3 border-t px-3 py-2 text-[11px] text-muted-foreground">
              <span className="flex items-center gap-1">
                <kbd className="rounded border bg-muted px-1 font-mono">↑↓</kbd>
                Navigate
              </span>
              <span className="flex items-center gap-1">
                <kbd className="rounded border bg-muted px-1 font-mono">↵</kbd>
                Open
              </span>
              <span className="flex items-center gap-1">
                <kbd className="rounded border bg-muted px-1 font-mono">
                  esc
                </kbd>
                Close
              </span>
            </div>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  );
}
