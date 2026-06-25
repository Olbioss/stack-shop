import { o as useSession } from "./_ssr/auth-client-Jg3rYQV_.mjs";
import { t as cn } from "./_ssr/utils-Pgq5HWQm.mjs";
import { w as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./_ssr/button-DQSToWRX.mjs";
import { at as House, h as Store } from "./_libs/lucide-react.mjs";
import { c as Outlet, p as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { o as useQuery } from "./_libs/tanstack__react-query.mjs";
import { i as vendorShopsQueryOptions } from "./_ssr/use-shops-Cbmwju82.mjs";
import { a as SidebarGroupContent, c as SidebarInset, d as VendorHeader, f as VendorNavMenu, i as SidebarGroup, l as SidebarProvider, n as SidebarContent, o as SidebarGroupLabel, p as VendorUserMenu, r as SidebarFooter, s as SidebarHeader, t as Sidebar, u as SidebarRail } from "./_ssr/vendor-user-menu-CeQCPGbd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_layout-fbEWDvwC.js
var import_jsx_runtime = require_jsx_runtime();
function VendorDashboardSidebar() {
	const { data: session } = useSession();
	const { data: shopData } = useQuery(vendorShopsQueryOptions());
	const shopCount = shopData?.shops?.length ?? 0;
	const user = session?.user;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sidebar, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3 px-2 py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Store, { className: "size-6" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid flex-1 text-left leading-tight",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "truncate font-bold text-base",
					children: "ShopStack"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "truncate text-muted-foreground text-sm",
					children: "Vendor Portal"
				})]
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarGroup, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarGroupLabel, { children: "Main Menu" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarGroupContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VendorNavMenu, { items: [{
			title: "Dashboard",
			href: "/dashboard",
			icon: House
		}, {
			title: "My Shops",
			href: "/my-shop",
			icon: Store,
			badge: shopCount > 0 ? String(shopCount) : void 0
		}] }) })] }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarFooter, { children: user ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VendorUserMenu, { user }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/sign-in",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "default",
				className: "w-full",
				type: "button",
				size: "lg",
				children: "Sign In"
			})
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarRail, {})
	] });
}
function VendorDashboardLayout({ children, headerTitle = "Dashboard", showSearch = true, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VendorDashboardSidebar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarInset, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VendorHeader, {
		title: headerTitle,
		showSearch
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: cn("@container flex flex-1 flex-col gap-4 p-4 md:gap-6 md:p-6", className),
		children
	})] })] });
}
function RouteComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VendorDashboardLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) });
}
//#endregion
export { RouteComponent as component };
