import { a as and, n as count, s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { o as categories } from "./products-schema-BRxXUpzG.mjs";
import { c as db } from "./db-DORSFQFR.mjs";
import { r as createServerFn } from "./ssr.mjs";
import { t as authMiddleware } from "./auth-BM1BErpv.mjs";
import { l as updateCategorySchema, n as createCategorySchema, u as vendorCategoriesQuerySchema } from "./category-query-C0zo9q64.mjs";
import { t as createServerRpc } from "./createServerRpc-D97cGqBD.mjs";
import { t as generateSlug } from "./slug-Bd7zy7tX.mjs";
import { n as createSuccessResponse } from "./api-response-CYQsbkXz.mjs";
import { r as requireShopAccess } from "./vendors-BeGb8yN7.mjs";
import "./category-Cw6oCYeI.mjs";
import { n as executeCategoryQuery, r as fetchCategoryWithRelations } from "./category-query-helpers-BwcuNZi9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/categories-D8wDvisT.js
var getCategories_createServerFn_handler = createServerRpc({
	id: "ac9426bb67c84a3999b7d6ca1c3cae0017d43a5e56b392b5222c9525672255d3",
	name: "getCategories",
	filename: "src/lib/functions/vendor/categories.ts"
}, (opts) => getCategories.__executeServer(opts));
var getCategories = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(vendorCategoriesQuerySchema).handler(getCategories_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session.user.id;
	const { shopId, limit, offset, search, parentId, isActive, featured, sortBy, sortDirection } = data;
	await requireShopAccess(userId, shopId);
	return executeCategoryQuery({
		baseConditions: [eq(categories.shopId, shopId)],
		search,
		parentId: parentId ?? void 0,
		isActive,
		featured,
		limit,
		offset,
		sortBy,
		sortDirection,
		includeShopInfo: false
	});
});
var getCategoryById_createServerFn_handler = createServerRpc({
	id: "86db024604b2bb22816a24d4ef0a9ada3dd75e44ebb5a44686a38d3d3ecda81b",
	name: "getCategoryById",
	filename: "src/lib/functions/vendor/categories.ts"
}, (opts) => getCategoryById.__executeServer(opts));
var getCategoryById = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(vendorCategoriesQuerySchema.pick({ shopId: true }).extend({ id: vendorCategoriesQuerySchema.shape.shopId })).handler(getCategoryById_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session.user.id;
	const { id, shopId } = data;
	await requireShopAccess(userId, shopId);
	const [category] = await db.select().from(categories).where(and(eq(categories.id, id), eq(categories.shopId, shopId)));
	if (!category) throw new Error("Category not found.");
	return { category: await fetchCategoryWithRelations(category, { includeShopInfo: false }) };
});
var createCategory_createServerFn_handler = createServerRpc({
	id: "b507ba3651755eedbb5f942277f8dc6c1a03dae3e4a39a8b76280ce1fc959867",
	name: "createCategory",
	filename: "src/lib/functions/vendor/categories.ts"
}, (opts) => createCategory.__executeServer(opts));
var createCategory = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(createCategorySchema).handler(createCategory_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session.user.id;
	const { shopId, ...categoryData } = data;
	await requireShopAccess(userId, shopId);
	let slug = categoryData.slug;
	if (!slug) slug = generateSlug(categoryData.name);
	if (await db.query.categories.findFirst({ where: (categories, { and, eq }) => and(eq(categories.shopId, shopId), eq(categories.slug, slug)) })) throw new Error("A category with this slug already exists in this shop. Please choose a different name or slug.");
	let level = 0;
	let parentName = null;
	if (categoryData.parentId) {
		const parent = await db.query.categories.findFirst({
			where: eq(categories.id, categoryData.parentId),
			columns: {
				level: true,
				name: true
			}
		});
		level = (parent?.level ?? 0) + 1;
		parentName = parent?.name ?? null;
	}
	const [newCategory] = await db.insert(categories).values({
		shopId,
		name: categoryData.name,
		slug,
		description: categoryData.description || null,
		image: categoryData.image || null,
		icon: categoryData.icon || null,
		parentId: categoryData.parentId || null,
		level,
		sortOrder: categoryData.sortOrder ?? 0,
		isActive: categoryData.isActive ?? true,
		featured: categoryData.featured ?? false,
		productCount: 0
	}).returning();
	if (!newCategory) throw new Error("Failed to create category.");
	return {
		...createSuccessResponse("Category created successfully"),
		category: {
			...newCategory,
			parentName,
			productCount: 0,
			createdAt: newCategory.createdAt.toISOString(),
			updatedAt: newCategory.updatedAt.toISOString()
		}
	};
});
var updateCategory_createServerFn_handler = createServerRpc({
	id: "2fbb467abe6871094ed16fe999c70ddbb827e8778fcafb49b4457a7221b25608",
	name: "updateCategory",
	filename: "src/lib/functions/vendor/categories.ts"
}, (opts) => updateCategory.__executeServer(opts));
var updateCategory = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(updateCategorySchema).handler(updateCategory_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session.user.id;
	const { id, shopId, ...updateData } = data;
	await requireShopAccess(userId, shopId);
	const existingCategory = await db.query.categories.findFirst({ where: (categories, { and, eq }) => and(eq(categories.id, id), eq(categories.shopId, shopId)) });
	if (!existingCategory) throw new Error("Category not found.");
	if (updateData.slug && updateData.slug !== existingCategory.slug) {
		if (await db.query.categories.findFirst({ where: and(eq(categories.shopId, shopId), eq(categories.slug, updateData.slug)) })) throw new Error("A category with this slug already exists in this shop.");
	}
	let newLevel = existingCategory.level;
	if (updateData.parentId !== void 0 && updateData.parentId !== existingCategory.parentId) if (updateData.parentId) {
		if (updateData.parentId === id) throw new Error("A category cannot be its own parent.");
		const parent = await db.query.categories.findFirst({
			where: eq(categories.id, updateData.parentId),
			columns: {
				level: true,
				id: true
			}
		});
		if (!parent) throw new Error("Parent category not found.");
		newLevel = (parent.level ?? 0) + 1;
	} else newLevel = 0;
	const updateValues = {};
	if (updateData.name !== void 0) updateValues.name = updateData.name;
	if (updateData.slug !== void 0) updateValues.slug = updateData.slug;
	if (updateData.description !== void 0) updateValues.description = updateData.description;
	if (updateData.image !== void 0) updateValues.image = updateData.image || null;
	if (updateData.icon !== void 0) updateValues.icon = updateData.icon || null;
	if (updateData.parentId !== void 0) {
		updateValues.parentId = updateData.parentId || null;
		updateValues.level = newLevel;
	}
	if (updateData.sortOrder !== void 0) updateValues.sortOrder = updateData.sortOrder;
	if (updateData.isActive !== void 0) updateValues.isActive = updateData.isActive;
	if (updateData.featured !== void 0) updateValues.featured = updateData.featured;
	const [updatedCategory] = await db.update(categories).set(updateValues).where(eq(categories.id, id)).returning();
	if (!updatedCategory) throw new Error("Failed to update category.");
	const normalizedCategory = await fetchCategoryWithRelations(updatedCategory, { includeShopInfo: false });
	return {
		...createSuccessResponse("Category updated successfully"),
		category: normalizedCategory
	};
});
var deleteCategory_createServerFn_handler = createServerRpc({
	id: "4fb6138a8ec260e12a52e5af65b3577b3970195c46db4167536f88be8fe4213d",
	name: "deleteCategory",
	filename: "src/lib/functions/vendor/categories.ts"
}, (opts) => deleteCategory.__executeServer(opts));
var deleteCategory = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(vendorCategoriesQuerySchema.pick({ shopId: true }).extend({ id: vendorCategoriesQuerySchema.shape.shopId })).handler(deleteCategory_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session.user.id;
	const { id, shopId } = data;
	await requireShopAccess(userId, shopId);
	if (!await db.query.categories.findFirst({ where: and(eq(categories.id, id), eq(categories.shopId, shopId)) })) throw new Error("Category not found.");
	if ((await db.select({ count: count() }).from(categories).where(eq(categories.parentId, id)))[0]?.count > 0) throw new Error("Cannot delete a category that has subcategories. Please delete or reassign subcategories first.");
	await db.delete(categories).where(eq(categories.id, id));
	return createSuccessResponse("Category deleted successfully");
});
//#endregion
export { createCategory_createServerFn_handler, deleteCategory_createServerFn_handler, getCategories_createServerFn_handler, getCategoryById_createServerFn_handler, updateCategory_createServerFn_handler };
