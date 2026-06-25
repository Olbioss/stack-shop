import { t as Stripe } from "../_libs/stripe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/stripe-CYiDuXYN.js
var stripeSecretKey = process.env.STRIPE_SECRET_KEY || "";
if (!stripeSecretKey) console.warn("STRIPE_SECRET_KEY is not set. Payment functionality will be disabled.");
var stripe = stripeSecretKey ? new Stripe(stripeSecretKey, { apiVersion: "2026-04-22.dahlia" }) : null;
function isStripeConfigured() {
	return stripe !== null;
}
async function createPaymentIntent(amount, currency = "usd", metadata) {
	if (!stripe) throw new Error("Stripe is not configured");
	const paymentIntent = await stripe.paymentIntents.create({
		amount: Math.round(amount),
		currency: currency.toLowerCase(),
		automatic_payment_methods: { enabled: true },
		metadata
	});
	return {
		clientSecret: paymentIntent.client_secret,
		paymentIntentId: paymentIntent.id
	};
}
async function getPaymentIntent(paymentIntentId) {
	if (!stripe) throw new Error("Stripe is not configured");
	return stripe.paymentIntents.retrieve(paymentIntentId);
}
async function createRefund(paymentIntentId, amount) {
	if (!stripe) throw new Error("Stripe is not configured");
	return stripe.refunds.create({
		payment_intent: paymentIntentId,
		amount: amount ? Math.round(amount) : void 0
	});
}
function dollarsToCents(amount) {
	return Math.round(amount * 100);
}
//#endregion
export { isStripeConfigured as a, getPaymentIntent as i, createRefund as n, stripe as o, dollarsToCents as r, createPaymentIntent as t };
