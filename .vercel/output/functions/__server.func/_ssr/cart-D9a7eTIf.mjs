import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { t as Skeleton } from "./skeleton-CLsJI6lr.mjs";
import { t as Separator$1 } from "./separator-CLOPUVDG.mjs";
import { Et as CircleCheck, Z as LoaderCircle, b as ShoppingCart, p as Tag, qt as ArrowRight, t as X, x as ShoppingBag } from "../_libs/lucide-react.mjs";
import { p as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as useCart } from "./use-cart-DnfXXkvT.mjs";
import { i as InputGroupInput, n as InputGroupAddon, r as InputGroupButton, t as InputGroup } from "./input-group-DL1MymOU.mjs";
import { t as CartItem } from "./cart-item-Ba76y0Dl.mjs";
import { t as useCartStore } from "./cart-store-C9JgFNbK.mjs";
import { s as NotFound } from "./notfound-CG7ZW3I5.mjs";
import { t as BreadcrumbNav } from "./breadcrumb-nav-C6qkBKW3.mjs";
import { t as validateStoreCoupon } from "./coupon-ly67B2fF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-D9a7eTIf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CartItemsList() {
	const { items, isLoading, updateQuantity, removeItem, isUpdating, isRemoving } = useCart();
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "divide-y rounded-lg border bg-background p-6 shadow-sm",
			children: [
				1,
				2,
				3
			].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-4 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-24 w-24 rounded-md" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-1 flex-col justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-5 w-48" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-32" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-5 w-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-9 w-28" })]
					})]
				})]
			}, i))
		})
	});
	if (items.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotFound, {
		title: "Your cart is empty",
		description: "Looks like you haven't added anything to your cart yet.",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "size-10 text-muted-foreground" }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: "Start Shopping" })
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "divide-y rounded-lg border bg-background p-6 shadow-sm",
			children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartItem, {
				item,
				onUpdateQuantity: (itemId, quantity) => {
					updateQuantity(itemId, quantity);
				},
				onRemove: (itemId) => {
					removeItem(itemId);
				},
				isUpdating,
				isRemoving
			}, item.id))
		}), (isUpdating || isRemoving) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-center gap-2 text-muted-foreground text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Updating cart..." })]
		})]
	});
}
function CartSummary() {
	const { items, subtotal, isLoading, clearCart, isClearing } = useCart();
	const { appliedCoupons, addCoupon, removeCoupon } = useCartStore();
	const [couponCode, setCouponCode] = (0, import_react.useState)("");
	const [isValidating, setIsValidating] = (0, import_react.useState)(false);
	const itemsByShop = items.reduce((acc, item) => {
		if (!acc[item.shopId]) acc[item.shopId] = {
			shopId: item.shopId,
			shopName: item.shopName,
			items: [],
			subtotal: 0
		};
		acc[item.shopId].items.push(item);
		acc[item.shopId].subtotal += item.price * item.quantity;
		return acc;
	}, {});
	const shopIds = Object.keys(itemsByShop);
	const totalDiscount = appliedCoupons.reduce((sum, coupon) => sum + coupon.discountAmount, 0);
	const deliveryFee = items.length > 0 ? 15 : 0;
	const finalDeliveryFee = appliedCoupons.some((coupon) => coupon.type === "free_shipping") ? 0 : deliveryFee;
	const total = subtotal - totalDiscount + finalDeliveryFee;
	const handleApplyCoupon = async () => {
		if (!couponCode.trim()) {
			toast.error("Please enter a coupon code");
			return;
		}
		if (appliedCoupons.some((c) => c.code.toLowerCase() === couponCode.toLowerCase())) {
			toast.error("This coupon is already applied");
			return;
		}
		setIsValidating(true);
		try {
			let validationResult = null;
			let validShopId = null;
			let validShopName = null;
			for (const shopId of shopIds) {
				const shopData = itemsByShop[shopId];
				if (appliedCoupons.some((c) => c.shopId === shopId)) continue;
				try {
					const result = await validateStoreCoupon({ data: {
						code: couponCode,
						shopId,
						cartAmount: shopData.subtotal.toString(),
						cartItems: shopData.items.map((item) => ({
							productId: item.productId,
							quantity: item.quantity,
							price: item.price.toString()
						}))
					} });
					if (result.valid) {
						validationResult = result;
						validShopId = shopId;
						validShopName = shopData.shopName;
						break;
					}
				} catch {}
			}
			if (validationResult?.valid && validShopId) {
				addCoupon({
					shopId: validShopId,
					shopName: validShopName || "Unknown Store",
					code: couponCode.toUpperCase(),
					discountAmount: validationResult.discountAmount || 0,
					type: validationResult.coupon?.type || "percentage",
					discountValue: parseFloat(validationResult.coupon?.discountAmount || "0")
				});
				setCouponCode("");
				toast.success(validationResult.message || "Coupon applied!");
			} else {
				let errorMessage = "Invalid coupon code";
				if (shopIds.length === 0) errorMessage = "Your cart is empty";
				else if (appliedCoupons.length === shopIds.length && shopIds.length > 0) errorMessage = "All shops already have a coupon applied";
				toast.error(errorMessage);
			}
		} catch (error) {
			const message = error instanceof Error ? error.message : "Failed to validate coupon";
			toast.error(message);
		} finally {
			setIsValidating(false);
		}
	};
	const handleRemoveCoupon = (couponCode) => {
		removeCoupon(couponCode);
		toast.success("Coupon removed");
	};
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border bg-card p-6 shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mb-6 h-6 w-32" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-5 w-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-5 w-16" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-5 w-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-5 w-16" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-5 w-24" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-5 w-16" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "my-4 h-px w-full" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-6 w-16" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-6 w-20" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-10 w-full" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-12 w-full rounded-full" })
			]
		})]
	});
	if (items.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border bg-card p-6 shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mb-6 font-semibold text-lg",
			children: "Order Summary"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-muted-foreground",
						children: [
							"Subtotal (",
							items.length,
							" ",
							items.length === 1 ? "item" : "items",
							")"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-medium",
						children: ["$", subtotal.toFixed(2)]
					})]
				}),
				appliedCoupons.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2",
					children: appliedCoupons.map((coupon) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between rounded-md bg-green-50 p-2 text-green-700 dark:bg-green-950/30 dark:text-green-400",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-sm",
									children: coupon.code
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-muted-foreground text-xs",
									children: [
										"(",
										coupon.shopName,
										")"
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-medium text-sm",
								children: ["-$", coupon.discountAmount.toFixed(2)]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								className: "h-6 w-6 text-muted-foreground hover:text-destructive",
								onClick: () => handleRemoveCoupon(coupon.code),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3 w-3" })
							})]
						})]
					}, coupon.code))
				}),
				totalDiscount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between text-green-600",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: "Discount"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-medium",
						children: ["-$", totalDiscount.toFixed(2)]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: "Delivery Fee"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: finalDeliveryFee === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-green-600",
							children: "Free"
						}) : `$${finalDeliveryFee.toFixed(2)}`
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator$1, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between font-bold text-lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["$", total.toFixed(2)] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InputGroup, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroupAddon, {
								align: "inline-start",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroupInput, {
								placeholder: "Enter coupon code...",
								value: couponCode,
								onChange: (e) => setCouponCode(e.target.value.toUpperCase()),
								onKeyDown: (e) => {
									if (e.key === "Enter") handleApplyCoupon();
								},
								disabled: isValidating
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroupAddon, {
								align: "inline-end",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroupButton, {
									variant: "ghost",
									disabled: !couponCode.trim() || isValidating,
									onClick: handleApplyCoupon,
									children: isValidating ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : "Apply"
								})
							})
						] })
					}), shopIds.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground text-xs",
						children: "💡 Coupons are shop-specific. You can apply one coupon per shop."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/checkout",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						className: "w-full rounded-full",
						size: "lg",
						children: ["Go to Checkout", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					className: "mt-4 w-full rounded-full",
					size: "lg",
					onClick: () => clearCart(),
					disabled: isClearing,
					children: isClearing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }), "Clearing..."] }) : "Clear Cart"
				})
			]
		})]
	});
}
function CartTemplate() {
	const { items, isLoading } = useCart();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "@container container mx-auto px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbNav, {
				items: [{
					label: "Home",
					href: "/"
				}, {
					label: "Cart",
					isActive: true
				}],
				className: "mb-4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 font-bold text-3xl tracking-tight mb-8",
				children: "YOUR CART"
			}),
			isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid @5xl:grid-cols-12 gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "@5xl:col-span-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "divide-y rounded-lg border bg-background p-6 shadow-sm",
							children: [
								1,
								2,
								3
							].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-4 py-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-24 w-24 rounded-md" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-1 flex-col justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-5 w-48" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-32" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-5 w-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-9 w-28" })]
									})]
								})]
							}, i))
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "@5xl:col-span-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border bg-card p-6 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mb-6 h-6 w-32" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-5 w-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-5 w-16" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-5 w-24" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-5 w-16" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "my-4 h-px w-full" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-6 w-16" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-6 w-20" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-12 w-full rounded-full" })
							]
						})]
					})
				})]
			}) : items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotFound, {
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-12 w-12 text-muted-foreground" }),
				title: "Your cart is empty",
				description: "Looks like you haven't added any items to your cart yet. Start shopping to fill it up!",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/product",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						className: "rounded-full",
						children: "Continue Shopping"
					})
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid @5xl:grid-cols-12 gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "@5xl:col-span-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartItemsList, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "@5xl:col-span-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartSummary, {})
				})]
			})
		]
	});
}
var SplitComponent = CartTemplate;
//#endregion
export { SplitComponent as component };
