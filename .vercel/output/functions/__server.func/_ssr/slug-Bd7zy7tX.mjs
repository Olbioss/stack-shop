//#region node_modules/.nitro/vite/services/ssr/assets/slug-Bd7zy7tX.js
/**
* Slug Utilities
*
* Reusable slug generation functions for the multi-vendor marketplace.
* Used for creating URL-friendly identifiers for stores, products, categories, etc.
*/
/**
* Generate a URL-friendly slug from a given name/text
*
* @param name - The text to convert to a slug
* @param options - Optional configuration
* @returns A URL-friendly slug string
*
* @example
* generateSlug('My Awesome Store') // "my-awesome-store-a1b2c3"
* generateSlug('Electronics 2024!') // "electronics-2024-d4e5f6"
* generateSlug('Café & Bakery', { separator: '_' }) // "cafe_bakery_g7h8i9"
*/
function generateSlug(name, options = {}) {
	const { separator = "-", unique = true, suffixLength = 6, customSuffix } = options;
	let slug = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/[\s_]+/g, separator).replace(new RegExp(`${separator}+`, "g"), separator).replace(new RegExp(`^${separator}|${separator}$`, "g"), "");
	if (customSuffix) slug = `${slug}${separator}${customSuffix}`;
	else if (unique) {
		const randomSuffix = crypto.randomUUID().slice(0, suffixLength);
		slug = `${slug}${separator}${randomSuffix}`;
	}
	return slug;
}
//#endregion
export { generateSlug as t };
