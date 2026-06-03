import type { DataTableServer } from "#/components/base/data-table/types";
import CouponHeader from "#/components/containers/shared/coupons/coupon-header";
import CouponTable from "#/components/containers/shared/coupons/coupon-table";
import type { CouponMutationState } from "#/components/containers/shared/coupons/coupon-table-columns";
import type { CouponItem } from "#/types/coupons";

type Props = {
  server: DataTableServer<CouponItem>;
  onAddCoupon: () => void;
  onEditCoupon?: (coupon: CouponItem) => void;
  onDeleteCoupon?: (coupon: CouponItem) => void;
  mutationState?: CouponMutationState;
  isCouponMutating?: (id: string) => boolean;
};

export default function ShopCouponsTemplate({
  server,
  onAddCoupon,
  onEditCoupon,
  onDeleteCoupon,
  mutationState,
  isCouponMutating,
}: Props) {
  return (
    <div className="space-y-6">
      <CouponHeader onAdd={onAddCoupon} />
      <CouponTable
        server={server}
        onEdit={onEditCoupon}
        onDelete={onDeleteCoupon}
        mutationState={mutationState}
        isCouponMutating={isCouponMutating}
      />
    </div>
  );
}
