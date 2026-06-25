import { r as createServerFn } from "./ssr.mjs";
import { T as or, a as and, f as inArray, i as desc, s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { r as shops, s as vendors } from "./shop-schema-C6uNILQs.mjs";
import { _ as shippingMethods, h as products } from "./products-schema-BRxXUpzG.mjs";
import { c as db, d as orderItems, f as orders, n as cartSessions, p as payments, t as cartItems } from "./db-DORSFQFR.mjs";
import { t as optionalAuthMiddleware } from "./optional-auth-D6kWcuST.mjs";
import { t as authMiddleware } from "./auth-BM1BErpv.mjs";
import { a as getOrdersByIdsSchema, i as getOrderByIdSchema, n as confirmPaymentSchema, o as getOrdersSchema, r as createCheckoutSessionSchema, t as cancelOrderSchema } from "./order-Bl2io5m_.mjs";
import { t as createServerRpc } from "./createServerRpc-D97cGqBD.mjs";
import { i as getPaymentIntent, r as dollarsToCents, t as createPaymentIntent } from "./stripe-CYiDuXYN.mjs";
import { a as createDestinationCharge } from "./connect-DkFD0Nte.mjs";
import { t as generateOrderNumber } from "./order-helpers-CtFv1HPY.mjs";
import { t as sendOrderConfirmationEmailForOrderId } from "./order-confirmation-DYJzsIk4.mjs";
import { t as createOrderNotification } from "./vendor-BrxIDr4W.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/order-By96E4UD.js
var createCheckoutSession_createServerFn_handler = createServerRpc({
	id: "67b074e17b14bdcde92e8dd706a5430fda53dc12cc945883bfc91aa29b0c17d7",
	name: "createCheckoutSession",
	filename: "src/lib/functions/store/order.ts"
}, (opts) => createCheckoutSession.__executeServer(opts));
var createCheckoutSession = createServerFn({ method: "POST" }).middleware([optionalAuthMiddleware]).inputValidator(createCheckoutSessionSchema).handler(createCheckoutSession_createServerFn_handler, async ({ data, context }) => {
	const userId = context.session?.user.id;
	const { sessionId: guestSessionId, shippingAddress, billingAddress, useSameBillingAddress, shippingMethod, customerNotes, couponCodes } = data;
	let cartSession;
	if (userId) cartSession = await db.query.cartSessions.findFirst({ where: eq(cartSessions.userId, userId) });
	else if (guestSessionId) cartSession = await db.query.cartSessions.findFirst({ where: eq(cartSessions.sessionId, guestSessionId) });
	if (!cartSession) throw new Error("Cart not found");
	const cartItemsWithProducts = await db.select({
		id: cartItems.id,
		productId: cartItems.productId,
		quantity: cartItems.quantity,
		variantOptions: cartItems.variantOptions,
		productName: products.name,
		productSku: products.sku,
		sellingPrice: products.sellingPrice,
		shopId: products.shopId,
		stock: products.stock
	}).from(cartItems).innerJoin(products, eq(cartItems.productId, products.id)).where(eq(cartItems.cartSessionId, cartSession.id));
	if (cartItemsWithProducts.length === 0) throw new Error("Cart is empty");
	const { productImages } = await import("./products-schema-CxVDhXJ9.mjs");
	const productIds = cartItemsWithProducts.map((item) => item.productId);
	const images = await db.select({
		productId: productImages.productId,
		url: productImages.url,
		isPrimary: productImages.isPrimary
	}).from(productImages).where(inArray(productImages.productId, productIds));
	const imageMap = /* @__PURE__ */ new Map();
	for (const img of images) if (!imageMap.has(img.productId) || img.isPrimary) imageMap.set(img.productId, img.url);
	const itemsByShop = cartItemsWithProducts.reduce((acc, item) => {
		if (!acc[item.shopId]) acc[item.shopId] = [];
		acc[item.shopId].push(item);
		return acc;
	}, {});
	const shopIds = Object.keys(itemsByShop);
	await db.select({
		id: shops.id,
		name: shops.name
	}).from(shops).where(inArray(shops.id, shopIds));
	const [selectedShippingMethod] = await db.select({
		id: shippingMethods.id,
		shopId: shippingMethods.shopId,
		name: shippingMethods.name,
		price: shippingMethods.price
	}).from(shippingMethods).where(eq(shippingMethods.id, shippingMethod)).limit(1);
	if (!selectedShippingMethod) throw new Error("Shipping method not found");
	if (!shopIds.includes(selectedShippingMethod.shopId)) throw new Error("Shipping method does not match cart items");
	const shippingCost = Number(selectedShippingMethod.price);
	const createdOrders = [];
	for (const [shopId, shopItems] of Object.entries(itemsByShop)) {
		const orderNumber = generateOrderNumber();
		let subtotal = 0;
		for (const item of shopItems) subtotal += parseFloat(item.sellingPrice) * item.quantity;
		const shopCoupon = couponCodes?.find((c) => c.shopId === shopId);
		const discountAmount = shopCoupon?.discountAmount || 0;
		const taxAmount = (subtotal - discountAmount) * .05;
		const totalAmount = subtotal - discountAmount + taxAmount + shippingCost;
		const [newOrder] = await db.insert(orders).values({
			orderNumber,
			userId: userId || null,
			guestEmail: shippingAddress.email,
			shopId,
			status: "pending",
			paymentStatus: "pending",
			fulfillmentStatus: "unfulfilled",
			currency: "USD",
			subtotal: subtotal.toFixed(2),
			taxAmount: taxAmount.toFixed(2),
			shippingAmount: shippingCost.toFixed(2),
			discountAmount: discountAmount.toFixed(2),
			totalAmount: totalAmount.toFixed(2),
			shippingMethod,
			shippingAddress,
			billingAddress: useSameBillingAddress ? shippingAddress : billingAddress,
			customerNotes,
			couponCode: shopCoupon?.code,
			metadata: {}
		}).returning({ id: orders.id });
		for (const item of shopItems) {
			await db.insert(orderItems).values({
				orderId: newOrder.id,
				productId: item.productId,
				productName: item.productName,
				productSku: item.productSku,
				productImage: imageMap.get(item.productId) || null,
				variantOptions: item.variantOptions ? JSON.parse(item.variantOptions) : null,
				unitPrice: item.sellingPrice,
				quantity: item.quantity,
				totalPrice: (parseFloat(item.sellingPrice) * item.quantity).toFixed(2),
				discountAmount: "0"
			});
			if (item.stock !== null) await db.update(products).set({ stock: item.stock - item.quantity }).where(eq(products.id, item.productId));
		}
		createdOrders.push({
			id: newOrder.id,
			total: totalAmount,
			shopId
		});
	}
	const grandTotal = createdOrders.reduce((sum, order) => sum + order.total, 0);
	const uniqueShopIds = [...new Set(createdOrders.map((o) => o.shopId))];
	const isSingleVendor = uniqueShopIds.length === 1;
	let paymentResult = null;
	let connectedAccountId = null;
	let applicationFeeAmount = null;
	if (isSingleVendor) {
		const shop = await db.query.shops.findFirst({ where: eq(shops.id, uniqueShopIds[0]) });
		if (shop) {
			const vendor = await db.query.vendors.findFirst({ where: eq(vendors.id, shop.vendorId) });
			if (vendor?.stripeConnectedAccountId && vendor.stripeChargesEnabled) {
				applicationFeeAmount = grandTotal * (parseFloat(vendor.commissionRate || "20") / 100);
				connectedAccountId = vendor.stripeConnectedAccountId;
				try {
					paymentResult = await createDestinationCharge(dollarsToCents(grandTotal), "usd", connectedAccountId, dollarsToCents(applicationFeeAmount), {
						orderIds: createdOrders.map((o) => o.id).join(","),
						userId: userId || "guest",
						email: shippingAddress.email,
						vendorId: vendor.id
					});
				} catch (error) {
					if (error?.code === "insufficient_capabilities_for_transfer") {
						paymentResult = null;
						connectedAccountId = null;
						applicationFeeAmount = null;
					} else throw error;
				}
			}
		}
	}
	if (!paymentResult) paymentResult = await createPaymentIntent(dollarsToCents(grandTotal), "usd", {
		orderIds: createdOrders.map((o) => o.id).join(","),
		userId: userId || "guest",
		email: shippingAddress.email
	});
	if (!paymentResult) throw new Error("Failed to create payment intent");
	for (const order of createdOrders) await db.insert(payments).values({
		orderId: order.id,
		paymentMethod: "card",
		provider: "stripe",
		amount: order.total.toFixed(2),
		currency: "USD",
		status: "pending",
		stripePaymentIntentId: paymentResult.paymentIntentId,
		stripeClientSecret: paymentResult.clientSecret,
		connectedAccountId: connectedAccountId || void 0,
		applicationFeeAmount: applicationFeeAmount?.toFixed(2) || void 0
	});
	await db.delete(cartItems).where(eq(cartItems.cartSessionId, cartSession.id));
	return {
		success: true,
		orderIds: createdOrders.map((o) => o.id),
		paymentIntentId: paymentResult.paymentIntentId,
		clientSecret: paymentResult.clientSecret,
		totalAmount: grandTotal
	};
});
var confirmPayment_createServerFn_handler = createServerRpc({
	id: "46aeca2a42764cc885835d19f70af86b125de00769de4e200ba5be9445565b53",
	name: "confirmPayment",
	filename: "src/lib/functions/store/order.ts"
}, (opts) => confirmPayment.__executeServer(opts));
var confirmPayment = createServerFn({ method: "POST" }).middleware([optionalAuthMiddleware]).inputValidator(confirmPaymentSchema).handler(confirmPayment_createServerFn_handler, async ({ data }) => {
	const { paymentIntentId, orderIds } = data;
	const paymentIntent = await getPaymentIntent(paymentIntentId);
	if (!paymentIntent) throw new Error("Payment intent not found");
	if (paymentIntent.status !== "succeeded") throw new Error(`Payment not successful: ${paymentIntent.status}`);
	for (const orderId of orderIds) {
		await db.update(orders).set({
			status: "confirmed",
			paymentStatus: "paid"
		}).where(eq(orders.id, orderId));
		await db.update(payments).set({
			status: "succeeded",
			transactionId: paymentIntent.id
		}).where(eq(payments.orderId, orderId));
	}
	const updatedOrders = await db.query.orders.findMany({
		where: inArray(orders.id, orderIds),
		with: { items: true }
	});
	for (const order of updatedOrders) {
		if (!order.shopId) continue;
		const customerName = order.shippingAddress ? `${order.shippingAddress.firstName} ${order.shippingAddress.lastName}` : "Customer";
		await createOrderNotification({
			shopId: order.shopId,
			orderNumber: order.orderNumber,
			orderId: order.id,
			customerName,
			totalAmount: parseFloat(order.totalAmount),
			itemCount: order.items.length
		});
	}
	await Promise.allSettled(orderIds.map((orderId) => sendOrderConfirmationEmailForOrderId(orderId)));
	return {
		success: true,
		message: "Payment confirmed successfully"
	};
});
var getCustomerOrders_createServerFn_handler = createServerRpc({
	id: "b38001c73eb49fc64730eb3ec7d9a82d0997941cb00a1a0e8ace384a7c5ffdb3",
	name: "getCustomerOrders",
	filename: "src/lib/functions/store/order.ts"
}, (opts) => getCustomerOrders.__executeServer(opts));
var getCustomerOrders = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(getOrdersSchema).handler(getCustomerOrders_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session?.user?.id;
	const { limit, offset, status } = data;
	if (!userId) throw new Error("Unauthorized");
	const conditions = [eq(orders.userId, userId)];
	if (status) conditions.push(eq(orders.status, status));
	return { orders: (await db.query.orders.findMany({
		where: and(...conditions),
		with: {
			items: true,
			shop: { columns: {
				id: true,
				name: true,
				slug: true
			} }
		},
		orderBy: [desc(orders.createdAt)],
		limit,
		offset
	})).map((order) => ({
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
		shopSlug: order.shop?.slug || order.shopId,
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
		createdAt: order.createdAt.toISOString(),
		updatedAt: order.updatedAt.toISOString()
	})) };
});
var getOrderById_createServerFn_handler = createServerRpc({
	id: "aa07c741fc437f2298332b3268b51bc809b0333d6c941ea742117f20efc10728",
	name: "getOrderById",
	filename: "src/lib/functions/store/order.ts"
}, (opts) => getOrderById.__executeServer(opts));
var getOrderById = createServerFn({ method: "GET" }).middleware([optionalAuthMiddleware]).inputValidator(getOrderByIdSchema).handler(getOrderById_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session?.user?.id;
	const { orderId } = data;
	const order = await db.query.orders.findFirst({
		where: or(eq(orders.id, orderId), eq(orders.orderNumber, orderId)),
		with: {
			items: true,
			shop: { columns: {
				id: true,
				name: true,
				slug: true
			} }
		}
	});
	if (!order) throw new Error("Order not found");
	if (order.userId && order.userId !== userId) throw new Error("Unauthorized");
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
		shopId: order.shopId,
		shopName: order.shop?.name || "Unknown Store",
		shopSlug: order.shop?.slug || order.shopId,
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
		createdAt: order.createdAt.toISOString(),
		updatedAt: order.updatedAt.toISOString()
	} };
});
var getOrdersByIds_createServerFn_handler = createServerRpc({
	id: "52f95d99b7e4becccc15010c454fb611d7834132f48700499113d1ebe55b7138",
	name: "getOrdersByIds",
	filename: "src/lib/functions/store/order.ts"
}, (opts) => getOrdersByIds.__executeServer(opts));
var getOrdersByIds = createServerFn({ method: "GET" }).middleware([optionalAuthMiddleware]).inputValidator(getOrdersByIdsSchema).handler(getOrdersByIds_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session?.user?.id;
	const { orderIds, paymentIntentId } = data;
	const foundOrders = await db.query.orders.findMany({
		where: inArray(orders.id, orderIds),
		with: {
			items: true,
			shop: { columns: {
				id: true,
				name: true
			} }
		}
	});
	if (foundOrders.length === 0) throw new Error("Orders not found");
	if (userId) {
		const allOwned = foundOrders.every((o) => o.userId === userId);
		if (!allOwned) {
			if (!allOwned) throw new Error("Unauthorized");
		}
	} else {
		if (!paymentIntentId) throw new Error("Unauthorized");
		const paymentRecords = await db.select().from(payments).where(inArray(payments.orderId, orderIds));
		if (!paymentRecords.every((p) => p.stripePaymentIntentId === paymentIntentId) || paymentRecords.length !== orderIds.length) throw new Error("Unauthorized access to orders");
	}
	return { orders: foundOrders.map((order) => ({
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
		shopId: order.shopId,
		shopName: order.shop?.name || "Unknown Store",
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
		createdAt: order.createdAt.toISOString()
	})) };
});
var cancelOrder_createServerFn_handler = createServerRpc({
	id: "789a2b84dcba48a7c915a72511f53d2f0b7d812649a81426a4db36804186eb40",
	name: "cancelOrder",
	filename: "src/lib/functions/store/order.ts"
}, (opts) => cancelOrder.__executeServer(opts));
var cancelOrder = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(cancelOrderSchema).handler(cancelOrder_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session?.user?.id;
	const { orderId, reason } = data;
	if (!userId) throw new Error("Unauthorized");
	const order = await db.query.orders.findFirst({ where: and(eq(orders.id, orderId), eq(orders.userId, userId)) });
	if (!order) throw new Error("Order not found");
	if (!["pending", "confirmed"].includes(order.status)) throw new Error("This order cannot be cancelled");
	await db.update(orders).set({
		status: "cancelled",
		internalNotes: reason ? `Customer cancelled: ${reason}` : "Customer cancelled"
	}).where(eq(orders.id, orderId));
	const items = await db.select().from(orderItems).where(eq(orderItems.orderId, orderId));
	for (const item of items) {
		const product = await db.query.products.findFirst({ where: eq(products.id, item.productId) });
		if (product && product.stock !== null) await db.update(products).set({ stock: product.stock + item.quantity }).where(eq(products.id, item.productId));
	}
	return {
		success: true,
		message: "Order cancelled successfully"
	};
});
var getOrderPaymentSession_createServerFn_handler = createServerRpc({
	id: "243003ddda7bbebf54d255c4ce101c00f44ea33daf7ab89b585dff534c8bcc5a",
	name: "getOrderPaymentSession",
	filename: "src/lib/functions/store/order.ts"
}, (opts) => getOrderPaymentSession.__executeServer(opts));
var getOrderPaymentSession = createServerFn({ method: "POST" }).middleware([optionalAuthMiddleware]).inputValidator(getOrderByIdSchema).handler(getOrderPaymentSession_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session?.user?.id;
	const { orderId } = data;
	const order = await db.query.orders.findFirst({
		where: eq(orders.id, orderId),
		with: { payments: true }
	});
	if (!order) throw new Error("Order not found");
	if (userId && order.userId && order.userId !== userId) throw new Error("Unauthorized");
	const payment = order.payments.find((p) => p.status === "pending" && p.stripeClientSecret);
	if (!payment || !payment.stripeClientSecret || !payment.stripePaymentIntentId) throw new Error("No pending payment found for this order");
	const relatedPayments = await db.query.payments.findMany({
		where: eq(payments.stripePaymentIntentId, payment.stripePaymentIntentId),
		columns: {
			orderId: true,
			amount: true
		}
	});
	const orderIds = relatedPayments.map((p) => p.orderId);
	const totalAmount = relatedPayments.reduce((sum, p) => sum + parseFloat(p.amount), 0);
	return {
		orderIds,
		paymentIntentId: payment.stripePaymentIntentId,
		clientSecret: payment.stripeClientSecret,
		totalAmount
	};
});
//#endregion
export { cancelOrder_createServerFn_handler, confirmPayment_createServerFn_handler, createCheckoutSession_createServerFn_handler, getCustomerOrders_createServerFn_handler, getOrderById_createServerFn_handler, getOrderPaymentSession_createServerFn_handler, getOrdersByIds_createServerFn_handler };
