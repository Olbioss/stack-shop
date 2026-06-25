import { f as inArray, s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { r as shops } from "./shop-schema-C6uNILQs.mjs";
import { c as db, o as coupons } from "./db-DORSFQFR.mjs";
import { r as createServerFn } from "./ssr.mjs";
import { t as adminMiddleware } from "./admin-CYCFP3zk.mjs";
import { t as createServerRpc } from "./createServerRpc-D97cGqBD.mjs";
import { n as createSuccessResponse, r as emptyPaginatedResponse } from "./api-response-CYQsbkXz.mjs";
import { i as deleteCouponSchema, l as toggleCouponActiveSchema, s as getCouponByIdSchema, t as adminCouponsQuerySchema } from "./coupon-query-CudBYs7G.mjs";
import { n as fetchCouponWithRelations, t as executeCouponQuery } from "./coupon-query-helpers-BZl8BNkv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/coupon-Ctj4T4dn.js
/**
* Admin Coupon Server Functions
*
* Server functions for coupon management in the admin dashboard.
* Admins can view and manage ALL coupons across all vendors and shops.
*/
var getAdminCoupons_createServerFn_handler = createServerRpc({
	id: "569f5726728bc21c844611c73e4b004d0743a5bfff6f50ceae4644608a20939e",
	name: "getAdminCoupons",
	filename: "src/lib/functions/admin/coupon.ts"
}, (opts) => getAdminCoupons.__executeServer(opts));
var getAdminCoupons = createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(adminCouponsQuerySchema).handler(getAdminCoupons_createServerFn_handler, async ({ data }) => {
	const { shopId, vendorId, limit, offset, search, type, status, isActive, applicableTo, sortBy, sortDirection } = data;
	const baseConditions = [];
	if (shopId) baseConditions.push(eq(coupons.shopId, shopId));
	if (vendorId) {
		const vendorShops = await db.select({ id: shops.id }).from(shops).where(eq(shops.vendorId, vendorId));
		if (vendorShops.length > 0) baseConditions.push(inArray(coupons.shopId, vendorShops.map((s) => s.id)));
		else return emptyPaginatedResponse(limit, offset);
	}
	return executeCouponQuery({
		baseConditions,
		search,
		type,
		status,
		isActive,
		applicableTo,
		limit,
		offset,
		sortBy,
		sortDirection,
		includeShopInfo: true,
		includeLinkedItems: false
	});
});
var getAdminCouponById_createServerFn_handler = createServerRpc({
	id: "74d66f188050ba1abf820ca788531adb49f36cfea27a8eaac9f26f075b041e43",
	name: "getAdminCouponById",
	filename: "src/lib/functions/admin/coupon.ts"
}, (opts) => getAdminCouponById.__executeServer(opts));
var getAdminCouponById = createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(getCouponByIdSchema).handler(getAdminCouponById_createServerFn_handler, async ({ data }) => {
	const { id } = data;
	const [coupon] = await db.select().from(coupons).where(eq(coupons.id, id));
	if (!coupon) throw new Error("Coupon not found.");
	return { coupon: await fetchCouponWithRelations(coupon, {
		includeShopInfo: true,
		includeLinkedItems: true
	}) };
});
var toggleAdminCouponActive_createServerFn_handler = createServerRpc({
	id: "dbdc9b28a99030c7c739e5c8115679e15f4cb423cb249c00a84bbc5c03b64f99",
	name: "toggleAdminCouponActive",
	filename: "src/lib/functions/admin/coupon.ts"
}, (opts) => toggleAdminCouponActive.__executeServer(opts));
var toggleAdminCouponActive = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(toggleCouponActiveSchema).handler(toggleAdminCouponActive_createServerFn_handler, async ({ data }) => {
	const { id, isActive } = data;
	const [existingCoupon] = await db.select().from(coupons).where(eq(coupons.id, id));
	if (!existingCoupon) throw new Error("Coupon not found.");
	await db.update(coupons).set({ isActive }).where(eq(coupons.id, id));
	return createSuccessResponse(isActive ? "Coupon activated" : "Coupon deactivated");
});
var deleteAdminCoupon_createServerFn_handler = createServerRpc({
	id: "5910becd58485153b5fa191aa2a237dbc4eeeac8f0781da04dbd6aea2f0b45c8",
	name: "deleteAdminCoupon",
	filename: "src/lib/functions/admin/coupon.ts"
}, (opts) => deleteAdminCoupon.__executeServer(opts));
var deleteAdminCoupon = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(deleteCouponSchema).handler(deleteAdminCoupon_createServerFn_handler, async ({ data }) => {
	const { id } = data;
	const [existingCoupon] = await db.select().from(coupons).where(eq(coupons.id, id));
	if (!existingCoupon) throw new Error("Coupon not found.");
	if (existingCoupon.usageCount > 0) {}
	await db.delete(coupons).where(eq(coupons.id, id));
	return createSuccessResponse("Coupon deleted successfully");
});
//#endregion
export { deleteAdminCoupon_createServerFn_handler, getAdminCouponById_createServerFn_handler, getAdminCoupons_createServerFn_handler, toggleAdminCouponActive_createServerFn_handler };
