import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { B as Package, Ct as Clock, Et as CircleCheck, o as Truck } from "../_libs/lucide-react.mjs";
import { a as CardHeader, n as CardContent, o as CardTitle, t as Card } from "./card-BDvQuHpQ.mjs";
import { i as useVendorOrderStats } from "./use-vendor-orders-Q75zrqay.mjs";
import { t as DataTable } from "./page-header-DLbA-yB-.mjs";
import { c as createVendorOrdersFetcher } from "./use-vendor-entity-fetcher-C_d9aXVF.mjs";
import "./checkbox-Biw7eaUx.mjs";
import { i as getSharedOrderFilters, r as createOrderColumns, t as OrderHeader } from "./order-header-CBydyevH.mjs";
import { t as Route } from "./orders-CffFlkfT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/orders-lxGgLnd2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Utility to format currency values */
function formatCurrency(amount, currency = "USD", locale = "en-US") {
	try {
		return new Intl.NumberFormat(locale, {
			style: "currency",
			currency
		}).format(amount);
	} catch {
		return String(amount);
	}
}
function VendorOrderTable({ server, shopSlug, className, isOrderMutating }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
		columns: (0, import_react.useMemo)(() => {
			return createOrderColumns({
				shopSlug,
				isOrderMutating
			});
		}, [shopSlug, isOrderMutating]),
		server,
		context: "shop",
		initialPageSize: 10,
		filterableColumns: (0, import_react.useMemo)(() => getSharedOrderFilters(), []),
		globalFilterPlaceholder: "Search orders...",
		className
	});
}
function ShopOrdersTemplate({ server, stats, shopSlug }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderHeader, { role: "vendor" }),
			stats && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
						className: "flex flex-row items-center justify-between space-y-0 pb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
							className: "font-medium text-sm",
							children: "Total Orders"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "size-4 text-muted-foreground" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-bold text-2xl",
						children: stats.totalOrders
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground text-xs",
						children: "All time"
					})] })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
						className: "flex flex-row items-center justify-between space-y-0 pb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
							className: "font-medium text-sm",
							children: "Pending"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4 text-yellow-600" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-bold text-2xl",
						children: stats.pendingOrders
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground text-xs",
						children: "Awaiting processing"
					})] })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
						className: "flex flex-row items-center justify-between space-y-0 pb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
							className: "font-medium text-sm",
							children: "In Progress"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "size-4 text-blue-600" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-bold text-2xl",
						children: stats.processingOrders + stats.shippedOrders
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground text-xs",
						children: "Processing or shipped"
					})] })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
						className: "flex flex-row items-center justify-between space-y-0 pb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
							className: "font-medium text-sm",
							children: "Revenue"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-green-600" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-bold text-2xl text-green-600",
						children: formatCurrency(stats.totalRevenue)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground text-xs",
						children: "From delivered orders"
					})] })] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VendorOrderTable, {
					server,
					shopSlug
				})
			})
		]
	});
}
function RouteComponent() {
	const { slug } = Route.useParams();
	const { data: stats } = useVendorOrderStats(slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopOrdersTemplate, {
		server: (0, import_react.useMemo)(() => createVendorOrdersFetcher(slug), [slug]),
		stats,
		shopSlug: slug
	});
}
//#endregion
export { RouteComponent as component };
