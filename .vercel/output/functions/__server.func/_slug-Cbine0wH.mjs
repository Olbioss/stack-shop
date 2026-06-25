import { w as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Skeleton } from "./_ssr/skeleton-CLsJI6lr.mjs";
import { d as createFileRoute, u as lazyRouteComponent } from "./_libs/@tanstack/react-router+[...].mjs";
import { a as CardHeader, n as CardContent, t as Card } from "./_ssr/card-BDvQuHpQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-Cbine0wH.js
var import_jsx_runtime = require_jsx_runtime();
function ShopStatCardSkeleton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
		className: "flex flex-row items-center justify-between space-y-0 pb-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-4" })]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mb-1 h-8 w-24" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-3 w-32" })] })] });
}
function ShopStatsGridSkeleton({ count = 4 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
		children: Array.from({ length: count }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopStatCardSkeleton, {}, i))
	});
}
function ShopChartCardSkeleton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-6 w-32" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-75 w-full" }) })] });
}
function ShopProductCardSkeleton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-6 w-32" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-50 w-full" }) })] });
}
function ShopDashboardSkeleton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-9 w-48" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-5 w-64" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopStatsGridSkeleton, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2 lg:grid-cols-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "col-span-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopChartCardSkeleton, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "col-span-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopChartCardSkeleton, {})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopProductCardSkeleton, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopProductCardSkeleton, {})]
			})
		]
	});
}
var $$splitComponentImporter = () => import("./_slug-BVY0DkZq.mjs");
var Route = createFileRoute("/(vendor)/shop/$slug/")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	pendingComponent: ShopDashboardSkeleton
});
//#endregion
export { Route as t };
