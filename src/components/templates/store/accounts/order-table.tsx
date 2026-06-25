import type { ColumnFiltersState, SortingState } from "@tanstack/react-table";
import { PackageOpen } from "lucide-react";
import React from "react";
import { DataTableCore } from "@/components/base/data-table/data-table-core";
import { DataTablePagination } from "@/components/base/data-table/data-table-pagination";
import { DataTableToolbar } from "@/components/base/data-table/data-table-toolbar";
import { columns, type Order } from "@/components/base/store/order/columns";
import { useCustomerOrders } from "@/hooks/store/use-orders";
import type { OrderStatus } from "@/types/orders";

export default function OrdersTable() {
  const { data, isLoading, error } = useCustomerOrders();

  const orders: Order[] = React.useMemo(
    () =>
      (data?.orders ?? []).map((order) => ({
        id: order.id,
        orderNumber: order.orderNumber,
        createdAt: order.createdAt,
        status: order.status as OrderStatus,
        itemCount: order.items.length,
        total: order.totalAmount,
      })),
    [data]
  );

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [_rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState("");

  // We need to manually manage pagination state for the controlled component
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  });

  if (isLoading) {
    return (
      <div className="space-y-3 py-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-12 animate-pulse rounded bg-muted" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <PackageOpen className="mb-4 size-12 text-muted-foreground" />
        <h3 className="mb-2 font-semibold text-lg">Unable to load orders</h3>
        <p className="text-muted-foreground text-sm">
          There was an error loading your orders. Please try again later.
        </p>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <PackageOpen className="mb-4 size-12 text-muted-foreground" />
        <h3 className="mb-2 font-semibold text-lg">No orders yet</h3>
        <p className="text-muted-foreground text-sm">
          You haven't placed any orders yet.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <DataTableToolbar
        globalFilter={globalFilter}
        onGlobalFilterChange={setGlobalFilter}
        columnFilters={columnFilters}
        onColumnFilterChange={(columnId, value) => {
          setColumnFilters((prev) => {
            const filtered = prev.filter((f) => f.id !== columnId);
            if (value !== "" && value !== undefined && value !== null) {
              filtered.push({ id: columnId, value });
            }
            return filtered;
          });
        }}
        allColumns={columns.map((col) => ({
          id: (col as any).accessorKey || (col as any).id,
          label: ((col as any).header as string) || (col as any).id,
          visible: true,
          toggle: () => {}, // Simplified for now as DataTableCore handles visibility internally or we need to lift state
        }))}
      />
      <DataTableCore
        columns={columns}
        data={orders}
        pageIndex={pagination.pageIndex}
        pageSize={pagination.pageSize}
        pageCount={Math.ceil(orders.length / pagination.pageSize)}
        onPaginationChange={setPagination}
        sorting={sorting}
        onSortingChange={setSorting}
        columnFilters={columnFilters}
        onColumnFiltersChange={setColumnFilters}
        globalFilter={globalFilter}
        onGlobalFilterChange={setGlobalFilter}
        enableRowSelection={true}
        onRowSelection={setRowSelection}
      />
      <DataTablePagination
        pageIndex={pagination.pageIndex}
        pageSize={pagination.pageSize}
        pageCount={Math.ceil(orders.length / pagination.pageSize)}
        total={orders.length}
        onPageChange={setPagination}
      />
    </div>
  );
}
