import { t as __exportAll } from "./rolldown-runtime-BYF0ZUUg.mjs";
import { o as stripe } from "./stripe-CYiDuXYN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/connect-DkFD0Nte.js
var connect_exports = /* @__PURE__ */ __exportAll({
	constructWebhookEvent: () => constructWebhookEvent,
	createAccountLink: () => createAccountLink,
	createConnectedAccount: () => createConnectedAccount,
	createDestinationCharge: () => createDestinationCharge,
	createLoginLink: () => createLoginLink,
	deleteConnectedAccount: () => deleteConnectedAccount,
	getAccountStatus: () => getAccountStatus
});
async function createConnectedAccount(email, businessName, metadata) {
	if (!stripe) throw new Error("Stripe is not configured");
	const isTestMode = process.env.STRIPE_SECRET_KEY?.startsWith("sk_test_");
	const accountData = {
		type: "express",
		email,
		business_profile: businessName ? { name: businessName } : void 0,
		metadata,
		capabilities: {
			card_payments: { requested: true },
			transfers: { requested: true }
		}
	};
	if (isTestMode) {
		accountData.business_type = "individual";
		accountData.individual = {
			email,
			first_name: "Test",
			last_name: "Vendor",
			dob: {
				day: 1,
				month: 1,
				year: 1990
			},
			address: {
				line1: "123 Test Street",
				city: "San Francisco",
				state: "CA",
				postal_code: "94111",
				country: "US"
			},
			ssn_last_4: "0000",
			phone: "+16505551234"
		};
	}
	return await stripe.accounts.create(accountData);
}
async function createAccountLink(connectedAccountId, refreshUrl, returnUrl) {
	if (!stripe) throw new Error("Stripe is not configured");
	return (await stripe.accountLinks.create({
		account: connectedAccountId,
		refresh_url: refreshUrl,
		return_url: returnUrl,
		type: "account_onboarding"
	})).url;
}
async function getAccountStatus(connectedAccountId) {
	if (!stripe) throw new Error("Stripe is not configured");
	const account = await stripe.accounts.retrieve(connectedAccountId);
	return {
		detailsSubmitted: account.details_submitted,
		chargesEnabled: account.charges_enabled,
		payoutsEnabled: account.payouts_enabled,
		requirements: account.requirements ?? null
	};
}
async function createLoginLink(connectedAccountId) {
	if (!stripe) throw new Error("Stripe is not configured");
	return (await stripe.accounts.createLoginLink(connectedAccountId)).url;
}
async function deleteConnectedAccount(connectedAccountId) {
	if (!stripe) throw new Error("Stripe is not configured");
	return stripe.accounts.del(connectedAccountId);
}
async function createDestinationCharge(amount, currency, connectedAccountId, applicationFeeAmount, metadata) {
	if (!stripe) throw new Error("Stripe is not configured");
	const paymentIntent = await stripe.paymentIntents.create({
		amount: Math.round(amount),
		currency: currency.toLowerCase(),
		automatic_payment_methods: { enabled: true },
		transfer_data: { destination: connectedAccountId },
		application_fee_amount: Math.round(applicationFeeAmount),
		metadata
	});
	return {
		clientSecret: paymentIntent.client_secret,
		paymentIntentId: paymentIntent.id
	};
}
/**
* Verify a webhook signature and construct the event
*/
function constructWebhookEvent(payload, signature, webhookSecret) {
	if (!stripe) throw new Error("Stripe is not configured");
	return stripe.webhooks.constructEvent(payload, signature, webhookSecret);
}
//#endregion
export { createDestinationCharge as a, createConnectedAccount as i, constructWebhookEvent as n, createLoginLink as o, createAccountLink as r, getAccountStatus as s, connect_exports as t };
