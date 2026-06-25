import { T as or, _ as lte, a as and, d as ilike, f as inArray, i as desc, n as count, r as asc, s as eq, u as gte } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { r as shops, s as vendors } from "./shop-schema-C6uNILQs.mjs";
import { h as products, o as categories } from "./products-schema-BRxXUpzG.mjs";
import { c as db, i as couponProducts, o as coupons, r as couponCategories } from "./db-DORSFQFR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/coupon-query-helpers-BZl8BNkv.js
function buildCouponFilterConditions(options) {
	const conditions = [];
	if (options.baseConditions) conditions.push(...options.baseConditions);
	if (options.search) conditions.push(or(ilike(coupons.code, `%${options.search}%`), ilike(coupons.description, `%${options.search}%`)));
	if (options.type) conditions.push(eq(coupons.type, options.type));
	if (options.status) conditions.push(eq(coupons.status, options.status));
	if (options.applicableTo) conditions.push(eq(coupons.applicableTo, options.applicableTo));
	if (options.isActive !== void 0) conditions.push(eq(coupons.isActive, options.isActive));
	if (options.activeFrom) conditions.push(gte(coupons.activeFrom, options.activeFrom));
	if (options.activeTo) conditions.push(lte(coupons.activeTo, options.activeTo));
	const now = /* @__PURE__ */ new Date();
	if (options.isExpired) conditions.push(lte(coupons.activeTo, now));
	if (options.isScheduled) conditions.push(gte(coupons.activeFrom, now));
	return conditions;
}
async function batchFetchCouponRelations(couponIds, couponList, options = {}) {
	if (couponIds.length === 0) return {
		productsMap: /* @__PURE__ */ new Map(),
		categoriesMap: /* @__PURE__ */ new Map(),
		shopsMap: /* @__PURE__ */ new Map(),
		vendorsMap: /* @__PURE__ */ new Map()
	};
	const shopIds = [...new Set(couponList.map((c) => c.shopId))];
	const queries = [];
	if (options.includeLinkedItems) {
		queries.push(db.select({
			couponId: couponProducts.couponId,
			productId: couponProducts.productId,
			productName: products.name
		}).from(couponProducts).innerJoin(products, eq(couponProducts.productId, products.id)).where(inArray(couponProducts.couponId, couponIds)));
		queries.push(db.select({
			couponId: couponCategories.couponId,
			categoryId: couponCategories.categoryId,
			categoryName: categories.name
		}).from(couponCategories).innerJoin(categories, eq(couponCategories.categoryId, categories.id)).where(inArray(couponCategories.couponId, couponIds)));
	} else {
		queries.push(Promise.resolve([]));
		queries.push(Promise.resolve([]));
	}
	if (options.includeShopInfo && shopIds.length > 0) queries.push(db.select({
		id: shops.id,
		name: shops.name,
		slug: shops.slug,
		vendorId: shops.vendorId
	}).from(shops).where(inArray(shops.id, shopIds)));
	else queries.push(Promise.resolve([]));
	const [linkedProducts, linkedCategories, shopRecords] = await Promise.all(queries);
	let vendorRecords = [];
	if (options.includeVendorInfo && shopRecords.length > 0) {
		const vendorIds = [...new Set(shopRecords.map((s) => s.vendorId).filter(Boolean))];
		if (vendorIds.length > 0) vendorRecords = await db.select({
			id: vendors.id,
			businessName: vendors.businessName
		}).from(vendors).where(inArray(vendors.id, vendorIds));
	}
	const productsMap = /* @__PURE__ */ new Map();
	for (const lp of linkedProducts) {
		const existing = productsMap.get(lp.couponId) || [];
		existing.push({
			productId: lp.productId,
			productName: lp.productName
		});
		productsMap.set(lp.couponId, existing);
	}
	const categoriesMap = /* @__PURE__ */ new Map();
	for (const lc of linkedCategories) {
		const existing = categoriesMap.get(lc.couponId) || [];
		existing.push({
			categoryId: lc.categoryId,
			categoryName: lc.categoryName
		});
		categoriesMap.set(lc.couponId, existing);
	}
	const shopsMap = /* @__PURE__ */ new Map();
	for (const shop of shopRecords) shopsMap.set(shop.id, shop);
	const vendorsMap = /* @__PURE__ */ new Map();
	for (const vendor of vendorRecords) vendorsMap.set(vendor.id, vendor);
	return {
		productsMap,
		categoriesMap,
		shopsMap,
		vendorsMap
	};
}
function normalizeCoupon(coupon, relations, options = {}) {
	const linkedProducts = relations.productsMap.get(coupon.id) || [];
	const linkedCategories = relations.categoriesMap.get(coupon.id) || [];
	let shopName = null;
	let shopSlug = null;
	let vendorId = null;
	let vendorName = null;
	if (options.includeShopInfo) {
		const shopInfo = relations.shopsMap.get(coupon.shopId);
		if (shopInfo) {
			shopName = shopInfo.name;
			shopSlug = shopInfo.slug;
			vendorId = shopInfo.vendorId || null;
			if (options.includeVendorInfo && vendorId) vendorName = relations.vendorsMap.get(vendorId)?.businessName || null;
		}
	}
	return {
		id: coupon.id,
		shopId: coupon.shopId,
		shopName,
		shopSlug,
		vendorId,
		vendorName,
		code: coupon.code,
		description: coupon.description,
		image: coupon.image,
		type: coupon.type,
		discountAmount: coupon.discountAmount,
		minimumCartAmount: coupon.minimumCartAmount,
		maximumDiscountAmount: coupon.maximumDiscountAmount,
		activeFrom: coupon.activeFrom.toISOString(),
		activeTo: coupon.activeTo.toISOString(),
		usageLimit: coupon.usageLimit,
		usageLimitPerUser: coupon.usageLimitPerUser ?? 1,
		usageCount: coupon.usageCount,
		isActive: coupon.isActive ?? true,
		status: coupon.status,
		applicableTo: coupon.applicableTo,
		productIds: linkedProducts.map((p) => p.productId),
		categoryIds: linkedCategories.map((c) => c.categoryId),
		createdAt: coupon.createdAt.toISOString(),
		updatedAt: coupon.updatedAt.toISOString()
	};
}
async function executeCouponQuery(options) {
	const limit = options.limit ?? 10;
	const offset = options.offset ?? 0;
	const sortDirection = options.sortDirection ?? "desc";
	const conditions = buildCouponFilterConditions(options);
	const whereClause = conditions.length > 0 ? and(...conditions) : void 0;
	const orderFn = sortDirection === "desc" ? desc : asc;
	const orderByClause = (() => {
		switch (options.sortBy) {
			case "code": return orderFn(coupons.code);
			case "discountAmount": return orderFn(coupons.discountAmount);
			case "usageCount": return orderFn(coupons.usageCount);
			case "activeFrom": return orderFn(coupons.activeFrom);
			case "activeTo": return orderFn(coupons.activeTo);
			default: return orderFn(coupons.createdAt);
		}
	})();
	const [countResult, couponList] = await Promise.all([db.select({ count: count() }).from(coupons).where(whereClause), db.select().from(coupons).where(whereClause).orderBy(orderByClause).limit(limit).offset(offset)]);
	const total = countResult[0]?.count ?? 0;
	const relations = await batchFetchCouponRelations(couponList.map((c) => c.id), couponList, {
		includeShopInfo: options.includeShopInfo,
		includeVendorInfo: options.includeVendorInfo,
		includeLinkedItems: true
	});
	return {
		data: couponList.map((coupon) => normalizeCoupon(coupon, relations, {
			includeShopInfo: options.includeShopInfo,
			includeVendorInfo: options.includeVendorInfo
		})),
		total,
		limit,
		offset
	};
}
async function fetchCouponWithRelations(coupon, options = {}) {
	return normalizeCoupon(coupon, await batchFetchCouponRelations([coupon.id], [coupon], {
		includeShopInfo: options.includeShopInfo,
		includeVendorInfo: options.includeVendorInfo,
		includeLinkedItems: options.includeLinkedItems ?? true
	}), options);
}
/**
* Get currently active coupons for a shop
*/
async function getActiveCouponsForShop(shopId, options = {}) {
	const now = /* @__PURE__ */ new Date();
	const activeCoupons = await db.select().from(coupons).where(and(eq(coupons.shopId, shopId), eq(coupons.isActive, true), lte(coupons.activeFrom, now), gte(coupons.activeTo, now))).limit(options.limit ?? 50);
	if (activeCoupons.length === 0) return [];
	const relations = await batchFetchCouponRelations(activeCoupons.map((c) => c.id), activeCoupons, {
		includeShopInfo: options.includeShopInfo,
		includeLinkedItems: true
	});
	return activeCoupons.map((coupon) => normalizeCoupon(coupon, relations, {
		includeShopInfo: options.includeShopInfo,
		includeLinkedItems: true
	}));
}
//#endregion
export { fetchCouponWithRelations as n, getActiveCouponsForShop as r, executeCouponQuery as t };
