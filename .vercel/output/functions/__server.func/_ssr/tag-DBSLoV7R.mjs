import { a as and, s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { y as tags } from "./products-schema-BRxXUpzG.mjs";
import { c as db } from "./db-DORSFQFR.mjs";
import { r as createServerFn } from "./ssr.mjs";
import { ln as string } from "../_libs/@better-auth/core+[...].mjs";
import { t as authMiddleware } from "./auth-BM1BErpv.mjs";
import { t as createServerRpc } from "./createServerRpc-D97cGqBD.mjs";
import { t as generateSlug } from "./slug-Bd7zy7tX.mjs";
import { n as createTagSchema, o as updateTagSchema, s as vendorTagsQuerySchema } from "./tag-query-B-OjxzSS.mjs";
import { r as requireShopAccess } from "./vendors-BeGb8yN7.mjs";
import { n as fetchTagWithRelations, t as executeTagQuery } from "./tag-query-helpers-DL8k2O95.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tag-DBSLoV7R.js
/**
* Tag Server Functions
*
* Server functions for tag management in the vendor dashboard.
* Uses TanStack Start's createServerFn with Zod validation.
*/
var getTags_createServerFn_handler = createServerRpc({
	id: "d2fb2bc9b075457362a756a7d05f17202b6eb26cf0b32def3a500550a5c04493",
	name: "getTags",
	filename: "src/lib/functions/vendor/tag.ts"
}, (opts) => getTags.__executeServer(opts));
var getTags = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(vendorTagsQuerySchema).handler(getTags_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session.user.id;
	const { shopId, limit, offset, search, isActive, sortBy, sortDirection } = data;
	await requireShopAccess(userId, shopId);
	return executeTagQuery({
		baseConditions: [eq(tags.shopId, shopId)],
		search,
		isActive,
		limit,
		offset,
		sortBy,
		sortDirection,
		includeShopInfo: false
	});
});
var getTagById_createServerFn_handler = createServerRpc({
	id: "48a77372ad7a396d4cf0051657794825ef3ac78bc6025863e9b53fa402cd9e81",
	name: "getTagById",
	filename: "src/lib/functions/vendor/tag.ts"
}, (opts) => getTagById.__executeServer(opts));
var getTagById = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(vendorTagsQuerySchema.pick({ shopId: true }).extend({ id: string().min(1, "Tag ID is required") })).handler(getTagById_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session.user.id;
	const { id, shopId } = data;
	await requireShopAccess(userId, shopId);
	const tag = await db.query.tags.findFirst({ where: and(eq(tags.id, id), eq(tags.shopId, shopId)) });
	if (!tag) throw new Error("Tag not found.");
	return { tag: await fetchTagWithRelations(tag, { includeShopInfo: false }) };
});
var createTag_createServerFn_handler = createServerRpc({
	id: "3b269942628be306fbafe0e2930da88c6958d4311783e3d96a6118db2e467223",
	name: "createTag",
	filename: "src/lib/functions/vendor/tag.ts"
}, (opts) => createTag.__executeServer(opts));
var createTag = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(createTagSchema).handler(createTag_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session.user.id;
	const { shopId, ...tagData } = data;
	await requireShopAccess(userId, shopId);
	let slug = tagData.slug;
	if (!slug) slug = generateSlug(tagData.name);
	if (await db.query.tags.findFirst({ where: and(eq(tags.shopId, shopId), eq(tags.slug, slug)) })) throw new Error("A tag with this slug already exists in this shop. Please choose a different name or slug.");
	const [newTag] = await db.insert(tags).values({
		shopId,
		name: tagData.name,
		slug,
		description: tagData.description,
		sortOrder: tagData.sortOrder ?? 0,
		isActive: tagData.isActive ?? true
	}).returning();
	if (!newTag) throw new Error("Failed to create tag.");
	return {
		success: true,
		tag: await fetchTagWithRelations(newTag, { includeShopInfo: false })
	};
});
var updateTag_createServerFn_handler = createServerRpc({
	id: "ab3a551f36cc54683b3c0da85adb09243ad34a992c06e974dba1b2f5bb37b212",
	name: "updateTag",
	filename: "src/lib/functions/vendor/tag.ts"
}, (opts) => updateTag.__executeServer(opts));
var updateTag = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(updateTagSchema).handler(updateTag_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session.user.id;
	const { id, shopId, ...updateData } = data;
	await requireShopAccess(userId, shopId);
	const existingTag = await db.query.tags.findFirst({ where: and(eq(tags.id, id), eq(tags.shopId, shopId)) });
	if (!existingTag) throw new Error("Tag not found.");
	if (updateData.slug && updateData.slug !== existingTag.slug) {
		if (await db.query.tags.findFirst({ where: and(eq(tags.shopId, shopId), eq(tags.slug, updateData.slug)) })) throw new Error("A tag with this slug already exists in this shop.");
	}
	const updateValues = {};
	if (updateData.name !== void 0) updateValues.name = updateData.name;
	if (updateData.slug !== void 0) updateValues.slug = updateData.slug;
	if (updateData.description !== void 0) updateValues.description = updateData.description;
	if (updateData.sortOrder !== void 0) updateValues.sortOrder = updateData.sortOrder;
	if (updateData.isActive !== void 0) updateValues.isActive = updateData.isActive;
	if (Object.keys(updateValues).length === 0) return {
		success: true,
		tag: await fetchTagWithRelations(existingTag, { includeShopInfo: false })
	};
	const [updatedTag] = await db.update(tags).set(updateValues).where(eq(tags.id, id)).returning();
	if (!updatedTag) throw new Error("Failed to update tag.");
	return {
		success: true,
		tag: await fetchTagWithRelations(updatedTag, { includeShopInfo: false })
	};
});
var deleteTag_createServerFn_handler = createServerRpc({
	id: "75b2829599b108257a73bf7e2448b03319aa873af7fd3b6066d8e1a634518f26",
	name: "deleteTag",
	filename: "src/lib/functions/vendor/tag.ts"
}, (opts) => deleteTag.__executeServer(opts));
var deleteTag = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(vendorTagsQuerySchema.pick({ shopId: true }).extend({ id: string().min(1, "Tag ID is required") })).handler(deleteTag_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session.user.id;
	const { id, shopId } = data;
	await requireShopAccess(userId, shopId);
	const existingTag = await db.query.tags.findFirst({ where: and(eq(tags.id, id), eq(tags.shopId, shopId)) });
	if (!existingTag) throw new Error("Tag not found.");
	if ((existingTag.productCount ?? 0) > 0) throw new Error("Cannot delete a tag that is assigned to products. Please remove it from products first.");
	await db.delete(tags).where(eq(tags.id, id));
	return {
		success: true,
		message: "Tag deleted successfully"
	};
});
//#endregion
export { createTag_createServerFn_handler, deleteTag_createServerFn_handler, getTagById_createServerFn_handler, getTags_createServerFn_handler, updateTag_createServerFn_handler };
