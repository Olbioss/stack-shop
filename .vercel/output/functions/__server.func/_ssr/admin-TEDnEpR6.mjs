import { t as cn } from "./utils-Pgq5HWQm.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { c as Outlet, p as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as Package, D as Settings, F as Percent, Q as List, St as CreditCard, W as MessageSquare, Wt as Award, at as House, et as Layers, h as Store, p as Tag, r as Users, x as ShoppingBag, zt as Building2 } from "../_libs/lucide-react.mjs";
import { o as useSession } from "./auth-client-Jg3rYQV_.mjs";
import { a as SidebarGroupContent, c as SidebarInset, d as VendorHeader, f as VendorNavMenu, i as SidebarGroup, l as SidebarProvider, n as SidebarContent, o as SidebarGroupLabel, p as VendorUserMenu, r as SidebarFooter, s as SidebarHeader, t as Sidebar, u as SidebarRail } from "./vendor-user-menu-CeQCPGbd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-TEDnEpR6.js
var import_jsx_runtime = require_jsx_runtime();
var adminNavItems = [
	{
		title: "Dashboard",
		href: "/admin",
		icon: House
	},
	{
		title: "My Store",
		href: "/admin/my-store",
		icon: Store
	},
	{
		title: "Products",
		href: "/admin/products",
		icon: Package
	},
	{
		title: "Reviews",
		href: "/admin/reviews",
		icon: MessageSquare
	},
	{
		title: "Coupons",
		href: "/admin/coupons",
		icon: Tag
	},
	{
		title: "Categories",
		href: "/admin/categories",
		icon: Layers
	},
	{
		title: "Tags",
		href: "/admin/tags",
		icon: Tag
	},
	{
		title: "Attributes",
		href: "/admin/attributes",
		icon: List
	},
	{
		title: "Brands",
		href: "/admin/brands",
		icon: Award
	},
	{
		title: "Taxes",
		href: "/admin/taxes",
		icon: Percent
	},
	{
		title: "Tenants",
		href: "/admin/tenants",
		icon: Building2
	},
	{
		title: "Staff",
		href: "/admin/staff",
		icon: Users
	},
	{
		title: "Users",
		href: "/admin/users",
		icon: Users
	},
	{
		title: "Orders",
		href: "/admin/orders",
		icon: ShoppingBag
	},
	{
		title: "Transactions",
		href: "/admin/transactions",
		icon: CreditCard
	},
	{
		title: "Settings",
		href: "/admin/settings",
		icon: Settings
	}
];
function AdminDashboardSidebar() {
	const { data: session } = useSession();
	const user = session?.user;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sidebar, {
		collapsible: "icon",
		variant: "inset",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 px-2 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "size-4" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid flex-1 text-left text-sm leading-tight",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate font-semibold",
						children: "ShopStack"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate text-muted-foreground text-xs",
						children: "Admin Portal"
					})]
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarGroup, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarGroupLabel, { children: "Administration" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarGroupContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VendorNavMenu, { items: adminNavItems }) })] }) }),
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
		]
	});
}
function AdminDashboardLayout({ children, headerTitle, showSearch, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminDashboardSidebar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarInset, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VendorHeader, {
		title: headerTitle,
		showSearch
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: cn("flex flex-1 flex-col gap-4 p-4 md:gap-6 md:p-6", className),
		children
	})] })] });
}
function RouteComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminDashboardLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) });
}
//#endregion
export { RouteComponent as component };
