import { At as number, Ft as boolean, Gt as string, Ht as object, Mt as _enum, Pt as array } from "../_libs/@better-auth/core+[...].mjs";
import { a as isActiveField, c as paginationFields, d as shopSlugFields, f as sortDirectionEnum, i as createToggleActiveSchema, l as searchFields, n as createGetByIdSchema, o as optionalShopIdField, p as storeIsActiveField, r as createGetBySlugSchema, s as optionalVendorIdField, t as createDeleteSchema, u as shopScopeFields } from "./base-query-CXHTKIVK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/attribute-query-C2g1jHby.js
/**
* Shared Attribute Query Validators
*
* Composable z schemas for attribute queries.
* Uses base-query for common schemas to ensure DRY compliance.
*/
var attributeTypeEnum = _enum([
	"select",
	"color",
	"image",
	"label"
]);
var attributeSortByEnum = _enum([
	"name",
	"createdAt",
	"sortOrder"
]);
var attributeFilterFields = {
	type: attributeTypeEnum.optional(),
	...isActiveField
};
var sortFields = {
	sortBy: attributeSortByEnum.optional().default("sortOrder"),
	sortDirection: sortDirectionEnum.optional().default("asc")
};
var getAttributeByIdSchema = createGetByIdSchema("Attribute");
createGetBySlugSchema("Attribute");
object({
	...paginationFields,
	limit: paginationFields.limit.default(50),
	...sortFields,
	...searchFields,
	...shopSlugFields,
	...optionalShopIdField,
	type: attributeTypeEnum.optional(),
	...storeIsActiveField
});
/**
* Admin Query Schema
* - Admin auth required
* - Full filter access
* - Can see all attributes across all shops
*/
var adminAttributesQuerySchema = object({
	...paginationFields,
	limit: paginationFields.limit.default(10),
	...sortFields,
	...searchFields,
	...attributeFilterFields,
	...optionalShopIdField,
	...optionalVendorIdField
});
/**
* Vendor Query Schema
* - Vendor auth required
* - Shop ID is required (scoped to their shop)
*/
var vendorAttributesQuerySchema = object({
	...shopScopeFields,
	...paginationFields,
	limit: paginationFields.limit.default(10),
	...sortFields,
	...searchFields,
	...attributeFilterFields
});
var toggleAttributeActiveSchema = createToggleActiveSchema("Attribute");
var deleteAttributeSchema = createDeleteSchema("Attribute");
var attributeValueInputSchema = object({
	id: string().optional(),
	name: string().min(1, "Value name is required"),
	slug: string().min(1, "Value slug is required"),
	value: string()
});
var updateAdminAttributeSchema = object({
	id: string().min(1, "Attribute ID is required"),
	name: string().min(2, "Attribute name must be at least 2 characters").max(100, "Attribute name must be at most 100 characters").optional(),
	slug: string().min(2, "Slug must be at least 2 characters").max(100, "Slug must be at most 100 characters").regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase with hyphens only").optional(),
	type: attributeTypeEnum.optional(),
	values: array(attributeValueInputSchema).optional(),
	sortOrder: number().min(0).optional(),
	isActive: boolean().optional()
});
/**
* Schema for creating a new attribute (Vendor)
*/
var createAttributeSchema = object({
	shopId: string().min(1, "Shop ID is required"),
	name: string().min(2, "Attribute name must be at least 2 characters").max(100, "Attribute name must be at most 100 characters"),
	slug: string().min(2, "Slug must be at least 2 characters").max(100, "Slug must be at most 100 characters").regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase with hyphens only").optional(),
	type: attributeTypeEnum.default("select"),
	values: array(attributeValueInputSchema).default([]),
	sortOrder: number().min(0).optional().default(0),
	isActive: boolean().optional().default(true)
});
/**
* Schema for updating an existing attribute (Vendor)
*/
var updateAttributeSchema = object({
	id: string().min(1, "Attribute ID is required"),
	shopId: string().min(1, "Shop ID is required"),
	name: string().min(2, "Attribute name must be at least 2 characters").max(100, "Attribute name must be at most 100 characters").optional(),
	slug: string().min(2, "Slug must be at least 2 characters").max(100, "Slug must be at most 100 characters").regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase with hyphens only").optional(),
	type: attributeTypeEnum.optional(),
	values: array(attributeValueInputSchema).optional(),
	sortOrder: number().min(0).optional(),
	isActive: boolean().optional()
});
//#endregion
export { getAttributeByIdSchema as a, updateAttributeSchema as c, deleteAttributeSchema as i, vendorAttributesQuerySchema as l, attributeValueInputSchema as n, toggleAttributeActiveSchema as o, createAttributeSchema as r, updateAdminAttributeSchema as s, adminAttributesQuerySchema as t };
