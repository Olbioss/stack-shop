import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DataTableSkeletonProps {
  /** Number of columns to render */
  columnCount: number;
  /** Number of rows to render */
  rowCount?: number;
  /** Whether to show checkbox column */
  hasCheckbox?: boolean;
  /** Whether to show actions column */
  hasActions?: boolean;
}

export function DataTableSkeleton({
  columnCount,
  rowCount = 10,
  hasCheckbox = false,
  hasActions = true,
}: DataTableSkeletonProps) {
  return (
    <div className="relative w-full overflow-hidden rounded-md border">
      {/* Shimmer overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 animate-shimmer bg-linear-to-r from-transparent via-muted/30 to-transparent" />

      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            {hasCheckbox && (
              <TableHead className="w-10">
                <Skeleton className="h-4 w-4" />
              </TableHead>
            )}
            {Array.from({ length: columnCount }).map((_, i) => (
              <TableHead key={i}>
                <Skeleton className="h-4 w-[60%]" />
              </TableHead>
            ))}
            {hasActions && (
              <TableHead className="w-20 text-right">
                <Skeleton className="ml-auto h-4 w-12" />
              </TableHead>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: rowCount }).map((_, rowIndex) => (
            <TableRow key={rowIndex} className="hover:bg-transparent">
              {hasCheckbox && (
                <TableCell className="w-10">
                  <Skeleton className="h-4 w-4" />
                </TableCell>
              )}
              {Array.from({ length: columnCount }).map((_, colIndex) => {
                // Deterministic width (40%–80%) derived from the cell indices.
                // Using Math.random() here caused SSR/client hydration mismatches.
                const width = 40 + ((rowIndex * 31 + colIndex * 17) % 9) * 5;
                return (
                  <TableCell key={colIndex}>
                    <Skeleton className="h-4" style={{ width: `${width}%` }} />
                  </TableCell>
                );
              })}
              {hasActions && (
                <TableCell className="text-right">
                  <Skeleton className="ml-auto h-8 w-8 rounded-md" />
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
