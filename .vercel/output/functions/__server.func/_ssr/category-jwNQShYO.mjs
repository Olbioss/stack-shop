import { f as inArray, s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { r as shops } from "./shop-schema-C6uNILQs.mjs";
import { o as categories } from "./products-schema-BRxXUpzG.mjs";
import { c as db } from "./db-DORSFQFR.mjs";
import { r as createServerFn } from "./ssr.mjs";
import { t as adminMiddleware } from "./admin-CYCFP3zk.mjs";
import { c as toggleCategoryFeaturedSchema, i as getCategoryByIdSchema, r as deleteCategorySchema, s as toggleCategoryActiveSchema, t as adminCategoriesQuerySchema } from "./category-query-C0zo9q64.mjs";
import { t as createServerRpc } from "./createServerRpc-D97cGqBD.mjs";
import { n as createSuccessResponse, r as emptyPaginatedResponse } from "./api-response-CYQsbkXz.mjs";
import { n as executeCategoryQuery, r as fetchCategoryWithRelations } from "./category-query-helpers-BwcuNZi9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/category-jwNQShYO.js
/**
* Admin Category Server Functions
*
* Server functions for category management in the admin dashboard.
* Admins can view and manage ALL categories across all vendors and shops.
*/
var getAdminCategories_createServerFn_handler = createServerRpc({
	id: "4a996a56854488ac0707d39ffca766fef984da97f3973cb6ab3ae1da2106ecb6",
	name: "getAdminCategories",
	filename: "src/lib/functions/admin/category.ts"
}, (opts) => getAdminCategories.__executeServer(opts));
var getAdminCategories = createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(adminCategoriesQuerySchema).handler(getAdminCategories_createServerFn_handler, async ({ data }) => {
	const { shopId, vendorId, limit, offset, search, parentId, isActive, featured, sortBy, sortDirection } = data;
	const baseConditions = [];
	if (shopId) baseConditions.push(eq(categories.shopId, shopId));
	if (vendorId) {
		const vendorShops = await db.select({ id: shops.id }).from(shops).where(eq(shops.vendorId, vendorId));
		if (vendorShops.length > 0) baseConditions.push(inArray(categories.shopId, vendorShops.map((s) => s.id)));
		else return emptyPaginatedResponse(limit, offset);
	}
	return executeCategoryQuery({
		baseConditions,
		search,
		parentId: parentId ?? void 0,
		isActive,
		featured,
		limit,
		offset,
		sortBy,
		sortDirection,
		includeShopInfo: true
	});
});
var getAdminCategoryById_createServerFn_handler = createServerRpc({
	id: "4482b03b70fbed4c8287fb29e75b93068a87c0ea450fc2d1bc3d8d4a760c2bec",
	name: "getAdminCategoryById",
	filename: "src/lib/functions/admin/category.ts"
}, (opts) => getAdminCategoryById.__executeServer(opts));
var getAdminCategoryById = createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(getCategoryByIdSchema).handler(getAdminCategoryById_createServerFn_handler, async ({ data }) => {
	const { id } = data;
	const [category] = await db.select().from(categories).where(eq(categories.id, id));
	if (!category) throw new Error("Category not found.");
	return { category: await fetchCategoryWithRelations(category, { includeShopInfo: true }) };
});
var toggleAdminCategoryActive_createServerFn_handler = createServerRpc({
	id: "5343743de31ef139c2de66fe140049480d4466a0f173c4a57bc4f513483fa851",
	name: "toggleAdminCategoryActive",
	filename: "src/lib/functions/admin/category.ts"
}, (opts) => toggleAdminCategoryActive.__executeServer(opts));
var toggleAdminCategoryActive = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(toggleCategoryActiveSchema).handler(toggleAdminCategoryActive_createServerFn_handler, async ({ data }) => {
	const { id, isActive } = data;
	const [existingCategory] = await db.select().from(categories).where(eq(categories.id, id));
	if (!existingCategory) throw new Error("Category not found.");
	await db.update(categories).set({ isActive }).where(eq(categories.id, id));
	return createSuccessResponse(isActive ? "Category activated" : "Category deactivated");
});
var toggleAdminCategoryFeatured_createServerFn_handler = createServerRpc({
	id: "621e2ccced018a42e08209dee427b1ec8fded6fb5228eb63de05265ed8cf3699",
	name: "toggleAdminCategoryFeatured",
	filename: "src/lib/functions/admin/category.ts"
}, (opts) => toggleAdminCategoryFeatured.__executeServer(opts));
var toggleAdminCategoryFeatured = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(toggleCategoryFeaturedSchema).handler(toggleAdminCategoryFeatured_createServerFn_handler, async ({ data }) => {
	const { id, featured } = data;
	const [existingCategory] = await db.select().from(categories).where(eq(categories.id, id));
	if (!existingCategory) throw new Error("Category not found.");
	await db.update(categories).set({ featured }).where(eq(categories.id, id));
	return createSuccessResponse(featured ? "Category marked as featured" : "Category removed from featured");
});
var deleteAdminCategory_createServerFn_handler = createServerRpc({
	id: "f28d4e33f8ffbbdab91f906075db41272bfcbfcec6c064b870082fcb12a7db8a",
	name: "deleteAdminCategory",
	filename: "src/lib/functions/admin/category.ts"
}, (opts) => deleteAdminCategory.__executeServer(opts));
var deleteAdminCategory = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(deleteCategorySchema).handler(deleteAdminCategory_createServerFn_handler, async ({ data }) => {
	const { id } = data;
	const [existingCategory] = await db.select().from(categories).where(eq(categories.id, id));
	if (!existingCategory) throw new Error("Category not found.");
	const [childCount] = await db.select({ count: db.$count(categories) }).from(categories).where(eq(categories.parentId, id));
	if ((childCount?.count ?? 0) > 0) throw new Error("Cannot delete a category that has subcategories. Please delete or reassign subcategories first.");
	const { products } = await import("./products-schema-CxVDhXJ9.mjs");
	const [productCount] = await db.select({ count: db.$count(products) }).from(products).where(eq(products.categoryId, id));
	if ((productCount?.count ?? 0) > 0) throw new Error("Cannot delete a category that has products. Please reassign products first.");
	await db.delete(categories).where(eq(categories.id, id));
	return createSuccessResponse("Category deleted successfully");
});
//#endregion
export { deleteAdminCategory_createServerFn_handler, getAdminCategories_createServerFn_handler, getAdminCategoryById_createServerFn_handler, toggleAdminCategoryActive_createServerFn_handler, toggleAdminCategoryFeatured_createServerFn_handler };
