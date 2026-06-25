import { r as createServerFn } from "./ssr.mjs";
import { A as sql, a as and, i as desc, s as eq, u as gte } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { r as shops } from "./shop-schema-C6uNILQs.mjs";
import { c as db, f as orders, u as notifications } from "./db-DORSFQFR.mjs";
import { t as v4 } from "../_libs/uuid.mjs";
import { t as authMiddleware } from "./auth-BM1BErpv.mjs";
import { i as markNotificationAsReadSchema, n as getNotificationsSchema, r as markAllAsReadSchema, t as createNotificationSchema } from "./notifications-GtjpqX23.mjs";
import { t as createServerRpc } from "./createServerRpc-D97cGqBD.mjs";
import { r as requireShopAccess } from "./vendor-S8D_d0RQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/notification-XQHMWAus.js
async function getShopBySlug(slug) {
	const shop = await db.query.shops.findFirst({ where: eq(shops.slug, slug) });
	if (!shop) throw new Error("Shop not found");
	return shop;
}
/**
* Vendor Notification Server Functions
*
* Server functions for managing vendor/shop notifications.
* Handles fetching, marking as read, and creating notifications.
*/
var getVendorNotifications_createServerFn_handler = createServerRpc({
	id: "8cc2a15baac0ea5c3ed78fed023590481591f88ddbd41570d2b739a0bfede785",
	name: "getVendorNotifications",
	filename: "src/lib/functions/vendor/notification.ts"
}, (opts) => getVendorNotifications.__executeServer(opts));
var getVendorNotifications = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(getNotificationsSchema).handler(getVendorNotifications_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session?.user?.id;
	if (!userId) throw new Error("Unauthorized");
	const { shopSlug, limit, offset, unreadOnly } = data;
	const shopData = await getShopBySlug(shopSlug);
	await requireShopAccess(userId, shopData.id);
	if (offset === 0 && !unreadOnly) {
		const backfillStart = /* @__PURE__ */ new Date();
		backfillStart.setDate(backfillStart.getDate() - 2);
		backfillStart.setHours(0, 0, 0, 0);
		const [ordersCountResult, notifCountResult] = await Promise.all([db.select({ count: sql`count(*)::int` }).from(orders).where(and(eq(orders.shopId, shopData.id), gte(orders.createdAt, backfillStart))), db.select({ count: sql`count(*)::int` }).from(notifications).where(and(eq(notifications.shopId, shopData.id), eq(notifications.type, "new_order"), gte(notifications.createdAt, backfillStart)))]);
		if ((ordersCountResult[0]?.count ?? 0) > (notifCountResult[0]?.count ?? 0)) {
			const recentOrders = await db.query.orders.findMany({
				where: and(eq(orders.shopId, shopData.id), gte(orders.createdAt, backfillStart)),
				with: { items: true },
				orderBy: [desc(orders.createdAt)],
				limit: 100
			});
			for (const order of recentOrders) {
				const customerName = order.shippingAddress ? `${order.shippingAddress.firstName} ${order.shippingAddress.lastName}` : "Customer";
				await createOrderNotification({
					shopId: shopData.id,
					orderNumber: order.orderNumber,
					orderId: order.id,
					customerName,
					totalAmount: parseFloat(order.totalAmount),
					itemCount: order.items.length
				});
			}
		}
	}
	const conditions = [eq(notifications.shopId, shopData.id)];
	if (unreadOnly) conditions.push(eq(notifications.isRead, false));
	const notificationsList = await db.query.notifications.findMany({
		where: and(...conditions),
		orderBy: [desc(notifications.createdAt)],
		limit,
		offset
	});
	const unreadCount = (await db.select({ count: sql`count(*)::int` }).from(notifications).where(and(eq(notifications.shopId, shopData.id), eq(notifications.isRead, false))))[0]?.count ?? 0;
	return {
		notifications: notificationsList.map((n) => ({
			id: n.id,
			type: n.type,
			title: n.title,
			message: n.message,
			data: n.data,
			isRead: n.isRead,
			readAt: n.readAt?.toISOString() ?? null,
			createdAt: n.createdAt.toISOString()
		})),
		unreadCount
	};
});
var markNotificationAsRead_createServerFn_handler = createServerRpc({
	id: "c995827ce11d022207b5147c817dc15421b5ddd5f680635e27cdf142a3646400",
	name: "markNotificationAsRead",
	filename: "src/lib/functions/vendor/notification.ts"
}, (opts) => markNotificationAsRead.__executeServer(opts));
var markNotificationAsRead = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(markNotificationAsReadSchema).handler(markNotificationAsRead_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session?.user?.id;
	if (!userId) throw new Error("Unauthorized");
	const { shopSlug, notificationId } = data;
	const shopData = await getShopBySlug(shopSlug);
	await requireShopAccess(userId, shopData.id);
	await db.update(notifications).set({
		isRead: true,
		readAt: /* @__PURE__ */ new Date()
	}).where(and(eq(notifications.id, notificationId), eq(notifications.shopId, shopData.id)));
	return { success: true };
});
var markAllNotificationsAsRead_createServerFn_handler = createServerRpc({
	id: "c23d37665a6fc36ee1c99742623a9d973a5b6ca7d51c77425e10920b174a5324",
	name: "markAllNotificationsAsRead",
	filename: "src/lib/functions/vendor/notification.ts"
}, (opts) => markAllNotificationsAsRead.__executeServer(opts));
var markAllNotificationsAsRead = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(markAllAsReadSchema).handler(markAllNotificationsAsRead_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session?.user?.id;
	if (!userId) throw new Error("Unauthorized");
	const { shopSlug } = data;
	const shopData = await getShopBySlug(shopSlug);
	await requireShopAccess(userId, shopData.id);
	await db.update(notifications).set({
		isRead: true,
		readAt: /* @__PURE__ */ new Date()
	}).where(and(eq(notifications.shopId, shopData.id), eq(notifications.isRead, false)));
	return { success: true };
});
var createNotification_createServerFn_handler = createServerRpc({
	id: "814123b36a9ef276651e09a036619d2a502f884eab8640e15bb53e7135dc13e4",
	name: "createNotification",
	filename: "src/lib/functions/vendor/notification.ts"
}, (opts) => createNotification.__executeServer(opts));
var createNotification = createServerFn({ method: "POST" }).inputValidator(createNotificationSchema).handler(createNotification_createServerFn_handler, async ({ data }) => {
	const { shopId, type, title, message, data: notificationData } = data;
	const id = v4();
	await db.insert(notifications).values({
		id,
		shopId,
		type,
		title,
		message,
		data: notificationData,
		isRead: false
	});
	return {
		id,
		success: true
	};
});
async function createOrderNotification(params) {
	const [existing] = await db.select({ id: notifications.id }).from(notifications).where(and(eq(notifications.shopId, params.shopId), eq(notifications.type, "new_order"), sql`(${notifications.data} ->> 'orderId') = ${params.orderId}`)).limit(1);
	if (existing?.id) return { id: existing.id };
	const id = v4();
	await db.insert(notifications).values({
		id,
		shopId: params.shopId,
		type: "new_order",
		title: "New Order Received! 🎉",
		message: `${params.customerName} placed an order for ${params.itemCount} item(s) - $${params.totalAmount.toFixed(2)}`,
		data: {
			orderId: params.orderId,
			orderNumber: params.orderNumber,
			amount: params.totalAmount,
			link: `/shop/orders/${params.orderId}`
		},
		isRead: false
	});
	return { id };
}
//#endregion
export { createNotification_createServerFn_handler, getVendorNotifications_createServerFn_handler, markAllNotificationsAsRead_createServerFn_handler, markNotificationAsRead_createServerFn_handler };
