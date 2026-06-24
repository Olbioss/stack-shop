import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { DetailedReviewResponse } from "@/types/review";

const MIN_LENGTH = 10;
const MAX_LENGTH = 500;

interface RespondReviewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  review: DetailedReviewResponse | null;
  onSubmit: (response: string) => void;
  isSubmitting?: boolean;
}

export default function RespondReviewDialog({
  open,
  onOpenChange,
  review,
  onSubmit,
  isSubmitting,
}: RespondReviewDialogProps) {
  const [response, setResponse] = useState("");

  // Prefill with the existing response when (re)opening
  useEffect(() => {
    if (open) {
      setResponse(review?.vendorResponse ?? "");
    }
  }, [open, review]);

  const trimmed = response.trim();
  const isValid = trimmed.length >= MIN_LENGTH && trimmed.length <= MAX_LENGTH;

  const handleSubmit = () => {
    if (!isValid) return;
    onSubmit(trimmed);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-125">
        <DialogHeader>
          <DialogTitle>Respond to review</DialogTitle>
          <DialogDescription>
            {review
              ? `Reply to ${review.userName || "the customer"}'s review of ${review.productName}.`
              : "Reply to this review."}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-2 py-2">
          <Label htmlFor="vendor-response">Your response</Label>
          <Textarea
            id="vendor-response"
            placeholder="Thank the customer or address their feedback..."
            className="min-h-30"
            maxLength={MAX_LENGTH}
            value={response}
            onChange={(e) => setResponse(e.target.value)}
          />
          <p className="text-muted-foreground text-xs">
            {trimmed.length}/{MAX_LENGTH} characters (minimum {MIN_LENGTH})
          </p>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={isSubmitting || !isValid}>
            {isSubmitting ? "Posting..." : "Post response"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
