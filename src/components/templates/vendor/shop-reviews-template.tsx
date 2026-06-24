import PageHeader from "@/components/base/common/page-header";
import type { DataTableServer } from "@/components/base/data-table/types";
import VendorReviewTable from "@/components/containers/shared/reviews/vendor-review-table";
import type { DetailedReviewResponse } from "@/types/review";

interface ShopReviewsTemplateProps {
  server: DataTableServer<DetailedReviewResponse>;
  shopSlug: string;
}

export default function ShopReviewsTemplate({
  server,
  shopSlug,
}: ShopReviewsTemplateProps) {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Reviews"
        description="Manage customer reviews and ratings for your shop"
      />
      <div className="rounded-md">
        <VendorReviewTable server={server} shopSlug={shopSlug} />
      </div>
    </div>
  );
}
