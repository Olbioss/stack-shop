import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { m as useNavigate, p as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { Dt as CircleCheckBig, J as Mail, P as Phone, St as CreditCard, Z as LoaderCircle, bt as Download } from "../_libs/lucide-react.mjs";
import { t as Separator$1 } from "./separator-CLOPUVDG.mjs";
import { t as useDownloadInvoice } from "./use-invoice-BBcD1lL8.mjs";
import { a as useOrdersByIds } from "./use-checkout-Dhl-tOLO.mjs";
import { t as Route } from "./order-confirmation-Bw5A2DJF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/order-confirmation-CjwKu4bV.js
var import_jsx_runtime = require_jsx_runtime();
function HelpSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-semibold text-lg",
			children: "Need help?"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "mailto:customercare@asoom.com",
				className: "flex items-center gap-2 text-muted-foreground text-sm transition-colors hover:text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "customercare@asoom.com" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "tel:+18256654",
				className: "flex items-center gap-2 text-muted-foreground text-sm transition-colors hover:text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+1 8256 6546" })]
			})]
		})]
	});
}
function OrderDetailsCard({ orderId, orderNumber, orderDate, estimatedDelivery, paymentIntentId }) {
	const { download: downloadInvoice, isPending } = useDownloadInvoice();
	const navigate = useNavigate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-lg bg-primary p-6 text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex flex-wrap items-start justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "mb-2 font-semibold text-xl",
				children: ["Order Number: ", orderNumber]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-4 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Order Date: ", orderDate] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-yellow-300",
					children: ["Estimated delivery: ", estimatedDelivery]
				})]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "secondary",
					size: "lg",
					className: "rounded-full",
					onClick: () => downloadInvoice(orderId, { paymentIntentId }),
					disabled: isPending,
					children: [isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-2 size-4" }), "Download Invoice"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "lg",
					className: "rounded-full bg-yellow-400 text-background hover:bg-yellow-500",
					onClick: () => {
						toast.success("Opening order tracking");
						navigate({
							to: "/track-order",
							search: { orderId }
						});
					},
					children: "Track order"
				})]
			})]
		})
	});
}
function OrderSuccessHeader() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center py-8 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mb-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-full bg-primary/10 p-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, {
						className: "h-16 w-16 text-primary",
						strokeWidth: 2.5
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mb-4 font-bold text-3xl",
				children: "Thanks for your order!"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/product",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "lg",
					className: "rounded-full",
					children: "Continue shopping"
				})
			})
		]
	});
}
function OrderInfoSection({ paymentMethod, address, deliveryMethod }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 @xl:grid-cols-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mb-3 font-semibold",
				children: "Payment method"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 text-muted-foreground text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: paymentMethod })]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mb-3 font-semibold",
				children: "Address"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-muted-foreground text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: address.name }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: address.street }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						address.city,
						", ",
						address.state,
						" ",
						address.zip
					] })
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mb-3 font-semibold",
				children: "Delivery method"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground text-sm",
				children: deliveryMethod
			})] })
		]
	});
}
function OrderItemsList({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-4",
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "size-16 overflow-hidden rounded-md border bg-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.image,
						alt: item.name,
						className: "size-full object-fill"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium",
					children: item.name
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-right",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-semibold text-lg",
					children: ["$", item.price.toFixed(2)]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-muted-foreground text-sm",
					children: ["Qty: ", item.quantity]
				})]
			})]
		}, item.id))
	});
}
function OrderSummary({ itemCost, shippingCost, tax, couponDiscount = 0, total }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between text-base",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted-foreground",
					children: "Item Cost"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-medium",
					children: ["$", itemCost.toFixed(2)]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between text-base",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted-foreground",
					children: "Shipping cost"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-medium",
					children: ["$", shippingCost.toFixed(2)]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between text-base",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted-foreground",
					children: "Tax"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-medium",
					children: ["$", tax.toFixed(2)]
				})]
			}),
			couponDiscount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between text-base",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted-foreground",
					children: "Coupon"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-medium text-green-600",
					children: ["-$", couponDiscount.toFixed(2)]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator$1, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between font-semibold text-lg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total Cost" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["$", total.toFixed(2)] })]
			})
		]
	});
}
function OrderConfirmationTemplate({ orderIds, paymentIntentId }) {
	const navigate = useNavigate();
	const { data: orders, isLoading, error } = useOrdersByIds({
		orderIds,
		paymentIntentId
	});
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[60vh] items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-8 w-8 animate-spin text-primary" })
	});
	if (error || !orders || orders.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-bold text-2xl",
				children: "Order Not Found"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: "We couldn't find the order details you're looking for."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: () => navigate({ to: "/" }),
				children: "Return Home"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container mx-auto max-w-4xl px-4 py-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderSuccessHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-8",
			children: [orders.map((order, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "overflow-hidden rounded-lg border bg-card p-0 shadow-sm",
				children: [orders.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-b bg-muted/30 p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "font-semibold text-lg",
						children: [
							"Order ",
							index + 1,
							" of ",
							orders.length,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "ml-2 font-normal text-muted-foreground text-sm",
								children: [
									"(Sold by ",
									order.shopName,
									")"
								]
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6 p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderDetailsCard, {
							orderId: order.id,
							orderNumber: order.orderNumber,
							orderDate: new Date(order.createdAt).toLocaleDateString(),
							estimatedDelivery: "Pending confirmation",
							paymentIntentId
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderItemsList, { items: order.items.map((item) => ({
							id: item.id,
							name: item.productName,
							image: item.productImage || "/placeholder.png",
							price: item.unitPrice,
							quantity: item.quantity,
							variantOptions: item.variantOptions
						})) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator$1, { className: "my-6" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderInfoSection, {
							paymentMethod: `Card ending in ...`,
							address: {
								name: `${order.shippingAddress?.firstName} ${order.shippingAddress?.lastName}`,
								street: order.shippingAddress?.street || "",
								city: order.shippingAddress?.city || "",
								state: order.shippingAddress?.state || "",
								zip: order.shippingAddress?.zip || ""
							},
							deliveryMethod: order.shippingMethod === "express" ? "Express Delivery" : "Standard Delivery"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator$1, { className: "my-6" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HelpSection, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderSummary, {
								itemCost: order.subtotal,
								shippingCost: order.shippingAmount,
								tax: order.taxAmount,
								couponDiscount: order.discountAmount,
								total: order.totalAmount
							})]
						})
					]
				})]
			}, order.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-center pt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => navigate({ to: "/" }),
					size: "lg",
					children: "Continue Shopping"
				})
			})]
		})]
	});
}
function RootComponent() {
	const { orderIds, paymentIntentId } = Route.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderConfirmationTemplate, {
		orderIds,
		paymentIntentId
	});
}
//#endregion
export { RootComponent as component };
