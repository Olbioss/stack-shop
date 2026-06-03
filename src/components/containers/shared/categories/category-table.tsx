import { useMemo } from "react";
import DataTable from "#/components/base/data-table/data-table";
import type { DataTableServer } from "@/components/base/data-table/types";
import { VENDOR_STATUS_OPTIONS } from "@/hooks/vendor/use-vendor-entity-fetcher";
import type { NormalizedCategory } from "@/types/category-types";
import {
  type CategoryMutationState,
  type CategoryTableActions,
  createCategoryColumns,
  getSharedCategoryFilters,
} from "./category-table-columns";

interface VendorCategoryTableProps extends CategoryTableActions {
  server: DataTableServer<NormalizedCategory>;
  className?: string;
  mutationState?: CategoryMutationState;
  isCategoryMutating?: (id: string) => boolean;
}

export function VendorCategoryTable({
  server,
  className,
  onEdit,
  onDelete,
  mutationState,
  isCategoryMutating,
}: VendorCategoryTableProps) {
  const columns = useMemo(() => {
    const actions: CategoryTableActions = {
      onEdit,
      onDelete,
    };
    return createCategoryColumns({
      mode: "vendor",
      actions,
      isCategoryMutating,
      mutationState,
    });
  }, [onEdit, onDelete, isCategoryMutating, mutationState]);

  const filterableColumns = useMemo(
    () =>
      getSharedCategoryFilters({
        statusOptions: VENDOR_STATUS_OPTIONS,
        includeFeatured: true,
      }),
    []
  );

  return (
    <DataTable
      columns={columns}
      server={server}
      context="shop"
      initialPageSize={10}
      filterableColumns={filterableColumns}
      globalFilterPlaceholder="Search categories..."
      className={className}
    />
  );
}

interface AdminCategoryTableProps extends CategoryTableActions {
  categories: NormalizedCategory[];
  className?: string;
  mutationState?: CategoryMutationState;
  isCategoryMutating?: (id: string) => boolean;
}

export function AdminCategoryTable({
  categories,
  className,
  onEdit,
  onDelete,
  onToggleActive,
  onToggleFeatured,
  mutationState,
  isCategoryMutating,
}: AdminCategoryTableProps) {
  const columns = useMemo(() => {
    const actions: CategoryTableActions = {
      onEdit,
      onDelete,
      onToggleActive,
      onToggleFeatured,
    };
    return createCategoryColumns({
      mode: "admin",
      actions,
      isCategoryMutating,
      mutationState,
    });
  }, [
    onEdit,
    onDelete,
    onToggleActive,
    onToggleFeatured,
    isCategoryMutating,
    mutationState,
  ]);

  const filterableColumns = useMemo(
    () =>
      getSharedCategoryFilters({
        statusOptions: VENDOR_STATUS_OPTIONS,
        includeFeatured: true,
      }),
    []
  );

  return (
    <DataTable
      columns={columns}
      data={categories}
      initialPageSize={10}
      filterableColumns={filterableColumns}
      globalFilterPlaceholder="Search categories..."
      className={className}
    />
  );
}

export default VendorCategoryTable;
