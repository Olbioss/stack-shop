"use client";

import {
  type ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { MoreHorizontal, Star } from "lucide-react";
import { DataTable } from "#/components/base/data-table/data-table-core";
import { DataTablePagination } from "#/components/base/data-table/data-table-pagination";
import { DataTableToolbar } from "#/components/base/data-table/data-table-toolbar";
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
import type { Review } from "@/types/review";

interface ReviewTableProps {
  reviews: Review[];
  className?: string;
}

const getStatusBadgeVariant = (status: string) => {
  switch (status) {
    case "published":
      return "default";
    case "pending":
      return "secondary";
    case "rejected":
      return "destructive";
    default:
      return "outline";
  }
};

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`size-4 ${
            star <= rating ? "fill-star text-star" : "text-muted-foreground/40"
          }`}
        />
      ))}
      <span className="ml-1 text-sm text-muted-foreground">({rating})</span>
    </div>
  );
};

export default function ReviewTable({ reviews }: ReviewTableProps) {
  const columns: ColumnDef<Review>[] = [
    {
      accessorKey: "productImage",
      header: "Product",
      cell: ({ row }) => (
        <Avatar className="h-9 w-9 rounded-md border">
          <AvatarImage
            src={row.getValue("productImage")}
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
      cell: ({ row }) => (
        <div className="font-medium">{row.getValue("productName")}</div>
      ),
    },
    {
      accessorKey: "customerName",
      header: "Customer",
      cell: ({ row }) => {
        const customerName = row.getValue("customerName") as string;
        const customerAvatar = row.original.customerAvatar;
        return (
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={customerAvatar} alt={customerName} />
              <AvatarFallback className="text-xs">
                {customerName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm">{customerName}</span>
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
      header: "Comment",
      cell: ({ row }) => (
        <div className="max-w-md truncate text-sm">
          {row.getValue("comment")}
        </div>
      ),
    },
    {
      accessorKey: "date",
      header: "Date",
      cell: ({ row }) => (
        <div className="text-muted-foreground text-sm">
          {new Date(row.getValue("date")).toLocaleDateString()}
        </div>
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
          {row.getValue("status")}
        </Badge>
      ),
    },
    {
      id: "actions",
      header: () => <div className="text-right">Actions</div>,
      cell: ({ row }) => (
        <div className="flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(row.original.id)}
              >
                Copy ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View Details</DropdownMenuItem>
              {row.original.status === "pending" && (
                <>
                  <DropdownMenuItem className="text-success">
                    Approve
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">
                    Reject
                  </DropdownMenuItem>
                </>
              )}
              <DropdownMenuItem className="text-destructive">
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ),
    },
  ];
  const table = useReactTable({
    data: reviews,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    globalFilterFn: "includesString",
  });
  return (
    <>
      <DataTableToolbar table={table} />
      <DataTable columns={columns} table={table} />
      <DataTablePagination table={table} />
    </>
  );
}
