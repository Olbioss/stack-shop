import { Gt as zod_default } from "../_libs/@better-auth/core+[...].mjs";
import { a as isActiveField, c as paginationFields, d as shopSlugFields, f as sortDirectionEnum, i as createToggleActiveSchema, l as searchFields, n as createGetByIdSchema, o as optionalShopIdField, p as storeIsActiveField, r as createGetBySlugSchema, s as optionalVendorIdField, t as createDeleteSchema, u as shopScopeFields } from "./base-query-CXHTKIVK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/category-query-C0zo9q64.js
var categorySortByEnum = zod_default.enum([
	"name",
	"createdAt",
	"sortOrder",
	"productCount"
]);
var categoryFilterFields = {
	parentId: zod_default.string().optional(),
	...isActiveField,
	featured: zod_default.coerce.boolean().optional()
};
var sortFields = {
	sortBy: categorySortByEnum.optional().default("sortOrder"),
	sortDirection: sortDirectionEnum.optional().default("asc")
};
var vendorCategoriesQuerySchema = zod_default.object({
	...shopScopeFields,
	...paginationFields,
	limit: paginationFields.limit.default(10),
	...sortFields,
	...searchFields,
	...categoryFilterFields
});
var getCategoryByIdSchema = createGetByIdSchema("Category");
var getCategoryBySlugSchema = createGetBySlugSchema("Category");
var deleteCategorySchema = createDeleteSchema("Category");
zod_default.object({
	id: zod_default.string(),
	shopId: zod_default.string(),
	name: zod_default.string(),
	slug: zod_default.string(),
	description: zod_default.string().optional().nullable(),
	image: zod_default.string().optional().nullable(),
	icon: zod_default.string().optional().nullable(),
	parentId: zod_default.string().optional().nullable(),
	parentName: zod_default.string().optional().nullable(),
	level: zod_default.number().default(0),
	sortOrder: zod_default.number().default(0),
	isActive: zod_default.boolean().default(true),
	featured: zod_default.boolean().default(false),
	productCount: zod_default.number().default(0),
	createdAt: zod_default.string(),
	updatedAt: zod_default.string()
});
/**
* Schema for creating a new category
*/
var createCategorySchema = zod_default.object({
	shopId: zod_default.string().min(1, "Shop ID is required"),
	name: zod_default.string().min(2, "Category name must be at least 2 characters").max(100, "Category name must be at most 100 characters"),
	slug: zod_default.string().min(2, "Slug must be at least 2 characters").max(100, "Slug must be at most 100 characters").regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase with hyphens only").optional(),
	description: zod_default.string().max(500, "Description must be at most 500 characters").optional(),
	image: zod_default.string().url().optional().or(zod_default.literal("")),
	icon: zod_default.string().max(50).optional(),
	parentId: zod_default.string().optional().nullable(),
	sortOrder: zod_default.coerce.number().min(0).optional().default(0),
	isActive: zod_default.boolean().optional().default(true),
	featured: zod_default.boolean().optional().default(false)
});
/**
* Schema for updating an existing category
*/
var updateCategorySchema = zod_default.object({
	id: zod_default.string().min(1, "Category ID is required"),
	shopId: zod_default.string().min(1, "Shop ID is required"),
	name: zod_default.string().min(2, "Category name must be at least 2 characters").max(100, "Category name must be at most 100 characters").optional(),
	slug: zod_default.string().min(2, "Slug must be at least 2 characters").max(100, "Slug must be at most 100 characters").regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase with hyphens only").optional(),
	description: zod_default.string().max(500).optional().nullable(),
	image: zod_default.url().optional().or(zod_default.literal("")).nullable(),
	icon: zod_default.string().max(50).optional().nullable(),
	parentId: zod_default.string().optional().nullable(),
	sortOrder: zod_default.coerce.number().min(0).optional(),
	isActive: zod_default.boolean().optional(),
	featured: zod_default.boolean().optional()
});
/**
* Store Front Query Schema
* - Public access (no auth)
* - Limited filters (customer-facing only)
* - Only active categories
*/
var storeCategoriesQuerySchema = zod_default.object({
	...paginationFields,
	limit: paginationFields.limit.default(50),
	...sortFields,
	...searchFields,
	...categoryFilterFields,
	...storeIsActiveField,
	...shopSlugFields,
	...optionalShopIdField
});
/**
* Admin Query Schema
* - Admin auth required
* - Full filter access
* - Can see all categories across all shops
*/
var adminCategoriesQuerySchema = zod_default.object({
	...paginationFields,
	limit: paginationFields.limit.default(10),
	...sortFields,
	...searchFields,
	...categoryFilterFields,
	...optionalShopIdField,
	...optionalVendorIdField
});
var toggleCategoryActiveSchema = createToggleActiveSchema("Category");
var toggleCategoryFeaturedSchema = zod_default.object({
	id: zod_default.string().min(1, "Category ID is required"),
	featured: zod_default.boolean()
});
//#endregion
export { getCategoryBySlugSchema as a, toggleCategoryFeaturedSchema as c, getCategoryByIdSchema as i, updateCategorySchema as l, createCategorySchema as n, storeCategoriesQuerySchema as o, deleteCategorySchema as r, toggleCategoryActiveSchema as s, adminCategoriesQuerySchema as t, vendorCategoriesQuerySchema as u };
