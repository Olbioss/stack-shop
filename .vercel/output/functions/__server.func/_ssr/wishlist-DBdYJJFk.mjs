import { r as createServerFn } from "./ssr.mjs";
import { a as and, i as desc, s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { c as db, g as wishlistItems } from "./db-DORSFQFR.mjs";
import { t as optionalAuthMiddleware } from "./optional-auth-D6kWcuST.mjs";
import { t as authMiddleware } from "./auth-BM1BErpv.mjs";
import { t as toggleWishlistSchema } from "./wishlist-Dtqzq8Ig.mjs";
import { t as createServerRpc } from "./createServerRpc-D97cGqBD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wishlist-DBdYJJFk.js
/**
* Wishlist Server Functions
*
* Server functions for managing user wishlists.
* Uses TanStack Start's createServerFn with authentication middleware.
*/
var getWishlist_createServerFn_handler = createServerRpc({
	id: "245430af01ba4f382981d82ee4d30a75593d72179215e4bfa032fc1d0d1ea640",
	name: "getWishlist",
	filename: "src/lib/functions/store/wishlist.ts"
}, (opts) => getWishlist.__executeServer(opts));
var getWishlist = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(getWishlist_createServerFn_handler, async ({ context }) => {
	const userId = context.session?.user?.id;
	if (!userId) throw new Error("Unauthorized: User not found");
	return { items: await db.query.wishlistItems.findMany({
		where: eq(wishlistItems.userId, userId),
		with: { product: { with: {
			images: true,
			shop: true
		} } },
		orderBy: [desc(wishlistItems.createdAt)]
	}) };
});
var toggleWishlist_createServerFn_handler = createServerRpc({
	id: "3255777bc3528258b1411c218a598d72d90d34c1d61ca0220c35162d355617c6",
	name: "toggleWishlist",
	filename: "src/lib/functions/store/wishlist.ts"
}, (opts) => toggleWishlist.__executeServer(opts));
var toggleWishlist = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(toggleWishlistSchema).handler(toggleWishlist_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session?.user?.id;
	if (!userId) throw new Error("Unauthorized: User not found");
	if (await db.query.wishlistItems.findFirst({ where: and(eq(wishlistItems.userId, userId), eq(wishlistItems.productId, data.productId)) })) {
		await db.delete(wishlistItems).where(and(eq(wishlistItems.userId, userId), eq(wishlistItems.productId, data.productId)));
		return { added: false };
	} else {
		await db.insert(wishlistItems).values({
			userId,
			productId: data.productId
		});
		return { added: true };
	}
});
var checkWishlistStatus_createServerFn_handler = createServerRpc({
	id: "5b0adee9a0c2d5441423f75e2214368ff10b19701dc934c1cd5f250a46babe4d",
	name: "checkWishlistStatus",
	filename: "src/lib/functions/store/wishlist.ts"
}, (opts) => checkWishlistStatus.__executeServer(opts));
var checkWishlistStatus = createServerFn({ method: "POST" }).middleware([optionalAuthMiddleware]).inputValidator(toggleWishlistSchema).handler(checkWishlistStatus_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session?.user?.id;
	if (!userId) return { isInWishlist: false };
	return { isInWishlist: !!await db.query.wishlistItems.findFirst({ where: and(eq(wishlistItems.userId, userId), eq(wishlistItems.productId, data.productId)) }) };
});
//#endregion
export { checkWishlistStatus_createServerFn_handler, getWishlist_createServerFn_handler, toggleWishlist_createServerFn_handler };
