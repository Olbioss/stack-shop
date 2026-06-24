import { useMemo, useState } from "react";
import DataTable from "@/components/base/data-table/data-table";
import type { DataTableServer } from "@/components/base/data-table/types";
import RespondReviewDialog from "@/components/containers/vendor/reviews/respond-review-dialog";
import { useVendorReviewMutations } from "@/hooks/vendor/use-vendor-reviews";
import { VENDOR_REVIEW_PERMISSIONS } from "@/lib/config/review-permissions";
import type { ReviewStatus } from "@/lib/validators/review";
import type { DetailedReviewResponse } from "@/types/review";
import {
  createVendorReviewColumns,
  getVendorReviewFilters,
} from "./vendor-review-columns";

interface VendorReviewTableProps {
  server: DataTableServer<DetailedReviewResponse>;
  shopSlug: string;
  className?: string;
}

export default function VendorReviewTable({
  server,
  className,
}: VendorReviewTableProps) {
  const { updateStatus, respond } = useVendorReviewMutations();
  const [respondingTo, setRespondingTo] =
    useState<DetailedReviewResponse | null>(null);

  const isMutating = (reviewId: string) =>
    (updateStatus.isPending && updateStatus.variables?.reviewId === reviewId) ||
    (respond.isPending && respond.variables?.reviewId === reviewId);

  const columns = useMemo(
    () =>
      createVendorReviewColumns({
        permissions: VENDOR_REVIEW_PERMISSIONS,
        onUpdateStatus: (reviewId: string, newStatus: ReviewStatus) =>
          updateStatus.mutate({ reviewId, status: newStatus }),
        onRespond: (review) => setRespondingTo(review),
        isMutating,
      }),
    // updateStatus.mutate / respond identity is stable across renders
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [updateStatus.isPending, respond.isPending]
  );

  const filterableColumns = useMemo(() => getVendorReviewFilters(), []);

  return (
    <>
      <DataTable
        columns={columns}
        server={server}
        context="shop"
        initialPageSize={10}
        filterableColumns={filterableColumns}
        globalFilterPlaceholder="Search reviews..."
        className={className}
      />

      <RespondReviewDialog
        open={!!respondingTo}
        onOpenChange={(open) => {
          if (!open) setRespondingTo(null);
        }}
        review={respondingTo}
        isSubmitting={respond.isPending}
        onSubmit={(response) => {
          if (!respondingTo) return;
          respond.mutate(
            { reviewId: respondingTo.id, response },
            { onSuccess: () => setRespondingTo(null) }
          );
        }}
      />
    </>
  );
}
