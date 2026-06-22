import type { DataTableServer } from "#/components/base/data-table/types";
import CouponHeader from "#/components/containers/shared/coupons/coupon-header";
import { AdminCouponTable } from "#/components/containers/shared/coupons/coupon-table";
import type { AdminCouponMutationState } from "#/hooks/admin/use-admin-coupons";
import { ADMIN_COUPON_PERMISSIONS } from "#/lib/config/coupon-permissions";
import type { CouponItem } from "#/types/coupons";

interface AdminCouponsTemplateProps {
  server: DataTableServer<CouponItem>;
  onDeleteCoupon?: (coupon: CouponItem) => void;
  onToggleStatus?: (coupon: CouponItem) => void;
  mutationState?: AdminCouponMutationState;
  isCouponMutating?: (id: string) => boolean;
}

export default function AdminCouponsTemplate({
  server,
  onDeleteCoupon,
  onToggleStatus,
  mutationState,
  isCouponMutating,
}: AdminCouponsTemplateProps) {
  return (
    <>
      <CouponHeader role="admin" showAddButton={false} />
      <AdminCouponTable
        server={server}
        permissions={ADMIN_COUPON_PERMISSIONS}
        onDelete={onDeleteCoupon}
        onToggleStatus={onToggleStatus}
        mutationState={mutationState}
        isCouponMutating={isCouponMutating}
      />
    </>
  );
}
