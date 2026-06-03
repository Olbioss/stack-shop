import { Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "#/components/ui/button";
import type { ReviewFormValues } from "#/types/review";
import PageHeader from "@/components/base/common/page-header";
import AddReviewDialog from "../../vendor/reviews/add-review-dialog";

export interface ReviewHeaderProps {
  onAddReview?: (data: ReviewFormValues) => void;
  role?: "admin" | "vendor";
  showAddButton?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export default function ReviewHeader({
  onAddReview,
  role = "vendor",
  showAddButton = true,
  children,
  className,
}: ReviewHeaderProps) {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const handleAddReview = (data: ReviewFormValues) => {
    onAddReview?.(data);
  };

  return (
    <PageHeader
      title="Reviews"
      description={
        role === "admin"
          ? "Manage platform-wide customer reviews and ratings"
          : "Manage customer reviews and ratings for your products"
      }
      className={className}
    >
      {children}
      {showAddButton && (
        <Button onClick={() => setIsAddDialogOpen(true)}>
          <Plus className="size-4" />
          Add Review
        </Button>
      )}
      <AddReviewDialog
        open={isAddDialogOpen}
        onOpenChange={setIsAddDialogOpen}
        onSubmit={handleAddReview}
      />
    </PageHeader>
  );
}
