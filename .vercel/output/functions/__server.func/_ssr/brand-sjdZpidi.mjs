import { r as createServerFn } from "./ssr.mjs";
import { f as inArray, n as count, s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { r as shops } from "./shop-schema-C6uNILQs.mjs";
import { a as brands, h as products } from "./products-schema-BRxXUpzG.mjs";
import { c as db } from "./db-DORSFQFR.mjs";
import { t as adminMiddleware } from "./admin-CYCFP3zk.mjs";
import { t as createServerRpc } from "./createServerRpc-D97cGqBD.mjs";
import { n as createSuccessResponse, r as emptyPaginatedResponse } from "./api-response-CYQsbkXz.mjs";
import { i as getBrandByIdSchema, r as deleteBrandSchema, s as toggleBrandActiveSchema, t as adminBrandsQuerySchema } from "./brand-query-w-wFF7Pb.mjs";
import { n as fetchBrandWithRelations, t as executeBrandQuery } from "./brands-query-helpers-BR5G_JqE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/brand-sjdZpidi.js
/**
* Admin Brand Server Functions
*
* Server functions for brand management in the admin dashboard.
* Admins can view and manage ALL brands across all vendors and shops.
*/
var getAdminBrands_createServerFn_handler = createServerRpc({
	id: "7e36a167532c758f1599c786fb3c1d77b7471c6b1720454ec1acc672eeac6821",
	name: "getAdminBrands",
	filename: "src/lib/functions/admin/brand.ts"
}, (opts) => getAdminBrands.__executeServer(opts));
var getAdminBrands = createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(adminBrandsQuerySchema).handler(getAdminBrands_createServerFn_handler, async ({ data }) => {
	const { shopId, vendorId, limit, offset, search, isActive, sortBy, sortDirection } = data;
	const baseConditions = [];
	if (shopId) baseConditions.push(eq(brands.shopId, shopId));
	if (vendorId) {
		const vendorShops = await db.select({ id: shops.id }).from(shops).where(eq(shops.vendorId, vendorId));
		if (vendorShops.length > 0) baseConditions.push(inArray(brands.shopId, vendorShops.map((s) => s.id)));
		else return emptyPaginatedResponse(limit, offset);
	}
	return executeBrandQuery({
		baseConditions,
		search,
		isActive,
		limit,
		offset,
		sortBy,
		sortDirection,
		includeShopInfo: true
	});
});
var getAdminBrandById_createServerFn_handler = createServerRpc({
	id: "0f65d61ef60c80e6adbbd26ad61a5f636d98e179b409f4bd704aad1c6a7eb6ac",
	name: "getAdminBrandById",
	filename: "src/lib/functions/admin/brand.ts"
}, (opts) => getAdminBrandById.__executeServer(opts));
var getAdminBrandById = createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(getBrandByIdSchema).handler(getAdminBrandById_createServerFn_handler, async ({ data }) => {
	const { id } = data;
	const [brand] = await db.select().from(brands).where(eq(brands.id, id));
	if (!brand) throw new Error("Brand not found.");
	return { brand: await fetchBrandWithRelations(brand, { includeShopInfo: true }) };
});
var toggleAdminBrandActive_createServerFn_handler = createServerRpc({
	id: "20dc87ef7a85ac89daa1f0a41f4ee6be3a555b247a3191b7892f7e3aa546850b",
	name: "toggleAdminBrandActive",
	filename: "src/lib/functions/admin/brand.ts"
}, (opts) => toggleAdminBrandActive.__executeServer(opts));
var toggleAdminBrandActive = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(toggleBrandActiveSchema).handler(toggleAdminBrandActive_createServerFn_handler, async ({ data }) => {
	const { id, isActive } = data;
	const [existingBrand] = await db.select().from(brands).where(eq(brands.id, id));
	if (!existingBrand) throw new Error("Brand not found.");
	await db.update(brands).set({ isActive }).where(eq(brands.id, id));
	return createSuccessResponse(isActive ? "Brand activated" : "Brand deactivated");
});
var deleteAdminBrand_createServerFn_handler = createServerRpc({
	id: "7272428238f6e2b9c516e661169e039491663c2d0552047b60dff58f04080130",
	name: "deleteAdminBrand",
	filename: "src/lib/functions/admin/brand.ts"
}, (opts) => deleteAdminBrand.__executeServer(opts));
var deleteAdminBrand = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(deleteBrandSchema).handler(deleteAdminBrand_createServerFn_handler, async ({ data }) => {
	const { id } = data;
	const [existingBrand] = await db.select().from(brands).where(eq(brands.id, id));
	if (!existingBrand) throw new Error("Brand not found.");
	const [productCount] = await db.select({ count: count() }).from(products).where(eq(products.brandId, id));
	if ((productCount?.count ?? 0) > 0) throw new Error("Cannot delete a brand that has products. Please reassign products first.");
	await db.delete(brands).where(eq(brands.id, id));
	return createSuccessResponse("Brand deleted successfully");
});
//#endregion
export { deleteAdminBrand_createServerFn_handler, getAdminBrandById_createServerFn_handler, getAdminBrands_createServerFn_handler, toggleAdminBrandActive_createServerFn_handler };
