import { o as __toESM } from "../_runtime.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { d as format } from "../_libs/date-fns.mjs";
import { i as useOrderById } from "./use-checkout-Dhl-tOLO.mjs";
import { t as OrderTrackingTemplate } from "./order-tracking-template-DXybsEkL.mjs";
import { t as Route } from "./track-order-D9_UtfCb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/track-order-CqCjUzYB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function TrackOrderPage() {
	const [queryId, setQueryId] = (0, import_react.useState)("");
	const [hasSearched, setHasSearched] = (0, import_react.useState)(false);
	const { orderId } = Route.useSearch();
	const { data: order, isLoading, error } = useOrderById(queryId);
	const handleSearch = (0, import_react.useCallback)((id) => {
		setQueryId(id);
		setHasSearched(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (orderId && !hasSearched) {
			setQueryId(orderId);
			setHasSearched(true);
		}
	}, [orderId, hasSearched]);
	const generateStages = (status, createdAt, updatedAt) => {
		const currentIndex = [
			"pending",
			"confirmed",
			"processing",
			"shipped",
			"delivered"
		].indexOf(status);
		const createdDate = new Date(createdAt);
		const updatedDate = new Date(updatedAt);
		return [
			{
				id: "1",
				label: "Order Placed",
				date: format(createdDate, "dd MMM, h:mm a"),
				status: currentIndex >= 0 ? "completed" : "pending"
			},
			{
				id: "2",
				label: "Confirmed",
				date: currentIndex >= 1 ? format(currentIndex === 0 ? createdDate : updatedDate, "dd MMM, h:mm a") : void 0,
				status: currentIndex >= 1 ? "completed" : currentIndex === 0 ? "active" : "pending"
			},
			{
				id: "3",
				label: "Processing",
				date: currentIndex >= 2 ? format(updatedDate, "dd MMM, h:mm a") : void 0,
				status: currentIndex >= 2 ? "completed" : currentIndex === 1 ? "active" : "pending"
			},
			{
				id: "4",
				label: "Shipped",
				date: currentIndex >= 3 ? format(updatedDate, "dd MMM, h:mm a") : void 0,
				status: currentIndex >= 3 ? "completed" : currentIndex === 2 ? "active" : "pending"
			},
			{
				id: "5",
				label: "Delivered",
				date: currentIndex >= 4 ? format(updatedDate, "dd MMM, h:mm a") : void 0,
				status: currentIndex >= 4 ? "completed" : currentIndex === 3 ? "active" : "pending"
			}
		];
	};
	let trackingData = null;
	if (order) {
		const stages = generateStages(order.status, order.createdAt, order.updatedAt);
		const updates = [{
			id: "1",
			timestamp: format(new Date(order.updatedAt), "dd MMM, h:mm a"),
			location: "System Update",
			status: `Order is currently ${order.status}`,
			isLatest: true
		}, {
			id: "2",
			timestamp: format(new Date(order.createdAt), "dd MMM, h:mm a"),
			location: "System Update",
			status: "Order placed successfully",
			isLatest: false
		}];
		trackingData = {
			id: order.id,
			orderId: order.orderNumber,
			orderDate: format(new Date(order.createdAt), "dd MMM, yyyy"),
			itemsCount: order.items.length,
			total: order.totalAmount,
			carrier: order.shippingMethod || "Standard Shipping",
			trackingNumber: "Pending",
			currentLocation: "Processing Center",
			estimatedDelivery: "Calculated at checkout",
			packageInfo: {
				weight: "N/A",
				dimensions: "N/A"
			},
			stages,
			updates
		};
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderTrackingTemplate, {
		onSearch: handleSearch,
		isLoading,
		data: trackingData,
		error,
		hasSearched
	});
}
//#endregion
export { TrackOrderPage as component };
