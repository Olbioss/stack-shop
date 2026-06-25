import { A as sql, a as and, s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { h as products } from "./products-schema-BRxXUpzG.mjs";
import { c as db, n as cartSessions, t as cartItems } from "./db-DORSFQFR.mjs";
import { r as createServerFn } from "./ssr.mjs";
import { t as v4 } from "../_libs/uuid.mjs";
import { a as getCartSchema, c as mergeCartsSchema, d as updateCartItemSchema, i as fetchCartWithDetails, l as removeFromCartSchema, n as clearCartSchema, s as getOrCreateCartSession, t as addToCartSchema } from "./cart-CJAFT02O.mjs";
import { t as optionalAuthMiddleware } from "./optional-auth-D6kWcuST.mjs";
import { t as createServerRpc } from "./createServerRpc-D97cGqBD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-DQHziFQ-.js
var getCart_createServerFn_handler = createServerRpc({
	id: "9324b57f4d3fc760530ab4820798d75e1358b52e7bcb3422006e04d3e0a3f3c0",
	name: "getCart",
	filename: "src/lib/functions/store/cart.ts"
}, (opts) => getCart.__executeServer(opts));
var getCart = createServerFn({ method: "GET" }).middleware([optionalAuthMiddleware]).inputValidator(getCartSchema).handler(getCart_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session?.user?.id;
	const guestSessionId = data.sessionId || null;
	if (!userId && !guestSessionId) return {
		items: [],
		totalItems: 0,
		subtotal: 0,
		sessionId: null
	};
	let sessionId = null;
	if (userId) sessionId = (await db.query.cartSessions.findFirst({ where: eq(cartSessions.userId, userId) }))?.id || null;
	else if (guestSessionId) sessionId = (await db.query.cartSessions.findFirst({ where: eq(cartSessions.sessionId, guestSessionId) }))?.id || null;
	if (!sessionId) return {
		items: [],
		totalItems: 0,
		subtotal: 0,
		sessionId: guestSessionId || null
	};
	return fetchCartWithDetails(sessionId);
});
var addToCart_createServerFn_handler = createServerRpc({
	id: "35160d3c72ac791024701e15b3ee882146e2e4d67179e97d309f95855ffa6096",
	name: "addToCart",
	filename: "src/lib/functions/store/cart.ts"
}, (opts) => addToCart.__executeServer(opts));
var addToCart = createServerFn({ method: "POST" }).middleware([optionalAuthMiddleware]).inputValidator(addToCartSchema.extend({ sessionId: getCartSchema.shape.sessionId })).handler(addToCart_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session?.user?.id;
	const { productId, quantity, variantOptions, sessionId: guestSessionId } = data;
	const product = await db.query.products.findFirst({ where: and(eq(products.id, productId), eq(products.isActive, true)) });
	if (!product) throw new Error("Product not found or is not available");
	if (product.stock !== null && product.stock < quantity) throw new Error("Not enough stock available");
	const { sessionId: cartSessionId } = await getOrCreateCartSession(userId, guestSessionId);
	const variantKey = variantOptions ? JSON.stringify(variantOptions) : null;
	const existingItem = await db.query.cartItems.findFirst({ where: and(eq(cartItems.cartSessionId, cartSessionId), eq(cartItems.productId, productId), variantKey ? eq(cartItems.variantOptions, variantKey) : sql`${cartItems.variantOptions} IS NULL`) });
	if (existingItem) {
		const newQuantity = existingItem.quantity + quantity;
		if (product.stock !== null && product.stock < newQuantity) throw new Error("Not enough stock available for the requested quantity");
		await db.update(cartItems).set({ quantity: newQuantity }).where(eq(cartItems.id, existingItem.id));
	} else await db.insert(cartItems).values({
		id: v4(),
		cartSessionId,
		productId,
		quantity,
		variantOptions: variantKey
	});
	return {
		success: true,
		message: "Item added to cart",
		cart: await fetchCartWithDetails(cartSessionId)
	};
});
var updateCartItem_createServerFn_handler = createServerRpc({
	id: "8d5414a1d7a8f270108e7fa4b7a8915439b2fd3bed7c73b4ca156afca797c75f",
	name: "updateCartItem",
	filename: "src/lib/functions/store/cart.ts"
}, (opts) => updateCartItem.__executeServer(opts));
var updateCartItem = createServerFn({ method: "POST" }).middleware([optionalAuthMiddleware]).inputValidator(updateCartItemSchema.extend({ sessionId: getCartSchema.shape.sessionId })).handler(updateCartItem_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session?.user?.id;
	const { itemId, quantity, sessionId: guestSessionId } = data;
	const item = await db.query.cartItems.findFirst({
		where: eq(cartItems.id, itemId),
		with: { cartSession: true }
	});
	if (!item) throw new Error("Cart item not found");
	if (userId) {
		if (item.cartSession.userId !== userId) throw new Error("Unauthorized");
	} else if (guestSessionId) {
		if (item.cartSession.sessionId !== guestSessionId) throw new Error("Unauthorized");
	} else throw new Error("Unauthorized");
	const product = await db.query.products.findFirst({ where: eq(products.id, item.productId) });
	if (product?.stock !== null && product?.stock !== void 0 && product.stock < quantity) throw new Error("Not enough stock available");
	await db.update(cartItems).set({ quantity }).where(eq(cartItems.id, itemId));
	return {
		success: true,
		message: "Cart updated",
		cart: await fetchCartWithDetails(item.cartSessionId)
	};
});
var removeFromCart_createServerFn_handler = createServerRpc({
	id: "daca747f7539f3366304dcaf0b0fc2681902f356b1b8caf9aa8a7a9973200125",
	name: "removeFromCart",
	filename: "src/lib/functions/store/cart.ts"
}, (opts) => removeFromCart.__executeServer(opts));
var removeFromCart = createServerFn({ method: "POST" }).middleware([optionalAuthMiddleware]).inputValidator(removeFromCartSchema.extend({ sessionId: getCartSchema.shape.sessionId })).handler(removeFromCart_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session?.user?.id;
	const { itemId, sessionId: guestSessionId } = data;
	const item = await db.query.cartItems.findFirst({
		where: eq(cartItems.id, itemId),
		with: { cartSession: true }
	});
	if (!item) throw new Error("Cart item not found");
	if (userId) {
		if (item.cartSession.userId !== userId) throw new Error("Unauthorized");
	} else if (guestSessionId) {
		if (item.cartSession.sessionId !== guestSessionId) throw new Error("Unauthorized");
	} else throw new Error("Unauthorized");
	await db.delete(cartItems).where(eq(cartItems.id, itemId));
	return {
		success: true,
		message: "Item removed from cart",
		cart: await fetchCartWithDetails(item.cartSessionId)
	};
});
var clearCart_createServerFn_handler = createServerRpc({
	id: "c3d39d3ebabedf3aa74ef8ac43be44c1a2e9641619b611072732bb4c41134c5b",
	name: "clearCart",
	filename: "src/lib/functions/store/cart.ts"
}, (opts) => clearCart.__executeServer(opts));
var clearCart = createServerFn({ method: "POST" }).middleware([optionalAuthMiddleware]).inputValidator(clearCartSchema).handler(clearCart_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session?.user?.id;
	const guestSessionId = data.sessionId;
	let session;
	if (userId) session = await db.query.cartSessions.findFirst({ where: eq(cartSessions.userId, userId) });
	else if (guestSessionId) session = await db.query.cartSessions.findFirst({ where: eq(cartSessions.sessionId, guestSessionId) });
	if (!session) return {
		success: true,
		message: "Cart already empty",
		cart: {
			items: [],
			totalItems: 0,
			subtotal: 0,
			sessionId: guestSessionId || null
		}
	};
	await db.delete(cartItems).where(eq(cartItems.cartSessionId, session.id));
	return {
		success: true,
		message: "Cart cleared",
		cart: {
			items: [],
			totalItems: 0,
			subtotal: 0,
			sessionId: session.sessionId || null
		}
	};
});
var mergeCarts_createServerFn_handler = createServerRpc({
	id: "0111ee71fdba918a772ec11d9daba95f804c1f5b6f507ef4c735f3f35bf9360c",
	name: "mergeCarts",
	filename: "src/lib/functions/store/cart.ts"
}, (opts) => mergeCarts.__executeServer(opts));
var mergeCarts = createServerFn({ method: "POST" }).middleware([optionalAuthMiddleware]).inputValidator(mergeCartsSchema).handler(mergeCarts_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session?.user?.id;
	if (!userId) throw new Error("Must be logged in to merge carts");
	const { guestSessionId } = data;
	const guestSession = await db.query.cartSessions.findFirst({ where: eq(cartSessions.sessionId, guestSessionId) });
	if (!guestSession) {
		const { sessionId: userSessionId } = await getOrCreateCartSession(userId, void 0);
		return fetchCartWithDetails(userSessionId);
	}
	const { sessionId: userSessionId } = await getOrCreateCartSession(userId, void 0);
	const guestItems = await db.query.cartItems.findMany({ where: eq(cartItems.cartSessionId, guestSession.id) });
	for (const guestItem of guestItems) {
		const existingItem = await db.query.cartItems.findFirst({ where: and(eq(cartItems.cartSessionId, userSessionId), eq(cartItems.productId, guestItem.productId), guestItem.variantOptions ? eq(cartItems.variantOptions, guestItem.variantOptions) : sql`${cartItems.variantOptions} IS NULL`) });
		if (existingItem) await db.update(cartItems).set({ quantity: existingItem.quantity + guestItem.quantity }).where(eq(cartItems.id, existingItem.id));
		else await db.update(cartItems).set({ cartSessionId: userSessionId }).where(eq(cartItems.id, guestItem.id));
	}
	await db.delete(cartSessions).where(eq(cartSessions.id, guestSession.id));
	return fetchCartWithDetails(userSessionId);
});
//#endregion
export { addToCart_createServerFn_handler, clearCart_createServerFn_handler, getCart_createServerFn_handler, mergeCarts_createServerFn_handler, removeFromCart_createServerFn_handler, updateCartItem_createServerFn_handler };
