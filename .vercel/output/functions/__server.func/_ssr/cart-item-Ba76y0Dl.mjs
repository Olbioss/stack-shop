import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { Z as LoaderCircle, u as Trash2 } from "../_libs/lucide-react.mjs";
import { p as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import "./use-cart-DnfXXkvT.mjs";
import { t as QuantitySelector } from "./quantity-selector-zUefD-A7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-item-Ba76y0Dl.js
var import_jsx_runtime = require_jsx_runtime();
function CartItem({ item, isCompact = false, onUpdateQuantity, onRemove, isUpdating = false, isRemoving = false }) {
	const variantText = item.variantOptions && Object.keys(item.variantOptions).length > 0 ? Object.entries(item.variantOptions).map(([key, value]) => `${key}: ${value}`).join(" | ") : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex gap-4 py-4 ${isCompact ? "items-start" : "items-center"} ${isRemoving ? "opacity-50" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/product/$productId",
			params: { productId: item.slug },
			className: `relative overflow-hidden rounded-md border bg-muted ${isCompact ? "h-20 w-20" : "h-24 w-24"}`,
			children: item.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: item.image,
				alt: item.name,
				className: "h-full w-full object-cover transition-transform hover:scale-105"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-full w-full items-center justify-center text-muted-foreground",
				children: "No Image"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col justify-between gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/product/$productId",
							params: { productId: item.slug },
							className: "font-medium leading-none hover:underline",
							children: item.name
						}),
						variantText && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-sm",
							children: variantText
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-xs",
							children: item.shopName
						})
					]
				}), !isCompact && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					size: "icon",
					className: "h-8 w-8 text-destructive hover:text-destructive/90",
					onClick: () => onRemove(item.id),
					disabled: isRemoving,
					children: [isRemoving ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: "Remove item"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-semibold",
						children: ["$", item.price.toFixed(2)]
					}), item.regularPrice && item.regularPrice > item.price && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted-foreground text-sm line-through",
						children: ["$", item.regularPrice.toFixed(2)]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuantitySelector, {
							value: item.quantity,
							onChange: (value) => onUpdateQuantity(item.id, value),
							max: item.maxQuantity,
							className: "@7xl:h-9",
							size: "sm",
							disabled: isUpdating
						}), isCompact && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							size: "icon",
							className: "ml-2 h-8 w-8 text-destructive hover:text-destructive/90",
							onClick: () => onRemove(item.id),
							disabled: isRemoving,
							children: [isRemoving ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: "Remove item"
							})]
						})]
					})
				})]
			})]
		})]
	});
}
//#endregion
export { CartItem as t };
