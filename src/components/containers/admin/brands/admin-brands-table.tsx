import { useMemo } from "react";
import {
  type BrandMutationState,
  type BrandTableActions,
  createBrandColumns,
  getSharedBrandFilters,
} from "#/components/containers/shared/brands/brand-table-columns";
import DataTable from "@/components/base/data-table/data-table";
import type { DataTableServer } from "@/components/base/data-table/types";
import type { BrandItem } from "@/types/brands";

interface AdminBrandsTableProps extends BrandTableActions {
  server: DataTableServer<BrandItem>;
  className?: string;
  mutationState?: BrandMutationState;
  isBrandMutating?: (id: string) => boolean;
}

export default function AdminBrandsTable({
  server,
  className,
  onEdit,
  onDelete,
  onToggleActive,
  mutationState,
  isBrandMutating,
}: AdminBrandsTableProps) {
  const columns = useMemo(() => {
    return createBrandColumns({
      mode: "admin",
      actions: { onEdit, onDelete, onToggleActive },
      mutationState,
      isBrandMutating,
    });
  }, [onEdit, onDelete, onToggleActive, mutationState, isBrandMutating]);

  const filterableColumns = useMemo(() => getSharedBrandFilters(), []);

  return (
    <DataTable
      columns={columns}
      server={server}
      context="admin"
      initialPageSize={10}
      filterableColumns={filterableColumns}
      globalFilterPlaceholder="Search brands..."
      className={className}
    />
  );
}
