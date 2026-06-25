import { At as number$1, Ft as boolean, Gt as string, Ht as object, Mt as _enum, Pt as array, Rt as email, Vt as number, Wt as record } from "../_libs/@better-auth/core+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/order-Bl2io5m_.js
/**
* Order Validators
*
* Zod schemas for order operations.
*/
var addressSchema = object({
	firstName: string().min(1, "First name is required"),
	lastName: string().min(1, "Last name is required"),
	email: email("Valid email is required"),
	phone: string().min(1, "Phone is required"),
	street: string().min(1, "Street address is required"),
	city: string().min(1, "City is required"),
	state: string().min(1, "State is required"),
	zip: string().min(1, "ZIP code is required"),
	country: string().min(1, "Country is required")
});
object({
	productId: string().min(1),
	productName: string().min(1),
	productSku: string().optional(),
	productImage: string().optional(),
	variantOptions: record(string(), string()).optional(),
	unitPrice: number().min(0),
	quantity: number().int().min(1),
	shopId: string().min(1),
	shopName: string().min(1)
});
var createCheckoutSessionSchema = object({
	sessionId: string().optional(),
	shippingAddress: addressSchema,
	billingAddress: addressSchema.optional(),
	useSameBillingAddress: boolean().default(true),
	shippingMethod: string().min(1, "Shipping method is required"),
	customerNotes: string().optional(),
	couponCodes: array(object({
		shopId: string(),
		code: string(),
		discountAmount: number()
	})).optional()
});
var confirmPaymentSchema = object({
	paymentIntentId: string().min(1, "Payment intent ID is required"),
	orderIds: array(string()).min(1, "At least one order ID is required")
});
var getOrdersSchema = object({
	limit: number$1().min(1).max(50).optional().default(10),
	offset: number$1().min(0).optional().default(0),
	status: _enum([
		"pending",
		"confirmed",
		"processing",
		"shipped",
		"delivered",
		"cancelled",
		"refunded"
	]).optional(),
	shopId: string().optional(),
	shopSlug: string().optional()
});
var getOrderByIdSchema = object({ orderId: string().min(1, "Order ID is required") });
var getOrdersByIdsSchema = object({
	orderIds: array(string()).min(1, "At least one order ID is required"),
	paymentIntentId: string().optional()
});
var updateOrderStatusSchema = object({
	orderId: string().min(1, "Order ID is required"),
	status: _enum([
		"pending",
		"confirmed",
		"processing",
		"shipped",
		"delivered",
		"cancelled",
		"refunded"
	]),
	internalNotes: string().optional()
});
var cancelOrderSchema = object({
	orderId: string().min(1, "Order ID is required"),
	reason: string().optional()
});
//#endregion
export { getOrdersByIdsSchema as a, getOrderByIdSchema as i, confirmPaymentSchema as n, getOrdersSchema as o, createCheckoutSessionSchema as r, updateOrderStatusSchema as s, cancelOrderSchema as t };
