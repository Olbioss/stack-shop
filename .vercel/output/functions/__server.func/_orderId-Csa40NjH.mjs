import { w as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { Z as LoaderCircle } from "./_libs/lucide-react.mjs";
import { t as Route } from "./_orderId-CleNnDms.mjs";
import { r as useVendorOrderDetails } from "./_ssr/use-vendor-orders-Q75zrqay.mjs";
import { t as ShopOrderDetailsTemplate } from "./_ssr/shop-order-details-template-3ERe9zrb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_orderId-Csa40NjH.js
var import_jsx_runtime = require_jsx_runtime();
function RouteComponent() {
	const { slug, orderId } = Route.useParams();
	const { data: order, isLoading, error } = useVendorOrderDetails(orderId);
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center justify-center py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-8 animate-spin text-muted-foreground" })
	});
	if (error) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center py-24 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-destructive",
			children: "Failed to load order details"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground text-sm",
			children: error.message || "Please try again later"
		})]
	});
	if (!order) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-col items-center justify-center py-24 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground",
			children: "Order not found"
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopOrderDetailsTemplate, {
		shopSlug: slug,
		order
	});
}
//#endregion
export { RouteComponent as component };
