import { useMemo } from "react";

import DataTable from "@/components/base/data-table/data-table";
import type { DataTableServer } from "@/components/base/data-table/types";
import type { VendorTransactionResponse } from "@/types/transaction";
import {
  createTransactionColumns,
  getSharedTransactionFilters,
  type TransactionMutationState,
  type TransactionTableActions,
} from "./transaction-table-columns";

interface VendorTransactionTableProps extends TransactionTableActions {
  server: DataTableServer<VendorTransactionResponse>;
  className?: string;
  mutationState?: TransactionMutationState;
  isTransactionMutating?: (id: string) => boolean;
}

export function VendorTransactionTable({
  server,
  className,
  onViewTransaction,
  onRefundTransaction,
  mutationState,
  isTransactionMutating,
}: VendorTransactionTableProps) {
  const columns = useMemo(() => {
    const actions: TransactionTableActions = {
      onViewTransaction,
      onRefundTransaction,
    };
    return createTransactionColumns({
      actions,
      isTransactionMutating,
      mutationState,
    });
  }, [
    onViewTransaction,
    onRefundTransaction,
    isTransactionMutating,
    mutationState,
  ]);

  const filterableColumns = useMemo(() => getSharedTransactionFilters(), []);

  return (
    <DataTable
      columns={columns}
      server={server}
      context="shop"
      initialPageSize={10}
      filterableColumns={filterableColumns}
      globalFilterPlaceholder="Search transactions..."
      className={className}
    />
  );
}

export default VendorTransactionTable;
