import { At as number, Gt as string, Ht as object } from "../_libs/@better-auth/core+[...].mjs";
import { r as createServerFn } from "./ssr.mjs";
import { t as createSsrRpc } from "./createSsrRpc-CXFXGZZ3.mjs";
import { c as storeCouponsQuerySchema, d as validateCouponSchema, o as getCouponByCodeSchema } from "./coupon-query-CudBYs7G.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/coupon-ly67B2fF.js
createServerFn({ method: "GET" }).inputValidator(storeCouponsQuerySchema).handler(createSsrRpc("89728cf8fd73c70694a0955356ca2e588c58a81e8c354e91241f0cb3d3715b1b"));
createServerFn({ method: "GET" }).inputValidator(getCouponByCodeSchema).handler(createSsrRpc("3ed8497974fec34d619b6de41c04403b27a4b60bc6c7ee2f02da70e0b2a4cd92"));
/**
* Validate a coupon code for checkout
* Checks all conditions: active, dates, usage limits, minimum cart, etc.
*/
var validateStoreCoupon = createServerFn({ method: "POST" }).inputValidator(validateCouponSchema).handler(createSsrRpc("eca2c0e048a853f416b67db828522483e2f4f61e10cb9e3545ae2309a48c2b96"));
createServerFn({ method: "GET" }).inputValidator(object({
	shopSlug: string().optional(),
	shopId: string().optional(),
	limit: number().min(1).max(10).optional().default(5)
})).handler(createSsrRpc("0c89d0f28c386616f83f1f91d4c8c1a75bb0b896a4f2c23135b87f35d6090ecf"));
//#endregion
export { validateStoreCoupon as t };
