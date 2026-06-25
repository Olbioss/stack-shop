import { Gt as zod_default } from "../_libs/@better-auth/core+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/notifications-GtjpqX23.js
var getNotificationsSchema = zod_default.object({
	shopSlug: zod_default.string(),
	limit: zod_default.number().optional().default(20),
	offset: zod_default.number().optional().default(0),
	unreadOnly: zod_default.boolean().optional().default(false)
});
var markNotificationAsReadSchema = zod_default.object({
	shopSlug: zod_default.string(),
	notificationId: zod_default.string()
});
var markAllAsReadSchema = zod_default.object({ shopSlug: zod_default.string() });
var createNotificationSchema = zod_default.object({
	shopId: zod_default.string(),
	type: zod_default.enum([
		"new_order",
		"order_status_update",
		"new_review",
		"low_stock",
		"payout",
		"system"
	]),
	title: zod_default.string(),
	message: zod_default.string(),
	data: zod_default.object({
		orderId: zod_default.string().optional(),
		orderNumber: zod_default.string().optional(),
		productId: zod_default.string().optional(),
		reviewId: zod_default.string().optional(),
		amount: zod_default.number().optional(),
		link: zod_default.string().optional()
	}).optional()
});
//#endregion
export { markNotificationAsReadSchema as i, getNotificationsSchema as n, markAllAsReadSchema as r, createNotificationSchema as t };
