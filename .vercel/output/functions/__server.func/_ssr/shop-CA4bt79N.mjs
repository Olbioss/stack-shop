import { Gt as zod_default } from "../_libs/@better-auth/core+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-CA4bt79N.js
zod_default.object({
	name: zod_default.string().min(2, "Shop name must be at least 2 characters"),
	slug: zod_default.string().min(2, "Slug must be at least 2 characters").regex(/^[a-z0-9-]+$/, "Slug can only contain lowercase letters, numbers, and hyphens"),
	description: zod_default.string().optional(),
	address: zod_default.string().min(5, "Address must be at least 5 characters"),
	phone: zod_default.string().min(10, "Phone number must be at least 10 characters"),
	email: zod_default.email("Invalid email address").optional().or(zod_default.literal(""))
});
var getShopBySlugSchema = zod_default.object({ slug: zod_default.string().min(1, "Slug is required") });
var createShopSchema = zod_default.object({
	name: zod_default.string().min(2, "Shop name must be at least 2 characters").max(100, "Shop name must be at most 100 characters"),
	slug: zod_default.string().min(2, "Slug must be at least 2 characters").max(100, "Slug must be at most 100 characters").regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase with hyphens only"),
	description: zod_default.string().max(500, "Description must be at most 500 characters").optional(),
	logo: zod_default.url().optional().or(zod_default.literal("")),
	banner: zod_default.url().optional().or(zod_default.literal("")),
	category: zod_default.string().max(50).optional(),
	address: zod_default.string().max(200).optional(),
	phone: zod_default.string().max(20).optional(),
	email: zod_default.email("Invalid email address").optional().or(zod_default.literal("")),
	enableNotifications: zod_default.boolean().optional().default(false)
});
var updateShopSchema = zod_default.object({
	id: zod_default.string().min(1, "Shop ID is required"),
	name: zod_default.string().min(2, "Shop name must be at least 2 characters").max(100, "Shop name must be at most 100 characters").optional(),
	slug: zod_default.string().min(2, "Slug must be at least 2 characters").max(100, "Slug must be at most 100 characters").regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase with hyphens only").optional(),
	description: zod_default.string().max(500).optional(),
	logo: zod_default.url().optional().or(zod_default.literal("")),
	banner: zod_default.string().url().optional().or(zod_default.literal("")),
	category: zod_default.string().max(50).optional(),
	address: zod_default.string().max(200).optional(),
	phone: zod_default.string().max(20).optional(),
	email: zod_default.email().optional().or(zod_default.literal("")),
	enableNotifications: zod_default.boolean().optional(),
	status: zod_default.enum([
		"pending",
		"active",
		"suspended"
	]).optional()
});
var deleteShopSchema = zod_default.object({ id: zod_default.string().min(1, "Shop ID is required") });
var storeShopsQuerySchema = zod_default.object({
	limit: zod_default.coerce.number().min(1).max(100).optional().default(20),
	offset: zod_default.coerce.number().min(0).optional().default(0),
	search: zod_default.string().optional(),
	category: zod_default.string().optional(),
	sortBy: zod_default.enum([
		"name",
		"rating",
		"createdAt",
		"totalProducts"
	]).optional().default("rating"),
	sortDirection: zod_default.enum(["asc", "desc"]).optional().default("desc")
});
var storeShopBySlugSchema = zod_default.object({ slug: zod_default.string().min(1, "Shop slug is required") });
//#endregion
export { storeShopsQuerySchema as a, storeShopBySlugSchema as i, deleteShopSchema as n, updateShopSchema as o, getShopBySlugSchema as r, createShopSchema as t };
