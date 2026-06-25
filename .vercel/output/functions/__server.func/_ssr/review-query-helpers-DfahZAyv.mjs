import { A as sql, a as and, f as inArray, i as desc, n as count, r as asc, s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { o as user, r as shops, s as vendors } from "./shop-schema-C6uNILQs.mjs";
import { h as products, l as productImages } from "./products-schema-BRxXUpzG.mjs";
import { c as db, m as productReviews } from "./db-DORSFQFR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/review-query-helpers-DfahZAyv.js
/**
* Extended select fields with shop info
*/
var reviewWithShopSelectFields = {
	id: productReviews.id,
	userId: productReviews.userId,
	productId: productReviews.productId,
	shopId: productReviews.shopId,
	orderId: productReviews.orderId,
	rating: productReviews.rating,
	title: productReviews.title,
	comment: productReviews.comment,
	status: productReviews.status,
	helpfulCount: productReviews.helpfulCount,
	isVerifiedPurchase: productReviews.isVerifiedPurchase,
	vendorResponse: productReviews.vendorResponse,
	vendorRespondedAt: productReviews.vendorRespondedAt,
	createdAt: productReviews.createdAt,
	updatedAt: productReviews.updatedAt,
	userName: user.name,
	userEmail: user.email,
	userAvatar: user.image,
	productName: products.name,
	shopName: shops.name,
	shopSlug: shops.slug,
	vendorId: shops.vendorId
};
/**
* Batch fetch product images for a list of product IDs
*/
async function batchFetchProductImages(productIds) {
	const imageMap = /* @__PURE__ */ new Map();
	if (productIds.length === 0) return imageMap;
	const images = await db.select({
		productId: productImages.productId,
		url: productImages.url,
		isPrimary: productImages.isPrimary
	}).from(productImages).where(inArray(productImages.productId, productIds));
	for (const img of images) if (!imageMap.has(img.productId) || img.isPrimary) imageMap.set(img.productId, img.url);
	return imageMap;
}
/**
* Batch fetch vendor info for a list of vendor IDs
*/
async function batchFetchVendorInfo(vendorIds) {
	const vendorMap = /* @__PURE__ */ new Map();
	if (vendorIds.length === 0) return vendorMap;
	const vendorData = await db.select({
		vendorId: vendors.id,
		userName: user.name,
		userEmail: user.email
	}).from(vendors).innerJoin(user, eq(vendors.userId, user.id)).where(inArray(vendors.id, vendorIds));
	for (const v of vendorData) vendorMap.set(v.vendorId, {
		name: v.userName || "Unknown",
		email: v.userEmail
	});
	return vendorMap;
}
/**
* Batch fetch all related data for reviews
*/
async function batchFetchReviewRelations(reviews, options = {}) {
	const productIds = [...new Set(reviews.map((r) => r.productId))];
	const vendorIds = [...new Set(reviews.map((r) => r.vendorId).filter(Boolean))];
	const queries = [];
	if (options.includeProductImages && productIds.length > 0) queries.push(batchFetchProductImages(productIds));
	else queries.push(Promise.resolve(/* @__PURE__ */ new Map()));
	if (options.includeVendorInfo && vendorIds.length > 0) queries.push(batchFetchVendorInfo(vendorIds));
	else queries.push(Promise.resolve(/* @__PURE__ */ new Map()));
	const [productImagesMap, vendorsMap] = await Promise.all(queries);
	return {
		productImagesMap,
		vendorsMap
	};
}
/**
* Format review date fields for API response
*/
function formatReviewDates(review) {
	return {
		createdAt: review.createdAt.toISOString(),
		updatedAt: review.updatedAt.toISOString(),
		vendorRespondedAt: review.vendorRespondedAt?.toISOString() || null
	};
}
/**
* Build SQL WHERE conditions from filter parameters
*/
function buildReviewFilterConditions(options) {
	const conditions = [];
	if (options.baseConditions) conditions.push(...options.baseConditions);
	if (options.shopId) conditions.push(eq(productReviews.shopId, options.shopId));
	if (options.productId) conditions.push(eq(productReviews.productId, options.productId));
	if (options.userId) conditions.push(eq(productReviews.userId, options.userId));
	if (options.status) conditions.push(eq(productReviews.status, options.status));
	if (options.rating) conditions.push(eq(productReviews.rating, options.rating));
	return conditions;
}
/**
* Get order by clause based on sort option
*/
function getReviewOrderByClause(sortBy = "newest") {
	switch (sortBy) {
		case "oldest": return asc(productReviews.createdAt);
		case "highest": return desc(productReviews.rating);
		case "lowest": return asc(productReviews.rating);
		case "helpful": return desc(productReviews.helpfulCount);
		default: return desc(productReviews.createdAt);
	}
}
/**
* Calculate rating statistics from rating data
*/
function calculateRatingStats(ratingData) {
	const breakdown = {
		5: 0,
		4: 0,
		3: 0,
		2: 0,
		1: 0
	};
	let totalCount = 0;
	let totalRating = 0;
	for (const stat of ratingData) {
		const rating = stat.rating;
		breakdown[rating] = stat.count;
		totalCount += stat.count;
		totalRating += stat.rating * stat.count;
	}
	return {
		average: totalCount > 0 ? Math.round(totalRating / totalCount * 10) / 10 : 0,
		count: totalCount,
		breakdown
	};
}
/**
* Get rating breakdown for a product (approved reviews only)
*/
async function getProductRatingStats(productId) {
	return calculateRatingStats(await db.select({
		rating: productReviews.rating,
		count: sql`count(*)::int`
	}).from(productReviews).where(and(eq(productReviews.productId, productId), eq(productReviews.status, "approved"))).groupBy(productReviews.rating));
}
/**
* Recalculate and update the denormalized rating fields on the product table
*/
async function updateProductRating(productId) {
	const stats = await getProductRatingStats(productId);
	await db.update(products).set({
		averageRating: stats.average.toString(),
		reviewCount: stats.count
	}).where(eq(products.id, productId));
}
/**
* Get a review by ID
*/
async function getReviewById(reviewId) {
	return db.query.productReviews.findFirst({ where: eq(productReviews.id, reviewId) });
}
/**
* Check if a review exists and throw if not found
*/
async function requireReview(reviewId) {
	const review = await getReviewById(reviewId);
	if (!review) throw new Error("Review not found");
	return review;
}
/**
* Verify review ownership
*/
async function verifyReviewOwnership(reviewId, userId) {
	const review = await requireReview(reviewId);
	if (review.userId !== userId) throw new Error("You can only modify your own reviews");
	return review;
}
/**
* Execute a detailed review query (for admin/vendor contexts)
* Returns reviews with user, product, and shop info
*/
async function executeDetailedReviewQuery(options) {
	const limit = options.limit ?? 20;
	const offset = options.offset ?? 0;
	const conditions = buildReviewFilterConditions(options);
	const whereClause = conditions.length > 0 ? and(...conditions) : void 0;
	const orderByClause = getReviewOrderByClause(options.sortBy);
	const [countResult, reviews] = await Promise.all([db.select({ count: count() }).from(productReviews).where(whereClause), db.select(reviewWithShopSelectFields).from(productReviews).innerJoin(user, eq(productReviews.userId, user.id)).innerJoin(products, eq(productReviews.productId, products.id)).innerJoin(shops, eq(productReviews.shopId, shops.id)).where(whereClause).orderBy(orderByClause).limit(limit).offset(offset)]);
	const total = countResult[0]?.count ?? 0;
	if (reviews.length === 0) return {
		data: [],
		total,
		limit,
		offset
	};
	const relations = await batchFetchReviewRelations(reviews.map((r) => ({
		productId: r.productId,
		vendorId: r.vendorId
	})), {
		includeProductImages: options.includeProductImages ?? true,
		includeVendorInfo: options.includeVendorInfo ?? false
	});
	return {
		data: reviews.map((review) => {
			const vendor = review.vendorId ? relations.vendorsMap.get(review.vendorId) : void 0;
			const dates = formatReviewDates(review);
			return {
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
			};
		}),
		total,
		limit,
		offset
	};
}
//#endregion
export { getReviewOrderByClause as a, updateProductRating as c, getProductRatingStats as i, verifyReviewOwnership as l, executeDetailedReviewQuery as n, requireReview as o, formatReviewDates as r, reviewWithShopSelectFields as s, batchFetchReviewRelations as t };
