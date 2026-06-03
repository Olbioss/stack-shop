export type {
  CouponFormValues,
  CouponItem as Coupon,
  CouponPermissions,
} from "./coupons";

export interface AppliedCoupon {
  shopId: string;
  code: string;
  discountAmount: number;
  shopName?: string;
  type?: "percentage" | "fixed" | "free_shipping";
  discountValue?: number;
}
