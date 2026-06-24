/**
 * Vendor Reviews Hooks
 *
 * React Query keys/hooks for vendor review management.
 */

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import {
  respondToReview,
  updateVendorReviewStatus,
} from "@/lib/functions/vendor/review";
import type {
  RespondToReviewInput,
  ReviewStatus,
  UpdateReviewStatusInput,
} from "@/lib/validators/review";

// ============================================================================
// Query Keys
// ============================================================================

export const vendorReviewsKeys = {
  all: ["vendor-reviews"] as const,
  list: (params?: {
    limit?: number;
    offset?: number;
    status?: ReviewStatus;
    rating?: number;
    productId?: string;
    shopSlug?: string;
  }) => [...vendorReviewsKeys.all, "list", params] as const,
};

// ============================================================================
// Mutations
// ============================================================================

/**
 * Vendor review moderation mutations: approve/reject status and respond.
 * Both invalidate the vendor reviews cache on success.
 */
export function useVendorReviewMutations() {
  const queryClient = useQueryClient();

  const updateStatus = useMutation({
    mutationFn: async (data: UpdateReviewStatusInput) =>
      updateVendorReviewStatus({ data }),
    onSuccess: (result) => {
      toast.success(result.message);
      queryClient.invalidateQueries({ queryKey: vendorReviewsKeys.all });
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to update review status");
    },
  });

  const respond = useMutation({
    mutationFn: async (data: RespondToReviewInput) => respondToReview({ data }),
    onSuccess: (result) => {
      toast.success(result.message);
      queryClient.invalidateQueries({ queryKey: vendorReviewsKeys.all });
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to post response");
    },
  });

  return { updateStatus, respond };
}
