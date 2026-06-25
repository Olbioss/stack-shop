import { Gt as string, Ht as object, Mt as _enum, Vt as number } from "../_libs/@better-auth/core+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/review-B2UzwQZg.js
/**
* Review Validators
*
* Zod validation schemas for review operations.
*/
var reviewStatusSchema = _enum([
	"pending",
	"approved",
	"rejected"
]);
var createReviewSchema = object({
	productId: string().min(1, "Product ID is required"),
	orderItemId: string().min(1, "Order item ID is required"),
	rating: number().min(1, "Rating must be at least 1").max(5, "Rating must be at most 5"),
	title: string().min(5, "Title must be at least 5 characters").max(100, "Title must be at most 100 characters"),
	comment: string().min(10, "Review must be at least 10 characters").max(1e3, "Review must be at most 1000 characters")
});
var updateReviewSchema = object({
	reviewId: string().min(1, "Review ID is required"),
	rating: number().min(1, "Rating must be at least 1").max(5, "Rating must be at most 5").optional(),
	title: string().min(5, "Title must be at least 5 characters").max(100, "Title must be at most 100 characters").optional(),
	comment: string().min(10, "Review must be at least 10 characters").max(1e3, "Review must be at most 1000 characters").optional()
});
var deleteReviewSchema = object({ reviewId: string().min(1, "Review ID is required") });
var getProductReviewsSchema = object({
	productId: string().min(1, "Product ID is required"),
	limit: number().min(1).max(50).optional().default(10),
	offset: number().min(0).optional().default(0),
	sortBy: _enum([
		"newest",
		"oldest",
		"highest",
		"lowest",
		"helpful"
	]).optional().default("newest")
});
var checkReviewEligibilitySchema = object({ productId: string().min(1, "Product ID is required") });
var voteHelpfulSchema = object({ reviewId: string().min(1, "Review ID is required") });
var getVendorReviewsSchema = object({
	shopSlug: string().optional(),
	productId: string().optional(),
	status: reviewStatusSchema.optional(),
	rating: number().min(1).max(5).optional(),
	limit: number().min(1).max(100).optional().default(20),
	offset: number().min(0).optional().default(0)
});
var respondToReviewSchema = object({
	reviewId: string().min(1, "Review ID is required"),
	response: string().min(10, "Response must be at least 10 characters").max(500, "Response must be at most 500 characters")
});
var getAdminReviewsSchema = object({
	shopId: string().optional(),
	productId: string().optional(),
	userId: string().optional(),
	status: reviewStatusSchema.optional(),
	rating: number().min(1).max(5).optional(),
	limit: number().min(1).max(100).optional().default(20),
	offset: number().min(0).optional().default(0)
});
var updateReviewStatusSchema = object({
	reviewId: string().min(1, "Review ID is required"),
	status: reviewStatusSchema,
	reason: string().optional()
});
var adminDeleteReviewSchema = object({
	reviewId: string().min(1, "Review ID is required"),
	reason: string().min(5, "Reason must be at least 5 characters")
});
var getAdminReviewByIdSchema = object({ reviewId: string().min(1, "Review ID is required") });
var getShopReviewsSchema = object({
	shopId: string().min(1, "Shop ID is required"),
	limit: number().min(1).max(50).optional().default(10),
	offset: number().min(0).optional().default(0)
});
//#endregion
export { getAdminReviewByIdSchema as a, getShopReviewsSchema as c, updateReviewSchema as d, updateReviewStatusSchema as f, deleteReviewSchema as i, getVendorReviewsSchema as l, checkReviewEligibilitySchema as n, getAdminReviewsSchema as o, voteHelpfulSchema as p, createReviewSchema as r, getProductReviewsSchema as s, adminDeleteReviewSchema as t, respondToReviewSchema as u };
