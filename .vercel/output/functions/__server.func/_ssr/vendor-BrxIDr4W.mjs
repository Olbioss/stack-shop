import { A as sql, a as and, s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { c as db, u as notifications } from "./db-DORSFQFR.mjs";
import { r as createServerFn } from "./ssr.mjs";
import { t as createSsrRpc } from "./createSsrRpc-CXFXGZZ3.mjs";
import { i as vendorRegisterSchema } from "./auth-DLhAwWpU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/vendor-BrxIDr4W.js
var registerVendor = createServerFn({ method: "POST" }).inputValidator(vendorRegisterSchema).handler(createSsrRpc("fa63f1354f704fc0a3cd3bb34a6a16ff934d52aca2f9bbda826229000a26f853"));
async function createOrderNotification(params) {
	const [existing] = await db.select({ id: notifications.id }).from(notifications).where(and(eq(notifications.shopId, params.shopId), eq(notifications.type, "new_order"), sql`(${notifications.data} ->> 'orderId') = ${params.orderId}`)).limit(1);
	if (existing?.id) return { id: existing.id };
	const [newNotification] = await db.insert(notifications).values({
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
	}).returning({ id: notifications.id });
	return { id: newNotification.id };
}
//#endregion
export { registerVendor as n, createOrderNotification as t };
