import { _ as lte, a as and, d as ilike, n as count, s as eq, u as gte } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { a as couponUsage, c as db, i as couponProducts, o as coupons, r as couponCategories } from "./db-DORSFQFR.mjs";
import { r as createServerFn } from "./ssr.mjs";
import { ln as string } from "../_libs/@better-auth/core+[...].mjs";
import { t as authMiddleware } from "./auth-BM1BErpv.mjs";
import { t as createServerRpc } from "./createServerRpc-D97cGqBD.mjs";
import { n as createSuccessResponse } from "./api-response-CYQsbkXz.mjs";
import { a as getAvailableCouponsForUserSchema, d as validateCouponSchema, f as vendorCouponsQuerySchema, i as deleteCouponSchema, o as getCouponByCodeSchema, r as createCouponSchema, s as getCouponByIdSchema, u as updateCouponSchema } from "./coupon-query-CudBYs7G.mjs";
import { r as requireShopAccess } from "./vendors-BeGb8yN7.mjs";
import { n as fetchCouponWithRelations, t as executeCouponQuery } from "./coupon-query-helpers-BZl8BNkv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/coupons-BmpL6DAK.js
/**
* Coupon Server Functions
*
* Server functions for coupon management in the vendor dashboard.
* Uses TanStack Start's createServerFn with Zod validation.
*/
var getCoupons_createServerFn_handler = createServerRpc({
	id: "3faca418e59f080a191f35a86f6ff5aedd8e22e6d329eeeecbc8ecbb4bdb0f26",
	name: "getCoupons",
	filename: "src/lib/functions/vendor/coupons.ts"
}, (opts) => getCoupons.__executeServer(opts));
var getCoupons = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(vendorCouponsQuerySchema).handler(getCoupons_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session.user.id;
	const { shopId, limit, offset, search, type, status, isActive, applicableTo, sortBy, sortDirection } = data;
	await requireShopAccess(userId, shopId);
	return executeCouponQuery({
		baseConditions: [eq(coupons.shopId, shopId)],
		search,
		type,
		status,
		isActive,
		applicableTo,
		limit,
		offset,
		sortBy,
		sortDirection,
		includeShopInfo: false,
		includeVendorInfo: false
	});
});
var getCouponById_createServerFn_handler = createServerRpc({
	id: "8b18697112588ce4b34fc2e4f62fa767806b1d9e7cda9de108cfbf02a6486630",
	name: "getCouponById",
	filename: "src/lib/functions/vendor/coupons.ts"
}, (opts) => getCouponById.__executeServer(opts));
var getCouponById = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(getCouponByIdSchema.extend({ shopId: string().min(1, "Shop ID is required") })).handler(getCouponById_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session.user.id;
	const { id, shopId } = data;
	await requireShopAccess(userId, shopId);
	const coupon = await db.query.coupons.findFirst({ where: and(eq(coupons.id, id), eq(coupons.shopId, shopId)) });
	if (!coupon) throw new Error("Coupon not found.");
	return { coupon: await fetchCouponWithRelations(coupon, {
		includeShopInfo: false,
		includeVendorInfo: false
	}) };
});
var getCouponByCode_createServerFn_handler = createServerRpc({
	id: "57993649a0a3f17945838c988690c671778fe9cdc0726fffdfe0db38389cbb95",
	name: "getCouponByCode",
	filename: "src/lib/functions/vendor/coupons.ts"
}, (opts) => getCouponByCode.__executeServer(opts));
var getCouponByCode = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(getCouponByCodeSchema).handler(getCouponByCode_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session.user.id;
	const { code, shopId } = data;
	await requireShopAccess(userId, shopId);
	const coupon = await db.query.coupons.findFirst({ where: and(eq(coupons.shopId, shopId), ilike(coupons.code, code)) });
	if (!coupon) throw new Error("Coupon not found.");
	return { coupon: await fetchCouponWithRelations(coupon, {
		includeShopInfo: false,
		includeVendorInfo: false
	}) };
});
var createCoupon_createServerFn_handler = createServerRpc({
	id: "44de5d3cca36cf84cd4c3f3fd6c7eadf15ca7c6a2b59b5008cfa5679ed0fffd9",
	name: "createCoupon",
	filename: "src/lib/functions/vendor/coupons.ts"
}, (opts) => createCoupon.__executeServer(opts));
var createCoupon = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(createCouponSchema).handler(createCoupon_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session.user.id;
	const { shopId, productIds, categoryIds, ...couponData } = data;
	await requireShopAccess(userId, shopId);
	if (await db.query.coupons.findFirst({ where: and(eq(coupons.shopId, shopId), ilike(coupons.code, couponData.code)) })) throw new Error("A coupon with this code already exists in this shop. Please choose a different code.");
	const activeFromDate = new Date(couponData.activeFrom);
	const activeToDate = new Date(couponData.activeTo);
	const [newCoupon] = await db.insert(coupons).values({
		shopId,
		code: couponData.code,
		description: couponData.description || null,
		image: couponData.image || null,
		type: couponData.type,
		discountAmount: String(couponData.discountAmount),
		minimumCartAmount: String(couponData.minimumCartAmount),
		maximumDiscountAmount: couponData.maximumDiscountAmount ? String(couponData.maximumDiscountAmount) : null,
		activeFrom: activeFromDate,
		activeTo: activeToDate,
		usageLimit: couponData.usageLimit || null,
		usageLimitPerUser: couponData.usageLimitPerUser ?? 1,
		usageCount: 0,
		isActive: couponData.isActive ?? true,
		applicableTo: couponData.applicableTo ?? "all",
		status: "active"
	}).returning();
	const insertPromises = [];
	if (couponData.applicableTo === "specific_products" && productIds && productIds.length > 0) {
		const productRecords = productIds.map((productId) => ({
			couponId: newCoupon.id,
			productId
		}));
		insertPromises.push(db.insert(couponProducts).values(productRecords));
	}
	if (couponData.applicableTo === "specific_categories" && categoryIds && categoryIds.length > 0) {
		const categoryRecords = categoryIds.map((categoryId) => ({
			couponId: newCoupon.id,
			categoryId
		}));
		insertPromises.push(db.insert(couponCategories).values(categoryRecords));
	}
	await Promise.all(insertPromises);
	if (!newCoupon) throw new Error("Failed to create coupon.");
	const normalizedCoupon = await fetchCouponWithRelations(newCoupon, {
		includeShopInfo: false,
		includeVendorInfo: false
	});
	return {
		...createSuccessResponse("Coupon created successfully"),
		coupon: normalizedCoupon
	};
});
var updateCoupon_createServerFn_handler = createServerRpc({
	id: "9ef988ebe83cc84eb38e2280e042e6eec40082ce3e153c10f9553ad02b4e3a35",
	name: "updateCoupon",
	filename: "src/lib/functions/vendor/coupons.ts"
}, (opts) => updateCoupon.__executeServer(opts));
var updateCoupon = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(updateCouponSchema).handler(updateCoupon_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session.user.id;
	const { id, shopId, productIds, categoryIds, ...updateData } = data;
	await requireShopAccess(userId, shopId);
	const existingCoupon = await db.query.coupons.findFirst({ where: and(eq(coupons.id, id), eq(coupons.shopId, shopId)) });
	if (!existingCoupon) throw new Error("Coupon not found.");
	if (updateData.code && updateData.code !== existingCoupon.code) {
		if (await db.query.coupons.findFirst({ where: and(eq(coupons.shopId, shopId), ilike(coupons.code, updateData.code)) })) throw new Error("A coupon with this code already exists in this shop.");
	}
	const updateValues = {};
	if (updateData.code !== void 0) updateValues.code = updateData.code;
	if (updateData.description !== void 0) updateValues.description = updateData.description;
	if (updateData.image !== void 0) updateValues.image = updateData.image || null;
	if (updateData.type !== void 0) updateValues.type = updateData.type;
	if (updateData.discountAmount !== void 0) updateValues.discountAmount = String(updateData.discountAmount);
	if (updateData.minimumCartAmount !== void 0) updateValues.minimumCartAmount = String(updateData.minimumCartAmount);
	if (updateData.maximumDiscountAmount !== void 0) updateValues.maximumDiscountAmount = updateData.maximumDiscountAmount ? String(updateData.maximumDiscountAmount) : null;
	if (updateData.activeFrom !== void 0) updateValues.activeFrom = new Date(updateData.activeFrom);
	if (updateData.activeTo !== void 0) updateValues.activeTo = new Date(updateData.activeTo);
	if (updateData.usageLimit !== void 0) updateValues.usageLimit = updateData.usageLimit;
	if (updateData.usageLimitPerUser !== void 0) updateValues.usageLimitPerUser = updateData.usageLimitPerUser;
	if (updateData.isActive !== void 0) updateValues.isActive = updateData.isActive;
	if (updateData.applicableTo !== void 0) updateValues.applicableTo = updateData.applicableTo;
	if (Object.keys(updateValues).length > 0) await db.update(coupons).set(updateValues).where(eq(coupons.id, id));
	const newApplicableTo = updateData.applicableTo ?? existingCoupon.applicableTo;
	const promises = [];
	if (updateData.applicableTo !== void 0 && updateData.applicableTo !== existingCoupon.applicableTo) promises.push(db.delete(couponProducts).where(eq(couponProducts.couponId, id)), db.delete(couponCategories).where(eq(couponCategories.couponId, id)));
	if (newApplicableTo === "specific_products" && productIds !== void 0) {
		if (updateData.applicableTo === void 0 || updateData.applicableTo === existingCoupon.applicableTo) promises.push(db.delete(couponProducts).where(eq(couponProducts.couponId, id)));
		if (productIds.length > 0) {}
	}
	if (newApplicableTo === "specific_products" && productIds !== void 0 && productIds.length >= 0) {
		await db.delete(couponProducts).where(eq(couponProducts.couponId, id));
		if (productIds.length > 0) {
			const productRecords = productIds.map((productId) => ({
				couponId: id,
				productId
			}));
			await db.insert(couponProducts).values(productRecords);
		}
	}
	if (newApplicableTo === "specific_categories" && categoryIds !== void 0 && categoryIds.length >= 0) {
		await db.delete(couponCategories).where(eq(couponCategories.couponId, id));
		if (categoryIds.length > 0) {
			const categoryRecords = categoryIds.map((categoryId) => ({
				couponId: id,
				categoryId
			}));
			await db.insert(couponCategories).values(categoryRecords);
		}
	}
	const updatedCoupon = await db.query.coupons.findFirst({ where: eq(coupons.id, id) });
	if (!updatedCoupon) throw new Error("Failed to update coupon.");
	const normalizedCoupon = await fetchCouponWithRelations(updatedCoupon, {
		includeShopInfo: false,
		includeVendorInfo: false
	});
	return {
		...createSuccessResponse("Coupon updated successfully"),
		coupon: normalizedCoupon
	};
});
var deleteCoupon_createServerFn_handler = createServerRpc({
	id: "4cafa832e934d622973c09980e4dbf3da7a27e63e8b2b0fe512ac461b7f8f6bc",
	name: "deleteCoupon",
	filename: "src/lib/functions/vendor/coupons.ts"
}, (opts) => deleteCoupon.__executeServer(opts));
var deleteCoupon = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(deleteCouponSchema.extend({ shopId: string().min(1, "Shop ID is required") })).handler(deleteCoupon_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session.user.id;
	const { id, shopId } = data;
	await requireShopAccess(userId, shopId);
	if (!await db.query.coupons.findFirst({ where: and(eq(coupons.id, id), eq(coupons.shopId, shopId)) })) throw new Error("Coupon not found.");
	await db.delete(coupons).where(eq(coupons.id, id));
	return createSuccessResponse("Coupon deleted successfully");
});
var validateCoupon_createServerFn_handler = createServerRpc({
	id: "fc717e6a587b23d33a2062a0540485d9dfe1b7403ef7429cf8c712bb7fef63ea",
	name: "validateCoupon",
	filename: "src/lib/functions/vendor/coupons.ts"
}, (opts) => validateCoupon.__executeServer(opts));
var validateCoupon = createServerFn({ method: "POST" }).inputValidator(validateCouponSchema).handler(validateCoupon_createServerFn_handler, async ({ data }) => {
	const { code, shopId, cartAmount, userId, cartItems } = data;
	const _cartAmountValue = parseFloat(cartAmount);
	const coupon = await db.query.coupons.findFirst({ where: and(eq(coupons.shopId, shopId), ilike(coupons.code, code)) });
	if (!coupon) return {
		valid: false,
		message: "Invalid coupon code.",
		invalidReason: "not_found"
	};
	const normalizedCoupon = await fetchCouponWithRelations(coupon, {
		includeShopInfo: false,
		includeVendorInfo: false
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
		const userUsageResult = await db.select({ count: count() }).from(couponUsage).where(and(eq(couponUsage.couponId, coupon.id), eq(couponUsage.userId, userId)));
		const userUsageCount = Number(userUsageResult[0]?.count ?? 0);
		if (userUsageCount >= coupon.usageLimitPerUser) return {
			valid: false,
			coupon: normalizedCoupon,
			message: `You have already used this coupon ${userUsageCount} time(s).`,
			invalidReason: "user_limit_reached"
		};
	}
	let applicableAmount = _cartAmountValue;
	if (cartItems && cartItems.length > 0) {
		if (coupon.applicableTo === "specific_products") {
			const couponProductIds = normalizedCoupon.productIds ?? [];
			const couponProductIdSet = new Set(couponProductIds);
			applicableAmount = cartItems.filter((item) => couponProductIdSet.has(item.productId)).reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0);
		} else if (coupon.applicableTo === "specific_categories") {
			const couponCategoryIds = normalizedCoupon.categoryIds ?? [];
			const couponCategoryIdSet = new Set(couponCategoryIds);
			applicableAmount = cartItems.filter((item) => item.categoryId && couponCategoryIdSet.has(item.categoryId)).reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0);
		}
	}
	if (applicableAmount === 0 && coupon.applicableTo !== "all") return {
		valid: false,
		coupon: normalizedCoupon,
		message: "This coupon doesn't apply to any items in your cart.",
		invalidReason: "no_applicable_products"
	};
	const minimumAmount = parseFloat(coupon.minimumCartAmount);
	if (_cartAmountValue < minimumAmount) return {
		valid: false,
		coupon: normalizedCoupon,
		message: `Minimum order amount of $${minimumAmount.toFixed(2)} required for applicable items.`,
		invalidReason: "minimum_not_met"
	};
	let discountAmount = 0;
	const couponValue = parseFloat(coupon.discountAmount);
	switch (coupon.type) {
		case "percentage":
			discountAmount = applicableAmount * couponValue / 100;
			break;
		case "fixed":
			discountAmount = Math.min(couponValue, applicableAmount);
			break;
		case "free_shipping":
			discountAmount = 0;
			break;
	}
	if (coupon.maximumDiscountAmount) {
		const maxDiscount = parseFloat(coupon.maximumDiscountAmount);
		if (discountAmount > maxDiscount) discountAmount = maxDiscount;
	}
	return {
		valid: true,
		coupon: normalizedCoupon,
		discountAmount,
		applicableAmount,
		message: "Coupon validated successfully."
	};
});
var getAvailableCouponsForUser_createServerFn_handler = createServerRpc({
	id: "758bad04bdbabb26a7ca466bc717e0fa43253d6ad32a5d53147c8c8b0afae726",
	name: "getAvailableCouponsForUser",
	filename: "src/lib/functions/vendor/coupons.ts"
}, (opts) => getAvailableCouponsForUser.__executeServer(opts));
var getAvailableCouponsForUser = createServerFn({ method: "GET" }).inputValidator(getAvailableCouponsForUserSchema).handler(getAvailableCouponsForUser_createServerFn_handler, async ({ data }) => {
	const { shopId, userId } = data;
	const now = /* @__PURE__ */ new Date();
	const activeCoupons = await db.query.coupons.findMany({ where: and(eq(coupons.shopId, shopId), eq(coupons.isActive, true), lte(coupons.activeFrom, now), gte(coupons.activeTo, now)) });
	if (activeCoupons.length === 0) return { coupons: [] };
	const availableCoupons = [];
	for (const coupon of activeCoupons) {
		if (coupon.usageLimit !== null && coupon.usageCount >= coupon.usageLimit) continue;
		let userUsageCount = 0;
		if (userId && coupon.usageLimitPerUser) {
			const userUsageResult = await db.select({ count: count() }).from(couponUsage).where(and(eq(couponUsage.couponId, coupon.id), eq(couponUsage.userId, userId)));
			userUsageCount = Number(userUsageResult[0]?.count ?? 0);
			if (userUsageCount >= coupon.usageLimitPerUser) continue;
		}
		const normalized = await fetchCouponWithRelations(coupon, {
			includeShopInfo: false,
			includeVendorInfo: false
		});
		availableCoupons.push({
			...normalized,
			userUsageCount,
			isEligible: true
		});
	}
	return { coupons: availableCoupons };
});
//#endregion
export { createCoupon_createServerFn_handler, deleteCoupon_createServerFn_handler, getAvailableCouponsForUser_createServerFn_handler, getCouponByCode_createServerFn_handler, getCouponById_createServerFn_handler, getCoupons_createServerFn_handler, updateCoupon_createServerFn_handler, validateCoupon_createServerFn_handler };
