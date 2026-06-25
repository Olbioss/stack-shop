import { r as createServerFn } from "./ssr.mjs";
import { a as and, f as inArray, n as count, s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { r as shops } from "./shop-schema-C6uNILQs.mjs";
import { r as attributes, s as productAttributes, t as attributeValues } from "./products-schema-BRxXUpzG.mjs";
import { c as db } from "./db-DORSFQFR.mjs";
import { t as adminMiddleware } from "./admin-CYCFP3zk.mjs";
import { t as createServerRpc } from "./createServerRpc-D97cGqBD.mjs";
import { n as fetchAttributeWithRelations, t as executeAttributeQuery } from "./attribute-query-helpers-BnCC7tjp.mjs";
import { t as generateSlug } from "./slug-Bd7zy7tX.mjs";
import { a as getAttributeByIdSchema, i as deleteAttributeSchema, o as toggleAttributeActiveSchema, s as updateAdminAttributeSchema, t as adminAttributesQuerySchema } from "./attribute-query-C2g1jHby.mjs";
import { n as createSuccessResponse, r as emptyPaginatedResponse } from "./api-response-CYQsbkXz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/attribute-3OZxm8Hz.js
/**
* Admin Attribute Server Functions
*
* Server functions for attribute management in the admin dashboard.
* Admins can view and manage ALL attributes across all vendors and shops.
*/
var getAdminAttributes_createServerFn_handler = createServerRpc({
	id: "571870e3d5d8477b74ba42c576a28d51cfe4e4d7759cb3868427fd4bc82b7dbd",
	name: "getAdminAttributes",
	filename: "src/lib/functions/admin/attribute.ts"
}, (opts) => getAdminAttributes.__executeServer(opts));
var getAdminAttributes = createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(adminAttributesQuerySchema).handler(getAdminAttributes_createServerFn_handler, async ({ data }) => {
	const { shopId, vendorId, limit, offset, search, type, isActive, sortBy, sortDirection } = data;
	const baseConditions = [];
	if (shopId) baseConditions.push(eq(attributes.shopId, shopId));
	if (vendorId) {
		const vendorShops = await db.select({ id: shops.id }).from(shops).where(eq(shops.vendorId, vendorId));
		if (vendorShops.length > 0) baseConditions.push(inArray(attributes.shopId, vendorShops.map((s) => s.id)));
		else return emptyPaginatedResponse(limit, offset);
	}
	return executeAttributeQuery({
		baseConditions,
		search,
		type,
		isActive,
		limit,
		offset,
		sortBy,
		sortDirection,
		includeShopInfo: true,
		includeValues: true
	});
});
var getAdminAttributeById_createServerFn_handler = createServerRpc({
	id: "544f16e66abb7a47003bf4c854e72313242077b40715b8539d0fb0b0f08cb280",
	name: "getAdminAttributeById",
	filename: "src/lib/functions/admin/attribute.ts"
}, (opts) => getAdminAttributeById.__executeServer(opts));
var getAdminAttributeById = createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(getAttributeByIdSchema).handler(getAdminAttributeById_createServerFn_handler, async ({ data }) => {
	const { id } = data;
	const [attribute] = await db.select().from(attributes).where(eq(attributes.id, id));
	if (!attribute) throw new Error("Attribute not found.");
	return { attribute: await fetchAttributeWithRelations(attribute, {
		includeShopInfo: true,
		includeValues: true
	}) };
});
var toggleAdminAttributeActive_createServerFn_handler = createServerRpc({
	id: "ec7b6c3c79e96f4d3321bc1acce31cba64d7176e198918ce605cd28d7b6fcf79",
	name: "toggleAdminAttributeActive",
	filename: "src/lib/functions/admin/attribute.ts"
}, (opts) => toggleAdminAttributeActive.__executeServer(opts));
var toggleAdminAttributeActive = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(toggleAttributeActiveSchema).handler(toggleAdminAttributeActive_createServerFn_handler, async ({ data }) => {
	const { id, isActive } = data;
	const [existingAttribute] = await db.select().from(attributes).where(eq(attributes.id, id));
	if (!existingAttribute) throw new Error("Attribute not found.");
	await db.update(attributes).set({ isActive }).where(eq(attributes.id, id));
	return createSuccessResponse(isActive ? "Attribute activated" : "Attribute deactivated");
});
var updateAdminAttribute_createServerFn_handler = createServerRpc({
	id: "35d0f1270c5ee22fe116ff235f010577a00f94bfc19efcf41549615970b6e3e2",
	name: "updateAdminAttribute",
	filename: "src/lib/functions/admin/attribute.ts"
}, (opts) => updateAdminAttribute.__executeServer(opts));
var updateAdminAttribute = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(updateAdminAttributeSchema).handler(updateAdminAttribute_createServerFn_handler, async ({ data }) => {
	const { id, values, ...updateData } = data;
	const [existingAttribute] = await db.select().from(attributes).where(eq(attributes.id, id));
	if (!existingAttribute) throw new Error("Attribute not found.");
	if (updateData.slug && updateData.slug !== existingAttribute.slug) {
		const [slugExists] = await db.select({ id: attributes.id }).from(attributes).where(and(eq(attributes.shopId, existingAttribute.shopId), eq(attributes.slug, updateData.slug)));
		if (slugExists) throw new Error("An attribute with this slug already exists in this shop.");
	}
	const updateValues = {};
	if (updateData.name !== void 0) updateValues.name = updateData.name;
	if (updateData.slug !== void 0) updateValues.slug = updateData.slug;
	if (updateData.type !== void 0) updateValues.type = updateData.type;
	if (updateData.sortOrder !== void 0) updateValues.sortOrder = updateData.sortOrder;
	if (updateData.isActive !== void 0) updateValues.isActive = updateData.isActive;
	if (Object.keys(updateValues).length > 0) await db.update(attributes).set(updateValues).where(eq(attributes.id, id));
	if (values !== void 0) {
		await db.delete(attributeValues).where(eq(attributeValues.attributeId, id));
		if (values.length > 0) {
			const valueRecords = values.map((val, index) => ({
				attributeId: id,
				name: val.name,
				slug: val.slug || generateSlug(val.name, { unique: false }),
				value: val.value,
				sortOrder: index
			}));
			await db.insert(attributeValues).values(valueRecords);
		}
	}
	return createSuccessResponse("Attribute updated successfully");
});
var deleteAdminAttribute_createServerFn_handler = createServerRpc({
	id: "63803ef7efa2f99c78b773410fa89ea2061d9df386dd218de489424748137093",
	name: "deleteAdminAttribute",
	filename: "src/lib/functions/admin/attribute.ts"
}, (opts) => deleteAdminAttribute.__executeServer(opts));
var deleteAdminAttribute = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(deleteAttributeSchema).handler(deleteAdminAttribute_createServerFn_handler, async ({ data }) => {
	const { id } = data;
	const [existingAttribute] = await db.select().from(attributes).where(eq(attributes.id, id));
	if (!existingAttribute) throw new Error("Attribute not found.");
	const [productCount] = await db.select({ count: count() }).from(productAttributes).where(eq(productAttributes.attributeId, id));
	if ((productCount?.count ?? 0) > 0) throw new Error("Cannot delete an attribute that is assigned to products. Please remove it from products first.");
	await db.delete(attributes).where(eq(attributes.id, id));
	return createSuccessResponse("Attribute deleted successfully");
});
//#endregion
export { deleteAdminAttribute_createServerFn_handler, getAdminAttributeById_createServerFn_handler, getAdminAttributes_createServerFn_handler, toggleAdminAttributeActive_createServerFn_handler, updateAdminAttribute_createServerFn_handler };
