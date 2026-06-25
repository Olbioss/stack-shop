import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { B as Package, It as ChartColumn, x as ShoppingBag, xt as DollarSign } from "../_libs/lucide-react.mjs";
import { a as CardHeader, n as CardContent, o as CardTitle, t as Card } from "./card-BDvQuHpQ.mjs";
import { t as StatsCard } from "./stats-card-BDYjs358.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-CC_nC1e4.js
var import_jsx_runtime = require_jsx_runtime();
function DashboardChart({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Overview" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
			className: "pl-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-75 items-center justify-center text-muted-foreground",
				children: "Chart placeholder - Revenue over time"
			})
		})]
	});
}
function RecentSales({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Recent Sales" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
			className: "pl-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-75 items-center justify-center text-muted-foreground",
				children: "Recent sales list placeholder"
			})
		})]
	});
}
function VendorDashboardTemplate({ stats }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-bold text-3xl tracking-tight",
				children: "Welcome back!"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: "Here's what's happening with your shops today."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
				children: stats.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsCard, {
					title: stat.title,
					value: stat.value,
					change: stat.change,
					icon: stat.icon
				}, stat.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 @xl:grid-cols-2 @2xl:grid-cols-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardChart, { className: "col-span-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecentSales, { className: "col-span-3" })]
			})
		]
	});
}
function RouteComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VendorDashboardTemplate, { stats: [
		{
			title: "Total Revenue",
			value: "$45,231.89",
			change: "+20.1% from last month",
			icon: DollarSign
		},
		{
			title: "Total Shops",
			value: "3",
			change: "+1 new shop this month",
			icon: ShoppingBag
		},
		{
			title: "Total Products",
			value: "234",
			change: "+19 new products",
			icon: Package
		},
		{
			title: "Total Orders",
			value: "573",
			change: "+201 from last month",
			icon: ChartColumn
		}
	] });
}
//#endregion
export { RouteComponent as component };
