import { s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { r as shops, s as vendors } from "./shop-schema-C6uNILQs.mjs";
import { c as db } from "./db-DORSFQFR.mjs";
import { r as createServerFn } from "./ssr.mjs";
import { ln as string, on as object } from "../_libs/@better-auth/core+[...].mjs";
import { t as authMiddleware } from "./auth-BM1BErpv.mjs";
import { t as createServerRpc } from "./createServerRpc-D97cGqBD.mjs";
import { i as createConnectedAccount, o as createLoginLink, r as createAccountLink, s as getAccountStatus } from "./connect-DkFD0Nte.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/vendor-connect-Bbi9sslW.js
/**
* Vendor Connect Server Functions
*
* Server functions for vendor Stripe Connect operations.
* Handles onboarding, status checking, and dashboard access.
*/
var startOnboardingSchema = object({
	shopSlug: string(),
	returnPath: string().optional()
});
var getStatusSchema = object({ shopSlug: string() });
/**
* Start or continue Stripe Connect onboarding
* Returns a URL to redirect the vendor to Stripe's hosted onboarding
*/
var startStripeOnboarding_createServerFn_handler = createServerRpc({
	id: "85c3f1772072e6228b648c442b332a5ab1ce66e1b4e4a56577a4007587538a4c",
	name: "startStripeOnboarding",
	filename: "src/lib/functions/vendor/vendor-connect.ts"
}, (opts) => startStripeOnboarding.__executeServer(opts));
var startStripeOnboarding = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(startOnboardingSchema).handler(startStripeOnboarding_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session?.user?.id;
	const { shopSlug, returnPath } = data;
	if (!userId) throw new Error("Unauthorized");
	const vendor = await db.query.vendors.findFirst({ where: eq(vendors.userId, userId) });
	if (!vendor) throw new Error("Vendor profile not found");
	const shop = await db.query.shops.findFirst({ where: eq(shops.slug, shopSlug) });
	if (!shop || shop.vendorId !== vendor.id) throw new Error("Shop not found or unauthorized");
	let accountId = vendor.stripeConnectedAccountId;
	if (!accountId) {
		const account = await createConnectedAccount(vendor.contactEmail || context.session.user.email, vendor.businessName || shop.name, {
			vendorId: vendor.id,
			shopSlug
		});
		if (!account) throw new Error("Failed to create Stripe account");
		accountId = account.id;
		await db.update(vendors).set({ stripeConnectedAccountId: accountId }).where(eq(vendors.id, vendor.id));
	}
	const baseUrl = process.env.VITE_APP_URL || "http://localhost:3000";
	const path = returnPath || "settings";
	const separator = path.includes("?") ? "&" : "?";
	const returnUrl = `${baseUrl}/shop/${shopSlug}/${path}${separator}stripe_onboarding=success`;
	const refreshUrl = `${baseUrl}/shop/${shopSlug}/${path}${separator}stripe_onboarding=refresh`;
	return { url: await createAccountLink(accountId, refreshUrl, returnUrl) };
});
var getVendorStripeStatus_createServerFn_handler = createServerRpc({
	id: "756d3100dac0b27bf66ab74c9fede1d1d125edc27e9d903ffebae07294ebe6b2",
	name: "getVendorStripeStatus",
	filename: "src/lib/functions/vendor/vendor-connect.ts"
}, (opts) => getVendorStripeStatus.__executeServer(opts));
var getVendorStripeStatus = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(getStatusSchema).handler(getVendorStripeStatus_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session?.user?.id;
	data.shopSlug;
	if (!userId) throw new Error("Unauthorized");
	const vendor = await db.query.vendors.findFirst({ where: eq(vendors.userId, userId) });
	if (!vendor) throw new Error("Vendor profile not found");
	if (!vendor.stripeConnectedAccountId) return {
		isConnected: false,
		onboardingComplete: false,
		chargesEnabled: false,
		payoutsEnabled: false,
		accountId: null,
		requiresAction: false
	};
	const status = await getAccountStatus(vendor.stripeConnectedAccountId);
	if (!status) return {
		isConnected: true,
		onboardingComplete: vendor.stripeOnboardingComplete ?? false,
		chargesEnabled: vendor.stripeChargesEnabled ?? false,
		payoutsEnabled: vendor.stripePayoutsEnabled ?? false,
		accountId: vendor.stripeConnectedAccountId,
		requiresAction: false
	};
	const requiresAction = !status.detailsSubmitted || (status.requirements?.currently_due?.length ?? 0) > 0;
	return {
		isConnected: true,
		onboardingComplete: status.detailsSubmitted,
		chargesEnabled: status.chargesEnabled,
		payoutsEnabled: status.payoutsEnabled,
		accountId: vendor.stripeConnectedAccountId,
		requiresAction
	};
});
var getStripeDashboardLink_createServerFn_handler = createServerRpc({
	id: "32c7f0ec3787dfc02d0bb9db3c138531651d3ee6b6e043e32b47d4606e0d1524",
	name: "getStripeDashboardLink",
	filename: "src/lib/functions/vendor/vendor-connect.ts"
}, (opts) => getStripeDashboardLink.__executeServer(opts));
var getStripeDashboardLink = createServerFn({ method: "POST" }).middleware([authMiddleware]).handler(getStripeDashboardLink_createServerFn_handler, async ({ context }) => {
	const userId = context.session?.user?.id;
	if (!userId) throw new Error("Unauthorized");
	const vendor = await db.query.vendors.findFirst({ where: eq(vendors.userId, userId) });
	if (!vendor) throw new Error("Vendor profile not found");
	if (!vendor.stripeConnectedAccountId) throw new Error("No Stripe account connected");
	if (!vendor.stripeOnboardingComplete) throw new Error("Please complete Stripe onboarding first");
	return { url: await createLoginLink(vendor.stripeConnectedAccountId) };
});
var disconnectStripeAccount_createServerFn_handler = createServerRpc({
	id: "4972f4be4d5ea269f15d62867a558d5fb4ab0b2c5e666c6440974763736d88ed",
	name: "disconnectStripeAccount",
	filename: "src/lib/functions/vendor/vendor-connect.ts"
}, (opts) => disconnectStripeAccount.__executeServer(opts));
var disconnectStripeAccount = createServerFn({ method: "POST" }).middleware([authMiddleware]).handler(disconnectStripeAccount_createServerFn_handler, async ({ context }) => {
	const userId = context.session?.user?.id;
	if (!userId) throw new Error("Unauthorized");
	const vendor = await db.query.vendors.findFirst({ where: eq(vendors.userId, userId) });
	if (!vendor) throw new Error("Vendor profile not found");
	if (!vendor.stripeConnectedAccountId) throw new Error("No Stripe account connected");
	const { deleteConnectedAccount } = await import("./connect-DkFD0Nte.mjs").then((n) => n.t);
	await deleteConnectedAccount(vendor.stripeConnectedAccountId);
	await db.update(vendors).set({
		stripeConnectedAccountId: null,
		stripeOnboardingComplete: false,
		stripeChargesEnabled: false,
		stripePayoutsEnabled: false
	}).where(eq(vendors.id, vendor.id));
	return { success: true };
});
//#endregion
export { disconnectStripeAccount_createServerFn_handler, getStripeDashboardLink_createServerFn_handler, getVendorStripeStatus_createServerFn_handler, startStripeOnboarding_createServerFn_handler };
