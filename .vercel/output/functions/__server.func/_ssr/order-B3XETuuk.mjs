import { r as createServerFn } from "./ssr.mjs";
import { A as sql, a as and, i as desc, s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { r as shops } from "./shop-schema-C6uNILQs.mjs";
import { h as products } from "./products-schema-BRxXUpzG.mjs";
import { c as db, f as orders, p as payments } from "./db-DORSFQFR.mjs";
import { t as adminMiddleware } from "./admin-CYCFP3zk.mjs";
import { i as getOrderByIdSchema, o as getOrdersSchema, s as updateOrderStatusSchema, t as cancelOrderSchema } from "./order-Bl2io5m_.mjs";
import { t as createServerRpc } from "./createServerRpc-D97cGqBD.mjs";
import { n as createRefund } from "./stripe-CYiDuXYN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/order-B3XETuuk.js
var getAdminOrders_createServerFn_handler = createServerRpc({
	id: "da8a6d05d4bb1eab7702a1bc0cac31da8b6c9f576df4c063a6b5ee63377b90c4",
	name: "getAdminOrders",
	filename: "src/lib/functions/admin/order.ts"
}, (opts) => getAdminOrders.__executeServer(opts));
var getAdminOrders = createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(getOrdersSchema).handler(getAdminOrders_createServerFn_handler, async ({ data }) => {
	const { limit, offset, status, shopId } = data;
	const conditions = [];
	if (shopId) conditions.push(eq(orders.shopId, shopId));
	if (status) conditions.push(eq(orders.status, status));
	const adminOrders = await db.query.orders.findMany({
		where: conditions.length > 0 ? and(...conditions) : void 0,
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
	const [{ count }] = await db.select({ count: sql`count(*)` }).from(orders).where(conditions.length > 0 ? and(...conditions) : void 0);
	return {
		orders: adminOrders.map((order) => ({
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
var getAdminOrderDetails_createServerFn_handler = createServerRpc({
	id: "8ea723f0277401280f14644a46a98c8c9b4da6162eca582e36533da66819047b",
	name: "getAdminOrderDetails",
	filename: "src/lib/functions/admin/order.ts"
}, (opts) => getAdminOrderDetails.__executeServer(opts));
var getAdminOrderDetails = createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(getOrderByIdSchema).handler(getAdminOrderDetails_createServerFn_handler, async ({ data }) => {
	const { orderId } = data;
	const order = await db.query.orders.findFirst({
		where: eq(orders.id, orderId),
		with: {
			items: true,
			payments: true,
			shop: {
				columns: {
					id: true,
					name: true
				},
				with: { vendor: { columns: {
					id: true,
					businessName: true
				} } }
			},
			user: { columns: {
				id: true,
				name: true,
				email: true
			} }
		}
	});
	if (!order) throw new Error("Order not found");
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
		shop: {
			id: order.shopId,
			name: order.shop?.name || "Unknown Store",
			vendor: order.shop?.vendor ? {
				id: order.shop.vendor.id,
				businessName: order.shop.vendor.businessName
			} : null
		},
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
			stripePaymentIntentId: payment.stripePaymentIntentId,
			transactionId: payment.transactionId,
			createdAt: payment.createdAt.toISOString()
		})),
		createdAt: order.createdAt.toISOString(),
		updatedAt: order.updatedAt.toISOString()
	} };
});
var updateAdminOrderStatus_createServerFn_handler = createServerRpc({
	id: "a1801a9022f9ecc873b9a5638cbd37d12341d581a211b780db92d7703dcf8fe3",
	name: "updateAdminOrderStatus",
	filename: "src/lib/functions/admin/order.ts"
}, (opts) => updateAdminOrderStatus.__executeServer(opts));
var updateAdminOrderStatus = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(updateOrderStatusSchema).handler(updateAdminOrderStatus_createServerFn_handler, async ({ data }) => {
	const { orderId, status, internalNotes } = data;
	const order = await db.query.orders.findFirst({ where: eq(orders.id, orderId) });
	if (!order) throw new Error("Order not found");
	let fulfillmentStatus = order.fulfillmentStatus;
	if (status === "shipped") fulfillmentStatus = "partial";
	else if (status === "delivered") fulfillmentStatus = "fulfilled";
	await db.update(orders).set({
		status,
		fulfillmentStatus,
		internalNotes: internalNotes ? `${order.internalNotes || ""}\n[ADMIN] ${(/* @__PURE__ */ new Date()).toISOString()}: ${internalNotes}` : order.internalNotes
	}).where(eq(orders.id, orderId));
	return {
		success: true,
		message: `Order status updated to ${status}`
	};
});
var adminCancelOrder_createServerFn_handler = createServerRpc({
	id: "28fbbd217356e3abaf9763a0d72f028eeb248d022aa588429632b278060206d0",
	name: "adminCancelOrder",
	filename: "src/lib/functions/admin/order.ts"
}, (opts) => adminCancelOrder.__executeServer(opts));
var adminCancelOrder = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(cancelOrderSchema).handler(adminCancelOrder_createServerFn_handler, async ({ data }) => {
	const { orderId, reason } = data;
	const order = await db.query.orders.findFirst({
		where: eq(orders.id, orderId),
		with: {
			payments: true,
			items: true
		}
	});
	if (!order) throw new Error("Order not found");
	if (order.paymentStatus === "paid") {
		const payment = order.payments.find((p) => p.status === "succeeded" && p.stripePaymentIntentId);
		if (payment?.stripePaymentIntentId) try {
			await createRefund(payment.stripePaymentIntentId);
			await db.update(payments).set({ status: "refunded" }).where(eq(payments.id, payment.id));
		} catch (error) {
			console.error("Refund error:", error);
			throw new Error("Failed to process refund");
		}
	}
	await db.update(orders).set({
		status: order.paymentStatus === "paid" ? "refunded" : "cancelled",
		paymentStatus: order.paymentStatus === "paid" ? "refunded" : order.paymentStatus,
		internalNotes: `[ADMIN] Cancelled: ${reason || "No reason provided"}`
	}).where(eq(orders.id, orderId));
	for (const item of order.items) {
		const product = await db.query.products.findFirst({ where: eq(products.id, item.productId) });
		if (product && product.stock !== null) await db.update(products).set({ stock: product.stock + item.quantity }).where(eq(products.id, item.productId));
	}
	return {
		success: true,
		message: order.paymentStatus === "paid" ? "Order refunded and cancelled successfully" : "Order cancelled successfully"
	};
});
var getAdminOrderStats_createServerFn_handler = createServerRpc({
	id: "2854ce7585d82e96d203d25e4a1b5d00a8d4f7b3009e2e8ad9ed70e97928526f",
	name: "getAdminOrderStats",
	filename: "src/lib/functions/admin/order.ts"
}, (opts) => getAdminOrderStats.__executeServer(opts));
var getAdminOrderStats = createServerFn({ method: "GET" }).middleware([adminMiddleware]).handler(getAdminOrderStats_createServerFn_handler, async () => {
	const orderStats = await db.select({
		status: orders.status,
		paymentStatus: orders.paymentStatus,
		count: sql`count(*)`,
		revenue: sql`sum(${orders.totalAmount})`
	}).from(orders).groupBy(orders.status, orders.paymentStatus);
	const today = /* @__PURE__ */ new Date();
	today.setHours(0, 0, 0, 0);
	const [todayStats] = await db.select({
		count: sql`count(*)`,
		revenue: sql`sum(${orders.totalAmount})`
	}).from(orders).where(sql`${orders.createdAt} >= ${today}`);
	const stats = {
		totalOrders: 0,
		pendingOrders: 0,
		processingOrders: 0,
		shippedOrders: 0,
		deliveredOrders: 0,
		cancelledOrders: 0,
		totalRevenue: 0,
		paidRevenue: 0,
		todayOrders: Number(todayStats?.count) || 0,
		todayRevenue: Number(todayStats?.revenue) || 0
	};
	for (const row of orderStats) {
		const count = Number(row.count);
		const revenue = Number(row.revenue) || 0;
		stats.totalOrders += count;
		if (row.paymentStatus === "paid") stats.paidRevenue += revenue;
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
	const [{ shopCount }] = await db.select({ shopCount: sql`count(*)` }).from(shops);
	return {
		...stats,
		shopCount: Number(shopCount)
	};
});
//#endregion
export { adminCancelOrder_createServerFn_handler, getAdminOrderDetails_createServerFn_handler, getAdminOrderStats_createServerFn_handler, getAdminOrders_createServerFn_handler, updateAdminOrderStatus_createServerFn_handler };
