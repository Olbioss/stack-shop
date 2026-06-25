import { r as createServerFn } from "./ssr.mjs";
import { A as sql, s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { o as user, r as shops } from "./shop-schema-C6uNILQs.mjs";
import { h as products } from "./products-schema-BRxXUpzG.mjs";
import { c as db, m as productReviews } from "./db-DORSFQFR.mjs";
import { t as adminMiddleware } from "./admin-CYCFP3zk.mjs";
import { a as getAdminReviewByIdSchema, f as updateReviewStatusSchema, o as getAdminReviewsSchema, t as adminDeleteReviewSchema } from "./review-B2UzwQZg.mjs";
import { t as createServerRpc } from "./createServerRpc-D97cGqBD.mjs";
import { t as createPaginatedResponse } from "./api-response-CYQsbkXz.mjs";
import { c as updateProductRating, n as executeDetailedReviewQuery, o as requireReview, r as formatReviewDates, s as reviewWithShopSelectFields, t as batchFetchReviewRelations } from "./review-query-helpers-DfahZAyv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/review-Bj5wb0tr.js
/**
* Review Server Functions (Admin)
*
* Server functions for admin review operations.
* Admins can view ALL reviews across the platform.
* Admins can moderate, approve, reject, and delete reviews.
*/
var getAdminReviews_createServerFn_handler = createServerRpc({
	id: "12777805f64fb1fe810fdfb37b774af0f9d574f40e2017704cda61650821ed42",
	name: "getAdminReviews",
	filename: "src/lib/functions/admin/review.ts"
}, (opts) => getAdminReviews.__executeServer(opts));
var getAdminReviews = createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(getAdminReviewsSchema).handler(getAdminReviews_createServerFn_handler, async ({ data }) => {
	const { shopId, productId, userId: filterUserId, status, rating, limit, offset } = data;
	const result = await executeDetailedReviewQuery({
		shopId,
		productId,
		userId: filterUserId,
		status,
		rating,
		limit,
		offset,
		includeProductImages: true,
		includeVendorInfo: true
	});
	return createPaginatedResponse(result.data, result.total, result.limit, result.offset);
});
var getAdminReviewStats_createServerFn_handler = createServerRpc({
	id: "18970c1ac69561c894837b0b85d11b2030ae60d9663d49925c3a3925a6eb7780",
	name: "getAdminReviewStats",
	filename: "src/lib/functions/admin/review.ts"
}, (opts) => getAdminReviewStats.__executeServer(opts));
var getAdminReviewStats = createServerFn({ method: "GET" }).middleware([adminMiddleware]).handler(getAdminReviewStats_createServerFn_handler, async () => {
	const [overallStats] = await db.select({
		total: sql`count(*)::int`,
		avgRating: sql`avg(${productReviews.rating})::numeric(3,2)`
	}).from(productReviews);
	const statusStats = await db.select({
		status: productReviews.status,
		count: sql`count(*)::int`
	}).from(productReviews).groupBy(productReviews.status);
	let pendingCount = 0;
	let approvedCount = 0;
	let rejectedCount = 0;
	for (const stat of statusStats) {
		if (stat.status === "pending") pendingCount = stat.count;
		if (stat.status === "approved") approvedCount = stat.count;
		if (stat.status === "rejected") rejectedCount = stat.count;
	}
	const startOfMonth = /* @__PURE__ */ new Date();
	startOfMonth.setDate(1);
	startOfMonth.setHours(0, 0, 0, 0);
	const [{ monthCount }] = await db.select({ monthCount: sql`count(*)::int` }).from(productReviews).where(sql`${productReviews.createdAt} >= ${startOfMonth}`);
	const topShops = await db.select({
		shopId: productReviews.shopId,
		shopName: shops.name,
		avgRating: sql`avg(${productReviews.rating})::numeric(3,2)`,
		reviewCount: sql`count(*)::int`
	}).from(productReviews).innerJoin(shops, eq(productReviews.shopId, shops.id)).where(eq(productReviews.status, "approved")).groupBy(productReviews.shopId, shops.name).having(sql`count(*) >= 5`).orderBy(sql`avg(${productReviews.rating}) DESC`).limit(5);
	const sevenDaysAgo = /* @__PURE__ */ new Date();
	sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
	const recentActivity = await db.select({
		date: sql`date(${productReviews.createdAt})`,
		reviewCount: sql`count(*)::int`
	}).from(productReviews).where(sql`${productReviews.createdAt} >= ${sevenDaysAgo}`).groupBy(sql`date(${productReviews.createdAt})`).orderBy(sql`date(${productReviews.createdAt})`);
	return {
		totalReviews: overallStats.total || 0,
		averageRating: parseFloat(String(overallStats.avgRating)) || 0,
		pendingModeration: pendingCount,
		approvedReviews: approvedCount,
		rejectedReviews: rejectedCount,
		reviewsThisMonth: monthCount,
		topRatedShops: topShops.map((shop) => ({
			shopId: shop.shopId,
			shopName: shop.shopName,
			averageRating: parseFloat(String(shop.avgRating)) || 0,
			reviewCount: shop.reviewCount
		})),
		recentActivity: recentActivity.map((day) => ({
			date: day.date,
			reviewCount: day.reviewCount
		}))
	};
});
var updateReviewStatus_createServerFn_handler = createServerRpc({
	id: "a8ce7230c03f3611e526e06a9d2212ea7564780cc71b5b10b71cc213957065f7",
	name: "updateReviewStatus",
	filename: "src/lib/functions/admin/review.ts"
}, (opts) => updateReviewStatus.__executeServer(opts));
var updateReviewStatus = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(updateReviewStatusSchema).handler(updateReviewStatus_createServerFn_handler, async ({ data }) => {
	const { reviewId, status } = data;
	const review = await requireReview(reviewId);
	await db.update(productReviews).set({ status }).where(eq(productReviews.id, reviewId));
	await updateProductRating(review.productId);
	return {
		success: true,
		message: `Review ${status === "approved" ? "approved" : status === "rejected" ? "rejected" : "updated"} successfully`
	};
});
var adminDeleteReview_createServerFn_handler = createServerRpc({
	id: "e416445483c691ebfd2462e9e902a3c14977ac62a52080cc8df16f34849db403",
	name: "adminDeleteReview",
	filename: "src/lib/functions/admin/review.ts"
}, (opts) => adminDeleteReview.__executeServer(opts));
var adminDeleteReview = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(adminDeleteReviewSchema).handler(adminDeleteReview_createServerFn_handler, async ({ data }) => {
	const { reviewId, reason } = data;
	const review = await requireReview(reviewId);
	console.log(`Admin deleted review ${reviewId}. Reason: ${reason}`);
	await db.delete(productReviews).where(eq(productReviews.id, reviewId));
	await updateProductRating(review.productId);
	return {
		success: true,
		message: "Review deleted successfully"
	};
});
var getAdminReviewById_createServerFn_handler = createServerRpc({
	id: "c3282a8291deedaeda9357ce21851e48bcf3b4230293074ee5a5d88947223ded",
	name: "getAdminReviewById",
	filename: "src/lib/functions/admin/review.ts"
}, (opts) => getAdminReviewById.__executeServer(opts));
var getAdminReviewById = createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(getAdminReviewByIdSchema).handler(getAdminReviewById_createServerFn_handler, async ({ data }) => {
	const { reviewId } = data;
	const review = await db.select(reviewWithShopSelectFields).from(productReviews).innerJoin(user, eq(productReviews.userId, user.id)).innerJoin(products, eq(productReviews.productId, products.id)).innerJoin(shops, eq(productReviews.shopId, shops.id)).where(eq(productReviews.id, reviewId)).then((res) => res[0]);
	if (!review) throw new Error("Review not found");
	const relations = await batchFetchReviewRelations([{
		productId: review.productId,
		vendorId: review.vendorId
	}], {
		includeProductImages: true,
		includeVendorInfo: true
	});
	const vendor = review.vendorId ? relations.vendorsMap.get(review.vendorId) : void 0;
	const dates = formatReviewDates(review);
	return { review: {
		id: review.id,
		userId: review.userId,
		userName: review.userName || "Anonymous",
		userEmail: review.userEmail,
		userAvatar: review.userAvatar,
		productId: review.productId,
		productName: review.productName,
		productImage: relations.productImagesMap.get(review.productId) || null,
		shopId: review.shopId,
		shopName: review.shopName,
		shopSlug: review.shopSlug,
		vendorId: review.vendorId || void 0,
		vendorName: vendor?.name,
		vendorEmail: vendor?.email,
		orderId: review.orderId,
		rating: review.rating,
		title: review.title,
		comment: review.comment,
		status: review.status,
		helpfulCount: review.helpfulCount,
		isVerifiedPurchase: review.isVerifiedPurchase,
		vendorResponse: review.vendorResponse,
		...dates
	} };
});
//#endregion
export { adminDeleteReview_createServerFn_handler, getAdminReviewById_createServerFn_handler, getAdminReviewStats_createServerFn_handler, getAdminReviews_createServerFn_handler, updateReviewStatus_createServerFn_handler };
