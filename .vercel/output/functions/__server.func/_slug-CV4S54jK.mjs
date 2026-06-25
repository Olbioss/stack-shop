import { o as useSession } from "./_ssr/auth-client-Jg3rYQV_.mjs";
import { t as cn } from "./_ssr/utils-Pgq5HWQm.mjs";
import { w as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./_ssr/button-DQSToWRX.mjs";
import { t as Separator$1 } from "./_ssr/separator-CLOPUVDG.mjs";
import { B as Package, Bt as Briefcase, D as Settings, Jt as ArrowLeft, St as CreditCard, at as House, f as Tags, g as Star, h as Store, mt as FileText, nt as Landmark, p as Tag, r as Users, s as TruckElectric, x as ShoppingBag } from "./_libs/lucide-react.mjs";
import { c as Outlet, p as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { a as SidebarGroupContent, c as SidebarInset, d as VendorHeader, f as VendorNavMenu, i as SidebarGroup, l as SidebarProvider, n as SidebarContent, o as SidebarGroupLabel, p as VendorUserMenu, r as SidebarFooter, s as SidebarHeader, t as Sidebar, u as SidebarRail } from "./_ssr/vendor-user-menu-CeQCPGbd.mjs";
import { t as Route } from "./_slug-Dy6kqAVX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-CV4S54jK.js
var import_jsx_runtime = require_jsx_runtime();
var getShopNavItems = (shopSlug) => [
	{
		title: "Overview",
		href: `/shop/${shopSlug}`,
		icon: House
	},
	{
		title: "Products",
		href: `/shop/${shopSlug}/products`,
		icon: Package
	},
	{
		title: "Coupons",
		href: `/shop/${shopSlug}/coupons`,
		icon: Tag
	},
	{
		title: "Orders",
		href: `/shop/${shopSlug}/orders`,
		icon: ShoppingBag
	},
	{
		title: "Categories",
		href: `/shop/${shopSlug}/categories`,
		icon: Tags
	},
	{
		title: "Tags",
		href: `/shop/${shopSlug}/tags`,
		icon: Tag
	},
	{
		title: "Brands",
		href: `/shop/${shopSlug}/brands`,
		icon: Briefcase
	},
	{
		title: "Attributes",
		href: `/shop/${shopSlug}/attributes`,
		icon: FileText
	},
	{
		title: "Reviews",
		href: `/shop/${shopSlug}/reviews`,
		icon: Star
	},
	{
		title: "Transactions",
		href: `/shop/${shopSlug}/transactions`,
		icon: CreditCard
	},
	{
		title: "Taxes",
		href: `/shop/${shopSlug}/taxes`,
		icon: Landmark
	},
	{
		title: "Shipping Methods",
		href: `/shop/${shopSlug}/shipping`,
		icon: TruckElectric
	},
	{
		title: "Staff",
		href: `/shop/${shopSlug}/staff`,
		icon: Users
	},
	{
		title: "Settings",
		href: `/shop/${shopSlug}/settings`,
		icon: Settings
	}
];
function ShopDashboardSidebar({ shopName, shopSlug }) {
	const { data: session } = useSession();
	const user = session?.user;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sidebar, {
		collapsible: "icon",
		variant: "inset",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4 px-2 py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						className: "justify-start gap-2",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/my-shop",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "group-data-[collapsible=icon]:hidden",
								children: "Back to Shops"
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator$1, { className: "bg-sidebar-border" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 px-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Store, { className: "size-6" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid flex-1 text-left leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate font-bold text-base",
								children: shopName
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate text-muted-foreground text-sm",
								children: "Shop Dashboard"
							})]
						})]
					})
				]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarGroup, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarGroupLabel, { children: "Shop Management" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarGroupContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VendorNavMenu, { items: getShopNavItems(shopSlug) }) })] }) }),
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
function ShopDashboardLayout({ shopName, shopSlug, headerTitle, showSearch = true, className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopDashboardSidebar, {
		shopName,
		shopSlug
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarInset, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VendorHeader, {
		title: headerTitle || `${shopName} Dashboard`,
		showSearch,
		shopSlug
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: cn("flex flex-1 flex-col gap-4 p-4 md:gap-6 md:p-6", className),
		children
	})] })] });
}
function RouteComponent() {
	const { slug } = Route.useParams();
	const slugParts = slug.split("-");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopDashboardLayout, {
		shopName: (slugParts.length > 1 ? slugParts.slice(0, -1) : slugParts).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" "),
		shopSlug: slug,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
//#endregion
export { RouteComponent as component };
