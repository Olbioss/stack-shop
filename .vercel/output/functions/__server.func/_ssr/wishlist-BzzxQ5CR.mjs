import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { Z as LoaderCircle, b as ShoppingCart, g as Star, u as Trash2, x as ShoppingBag } from "../_libs/lucide-react.mjs";
import { p as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as useCart } from "./use-cart-DnfXXkvT.mjs";
import { n as wishlistQueryOptions, t as useWishlistMutations } from "./use-wishlist-C3KY2ij-.mjs";
import { s as NotFound } from "./notfound-CG7ZW3I5.mjs";
import { t as AccountLayout } from "./account-layout-BBuyu67D.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wishlist-BzzxQ5CR.js
var import_jsx_runtime = require_jsx_runtime();
function WishlistItemCard({ item, onAddToCart, onRemove, isAdding, isRemoving }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "@container group relative flex @2xl:flex-row flex-col @2xl:items-center gap-4 rounded-lg border-muted border-b border-dashed @2xl:p-4 py-6 transition-colors last:border-0 @2xl:hover:bg-muted hover:bg-muted",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative aspect-square @2xl:w-24 w-full shrink-0 overflow-hidden rounded-lg border bg-muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: item.image,
					alt: item.name,
					className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-base leading-none tracking-tight",
							children: item.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-sm",
							children: item.shopName
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex @2xl:hidden flex-col items-end gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-bold text-lg",
							children: ["$", item.price.toFixed(2)]
						}), item.originalPrice && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-muted-foreground text-xs line-through",
							children: ["$", item.originalPrice.toFixed(2)]
						})]
					})]
				}), item.rating && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3.5 fill-primary text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-sm",
							children: item.rating
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground text-xs",
							children: "(120 reviews)"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex @2xl:w-auto w-full flex-row @2xl:flex-col @2xl:items-end items-center justify-between @2xl:gap-3 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "@2xl:flex hidden flex-col items-end gap-0.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-bold text-xl",
						children: ["$", item.price.toFixed(2)]
					}), item.originalPrice && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-muted-foreground text-sm line-through",
						children: ["$", item.originalPrice.toFixed(2)]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex @2xl:w-auto w-full items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						className: "@2xl:flex-none flex-1 gap-2",
						onClick: () => onAddToCart?.(item.id),
						disabled: isAdding,
						children: [isAdding ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "size-4" }), "Add to Cart"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						size: "icon",
						className: "text-muted-foreground hover:text-destructive",
						onClick: () => onRemove?.(item.id),
						disabled: isRemoving,
						title: "Remove from wishlist",
						children: [isRemoving ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "Remove"
						})]
					})]
				})]
			})
		]
	});
}
function WishlistList() {
	const { data, isPending } = useQuery(wishlistQueryOptions());
	const { addItem, isAdding } = useCart();
	const { toggleWishlist, isToggling } = useWishlistMutations();
	const items = data?.items ?? [];
	const handleAddToCart = async (productId) => {
		await addItem({
			productId,
			quantity: 1
		});
	};
	const handleRemove = async (productId) => {
		await toggleWishlist({ productId });
	};
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-48 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-5 w-5 animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Loading wishlist..." })]
		})
	});
	if (items.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "@container container mx-auto px-4 py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotFound, {
			title: "Your wishlist is empty",
			description: "Looks like you haven't saved anything yet.",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-10 w-10 text-muted-foreground" }),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/product",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					children: "Start Shopping"
				})
			})
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-col",
		children: items.map((item) => {
			const primaryImage = item.product.images.find((image) => image.isPrimary)?.url || item.product.images[0]?.url || "";
			const sellingPrice = Number(item.product.sellingPrice || 0);
			const regularPrice = item.product.regularPrice ? Number(item.product.regularPrice) : void 0;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WishlistItemCard, {
				item: {
					id: item.product.id,
					name: item.product.name,
					price: sellingPrice,
					originalPrice: regularPrice,
					image: primaryImage,
					shopName: item.product.shop?.name ?? "Unknown Store",
					rating: Number(item.product.averageRating || 0),
					inStock: (item.product.stock ?? 0) > 0
				},
				onAddToCart: handleAddToCart,
				onRemove: handleRemove,
				isAdding,
				isRemoving: isToggling
			}, item.id);
		})
	});
}
function WishlistTemplate() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center justify-between",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-bold text-2xl tracking-tight",
				children: "My Wishlists"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-lg border bg-card text-card-foreground shadow-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WishlistList, {})
			})
		})]
	}) });
}
var SplitComponent = WishlistTemplate;
//#endregion
export { SplitComponent as component };
