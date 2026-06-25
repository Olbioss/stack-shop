import { r as createServerFn } from "./ssr.mjs";
import { t as createSsrRpc } from "./createSsrRpc-CXFXGZZ3.mjs";
import { a as getProductByIdSchema, i as getFeaturedProductsSchema, l as storeProductsQuerySchema, o as getProductBySlugSchema, s as getRelatedProductsSchema } from "./product-query-DTSuSPZY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-Yly5xhyF.js
/**
* Transform NormalizedProduct to StoreProduct by removing sensitive fields
*/
var getStoreProducts = createServerFn({ method: "GET" }).inputValidator(storeProductsQuerySchema).handler(createSsrRpc("4facdc37369dcfd178c84943309971bd0a4edb6d5552d354b6a8077b6e297491"));
var getStoreProductBySlug = createServerFn({ method: "GET" }).inputValidator(getProductBySlugSchema).handler(createSsrRpc("f91411c8767c9c04ccef425a0be6149df18febcb289782cfe8bb1b5d482f9a8c"));
/**
* Get a single product by ID
* Only returns if the product is active and published
*/
var getStoreProductById = createServerFn({ method: "GET" }).inputValidator(getProductByIdSchema).handler(createSsrRpc("efdc0326ba4e7e2b6efdcfca0c0141e1d1cfc940e187a30982dbaf30579ae6fa"));
/**
* Get featured products for homepage or promotional sections
*/
var getFeaturedProducts = createServerFn({ method: "GET" }).inputValidator(getFeaturedProductsSchema).handler(createSsrRpc("0395b94cc1a6535b6b1672691acf0c005b8d0ac08917d2d4bb23c4d52c8d583a"));
/**
* Get related products based on category and brand
* Used on product detail pages for cross-selling
*/
var getRelatedProducts = createServerFn({ method: "GET" }).inputValidator(getRelatedProductsSchema).handler(createSsrRpc("075fc46c25bf5a6f06f653cc69e04797a973ad8068c7105c04d62acba1c758f3"));
//#endregion
export { getStoreProducts as a, getStoreProductBySlug as i, getRelatedProducts as n, getStoreProductById as r, getFeaturedProducts as t };
