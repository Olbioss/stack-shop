import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-Pgq5HWQm.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { p as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useCart } from "./use-cart-DnfXXkvT.mjs";
import { t as useCartStore } from "./cart-store-C9JgFNbK.mjs";
import { Z as LoaderCircle, b as ShoppingCart, g as Star, gt as Eye } from "../_libs/lucide-react.mjs";
import { t as Badge } from "./badge-NA1wPZ4a.mjs";
import { n as RadioGroupItem } from "./radio-group-Cu2-BwWU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product-card-XBLfr8UV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var colorMap = {
	Black: "#000000",
	White: "#FFFFFF",
	Red: "#EF4444",
	Blue: "#3B82F6",
	Green: "#22C55E",
	Yellow: "#EAB308",
	Purple: "#A855F7",
	Pink: "#EC4899",
	Grey: "#6B7280",
	Beige: "#F5F5DC"
};
var ColorSwatch = ({ color, selected, onClick, className }) => {
	const hex = colorMap[color] || color;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("size-6 shrink-0 rounded-full border-2 border-gray-200 shadow-xs outline-none transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50", selected && "scale-110 border-primary ring-2 ring-primary ring-offset-1", className),
		style: { backgroundColor: hex },
		title: color,
		"aria-label": `Select color ${color}`
	});
};
var ColorRadioItem = ({ color, value, id, className }) => {
	const hex = colorMap[color] || color;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, {
		value,
		id,
		className: cn("size-6 shrink-0 rounded-full border-2 border-gray-200 shadow-xs outline-none transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:scale-110 data-[state=checked]:border-primary data-[state=checked]:ring-2 data-[state=checked]:ring-primary data-[state=checked]:ring-offset-1", className),
		style: { backgroundColor: hex },
		title: color,
		"aria-label": `Select color ${color}`
	});
};
function PriceTag({ price, originalPrice, currency = "$", className, size = "md" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-baseline gap-2", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: cn("font-semibold text-foreground", {
				sm: "text-sm",
				md: "text-base",
				lg: "text-xl font-bold"
			}[size]),
			children: [currency, price.toFixed(2)]
		}), originalPrice && originalPrice > price && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "text-muted-foreground text-sm line-through",
			children: [currency, originalPrice.toFixed(2)]
		})]
	});
}
function ProductCard({ product, className, variant = "grid" }) {
	const { addItem } = useCart();
	const { setIsOpen } = useCartStore();
	const [isAddingThis, setIsAddingThis] = (0, import_react.useState)(false);
	const handleAddToCart = async (e) => {
		e.preventDefault();
		e.stopPropagation();
		setIsAddingThis(true);
		try {
			await addItem({
				productId: product.id,
				quantity: 1
			});
			setIsOpen(true);
		} catch (error) {
			console.error("Failed to add to cart:", error);
		} finally {
			setIsAddingThis(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("group relative flex rounded-xl border-2 border-muted border-dashed p-4 transition-colors hover:border-primary/50", variant === "grid" ? "flex-col" : "@2xl:flex-row flex-col gap-6", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("relative overflow-hidden rounded-2xl bg-muted", variant === "grid" ? "aspect-square w-full" : "aspect-square @2xl:w-48 w-full shrink-0"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: product.images[0].url,
					alt: product.name,
					className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105",
					loading: "lazy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute top-3 left-3 flex flex-col gap-2",
					children: [product.price.discountPercentage > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						className: "bg-red-500 hover:bg-red-600",
						children: [
							"-",
							product.price.discountPercentage,
							"%"
						]
					}), product.isNew && product.price.discountPercentage === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						className: "bg-blue-500 hover:bg-blue-600",
						children: "New"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0 flex items-center justify-center gap-3 bg-black/20 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "icon",
						variant: "secondary",
						className: "h-10 w-10 rounded-full shadow-lg transition-transform hover:scale-110",
						title: "Quick View",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "Quick View"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "icon",
						className: "h-10 w-10 rounded-full shadow-lg transition-transform hover:scale-110",
						title: "Add to Cart",
						onClick: handleAddToCart,
						disabled: isAddingThis,
						children: [isAddingThis ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-5 w-5 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "Add to Cart"
						})]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("flex flex-1 flex-col", variant === "grid" ? "mt-4 gap-3" : "gap-4 py-2"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full border border-muted-foreground/30 border-dashed bg-muted/50 px-3 py-1 font-medium text-muted-foreground text-xs",
						children: product.category.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1 text-amber-500",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-current" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-sm",
								children: product.rating.average
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[10px] text-muted-foreground",
								children: [
									"(",
									product.rating.count,
									")"
								]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/product/$productId",
						params: { productId: product.id },
						className: "group/title",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "line-clamp-1 font-medium font-mono text-lg transition-colors group-hover/title:text-primary",
							title: product.name,
							children: product.name
						})
					}), variant === "list" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "line-clamp-2 text-muted-foreground text-sm",
						children: product.description
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("flex items-center justify-between border-muted border-t border-dashed", variant === "grid" ? "pt-3" : "mt-auto pt-4"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-muted-foreground text-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-base text-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceTag, {
								price: product.price.current,
								originalPrice: product.price.original
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1",
						children: [product.colors.slice(0, 3).map((color) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorSwatch, {
							color,
							className: "h-4 w-4"
						}, color)), product.colors.length > 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "ml-1 font-medium text-[10px] text-muted-foreground",
							children: ["+", product.colors.length - 3]
						})]
					})]
				})
			]
		})]
	});
}
//#endregion
export { ProductCard as n, ColorRadioItem as t };
