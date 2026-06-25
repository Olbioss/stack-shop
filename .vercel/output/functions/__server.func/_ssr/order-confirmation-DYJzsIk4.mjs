import { s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { c as db, f as orders, l as emailDeliveries } from "./db-DORSFQFR.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as v4 } from "../_libs/uuid.mjs";
import { t as Body } from "../_libs/react-email__body.mjs";
import { t as Column } from "../_libs/react-email__column.mjs";
import { t as Container } from "../_libs/react-email__container.mjs";
import { t as Head } from "../_libs/react-email__head.mjs";
import { t as Heading } from "../_libs/react-email__heading.mjs";
import { t as Hr } from "../_libs/react-email__hr.mjs";
import { t as Html } from "../_libs/react-email__html.mjs";
import { t as Img } from "../_libs/react-email__img.mjs";
import { t as Link } from "../_libs/react-email__link.mjs";
import { t as Preview } from "../_libs/react-email__preview.mjs";
import { t as Row } from "../_libs/react-email__row.mjs";
import { t as Section } from "../_libs/react-email__section.mjs";
import { t as Text } from "../_libs/react-email__text.mjs";
import { n as sendEmail } from "./auth-DHeFNCFg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/order-confirmation-DYJzsIk4.js
var import_jsx_runtime = require_jsx_runtime();
function OrderConfirmationEmail({ orderNumber = "ORD-ABC123", customerName = "John", orderDate = (/* @__PURE__ */ new Date()).toLocaleDateString(), items = [{
	name: "Sample Product",
	quantity: 1,
	price: 29.99,
	image: null
}], subtotal = 29.99, tax = 1.5, shipping = 0, total = 31.49, shippingAddress = {
	street: "123 Main St",
	city: "San Francisco",
	state: "CA",
	zip: "94102",
	country: "USA"
}, shopName = "Shop Stack Store", orderLink = "#", estimatedDeliveryTimeframe, supportEmail = "support@shopstack.com", supportPhone, trackingUrl }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Html, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Preview, { children: [
			"Your order ",
			orderNumber,
			" has been confirmed!"
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {
			style: main,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				style: container,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						style: headerSection,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
							style: logo,
							children: "Shop Stack"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
						style: content,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
								as: "h1",
								style: h1,
								children: "Order Confirmed! 🎉"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
								style: heroText,
								children: [
									"Hi ",
									customerName,
									", thank you for your order from ",
									shopName,
									"!"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
								style: text,
								children: [
									"Your order ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: orderNumber }),
									" has been confirmed and will be processed soon. We'll send you another email when it ships."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
								style: orderBox,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Column, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
									style: orderLabel,
									children: "Order Number"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
									style: orderValue,
									children: orderNumber
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Column, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
									style: orderLabel,
									children: "Order Date"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
									style: orderValue,
									children: orderDate
								})] })] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hr, { style: hr }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
								as: "h2",
								style: h2,
								children: "Order Items"
							}),
							items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
								style: itemRow,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
										style: itemImageCol,
										children: item.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Img, {
											src: item.image,
											alt: item.name,
											width: 64,
											height: 64,
											style: itemImage
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: itemImagePlaceholder })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Column, {
										style: itemDetailsCol,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
											style: itemName,
											children: item.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
											style: itemQty,
											children: ["Qty: ", item.quantity]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
										style: itemPriceCol,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
											style: itemPrice,
											children: ["$", (item.price * item.quantity).toFixed(2)]
										})
									})
								] })
							}, index)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hr, { style: hr }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
								style: summarySection,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
										style: summaryLabelCol,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
											style: summaryLabel,
											children: "Subtotal"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
										style: summaryValueCol,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
											style: summaryValue,
											children: ["$", subtotal.toFixed(2)]
										})
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
										style: summaryLabelCol,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
											style: summaryLabel,
											children: "Tax"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
										style: summaryValueCol,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
											style: summaryValue,
											children: ["$", tax.toFixed(2)]
										})
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
										style: summaryLabelCol,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
											style: summaryLabel,
											children: "Shipping"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
										style: summaryValueCol,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
											style: summaryValue,
											children: shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`
										})
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hr, { style: hrLight }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
										style: summaryLabelCol,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
											style: totalLabel,
											children: "Total"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
										style: summaryValueCol,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
											style: totalValue,
											children: ["$", total.toFixed(2)]
										})
									})] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hr, { style: hr }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
								as: "h2",
								style: h2,
								children: "Shipping Address"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
								style: addressText,
								children: [
									shippingAddress.street,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									shippingAddress.city,
									", ",
									shippingAddress.state,
									" ",
									shippingAddress.zip,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									shippingAddress.country
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hr, { style: hr }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
								as: "h2",
								style: h2,
								children: "Estimated Delivery"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
								style: text,
								children: estimatedDeliveryTimeframe ? `Estimated delivery: ${estimatedDeliveryTimeframe}.` : "We'll share an estimated delivery timeframe once your order ships."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
								as: "h2",
								style: h2,
								children: "Tracking"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
								style: text,
								children: trackingUrl ? "Track your order status using the link below." : "When your order ships, we'll email you tracking details."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
								style: ctaSection,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									href: trackingUrl || orderLink,
									style: button,
									children: trackingUrl ? "Track Order" : "View Order Details"
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
						style: footer,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
							style: footerText,
							children: [
								"If you have any questions, reply to this email or contact us at",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									href: `mailto:${supportEmail}`,
									style: link,
									children: supportEmail
								}),
								supportPhone ? ` or call ${supportPhone}.` : "."
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
							style: footerCopyright,
							children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" Shop Stack. All rights reserved."
							]
						})]
					})
				]
			})
		})
	] });
}
var main = {
	backgroundColor: "#f6f9fc",
	fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Ubuntu, sans-serif"
};
var container = {
	backgroundColor: "#ffffff",
	margin: "0 auto",
	padding: "0",
	marginBottom: "64px",
	maxWidth: "600px",
	borderRadius: "8px",
	overflow: "hidden",
	boxShadow: "0 4px 6px rgba(0, 0, 0, 0.07)"
};
var headerSection = {
	backgroundColor: "#18181b",
	padding: "32px 40px",
	textAlign: "center"
};
var logo = {
	color: "#ffffff",
	fontSize: "28px",
	fontWeight: "700",
	margin: "0",
	letterSpacing: "-0.5px"
};
var content = { padding: "40px 40px 32px" };
var h1 = {
	color: "#18181b",
	fontSize: "28px",
	fontWeight: "700",
	margin: "0 0 12px 0",
	lineHeight: "1.3"
};
var h2 = {
	color: "#18181b",
	fontSize: "18px",
	fontWeight: "600",
	margin: "24px 0 16px 0"
};
var heroText = {
	color: "#52525b",
	fontSize: "16px",
	lineHeight: "26px",
	margin: "0 0 8px 0"
};
var text = {
	color: "#71717a",
	fontSize: "14px",
	lineHeight: "24px",
	margin: "0 0 24px 0"
};
var orderBox = {
	backgroundColor: "#f4f4f5",
	borderRadius: "8px",
	padding: "20px 24px",
	margin: "24px 0"
};
var orderLabel = {
	color: "#71717a",
	fontSize: "12px",
	fontWeight: "500",
	textTransform: "uppercase",
	letterSpacing: "0.5px",
	margin: "0 0 4px 0"
};
var orderValue = {
	color: "#18181b",
	fontSize: "16px",
	fontWeight: "600",
	margin: "0"
};
var hr = {
	borderColor: "#e4e4e7",
	margin: "24px 0"
};
var hrLight = {
	borderColor: "#e4e4e7",
	margin: "12px 0"
};
var itemRow = { marginBottom: "16px" };
var itemImageCol = {
	width: "80px",
	verticalAlign: "top"
};
var itemImage = {
	borderRadius: "8px",
	objectFit: "cover"
};
var itemImagePlaceholder = {
	width: "64px",
	height: "64px",
	backgroundColor: "#e4e4e7",
	borderRadius: "8px"
};
var itemDetailsCol = {
	verticalAlign: "top",
	paddingLeft: "16px"
};
var itemName = {
	color: "#18181b",
	fontSize: "14px",
	fontWeight: "500",
	margin: "0 0 4px 0"
};
var itemQty = {
	color: "#71717a",
	fontSize: "13px",
	margin: "0"
};
var itemPriceCol = {
	textAlign: "right",
	verticalAlign: "top"
};
var itemPrice = {
	color: "#18181b",
	fontSize: "14px",
	fontWeight: "600",
	margin: "0"
};
var summarySection = { padding: "0" };
var summaryLabelCol = { width: "70%" };
var summaryValueCol = {
	width: "30%",
	textAlign: "right"
};
var summaryLabel = {
	color: "#71717a",
	fontSize: "14px",
	margin: "4px 0"
};
var summaryValue = {
	color: "#18181b",
	fontSize: "14px",
	margin: "4px 0"
};
var totalLabel = {
	color: "#18181b",
	fontSize: "16px",
	fontWeight: "600",
	margin: "4px 0"
};
var totalValue = {
	color: "#18181b",
	fontSize: "20px",
	fontWeight: "700",
	margin: "4px 0"
};
var addressText = {
	color: "#52525b",
	fontSize: "14px",
	lineHeight: "22px",
	margin: "0"
};
var ctaSection = {
	textAlign: "center",
	marginTop: "32px"
};
var button = {
	backgroundColor: "#18181b",
	borderRadius: "8px",
	color: "#ffffff",
	display: "inline-block",
	fontSize: "14px",
	fontWeight: "600",
	padding: "14px 28px",
	textDecoration: "none"
};
var footer = {
	backgroundColor: "#fafafa",
	borderTop: "1px solid #e4e4e7",
	padding: "24px 40px",
	textAlign: "center"
};
var footerText = {
	color: "#71717a",
	fontSize: "13px",
	lineHeight: "22px",
	margin: "0 0 12px 0"
};
var footerCopyright = {
	color: "#a1a1aa",
	fontSize: "12px",
	margin: "0"
};
var link = {
	color: "#18181b",
	textDecoration: "underline"
};
function getEstimatedDeliveryTimeframe(shippingMethod) {
	if (shippingMethod === "express") return "2–3 business days";
	return "5–7 business days";
}
async function sleep(ms) {
	await new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}
function getRetryDelayMs(attemptNumber) {
	if (attemptNumber <= 1) return 0;
	const baseDelayMs = 250;
	const maxDelayMs = 2e3;
	const exponent = attemptNumber - 2;
	return Math.min(maxDelayMs, baseDelayMs * 2 ** exponent);
}
function getAppUrl() {
	return process.env.APP_URL ?? process.env.VITE_APP_URL ?? process.env.VITE_BETTER_AUTH_URL ?? "http://localhost:3000";
}
function toErrorString(err) {
	if (err instanceof Error) return err.message;
	try {
		return JSON.stringify(err);
	} catch {
		return String(err);
	}
}
async function sendOrderConfirmationEmailForOrderId(orderId, deps) {
	const sendEmailFn = deps?.sendEmailFn ?? sendEmail;
	const now = deps?.now ?? (() => /* @__PURE__ */ new Date());
	const maxAttempts = deps?.maxAttempts ?? 3;
	const sleepFn = deps?.sleepFn ?? sleep;
	const getRetryDelayMsFn = deps?.getRetryDelayMsFn ?? getRetryDelayMs;
	const order = await db.query.orders.findFirst({
		where: eq(orders.id, orderId),
		with: {
			items: true,
			user: { columns: {
				id: true,
				name: true,
				email: true,
				orderEmailsEnabled: true
			} },
			shop: {
				columns: {
					id: true,
					name: true,
					slug: true,
					email: true,
					phone: true
				},
				with: { vendor: {
					columns: {
						id: true,
						contactEmail: true,
						contactPhone: true
					},
					with: { user: { columns: { email: true } } }
				} }
			}
		}
	});
	if (!order) return {
		status: "failed",
		error: "Order not found"
	};
	const customerEmail = order.user?.email ?? order.guestEmail ?? order.shippingAddress?.email ?? null;
	if (!customerEmail) return {
		status: "failed",
		error: "Customer email not found"
	};
	const dedupeKey = `order_confirmation:${order.id}:${customerEmail}`;
	const existingDelivery = await db.query.emailDeliveries.findFirst({ where: eq(emailDeliveries.dedupeKey, dedupeKey) });
	if (existingDelivery?.status === "sent") return { status: "already_sent" };
	if (existingDelivery?.status === "failed" && existingDelivery.attempts >= maxAttempts) return {
		status: "failed",
		error: "Max delivery attempts reached"
	};
	const deliveryId = existingDelivery?.id ?? v4();
	if (!existingDelivery) await db.insert(emailDeliveries).values({
		id: deliveryId,
		dedupeKey,
		type: "order_confirmation",
		toEmail: customerEmail,
		orderId: order.id,
		status: "processing",
		attempts: 0,
		lastAttemptAt: null,
		metadata: { shopId: order.shopId }
	});
	if (order.userId && order.user?.orderEmailsEnabled === false) {
		const attemptAt = now();
		await db.update(emailDeliveries).set({
			status: "skipped",
			lastError: null,
			providerMessageId: null,
			sentAt: null,
			updatedAt: attemptAt
		}).where(eq(emailDeliveries.dedupeKey, dedupeKey));
		console.info("[email] skipped order confirmation (opted out)", {
			orderId: order.id,
			toEmail: customerEmail
		});
		return {
			status: "skipped",
			reason: "Customer opted out"
		};
	}
	const customerName = order.shippingAddress?.firstName || order.user?.name || "Customer";
	const emailItems = order.items.map((item) => ({
		name: item.productName,
		quantity: item.quantity,
		price: parseFloat(item.unitPrice),
		image: item.productImage
	}));
	const shippingAddress = order.shippingAddress ? {
		street: order.shippingAddress.street,
		city: order.shippingAddress.city,
		state: order.shippingAddress.state,
		zip: order.shippingAddress.zip,
		country: order.shippingAddress.country
	} : {
		street: "",
		city: "",
		state: "",
		zip: "",
		country: ""
	};
	const supportEmail = order.shop?.email ?? order.shop?.vendor?.contactEmail ?? order.shop?.vendor?.user?.email ?? process.env.SUPPORT_EMAIL ?? "support@shopstack.com";
	const supportPhone = order.shop?.phone ?? order.shop?.vendor?.contactPhone ?? process.env.SUPPORT_PHONE ?? null;
	const trackingUrl = `${getAppUrl()}/track-order?orderId=${encodeURIComponent(order.id)}`;
	const estimatedDeliveryTimeframe = getEstimatedDeliveryTimeframe(order.shippingMethod);
	const subject = `Order Confirmed - ${order.orderNumber}`;
	const body = OrderConfirmationEmail({
		orderNumber: order.orderNumber,
		customerName,
		orderDate: order.createdAt.toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric"
		}),
		items: emailItems,
		subtotal: parseFloat(order.subtotal),
		tax: parseFloat(order.taxAmount),
		shipping: parseFloat(order.shippingAmount),
		total: parseFloat(order.totalAmount),
		shippingAddress,
		shopName: order.shop?.name || "Shop",
		orderLink: trackingUrl,
		estimatedDeliveryTimeframe,
		supportEmail,
		supportPhone: supportPhone ?? void 0,
		trackingUrl
	});
	let attemptsSoFar = existingDelivery?.attempts ?? 0;
	while (attemptsSoFar < maxAttempts) {
		const attemptNumber = attemptsSoFar + 1;
		const delayMs = getRetryDelayMsFn(attemptNumber);
		if (delayMs > 0) await sleepFn(delayMs);
		const attemptAt = now();
		attemptsSoFar = attemptNumber;
		await db.update(emailDeliveries).set({
			status: "processing",
			attempts: attemptsSoFar,
			lastAttemptAt: attemptAt,
			lastError: null,
			updatedAt: attemptAt
		}).where(eq(emailDeliveries.id, deliveryId));
		try {
			const result = await sendEmailFn({
				to: customerEmail,
				subject,
				body
			});
			await db.update(emailDeliveries).set({
				status: "sent",
				providerMessageId: result.messageId ?? null,
				lastError: null,
				sentAt: attemptAt,
				updatedAt: attemptAt
			}).where(eq(emailDeliveries.id, deliveryId));
			console.info("[email] sent order confirmation", {
				orderId: order.id,
				toEmail: customerEmail,
				messageId: result.messageId ?? null,
				attempts: attemptsSoFar
			});
			return {
				status: "sent",
				messageId: result.messageId ?? null
			};
		} catch (err) {
			const errorString = toErrorString(err);
			await db.update(emailDeliveries).set({
				status: "failed",
				providerMessageId: null,
				lastError: errorString,
				updatedAt: attemptAt
			}).where(eq(emailDeliveries.id, deliveryId));
			console.error("[email] failed order confirmation", {
				orderId: order.id,
				toEmail: customerEmail,
				error: errorString,
				attempt: attemptNumber,
				maxAttempts
			});
			if (attemptNumber >= maxAttempts) return {
				status: "failed",
				error: errorString
			};
		}
	}
	return {
		status: "failed",
		error: "Max delivery attempts reached"
	};
}
//#endregion
export { sendOrderConfirmationEmailForOrderId as t };
