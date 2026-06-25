import { Gt as string, Ht as object } from "../_libs/@better-auth/core+[...].mjs";
import { r as createServerFn } from "./ssr.mjs";
import { s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { c as db, f as orders, p as payments } from "./db-DORSFQFR.mjs";
import { t as optionalAuthMiddleware } from "./optional-auth-D6kWcuST.mjs";
import { t as createServerRpc } from "./createServerRpc-D97cGqBD.mjs";
import { o as stripe } from "./stripe-CYiDuXYN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/invoice-BhWisPAu.js
var getInvoiceUrlSchema = object({
	orderId: string(),
	paymentIntentId: string().optional()
});
/**
* Get the invoice/receipt URL for an order
*/
var getInvoiceUrl_createServerFn_handler = createServerRpc({
	id: "6847ea9a4634a90f932f170614f284865075c9842546864bce5cbd03c1edeeed",
	name: "getInvoiceUrl",
	filename: "src/lib/functions/store/invoice.ts"
}, (opts) => getInvoiceUrl.__executeServer(opts));
var getInvoiceUrl = createServerFn({ method: "POST" }).middleware([optionalAuthMiddleware]).inputValidator(getInvoiceUrlSchema).handler(getInvoiceUrl_createServerFn_handler, async ({ context, data }) => {
	const { orderId, paymentIntentId } = data;
	const userId = context.session?.user?.id;
	const userRole = (context.session?.user)?.role;
	const payment = await db.query.payments.findFirst({ where: eq(payments.orderId, orderId) });
	if (!payment || !payment.stripePaymentIntentId) throw new Error("No payment found for this order");
	const order = await db.query.orders.findFirst({ where: eq(orders.id, orderId) });
	if (!order) throw new Error("Order not found");
	if (userId) {
		if (!(order.userId === userId || order.guestEmail && order.guestEmail === context.session?.user?.email) && !(userRole === "admin")) throw new Error("You do not have permission to view this invoice");
	} else {
		if (!paymentIntentId) throw new Error("Unauthorized");
		if (order.userId) throw new Error("Unauthorized");
		if (payment.stripePaymentIntentId !== paymentIntentId) throw new Error("Unauthorized");
	}
	if (!stripe) throw new Error("Stripe is not configured");
	const paymentIntent = await stripe.paymentIntents.retrieve(payment.stripePaymentIntentId, { expand: ["latest_charge"] });
	if (!paymentIntent) throw new Error("Payment intent not found in Stripe");
	const charge = paymentIntent.latest_charge;
	if (charge?.receipt_url) return { url: charge.receipt_url };
	const pi = paymentIntent;
	if (pi.invoice) {
		const invoiceId = typeof pi.invoice === "string" ? pi.invoice : pi.invoice.id;
		const invoice = await stripe.invoices.retrieve(invoiceId);
		if (invoice.hosted_invoice_url) return { url: invoice.hosted_invoice_url };
	}
	throw new Error("No invoice or receipt available for this order");
});
//#endregion
export { getInvoiceUrl_createServerFn_handler };
