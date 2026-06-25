import { r as createServerFn } from "./ssr.mjs";
import { t as createSsrRpc } from "./createSsrRpc-CXFXGZZ3.mjs";
import { c as useQueryClient, n as useMutation, o as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as optionalAuthMiddleware } from "./optional-auth-D6kWcuST.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as authMiddleware } from "./auth-BM1BErpv.mjs";
import { c as getShopReviewsSchema, d as updateReviewSchema, i as deleteReviewSchema, n as checkReviewEligibilitySchema, p as voteHelpfulSchema, r as createReviewSchema, s as getProductReviewsSchema } from "./review-B2UzwQZg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-reviews-BiSMwz98.js
/**
* Review Server Functions (Store)
*
* Server functions for customer-facing review operations.
*/
/**
* Check if the current user can review a product
* Returns list of order items they haven't reviewed yet
*/
var checkReviewEligibility = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(checkReviewEligibilitySchema).handler(createSsrRpc("1a5aea9a8154500ebfc35f4e7a6aa68d7ee79bd4877ca5766c04cdbf15502ba1"));
var createReview = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(createReviewSchema).handler(createSsrRpc("658db7789624a10e1caf06572a96b16ddf845d454aa76514ae49ffd850db63b3"));
var updateReview = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(updateReviewSchema).handler(createSsrRpc("9b0279cfc84a0c14c510dc5996bd1a2d03a57905d4e9a628e5bc0bd2b2d6e5d6"));
var deleteReview = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(deleteReviewSchema).handler(createSsrRpc("1c608054a42f725d7dcffcec8bf30c6fe028f11c0545c35957d4d2383812aee4"));
var getProductReviews = createServerFn({ method: "GET" }).middleware([optionalAuthMiddleware]).inputValidator(getProductReviewsSchema).handler(createSsrRpc("9cd4cb972d639c9379af00f4bb42e89dbaa8891e7df54a49ebb5c156c75051d8"));
var voteReviewHelpful = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(voteHelpfulSchema).handler(createSsrRpc("13ec9a5931545cc64330cca9e6140d868959cec1d779eddd97100faed4776a96"));
var getUserReviews = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("d3d278e74014659046f62b3a5007e443b3a49cd0888c3347d21ba4b0ff6a2ad0"));
var getShopReviews = createServerFn({ method: "GET" }).middleware([optionalAuthMiddleware]).inputValidator(getShopReviewsSchema).handler(createSsrRpc("c8b6c56920301b77108221d3cedac873faeda69cfe4b827025b35b220104a4de"));
/**
* Customer Reviews Hooks
*
* React Query hooks for customer review operations.
*/
var reviewKeys = {
	all: ["reviews"],
	productReviews: (productId, params) => [
		...reviewKeys.all,
		"product",
		productId,
		params
	],
	shopReviews: (shopId, params) => [
		...reviewKeys.all,
		"shop",
		shopId,
		params
	],
	eligibility: (productId) => [
		...reviewKeys.all,
		"eligibility",
		productId
	],
	userReviews: () => [...reviewKeys.all, "user"]
};
function useProductReviews(productId, params) {
	return useQuery({
		queryKey: reviewKeys.productReviews(productId, params),
		queryFn: async () => {
			return await getProductReviews({ data: {
				productId,
				limit: params?.limit ?? 10,
				offset: params?.offset ?? 0,
				sortBy: params?.sortBy ?? "newest"
			} });
		},
		enabled: !!productId
	});
}
function useShopReviews(shopId, params) {
	return useQuery({
		queryKey: reviewKeys.shopReviews(shopId, params),
		queryFn: async () => {
			return await getShopReviews({ data: {
				shopId,
				limit: params?.limit ?? 10,
				offset: params?.offset ?? 0
			} });
		},
		enabled: !!shopId
	});
}
function useReviewEligibility(productId) {
	return useQuery({
		queryKey: reviewKeys.eligibility(productId),
		queryFn: async () => {
			return await checkReviewEligibility({ data: { productId } });
		},
		enabled: !!productId
	});
}
function useUserReviews() {
	return useQuery({
		queryKey: reviewKeys.userReviews(),
		queryFn: async () => {
			return (await getUserReviews()).reviews;
		}
	});
}
function useReviewMutations() {
	const queryClient = useQueryClient();
	return {
		createReview: useMutation({
			mutationFn: async (data) => {
				return await createReview({ data });
			},
			onSuccess: (_, variables) => {
				toast.success("Review submitted successfully!");
				queryClient.invalidateQueries({ queryKey: reviewKeys.productReviews(variables.productId) });
				queryClient.invalidateQueries({ queryKey: reviewKeys.eligibility(variables.productId) });
				queryClient.invalidateQueries({ queryKey: reviewKeys.userReviews() });
			},
			onError: (error) => {
				toast.error(error.message || "Failed to submit review");
			}
		}),
		updateReview: useMutation({
			mutationFn: async (data) => {
				const { productId: _, ...updateData } = data;
				return await updateReview({ data: updateData });
			},
			onSuccess: (_, variables) => {
				toast.success("Review updated successfully!");
				queryClient.invalidateQueries({ queryKey: reviewKeys.productReviews(variables.productId) });
				queryClient.invalidateQueries({ queryKey: reviewKeys.userReviews() });
			},
			onError: (error) => {
				toast.error(error.message || "Failed to update review");
			}
		}),
		deleteReview: useMutation({
			mutationFn: async (data) => {
				return await deleteReview({ data: { reviewId: data.reviewId } });
			},
			onSuccess: (_, variables) => {
				toast.success("Review deleted successfully!");
				queryClient.invalidateQueries({ queryKey: reviewKeys.productReviews(variables.productId) });
				queryClient.invalidateQueries({ queryKey: reviewKeys.eligibility(variables.productId) });
				queryClient.invalidateQueries({ queryKey: reviewKeys.userReviews() });
			},
			onError: (error) => {
				toast.error(error.message || "Failed to delete review");
			}
		}),
		voteHelpful: useMutation({
			mutationFn: async (data) => {
				return await voteReviewHelpful({ data: { reviewId: data.reviewId } });
			},
			onSuccess: (result, variables) => {
				toast.success(result.message);
				queryClient.invalidateQueries({ queryKey: reviewKeys.productReviews(variables.productId) });
			},
			onError: (error) => {
				toast.error(error.message || "Failed to vote");
			}
		})
	};
}
//#endregion
export { useUserReviews as a, useShopReviews as i, useReviewEligibility as n, useReviewMutations as r, useProductReviews as t };
