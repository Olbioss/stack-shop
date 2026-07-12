import { useMemo } from "react";

import DataTable from "@/components/base/data-table/data-table";
import type { DataTableServer } from "@/components/base/data-table/types";
import { useListSearch } from "@/hooks/common/use-list-search";
import type { VendorOrderResponse } from "@/types/orders";
import {
  createOrderColumns,
  getSharedOrderFilters,
} from "./order-table-columns";

interface VendorOrderTableProps {
  server: DataTableServer<VendorOrderResponse>;
  shopSlug: string;
  className?: string;
  isOrderMutating?: (id: string) => boolean;
}

export function VendorOrderTable({
  server,
  shopSlug,
  className,
  isOrderMutating,
}: VendorOrderTableProps) {
  const columns = useMemo(() => {
    return createOrderColumns({
      shopSlug,
      isOrderMutating,
    });
  }, [shopSlug, isOrderMutating]);

  const filterableColumns = useMemo(() => getSharedOrderFilters(), []);
  const initialSearch = useListSearch();

  return (
    <DataTable
      columns={columns}
      server={server}
      context="shop"
      initialPageSize={10}
      initialGlobalFilter={initialSearch}
      filterableColumns={filterableColumns}
      globalFilterPlaceholder="Search orders..."
      className={className}
    />
  );
}

export default VendorOrderTable;
