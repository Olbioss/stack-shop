import { T as or, a as and, d as ilike, i as desc, n as count, r as asc, s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { r as shops, s as vendors } from "./shop-schema-C6uNILQs.mjs";
import { h as products } from "./products-schema-BRxXUpzG.mjs";
import { c as db } from "./db-DORSFQFR.mjs";
import { r as createServerFn } from "./ssr.mjs";
import { a as storeShopsQuerySchema, i as storeShopBySlugSchema } from "./shop-CA4bt79N.mjs";
import { t as createServerRpc } from "./createServerRpc-D97cGqBD.mjs";
import { t as createPaginatedResponse } from "./api-response-CYQsbkXz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-DFu2uwBw.js
var getStoreShops_createServerFn_handler = createServerRpc({
	id: "b04ce292aa7f9be0e63e14495def752bb27b1700d040ff7206f583fd839d4348",
	name: "getStoreShops",
	filename: "src/lib/functions/store/shop.ts"
}, (opts) => getStoreShops.__executeServer(opts));
var getStoreShops = createServerFn({ method: "GET" }).inputValidator(storeShopsQuerySchema).handler(getStoreShops_createServerFn_handler, async ({ data }) => {
	const { limit, offset, search, category, sortBy, sortDirection } = data;
	const conditions = [];
	if (search) conditions.push(or(ilike(shops.name, `%${search}%`), ilike(shops.description, `%${search}%`)));
	if (category) conditions.push(eq(shops.category, category));
	const orderFn = sortDirection === "desc" ? desc : asc;
	const orderClause = (() => {
		switch (sortBy) {
			case "name": return orderFn(shops.name);
			case "rating": return orderFn(shops.rating);
			case "totalProducts": return orderFn(shops.totalProducts);
			default: return orderFn(shops.createdAt);
		}
	})();
	const whereClause = conditions.length > 0 ? and(...conditions) : void 0;
	const [countResult, shopList] = await Promise.all([db.select({ count: count() }).from(shops).where(whereClause), db.select({
		id: shops.id,
		slug: shops.slug,
		name: shops.name,
		description: shops.description,
		logo: shops.logo,
		banner: shops.banner,
		category: shops.category,
		address: shops.address,
		phone: shops.phone,
		email: shops.email,
		status: shops.status,
		rating: shops.rating,
		totalProducts: shops.totalProducts,
		totalOrders: shops.totalOrders,
		vendorId: shops.vendorId,
		createdAt: shops.createdAt
	}).from(shops).where(whereClause).orderBy(orderClause).limit(limit).offset(offset)]);
	const total = countResult[0]?.count ?? 0;
	const vendorIds = [...new Set(shopList.map((s) => s.vendorId))];
	const vendorRecords = vendorIds.length > 0 ? await db.select({
		id: vendors.id,
		businessName: vendors.businessName
	}).from(vendors).where(or(...vendorIds.map((id) => eq(vendors.id, id)))) : [];
	const vendorMap = new Map(vendorRecords.map((v) => [v.id, v.businessName]));
	const shopIds = shopList.map((s) => s.id);
	const productCountRecords = shopIds.length > 0 ? await db.select({
		shopId: products.shopId,
		count: count()
	}).from(products).where(or(...shopIds.map((id) => eq(products.shopId, id)))).groupBy(products.shopId) : [];
	const productCountMap = new Map(productCountRecords.map((p) => [p.shopId, p.count]));
	return createPaginatedResponse(shopList.map((shop) => ({
		id: shop.id,
		slug: shop.slug,
		name: shop.name,
		description: shop.description,
		logo: shop.logo,
		banner: shop.banner,
		category: shop.category,
		address: shop.address,
		phone: shop.phone,
		email: shop.email,
		status: shop.status,
		rating: Number(shop.rating ?? 0),
		totalProducts: productCountMap.get(shop.id) ?? 0,
		totalOrders: shop.totalOrders ?? 0,
		vendorName: vendorMap.get(shop.vendorId) ?? null,
		createdAt: shop.createdAt.toISOString()
	})), total, limit, offset);
});
var getStoreShopBySlug_createServerFn_handler = createServerRpc({
	id: "578ed4d8116e8b34a57f34531e688347e10256df8f2ac7de8c9c8845115301f5",
	name: "getStoreShopBySlug",
	filename: "src/lib/functions/store/shop.ts"
}, (opts) => getStoreShopBySlug.__executeServer(opts));
var getStoreShopBySlug = createServerFn({ method: "GET" }).inputValidator(storeShopBySlugSchema).handler(getStoreShopBySlug_createServerFn_handler, async ({ data }) => {
	const { slug } = data;
	const [shop] = await db.select({
		id: shops.id,
		slug: shops.slug,
		name: shops.name,
		description: shops.description,
		logo: shops.logo,
		banner: shops.banner,
		category: shops.category,
		address: shops.address,
		phone: shops.phone,
		email: shops.email,
		status: shops.status,
		rating: shops.rating,
		totalProducts: shops.totalProducts,
		totalOrders: shops.totalOrders,
		vendorId: shops.vendorId,
		createdAt: shops.createdAt
	}).from(shops).where(eq(shops.slug, slug));
	if (!shop) throw new Error("Shop not found.");
	let vendorName = null;
	if (shop.vendorId) {
		const [vendor] = await db.select({ businessName: vendors.businessName }).from(vendors).where(eq(vendors.id, shop.vendorId));
		vendorName = vendor?.businessName ?? null;
	}
	const [productCountResult] = await db.select({ count: count() }).from(products).where(eq(products.shopId, shop.id));
	return { shop: {
		id: shop.id,
		slug: shop.slug,
		name: shop.name,
		description: shop.description,
		logo: shop.logo,
		banner: shop.banner,
		category: shop.category,
		address: shop.address,
		phone: shop.phone,
		email: shop.email,
		status: shop.status,
		rating: Number(shop.rating ?? 0),
		totalProducts: productCountResult?.count ?? shop.totalProducts ?? 0,
		totalOrders: shop.totalOrders ?? 0,
		vendorName,
		createdAt: shop.createdAt.toISOString()
	} };
});
//#endregion
export { getStoreShopBySlug_createServerFn_handler, getStoreShops_createServerFn_handler };
