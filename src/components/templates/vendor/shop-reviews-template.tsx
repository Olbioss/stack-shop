import ReviewTable from "#/components/containers/shared/reviews/review-table";
import ReviewHeader from "#/components/containers/vendor/reviews/review-header";
import type { Review } from "@/types/review";

interface ShopReviewsTemplateProps {
  reviews: Review[];
  onAddReview: () => void;
}

export default function ShopReviewsTemplate({
  reviews,
  onAddReview,
}: ShopReviewsTemplateProps) {
  return (
    <div className="space-y-6">
      <ReviewHeader onAddReview={onAddReview} />
      <ReviewTable reviews={reviews} />
    </div>
  );
}
