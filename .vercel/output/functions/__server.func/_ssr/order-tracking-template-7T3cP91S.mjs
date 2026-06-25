import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as cn } from "./utils-Pgq5HWQm.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { t as Input } from "./input-BP4N0xFb.mjs";
import { B as Package, Ct as Clock, J as Mail, O as Search, Ot as CircleAlert, Rt as Calendar, o as Truck, q as MapPin, vt as ExternalLink } from "../_libs/lucide-react.mjs";
import { p as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Label$1 } from "./label-CqfikwJF.mjs";
import { t as OrderStatusTimeline } from "./order-status-timeline-obxIndBm.mjs";
import { n as AlertDescription, r as AlertTitle, t as Alert } from "./alert-Diqlys0q.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/order-tracking-template-7T3cP91S.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function OrderSearchForm({ onSearch, isLoading = false }) {
	const [orderId, setOrderId] = (0, import_react.useState)("");
	const handleSubmit = (e) => {
		e.preventDefault();
		if (orderId.trim()) onSearch(orderId.trim());
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
		onSubmit: handleSubmit,
		className: "mx-auto w-full max-w-2xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$1, {
					htmlFor: "orderId",
					children: "Order ID or Tracking Number"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "orderId",
						type: "text",
						placeholder: "Enter your order ID (e.g., 20002455468764)",
						value: orderId,
						onChange: (e) => setOrderId(e.target.value),
						disabled: isLoading,
						className: "flex-1 rounded-xl"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "submit",
						size: "lg",
						disabled: !orderId.trim() || isLoading,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "mr-2 h-4 w-4" }), isLoading ? "Searching..." : "Track Order"]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground text-sm",
				children: "Enter your order ID or tracking number to view the latest shipping updates"
			})]
		})
	});
}
function OrderTrackingSummary({ id, orderId, orderDate, itemsCount, total }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border bg-card p-6 shadow-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mb-4 font-semibold text-lg",
				children: "Order Summary"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between text-base",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "Order Id"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-foreground",
							children: orderId
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between text-base",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "Order Date"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-foreground",
							children: orderDate
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between text-base",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "Items"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-medium text-foreground",
							children: [itemsCount, " items"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between text-base",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "Total"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-semibold text-foreground text-xl",
							children: ["$", total.toFixed(2)]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-col gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/order-confirmation",
					search: { orderIds: [id] },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "default",
						size: "lg",
						className: "w-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "mr-2 h-4 w-4" }), "View Full Order"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					size: "lg",
					className: "w-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mr-2 h-4 w-4" }), "Contact Support"]
				})]
			})
		]
	});
}
function ShippingUpdatesList({ updates }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border bg-card p-6 shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "mb-4 font-semibold text-lg",
			children: "Shipping Updates"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-4",
			children: updates.map((update, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("relative flex gap-4 pb-4", index < updates.length - 1 && "border-b"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex flex-col items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: cn("flex h-8 w-8 items-center justify-center rounded-full", update.isLatest ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4" })
					}), index < updates.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-2 h-full w-0.5 flex-1 bg-muted" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 pt-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: cn("font-medium", update.isLatest && "text-primary"),
							children: update.status
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-muted-foreground text-sm",
							children: update.location
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "whitespace-nowrap text-muted-foreground text-sm",
							children: update.timestamp
						})]
					})
				})]
			}, update.id))
		})]
	});
}
function TrackingDetailsCard({ carrier, trackingNumber, currentLocation, estimatedDelivery, packageInfo }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border bg-card p-6 shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "mb-4 font-semibold text-xl",
			children: "Tracking Details"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "mt-0.5 h-5 w-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium text-base text-foreground",
						children: "Carrier"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground text-sm",
						children: carrier
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "mt-0.5 h-5 w-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium text-base text-foreground",
						children: "Tracking Number"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-muted-foreground text-sm",
						children: trackingNumber
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-5 w-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium text-base text-foreground",
						children: "Current Location"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground text-sm",
						children: currentLocation
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "mt-0.5 h-5 w-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium text-base text-foreground",
						children: "Estimated Delivery"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground text-sm",
						children: estimatedDelivery
					})] })]
				}),
				packageInfo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 font-medium text-base text-foreground",
						children: "Package Information"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1 text-muted-foreground text-sm",
						children: [packageInfo.weight && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Weight: ", packageInfo.weight] }), packageInfo.dimensions && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Dimensions: ", packageInfo.dimensions] })]
					})]
				})
			]
		})]
	});
}
function OrderTrackingTemplate({ onSearch, isLoading, data, error, hasSearched }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "@container container mx-auto px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-8 w-8 text-primary" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mb-2 font-bold text-3xl",
						children: "Track Your Order"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground",
						children: "Enter your order ID to get real-time tracking updates"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderSearchForm, {
					onSearch,
					isLoading
				})
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mb-8 max-w-2xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Alert, {
					variant: "destructive",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertTitle, { children: "Error" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDescription, { children: error.message || "Failed to find order. Please check the ID and try again." })
					]
				})
			}),
			isLoading && hasSearched && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center justify-center py-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground",
					children: "Searching for your order..."
				})]
			}),
			hasSearched && !isLoading && !data && !error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mb-8 max-w-2xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Alert, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertTitle, { children: "No Order Found" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDescription, { children: "Could not find an order with the provided ID. Please check and try again." })
				] })
			}),
			hasSearched && data && !error && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border bg-card p-6 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-6 font-semibold text-xl",
						children: "Order Status"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderStatusTimeline, { stages: data.stages })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid @5xl:grid-cols-3 gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "@5xl:col-span-2 space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrackingDetailsCard, {
							carrier: data.carrier,
							trackingNumber: data.trackingNumber,
							currentLocation: data.currentLocation,
							estimatedDelivery: data.estimatedDelivery,
							packageInfo: data.packageInfo
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShippingUpdatesList, { updates: data.updates })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderTrackingSummary, {
						id: data.id,
						orderId: data.orderId,
						orderDate: data.orderDate,
						itemsCount: data.itemsCount,
						total: data.total
					}) })]
				})]
			})
		]
	});
}
//#endregion
export { OrderTrackingTemplate as t };
