import { useMemo } from "react";
import DataTable from "@/components/base/data-table/data-table";
import type { DataTableServer } from "@/components/base/data-table/types";
import type { AttributeItem } from "@/types/attributes";
import {
  type AttributeMutationState,
  type AttributeTableActions,
  createAttributeColumns,
  getSharedAttributeFilters,
} from "./attribute-table-columns";

interface AttributeTableProps extends AttributeTableActions {
  attributes?: AttributeItem[];
  server: DataTableServer<AttributeItem>;
  mutationState?: AttributeMutationState;
  isAttributeMutating?: (id: string) => boolean;
  className?: string;
  mode?: "admin" | "vendor";
}

export default function AttributeTable({
  attributes,
  server,
  onEdit,
  onDelete,
  onToggleActive,
  mutationState,
  isAttributeMutating,
  className,
  mode = "vendor",
}: AttributeTableProps) {
  const columns = useMemo(() => {
    const actions: AttributeTableActions = {
      onEdit,
      onDelete,
      onToggleActive,
    };
    return createAttributeColumns({
      mode,
      actions,
      isAttributeMutating,
      mutationState,
    });
  }, [
    onEdit,
    onDelete,
    onToggleActive,
    isAttributeMutating,
    mutationState,
    mode,
  ]);

  const filterableColumns = useMemo(() => getSharedAttributeFilters(), []);

  if (server) {
    const context = mode === "admin" ? "admin" : "shop";
    return (
      <DataTable
        columns={columns}
        server={server}
        context={context}
        initialPageSize={10}
        filterableColumns={filterableColumns}
        globalFilterPlaceholder="Search attributes..."
        className={className}
      />
    );
  }

  return (
    <DataTable
      columns={columns}
      data={attributes || []}
      className={className}
    />
  );
}
