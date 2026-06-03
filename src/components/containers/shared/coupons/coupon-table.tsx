import { useMemo } from "react";
import type { DataTableServer } from "#/components/base/data-table/types";
import DataTable from "@/components/base/data-table/data-table";
import type { CouponItem, CouponPermissions } from "@/types/coupons";
import {
  type CouponMutationState,
  type CouponTableActions,
  createCouponColumns,
  getSharedCouponFilters,
} from "./coupon-table-columns";

// ============================================================================
// Constants
// ============================================================================

const STATUS_OPTIONS = [
  { label: "Active", value: "true" },
  { label: "Inactive", value: "false" },
];

const TYPE_OPTIONS = [
  { label: "Percentage", value: "percentage" },
  { label: "Fixed Amount", value: "fixed" },
  { label: "Free Shipping", value: "free_shipping" },
];

// ============================================================================
// Admin Coupon Table
// ============================================================================

interface AdminCouponTableProps extends CouponTableActions {
  coupons: CouponItem[];
  className?: string;
  mutationState?: CouponMutationState;
  isCouponMutating?: (id: string) => boolean;
  permissions?: CouponPermissions;
}

export function AdminCouponTable({
  coupons,
  className,
  onEdit,
  onDelete,
  onToggleStatus,
  mutationState,
  isCouponMutating,
  permissions,
}: AdminCouponTableProps) {
  const columns = useMemo(() => {
    const actions: CouponTableActions = {
      onEdit,
      onDelete,
      onToggleStatus,
    };
    return createCouponColumns({
      mode: "admin",
      actions,
      isCouponMutating,
      mutationState,
      permissions,
    });
  }, [
    onEdit,
    onDelete,
    onToggleStatus,
    isCouponMutating,
    mutationState,
    permissions,
  ]);

  const filterableColumns = useMemo(
    () =>
      getSharedCouponFilters({
        statusOptions: STATUS_OPTIONS,
        typeOptions: TYPE_OPTIONS,
      }),
    []
  );

  return (
    <DataTable
      columns={columns}
      data={coupons}
      context="shop"
      initialPageSize={10}
      filterableColumns={filterableColumns}
      globalFilterPlaceholder="Search coupons..."
      className={className}
    />
  );
}

// ============================================================================
// Vendor Coupon Table
// ============================================================================

interface VendorCouponTableProps extends CouponTableActions {
  server: DataTableServer<CouponItem>;
  className?: string;
  mutationState?: CouponMutationState;
  isCouponMutating?: (id: string) => boolean;
  permissions?: CouponPermissions;
}

export default function VendorCouponTable({
  server,
  className,
  onEdit,
  onDelete,
  onToggleStatus,
  mutationState,
  isCouponMutating,
  permissions,
}: VendorCouponTableProps) {
  const columns = useMemo(() => {
    const actions: CouponTableActions = {
      onEdit,
      onDelete,
      onToggleStatus,
    };
    return createCouponColumns({
      mode: "vendor",
      actions,
      isCouponMutating,
      mutationState,
      permissions,
    });
  }, [
    onEdit,
    onDelete,
    onToggleStatus,
    isCouponMutating,
    mutationState,
    permissions,
  ]);

  const filterableColumns = useMemo(
    () =>
      getSharedCouponFilters({
        statusOptions: STATUS_OPTIONS,
        typeOptions: TYPE_OPTIONS,
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
      globalFilterPlaceholder="Search coupons..."
      className={className}
    />
  );
}
