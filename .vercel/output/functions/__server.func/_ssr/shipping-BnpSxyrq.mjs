import { $t as boolean, Jt as number, Kt as boolean$1, Xt as _enum, ln as string, on as object, tn as date } from "../_libs/@better-auth/core+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shipping-BnpSxyrq.js
object({
	id: string(),
	name: string(),
	description: string().nullable(),
	price: string(),
	duration: string(),
	isActive: boolean(),
	createdAt: date(),
	updatedAt: date()
});
/**
* Schema for listing shipping methods with pagination and filters
*/
var getShippingMethodsQuerySchema = object({
	shopId: string().min(1, "Shop ID is required"),
	limit: number().min(1).max(100).optional().default(10),
	offset: number().min(0).optional().default(0),
	search: string().optional(),
	isActive: boolean$1().optional(),
	sortBy: _enum([
		"name",
		"createdAt",
		"price"
	]).optional().default("createdAt"),
	sortDirection: _enum(["asc", "desc"]).optional().default("desc")
});
/**
* Schema for getting a single shipping method by ID
*/
var getShippingMethodByIdSchema = object({
	id: string().min(1, "Shipping Method ID is required"),
	shopId: string().min(1, "Shop ID is required")
});
/**
* Schema for creating a new shipping method
*/
var createShippingMethodSchema = object({
	shopId: string().min(1, "Shop ID is required"),
	name: string().min(2, "Name must be at least 2 characters").max(100, "Name must be at most 100 characters"),
	description: string().optional(),
	price: number().min(0, "Price must be greater than or equal to 0"),
	duration: string().min(1, "Duration is required").max(50, "Duration must be at most 50 characters"),
	isActive: boolean().optional().default(true)
});
/**
* Schema for updating a shipping method
*/
var updateShippingMethodSchema = createShippingMethodSchema.partial().extend({
	id: string().min(1, "Shipping Method ID is required"),
	shopId: string().min(1, "Shop ID is required")
});
/**
* Schema for deleting a shipping method
*/
var deleteShippingMethodSchema = object({
	id: string().min(1, "Shipping Method ID is required"),
	shopId: string().min(1, "Shop ID is required")
});
//#endregion
export { updateShippingMethodSchema as a, getShippingMethodsQuerySchema as i, deleteShippingMethodSchema as n, getShippingMethodByIdSchema as r, createShippingMethodSchema as t };
