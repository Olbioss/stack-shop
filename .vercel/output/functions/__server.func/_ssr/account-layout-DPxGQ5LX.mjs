import { t as cn } from "./utils-Pgq5HWQm.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as buttonVariants, t as Button } from "./button-DQSToWRX.mjs";
import { a as useLocation, p as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as Package, Y as LogOut, i as User, ot as Heart } from "../_libs/lucide-react.mjs";
import { r as signOut } from "./auth-client-Jg3rYQV_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/account-layout-DPxGQ5LX.js
var import_jsx_runtime = require_jsx_runtime();
var sidebarItems = [
	{
		title: "Profile",
		href: "/profile",
		icon: User
	},
	{
		title: "My Orders",
		href: "/orders",
		icon: Package
	},
	{
		title: "My Reviews",
		href: "/my-reviews",
		icon: Package
	},
	{
		title: "My Wishlists",
		href: "/wishlist",
		icon: Heart
	}
];
function AccountSidebar() {
	const pathname = useLocation().pathname;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
		className: "@2xl:flex hidden @2xl:w-64 w-full flex-col gap-2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-4 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-2 font-semibold text-lg tracking-tight",
					children: "My Account"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-1",
					children: sidebarItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: item.href,
						className: cn(buttonVariants({
							variant: "ghost",
							size: "lg"
						}), "w-full justify-start", pathname === item.href ? "border-transparent bg-accent text-accent-foreground" : "border-transparent text-muted-foreground"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-4" }), item.title]
					}, item.href))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-4 py-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					size: "lg",
					className: "w-full justify-start",
					onClick: () => signOut(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-4" }), "Logout"]
				})
			})]
		})
	});
}
function AccountLayout({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "@container container mx-auto px-4 py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex @2xl:flex-row flex-col gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountSidebar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children
			})]
		})
	});
}
//#endregion
export { AccountLayout as t };
