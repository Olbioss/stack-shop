import { A as sql, s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { h as products, l as productImages } from "./products-schema-BRxXUpzG.mjs";
import { c as db, n as cartSessions, t as cartItems } from "./db-DORSFQFR.mjs";
import { an as number, cn as record, ln as string, on as object } from "../_libs/@better-auth/core+[...].mjs";
import { t as v4 } from "../_libs/uuid.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-CJAFT02O.js
async function fetchCartWithDetails(cartSessionId) {
	const items = await db.select({
		id: cartItems.id,
		productId: cartItems.productId,
		quantity: cartItems.quantity,
		variantOptions: cartItems.variantOptions,
		productName: products.name,
		productSlug: products.slug,
		sellingPrice: products.sellingPrice,
		regularPrice: products.regularPrice,
		stock: products.stock,
		shopId: products.shopId
	}).from(cartItems).innerJoin(products, eq(cartItems.productId, products.id)).where(eq(cartItems.cartSessionId, cartSessionId));
	const productIds = items.map((item) => item.productId);
	const images = productIds.length > 0 ? await db.select({
		productId: productImages.productId,
		url: productImages.url,
		isPrimary: productImages.isPrimary,
		sortOrder: productImages.sortOrder
	}).from(productImages).where(sql`${productImages.productId} IN ${productIds}`) : [];
	const imageMap = /* @__PURE__ */ new Map();
	for (const img of images) if (!imageMap.has(img.productId) || img.isPrimary) imageMap.set(img.productId, img.url);
	const session = await db.query.cartSessions.findFirst({ where: eq(cartSessions.id, cartSessionId) });
	const shopIds = [...new Set(items.map((item) => item.shopId))];
	const shopsData = shopIds.length > 0 ? await db.query.shops.findMany({
		where: sql`id IN ${shopIds}`,
		columns: {
			id: true,
			name: true
		}
	}) : [];
	const shopMap = new Map(shopsData.map((shop) => [shop.id, shop.name]));
	const cartItems_mapped = items.map((item) => ({
		id: item.id,
		productId: item.productId,
		name: item.productName,
		slug: item.productSlug,
		price: parseFloat(item.sellingPrice),
		regularPrice: item.regularPrice ? parseFloat(item.regularPrice) : null,
		image: imageMap.get(item.productId) || null,
		quantity: item.quantity,
		maxQuantity: item.stock || 99,
		variantOptions: item.variantOptions ? JSON.parse(item.variantOptions) : null,
		shopId: item.shopId,
		shopName: shopMap.get(item.shopId) || "Unknown Store"
	}));
	return {
		items: cartItems_mapped,
		totalItems: cartItems_mapped.reduce((sum, item) => sum + item.quantity, 0),
		subtotal: cartItems_mapped.reduce((sum, item) => sum + item.price * item.quantity, 0),
		sessionId: session?.sessionId || null
	};
}
async function getOrCreateCartSession(userId, guestSessionId) {
	if (userId) {
		const existingSession = await db.query.cartSessions.findFirst({ where: eq(cartSessions.userId, userId) });
		if (existingSession) return {
			sessionId: existingSession.id,
			isNew: false
		};
		const newSessionId = v4();
		await db.insert(cartSessions).values({
			id: newSessionId,
			userId
		});
		return {
			sessionId: newSessionId,
			isNew: true
		};
	}
	if (guestSessionId) {
		const existingSession = await db.query.cartSessions.findFirst({ where: eq(cartSessions.sessionId, guestSessionId) });
		if (existingSession) return {
			sessionId: existingSession.id,
			isNew: false
		};
	}
	const newSessionId = v4();
	const newGuestSessionId = guestSessionId || v4();
	const expiresAt = /* @__PURE__ */ new Date();
	expiresAt.setDate(expiresAt.getDate() + 30);
	await db.insert(cartSessions).values({
		id: newSessionId,
		sessionId: newGuestSessionId,
		expiresAt
	});
	return {
		sessionId: newSessionId,
		isNew: true
	};
}
var GUEST_SESSION_KEY = "cart-guest-session-id";
function getGuestSessionId() {
	if (typeof window === "undefined") return void 0;
	return localStorage.getItem(GUEST_SESSION_KEY) || void 0;
}
function setGuestSessionId(sessionId) {
	if (typeof window === "undefined") return;
	localStorage.setItem(GUEST_SESSION_KEY, sessionId);
}
function clearGuestSessionId() {
	if (typeof window === "undefined") return;
	localStorage.removeItem(GUEST_SESSION_KEY);
}
/**
* Cart Validators
*
* Zod schemas for cart operations.
*/
var variantOptionsSchema = record(string(), string()).optional();
var addToCartSchema = object({
	productId: string().min(1, "Product ID is required"),
	quantity: number().int().min(1, "Quantity must be at least 1").default(1),
	variantOptions: variantOptionsSchema
});
var updateCartItemSchema = object({
	itemId: string().min(1, "Item ID is required"),
	quantity: number().int().min(1, "Quantity must be at least 1")
});
var removeFromCartSchema = object({ itemId: string().min(1, "Item ID is required") });
var getCartSchema = object({ sessionId: string().optional() });
var clearCartSchema = object({ sessionId: string().optional() });
var mergeCartsSchema = object({ guestSessionId: string().min(1, "Guest session ID is required") });
//#endregion
export { getCartSchema as a, mergeCartsSchema as c, updateCartItemSchema as d, fetchCartWithDetails as i, removeFromCartSchema as l, clearCartSchema as n, getGuestSessionId as o, clearGuestSessionId as r, getOrCreateCartSession as s, addToCartSchema as t, setGuestSessionId as u };
