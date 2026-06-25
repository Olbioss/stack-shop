import { Gt as string, Ht as object } from "../_libs/@better-auth/core+[...].mjs";
import { t as __exportAll } from "./rolldown-runtime-BYF0ZUUg.mjs";
import { r as createServerFn } from "./ssr.mjs";
import { t as createSsrRpc } from "./createSsrRpc-CXFXGZZ3.mjs";
import { t as authMiddleware } from "./auth-BM1BErpv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/vendor-connect-MK7Ab2Xv.js
/**
* Vendor Connect Server Functions
*
* Server functions for vendor Stripe Connect operations.
* Handles onboarding, status checking, and dashboard access.
*/
var vendor_connect_exports = /* @__PURE__ */ __exportAll({
	disconnectStripeAccount: () => disconnectStripeAccount,
	getStripeDashboardLink: () => getStripeDashboardLink,
	getVendorStripeStatus: () => getVendorStripeStatus,
	startStripeOnboarding: () => startStripeOnboarding
});
var startOnboardingSchema = object({
	shopSlug: string(),
	returnPath: string().optional()
});
var getStatusSchema = object({ shopSlug: string() });
/**
* Start or continue Stripe Connect onboarding
* Returns a URL to redirect the vendor to Stripe's hosted onboarding
*/
var startStripeOnboarding = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(startOnboardingSchema).handler(createSsrRpc("85c3f1772072e6228b648c442b332a5ab1ce66e1b4e4a56577a4007587538a4c"));
/**
* Get the current Stripe Connect status for a vendor
*/
var getVendorStripeStatus = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(getStatusSchema).handler(createSsrRpc("756d3100dac0b27bf66ab74c9fede1d1d125edc27e9d903ffebae07294ebe6b2"));
/**
* Get a login link for the Stripe Express Dashboard
*/
var getStripeDashboardLink = createServerFn({ method: "POST" }).middleware([authMiddleware]).handler(createSsrRpc("32c7f0ec3787dfc02d0bb9db3c138531651d3ee6b6e043e32b47d4606e0d1524"));
/**
* Disconnect and delete the vendor's Stripe Connect account
*/
var disconnectStripeAccount = createServerFn({ method: "POST" }).middleware([authMiddleware]).handler(createSsrRpc("4972f4be4d5ea269f15d62867a558d5fb4ab0b2c5e666c6440974763736d88ed"));
//#endregion
export { vendor_connect_exports as i, getVendorStripeStatus as n, startStripeOnboarding as r, getStripeDashboardLink as t };
