import { useMemo } from "react";
import DataTable from "@/components/base/data-table/data-table";
import type { DataTableServer } from "@/components/base/data-table/types";
import type { ShippingMethodItem } from "@/types/shipping";
import {
  createShippingColumns,
  getSharedShippingFilters,
  SHIPPING_STATUS_OPTIONS,
  type ShippingMutationState,
} from "./shipping-table-columns";

interface ShippingTableProps {
  shippingMethods?: ShippingMethodItem[];
  server: DataTableServer<ShippingMethodItem>;
  onEdit?: (shipping: ShippingMethodItem) => void;
  onDelete?: (shipping: ShippingMethodItem) => void;
  className?: string;
  mutationState?: ShippingMutationState;
  isMutating?: (id: string) => boolean;
  mode?: "vendor" | "admin";
}

export default function ShippingTable({
  shippingMethods,
  server,
  onEdit,
  onDelete,
  className,
  mutationState,
  isMutating,
  mode = "vendor",
}: ShippingTableProps) {
  const columns = useMemo(() => {
    return createShippingColumns({
      actions: {
        onEdit,
        onDelete,
      },
      isMutating,
      mutationState,
      mode,
    });
  }, [onEdit, onDelete, isMutating, mutationState, mode]);

  const filterableColumns = useMemo(
    () =>
      getSharedShippingFilters({
        statusOptions: SHIPPING_STATUS_OPTIONS,
      }),
    []
  );

  if (server) {
    return (
      <DataTable
        columns={columns}
        server={server}
        context="shop"
        initialPageSize={10}
        filterableColumns={filterableColumns}
        globalFilterPlaceholder="Search shipping methods..."
        className={className}
      />
    );
  }

  return (
    <DataTable
      columns={columns}
      data={shippingMethods || []}
      filterableColumns={filterableColumns}
      globalFilterPlaceholder="Search shipping methods..."
      className={className}
    />
  );
}
