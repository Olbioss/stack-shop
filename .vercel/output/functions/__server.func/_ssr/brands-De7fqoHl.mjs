import { r as createServerFn } from "./ssr.mjs";
import { a as and, s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { a as brands } from "./products-schema-BRxXUpzG.mjs";
import { c as db } from "./db-DORSFQFR.mjs";
import { t as authMiddleware } from "./auth-BM1BErpv.mjs";
import { t as createServerRpc } from "./createServerRpc-D97cGqBD.mjs";
import { t as generateSlug } from "./slug-Bd7zy7tX.mjs";
import { n as createSuccessResponse } from "./api-response-CYQsbkXz.mjs";
import { c as updateBrandSchema, l as vendorBrandsQuerySchema, n as createBrandSchema } from "./brand-query-w-wFF7Pb.mjs";
import { r as requireShopAccess } from "./vendors-BeGb8yN7.mjs";
import "./brands-DdHqH_d3.mjs";
import { n as fetchBrandWithRelations, t as executeBrandQuery } from "./brands-query-helpers-BR5G_JqE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/brands-De7fqoHl.js
var getBrands_createServerFn_handler = createServerRpc({
	id: "4ef217286a43e24388263aadb9dabe3bfcf53aeac35c084494b834c6c3099cf8",
	name: "getBrands",
	filename: "src/lib/functions/vendor/brands.ts"
}, (opts) => getBrands.__executeServer(opts));
var getBrands = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(vendorBrandsQuerySchema).handler(getBrands_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session.user.id;
	const { shopId, limit, offset, search, isActive, sortBy, sortDirection } = data;
	await requireShopAccess(userId, shopId);
	return executeBrandQuery({
		baseConditions: [eq(brands.shopId, shopId)],
		search,
		isActive,
		limit,
		offset,
		sortBy,
		sortDirection,
		includeShopInfo: false
	});
});
var getBrandById_createServerFn_handler = createServerRpc({
	id: "25446829858865e913c3521dfcd002be4e4cc7075577ce2c6273bfe9271c6a81",
	name: "getBrandById",
	filename: "src/lib/functions/vendor/brands.ts"
}, (opts) => getBrandById.__executeServer(opts));
var getBrandById = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(vendorBrandsQuerySchema.pick({ shopId: true }).extend({ id: vendorBrandsQuerySchema.shape.shopId })).handler(getBrandById_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session.user.id;
	const { id, shopId } = data;
	await requireShopAccess(userId, shopId);
	const [brand] = await db.select().from(brands).where(and(eq(brands.id, id), eq(brands.shopId, shopId)));
	if (!brand) throw new Error("Brand not found.");
	return { brand: await fetchBrandWithRelations(brand, { includeShopInfo: false }) };
});
var createBrand_createServerFn_handler = createServerRpc({
	id: "0eb4c4357baecb962af6d25b63c74eeee688219dc1fada1d51426d538849ddff",
	name: "createBrand",
	filename: "src/lib/functions/vendor/brands.ts"
}, (opts) => createBrand.__executeServer(opts));
var createBrand = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(createBrandSchema).handler(createBrand_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session.user.id;
	const { shopId, ...brandData } = data;
	await requireShopAccess(userId, shopId);
	let slug = brandData.slug;
	if (!slug) slug = generateSlug(brandData.name);
	if (await db.query.brands.findFirst({ where: and(eq(brands.shopId, shopId), eq(brands.slug, slug)) })) throw new Error("A brand with this slug already exists in this shop. Please choose a different name or slug.");
	const [newBrand] = await db.insert(brands).values({
		shopId,
		name: brandData.name,
		slug,
		description: brandData.description || null,
		logo: brandData.logo || null,
		website: brandData.website || null,
		sortOrder: brandData.sortOrder ?? 0,
		isActive: brandData.isActive ?? true,
		productCount: 0
	}).returning();
	if (!newBrand) throw new Error("Failed to create brand.");
	return {
		...createSuccessResponse("Brand created successfully"),
		brand: {
			...newBrand,
			productCount: 0,
			createdAt: newBrand.createdAt.toISOString(),
			updatedAt: newBrand.updatedAt.toISOString()
		}
	};
});
var updateBrand_createServerFn_handler = createServerRpc({
	id: "140b47cb75b83dae8f75df9b5205562701650d8e6af56a70b0a40e2bcbdfa555",
	name: "updateBrand",
	filename: "src/lib/functions/vendor/brands.ts"
}, (opts) => updateBrand.__executeServer(opts));
var updateBrand = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(updateBrandSchema).handler(updateBrand_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session.user.id;
	const { id, shopId, ...updateData } = data;
	await requireShopAccess(userId, shopId);
	const existingBrand = await db.query.brands.findFirst({ where: and(eq(brands.id, id), eq(brands.shopId, shopId)) });
	if (!existingBrand) throw new Error("Brand not found.");
	if (updateData.slug && updateData.slug !== existingBrand.slug) {
		if (await db.query.brands.findFirst({ where: and(eq(brands.shopId, shopId), eq(brands.slug, updateData.slug)) })) throw new Error("A brand with this slug already exists in this shop.");
	}
	const updateValues = {};
	if (updateData.name !== void 0) updateValues.name = updateData.name;
	if (updateData.slug !== void 0) updateValues.slug = updateData.slug;
	if (updateData.description !== void 0) updateValues.description = updateData.description;
	if (updateData.logo !== void 0) updateValues.logo = updateData.logo || null;
	if (updateData.website !== void 0) updateValues.website = updateData.website || null;
	if (updateData.sortOrder !== void 0) updateValues.sortOrder = updateData.sortOrder;
	if (updateData.isActive !== void 0) updateValues.isActive = updateData.isActive;
	const [updatedBrand] = await db.update(brands).set(updateValues).where(eq(brands.id, id)).returning();
	if (!updatedBrand) throw new Error("Failed to update brand.");
	const normalizedBrand = await fetchBrandWithRelations(updatedBrand, { includeShopInfo: false });
	return {
		...createSuccessResponse("Brand updated successfully"),
		brand: normalizedBrand
	};
});
var deleteBrand_createServerFn_handler = createServerRpc({
	id: "63b82dc9ffd443ff86a277a1aadc9d32bd490716e4367e529d3f8fb0053364cb",
	name: "deleteBrand",
	filename: "src/lib/functions/vendor/brands.ts"
}, (opts) => deleteBrand.__executeServer(opts));
var deleteBrand = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(vendorBrandsQuerySchema.pick({ shopId: true }).extend({ id: vendorBrandsQuerySchema.shape.shopId })).handler(deleteBrand_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session.user.id;
	const { id, shopId } = data;
	await requireShopAccess(userId, shopId);
	const existingBrand = await db.query.brands.findFirst({ where: and(eq(brands.id, id), eq(brands.shopId, shopId)) });
	if (!existingBrand) throw new Error("Brand not found.");
	const productCount = existingBrand.productCount ?? 0;
	if (productCount > 0) throw new Error(`Cannot delete brand "${existingBrand.name}" with ${productCount} associated products. Please reassign products first.`);
	await db.delete(brands).where(eq(brands.id, id));
	return createSuccessResponse("Brand deleted successfully");
});
//#endregion
export { createBrand_createServerFn_handler, deleteBrand_createServerFn_handler, getBrandById_createServerFn_handler, getBrands_createServerFn_handler, updateBrand_createServerFn_handler };
