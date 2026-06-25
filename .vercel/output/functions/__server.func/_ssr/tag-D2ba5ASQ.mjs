import { r as createServerFn } from "./ssr.mjs";
import { f as inArray, n as count, s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { r as shops } from "./shop-schema-C6uNILQs.mjs";
import { p as productTags, y as tags } from "./products-schema-BRxXUpzG.mjs";
import { c as db } from "./db-DORSFQFR.mjs";
import { t as adminMiddleware } from "./admin-CYCFP3zk.mjs";
import { t as createServerRpc } from "./createServerRpc-D97cGqBD.mjs";
import { n as createSuccessResponse, r as emptyPaginatedResponse } from "./api-response-CYQsbkXz.mjs";
import { a as toggleTagActiveSchema, i as getTagByIdSchema, r as deleteTagSchema, t as adminTagsQuerySchema } from "./tag-query-B-OjxzSS.mjs";
import { n as fetchTagWithRelations, t as executeTagQuery } from "./tag-query-helpers-DL8k2O95.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tag-D2ba5ASQ.js
/**
* Admin Tag Server Functions
*
* Server functions for tag management in the admin dashboard.
* Admins can view and manage ALL tags across all vendors and shops.
*/
var getAdminTags_createServerFn_handler = createServerRpc({
	id: "f13d708f47c4bcd371dc7e84d9f3ca4c41da49ab6bea71aec8906008a26bd74f",
	name: "getAdminTags",
	filename: "src/lib/functions/admin/tag.ts"
}, (opts) => getAdminTags.__executeServer(opts));
var getAdminTags = createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(adminTagsQuerySchema).handler(getAdminTags_createServerFn_handler, async ({ data }) => {
	const { shopId, vendorId, limit, offset, search, isActive, sortBy, sortDirection } = data;
	const baseConditions = [];
	if (shopId) baseConditions.push(eq(tags.shopId, shopId));
	if (vendorId) {
		const vendorShops = await db.select({ id: shops.id }).from(shops).where(eq(shops.vendorId, vendorId));
		if (vendorShops.length > 0) baseConditions.push(inArray(tags.shopId, vendorShops.map((s) => s.id)));
		else return emptyPaginatedResponse(limit, offset);
	}
	return executeTagQuery({
		baseConditions,
		search,
		isActive,
		limit,
		offset,
		sortBy,
		sortDirection,
		includeShopInfo: true
	});
});
var getAdminTagById_createServerFn_handler = createServerRpc({
	id: "f78fa2f90c9646720f3104ea7a657cb22a9636bdabe399f56085d6380740f3ea",
	name: "getAdminTagById",
	filename: "src/lib/functions/admin/tag.ts"
}, (opts) => getAdminTagById.__executeServer(opts));
var getAdminTagById = createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(getTagByIdSchema).handler(getAdminTagById_createServerFn_handler, async ({ data }) => {
	const { id } = data;
	const [tag] = await db.select().from(tags).where(eq(tags.id, id));
	if (!tag) throw new Error("Tag not found.");
	return { tag: await fetchTagWithRelations(tag, { includeShopInfo: true }) };
});
var toggleAdminTagActive_createServerFn_handler = createServerRpc({
	id: "6ac389aea3648e98926f5c381ec85975e93ba796be8a3a9af6e2c1e3240f296e",
	name: "toggleAdminTagActive",
	filename: "src/lib/functions/admin/tag.ts"
}, (opts) => toggleAdminTagActive.__executeServer(opts));
var toggleAdminTagActive = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(toggleTagActiveSchema).handler(toggleAdminTagActive_createServerFn_handler, async ({ data }) => {
	const { id, isActive } = data;
	const [existingTag] = await db.select().from(tags).where(eq(tags.id, id));
	if (!existingTag) throw new Error("Tag not found.");
	await db.update(tags).set({ isActive }).where(eq(tags.id, id));
	return createSuccessResponse(isActive ? "Tag activated" : "Tag deactivated");
});
var deleteAdminTag_createServerFn_handler = createServerRpc({
	id: "15e45ad8a73a280d6e77def1d9d6a5a43ffb9dd833b4f6ffe9a5295fa1cd0884",
	name: "deleteAdminTag",
	filename: "src/lib/functions/admin/tag.ts"
}, (opts) => deleteAdminTag.__executeServer(opts));
var deleteAdminTag = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(deleteTagSchema).handler(deleteAdminTag_createServerFn_handler, async ({ data }) => {
	const { id } = data;
	const [existingTag] = await db.select().from(tags).where(eq(tags.id, id));
	if (!existingTag) throw new Error("Tag not found.");
	const [productCount] = await db.select({ count: count() }).from(productTags).where(eq(productTags.tagId, id));
	if ((productCount?.count ?? 0) > 0) throw new Error("Cannot delete a tag that has products. Please remove products from this tag first.");
	await db.delete(tags).where(eq(tags.id, id));
	return createSuccessResponse("Tag deleted successfully");
});
//#endregion
export { deleteAdminTag_createServerFn_handler, getAdminTagById_createServerFn_handler, getAdminTags_createServerFn_handler, toggleAdminTagActive_createServerFn_handler };
