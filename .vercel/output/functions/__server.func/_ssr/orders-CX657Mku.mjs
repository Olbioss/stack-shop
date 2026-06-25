import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { n as formatCurrency } from "./utils-Pgq5HWQm.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { B as Package, Ct as Clock, Et as CircleCheck, o as Truck } from "../_libs/lucide-react.mjs";
import { i as useAdminOrderStats } from "./use-admin-orders-ebDgXDm5.mjs";
import { a as CardHeader, n as CardContent, o as CardTitle, t as Card } from "./card-BDvQuHpQ.mjs";
import { t as DataTable } from "./page-header-DLbA-yB-.mjs";
import { a as createAdminOrdersFetcher } from "./use-admin-entity-fetchers-DkFElJdN.mjs";
import { i as getSharedOrderFilters, n as createAdminOrderColumns, t as OrderHeader } from "./order-header-CBydyevH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/orders-CX657Mku.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminOrdersTable({ server, className, isOrderMutating }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
		columns: (0, import_react.useMemo)(() => createAdminOrderColumns({ isOrderMutating }), [isOrderMutating]),
		server,
		context: "admin",
		initialPageSize: 10,
		filterableColumns: (0, import_react.useMemo)(() => getSharedOrderFilters(), []),
		globalFilterPlaceholder: "Search orders...",
		className
	});
}
function AdminOrdersTemplate({ server, stats }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderHeader, { role: "admin" }),
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
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminOrdersTable, { server })
			})
		]
	});
}
function RouteComponent() {
	const server = createAdminOrdersFetcher();
	const { data: stats } = useAdminOrderStats();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminOrdersTemplate, {
		server,
		stats
	});
}
//#endregion
export { RouteComponent as component };
