import { At as number, Ft as boolean, Gt as string, Ht as object, Mt as _enum } from "../_libs/@better-auth/core+[...].mjs";
import { a as isActiveField, c as paginationFields, d as shopSlugFields, f as sortDirectionEnum, i as createToggleActiveSchema, l as searchFields, n as createGetByIdSchema, o as optionalShopIdField, p as storeIsActiveField, r as createGetBySlugSchema, s as optionalVendorIdField, t as createDeleteSchema, u as shopScopeFields } from "./base-query-CXHTKIVK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tag-query-B-OjxzSS.js
/**
* Shared Tag Query Validators
*
* Composable z schemas for tag queries.
* Uses base-query for common schemas to ensure DRY compliance.
*/
var tagSortByEnum = _enum([
	"name",
	"createdAt",
	"sortOrder",
	"productCount"
]);
var tagFilterFields = { ...isActiveField };
var sortFields = {
	sortBy: tagSortByEnum.optional().default("sortOrder"),
	sortDirection: sortDirectionEnum.optional().default("asc")
};
var getTagByIdSchema = createGetByIdSchema("Tag");
createGetBySlugSchema("Tag");
object({
	...paginationFields,
	limit: paginationFields.limit.default(50),
	...sortFields,
	...searchFields,
	...shopSlugFields,
	...optionalShopIdField,
	...storeIsActiveField
});
/**
* Admin Query Schema
* - Admin auth required
* - Full filter access
* - Can see all tags across all shops
*/
var adminTagsQuerySchema = object({
	...paginationFields,
	limit: paginationFields.limit.default(10),
	...sortFields,
	...searchFields,
	...tagFilterFields,
	...optionalShopIdField,
	...optionalVendorIdField
});
/**
* Vendor Query Schema
* - Vendor auth required
* - Shop ID is required (scoped to their shop)
*/
var vendorTagsQuerySchema = object({
	...shopScopeFields,
	...paginationFields,
	limit: paginationFields.limit.default(10),
	...sortFields,
	...searchFields,
	...tagFilterFields
});
var toggleTagActiveSchema = createToggleActiveSchema("Tag");
var deleteTagSchema = createDeleteSchema("Tag");
/**
* Schema for creating a new tag (Vendor)
*/
var createTagSchema = object({
	shopId: string().min(1, "Shop ID is required"),
	name: string().min(2, "Tag name must be at least 2 characters").max(100, "Tag name must be at most 100 characters"),
	slug: string().min(2, "Slug must be at least 2 characters").max(100, "Slug must be at most 100 characters").regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase with hyphens only").optional(),
	description: string().max(500, "Description must be at most 500 characters").optional().nullable(),
	sortOrder: number().min(0).optional().default(0),
	isActive: boolean().optional().default(true)
});
/**
* Schema for updating an existing tag (Vendor)
*/
var updateTagSchema = object({
	id: string().min(1, "Tag ID is required"),
	shopId: string().min(1, "Shop ID is required"),
	name: string().min(2, "Tag name must be at least 2 characters").max(100, "Tag name must be at most 100 characters").optional(),
	slug: string().min(2, "Slug must be at least 2 characters").max(100, "Slug must be at most 100 characters").regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase with hyphens only").optional(),
	description: string().max(500, "Description must be at most 500 characters").optional().nullable(),
	sortOrder: number().min(0).optional(),
	isActive: boolean().optional()
});
//#endregion
export { toggleTagActiveSchema as a, getTagByIdSchema as i, createTagSchema as n, updateTagSchema as o, deleteTagSchema as r, vendorTagsQuerySchema as s, adminTagsQuerySchema as t };
