import { Gt as string, Ht as object } from "../_libs/@better-auth/core+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wishlist-Dtqzq8Ig.js
/**
* Wishlist Validators
*
* Zod validation schemas for wishlist operations.
*/
var toggleWishlistSchema = object({ productId: string().min(1, "Product ID is required") });
//#endregion
export { toggleWishlistSchema as t };
