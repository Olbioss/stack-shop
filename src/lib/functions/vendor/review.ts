/**
 * Review Server Functions (Vendor)
 *
 * Server functions for vendor review operations.
 * Vendors can view reviews for products in shops they own.
 * Access is scoped to the vendor's own shops (admins may pass any shopSlug).
 */
import { createServerFn } from "@tanstack/react-start";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { productReviews } from "@/lib/db/schema/review-schema";
import { shops } from "@/lib/db/schema/shop-schema";
import {
  executeDetailedReviewQuery,
  requireReview,
  updateProductRating,
} from "@/lib/helper/review-query-helpers";
import {
  getVendorForUser,
  isUserAdmin,
  requireShopAccess,
} from "@/lib/helper/vendor";
import { authMiddleware } from "@/lib/middleware/auth";
import {
  getVendorReviewsSchema,
  respondToReviewSchema,
  updateReviewStatusSchema,
} from "@/lib/validators/review";
import { createPaginatedResponse } from "@/types/api-response";
import type { DetailedReviewResponse } from "@/types/review";

// ============================================================================
// Helper: Resolve the shop a vendor query is scoped to
// ============================================================================
/**
 * Resolve the shop id for a vendor review query, enforcing ownership.
 * Returns null when the shop does not exist or the user has no access.
 */
async function getShopIdForReviewQuery(
  userId: string,
  shopSlug?: string
): Promise<string | null> {
  if (!shopSlug) return null;

  const shop = await db.query.shops.findFirst({
    where: eq(shops.slug, shopSlug),
  });

  if (!shop) return null;

  // Admins can access any shop
  if (await isUserAdmin(userId)) return shop.id;

  // Vendors can only access their own shops
  const vendor = await getVendorForUser(userId);
  if (vendor && shop.vendorId === vendor.id) return shop.id;

  return null;
}

// ============================================================================
// Get Vendor Reviews
// ============================================================================
/**
 * Get reviews for a vendor's shop (paginated, filterable by product/status/rating).
 */
export const getVendorReviews = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .inputValidator(getVendorReviewsSchema)
  .handler(async ({ context, data }) => {
    const userId = context.session?.user?.id;
    if (!userId) throw new Error("Authentication required");

    const { shopSlug, productId, status, rating, limit, offset } = data;

    const shopId = await getShopIdForReviewQuery(userId, shopSlug);

    if (!shopId) {
      return createPaginatedResponse<DetailedReviewResponse>(
        [],
        0,
        limit,
        offset
      );
    }

    const result = await executeDetailedReviewQuery({
      shopId,
      productId,
      status,
      rating,
      limit,
      offset,
      includeProductImages: true,
      includeVendorInfo: false,
    });

    return createPaginatedResponse(
      result.data,
      result.total,
      result.limit,
      result.offset
    );
  });

// ============================================================================
// Update Vendor Review Status (approve / reject)
// ============================================================================
/**
 * Approve or reject a review for a shop the vendor owns.
 */
export const updateVendorReviewStatus = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .inputValidator(updateReviewStatusSchema)
  .handler(async ({ context, data }) => {
    const userId = context.session?.user?.id;
    if (!userId) throw new Error("Authentication required");

    const { reviewId, status } = data;

    // Ensure the review exists and belongs to a shop the vendor can access
    const review = await requireReview(reviewId);
    await requireShopAccess(userId, review.shopId);

    await db
      .update(productReviews)
      .set({ status })
      .where(eq(productReviews.id, reviewId));

    // Keep the product rating aggregate in sync
    await updateProductRating(review.productId);

    return {
      success: true,
      message: `Review ${
        status === "approved"
          ? "approved"
          : status === "rejected"
            ? "rejected"
            : "updated"
      } successfully`,
    };
  });

// ============================================================================
// Respond to Review
// ============================================================================
/**
 * Post (or update) a vendor response to a review for a shop the vendor owns.
 */
export const respondToReview = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .inputValidator(respondToReviewSchema)
  .handler(async ({ context, data }) => {
    const userId = context.session?.user?.id;
    if (!userId) throw new Error("Authentication required");

    const { reviewId, response } = data;

    // Ensure the review exists and belongs to a shop the vendor can access
    const review = await requireReview(reviewId);
    await requireShopAccess(userId, review.shopId);

    await db
      .update(productReviews)
      .set({ vendorResponse: response, vendorRespondedAt: new Date() })
      .where(eq(productReviews.id, reviewId));

    return {
      success: true,
      message: "Response posted successfully",
    };
  });
