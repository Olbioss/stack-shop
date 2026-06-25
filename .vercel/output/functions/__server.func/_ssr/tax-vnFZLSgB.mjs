import { r as createServerFn } from "./ssr.mjs";
import { f as inArray, n as count, s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { r as shops } from "./shop-schema-C6uNILQs.mjs";
import { h as products, x as taxRates } from "./products-schema-BRxXUpzG.mjs";
import { c as db } from "./db-DORSFQFR.mjs";
import { t as adminMiddleware } from "./admin-CYCFP3zk.mjs";
import { t as createServerRpc } from "./createServerRpc-D97cGqBD.mjs";
import { n as createSuccessResponse, r as emptyPaginatedResponse } from "./api-response-CYQsbkXz.mjs";
import { a as toggleTaxRateActiveSchema, i as getTaxRateByIdSchema, r as deleteTaxRateSchema, t as adminTaxRatesQuerySchema } from "./tax-rate-query-BZqT2dMh.mjs";
import { n as fetchTaxRateWithRelations, t as executeTaxRateQuery } from "./tax-rate-query-helpers-YKU-0hrc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tax-vnFZLSgB.js
/**
* Admin Tax Rate Server Functions
*
* Server functions for tax rate management in the admin dashboard.
* Admins can view and manage ALL tax rates across all vendors and shops.
*/
var getAdminTaxRates_createServerFn_handler = createServerRpc({
	id: "f9b4aa597073222881ec9dcfc9f5a5fe0c77d7f3b36be8e017c62f7992e153d2",
	name: "getAdminTaxRates",
	filename: "src/lib/functions/admin/tax.ts"
}, (opts) => getAdminTaxRates.__executeServer(opts));
var getAdminTaxRates = createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(adminTaxRatesQuerySchema).handler(getAdminTaxRates_createServerFn_handler, async ({ data }) => {
	const { shopId, vendorId, limit, offset, search, country, isActive, sortBy, sortDirection } = data;
	const baseConditions = [];
	if (shopId) baseConditions.push(eq(taxRates.shopId, shopId));
	if (vendorId) {
		const vendorShops = await db.select({ id: shops.id }).from(shops).where(eq(shops.vendorId, vendorId));
		if (vendorShops.length > 0) baseConditions.push(inArray(taxRates.shopId, vendorShops.map((s) => s.id)));
		else return emptyPaginatedResponse(limit, offset);
	}
	return executeTaxRateQuery({
		baseConditions,
		search,
		country,
		isActive,
		limit,
		offset,
		sortBy,
		sortDirection,
		includeShopInfo: true
	});
});
var getAdminTaxRateById_createServerFn_handler = createServerRpc({
	id: "86196c83edf0bc205d26ccc17399255593b5c74428c2675543e39a6a32c926b3",
	name: "getAdminTaxRateById",
	filename: "src/lib/functions/admin/tax.ts"
}, (opts) => getAdminTaxRateById.__executeServer(opts));
var getAdminTaxRateById = createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(getTaxRateByIdSchema).handler(getAdminTaxRateById_createServerFn_handler, async ({ data }) => {
	const { id } = data;
	const [taxRate] = await db.select().from(taxRates).where(eq(taxRates.id, id));
	if (!taxRate) throw new Error("Tax rate not found.");
	return { taxRate: await fetchTaxRateWithRelations(taxRate, { includeShopInfo: true }) };
});
var toggleAdminTaxRateActive_createServerFn_handler = createServerRpc({
	id: "b09a69df13bcfa8fad8e6db12be1d0a85cfa73b29c2f350b66421d01d1b91f74",
	name: "toggleAdminTaxRateActive",
	filename: "src/lib/functions/admin/tax.ts"
}, (opts) => toggleAdminTaxRateActive.__executeServer(opts));
var toggleAdminTaxRateActive = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(toggleTaxRateActiveSchema).handler(toggleAdminTaxRateActive_createServerFn_handler, async ({ data }) => {
	const { id, isActive } = data;
	const [existingTaxRate] = await db.select().from(taxRates).where(eq(taxRates.id, id));
	if (!existingTaxRate) throw new Error("Tax rate not found.");
	await db.update(taxRates).set({ isActive }).where(eq(taxRates.id, id));
	return createSuccessResponse(isActive ? "Tax rate activated" : "Tax rate deactivated");
});
var deleteAdminTaxRate_createServerFn_handler = createServerRpc({
	id: "a2c58aaaac113054645de0ae0255757cfcb3354b2cd14f1c041615b10f333f45",
	name: "deleteAdminTaxRate",
	filename: "src/lib/functions/admin/tax.ts"
}, (opts) => deleteAdminTaxRate.__executeServer(opts));
var deleteAdminTaxRate = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(deleteTaxRateSchema).handler(deleteAdminTaxRate_createServerFn_handler, async ({ data }) => {
	const { id } = data;
	const [existingTaxRate] = await db.select().from(taxRates).where(eq(taxRates.id, id));
	if (!existingTaxRate) throw new Error("Tax rate not found.");
	const [productCount] = await db.select({ count: count() }).from(products).where(eq(products.taxId, id));
	if ((productCount?.count ?? 0) > 0) throw new Error("Cannot delete a tax rate that is assigned to products. Please reassign products first.");
	await db.delete(taxRates).where(eq(taxRates.id, id));
	return createSuccessResponse("Tax rate deleted successfully");
});
//#endregion
export { deleteAdminTaxRate_createServerFn_handler, getAdminTaxRateById_createServerFn_handler, getAdminTaxRates_createServerFn_handler, toggleAdminTaxRateActive_createServerFn_handler };
