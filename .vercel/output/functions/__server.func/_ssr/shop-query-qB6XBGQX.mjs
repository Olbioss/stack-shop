import { Gt as zod_default } from "../_libs/@better-auth/core+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-query-qB6XBGQX.js
var adminShopsQuerySchema = zod_default.object({
	limit: zod_default.coerce.number().min(1).max(100).optional().default(10),
	offset: zod_default.coerce.number().min(0).optional().default(0),
	search: zod_default.string().optional(),
	vendorId: zod_default.string().optional(),
	status: zod_default.enum([
		"pending",
		"active",
		"suspended"
	]).optional(),
	sortBy: zod_default.enum([
		"name",
		"createdAt",
		"totalProducts",
		"totalOrders"
	]).optional().default("createdAt"),
	sortDirection: zod_default.enum(["asc", "desc"]).optional().default("desc")
});
var getShopByIdSchema = zod_default.object({ id: zod_default.string().min(1, "Shop ID is required") });
var updateShopStatusSchema = zod_default.object({
	id: zod_default.string().min(1, "Shop ID is required"),
	status: zod_default.enum([
		"pending",
		"active",
		"suspended"
	])
});
var deleteShopByIdSchema = zod_default.object({ id: zod_default.string().min(1, "Shop ID is required") });
var updateVendorCommissionSchema = zod_default.object({
	vendorId: zod_default.string().min(1, "Vendor ID is required"),
	commissionRate: zod_default.string().min(1, "Commission rate is required")
});
//#endregion
export { updateVendorCommissionSchema as a, updateShopStatusSchema as i, deleteShopByIdSchema as n, getShopByIdSchema as r, adminShopsQuerySchema as t };
