import { r as createServerFn } from "./ssr.mjs";
import { f as inArray, s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { r as shops } from "./shop-schema-C6uNILQs.mjs";
import { h as products } from "./products-schema-BRxXUpzG.mjs";
import { c as db } from "./db-DORSFQFR.mjs";
import { n as fetchProductWithRelations, t as executeProductQuery } from "./products-query-helpers-YIHV58XJ.mjs";
import { a as getProductByIdSchema, f as updateProductStatusSchema, r as deleteProductSchema, t as adminProductsQuerySchema, u as toggleProductFeaturedSchema } from "./product-query-DTSuSPZY.mjs";
import { t as adminMiddleware } from "./admin-CYCFP3zk.mjs";
import { t as createServerRpc } from "./createServerRpc-D97cGqBD.mjs";
import { n as createSuccessResponse, r as emptyPaginatedResponse } from "./api-response-CYQsbkXz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product-BshkskT4.js
/**
* Admin Product Server Functions
*
* Server functions for product management in the admin dashboard.
* Admins can view and manage ALL products across all vendors and shops.
*/
var getAdminProducts_createServerFn_handler = createServerRpc({
	id: "8af94af91125a164f8bed6119e055a3ef1843df13819bbc13ad5fc9668f76403",
	name: "getAdminProducts",
	filename: "src/lib/functions/admin/product.ts"
}, (opts) => getAdminProducts.__executeServer(opts));
var getAdminProducts = createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(adminProductsQuerySchema).handler(getAdminProducts_createServerFn_handler, async ({ data }) => {
	const { shopId, vendorId, limit, offset, search, status, productType, categoryId, brandId, tagId, attributeId, isFeatured, isActive, inStock, lowStock, minPrice, maxPrice, sortBy, sortDirection } = data;
	const baseConditions = [];
	if (shopId) baseConditions.push(eq(products.shopId, shopId));
	if (vendorId) {
		const vendorShops = await db.select({ id: shops.id }).from(shops).where(eq(shops.vendorId, vendorId));
		if (vendorShops.length > 0) baseConditions.push(inArray(products.shopId, vendorShops.map((s) => s.id)));
		else return emptyPaginatedResponse(limit, offset);
	}
	return executeProductQuery({
		baseConditions,
		search,
		status,
		productType,
		categoryId,
		brandId,
		tagId,
		attributeId,
		isFeatured,
		isActive,
		inStock,
		lowStock,
		minPrice,
		maxPrice,
		limit,
		offset,
		sortBy,
		sortDirection,
		includeShopInfo: true,
		includeVendorInfo: true,
		excludeCostPrice: false
	});
});
var getAdminProductById_createServerFn_handler = createServerRpc({
	id: "9b9b9b283af1c2395e86a563f92f20ae7599380fa78e37b2befc68574e7f1c81",
	name: "getAdminProductById",
	filename: "src/lib/functions/admin/product.ts"
}, (opts) => getAdminProductById.__executeServer(opts));
var getAdminProductById = createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(getProductByIdSchema).handler(getAdminProductById_createServerFn_handler, async ({ data }) => {
	const { id } = data;
	const [product] = await db.select().from(products).where(eq(products.id, id));
	if (!product) throw new Error("Product not found.");
	return { product: await fetchProductWithRelations(product, {
		includeShopInfo: true,
		includeVendorInfo: true,
		excludeCostPrice: false
	}) };
});
var updateAdminProductStatus_createServerFn_handler = createServerRpc({
	id: "eb1ac3da5be0f3ea1ef0552fb7806959507cb9af53d1f69854a785a38988845f",
	name: "updateAdminProductStatus",
	filename: "src/lib/functions/admin/product.ts"
}, (opts) => updateAdminProductStatus.__executeServer(opts));
var updateAdminProductStatus = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(updateProductStatusSchema).handler(updateAdminProductStatus_createServerFn_handler, async ({ data }) => {
	const { id, status } = data;
	const [existingProduct] = await db.select().from(products).where(eq(products.id, id));
	if (!existingProduct) throw new Error("Product not found.");
	await db.update(products).set({ status }).where(eq(products.id, id));
	const [updatedProduct] = await db.select().from(products).where(eq(products.id, id));
	const normalizedProduct = await fetchProductWithRelations(updatedProduct, {
		includeShopInfo: true,
		includeVendorInfo: true
	});
	return {
		...createSuccessResponse(`Product status updated to "${status}"`),
		product: normalizedProduct
	};
});
var toggleAdminProductFeatured_createServerFn_handler = createServerRpc({
	id: "1b0c2c58b08ea7d1eba58eb10b22fad4f5005bd1e08ef85131c1b334a2fa62ea",
	name: "toggleAdminProductFeatured",
	filename: "src/lib/functions/admin/product.ts"
}, (opts) => toggleAdminProductFeatured.__executeServer(opts));
var toggleAdminProductFeatured = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(toggleProductFeaturedSchema).handler(toggleAdminProductFeatured_createServerFn_handler, async ({ data }) => {
	const { id, isFeatured } = data;
	const [existingProduct] = await db.select().from(products).where(eq(products.id, id));
	if (!existingProduct) throw new Error("Product not found.");
	await db.update(products).set({ isFeatured }).where(eq(products.id, id));
	return createSuccessResponse(isFeatured ? "Product marked as featured" : "Product removed from featured");
});
var deleteAdminProduct_createServerFn_handler = createServerRpc({
	id: "3bf0df45035a11781010001bf3077fac85a87a3a1adbf671de6c774156b07be6",
	name: "deleteAdminProduct",
	filename: "src/lib/functions/admin/product.ts"
}, (opts) => deleteAdminProduct.__executeServer(opts));
var deleteAdminProduct = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(deleteProductSchema).handler(deleteAdminProduct_createServerFn_handler, async ({ data }) => {
	const { id } = data;
	const [existingProduct] = await db.select().from(products).where(eq(products.id, id));
	if (!existingProduct) throw new Error("Product not found.");
	await db.delete(products).where(eq(products.id, id));
	return createSuccessResponse("Product deleted successfully");
});
//#endregion
export { deleteAdminProduct_createServerFn_handler, getAdminProductById_createServerFn_handler, getAdminProducts_createServerFn_handler, toggleAdminProductFeatured_createServerFn_handler, updateAdminProductStatus_createServerFn_handler };
