import { s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { r as shops } from "./shop-schema-C6uNILQs.mjs";
import { c as db, m as productReviews } from "./db-DORSFQFR.mjs";
import { r as createServerFn } from "./ssr.mjs";
import { t as authMiddleware } from "./auth-BM1BErpv.mjs";
import { f as updateReviewStatusSchema, l as getVendorReviewsSchema, u as respondToReviewSchema } from "./review-B2UzwQZg.mjs";
import { t as createServerRpc } from "./createServerRpc-D97cGqBD.mjs";
import { t as createPaginatedResponse } from "./api-response-CYQsbkXz.mjs";
import { n as isUserAdmin, r as requireShopAccess, t as getVendorForUser } from "./vendor-S8D_d0RQ.mjs";
import { c as updateProductRating, n as executeDetailedReviewQuery, o as requireReview } from "./review-query-helpers-DfahZAyv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/review-Cg23-Ojc.js
/**
* Review Server Functions (Vendor)
*
* Server functions for vendor review operations.
* Vendors can view reviews for products in shops they own.
* Access is scoped to the vendor's own shops (admins may pass any shopSlug).
*/
/**
* Resolve the shop id for a vendor review query, enforcing ownership.
* Returns null when the shop does not exist or the user has no access.
*/
async function getShopIdForReviewQuery(userId, shopSlug) {
	if (!shopSlug) return null;
	const shop = await db.query.shops.findFirst({ where: eq(shops.slug, shopSlug) });
	if (!shop) return null;
	if (await isUserAdmin(userId)) return shop.id;
	const vendor = await getVendorForUser(userId);
	if (vendor && shop.vendorId === vendor.id) return shop.id;
	return null;
}
/**
* Get reviews for a vendor's shop (paginated, filterable by product/status/rating).
*/
var getVendorReviews_createServerFn_handler = createServerRpc({
	id: "a666737e81104e36ec1c0c0de3a0595553c00115fe1e4c9fe61a1b048e5776aa",
	name: "getVendorReviews",
	filename: "src/lib/functions/vendor/review.ts"
}, (opts) => getVendorReviews.__executeServer(opts));
var getVendorReviews = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(getVendorReviewsSchema).handler(getVendorReviews_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session?.user?.id;
	if (!userId) throw new Error("Authentication required");
	const { shopSlug, productId, status, rating, limit, offset } = data;
	const shopId = await getShopIdForReviewQuery(userId, shopSlug);
	if (!shopId) return createPaginatedResponse([], 0, limit, offset);
	const result = await executeDetailedReviewQuery({
		shopId,
		productId,
		status,
		rating,
		limit,
		offset,
		includeProductImages: true,
		includeVendorInfo: false
	});
	return createPaginatedResponse(result.data, result.total, result.limit, result.offset);
});
var updateVendorReviewStatus_createServerFn_handler = createServerRpc({
	id: "1f3369c6a0980a59dd01c8bd508f53a49dc3b673c6ebe8a929dd524f338f3b71",
	name: "updateVendorReviewStatus",
	filename: "src/lib/functions/vendor/review.ts"
}, (opts) => updateVendorReviewStatus.__executeServer(opts));
var updateVendorReviewStatus = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(updateReviewStatusSchema).handler(updateVendorReviewStatus_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session?.user?.id;
	if (!userId) throw new Error("Authentication required");
	const { reviewId, status } = data;
	const review = await requireReview(reviewId);
	await requireShopAccess(userId, review.shopId);
	await db.update(productReviews).set({ status }).where(eq(productReviews.id, reviewId));
	await updateProductRating(review.productId);
	return {
		success: true,
		message: `Review ${status === "approved" ? "approved" : status === "rejected" ? "rejected" : "updated"} successfully`
	};
});
var respondToReview_createServerFn_handler = createServerRpc({
	id: "ed663de432dfbce4e241eab3267d1d1c7f71e38b7ef729f9ede9708654776643",
	name: "respondToReview",
	filename: "src/lib/functions/vendor/review.ts"
}, (opts) => respondToReview.__executeServer(opts));
var respondToReview = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(respondToReviewSchema).handler(respondToReview_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session?.user?.id;
	if (!userId) throw new Error("Authentication required");
	const { reviewId, response } = data;
	await requireShopAccess(userId, (await requireReview(reviewId)).shopId);
	await db.update(productReviews).set({
		vendorResponse: response,
		vendorRespondedAt: /* @__PURE__ */ new Date()
	}).where(eq(productReviews.id, reviewId));
	return {
		success: true,
		message: "Response posted successfully"
	};
});
//#endregion
export { getVendorReviews_createServerFn_handler, respondToReview_createServerFn_handler, updateVendorReviewStatus_createServerFn_handler };
