import { a as and, s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { h as products } from "./products-schema-BRxXUpzG.mjs";
import { c as db } from "./db-DORSFQFR.mjs";
import { n as fetchProductWithRelations, t as executeProductQuery } from "./products-query-helpers-YIHV58XJ.mjs";
import { r as createServerFn } from "./ssr.mjs";
import { a as getProductByIdSchema, i as getFeaturedProductsSchema, l as storeProductsQuerySchema, o as getProductBySlugSchema, s as getRelatedProductsSchema } from "./product-query-DTSuSPZY.mjs";
import { t as createServerRpc } from "./createServerRpc-D97cGqBD.mjs";
import { r as emptyPaginatedResponse, t as createPaginatedResponse } from "./api-response-CYQsbkXz.mjs";
import { i as getProductRatingStats } from "./review-query-helpers-DfahZAyv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-5ojfZLLw.js
/**
* Transform NormalizedProduct to StoreProduct by removing sensitive fields
*/
function toStoreProduct(product) {
	const { costPrice: _costPrice, lowStockThreshold: _lowStockThreshold, trackInventory: _trackInventory, ...storeProduct } = product;
	return storeProduct;
}
var getStoreProducts_createServerFn_handler = createServerRpc({
	id: "4facdc37369dcfd178c84943309971bd0a4edb6d5552d354b6a8077b6e297491",
	name: "getStoreProducts",
	filename: "src/lib/functions/store/products.ts"
}, (opts) => getStoreProducts.__executeServer(opts));
var getStoreProducts = createServerFn({ method: "GET" }).inputValidator(storeProductsQuerySchema).handler(getStoreProducts_createServerFn_handler, async ({ data }) => {
	const baseConditions = [eq(products.status, "active"), eq(products.isActive, true)];
	if (data.shopId) baseConditions.push(eq(products.shopId, data.shopId));
	if (data.shopSlug && !data.shopId) {
		const { shops } = await import("./shop-schema-C3PbWNTi.mjs");
		const [shop] = await db.select({ id: shops.id }).from(shops).where(eq(shops.slug, data.shopSlug));
		if (shop) baseConditions.push(eq(products.shopId, shop.id));
		else return emptyPaginatedResponse(data.limit, data.offset);
	}
	let mappedSortBy;
	if (data.sortBy === "price") mappedSortBy = "sellingPrice";
	else mappedSortBy = data.sortBy;
	const result = await executeProductQuery({
		baseConditions,
		search: data.search,
		productType: data.productType,
		categoryId: data.categoryId,
		brandId: data.brandId,
		tagId: data.tagId,
		isFeatured: data.isFeatured,
		isActive: true,
		inStock: data.inStock,
		minPrice: data.minPrice,
		maxPrice: data.maxPrice,
		minRating: data.minRating,
		limit: data.limit,
		offset: data.offset,
		sortBy: mappedSortBy,
		sortDirection: data.sortDirection,
		includeShopInfo: true,
		includeVendorInfo: false,
		excludeCostPrice: true
	});
	return createPaginatedResponse(result.data.map(toStoreProduct), result.total, result.limit, result.offset);
});
var getStoreProductBySlug_createServerFn_handler = createServerRpc({
	id: "f91411c8767c9c04ccef425a0be6149df18febcb289782cfe8bb1b5d482f9a8c",
	name: "getStoreProductBySlug",
	filename: "src/lib/functions/store/products.ts"
}, (opts) => getStoreProductBySlug.__executeServer(opts));
var getStoreProductBySlug = createServerFn({ method: "GET" }).inputValidator(getProductBySlugSchema).handler(getStoreProductBySlug_createServerFn_handler, async ({ data }) => {
	const { slug, shopSlug } = data;
	const conditions = [
		eq(products.slug, slug),
		eq(products.status, "active"),
		eq(products.isActive, true)
	];
	if (shopSlug) {
		const { shops } = await import("./shop-schema-C3PbWNTi.mjs");
		const [shop] = await db.select({ id: shops.id }).from(shops).where(eq(shops.slug, shopSlug));
		if (shop) conditions.push(eq(products.shopId, shop.id));
		else throw new Error("Shop not found.");
	}
	const [product] = await db.select().from(products).where(and(...conditions));
	if (!product) throw new Error("Product not found.");
	const normalizedProduct = await fetchProductWithRelations(product, {
		includeShopInfo: true,
		includeVendorInfo: false,
		excludeCostPrice: true
	});
	const ratingStats = await getProductRatingStats(product.id);
	return {
		product: toStoreProduct(normalizedProduct),
		ratingStats
	};
});
var getStoreProductById_createServerFn_handler = createServerRpc({
	id: "efdc0326ba4e7e2b6efdcfca0c0141e1d1cfc940e187a30982dbaf30579ae6fa",
	name: "getStoreProductById",
	filename: "src/lib/functions/store/products.ts"
}, (opts) => getStoreProductById.__executeServer(opts));
var getStoreProductById = createServerFn({ method: "GET" }).inputValidator(getProductByIdSchema).handler(getStoreProductById_createServerFn_handler, async ({ data }) => {
	const { id } = data;
	const [product] = await db.select().from(products).where(and(eq(products.id, id), eq(products.status, "active"), eq(products.isActive, true)));
	if (!product) throw new Error("Product not found.");
	const normalizedProduct = await fetchProductWithRelations(product, {
		includeShopInfo: true,
		includeVendorInfo: false,
		excludeCostPrice: true
	});
	const ratingStats = await getProductRatingStats(product.id);
	return {
		product: toStoreProduct(normalizedProduct),
		ratingStats
	};
});
var getFeaturedProducts_createServerFn_handler = createServerRpc({
	id: "0395b94cc1a6535b6b1672691acf0c005b8d0ac08917d2d4bb23c4d52c8d583a",
	name: "getFeaturedProducts",
	filename: "src/lib/functions/store/products.ts"
}, (opts) => getFeaturedProducts.__executeServer(opts));
var getFeaturedProducts = createServerFn({ method: "GET" }).inputValidator(getFeaturedProductsSchema).handler(getFeaturedProducts_createServerFn_handler, async ({ data }) => {
	const { limit } = data;
	return { products: (await executeProductQuery({
		baseConditions: [
			eq(products.status, "active"),
			eq(products.isActive, true),
			eq(products.isFeatured, true)
		],
		limit,
		offset: 0,
		sortBy: "createdAt",
		sortDirection: "desc",
		includeShopInfo: true,
		excludeCostPrice: true
	})).data.map(toStoreProduct) };
});
var getRelatedProducts_createServerFn_handler = createServerRpc({
	id: "075fc46c25bf5a6f06f653cc69e04797a973ad8068c7105c04d62acba1c758f3",
	name: "getRelatedProducts",
	filename: "src/lib/functions/store/products.ts"
}, (opts) => getRelatedProducts.__executeServer(opts));
var getRelatedProducts = createServerFn({ method: "GET" }).inputValidator(getRelatedProductsSchema).handler(getRelatedProducts_createServerFn_handler, async ({ data }) => {
	const { productId, limit } = data;
	const [sourceProduct] = await db.select().from(products).where(eq(products.id, productId));
	if (!sourceProduct) return { products: [] };
	const baseConditions = [eq(products.status, "active"), eq(products.isActive, true)];
	if (sourceProduct.categoryId) baseConditions.push(eq(products.categoryId, sourceProduct.categoryId));
	else if (sourceProduct.brandId) baseConditions.push(eq(products.brandId, sourceProduct.brandId));
	return { products: (await executeProductQuery({
		baseConditions,
		limit: limit + 1,
		offset: 0,
		sortBy: "createdAt",
		sortDirection: "desc",
		includeShopInfo: true,
		excludeCostPrice: true
	})).data.filter((p) => p.id !== productId).slice(0, limit).map(toStoreProduct) };
});
//#endregion
export { getFeaturedProducts_createServerFn_handler, getRelatedProducts_createServerFn_handler, getStoreProductById_createServerFn_handler, getStoreProductBySlug_createServerFn_handler, getStoreProducts_createServerFn_handler };
