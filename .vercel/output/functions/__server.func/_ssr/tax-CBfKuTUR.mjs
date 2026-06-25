import { Gt as string } from "../_libs/@better-auth/core+[...].mjs";
import { r as createServerFn } from "./ssr.mjs";
import { a as and, s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { x as taxRates } from "./products-schema-BRxXUpzG.mjs";
import { c as db } from "./db-DORSFQFR.mjs";
import { t as authMiddleware } from "./auth-BM1BErpv.mjs";
import { t as createServerRpc } from "./createServerRpc-D97cGqBD.mjs";
import { n as createTaxRateSchema, o as updateTaxRateSchema, s as vendorTaxRatesQuerySchema } from "./tax-rate-query-BZqT2dMh.mjs";
import { r as requireShopAccess } from "./vendors-BeGb8yN7.mjs";
import { n as fetchTaxRateWithRelations, t as executeTaxRateQuery } from "./tax-rate-query-helpers-YKU-0hrc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tax-CBfKuTUR.js
/**
* Tax Rate Server Functions
*
* Server functions for tax rate management in the vendor dashboard.
* Uses TanStack Start's createServerFn with Zod validation.
*/
var getTaxRates_createServerFn_handler = createServerRpc({
	id: "dbc1125bd721eee6b100a424d3a3752081db6731a4f787eabc4c87172f2845cd",
	name: "getTaxRates",
	filename: "src/lib/functions/vendor/tax.ts"
}, (opts) => getTaxRates.__executeServer(opts));
var getTaxRates = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(vendorTaxRatesQuerySchema).handler(getTaxRates_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session.user.id;
	const { shopId, limit, offset, search, country, isActive, sortBy, sortDirection } = data;
	await requireShopAccess(userId, shopId);
	return executeTaxRateQuery({
		baseConditions: [eq(taxRates.shopId, shopId)],
		search,
		country,
		isActive,
		limit,
		offset,
		sortBy,
		sortDirection,
		includeShopInfo: false
	});
});
var getTaxRateById_createServerFn_handler = createServerRpc({
	id: "642855e375b3333080afe046d05f7f610c26b11d5533d1149b4444b8440896be",
	name: "getTaxRateById",
	filename: "src/lib/functions/vendor/tax.ts"
}, (opts) => getTaxRateById.__executeServer(opts));
var getTaxRateById = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(vendorTaxRatesQuerySchema.pick({ shopId: true }).extend({ id: string().min(1, "Tax rate ID is required") })).handler(getTaxRateById_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session.user.id;
	const { id, shopId } = data;
	await requireShopAccess(userId, shopId);
	const taxRate = await db.query.taxRates.findFirst({ where: and(eq(taxRates.id, id), eq(taxRates.shopId, shopId)) });
	if (!taxRate) throw new Error("Tax rate not found.");
	return { taxRate: await fetchTaxRateWithRelations(taxRate, { includeShopInfo: false }) };
});
var createTaxRate_createServerFn_handler = createServerRpc({
	id: "ce70106983f078669668a9011fb44d28d13b212ad85c615ebb9e12df9729ada5",
	name: "createTaxRate",
	filename: "src/lib/functions/vendor/tax.ts"
}, (opts) => createTaxRate.__executeServer(opts));
var createTaxRate = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(createTaxRateSchema).handler(createTaxRate_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session.user.id;
	const { shopId, ...taxRateData } = data;
	await requireShopAccess(userId, shopId);
	const [newTaxRate] = await db.insert(taxRates).values({
		shopId,
		name: taxRateData.name,
		rate: String(taxRateData.rate),
		country: taxRateData.country,
		state: taxRateData.state || null,
		zip: taxRateData.zip || null,
		priority: String(taxRateData.priority),
		isActive: taxRateData.isActive,
		isCompound: taxRateData.isCompound
	}).returning();
	if (!newTaxRate) throw new Error("Failed to create tax rate.");
	return {
		success: true,
		taxRate: await fetchTaxRateWithRelations(newTaxRate, { includeShopInfo: false })
	};
});
var updateTaxRate_createServerFn_handler = createServerRpc({
	id: "fcd31a5f30a48676a91b777b96cb2a8644d8cd54a7093002ac5bf1be2ac87413",
	name: "updateTaxRate",
	filename: "src/lib/functions/vendor/tax.ts"
}, (opts) => updateTaxRate.__executeServer(opts));
var updateTaxRate = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(updateTaxRateSchema).handler(updateTaxRate_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session.user.id;
	const { id, shopId, ...updateData } = data;
	await requireShopAccess(userId, shopId);
	const existingTaxRate = await db.query.taxRates.findFirst({ where: and(eq(taxRates.id, id), eq(taxRates.shopId, shopId)) });
	if (!existingTaxRate) throw new Error("Tax rate not found.");
	const updateValues = {};
	if (updateData.name !== void 0) updateValues.name = updateData.name;
	if (updateData.rate !== void 0) updateValues.rate = String(updateData.rate);
	if (updateData.country !== void 0) updateValues.country = updateData.country;
	if (updateData.state !== void 0) updateValues.state = updateData.state;
	if (updateData.zip !== void 0) updateValues.zip = updateData.zip;
	if (updateData.priority !== void 0) updateValues.priority = String(updateData.priority);
	if (updateData.isActive !== void 0) updateValues.isActive = updateData.isActive;
	if (updateData.isCompound !== void 0) updateValues.isCompound = updateData.isCompound;
	if (Object.keys(updateValues).length === 0) return {
		success: true,
		taxRate: await fetchTaxRateWithRelations(existingTaxRate, { includeShopInfo: false })
	};
	const [updatedTaxRate] = await db.update(taxRates).set(updateValues).where(eq(taxRates.id, id)).returning();
	if (!updatedTaxRate) throw new Error("Failed to update tax rate.");
	return {
		success: true,
		taxRate: await fetchTaxRateWithRelations(updatedTaxRate, { includeShopInfo: false })
	};
});
var deleteTaxRate_createServerFn_handler = createServerRpc({
	id: "d12e29e873f5d448053b30c213dedb3e8242d4e457cd49b19165cc574288b418",
	name: "deleteTaxRate",
	filename: "src/lib/functions/vendor/tax.ts"
}, (opts) => deleteTaxRate.__executeServer(opts));
var deleteTaxRate = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(vendorTaxRatesQuerySchema.pick({ shopId: true }).extend({ id: string().min(1, "Tax rate ID is required") })).handler(deleteTaxRate_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session.user.id;
	const { id, shopId } = data;
	await requireShopAccess(userId, shopId);
	if (!await db.query.taxRates.findFirst({ where: and(eq(taxRates.id, id), eq(taxRates.shopId, shopId)) })) throw new Error("Tax rate not found.");
	await db.delete(taxRates).where(eq(taxRates.id, id));
	return {
		success: true,
		message: "Tax rate deleted successfully"
	};
});
var toggleTaxRateActive_createServerFn_handler = createServerRpc({
	id: "6d0dc9578ade1131d633d9d1e81aa225fad2504a3e9f4ccb31b3720d540a3c0d",
	name: "toggleTaxRateActive",
	filename: "src/lib/functions/vendor/tax.ts"
}, (opts) => toggleTaxRateActive.__executeServer(opts));
var toggleTaxRateActive = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(vendorTaxRatesQuerySchema.pick({ shopId: true }).extend({ id: string().min(1, "Tax rate ID is required") })).handler(toggleTaxRateActive_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session.user.id;
	const { id, shopId } = data;
	await requireShopAccess(userId, shopId);
	const existingTaxRate = await db.query.taxRates.findFirst({ where: and(eq(taxRates.id, id), eq(taxRates.shopId, shopId)) });
	if (!existingTaxRate) throw new Error("Tax rate not found.");
	const newActiveStatus = !existingTaxRate.isActive;
	await db.update(taxRates).set({ isActive: newActiveStatus }).where(eq(taxRates.id, id));
	return {
		success: true,
		isActive: newActiveStatus,
		message: `Tax rate ${newActiveStatus ? "activated" : "deactivated"} successfully`
	};
});
//#endregion
export { createTaxRate_createServerFn_handler, deleteTaxRate_createServerFn_handler, getTaxRateById_createServerFn_handler, getTaxRates_createServerFn_handler, toggleTaxRateActive_createServerFn_handler, updateTaxRate_createServerFn_handler };
