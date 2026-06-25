import { w as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { Z as LoaderCircle } from "./_libs/lucide-react.mjs";
import { t as Route } from "./_orderId-CqFxar2X.mjs";
import { r as useAdminOrderDetails } from "./_ssr/use-admin-orders-ebDgXDm5.mjs";
import { t as ShopOrderDetailsTemplate } from "./_ssr/shop-order-details-template-3ERe9zrb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_orderId-D1YuBUhX.js
var import_jsx_runtime = require_jsx_runtime();
function RouteComponent() {
	const { orderId } = Route.useParams();
	const { data: order, isLoading, error } = useAdminOrderDetails(orderId);
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
	const orderWithShopMeta = order;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopOrderDetailsTemplate, {
		order: {
			...order,
			shopId: order.shop?.id ?? orderWithShopMeta.shopId ?? "",
			shopName: order.shop?.name ?? orderWithShopMeta.shopName ?? "Unknown Store"
		},
		mode: "admin",
		backLink: {
			to: "/admin/orders",
			label: "Back to Orders"
		}
	});
}
//#endregion
export { RouteComponent as component };
