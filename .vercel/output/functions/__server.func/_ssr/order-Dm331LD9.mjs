import { Gt as string, Ht as object } from "../_libs/@better-auth/core+[...].mjs";
import { r as createServerFn } from "./ssr.mjs";
import { A as sql, a as and, f as inArray, i as desc, s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { c as db, f as orders } from "./db-DORSFQFR.mjs";
import { t as authMiddleware } from "./auth-BM1BErpv.mjs";
import { i as getOrderByIdSchema, o as getOrdersSchema, s as updateOrderStatusSchema } from "./order-Bl2io5m_.mjs";
import { t as createServerRpc } from "./createServerRpc-D97cGqBD.mjs";
import { n as getShopIdsForOrderQuery, r as verifyShopAccess } from "./order-helpers-CtFv1HPY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/order-Dm331LD9.js
/**
* Order Server Functions (Vendor)
*
* Server functions for vendor order management.
* Allows vendors to view and manage their shop orders.
* Supports admin access to any shop's orders.
*/
var getVendorOrders_createServerFn_handler = createServerRpc({
	id: "d8030022d2ee68b38e753810b1e88d494a532431773b5a1651823a3ad4d54445",
	name: "getVendorOrders",
	filename: "src/lib/functions/vendor/order.ts"
}, (opts) => getVendorOrders.__executeServer(opts));
var getVendorOrders = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(getOrdersSchema).handler(getVendorOrders_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session?.user?.id;
	const { limit, offset, status, shopSlug } = data;
	if (!userId) throw new Error("Unauthorized");
	const shopIds = await getShopIdsForOrderQuery(userId, shopSlug);
	if (shopIds.length === 0) return {
		orders: [],
		total: 0
	};
	const conditions = [];
	conditions.push(inArray(orders.shopId, shopIds));
	if (status) conditions.push(eq(orders.status, status));
	const vendorOrders = await db.query.orders.findMany({
		where: and(...conditions),
		with: {
			items: true,
			shop: { columns: {
				id: true,
				name: true
			} },
			user: { columns: {
				id: true,
				name: true,
				email: true
			} }
		},
		orderBy: [desc(orders.createdAt)],
		limit,
		offset
	});
	const [{ count }] = await db.select({ count: sql`count(*)` }).from(orders).where(and(...conditions));
	return {
		orders: vendorOrders.map((order) => ({
			id: order.id,
			orderNumber: order.orderNumber,
			status: order.status,
			paymentStatus: order.paymentStatus,
			fulfillmentStatus: order.fulfillmentStatus,
			subtotal: parseFloat(order.subtotal),
			taxAmount: parseFloat(order.taxAmount),
			shippingAmount: parseFloat(order.shippingAmount),
			discountAmount: parseFloat(order.discountAmount),
			totalAmount: parseFloat(order.totalAmount),
			shippingMethod: order.shippingMethod,
			shippingAddress: order.shippingAddress,
			shopId: order.shopId,
			shopName: order.shop?.name || "Unknown Store",
			customer: order.user ? {
				id: order.user.id,
				name: order.user.name,
				email: order.user.email
			} : { email: order.guestEmail },
			itemCount: order.items.length,
			createdAt: order.createdAt.toISOString()
		})),
		total: Number(count)
	};
});
var getVendorOrderDetails_createServerFn_handler = createServerRpc({
	id: "4fc0c2a1e3bf2e2626af837735b8f5d5729b9353c9d1cd26e8fbc2fc96b8a88f",
	name: "getVendorOrderDetails",
	filename: "src/lib/functions/vendor/order.ts"
}, (opts) => getVendorOrderDetails.__executeServer(opts));
var getVendorOrderDetails = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(getOrderByIdSchema).handler(getVendorOrderDetails_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session?.user?.id;
	const { orderId } = data;
	if (!userId) throw new Error("Unauthorized");
	const order = await db.query.orders.findFirst({
		where: eq(orders.id, orderId),
		with: {
			items: true,
			payments: true,
			shop: { columns: {
				id: true,
				name: true
			} },
			user: { columns: {
				id: true,
				name: true,
				email: true
			} }
		}
	});
	if (!order) throw new Error("Order not found");
	if (!await verifyShopAccess(userId, order.shopId)) throw new Error("Unauthorized");
	return { order: {
		id: order.id,
		orderNumber: order.orderNumber,
		status: order.status,
		paymentStatus: order.paymentStatus,
		fulfillmentStatus: order.fulfillmentStatus,
		subtotal: parseFloat(order.subtotal),
		taxAmount: parseFloat(order.taxAmount),
		shippingAmount: parseFloat(order.shippingAmount),
		discountAmount: parseFloat(order.discountAmount),
		totalAmount: parseFloat(order.totalAmount),
		shippingMethod: order.shippingMethod,
		shippingAddress: order.shippingAddress,
		billingAddress: order.billingAddress,
		customerNotes: order.customerNotes,
		internalNotes: order.internalNotes,
		couponCode: order.couponCode,
		shopId: order.shopId,
		shopName: order.shop?.name || "Unknown Store",
		customer: order.user ? {
			id: order.user.id,
			name: order.user.name,
			email: order.user.email
		} : { email: order.guestEmail },
		items: order.items.map((item) => ({
			id: item.id,
			productId: item.productId,
			productName: item.productName,
			productSku: item.productSku,
			productImage: item.productImage,
			variantOptions: item.variantOptions,
			unitPrice: parseFloat(item.unitPrice),
			quantity: item.quantity,
			totalPrice: parseFloat(item.totalPrice)
		})),
		payments: order.payments.map((payment) => ({
			id: payment.id,
			method: payment.paymentMethod,
			provider: payment.provider,
			amount: parseFloat(payment.amount),
			status: payment.status,
			createdAt: payment.createdAt.toISOString()
		})),
		createdAt: order.createdAt.toISOString(),
		updatedAt: order.updatedAt.toISOString()
	} };
});
var updateVendorOrderStatus_createServerFn_handler = createServerRpc({
	id: "4e1065eb552e4451758756bcb963d02ac29895005d43afcff9b8180a4466fe07",
	name: "updateVendorOrderStatus",
	filename: "src/lib/functions/vendor/order.ts"
}, (opts) => updateVendorOrderStatus.__executeServer(opts));
var updateVendorOrderStatus = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(updateOrderStatusSchema).handler(updateVendorOrderStatus_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session?.user?.id;
	const { orderId, status, internalNotes } = data;
	if (!userId) throw new Error("Unauthorized");
	const order = await db.query.orders.findFirst({ where: eq(orders.id, orderId) });
	if (!order) throw new Error("Order not found");
	if (!await verifyShopAccess(userId, order.shopId)) throw new Error("Unauthorized");
	let fulfillmentStatus = order.fulfillmentStatus;
	if (status === "shipped") fulfillmentStatus = "partial";
	else if (status === "delivered") fulfillmentStatus = "fulfilled";
	await db.update(orders).set({
		status,
		fulfillmentStatus,
		internalNotes: internalNotes ? `${order.internalNotes || ""}\n${(/* @__PURE__ */ new Date()).toISOString()}: ${internalNotes}` : order.internalNotes
	}).where(eq(orders.id, orderId));
	return {
		success: true,
		message: `Order status updated to ${status}`
	};
});
var getVendorOrderStatsSchema = object({ shopSlug: string().optional() });
var getVendorOrderStats_createServerFn_handler = createServerRpc({
	id: "cf9464380bf08096876a70e5fb5efbb80688d36188a26ebcfbdf473eb44caa3a",
	name: "getVendorOrderStats",
	filename: "src/lib/functions/vendor/order.ts"
}, (opts) => getVendorOrderStats.__executeServer(opts));
var getVendorOrderStats = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(getVendorOrderStatsSchema).handler(getVendorOrderStats_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session?.user?.id;
	const { shopSlug } = data;
	if (!userId) throw new Error("Unauthorized");
	const shopIds = await getShopIdsForOrderQuery(userId, shopSlug);
	if (shopIds.length === 0) return {
		totalOrders: 0,
		pendingOrders: 0,
		processingOrders: 0,
		shippedOrders: 0,
		deliveredOrders: 0,
		cancelledOrders: 0,
		totalRevenue: 0
	};
	const orderStats = await db.select({
		status: orders.status,
		count: sql`count(*)`,
		revenue: sql`sum(${orders.totalAmount})`
	}).from(orders).where(inArray(orders.shopId, shopIds)).groupBy(orders.status);
	const stats = {
		totalOrders: 0,
		pendingOrders: 0,
		processingOrders: 0,
		shippedOrders: 0,
		deliveredOrders: 0,
		cancelledOrders: 0,
		totalRevenue: 0
	};
	for (const row of orderStats) {
		const count = Number(row.count);
		const revenue = Number(row.revenue) || 0;
		stats.totalOrders += count;
		switch (row.status) {
			case "pending":
			case "confirmed":
				stats.pendingOrders += count;
				break;
			case "processing":
				stats.processingOrders += count;
				break;
			case "shipped":
				stats.shippedOrders += count;
				break;
			case "delivered":
				stats.deliveredOrders += count;
				stats.totalRevenue += revenue;
				break;
			case "cancelled":
			case "refunded":
				stats.cancelledOrders += count;
				break;
		}
	}
	return stats;
});
//#endregion
export { getVendorOrderDetails_createServerFn_handler, getVendorOrderStats_createServerFn_handler, getVendorOrders_createServerFn_handler, updateVendorOrderStatus_createServerFn_handler };
