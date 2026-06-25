import { A as sql, a as and, f as inArray, i as desc, s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { o as user } from "./shop-schema-C6uNILQs.mjs";
import { h as products, l as productImages } from "./products-schema-BRxXUpzG.mjs";
import { c as db, d as orderItems, f as orders, h as reviewHelpfulVotes, m as productReviews } from "./db-DORSFQFR.mjs";
import { r as createServerFn } from "./ssr.mjs";
import { t as optionalAuthMiddleware } from "./optional-auth-D6kWcuST.mjs";
import { t as authMiddleware } from "./auth-BM1BErpv.mjs";
import { c as getShopReviewsSchema, d as updateReviewSchema, i as deleteReviewSchema, n as checkReviewEligibilitySchema, p as voteHelpfulSchema, r as createReviewSchema, s as getProductReviewsSchema } from "./review-B2UzwQZg.mjs";
import { t as createServerRpc } from "./createServerRpc-D97cGqBD.mjs";
import { a as getReviewOrderByClause, c as updateProductRating, i as getProductRatingStats, l as verifyReviewOwnership, o as requireReview, r as formatReviewDates } from "./review-query-helpers-DfahZAyv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/review-CEoKec8o.js
/**
* Review Server Functions (Store)
*
* Server functions for customer-facing review operations.
*/
var checkReviewEligibility_createServerFn_handler = createServerRpc({
	id: "1a5aea9a8154500ebfc35f4e7a6aa68d7ee79bd4877ca5766c04cdbf15502ba1",
	name: "checkReviewEligibility",
	filename: "src/lib/functions/store/review.ts"
}, (opts) => checkReviewEligibility.__executeServer(opts));
var checkReviewEligibility = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(checkReviewEligibilitySchema).handler(checkReviewEligibility_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session?.user?.id;
	if (!userId) throw new Error("Unauthorized");
	const { productId } = data;
	const eligibleOrders = await db.select({
		orderItemId: orderItems.id,
		orderId: orders.id,
		orderNumber: orders.orderNumber,
		productName: orderItems.productName,
		purchaseDate: orders.createdAt
	}).from(orderItems).innerJoin(orders, eq(orderItems.orderId, orders.id)).where(and(eq(orderItems.productId, productId), eq(orders.userId, userId), eq(orders.paymentStatus, "paid"))).orderBy(desc(orders.createdAt));
	if (eligibleOrders.length === 0) return {
		canReview: false,
		eligibleOrderItems: [],
		existingReviews: []
	};
	const existingReviews = await db.select({
		reviewId: productReviews.id,
		orderItemId: productReviews.orderItemId,
		rating: productReviews.rating,
		title: productReviews.title,
		createdAt: productReviews.createdAt
	}).from(productReviews).where(and(eq(productReviews.productId, productId), eq(productReviews.userId, userId)));
	const reviewedOrderItemIds = new Set(existingReviews.map((r) => r.orderItemId));
	const eligibleOrderItems = eligibleOrders.map((order) => ({
		orderItemId: order.orderItemId,
		orderId: order.orderId,
		orderNumber: order.orderNumber,
		productName: order.productName,
		purchaseDate: order.purchaseDate.toISOString(),
		alreadyReviewed: reviewedOrderItemIds.has(order.orderItemId)
	}));
	return {
		canReview: eligibleOrderItems.some((item) => !item.alreadyReviewed),
		eligibleOrderItems,
		existingReviews: existingReviews.map((r) => ({
			reviewId: r.reviewId,
			rating: r.rating,
			title: r.title,
			createdAt: r.createdAt.toISOString()
		}))
	};
});
var createReview_createServerFn_handler = createServerRpc({
	id: "658db7789624a10e1caf06572a96b16ddf845d454aa76514ae49ffd850db63b3",
	name: "createReview",
	filename: "src/lib/functions/store/review.ts"
}, (opts) => createReview.__executeServer(opts));
var createReview = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(createReviewSchema).handler(createReview_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session?.user?.id;
	if (!userId) throw new Error("Unauthorized");
	const { productId, orderItemId, rating, title, comment } = data;
	const orderItem = await db.select({
		id: orderItems.id,
		orderId: orderItems.orderId,
		productId: orderItems.productId,
		userId: orders.userId,
		paymentStatus: orders.paymentStatus,
		shopId: orders.shopId
	}).from(orderItems).innerJoin(orders, eq(orderItems.orderId, orders.id)).where(eq(orderItems.id, orderItemId)).then((res) => res[0]);
	if (!orderItem) throw new Error("Order item not found");
	if (orderItem.userId !== userId) throw new Error("You can only review products from your own orders");
	if (orderItem.paymentStatus !== "paid") throw new Error("You can only review products from paid orders");
	if (orderItem.productId !== productId) throw new Error("Product ID does not match the order item");
	if (await db.query.productReviews.findFirst({ where: and(eq(productReviews.orderItemId, orderItemId), eq(productReviews.userId, userId)) })) throw new Error("You have already reviewed this purchase");
	const [newReview] = await db.insert(productReviews).values({
		userId,
		productId,
		shopId: orderItem.shopId,
		orderId: orderItem.orderId,
		orderItemId,
		rating,
		title,
		comment,
		status: "approved",
		isVerifiedPurchase: true
	}).returning();
	await updateProductRating(productId);
	return {
		success: true,
		reviewId: newReview.id,
		message: "Review submitted successfully"
	};
});
var updateReview_createServerFn_handler = createServerRpc({
	id: "9b0279cfc84a0c14c510dc5996bd1a2d03a57905d4e9a628e5bc0bd2b2d6e5d6",
	name: "updateReview",
	filename: "src/lib/functions/store/review.ts"
}, (opts) => updateReview.__executeServer(opts));
var updateReview = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(updateReviewSchema).handler(updateReview_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session?.user?.id;
	if (!userId) throw new Error("Unauthorized");
	const { reviewId, rating, title, comment } = data;
	const review = await verifyReviewOwnership(reviewId, userId);
	await db.update(productReviews).set({
		...rating !== void 0 && { rating },
		...title !== void 0 && { title },
		...comment !== void 0 && { comment }
	}).where(eq(productReviews.id, reviewId));
	await updateProductRating(review.productId);
	return {
		success: true,
		message: "Review updated successfully"
	};
});
var deleteReview_createServerFn_handler = createServerRpc({
	id: "1c608054a42f725d7dcffcec8bf30c6fe028f11c0545c35957d4d2383812aee4",
	name: "deleteReview",
	filename: "src/lib/functions/store/review.ts"
}, (opts) => deleteReview.__executeServer(opts));
var deleteReview = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(deleteReviewSchema).handler(deleteReview_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session?.user?.id;
	if (!userId) throw new Error("Unauthorized");
	const { reviewId } = data;
	const review = await verifyReviewOwnership(reviewId, userId);
	await db.delete(productReviews).where(eq(productReviews.id, reviewId));
	await updateProductRating(review.productId);
	return {
		success: true,
		message: "Review deleted successfully"
	};
});
var getProductReviews_createServerFn_handler = createServerRpc({
	id: "9cd4cb972d639c9379af00f4bb42e89dbaa8891e7df54a49ebb5c156c75051d8",
	name: "getProductReviews",
	filename: "src/lib/functions/store/review.ts"
}, (opts) => getProductReviews.__executeServer(opts));
var getProductReviews = createServerFn({ method: "GET" }).middleware([optionalAuthMiddleware]).inputValidator(getProductReviewsSchema).handler(getProductReviews_createServerFn_handler, async ({ context, data }) => {
	const currentUserId = context.session?.user?.id;
	const { productId, limit, offset, sortBy } = data;
	const orderByClause = getReviewOrderByClause(sortBy);
	const reviews = await db.select({
		id: productReviews.id,
		userId: productReviews.userId,
		userName: user.name,
		userAvatar: user.image,
		productId: productReviews.productId,
		rating: productReviews.rating,
		title: productReviews.title,
		comment: productReviews.comment,
		status: productReviews.status,
		helpfulCount: productReviews.helpfulCount,
		isVerifiedPurchase: productReviews.isVerifiedPurchase,
		vendorResponse: productReviews.vendorResponse,
		vendorRespondedAt: productReviews.vendorRespondedAt,
		createdAt: productReviews.createdAt,
		updatedAt: productReviews.updatedAt
	}).from(productReviews).innerJoin(user, eq(productReviews.userId, user.id)).where(and(eq(productReviews.productId, productId), eq(productReviews.status, "approved"))).orderBy(orderByClause).limit(limit).offset(offset);
	let userVotes = /* @__PURE__ */ new Set();
	if (currentUserId && reviews.length > 0) {
		const reviewIds = reviews.map((r) => r.id);
		const votes = await db.select({ reviewId: reviewHelpfulVotes.reviewId }).from(reviewHelpfulVotes).where(and(inArray(reviewHelpfulVotes.reviewId, reviewIds), eq(reviewHelpfulVotes.userId, currentUserId)));
		userVotes = new Set(votes.map((v) => v.reviewId));
	}
	const [{ count }] = await db.select({ count: sql`count(*)::int` }).from(productReviews).where(and(eq(productReviews.productId, productId), eq(productReviews.status, "approved")));
	const ratingStats = await getProductRatingStats(productId);
	return {
		reviews: reviews.map((review) => {
			const dates = formatReviewDates(review);
			return {
				id: review.id,
				userId: review.userId,
				userName: review.userName || "Anonymous",
				userAvatar: review.userAvatar,
				productId: review.productId,
				productName: "",
				rating: review.rating,
				title: review.title,
				comment: review.comment,
				status: review.status,
				helpfulCount: review.helpfulCount,
				isVerifiedPurchase: review.isVerifiedPurchase,
				vendorResponse: review.vendorResponse,
				...dates,
				hasVotedHelpful: userVotes.has(review.id)
			};
		}),
		total: count,
		ratingStats
	};
});
var voteReviewHelpful_createServerFn_handler = createServerRpc({
	id: "13ec9a5931545cc64330cca9e6140d868959cec1d779eddd97100faed4776a96",
	name: "voteReviewHelpful",
	filename: "src/lib/functions/store/review.ts"
}, (opts) => voteReviewHelpful.__executeServer(opts));
var voteReviewHelpful = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(voteHelpfulSchema).handler(voteReviewHelpful_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session?.user?.id;
	if (!userId) throw new Error("Unauthorized");
	const { reviewId } = data;
	if ((await requireReview(reviewId)).userId === userId) throw new Error("You can't vote on your own review");
	const existingVote = await db.query.reviewHelpfulVotes.findFirst({ where: and(eq(reviewHelpfulVotes.reviewId, reviewId), eq(reviewHelpfulVotes.userId, userId)) });
	if (existingVote) {
		await db.delete(reviewHelpfulVotes).where(eq(reviewHelpfulVotes.id, existingVote.id));
		await db.update(productReviews).set({ helpfulCount: sql`${productReviews.helpfulCount} - 1` }).where(eq(productReviews.id, reviewId));
		return {
			success: true,
			voted: false,
			message: "Vote removed"
		};
	}
	await db.insert(reviewHelpfulVotes).values({
		reviewId,
		userId
	});
	await db.update(productReviews).set({ helpfulCount: sql`${productReviews.helpfulCount} + 1` }).where(eq(productReviews.id, reviewId));
	return {
		success: true,
		voted: true,
		message: "Marked as helpful"
	};
});
var getUserReviews_createServerFn_handler = createServerRpc({
	id: "d3d278e74014659046f62b3a5007e443b3a49cd0888c3347d21ba4b0ff6a2ad0",
	name: "getUserReviews",
	filename: "src/lib/functions/store/review.ts"
}, (opts) => getUserReviews.__executeServer(opts));
var getUserReviews = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(getUserReviews_createServerFn_handler, async ({ context }) => {
	const userId = context.session?.user?.id;
	if (!userId) throw new Error("Unauthorized");
	return { reviews: (await db.select({
		id: productReviews.id,
		productId: productReviews.productId,
		productName: products.name,
		productImage: sql`(
            SELECT ${productImages.url} FROM ${productImages}
            WHERE ${productImages.productId} = ${products.id}
            ORDER BY ${productImages.isPrimary} DESC, ${productImages.createdAt} DESC
            LIMIT 1
        )`.as("product_image"),
		rating: productReviews.rating,
		title: productReviews.title,
		comment: productReviews.comment,
		status: productReviews.status,
		helpfulCount: productReviews.helpfulCount,
		vendorResponse: productReviews.vendorResponse,
		vendorRespondedAt: productReviews.vendorRespondedAt,
		createdAt: productReviews.createdAt,
		updatedAt: productReviews.updatedAt
	}).from(productReviews).innerJoin(products, eq(productReviews.productId, products.id)).where(eq(productReviews.userId, userId)).orderBy(desc(productReviews.createdAt))).map((review) => {
		const dates = formatReviewDates(review);
		return {
			id: review.id,
			productId: review.productId,
			productName: review.productName,
			productImage: review.productImage ?? null,
			rating: review.rating,
			title: review.title,
			comment: review.comment,
			status: review.status,
			helpfulCount: review.helpfulCount,
			vendorResponse: review.vendorResponse,
			...dates
		};
	}) };
});
var getShopReviews_createServerFn_handler = createServerRpc({
	id: "c8b6c56920301b77108221d3cedac873faeda69cfe4b827025b35b220104a4de",
	name: "getShopReviews",
	filename: "src/lib/functions/store/review.ts"
}, (opts) => getShopReviews.__executeServer(opts));
var getShopReviews = createServerFn({ method: "GET" }).middleware([optionalAuthMiddleware]).inputValidator(getShopReviewsSchema).handler(getShopReviews_createServerFn_handler, async ({ context, data }) => {
	const currentUserId = context.session?.user?.id;
	const { shopId, limit, offset } = data;
	const reviews = await db.select({
		id: productReviews.id,
		userId: productReviews.userId,
		userName: user.name,
		userAvatar: user.image,
		productId: productReviews.productId,
		productName: products.name,
		rating: productReviews.rating,
		title: productReviews.title,
		comment: productReviews.comment,
		status: productReviews.status,
		helpfulCount: productReviews.helpfulCount,
		isVerifiedPurchase: productReviews.isVerifiedPurchase,
		vendorResponse: productReviews.vendorResponse,
		vendorRespondedAt: productReviews.vendorRespondedAt,
		createdAt: productReviews.createdAt,
		updatedAt: productReviews.updatedAt
	}).from(productReviews).innerJoin(user, eq(productReviews.userId, user.id)).innerJoin(products, eq(productReviews.productId, products.id)).where(and(eq(productReviews.shopId, shopId), eq(productReviews.status, "approved"))).orderBy(desc(productReviews.createdAt)).limit(limit).offset(offset);
	let userVotes = /* @__PURE__ */ new Set();
	if (currentUserId && reviews.length > 0) {
		const reviewIds = reviews.map((r) => r.id);
		const votes = await db.select({ reviewId: reviewHelpfulVotes.reviewId }).from(reviewHelpfulVotes).where(and(inArray(reviewHelpfulVotes.reviewId, reviewIds), eq(reviewHelpfulVotes.userId, currentUserId)));
		userVotes = new Set(votes.map((v) => v.reviewId));
	}
	const [{ count }] = await db.select({ count: sql`count(*)::int` }).from(productReviews).where(and(eq(productReviews.shopId, shopId), eq(productReviews.status, "approved")));
	const ratingData = await db.select({
		rating: productReviews.rating,
		count: sql`count(*)::int`
	}).from(productReviews).where(and(eq(productReviews.shopId, shopId), eq(productReviews.status, "approved"))).groupBy(productReviews.rating);
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
	const averageRating = totalCount > 0 ? Math.round(totalRating / totalCount * 10) / 10 : 0;
	return {
		reviews: reviews.map((review) => {
			const dates = formatReviewDates(review);
			return {
				id: review.id,
				userId: review.userId,
				userName: review.userName || "Anonymous",
				userAvatar: review.userAvatar,
				productId: review.productId,
				productName: review.productName,
				rating: review.rating,
				title: review.title,
				comment: review.comment,
				status: review.status,
				helpfulCount: review.helpfulCount,
				isVerifiedPurchase: review.isVerifiedPurchase,
				vendorResponse: review.vendorResponse,
				...dates,
				hasVotedHelpful: userVotes.has(review.id)
			};
		}),
		total: count,
		ratingStats: {
			average: averageRating,
			count: totalCount,
			breakdown
		}
	};
});
//#endregion
export { checkReviewEligibility_createServerFn_handler, createReview_createServerFn_handler, deleteReview_createServerFn_handler, getProductReviews_createServerFn_handler, getShopReviews_createServerFn_handler, getUserReviews_createServerFn_handler, updateReview_createServerFn_handler, voteReviewHelpful_createServerFn_handler };
