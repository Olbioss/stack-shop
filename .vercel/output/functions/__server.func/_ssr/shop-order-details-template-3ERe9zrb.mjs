import { o as __toESM } from "../_runtime.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { p as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { B as Package, Jt as ArrowLeft, St as CreditCard, Z as LoaderCircle, bt as Download, i as User } from "../_libs/lucide-react.mjs";
import { t as Separator$1 } from "./separator-CLOPUVDG.mjs";
import { t as Label$1 } from "./label-CqfikwJF.mjs";
import { t as Textarea } from "./textarea-vo1OZjof.mjs";
import { n as useUpdateVendorOrderStatus } from "./use-vendor-orders-Q75zrqay.mjs";
import { a as CardHeader, n as CardContent, o as CardTitle, r as CardDescription, t as Card } from "./card-BDvQuHpQ.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select$1 } from "./select-DjArhxEw.mjs";
import { t as Badge } from "./badge-NA1wPZ4a.mjs";
import { a as useUpdateAdminOrderStatus } from "./use-admin-orders-ebDgXDm5.mjs";
import { t as useDownloadInvoice } from "./use-invoice-BBcD1lL8.mjs";
import { t as OrderStatusTimeline } from "./order-status-timeline-obxIndBm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-order-details-template-3ERe9zrb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STATUS_OPTIONS = [
	{
		value: "pending",
		label: "Pending"
	},
	{
		value: "confirmed",
		label: "Confirmed"
	},
	{
		value: "processing",
		label: "Processing"
	},
	{
		value: "shipped",
		label: "Shipped"
	},
	{
		value: "delivered",
		label: "Delivered"
	},
	{
		value: "cancelled",
		label: "Cancelled"
	}
];
function OrderActions({ orderId, currentStatus, paymentStatus, mode = "vendor" }) {
	const [selectedStatus, setSelectedStatus] = (0, import_react.useState)(currentStatus);
	const [internalNotes, setInternalNotes] = (0, import_react.useState)("");
	const vendorUpdateStatus = useUpdateVendorOrderStatus();
	const adminUpdateStatus = useUpdateAdminOrderStatus();
	const updateStatus = mode === "admin" ? adminUpdateStatus : vendorUpdateStatus;
	const downloadInvoice = useDownloadInvoice();
	const handleUpdateStatus = async () => {
		if (selectedStatus === currentStatus && !internalNotes) {
			toast.info("No changes to save");
			return;
		}
		try {
			await updateStatus.mutateAsync({
				orderId,
				status: selectedStatus,
				internalNotes: internalNotes || void 0
			});
			toast.success(`Order status updated to ${selectedStatus}`);
			setInternalNotes("");
		} catch (error) {
			toast.error(error instanceof Error ? error.message : "Failed to update status");
		}
	};
	const isOrderFinal = currentStatus === "delivered" || currentStatus === "cancelled" || currentStatus === "refunded";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "size-5" }), "Order Actions"]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Update order status and add internal notes" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted-foreground text-sm",
					children: "Current Status:"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium capitalize",
					children: currentStatus
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator$1, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$1, {
						htmlFor: "status",
						children: "Update Status"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select$1, {
						value: selectedStatus,
						onValueChange: (value) => setSelectedStatus(value),
						disabled: isOrderFinal,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							id: "status",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select status" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: STATUS_OPTIONS.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: option.value,
							children: option.label
						}, option.value)) })]
					}),
					isOrderFinal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground text-xs",
						children: "This order is in a final state and cannot be updated."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$1, {
					htmlFor: "notes",
					children: "Internal Notes (optional)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "notes",
					placeholder: "Add a note about this status change...",
					value: internalNotes,
					onChange: (e) => setInternalNotes(e.target.value),
					rows: 3,
					disabled: isOrderFinal
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-end pt-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: handleUpdateStatus,
					disabled: updateStatus.isPending || isOrderFinal,
					children: [updateStatus.isPending && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 size-4 animate-spin" }), "Update Order"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator$1, { className: "my-4" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-medium text-sm",
					children: "Invoice"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground text-sm",
					children: "Download order invoice"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					size: "sm",
					onClick: () => downloadInvoice.download(orderId),
					disabled: downloadInvoice.isPending || paymentStatus !== "paid",
					children: [downloadInvoice.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-2 size-4" }), "Download Invoice"]
				})]
			})
		]
	})] });
}
function OrderItemsList({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Items" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "List of items in this order" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-4",
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between border-b pb-4 last:border-0 last:pb-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-16 w-16 overflow-hidden rounded-md border bg-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.image,
						alt: item.name,
						className: "h-full w-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium text-sm",
						children: item.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted-foreground text-xs",
						children: ["SKU: ", item.sku]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 flex items-center gap-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							variant: "secondary",
							className: "text-xs",
							children: ["Qty: ", item.quantity]
						})
					})
				] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "font-medium text-sm",
				children: ["$", (item.price * item.quantity).toFixed(2)]
			})]
		}, item.id))
	}) })] });
}
function OrderSummary({ orderId, orderDate, customer, paymentMethod, paymentStatus, subtotal, shipping, tax, total }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Order Summary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardDescription, { children: [
		"Details for Order #",
		orderId,
		" placed on ",
		orderDate
	] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-full bg-muted p-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-4 text-muted-foreground" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium text-sm",
							children: "Customer"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-sm",
							children: customer.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-xs",
							children: customer.email
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-xs",
							children: customer.phone
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator$1, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-full bg-muted p-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "size-4 text-muted-foreground" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium text-sm",
							children: "Payment"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-sm",
							children: paymentMethod
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: paymentStatus === "paid" ? "outline" : paymentStatus === "refunded" ? "destructive" : "secondary",
							className: paymentStatus === "paid" ? "border-green-500 text-green-600" : "capitalize",
							children: paymentStatus
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator$1, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "Subtotal"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["$", subtotal.toFixed(2)] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "Shipping"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["$", shipping.toFixed(2)] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "Tax"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["$", tax.toFixed(2)] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator$1, { className: "my-2" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["$", total.toFixed(2)] })]
					})
				]
			})
		]
	})] });
}
function OrderTimeline({ stages }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Order Status" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Track the progress of this order" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderStatusTimeline, { stages }) })] });
}
function ShopOrderDetailsTemplate({ shopSlug, order, mode = "vendor", backLink }) {
	const items = order.items.map((item) => ({
		id: item.id,
		name: item.productName,
		price: item.unitPrice,
		quantity: item.quantity,
		image: item.productImage ?? "/placeholder.png",
		sku: item.productSku ?? "N/A"
	}));
	const customer = {
		name: order.customer.name ?? order.customer.email ?? "Guest",
		email: order.customer.email ?? "No email",
		phone: order.shippingAddress?.phone ?? "N/A"
	};
	const stages = [
		{
			id: "1",
			label: "Order Placed",
			date: order.createdAt,
			status: order.status === "pending" ? "completed" : "completed"
		},
		{
			id: "2",
			label: "Processing",
			date: order.status === "processing" || order.status === "shipped" || order.status === "delivered" ? order.updatedAt : void 0,
			status: order.status === "processing" || order.status === "shipped" || order.status === "delivered" ? "active" : "pending"
		},
		{
			id: "3",
			label: "Shipped",
			date: order.status === "shipped" || order.status === "delivered" ? order.updatedAt : void 0,
			status: order.status === "shipped" || order.status === "delivered" ? "active" : "pending"
		},
		{
			id: "4",
			label: "Delivered",
			date: order.status === "delivered" ? order.updatedAt : void 0,
			status: order.status === "delivered" ? "completed" : "pending"
		}
	];
	const paymentMethod = order.payments?.[0]?.method ?? order.shippingMethod ?? "N/A";
	const resolvedBackLink = backLink ?? {
		to: "/shop/$slug/orders",
		params: { slug: shopSlug ?? "" },
		label: "Back to Orders"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "sm",
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: resolvedBackLink.to,
					params: resolvedBackLink.params,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "mr-2 size-4" }), resolvedBackLink.label ?? "Back to Orders"]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "font-bold text-2xl tracking-tight",
				children: ["Order #", order.orderNumber]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6 lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderTimeline, { stages }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderItemsList, { items })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderActions, {
					orderId: order.id,
					currentStatus: order.status,
					paymentStatus: order.paymentStatus,
					mode
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderSummary, {
					orderId: order.orderNumber,
					orderDate: new Date(order.createdAt).toLocaleDateString(),
					customer,
					paymentMethod,
					paymentStatus: order.paymentStatus,
					subtotal: order.subtotal,
					shipping: order.shippingAmount,
					tax: order.taxAmount,
					total: order.totalAmount
				})]
			})]
		})]
	});
}
//#endregion
export { ShopOrderDetailsTemplate as t };
