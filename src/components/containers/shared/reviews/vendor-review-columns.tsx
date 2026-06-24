import type { ColumnDef } from "@tanstack/react-table";
import { MessageSquare, MoreHorizontal, Star } from "lucide-react";
import type { FilterableColumn } from "@/components/base/data-table/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { ReviewStatus } from "@/lib/validators/review";
import type { DetailedReviewResponse, ReviewPermissions } from "@/types/review";

// ============================================================================
// Status select options (values MUST match the server ReviewStatus enum)
// ============================================================================
export const REVIEW_STATUS_OPTIONS = [
  { label: "Pending", value: "pending" },
  { label: "Approved", value: "approved" },
  { label: "Rejected", value: "rejected" },
];

const getStatusBadgeVariant = (status: string) => {
  switch (status) {
    case "approved":
      return "default" as const;
    case "pending":
      return "secondary" as const;
    case "rejected":
      return "destructive" as const;
    default:
      return "outline" as const;
  }
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case "approved":
      return "Approved";
    case "pending":
      return "Pending";
    case "rejected":
      return "Rejected";
    default:
      return status;
  }
};

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`size-4 ${
            star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
      <span className="ml-1 text-muted-foreground text-sm">({rating})</span>
    </div>
  );
};

const initialsOf = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export interface VendorReviewColumnConfig {
  permissions?: ReviewPermissions;
  onUpdateStatus?: (reviewId: string, newStatus: ReviewStatus) => void;
  onRespond?: (review: DetailedReviewResponse) => void;
  /** Returns true while a mutation for the given review id is in flight. */
  isMutating?: (reviewId: string) => boolean;
}

export const createVendorReviewColumns = ({
  permissions,
  onUpdateStatus,
  onRespond,
  isMutating,
}: VendorReviewColumnConfig): ColumnDef<DetailedReviewResponse>[] => {
  return [
    {
      accessorKey: "productImage",
      header: "Product",
      enableSorting: false,
      cell: ({ row }) => (
        <Avatar className="h-9 w-9 rounded-md border">
          <AvatarImage
            src={row.original.productImage ?? undefined}
            alt={row.original.productName}
          />
          <AvatarFallback className="rounded-md uppercase">
            {row.original.productName.slice(0, 2)}
          </AvatarFallback>
        </Avatar>
      ),
    },
    {
      accessorKey: "productName",
      header: "Product Name",
      enableSorting: false,
      cell: ({ row }) => (
        <div className="font-medium">{row.getValue("productName")}</div>
      ),
    },
    {
      accessorKey: "userName",
      header: "Customer",
      enableSorting: false,
      cell: ({ row }) => {
        const userName = (row.getValue("userName") as string) || "Anonymous";
        return (
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage
                src={row.original.userAvatar ?? undefined}
                alt={userName}
              />
              <AvatarFallback className="text-xs">
                {initialsOf(userName)}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm">{userName}</span>
          </div>
        );
      },
    },
    {
      accessorKey: "rating",
      header: "Rating",
      cell: ({ row }) => <StarRating rating={row.getValue("rating")} />,
    },
    {
      accessorKey: "comment",
      header: "Review",
      enableSorting: false,
      cell: ({ row }) => (
        <div className="max-w-md">
          {row.original.title && (
            <div className="truncate font-medium text-sm">
              {row.original.title}
            </div>
          )}
          <div className="truncate text-muted-foreground text-sm">
            {row.getValue("comment")}
          </div>
        </div>
      ),
    },
    {
      id: "response",
      header: "Response",
      enableSorting: false,
      cell: ({ row }) =>
        row.original.vendorResponse ? (
          <Badge variant="outline" className="text-xs">
            Replied
          </Badge>
        ) : (
          <span className="text-muted-foreground text-sm">—</span>
        ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <Badge
          variant={getStatusBadgeVariant(row.getValue("status"))}
          className="text-xs"
        >
          {getStatusLabel(row.getValue("status"))}
        </Badge>
      ),
    },
    {
      accessorKey: "createdAt",
      header: "Date",
      cell: ({ row }) => (
        <div className="text-muted-foreground text-sm">
          {new Date(row.getValue("createdAt")).toLocaleDateString()}
        </div>
      ),
    },
    {
      id: "actions",
      header: () => <div className="text-right">Actions</div>,
      enableSorting: false,
      cell: ({ row }) => {
        const review = row.original;
        const status = review.status;
        const busy = isMutating?.(review.id) ?? false;
        return (
          <div className="flex justify-end">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="h-8 w-8 p-0"
                  disabled={busy}
                >
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="size-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => navigator.clipboard.writeText(review.id)}
                >
                  Copy ID
                </DropdownMenuItem>
                {permissions?.canEdit && (
                  <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => onRespond?.(review)}>
                      <MessageSquare className="mr-2 size-4" />
                      {review.vendorResponse ? "Edit response" : "Respond"}
                    </DropdownMenuItem>
                  </>
                )}
                {permissions?.canUpdateStatus && (
                  <>
                    <DropdownMenuSeparator />
                    {status !== "approved" && (
                      <DropdownMenuItem
                        onClick={() => onUpdateStatus?.(review.id, "approved")}
                        className="text-green-600"
                      >
                        Approve
                      </DropdownMenuItem>
                    )}
                    {status !== "rejected" && (
                      <DropdownMenuItem
                        onClick={() => onUpdateStatus?.(review.id, "rejected")}
                        className="text-destructive"
                      >
                        Reject
                      </DropdownMenuItem>
                    )}
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        );
      },
    },
  ];
};

// ============================================================================
// Filters
// ============================================================================
export const getVendorReviewFilters =
  (): FilterableColumn<DetailedReviewResponse>[] => {
    return [
      {
        id: "status",
        label: "Status",
        type: "select",
        options: REVIEW_STATUS_OPTIONS,
        placeholder: "Filter by status",
      },
    ];
  };
