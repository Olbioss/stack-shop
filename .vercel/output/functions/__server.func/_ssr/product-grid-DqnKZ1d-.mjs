import { t as cn } from "./utils-Pgq5HWQm.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { t as Skeleton } from "./skeleton-CLsJI6lr.mjs";
import { Z as LoaderCircle } from "../_libs/lucide-react.mjs";
import { n as ProductCard } from "./product-card-XBLfr8UV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product-grid-DqnKZ1d-.js
var import_jsx_runtime = require_jsx_runtime();
function ProductGridSkeleton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid @4xl:grid-cols-2 @7xl:grid-cols-3 grid-cols-1 gap-6",
		children: Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-75 w-full rounded-xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-62.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-50" })]
			})]
		}, `skeleton-${i}`))
	});
}
function ProductNotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center py-20 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-4 text-4xl",
				children: "🔍"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mb-2 font-semibold text-xl",
				children: "No products found"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-muted-foreground",
				children: "We couldn't find any products matching your filters. Try adjusting your search or clearing some filters."
			})
		]
	});
}
function ProductGrid({ products, isLoading, viewMode = "grid", hasNextPage, isFetchingNextPage, onLoadMore }) {
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGridSkeleton, {});
	if (products.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductNotFound, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("gap-6", viewMode === "grid" ? "grid @4xl:grid-cols-2 @7xl:grid-cols-3 grid-cols-1" : "flex flex-col"),
			children: products.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
				product,
				variant: viewMode
			}, product.id))
		}), hasNextPage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex justify-center pt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				size: "lg",
				onClick: onLoadMore,
				disabled: isFetchingNextPage,
				className: "min-w-50",
				children: isFetchingNextPage ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }), "Loading..."] }) : "Load More Products"
			})
		})]
	});
}
//#endregion
export { ProductGrid as t };
