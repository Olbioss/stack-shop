import { useMemo } from "react";
import DataTable from "@/components/base/data-table/data-table";
import type { DataTableServer } from "@/components/base/data-table/types";
import { useListSearch } from "@/hooks/common/use-list-search";
import type { VendorOrderResponse } from "@/types/orders";
import {
  createAdminOrderColumns,
  getSharedOrderFilters,
} from "../../shared/orders/order-table-columns";

interface AdminOrdersTableProps {
  server: DataTableServer<VendorOrderResponse>;
  className?: string;
  isOrderMutating?: (id: string) => boolean;
}

export function AdminOrdersTable({
  server,
  className,
  isOrderMutating,
}: AdminOrdersTableProps) {
  const columns = useMemo(
    () => createAdminOrderColumns({ isOrderMutating }),
    [isOrderMutating]
  );

  const filterableColumns = useMemo(() => getSharedOrderFilters(), []);
  const initialSearch = useListSearch();

  return (
    <DataTable
      columns={columns}
      server={server}
      context="admin"
      initialPageSize={10}
      initialGlobalFilter={initialSearch}
      filterableColumns={filterableColumns}
      globalFilterPlaceholder="Search orders..."
      className={className}
    />
  );
}
