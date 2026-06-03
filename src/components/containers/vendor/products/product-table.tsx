import { useMemo } from "react";
import DataTable from "@/components/base/data-table/data-table";
import type { DataTableServer } from "@/components/base/data-table/types";
import type { ProductItem } from "@/types/products";
import {
  createProductTableColumns,
  type ProductMutationState,
} from "./product-table-columns";

interface ProductTableProps {
  products?: ProductItem[];
  server: DataTableServer<ProductItem>;
  onDelete?: (product: ProductItem) => void;
  onEdit?: (product: ProductItem) => void;
  onToggleActive?: (product: ProductItem) => void;
  isMutating?: (id: string) => boolean;
  mutationState?: ProductMutationState;
  className?: string;
  mode?: "vendor" | "customer";
}

export function ProductTable({
  products,
  server,
  onDelete,
  onEdit,
  onToggleActive,
  isMutating,
  mutationState,
  className,
  mode = "vendor",
}: ProductTableProps) {
  const columns = useMemo(() => {
    return createProductTableColumns({
      mode,
      actions: {
        onDelete,
        onEdit,
        onToggleActive,
      },
      mutationState,
      isMutating,
    });
  }, [mode, onDelete, onEdit, onToggleActive, mutationState, isMutating]);

  if (server) {
    return (
      <DataTable
        columns={columns}
        server={server}
        context="shop"
        initialPageSize={10}
        globalFilterPlaceholder="Search products..."
        className={className}
      />
    );
  }

  return (
    <DataTable columns={columns} data={products || []} className={className} />
  );
}

export default ProductTable;
