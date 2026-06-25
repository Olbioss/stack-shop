import { _ as lte, a as and, d as ilike, n as count, s as eq, u as gte } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { a as couponUsage, c as db, o as coupons } from "./db-DORSFQFR.mjs";
import { r as createServerFn } from "./ssr.mjs";
import { Jt as number, ln as string, on as object } from "../_libs/@better-auth/core+[...].mjs";
import { t as createServerRpc } from "./createServerRpc-D97cGqBD.mjs";
import { r as emptyPaginatedResponse, t as createPaginatedResponse } from "./api-response-CYQsbkXz.mjs";
import { c as storeCouponsQuerySchema, d as validateCouponSchema, o as getCouponByCodeSchema } from "./coupon-query-CudBYs7G.mjs";
import { n as fetchCouponWithRelations, r as getActiveCouponsForShop, t as executeCouponQuery } from "./coupon-query-helpers-BZl8BNkv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/coupon-DCQUbQfe.js
/**
* Store Front Coupon Server Functions
*
* Public server functions for the storefront/customer-facing pages.
* Handles coupon validation and retrieval for checkout.
* Only returns active and valid coupons.
*/
var getStoreCoupons_createServerFn_handler = createServerRpc({
	id: "89728cf8fd73c70694a0955356ca2e588c58a81e8c354e91241f0cb3d3715b1b",
	name: "getStoreCoupons",
	filename: "src/lib/functions/store/coupon.ts"
}, (opts) => getStoreCoupons.__executeServer(opts));
var getStoreCoupons = createServerFn({ method: "GET" }).inputValidator(storeCouponsQuerySchema).handler(getStoreCoupons_createServerFn_handler, async ({ data }) => {
	const { limit, offset, search, shopId, shopSlug } = data;
	let resolvedShopId = shopId;
	if (shopSlug && !shopId) {
		const { shops } = await import("./shop-schema-C3PbWNTi.mjs");
		const [shop] = await db.select({ id: shops.id }).from(shops).where(eq(shops.slug, shopSlug));
		if (shop) resolvedShopId = shop.id;
		else return emptyPaginatedResponse(limit, offset);
	}
	if (!resolvedShopId) return emptyPaginatedResponse(limit, offset);
	const now = /* @__PURE__ */ new Date();
	const result = await executeCouponQuery({
		baseConditions: [
			eq(coupons.shopId, resolvedShopId),
			eq(coupons.isActive, true),
			lte(coupons.activeFrom, now),
			gte(coupons.activeTo, now)
		],
		search,
		limit,
		offset,
		sortBy: "createdAt",
		sortDirection: "desc",
		includeShopInfo: true,
		includeLinkedItems: false
	});
	return createPaginatedResponse(result.data, result.total, result.limit, result.offset);
});
var getStoreCouponByCode_createServerFn_handler = createServerRpc({
	id: "3ed8497974fec34d619b6de41c04403b27a4b60bc6c7ee2f02da70e0b2a4cd92",
	name: "getStoreCouponByCode",
	filename: "src/lib/functions/store/coupon.ts"
}, (opts) => getStoreCouponByCode.__executeServer(opts));
var getStoreCouponByCode = createServerFn({ method: "GET" }).inputValidator(getCouponByCodeSchema).handler(getStoreCouponByCode_createServerFn_handler, async ({ data }) => {
	const { code, shopId, shopSlug } = data;
	let resolvedShopId = shopId;
	if (shopSlug && !shopId) {
		const { shops } = await import("./shop-schema-C3PbWNTi.mjs");
		const [shop] = await db.select({ id: shops.id }).from(shops).where(eq(shops.slug, shopSlug));
		if (shop) resolvedShopId = shop.id;
		else throw new Error("Shop not found.");
	}
	if (!resolvedShopId) throw new Error("Shop ID is required.");
	const [coupon] = await db.select().from(coupons).where(and(eq(coupons.shopId, resolvedShopId), ilike(coupons.code, code)));
	if (!coupon) throw new Error("Coupon not found.");
	return { coupon: await fetchCouponWithRelations(coupon, {
		includeShopInfo: true,
		includeLinkedItems: true
	}) };
});
var validateStoreCoupon_createServerFn_handler = createServerRpc({
	id: "eca2c0e048a853f416b67db828522483e2f4f61e10cb9e3545ae2309a48c2b96",
	name: "validateStoreCoupon",
	filename: "src/lib/functions/store/coupon.ts"
}, (opts) => validateStoreCoupon.__executeServer(opts));
var validateStoreCoupon = createServerFn({ method: "POST" }).inputValidator(validateCouponSchema).handler(validateStoreCoupon_createServerFn_handler, async ({ data }) => {
	const { code, shopId, cartAmount, userId, cartItems } = data;
	const [coupon] = await db.select().from(coupons).where(and(eq(coupons.shopId, shopId), ilike(coupons.code, code)));
	if (!coupon) return {
		valid: false,
		message: "Invalid coupon code.",
		invalidReason: "not_found"
	};
	const normalizedCoupon = await fetchCouponWithRelations(coupon, {
		includeShopInfo: true,
		includeLinkedItems: true
	});
	const now = /* @__PURE__ */ new Date();
	if (!coupon.isActive) return {
		valid: false,
		coupon: normalizedCoupon,
		message: "This coupon is currently inactive.",
		invalidReason: "inactive"
	};
	if (now < coupon.activeFrom) return {
		valid: false,
		coupon: normalizedCoupon,
		message: "This coupon is not yet active.",
		invalidReason: "not_started"
	};
	if (now > coupon.activeTo) return {
		valid: false,
		coupon: normalizedCoupon,
		message: "This coupon has expired.",
		invalidReason: "expired"
	};
	if (coupon.usageLimit !== null && coupon.usageCount >= coupon.usageLimit) return {
		valid: false,
		coupon: normalizedCoupon,
		message: "This coupon has reached its usage limit.",
		invalidReason: "usage_limit_reached"
	};
	if (userId && coupon.usageLimitPerUser) {
		const [userUsage] = await db.select({ count: count() }).from(couponUsage).where(and(eq(couponUsage.couponId, coupon.id), eq(couponUsage.userId, userId)));
		if ((userUsage?.count ?? 0) >= coupon.usageLimitPerUser) return {
			valid: false,
			coupon: normalizedCoupon,
			message: "You have already used this coupon the maximum number of times.",
			invalidReason: "user_limit_reached"
		};
	}
	const minimumCartAmount = parseFloat(coupon.minimumCartAmount);
	const cartAmountNumber = parseFloat(cartAmount);
	if (cartAmountNumber < minimumCartAmount) return {
		valid: false,
		coupon: normalizedCoupon,
		message: `Minimum cart amount of $${minimumCartAmount.toFixed(2)} required.`,
		invalidReason: "minimum_not_met"
	};
	let discountAmount = 0;
	let applicableAmount = cartAmountNumber;
	if (coupon.applicableTo === "specific_products" && cartItems) {
		const productIds = normalizedCoupon.productIds ?? [];
		const applicableItems = cartItems.filter((item) => productIds.includes(item.productId));
		if (applicableItems.length === 0) return {
			valid: false,
			coupon: normalizedCoupon,
			message: "This coupon doesn't apply to any items in your cart.",
			invalidReason: "no_applicable_products"
		};
		applicableAmount = applicableItems.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0);
	} else if (coupon.applicableTo === "specific_categories" && cartItems) {
		const categoryIds = normalizedCoupon.categoryIds ?? [];
		const applicableItems = cartItems.filter((item) => item.categoryId && categoryIds.includes(item.categoryId));
		if (applicableItems.length === 0) return {
			valid: false,
			coupon: normalizedCoupon,
			message: "This coupon doesn't apply to any items in your cart.",
			invalidReason: "no_applicable_products"
		};
		applicableAmount = applicableItems.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0);
	}
	const discountValue = parseFloat(coupon.discountAmount);
	if (coupon.type === "percentage") discountAmount = applicableAmount * discountValue / 100;
	else if (coupon.type === "fixed") discountAmount = Math.min(discountValue, applicableAmount);
	else if (coupon.type === "free_shipping") discountAmount = 0;
	const maximumDiscount = coupon.maximumDiscountAmount ? parseFloat(coupon.maximumDiscountAmount) : null;
	if (maximumDiscount !== null && discountAmount > maximumDiscount) discountAmount = maximumDiscount;
	return {
		valid: true,
		coupon: normalizedCoupon,
		discountAmount,
		applicableAmount,
		message: "Coupon applied successfully!"
	};
});
var getFeaturedCoupons_createServerFn_handler = createServerRpc({
	id: "0c89d0f28c386616f83f1f91d4c8c1a75bb0b896a4f2c23135b87f35d6090ecf",
	name: "getFeaturedCoupons",
	filename: "src/lib/functions/store/coupon.ts"
}, (opts) => getFeaturedCoupons.__executeServer(opts));
var getFeaturedCoupons = createServerFn({ method: "GET" }).inputValidator(object({
	shopSlug: string().optional(),
	shopId: string().optional(),
	limit: number().min(1).max(10).optional().default(5)
})).handler(getFeaturedCoupons_createServerFn_handler, async ({ data }) => {
	const { shopSlug, shopId, limit } = data;
	let resolvedShopId = shopId;
	if (shopSlug && !shopId) {
		const { shops } = await import("./shop-schema-C3PbWNTi.mjs");
		const [shop] = await db.select({ id: shops.id }).from(shops).where(eq(shops.slug, shopSlug));
		if (shop) resolvedShopId = shop.id;
	}
	if (!resolvedShopId) return { coupons: [] };
	return { coupons: (await getActiveCouponsForShop(resolvedShopId, {
		limit,
		includeShopInfo: true
	})).sort((a, b) => parseFloat(b.discountAmount) - parseFloat(a.discountAmount)) };
});
//#endregion
export { getFeaturedCoupons_createServerFn_handler, getStoreCouponByCode_createServerFn_handler, getStoreCoupons_createServerFn_handler, validateStoreCoupon_createServerFn_handler };
