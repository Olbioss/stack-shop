import { r as createServerFn } from "./ssr.mjs";
import { A as sql, T as or, a as and, d as ilike, f as inArray, i as desc, n as count, r as asc, s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { o as user, r as shops, s as vendors } from "./shop-schema-C6uNILQs.mjs";
import { h as products } from "./products-schema-BRxXUpzG.mjs";
import { c as db, f as orders } from "./db-DORSFQFR.mjs";
import { t as adminMiddleware } from "./admin-CYCFP3zk.mjs";
import { a as updateVendorCommissionSchema, i as updateShopStatusSchema, n as deleteShopByIdSchema, r as getShopByIdSchema, t as adminShopsQuerySchema } from "./shop-query-qB6XBGQX.mjs";
import { t as createServerRpc } from "./createServerRpc-D97cGqBD.mjs";
import { a as isStripeConfigured } from "./stripe-CYiDuXYN.mjs";
import { s as getAccountStatus } from "./connect-DkFD0Nte.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shops-B9oDmKJQ.js
function normalizeShop(shop, vendor, owner, productCount) {
	return {
		id: shop.id,
		vendorId: shop.vendorId,
		name: shop.name,
		slug: shop.slug,
		description: shop.description,
		logo: shop.logo,
		banner: shop.banner,
		category: shop.category,
		address: shop.address,
		phone: shop.phone,
		email: shop.email,
		status: shop.status,
		rating: shop.rating,
		monthlyRevenue: shop.monthlyRevenue,
		commissionRate: vendor?.commissionRate ?? "10.00",
		stripeConnectedAccountId: vendor?.stripeConnectedAccountId ?? null,
		stripeOnboardingComplete: vendor?.stripeOnboardingComplete ?? false,
		stripeChargesEnabled: vendor?.stripeChargesEnabled ?? false,
		stripePayoutsEnabled: vendor?.stripePayoutsEnabled ?? false,
		totalProducts: productCount ?? shop.totalProducts ?? 0,
		totalOrders: shop.totalOrders ?? 0,
		customerCount: 0,
		createdAt: shop.createdAt.toISOString(),
		updatedAt: shop.updatedAt.toISOString(),
		vendorBusinessName: vendor?.businessName ?? null,
		vendorStatus: vendor?.status ?? null,
		ownerName: owner?.name ?? null,
		ownerEmail: owner?.email ?? null,
		ownerImage: owner?.image ?? null
	};
}
async function getProductCountsForShops(shopIds) {
	if (shopIds.length === 0) return /* @__PURE__ */ new Map();
	const productCounts = await db.select({
		shopId: products.shopId,
		count: count()
	}).from(products).where(inArray(products.shopId, shopIds)).groupBy(products.shopId);
	return new Map(productCounts.map((pc) => [pc.shopId, pc.count]));
}
var getProductCountForShop = async (shopId) => {
	const [result] = await db.select({ count: count() }).from(products).where(eq(products.shopId, shopId));
	return result?.count ?? 0;
};
var requireShopExists = async (shopId) => {
	const [shop] = await db.select({ id: shops.id }).from(shops).where(eq(shops.id, shopId)).limit(1);
	if (!shop) throw new Error("Shop not found.");
	return shop;
};
var requireVendorExists = async (vendorId) => {
	const [vendor] = await db.select({ id: vendors.id }).from(vendors).where(eq(vendors.id, vendorId)).limit(1);
	if (!vendor) throw new Error("Vendor not found.");
	return vendor;
};
var getAdminShops_createServerFn_handler = createServerRpc({
	id: "ac2c4a1d06ff99ff6c6cbedbb8d5784e3241c2d52c226a49e234e6e162b4dc01",
	name: "getAdminShops",
	filename: "src/lib/functions/admin/shops.ts"
}, (opts) => getAdminShops.__executeServer(opts));
var getAdminShops = createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(adminShopsQuerySchema).handler(getAdminShops_createServerFn_handler, async ({ data }) => {
	const { limit = 10, offset = 0, search, vendorId, status, sortBy = "createdAt", sortDirection = "desc" } = data;
	const conditions = [];
	if (vendorId) conditions.push(eq(shops.vendorId, vendorId));
	if (status) conditions.push(eq(shops.status, status));
	if (search) conditions.push(or(ilike(shops.name, `%${search}%`), ilike(shops.slug, `%${search}%`), ilike(shops.email, `%${search}%`)));
	const whereClause = conditions.length > 0 ? and(...conditions) : void 0;
	const orderFn = sortDirection === "desc" ? desc : asc;
	const orderByClause = (() => {
		switch (sortBy) {
			case "name": return orderFn(shops.name);
			case "totalProducts": return orderFn(shops.totalProducts);
			case "totalOrders": return orderFn(shops.totalOrders);
			default: return orderFn(shops.createdAt);
		}
	})();
	const [countResult, shopList] = await Promise.all([db.select({ count: count() }).from(shops).where(whereClause), db.select({
		shop: shops,
		vendor: vendors,
		owner: user
	}).from(shops).leftJoin(vendors, eq(shops.vendorId, vendors.id)).leftJoin(user, eq(vendors.userId, user.id)).where(whereClause).orderBy(orderByClause).limit(limit).offset(offset)]);
	const total = countResult[0]?.count ?? 0;
	if (shopList.length === 0) return {
		data: [],
		total,
		limit,
		offset
	};
	const productCountMap = await getProductCountsForShops(shopList.map((s) => s.shop.id));
	return {
		data: shopList.map(({ shop, vendor, owner }) => normalizeShop(shop, vendor, owner, productCountMap.get(shop.id) ?? shop.totalProducts ?? 0)),
		total,
		limit,
		offset
	};
});
var getAdminShopById_createServerFn_handler = createServerRpc({
	id: "67fa3db952412772f8cc6f4563c8f85481ee1f3138c1bd159035c6c7f20e172c",
	name: "getAdminShopById",
	filename: "src/lib/functions/admin/shops.ts"
}, (opts) => getAdminShopById.__executeServer(opts));
var getAdminShopById = createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(getShopByIdSchema).handler(getAdminShopById_createServerFn_handler, async ({ data }) => {
	const { id } = data;
	const result = await db.select({
		shop: shops,
		vendor: vendors,
		owner: user
	}).from(shops).leftJoin(vendors, eq(shops.vendorId, vendors.id)).leftJoin(user, eq(vendors.userId, user.id)).where(eq(shops.id, id)).limit(1);
	if (result.length === 0) throw new Error("Shop not found.");
	const { shop, vendor, owner } = result[0];
	const productCount = await getProductCountForShop(shop.id);
	const [orderStats] = await db.select({
		totalOrders: sql`count(${orders.id})`,
		paidRevenue: sql`coalesce(sum(case when ${orders.paymentStatus} = 'paid' then ${orders.totalAmount} else 0 end), 0)`,
		customerCount: sql`count(distinct case when ${orders.paymentStatus} = 'paid' then coalesce(${orders.userId}, ${orders.guestEmail}) end)`
	}).from(orders).where(eq(orders.shopId, shop.id));
	let resolvedVendor = vendor;
	if (vendor?.stripeConnectedAccountId && isStripeConfigured()) try {
		const status = await getAccountStatus(vendor.stripeConnectedAccountId);
		if (status) {
			await db.update(vendors).set({
				stripeOnboardingComplete: status.detailsSubmitted,
				stripeChargesEnabled: status.chargesEnabled,
				stripePayoutsEnabled: status.payoutsEnabled
			}).where(eq(vendors.id, vendor.id));
			resolvedVendor = {
				...vendor,
				stripeOnboardingComplete: status.detailsSubmitted,
				stripeChargesEnabled: status.chargesEnabled,
				stripePayoutsEnabled: status.payoutsEnabled
			};
		}
	} catch {
		resolvedVendor = vendor;
	}
	const normalizedShop = normalizeShop(shop, resolvedVendor, owner, productCount);
	const totalOrders = Number(orderStats?.totalOrders ?? 0);
	const customerCount = Number(orderStats?.customerCount ?? 0);
	const monthlyRevenue = orderStats?.paidRevenue ?? "0";
	return { shop: {
		...normalizedShop,
		totalOrders,
		customerCount,
		monthlyRevenue
	} };
});
var updateAdminShopStatus_createServerFn_handler = createServerRpc({
	id: "33a845a8a9ad8219cc57494b62837a429087e63884bd45b57f01bee75622a32a",
	name: "updateAdminShopStatus",
	filename: "src/lib/functions/admin/shops.ts"
}, (opts) => updateAdminShopStatus.__executeServer(opts));
var updateAdminShopStatus = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(updateShopStatusSchema).handler(updateAdminShopStatus_createServerFn_handler, async ({ data }) => {
	const { id, status } = data;
	await requireShopExists(id);
	await db.update(shops).set({ status }).where(eq(shops.id, id));
	return {
		success: true,
		message: `Shop status updated to ${status}`
	};
});
var deleteAdminShop_createServerFn_handler = createServerRpc({
	id: "65911f7e5db2a47f88dcc1fddef1d8a5dcfb141d136873a35b63c8835bf69778",
	name: "deleteAdminShop",
	filename: "src/lib/functions/admin/shops.ts"
}, (opts) => deleteAdminShop.__executeServer(opts));
var deleteAdminShop = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(deleteShopByIdSchema).handler(deleteAdminShop_createServerFn_handler, async ({ data }) => {
	const { id } = data;
	await requireShopExists(id);
	await db.delete(shops).where(eq(shops.id, id));
	return {
		success: true,
		message: "Shop deleted successfully"
	};
});
var updateVendorCommission_createServerFn_handler = createServerRpc({
	id: "5180d7e5ee507ab98bd9911a5923070662c5cd373dbbb25fcf95b90efdc96995",
	name: "updateVendorCommission",
	filename: "src/lib/functions/admin/shops.ts"
}, (opts) => updateVendorCommission.__executeServer(opts));
var updateVendorCommission = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(updateVendorCommissionSchema).handler(updateVendorCommission_createServerFn_handler, async ({ data }) => {
	const { vendorId, commissionRate } = data;
	await requireVendorExists(vendorId);
	await db.update(vendors).set({ commissionRate }).where(eq(vendors.id, vendorId));
	return {
		success: true,
		message: `Commission rate updated to ${commissionRate}%`,
		commissionRate
	};
});
//#endregion
export { deleteAdminShop_createServerFn_handler, getAdminShopById_createServerFn_handler, getAdminShops_createServerFn_handler, updateAdminShopStatus_createServerFn_handler, updateVendorCommission_createServerFn_handler };
