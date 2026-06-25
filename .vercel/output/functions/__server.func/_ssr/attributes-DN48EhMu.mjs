import { a as and, s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { r as attributes, t as attributeValues } from "./products-schema-BRxXUpzG.mjs";
import { c as db } from "./db-DORSFQFR.mjs";
import { r as createServerFn } from "./ssr.mjs";
import { ln as string } from "../_libs/@better-auth/core+[...].mjs";
import { t as authMiddleware } from "./auth-BM1BErpv.mjs";
import { t as createServerRpc } from "./createServerRpc-D97cGqBD.mjs";
import { n as fetchAttributeWithRelations, t as executeAttributeQuery } from "./attribute-query-helpers-BnCC7tjp.mjs";
import { t as generateSlug } from "./slug-Bd7zy7tX.mjs";
import { c as updateAttributeSchema, l as vendorAttributesQuerySchema, r as createAttributeSchema } from "./attribute-query-C2g1jHby.mjs";
import { r as requireShopAccess } from "./vendors-BeGb8yN7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/attributes-DN48EhMu.js
/**
* Attribute Server Functions
*
* Server functions for attribute management in the vendor dashboard.
* Uses TanStack Start's createServerFn with Zod validation.
*
* Performance Optimizations:
* - Uses batch queries with inArray to eliminate N+1 queries for product counts
* - Uses Promise.all for parallel database operations
* - Computes productCount dynamically from productAttributes table for accuracy
*/
var getAttributes_createServerFn_handler = createServerRpc({
	id: "587789bfe7c37ecda4e35816350db3f39589de82c5fc7acebaaaa3be49491edc",
	name: "getAttributes",
	filename: "src/lib/functions/vendor/attributes.ts"
}, (opts) => getAttributes.__executeServer(opts));
var getAttributes = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(vendorAttributesQuerySchema).handler(getAttributes_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session.user.id;
	const { shopId, limit, offset, search, type, isActive, sortBy, sortDirection } = data;
	await requireShopAccess(userId, shopId);
	return executeAttributeQuery({
		baseConditions: [eq(attributes.shopId, shopId)],
		search,
		type,
		isActive,
		limit,
		offset,
		sortBy,
		sortDirection,
		includeShopInfo: false,
		includeValues: true
	});
});
var getAttributeById_createServerFn_handler = createServerRpc({
	id: "c000805e0f6582998eb2897ddc4a39631a80f83ed983f631dde09d6b61f64cc2",
	name: "getAttributeById",
	filename: "src/lib/functions/vendor/attributes.ts"
}, (opts) => getAttributeById.__executeServer(opts));
var getAttributeById = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(vendorAttributesQuerySchema.pick({ shopId: true }).extend({ id: string().min(1, "Attribute ID is required") })).handler(getAttributeById_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session.user.id;
	const { id, shopId } = data;
	await requireShopAccess(userId, shopId);
	const attribute = await db.query.attributes.findFirst({ where: and(eq(attributes.id, id), eq(attributes.shopId, shopId)) });
	if (!attribute) throw new Error("Attribute not found.");
	return { attribute: await fetchAttributeWithRelations(attribute, {
		includeShopInfo: false,
		includeValues: true
	}) };
});
var createAttribute_createServerFn_handler = createServerRpc({
	id: "7b35d90dcbe7e347bcc5be1ccc0658a450170f65a68a3418c1cecd0fa7deebba",
	name: "createAttribute",
	filename: "src/lib/functions/vendor/attributes.ts"
}, (opts) => createAttribute.__executeServer(opts));
var createAttribute = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(createAttributeSchema).handler(createAttribute_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session.user.id;
	const { shopId, values, ...attributeData } = data;
	await requireShopAccess(userId, shopId);
	let slug = attributeData.slug;
	if (!slug) slug = generateSlug(attributeData.name);
	if (await db.query.attributes.findFirst({ where: and(eq(attributes.shopId, shopId), eq(attributes.slug, slug)) })) throw new Error("An attribute with this slug already exists in this shop. Please choose a different name or slug.");
	const [createdAttribute] = await db.insert(attributes).values({
		shopId,
		name: attributeData.name,
		slug,
		type: attributeData.type,
		sortOrder: attributeData.sortOrder ?? 0,
		isActive: attributeData.isActive ?? true
	}).returning();
	if (!createdAttribute) throw new Error("Failed to create attribute.");
	if (values && values.length > 0) {
		const valueRecords = values.map((val, index) => ({
			attributeId: createdAttribute.id,
			name: val.name,
			slug: val.slug || generateSlug(val.name),
			value: val.value,
			sortOrder: index
		}));
		await db.insert(attributeValues).values(valueRecords);
	}
	return {
		success: true,
		attribute: await fetchAttributeWithRelations(createdAttribute, {
			includeShopInfo: false,
			includeValues: true
		})
	};
});
var updateAttribute_createServerFn_handler = createServerRpc({
	id: "be71035562387bfeee6a5c2e633fa7c9160d2f04ffbf9b85800aa9cad025bbf5",
	name: "updateAttribute",
	filename: "src/lib/functions/vendor/attributes.ts"
}, (opts) => updateAttribute.__executeServer(opts));
var updateAttribute = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(updateAttributeSchema).handler(updateAttribute_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session.user.id;
	const { id, shopId, values, ...updateData } = data;
	await requireShopAccess(userId, shopId);
	const existingAttribute = await db.query.attributes.findFirst({ where: and(eq(attributes.id, id), eq(attributes.shopId, shopId)) });
	if (!existingAttribute) throw new Error("Attribute not found.");
	if (updateData.slug && updateData.slug !== existingAttribute.slug) {
		if (await db.query.attributes.findFirst({ where: and(eq(attributes.shopId, shopId), eq(attributes.slug, updateData.slug)) })) throw new Error("An attribute with this slug already exists in this shop.");
	}
	const updateValues = {};
	if (updateData.name !== void 0) updateValues.name = updateData.name;
	if (updateData.slug !== void 0) updateValues.slug = updateData.slug;
	if (updateData.type !== void 0) updateValues.type = updateData.type;
	if (updateData.sortOrder !== void 0) updateValues.sortOrder = updateData.sortOrder;
	if (updateData.isActive !== void 0) updateValues.isActive = updateData.isActive;
	if (Object.keys(updateValues).length === 0 && values === void 0) return {
		success: true,
		attribute: await fetchAttributeWithRelations(existingAttribute, {
			includeShopInfo: false,
			includeValues: true
		})
	};
	let updatedAttribute = existingAttribute;
	if (Object.keys(updateValues).length > 0) {
		const [updated] = await db.update(attributes).set(updateValues).where(eq(attributes.id, id)).returning();
		if (!updated) throw new Error("Failed to update attribute.");
		updatedAttribute = updated;
	}
	if (values !== void 0) {
		await db.delete(attributeValues).where(eq(attributeValues.attributeId, id));
		if (values.length > 0) await db.insert(attributeValues).values(values.map((val, index) => ({
			attributeId: id,
			name: val.name,
			slug: val.slug || generateSlug(val.name),
			value: val.value,
			sortOrder: index
		})));
	}
	return {
		success: true,
		attribute: await fetchAttributeWithRelations(updatedAttribute, {
			includeShopInfo: false,
			includeValues: true
		})
	};
});
var deleteAttribute_createServerFn_handler = createServerRpc({
	id: "3260e2304aed9b928c68d5ebe29e99d9c9d433737b8012f44b27e8570ad13fa2",
	name: "deleteAttribute",
	filename: "src/lib/functions/vendor/attributes.ts"
}, (opts) => deleteAttribute.__executeServer(opts));
var deleteAttribute = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(vendorAttributesQuerySchema.pick({ shopId: true }).extend({ id: string().min(1, "Attribute ID is required") })).handler(deleteAttribute_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session.user.id;
	const { id, shopId } = data;
	await requireShopAccess(userId, shopId);
	const existingAttribute = await db.query.brands.findFirst({ where: and(eq(attributes.id, id), eq(attributes.shopId, shopId)) });
	if (!existingAttribute) throw new Error("Attribute not found.");
	if ((existingAttribute.productCount ?? 0) > 0) throw new Error("Cannot delete an attribute that is assigned to products. Please remove it from products first.");
	await db.delete(attributes).where(eq(attributes.id, id));
	return {
		success: true,
		message: "Attribute deleted successfully"
	};
});
//#endregion
export { createAttribute_createServerFn_handler, deleteAttribute_createServerFn_handler, getAttributeById_createServerFn_handler, getAttributes_createServerFn_handler, updateAttribute_createServerFn_handler };
