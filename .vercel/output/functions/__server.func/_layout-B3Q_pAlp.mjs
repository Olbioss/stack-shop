import { o as __toESM } from "./_runtime.mjs";
import { r as toDisplayProducts } from "./_ssr/products-query-helpers-YIHV58XJ.mjs";
import { r as gridCellBorderClasses, t as cn } from "./_ssr/utils-Pgq5HWQm.mjs";
import { w as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { t as Button } from "./_ssr/button-DQSToWRX.mjs";
import { t as Skeleton } from "./_ssr/skeleton-CLsJI6lr.mjs";
import { p as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { o as useQuery } from "./_libs/tanstack__react-query.mjs";
import { r as useStoreProducts } from "./_ssr/use-store-product-C0VjBbOQ.mjs";
import { t as useCart } from "./_ssr/use-cart-DnfXXkvT.mjs";
import { t as useCartStore } from "./_ssr/cart-store-C9JgFNbK.mjs";
import { Kt as ArrowUpRight, b as ShoppingCart, qt as ArrowRight } from "./_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_layout-B3Q_pAlp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Section({ title, description, children, sectionClassName, headingClassName, descriptionClassName, rightAsset, rightAssetClassName, containerClassName, rightAction, rightActionClassName }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: cn("@container container mx-auto my-20 px-4", sectionClassName),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("relative z-10 overflow-hidden rounded-2xl border-2 border-dashed", containerClassName),
			children: [
				rightAsset && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("-z-10 pointer-events-none absolute top-0 right-0", rightAssetClassName),
					children: rightAsset
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("mb-0 @4xl:p-12 @6xl:p-[60px] @7xl:p-20 p-5", rightAction ? "@4xl:flex @4xl:items-center @4xl:justify-between @4xl:gap-6 space-y-7" : "space-y-7"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-[804px] space-y-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: cn("@5xl:text-[38px] @7xl:text-5xl text-[28px] uppercase", headingClassName),
							children: title
						}), description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: cn(descriptionClassName),
							children: description
						})]
					}), rightAction && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: cn("flex @4xl:justify-end justify-center", rightActionClassName),
						children: rightAction
					})]
				}),
				children
			]
		})
	});
}
function CollectionItem({ id, image, title, category, fit, price, className, onAddToCart }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative border-dashed @6xl:p-7.5 p-5", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-t-2xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: image,
					alt: title,
					className: "w-full h-96.5 object-cover"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "@6xl:mt-7.5 mt-5 flex items-center justify-start @6xl:justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full border-2 border-body-15 border-dashed bg-body-10 px-4 py-2 text-body-70 text-lg",
					children: category
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "secondary",
					size: "lg",
					type: "button",
					className: "@6xl:inline-flex hidden",
					onClick: onAddToCart,
					children: ["Shop Now", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, {})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 space-y-3.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/product/$productId",
						params: { productId: id },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-medium font-mono text-lg",
							children: title
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-muted-foreground text-sm",
						children: [
							"Fit: ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-body-80",
								children: fit
							}),
							" Price:",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-body-80",
								children: price
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "secondary",
						size: "lg",
						type: "button",
						className: "@6xl:hidden w-full",
						onClick: onAddToCart,
						children: ["Shop Now", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, {})]
					})
				]
			})
		]
	});
}
function CollectionSkeleton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid @4xl:grid-cols-2 @6xl:grid-cols-3 grid-cols-1",
		children: Array.from({ length: 6 }).map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative border-dashed @6xl:p-7.5 p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-96.5 w-full rounded-t-2xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "@6xl:mt-7.5 mt-5 flex items-center gap-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-10 w-24 rounded-full" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 space-y-3.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-6 w-3/4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-1/2" })]
				})
			]
		}, index))
	});
}
function CollectionContainer({ products, isLoading, activeCategory }) {
	const columns2 = 2;
	const columns3 = 3;
	const { addItem } = useCart();
	const { setIsOpen } = useCartStore();
	const filteredProducts = (0, import_react.useMemo)(() => {
		if (activeCategory === "All") return products.slice(0, 6);
		return products.filter((p) => p.category.name.toLowerCase() === activeCategory.toLowerCase()).slice(0, 6);
	}, [products, activeCategory]);
	const handleAddToCart = async (product) => {
		try {
			await addItem({
				productId: product.id,
				quantity: 1
			});
			setIsOpen(true);
		} catch (err) {
			console.error("Failed to add to cart: ", err);
		}
	};
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionSkeleton, {});
	if (filteredProducts.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center justify-center py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-lg text-muted-foreground",
			children: "No products found in this category"
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid @4xl:grid-cols-2 @6xl:grid-cols-3 grid-cols-1",
		children: filteredProducts.map((product, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fade-in-0 zoom-in-95 animate-in duration-300",
			style: {
				animationDelay: `${index * 50}ms`,
				animationFillMode: "backwards"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionItem, {
				id: product.id,
				image: product.images[0]?.url || `https://placehold.co/600x600?text=${encodeURIComponent(product.name)}`,
				title: product.name,
				category: product.category.name,
				fit: "Regular",
				price: `$${product.price.current.toFixed(2)}`,
				className: gridCellBorderClasses(index, columns2, columns3, true),
				onAddToCart: () => handleAddToCart(product)
			})
		}, product.id))
	});
}
var StarSolidIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 206 291",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		fill: "#C2B4A3",
		d: "m281.112 225.671-54.348-53.678c-5.01-4.938-1.843-13.475 5.176-13.951l76.207-5.241c9.724-.665 10.308-14.747.668-16.214l-75.51-11.475c-6.948-1.057-9.411-9.822-4.014-14.334l58.574-49.032c7.477-6.27-.334-18.001-8.995-13.521l-67.834 35.098c-6.244 3.227-13.38-2.408-11.674-9.233L217.924.003c2.37-9.462-10.845-14.365-15.22-5.647l-34.253 68.266c-3.158 6.286-12.243 5.903-14.87-.616L125.042-8.847c-3.643-9.046-17.215-5.247-15.637 4.382l12.418 75.371c1.148 6.94-6.436 11.977-12.391 8.247L44.71 38.6c-8.264-5.176-17.017 5.875-10.07 12.726l54.348 53.678c5.01 4.939 1.842 13.476-5.176 13.952l-76.207 5.24c-9.728.677-10.308 14.748-.669 16.214l75.51 11.475c6.948 1.058 9.411 9.822 4.015 14.334l-58.574 49.032c-7.472 6.258.338 17.99 9 13.51l67.845-35.093c6.244-3.228 13.376 2.419 11.674 9.232l-18.562 74.088c-2.37 9.462 10.844 14.364 15.219 5.646l34.254-68.265c3.158-6.287 12.247-5.915 14.87.615l28.527 70.849c3.643 9.045 17.216 5.247 15.633-4.371l-12.419-75.371c-1.136-6.935 6.436-11.977 12.392-8.247l64.722 40.553c8.264 5.177 17.017-5.875 10.07-12.726"
	})
});
var MAX_CATEGORY_TABS = 4;
function Collections() {
	const [activeCategory, setActiveCategory] = (0, import_react.useState)("All");
	const { productsQueryOptions } = useStoreProducts();
	const { data: productsData, isLoading } = useQuery(productsQueryOptions({
		limit: 12,
		sortBy: "createdAt",
		sortDirection: "desc"
	}));
	const products = (0, import_react.useMemo)(() => {
		if (!productsData?.data) return [];
		return toDisplayProducts(productsData.data);
	}, [productsData]);
	const categoryTabs = (0, import_react.useMemo)(() => {
		const categories = /* @__PURE__ */ new Map();
		for (const product of products) {
			if (product.category.name && product.category.name !== "Uncategorized") categories.set(product.category.id, product.category.name);
			if (categories.size >= MAX_CATEGORY_TABS - 1) break;
		}
		return ["All", ...Array.from(categories.values())];
	}, [products]);
	const handleCategoryChange = (category) => {
		if (category !== activeCategory) setActiveCategory(category);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		title: "Elevate Your Style with Our Latest Collection",
		description: "Each piece is crafted to enhance your fashion statement.",
		rightAsset: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarSolidIcon, { className: "@5xl:h-79 @6xl:h-96.5 h-20 @5xl:w-75.25 @6xl:w-61.5" }),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "@4x:px-12 @6xl:px-15 @7xl:px-20 px-5 pb-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-3",
				children: categoryTabs.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: activeCategory === tab ? "default" : "ghost",
					className: "@6xl:h-14 h-12 @6xl:px-6 px-4 py-3 text-lg",
					type: "button",
					onClick: () => handleCategoryChange(tab),
					children: tab
				}, tab))
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fade-in-0 animate-in duration-300",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionContainer, {
				products,
				isLoading,
				activeCategory
			})
		}, activeCategory)]
	});
}
function CtaContainer({ className, inline }) {
	if (inline) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex w-full items-center", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			className: "@4xl:w-auto w-full",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "secondary",
				size: "lg",
				type: "button",
				className: "@4xl:w-auto w-full gap-1.5",
				children: ["Shop Now", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-5" })]
			})
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("@4xl:px-12 @6xl:px-15 @7xl:px-20 px-5 pb-8", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex w-full items-center justify-end",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "secondary",
					size: "lg",
					type: "button",
					className: "gap-1.5",
					children: ["Shop Now", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-5" })]
				})
			})
		})
	});
}
var BallCircleIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 506 278",
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		clipPath: "url(#a)",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mask", {
			id: "b",
			width: "524",
			height: "524",
			x: "0",
			y: "-246",
			maskUnits: "userSpaceOnUse",
			style: { maskType: "luminance" },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#fff",
				d: "M524-246H0v524h524z"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
			mask: "url(#b)",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#B8A893",
				fillRule: "evenodd",
				d: "M346.196 185.087c-25.424 42.376-56.17 61.473-84.196 61.473-28.027 0-58.772-19.097-84.198-61.473C152.753 143.337 136.24 83.63 136.24 16s16.513-127.337 41.562-169.086c25.426-42.376 56.171-61.474 84.198-61.474s58.772 19.098 84.196 61.474C371.246-111.337 387.76-51.631 387.76 16c0 67.63-16.514 127.337-41.564 169.087M524 16c0-144.699-117.303-262-262-262C117.301-246 0-128.699 0 16c0 144.697 117.301 262 262 262 144.697 0 262-117.303 262-262M31.44 16c0 94.137 56.415 175.095 137.281 210.91C129.947 179.197 104.8 102.494 104.8 16c0-86.493 25.147-163.198 63.921-210.911C87.855-159.094 31.44-78.136 31.44 16m461.12 0c0 94.137-56.416 175.095-137.28 210.91C394.053 179.197 419.2 102.494 419.2 16c0-86.493-25.147-163.198-63.92-210.911C436.144-159.094 492.56-78.136 492.56 16M262 44.82c15.916 0 28.82-12.904 28.82-28.82S277.916-12.82 262-12.82 233.18.083 233.18 16 246.083 44.82 262 44.82",
				clipRule: "evenodd"
			})
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", {
		id: "a",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "#fff",
			d: "M0-246h524v524H0z"
		})
	}) })]
});
function CtaBanner() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		title: "Elevate Your Wardrobe",
		description: "Don't miss out – experience the epitome of fashion by clicking 'Buy Now' and embrace a world of chic elegance delivered to your doorstep. Your style journey begins here.",
		containerClassName: "bg-primary-70 border-transparent",
		rightAsset: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BallCircleIcon, { className: "@5xl:h-[316px] @6xl:h-[386px] h-24 @5xl:w-[301px] @6xl:w-[506px] opacity-30" }),
		rightAssetClassName: "@5xl:translate-x-4 @6xl:translate-x-10",
		rightAction: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaContainer, { inline: true }),
		headingClassName: "text-background",
		descriptionClassName: "text-dark-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {})
	});
}
var DialCircleIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 94 94",
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "92",
			height: "92",
			x: "1",
			y: "1",
			stroke: "#262626",
			strokeDasharray: "16 6",
			strokeWidth: "2",
			rx: "46"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			stroke: "#262626",
			strokeWidth: "3",
			d: "M79 47h15M0 47h15M47 15V0M47 94V79"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "66",
			height: "66",
			x: "14",
			y: "14",
			fill: "#1A1A1A",
			rx: "33"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "#C2B4A3",
			d: "M45.938 39.996A7.085 7.085 0 0 0 47 54.083a7.083 7.083 0 0 0 1.063-14.087v5.587a1.063 1.063 0 0 1-2.125 0zM48.417 34.958a1.417 1.417 0 1 1-2.834 0 1.417 1.417 0 0 1 2.834 0M59.042 48.417a1.417 1.417 0 1 1 0-2.834 1.417 1.417 0 0 1 0 2.834M34.958 48.417a1.417 1.417 0 1 1 0-2.834 1.417 1.417 0 0 1 0 2.834M39.487 37.484a1.417 1.417 0 1 1-2.004 2.003 1.417 1.417 0 0 1 2.004-2.004M56.517 54.513a1.416 1.416 0 1 1-2.004 2.004 1.416 1.416 0 0 1 2.004-2.004M56.517 39.487a1.417 1.417 0 1 1-2.004-2.004 1.417 1.417 0 0 1 2.004 2.004M39.487 56.516a1.417 1.417 0 1 1-2.004-2.003 1.417 1.417 0 0 1 2.004 2.003"
		})
	]
});
var DialOutlineDashIcon = (_props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 193 211",
	..._props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		fill: "#262626",
		d: "M115.312 37.323h1V36.16l-1.148.173zm15.376 0 .148-.99-1.148-.172v1.162zM68.641 33.64l.707.707zm0-14.495.707-.708zM54.145 33.64l-.707.707zm0-14.495.708.707zm137.71 123.214.707-.707zm0 14.496.707.707zm-14.496-14.496-.707-.707zm0 14.496-.707.707zm0-123.215-.707.707zm14.496 0 .707.707zm-14.496-14.495-.707-.708zm14.496 0 .707-.708zM68.641 156.855l.707.707zm-14.496 0-.707.707zm14.496-14.496.707-.707zm-14.496 0-.707-.707zM134.25.875a11.2 11.2 0 0 0-1.785-6.084l-1.682 1.083A9.2 9.2 0 0 1 132.25.875zm-5.166-9.465A11.2 11.2 0 0 0 123-10.375v2c1.844 0 3.559.539 5.001 1.467zM123-10.375c-2.24 0-4.329.655-6.084 1.785l1.083 1.682A9.2 9.2 0 0 1 123-8.375zm-9.465 5.166A11.2 11.2 0 0 0 111.75.875h2c0-1.844.539-3.56 1.467-5zM111.75.875c0 2.24.655 4.33 1.785 6.084l1.682-1.083A9.2 9.2 0 0 1 113.75.875zm5.166 9.465A11.2 11.2 0 0 0 123 12.125v-2a9.2 9.2 0 0 1-5.001-1.467zM123 12.125c2.24 0 4.329-.655 6.084-1.785l-1.083-1.682A9.2 9.2 0 0 1 123 10.125zm9.465-5.166A11.2 11.2 0 0 0 134.25.875h-2c0 1.844-.539 3.56-1.467 5zm-17.301 29.375a52 52 0 0 0-8.738 2.1l.634 1.897a50 50 0 0 1 8.401-2.02zm-14.981 4.648a52.4 52.4 0 0 0-14.523 10.47l1.43 1.399a50.4 50.4 0 0 1 13.967-10.07zm-18.92 15.58A52.1 52.1 0 0 0 73.09 72.49l1.91.593a50.1 50.1 0 0 1 7.858-15.318zm-9.749 22.485A52.6 52.6 0 0 0 70.75 88h2c0-2.937.252-5.815.735-8.613zM70.75 88c0 2.525.18 5.008.525 7.438l1.98-.282A51 51 0 0 1 72.75 88zm1.611 12.925a52 52 0 0 0 5.697 13.741l1.719-1.022a50 50 0 0 1-5.478-13.212zm8.808 18.389a52.6 52.6 0 0 0 10.517 10.517l1.2-1.6a50.5 50.5 0 0 1-10.117-10.117zm15.165 13.628a52 52 0 0 0 13.741 5.697l.493-1.938a50 50 0 0 1-13.212-5.478zm19.228 6.782a52.6 52.6 0 0 0 7.438.526v-2c-2.43 0-4.819-.172-7.156-.505zm7.438.526a52.6 52.6 0 0 0 7.438-.526l-.282-1.979a51 51 0 0 1-7.156.505zm12.925-1.611a52 52 0 0 0 13.741-5.697l-1.022-1.719a50 50 0 0 1-13.212 5.478zm18.389-8.808a52.6 52.6 0 0 0 10.517-10.517l-1.6-1.2a50.6 50.6 0 0 1-10.117 10.117zm13.628-15.165a52 52 0 0 0 5.697-13.741l-1.938-.493a50 50 0 0 1-5.478 13.212zm6.782-19.228c.347-2.43.526-4.913.526-7.438h-2c0 2.43-.172 4.82-.506 7.156zM175.25 88c0-3.052-.262-6.043-.764-8.953l-1.971.34A50.6 50.6 0 0 1 173.25 88zm-2.341-15.51a52.1 52.1 0 0 0-8.172-15.928l-1.596 1.204a50.1 50.1 0 0 1 7.858 15.318zM160.34 51.453a52.4 52.4 0 0 0-14.523-10.47l-.874 1.8a50.4 50.4 0 0 1 13.968 10.069zm-20.766-13.018a52 52 0 0 0-8.738-2.1l-.297 1.978a50 50 0 0 1 8.401 2.019zm-9.886-1.111v7.35h2v-7.35zm0 12.863v14.7h2v-14.7zm0 20.214v7.35h2V70.4zm0 7.35c0 1.334-.39 2.573-1.061 3.615l1.682 1.083a8.66 8.66 0 0 0 1.379-4.698zm-3.073 5.627a6.65 6.65 0 0 1-3.615 1.06v2a8.65 8.65 0 0 0 4.698-1.378zM123 84.437a6.65 6.65 0 0 1-3.615-1.06l-1.083 1.682A8.65 8.65 0 0 0 123 86.438zm-5.627-3.072a6.65 6.65 0 0 1-1.061-3.615h-2c0 1.73.507 3.343 1.379 4.698zm-1.061-3.615V70.4h-2v7.35zm0-12.863V50.186h-2v14.7zm0-20.214v-7.35h-2v7.35zM200.875 88c0-1.844.539-3.56 1.467-5l-1.682-1.084A11.2 11.2 0 0 0 198.875 88zm4.249-7.783a9.2 9.2 0 0 1 5.001-1.467v-2c-2.24 0-4.329.655-6.084 1.785zm5.001-1.467c1.844 0 3.559.539 5.001 1.467l1.083-1.682a11.2 11.2 0 0 0-6.084-1.785zm7.783 4.25a9.2 9.2 0 0 1 1.467 5h2a11.2 11.2 0 0 0-1.785-6.084zm1.467 5c0 1.844-.539 3.56-1.467 5l1.682 1.084A11.2 11.2 0 0 0 221.375 88zm-4.249 7.783a9.2 9.2 0 0 1-5.001 1.467v2c2.24 0 4.329-.655 6.084-1.785zm-5.001 1.467a9.2 9.2 0 0 1-5.001-1.467l-1.083 1.682a11.2 11.2 0 0 0 6.084 1.785zM202.342 93a9.2 9.2 0 0 1-1.467-5h-2c0 2.24.655 4.33 1.785 6.084zM35.875 97.25a9.2 9.2 0 0 1-5-1.467l-1.084 1.682a11.2 11.2 0 0 0 6.084 1.785zM28.092 93a9.2 9.2 0 0 1-1.467-5h-2c0 2.24.655 4.33 1.785 6.084zm-1.467-5c0-1.844.539-3.56 1.467-5l-1.682-1.084A11.2 11.2 0 0 0 24.625 88zm4.25-7.783a9.2 9.2 0 0 1 5-1.467v-2c-2.24 0-4.33.655-6.084 1.785zm5-1.467c1.844 0 3.56.539 5 1.467l1.084-1.682a11.2 11.2 0 0 0-6.084-1.785zM43.658 83a9.2 9.2 0 0 1 1.467 5h2c0-2.24-.655-4.33-1.785-6.084zm1.467 5c0 1.844-.539 3.56-1.467 5l1.682 1.084A11.2 11.2 0 0 0 47.125 88zm-4.25 7.783a9.2 9.2 0 0 1-5 1.467v2c2.24 0 4.33-.655 6.084-1.785zm27.059-62.849a9.2 9.2 0 0 1-4.573 2.499l.423 1.955a11.2 11.2 0 0 0 5.564-3.04zm-8.508 2.499a9.2 9.2 0 0 1-4.573-2.499l-1.415 1.414a11.2 11.2 0 0 0 5.564 3.04zm-4.573-2.499a9.2 9.2 0 0 1-2.5-4.573l-1.954.423a11.2 11.2 0 0 0 3.04 5.564zm-2.5-8.508a9.2 9.2 0 0 1 2.5-4.573l-1.415-1.415a11.2 11.2 0 0 0-3.039 5.565zm2.5-4.573a9.2 9.2 0 0 1 4.573-2.5l-.424-1.954a11.2 11.2 0 0 0-5.564 3.04zm8.508-2.5a9.2 9.2 0 0 1 4.573 2.5l1.414-1.415a11.2 11.2 0 0 0-5.564-3.039zm4.573 2.5a9.2 9.2 0 0 1 2.499 4.573l1.955-.423a11.2 11.2 0 0 0-3.04-5.565zm2.499 8.508a9.2 9.2 0 0 1-2.499 4.573l1.414 1.414a11.2 11.2 0 0 0 3.04-5.564zm122.129 113.292a11.2 11.2 0 0 0-5.565-3.04l-.423 1.955a9.2 9.2 0 0 1 4.573 2.499zm-10.346-3.04a11.2 11.2 0 0 0-5.564 3.04l1.414 1.414a9.2 9.2 0 0 1 4.573-2.499zm-5.564 3.04a11.2 11.2 0 0 0-3.04 5.564l1.955.423a9.2 9.2 0 0 1 2.499-4.573zm-3.04 10.345a11.2 11.2 0 0 0 3.04 5.565l1.414-1.415a9.2 9.2 0 0 1-2.499-4.573zm3.04 5.565a11.2 11.2 0 0 0 5.564 3.039l.423-1.955a9.2 9.2 0 0 1-4.573-2.499zm10.345 3.039a11.2 11.2 0 0 0 5.565-3.039l-1.415-1.415a9.2 9.2 0 0 1-4.573 2.499zm5.565-3.039a11.2 11.2 0 0 0 3.039-5.565l-1.955-.423a9.2 9.2 0 0 1-2.499 4.573zm3.039-10.346a11.2 11.2 0 0 0-3.039-5.564l-1.415 1.414a9.2 9.2 0 0 1 2.499 4.573zM178.066 32.934a9.2 9.2 0 0 1-2.499-4.573l-1.955.423a11.2 11.2 0 0 0 3.04 5.564zm-2.499-8.508a9.2 9.2 0 0 1 2.499-4.573l-1.414-1.415a11.2 11.2 0 0 0-3.04 5.565zm2.499-4.573a9.2 9.2 0 0 1 4.573-2.5l-.423-1.954a11.2 11.2 0 0 0-5.564 3.04zm8.508-2.5a9.2 9.2 0 0 1 4.573 2.5l1.415-1.415a11.2 11.2 0 0 0-5.565-3.039zm4.573 2.5a9.2 9.2 0 0 1 2.499 4.573l1.955-.423a11.2 11.2 0 0 0-3.039-5.565zm2.499 8.508a9.2 9.2 0 0 1-2.499 4.573l1.415 1.414a11.2 11.2 0 0 0 3.039-5.564zm-2.499 4.573a9.2 9.2 0 0 1-4.573 2.499l.423 1.955a11.2 11.2 0 0 0 5.565-3.04zm-8.508 2.499a9.2 9.2 0 0 1-4.573-2.499l-1.414 1.414a11.2 11.2 0 0 0 5.564 3.04zM67.934 156.147a9.2 9.2 0 0 1-4.573 2.499l.423 1.955a11.2 11.2 0 0 0 5.564-3.039zm-8.508 2.499a9.2 9.2 0 0 1-4.573-2.499l-1.415 1.415a11.2 11.2 0 0 0 5.564 3.039zm-4.573-2.499a9.2 9.2 0 0 1-2.5-4.573l-1.954.423a11.2 11.2 0 0 0 3.04 5.565zm-2.5-8.508a9.2 9.2 0 0 1 2.5-4.573l-1.415-1.414a11.2 11.2 0 0 0-3.039 5.564zm2.5-4.573a9.2 9.2 0 0 1 4.573-2.499l-.424-1.955a11.2 11.2 0 0 0-5.564 3.04zm8.508-2.499a9.2 9.2 0 0 1 4.573 2.499l1.414-1.414a11.2 11.2 0 0 0-5.564-3.04zm4.573 2.499a9.2 9.2 0 0 1 2.499 4.573l1.955-.423a11.2 11.2 0 0 0-3.04-5.564zm2.499 8.508a9.2 9.2 0 0 1-2.499 4.573l1.414 1.415a11.2 11.2 0 0 0 3.04-5.565z"
	})
});
var MagicCircleIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 94 94",
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "92",
			height: "92",
			x: "1",
			y: "1",
			stroke: "#262626",
			strokeDasharray: "16 6",
			strokeWidth: "2",
			rx: "46"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			stroke: "#262626",
			strokeWidth: "3",
			d: "M79 47h15M0 47h15M47 15V0M47 94V79"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "66",
			height: "66",
			x: "14",
			y: "14",
			fill: "#1A1A1A",
			rx: "33"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "#C2B4A3",
			d: "M35.446 35.447a4.085 4.085 0 0 0 0 5.776l2.25 2.25q.025-.03.053-.058l5.666-5.666.057-.053-2.249-2.25a4.085 4.085 0 0 0-5.777 0M44.971 39.194q-.025.03-.053.057l-5.666 5.667-.058.053 13.583 13.583a4.085 4.085 0 0 0 5.777-5.777zM52.808 33.269a.684.684 0 0 1 1.275 0l.61 1.551c.069.177.209.318.385.388l1.546.611a.688.688 0 0 1 0 1.28l-1.546.611a.69.69 0 0 0-.386.387l-.61 1.552a.684.684 0 0 1-1.274 0l-.61-1.552a.69.69 0 0 0-.385-.387l-1.546-.612a.688.688 0 0 1 0-1.279l1.546-.611a.69.69 0 0 0 .386-.388zM58.287 42.933a.684.684 0 0 1 1.274 0l.222.566c.07.177.21.318.386.387l.564.224a.688.688 0 0 1 0 1.278l-.564.224a.69.69 0 0 0-.386.387l-.222.566a.684.684 0 0 1-1.274 0l-.222-.566a.69.69 0 0 0-.386-.387l-.564-.224a.688.688 0 0 1 0-1.278l.564-.224a.69.69 0 0 0 .386-.387zM37.272 51.685a.684.684 0 0 1 1.274 0l.223.566c.07.177.209.317.385.387l.564.223a.688.688 0 0 1 0 1.28l-.564.222a.69.69 0 0 0-.386.388l-.222.565a.684.684 0 0 1-1.274 0l-.222-.565a.69.69 0 0 0-.386-.388l-.564-.223a.688.688 0 0 1 0-1.279l.564-.223a.69.69 0 0 0 .386-.387z"
		})
	]
});
var MagicOutlineDashIcon = (_props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 193 211",
	..._props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		stroke: "currentColor",
		strokeDasharray: "16 6",
		strokeWidth: "2",
		d: "M39.406 4.406c-11.541 11.542-11.541 30.255 0 41.797l16.275 16.274q.183-.211.384-.413l41-41q.201-.201.412-.383L81.203 4.406c-11.542-11.541-30.255-11.541-41.797 0ZM108.321 31.524a8 8 0 0 1-.384.412l-41 41a8 8 0 0 1-.413.384l98.273 98.274c11.542 11.541 30.255 11.541 41.797 0s11.541-30.255 0-41.797zM165.025-11.351c1.65-4.199 7.57-4.199 9.219 0l4.412 11.226a4.96 4.96 0 0 0 2.791 2.802l11.186 4.428c4.182 1.656 4.182 7.597 0 9.253l-11.186 4.428a4.96 4.96 0 0 0-2.791 2.802l-4.412 11.226c-1.649 4.199-7.569 4.199-9.219 0l-4.411-11.226a4.97 4.97 0 0 0-2.792-2.802l-11.185-4.428c-4.183-1.656-4.183-7.597 0-9.253l11.185-4.428a4.97 4.97 0 0 0 2.792-2.802zM204.664 58.577c1.649-4.198 7.569-4.198 9.219 0l1.608 4.093a4.97 4.97 0 0 0 2.792 2.802l4.078 1.615c4.183 1.655 4.183 7.597 0 9.252l-4.078 1.615a4.97 4.97 0 0 0-2.792 2.802l-1.608 4.093c-1.65 4.198-7.57 4.198-9.219 0l-1.609-4.093a4.96 4.96 0 0 0-2.791-2.802l-4.079-1.614c-4.182-1.656-4.182-7.598 0-9.254l4.079-1.614a4.96 4.96 0 0 0 2.791-2.802zM52.615 121.899c1.65-4.199 7.57-4.199 9.22 0l1.608 4.093a4.97 4.97 0 0 0 2.791 2.802l4.079 1.614c4.182 1.656 4.182 7.598 0 9.253l-4.079 1.615a4.96 4.96 0 0 0-2.791 2.802l-1.609 4.093c-1.65 4.198-7.57 4.198-9.219 0l-1.608-4.093a4.96 4.96 0 0 0-2.792-2.802l-4.078-1.615c-4.183-1.655-4.183-7.597 0-9.253l4.078-1.614a4.97 4.97 0 0 0 2.792-2.802z"
	})
});
var MaskCircleIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 94 94",
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "92",
			height: "92",
			x: "1",
			y: "1",
			stroke: "#262626",
			strokeDasharray: "16 6",
			strokeWidth: "2",
			rx: "46"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			stroke: "#262626",
			strokeWidth: "3",
			d: "M79 47h15M0 47h15M47 15V0M47 94V79"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "66",
			height: "66",
			x: "14",
			y: "14",
			fill: "#1A1A1A",
			rx: "33"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "#C2B4A3",
			fillRule: "evenodd",
			d: "M59.75 46.86v-7.752c0-3.215 0-4.822-1.002-5.701-1.002-.88-2.533-.615-5.596-.086l-1.494.258c-2.324.4-3.486.601-4.658.601s-2.334-.2-4.658-.602l-1.494-.258c-3.063-.528-4.594-.793-5.596.087-1.002.879-1.002 2.486-1.002 5.7v7.753c0 8.06 6.005 11.97 9.773 13.63 1.022.451 1.533.677 2.977.677s1.955-.226 2.977-.676c3.768-1.66 9.773-5.572 9.773-13.631m-19.591-3.912c.175-.362.83-.859 1.883-.859s1.708.497 1.883.86c.262.543.9.764 1.425.492s.738-.933.475-1.477c-.65-1.347-2.22-2.076-3.783-2.076-1.564 0-3.134.729-3.784 2.076-.262.544-.05 1.205.475 1.477a1.046 1.046 0 0 0 1.426-.493m11.8-.859c-1.054 0-1.709.497-1.884.86-.262.543-.9.764-1.425.492s-.738-.933-.475-1.477c.65-1.347 2.22-2.076 3.783-2.076 1.564 0 3.134.729 3.784 2.076.262.544.05 1.205-.475 1.477a1.046 1.046 0 0 1-1.426-.493c-.175-.362-.83-.859-1.883-.859m-10.642 8.512a1.14 1.14 0 0 1-.045-1.565c.402-.436 1.087-.439 1.512-.03.028.022.095.075.145.111.143.102.38.25.718.405.673.306 1.767.64 3.353.64s2.68-.334 3.353-.64c.338-.154.575-.303.718-.405a2 2 0 0 0 .165-.129h.001a1.036 1.036 0 0 1 1.49.048 1.13 1.13 0 0 1-.036 1.557l-.002.002-.002.002-.004.004-.01.01-.029.026-.084.075q-.105.089-.287.221a6.5 6.5 0 0 1-1.065.605c-.938.427-2.323.827-4.208.827s-3.27-.4-4.208-.827a6.5 6.5 0 0 1-1.065-.605 4 4 0 0 1-.408-.33z",
			clipRule: "evenodd"
		})
	]
});
var MaskOutlineDashIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 173 191",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		stroke: "#262626",
		strokeDasharray: "16 6",
		strokeWidth: "2",
		d: "M92.498 82.514c.198.16.682.544 1.048.805 1.033.733 2.745 1.813 5.193 2.928 4.869 2.217 12.785 4.637 24.261 4.637s19.392-2.42 24.261-4.637c2.448-1.115 4.16-2.195 5.192-2.928a16 16 0 0 0 1.197-.933l.008-.007c3.078-2.95 7.882-2.8 10.784.356 2.928 3.186 2.809 8.228-.265 11.262l-.013.013-.015.014-.031.03-.076.073-.204.19q-.237.219-.613.538c-.502.425-1.192.974-2.077 1.602-1.77 1.258-4.318 2.834-7.7 4.374-6.79 3.093-16.811 5.984-30.448 5.984s-23.658-2.891-30.448-5.984c-3.382-1.54-5.93-3.116-7.7-4.374a31 31 0 0 1-2.077-1.602c-.237-.2-.756-.672-.876-.785l-.017-.016c-3.074-3.034-3.252-8.133-.324-11.319 2.904-3.16 7.862-3.178 10.94-.22Zm0 0c-.08-.065.053.046 0 0Zm0 0c-.079-.066.02.018 0 0ZM215.25 66.987V10.898c0-23.258 0-34.887-7.249-41.25-7.25-6.363-18.33-4.45-40.491-.623l-10.808 1.867c-16.813 2.903-25.219 4.355-33.702 4.355s-16.889-1.452-33.702-4.355L78.49-30.975c-22.16-3.827-33.241-5.74-40.49.623s-7.25 17.992-7.25 41.25v56.09c0 58.31 43.45 86.607 70.71 98.623 7.395 3.259 11.093 4.889 21.54 4.889s14.145-1.63 21.54-4.889c27.261-12.016 70.71-40.313 70.71-98.624ZM87.125 32.47c-7.618 0-12.358 3.592-13.623 6.216-1.898 3.935-6.515 5.531-10.313 3.565-3.798-1.967-5.339-6.751-3.44-10.686 4.702-9.751 16.065-15.026 27.376-15.026s22.674 5.275 27.377 15.026c1.898 3.935.357 8.72-3.441 10.686s-8.415.37-10.313-3.565c-1.265-2.624-6.005-6.216-13.623-6.216Zm58.127 6.216c1.265-2.624 6.005-6.216 13.623-6.216s12.358 3.592 13.623 6.216c1.898 3.935 6.515 5.531 10.313 3.565 3.798-1.967 5.339-6.751 3.441-10.686-4.703-9.751-16.066-15.026-27.377-15.026s-22.674 5.275-27.377 15.026c-1.898 3.935-.357 8.72 3.441 10.686s8.415.37 10.313-3.565Z"
	})
});
var StarCircleIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 94 94",
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "92",
			height: "92",
			x: "1",
			y: "1",
			stroke: "#262626",
			strokeDasharray: "16 6",
			strokeWidth: "2",
			rx: "46"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			stroke: "#262626",
			strokeWidth: "3",
			d: "M79 47h15M0 47h15M47 15V0M47 94V79"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "66",
			height: "66",
			x: "14",
			y: "14",
			fill: "#1A1A1A",
			rx: "33"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "#C2B4A3",
			d: "M42.967 37.662c1.794-3.22 2.692-4.829 4.033-4.829s2.239 1.61 4.033 4.829l.464.833c.51.914.765 1.372 1.163 1.674.397.301.892.413 1.883.637l.901.204c3.485.789 5.227 1.183 5.641 2.516.415 1.333-.773 2.722-3.148 5.5l-.615.718c-.675.79-1.013 1.185-1.164 1.673s-.101 1.015 0 2.068l.094.959c.359 3.706.538 5.56-.547 6.383s-2.716.073-5.979-1.43l-.844-.388c-.927-.427-1.39-.64-1.882-.64-.491 0-.955.213-1.882.64l-.844.389c-3.263 1.502-4.894 2.253-5.98 1.429-1.084-.824-.905-2.677-.546-6.383l.093-.96c.102-1.052.153-1.579.002-2.067-.152-.489-.49-.883-1.165-1.673l-.614-.718c-2.376-2.778-3.564-4.167-3.15-5.5s2.157-1.727 5.642-2.516l.902-.204c.99-.224 1.485-.336 1.882-.637.398-.302.653-.76 1.163-1.674z"
		})
	]
});
var StarOutlineDashIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 173 191",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		stroke: "currentColor",
		strokeDasharray: "16 6",
		strokeWidth: "2",
		d: "M93.82.436C106.803-22.854 113.295-34.5 123-34.5S139.197-22.855 152.18.436l3.359 6.025c3.689 6.619 5.534 9.928 8.41 12.112s6.459 2.994 13.623 4.615l6.523 1.475c25.211 5.705 37.817 8.557 40.816 18.201s-5.594 19.694-22.782 39.793l-4.447 5.2c-4.884 5.711-7.326 8.567-8.425 12.1-1.098 3.533-.729 7.343.009 14.963l.673 6.938c2.598 26.816 3.898 40.224-3.954 46.184s-19.655.526-43.261-10.342l-6.107-2.812c-6.708-3.089-10.062-4.633-13.617-4.633s-6.909 1.544-13.617 4.633l-6.107 2.811c-23.606 10.869-35.409 16.304-43.26 10.343-7.852-5.96-6.553-19.368-3.955-46.184l.673-6.938c.738-7.62 1.107-11.43.009-14.963s-3.541-6.389-8.425-12.1l-4.447-5.2C26.683 62.558 18.09 52.509 21.089 42.864s15.605-12.496 40.816-18.2l6.523-1.477c7.164-1.62 10.746-2.431 13.623-4.614 2.876-2.184 4.72-5.493 8.41-12.112z"
	})
});
var TrophyCircleIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 94 94",
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "92",
			height: "92",
			x: "1",
			y: "1",
			stroke: "#262626",
			strokeDasharray: "16 6",
			strokeWidth: "2",
			rx: "46"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			stroke: "#262626",
			strokeWidth: "3",
			d: "M79 47h15M0 47h15M47 15V0M47 94V79"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "66",
			height: "66",
			x: "14",
			y: "14",
			fill: "#1A1A1A",
			rx: "33"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "#C2B4A3",
			d: "M61.167 41.563v.103c0 1.22 0 1.83-.294 2.328-.293.499-.826.795-1.892 1.387l-1.124.624c.774-2.618 1.033-5.43 1.128-7.837l.014-.313.003-.073c.922.32 1.44.559 1.764 1.007.4.557.4 1.296.4 2.774M32.833 41.563v.103c0 1.22 0 1.83.294 2.328.293.499.826.795 1.892 1.387l1.125.625c-.775-2.618-1.033-5.432-1.129-7.837l-.013-.314-.003-.074c-.923.32-1.441.56-1.765 1.008-.4.557-.4 1.296-.4 2.774"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "#C2B4A3",
			fillRule: "evenodd",
			d: "M47 32.833c2.527 0 4.609.223 6.201.492 1.613.272 2.42.408 3.094 1.238s.638 1.727.567 3.521c-.245 6.16-1.574 13.853-8.8 14.534v5.007h2.027c.675 0 1.256.477 1.389 1.139l.268 1.34H55.5a1.063 1.063 0 0 1 0 2.125h-17a1.063 1.063 0 0 1 0-2.125h3.754l.268-1.34a1.42 1.42 0 0 1 1.39-1.139h2.026v-5.007c-7.226-.68-8.555-8.374-8.8-14.534-.07-1.794-.106-2.691.568-3.521s1.48-.966 3.093-1.238c1.593-.27 3.675-.492 6.201-.492m1.35 5.949-.14-.25c-.538-.966-.807-1.449-1.21-1.449s-.672.483-1.21 1.449l-.14.25c-.152.274-.229.411-.348.502-.12.09-.268.124-.565.191l-.27.061c-1.045.237-1.568.355-1.693.755-.124.4.232.817.945 1.65l.184.216c.203.237.304.355.35.501s.03.305 0 .62l-.029.288c-.107 1.112-.161 1.668.165 1.915.325.248.814.022 1.793-.428l.253-.117c.279-.128.418-.192.565-.192.148 0 .286.064.565.192l.253.117c.979.45 1.468.676 1.794.428.325-.247.271-.803.163-1.915l-.027-.287c-.03-.316-.046-.474 0-.62.045-.147.146-.265.349-.502l.184-.216c.713-.833 1.069-1.25.945-1.65-.125-.4-.647-.518-1.693-.755l-.27-.06c-.297-.068-.446-.102-.565-.192-.12-.09-.196-.228-.349-.502",
			clipRule: "evenodd"
		})
	]
});
var TrophyOutlineDashIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 173 191",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		stroke: "currentColor",
		strokeDasharray: "16 6",
		strokeLinecap: "round",
		strokeWidth: "2",
		d: "M36.19 1.836q.053 1.145.098 2.265c.69 17.407 2.56 37.762 8.164 56.706l-8.136-4.52c-7.712-4.285-11.568-6.427-13.692-10.036S20.5 38.23 20.5 29.407v-.743c0-10.697 0-16.046 2.902-20.072C25.74 5.347 29.489 3.619 36.167 1.3m.024.536-.024-.536m.024.536-.024-.536m173.645.536q-.051 1.145-.096 2.265c-.691 17.407-2.561 37.76-8.164 56.703l8.131-4.517c7.712-4.285 11.569-6.427 13.692-10.036 2.124-3.61 2.124-8.021 2.124-16.844v-.743c.001-10.697.001-16.046-2.901-20.072-2.339-3.244-6.087-4.973-12.762-7.29m-.024.534.024-.535m-.024.535.024-.535M51.65 3.491c-.515-12.981-.773-19.472 4.104-25.477 4.876-6.006 10.712-6.99 22.384-8.96C89.659-32.89 104.72-34.5 123.002-34.5s33.342 1.61 44.864 3.554c11.672 1.97 17.508 2.954 22.384 8.96 4.876 6.005 4.618 12.496 4.103 25.477-1.77 44.567-11.387 100.233-63.665 105.157v36.227h14.659a10.25 10.25 0 0 1 10.051 8.24l1.94 9.697H184.5a7.688 7.688 0 1 1 0 15.376h-123a7.69 7.69 0 0 1-7.687-7.688 7.69 7.69 0 0 1 7.687-7.688h27.162l1.94-9.697a10.25 10.25 0 0 1 10.051-8.24h14.659v-36.227C63.037 103.722 53.42 48.058 51.651 3.491Zm80.104 3.24 1.008 1.807c1.107 1.986 1.66 2.979 2.523 3.634s1.937.898 4.087 1.384l1.956.443c7.564 1.711 11.346 2.567 12.245 5.46.9 2.894-1.678 5.908-6.834 11.938l-1.334 1.56c-1.466 1.713-2.198 2.57-2.528 3.63-.329 1.06-.219 2.203.003 4.489l.202 2.081c.779 8.045 1.169 12.068-1.187 13.856s-5.896.157-12.978-3.103l-1.832-.844c-2.012-.926-3.018-1.39-4.085-1.39s-2.073.464-4.085 1.39l-1.832.844c-7.082 3.26-10.623 4.89-12.978 3.103-2.356-1.788-1.966-5.81-1.187-13.856l.202-2.081c.222-2.286.332-3.43.003-4.489-.33-1.06-1.062-1.917-2.528-3.63l-1.334-1.56c-5.156-6.03-7.734-9.044-6.834-11.938.9-2.893 4.681-3.749 12.245-5.46l1.956-.443c2.15-.486 3.224-.73 4.087-1.384.863-.655 1.417-1.648 2.523-3.634l1.008-1.807C118.141-.256 120.088-3.75 123-3.75s4.859 3.494 8.754 10.48Z"
	})
});
var VennIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 94 94",
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "92",
			height: "92",
			x: "1",
			y: "1",
			stroke: "#262626",
			strokeDasharray: "16 6",
			strokeWidth: "2",
			rx: "46"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			stroke: "#262626",
			strokeWidth: "3",
			d: "M79 47h15M0 47h15M47 15V0M47 94V79"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "66",
			height: "66",
			x: "14",
			y: "14",
			fill: "#1A1A1A",
			rx: "33"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "#C2B4A3",
			d: "M55.5 41.333a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "#C2B4A3",
			d: "M37.13 45.277a8.5 8.5 0 1 0 12.636 6.318c-.882.237-1.809.363-2.766.363a10.63 10.63 0 0 1-9.87-6.681M51.798 50.816q.159.903.16 1.85c0 2.962-1.212 5.641-3.166 7.568a8.5 8.5 0 0 0 8.078-14.957 10.66 10.66 0 0 1-5.072 5.539"
		})
	]
});
var VennOutlineDashIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 173 191",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		fill: "currentColor",
		d: "m51.593 55.53.929-.37-.426-1.067-.998.569zm91.423 45.713.992-.124-.144-1.14-1.108.299zm14.697-5.633-.453-.892-.66.335.128.73zm36.694-40.08.495-.868-.998-.569-.426 1.066zm-58.444 108.222-.702-.712-.985.97 1.23.632zM123 87.5c-2.925 0-5.802-.208-8.615-.609l-.283 1.98c2.907.415 5.878.629 8.898.629zm-14.967-1.865a60.1 60.1 0 0 1-15.908-6.595l-1.022 1.719a62.1 62.1 0 0 0 16.436 6.814zm-21.29-10.198a60.9 60.9 0 0 1-12.18-12.18l-1.6 1.2a62.9 62.9 0 0 0 12.58 12.58zM70.96 57.875a60.1 60.1 0 0 1-6.595-15.908l-1.938.494a62.1 62.1 0 0 0 6.814 16.436zm-7.851-22.26A61 61 0 0 1 62.5 27h-2c0 3.02.214 5.99.629 8.898zM62.5 27c0-2.925.208-5.802.609-8.615l-1.98-.283A63 63 0 0 0 60.5 27zm1.865-14.967A60.1 60.1 0 0 1 70.96-3.875l-1.719-1.022a62.1 62.1 0 0 0-6.814 16.436zm10.198-21.29a60.9 60.9 0 0 1 12.18-12.18l-1.2-1.6a62.9 62.9 0 0 0-12.58 12.58zM92.125-25.04a60.1 60.1 0 0 1 15.908-6.595l-.494-1.938a62.1 62.1 0 0 0-16.436 6.814zm22.26-7.851A61 61 0 0 1 123-33.5v-2c-3.02 0-5.991.214-8.898.629zM123-33.5c2.925 0 5.802.208 8.615.609l.283-1.98A63 63 0 0 0 123-35.5zm14.967 1.865a60.1 60.1 0 0 1 15.908 6.595l1.022-1.719a62.1 62.1 0 0 0-16.436-6.814zm21.29 10.198a60.9 60.9 0 0 1 12.18 12.18l1.6-1.2a62.9 62.9 0 0 0-12.58-12.58zM175.04-3.875a60.2 60.2 0 0 1 6.595 15.908l1.938-.494a62.2 62.2 0 0 0-6.814-16.436zm7.851 22.26c.401 2.813.609 5.69.609 8.615h2c0-3.02-.214-5.99-.629-8.898zM183.5 27c0 2.925-.208 5.802-.609 8.615l1.98.283c.415-2.907.629-5.878.629-8.898zm-1.865 14.967a60.2 60.2 0 0 1-6.595 15.908l1.719 1.022a62.2 62.2 0 0 0 6.814-16.436zm-10.198 21.29a60.9 60.9 0 0 1-12.18 12.18l1.2 1.6a62.9 62.9 0 0 0 12.58-12.58zM153.875 79.04a60.1 60.1 0 0 1-15.908 6.595l.494 1.938a62.1 62.1 0 0 0 16.436-6.814zm-22.26 7.851c-2.813.401-5.69.609-8.615.609v2c3.02 0 5.991-.214 8.898-.629zM21.5 109c0-2.613.166-5.186.487-7.71l-1.984-.253A63 63 0 0 0 19.5 109zm1.492-13.416a60 60 0 0 1 5.304-14.47l-1.774-.923a62 62 0 0 0-5.48 14.951zm8.221-19.476a60.8 60.8 0 0 1 9.966-11.761l-1.35-1.476A62.8 62.8 0 0 0 29.536 75.02zm14.423-15.464a61 61 0 0 1 6.452-4.245l-.99-1.737a63 63 0 0 0-6.665 4.384zm5.029-4.742a78 78 0 0 0 3.55 7.643l1.765-.94a76 76 0 0 1-3.458-7.446zm6.745 13.097a78.2 78.2 0 0 0 10.56 13.102l1.412-1.415a76.2 76.2 0 0 1-10.289-12.767zm15.208 17.385a78 78 0 0 0 13.925 9.448l.938-1.767a76 76 0 0 1-13.568-9.206zm19.624 12.181a77.3 77.3 0 0 0 16.091 4.931l.375-1.965a75.3 75.3 0 0 1-15.675-4.803zm22.343 5.861c2.764.297 5.572.449 8.415.449v-2c-2.771 0-5.508-.149-8.202-.438zm8.415.449q3.768-.001 7.446-.351l-.189-1.991a77 77 0 0 1-7.257.342zm12.991-1.079a77 77 0 0 0 7.284-1.587l-.519-1.931a75 75 0 0 1-7.097 1.546zm6.032-2.428q.174 1.374.284 2.768l1.994-.159a62 62 0 0 0-.293-2.858zm.414 4.85q.063 1.383.063 2.782h2q0-1.444-.065-2.872zM142.5 109c0 2.925-.208 5.802-.609 8.615l1.98.283c.415-2.907.629-5.878.629-8.898zm-1.865 14.967a60.2 60.2 0 0 1-6.595 15.908l1.719 1.022a62.2 62.2 0 0 0 6.814-16.436zm-10.198 21.29a60.9 60.9 0 0 1-12.18 12.18l1.2 1.6a62.9 62.9 0 0 0 12.58-12.58zm-17.562 15.783a60.2 60.2 0 0 1-15.908 6.595l.494 1.938a62.2 62.2 0 0 0 16.436-6.814zm-22.26 7.851c-2.813.401-5.69.609-8.615.609v2c3.02 0 5.99-.214 8.898-.629zM82 169.5c-2.925 0-5.802-.208-8.615-.609l-.283 1.98c2.907.415 5.878.629 8.898.629zm-14.967-1.865a60.2 60.2 0 0 1-15.908-6.595l-1.022 1.719a62.2 62.2 0 0 0 16.436 6.814zm-21.29-10.198a60.9 60.9 0 0 1-12.18-12.18l-1.6 1.2a62.9 62.9 0 0 0 12.58 12.58zM29.96 139.875a60.1 60.1 0 0 1-6.595-15.908l-1.938.494a62.1 62.1 0 0 0 6.814 16.436zm-7.851-22.26A61 61 0 0 1 21.5 109h-2c0 3.02.214 5.991.629 8.898zm134.619-21.832q.416 2.366.683 4.78l1.988-.219a78 78 0 0 0-.701-4.907zm.996 8.389q.15 2.394.151 4.828h2q0-2.496-.155-4.953zm.151 4.828q-.001 3.687-.345 7.282l1.991.19q.353-3.69.354-7.472zm-1.059 12.703a75.3 75.3 0 0 1-3.794 14.054l1.872.705a77.3 77.3 0 0 0 3.894-14.427zm-5.906 19.096a76 76 0 0 1-7.351 12.567l1.621 1.171a78 78 0 0 0 7.546-12.899zm-10.708 16.882a77 77 0 0 1-4.941 5.359l1.404 1.424a78 78 0 0 0 5.07-5.499zm-4.696 6.961a62 62 0 0 0 9.949 4.06l.592-1.91a60 60 0 0 1-9.628-3.93zm17.789 5.945c3.479.6 7.056.913 10.705.913v-2c-3.535 0-6.998-.303-10.365-.884zM164 171.5c3.02 0 5.991-.214 8.897-.629l-.282-1.98c-2.813.401-5.69.609-8.615.609zm15.46-1.927a62.2 62.2 0 0 0 16.437-6.814l-1.022-1.719a60.2 60.2 0 0 1-15.908 6.595zm21.997-10.536a62.9 62.9 0 0 0 12.58-12.58l-1.601-1.2a60.9 60.9 0 0 1-12.179 12.18zm16.302-18.14a62.2 62.2 0 0 0 6.814-16.436l-1.939-.494a60.2 60.2 0 0 1-6.594 15.908zm8.112-22.999c.414-2.907.629-5.878.629-8.898h-2c0 2.925-.208 5.802-.609 8.615zM226.5 109a63 63 0 0 0-.503-7.963l-1.984.253c.321 2.524.487 5.097.487 7.71zm-1.542-13.858a62 62 0 0 0-5.48-14.951l-1.774.923a60 60 0 0 1 5.303 14.47zm-8.494-20.122a62.8 62.8 0 0 0-10.293-12.15l-1.35 1.477a60.8 60.8 0 0 1 9.965 11.761zm-14.897-15.974a63 63 0 0 0-6.665-4.384l-.99 1.738a61 61 0 0 1 6.452 4.244zm-8.089-3.887a75 75 0 0 1-2.735 6.052l1.785.903a77 77 0 0 0 2.807-6.212zm-5.129 10.42a76 76 0 0 1-7.729 10.788l1.518 1.302a78 78 0 0 0 7.932-11.071zm-11.094 14.462a76 76 0 0 1-10.068 8.647l1.166 1.625a78 78 0 0 0 10.332-8.873zm-14.208 11.417a76 76 0 0 1-5.787 3.26l.905 1.784a78 78 0 0 0 5.939-3.346z"
	})
});
var features = [
	{
		title: "Passionate Craftsmanship",
		description: "Every garment at StyleLoom is crafted with passion, reflecting our commitment to quality and innovation.",
		icon: StarCircleIcon,
		outlineIcon: StarOutlineDashIcon
	},
	{
		title: "Fashion Forward",
		description: "We're more than a brand; we're trendsetters, curating styles that empower and inspire confidence.",
		icon: VennIcon,
		outlineIcon: VennOutlineDashIcon
	},
	{
		title: "Customer-Centric Approach",
		description: "At StyleLoom, our customers are at the heart of everything we do. Your satisfaction is our measure of success.",
		icon: MaskCircleIcon,
		outlineIcon: MaskOutlineDashIcon
	},
	{
		title: "Global Inspiration",
		description: "Influenced by global trends, we bring you a diverse and dynamic collection, embodying the spirit of fashion from around the world.",
		icon: TrophyCircleIcon,
		outlineIcon: TrophyOutlineDashIcon
	},
	{
		title: "Empowering Your Style",
		description: "Beyond clothing, StyleLoom is a lifestyle. Join us on a journey of self-expression and empowerment through fashion.",
		icon: MagicCircleIcon,
		outlineIcon: MagicOutlineDashIcon
	},
	{
		title: "Sustainable Practices",
		description: "StyleLoom is committed to sustainability, integrating eco-friendly practices into our production process.",
		icon: DialCircleIcon,
		outlineIcon: DialOutlineDashIcon
	}
];
function FeatureGridItem({ title, description, icon, iconClassName, outlineIcon, outlineIconClassName, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative border-dashed @4xl:p-10 @6xl:p-[50px] @7xl:p-[60px] p-[30px]", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("@4xl:mb-10 @6xl:mb-[50px] mb-6 @6xl:size-24 size-[76px]", iconClassName),
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "@4xl:text-xl @6xl:text-2xl text-lg",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: description })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("absolute top-0 right-0 size-[173px]", outlineIconClassName),
				children: outlineIcon
			})
		]
	});
}
function FeatureGridContainer() {
	const columns2 = 2;
	const columns3 = 3;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid @4xl:grid-cols-2 @6xl:grid-cols-3 grid-cols-1",
		children: features.map((feature, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureGridItem, {
			title: feature.title,
			description: feature.description,
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(feature.icon, {}),
			outlineIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(feature.outlineIcon, { className: "text-border" }),
			className: gridCellBorderClasses(index, columns2, columns3, true)
		}, feature.title))
	});
}
function FeatureGrid() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		title: "Crafting Trends, Inspiring Confidence",
		description: "Explore a world of fashion at ShopStack, where trends meet affordability.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureGridContainer, {})
	});
}
function Heading({ title, subtitle, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("space-y-6", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-extrabold @6xl:text-5xl text-3xl tracking-tight",
			children: title
		}), subtitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "max-w-prose text-body-40",
			children: subtitle
		}) : null]
	});
}
function Tags$1({ items, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-wrap gap-3", className),
		children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			className: "@6xl:h-14 h-12 @6xl:px-6 py-3 text-lg",
			children: item
		}, index))
	});
}
function CounterItem({ label, value, extraTop }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("border border-dashed p-7.5 @4xl:px-12 @7xl:px-17.5 @4xl:pb-8 @6xl:pb-13.5", extraTop ? "@4xl:border-t-0 @4xl:pt-14.5 @6xl:pt-22" : "@4xl:pt-16 @6xl:pt-12.5"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-extrabold @4xl:text-4xl @6xl:text-[50px] text-3xl text-foreground",
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "@6xl:text-lg text-muted-foreground text-sm",
			children: label
		})]
	});
}
function CounterBox({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-2",
		children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CounterItem, {
			value: item.value,
			label: item.label,
			extraTop: index < 2
		}, item.label))
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "@container container mx-auto space-y-8 px-4 pt-[60px]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative rounded-2xl border border-dashed",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1974&auto=format&fit=crop",
					alt: "Hero",
					className: "h-[420px] w-full rounded-2xl rounded-b-none object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "-translate-x-1/2 -bottom-12 absolute left-1/2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative flex h-[94px] w-[198px] items-center justify-center rounded-2xl bg-background",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "secondary",
								size: "lg",
								type: "button",
								className: "h-16 gap-0.5 px-7! text-lg",
								children: ["Shop now", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-5" })]
							})
						})
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid @4xl:grid-cols-2 grid-cols-1 gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-8 @4xl:p-12 @6xl:p-[60px] @7xl:p-20 p-3 pt-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tags$1, { items: [
						"All",
						"Mens",
						"Womens",
						"Kids"
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
						title: "ELEVATE YOUR STYLE WITH SHOPSTACK",
						subtitle: "Explore a world of fashion at Shop.Stack, where trends meet affordability. Immerse yourself in the latest styles and seize exclusive promotions."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CounterBox, { items: [
					{
						value: "1,500 +",
						label: "Fashion Products"
					},
					{
						value: "50 +",
						label: "New arrivals every month"
					},
					{
						value: "30%",
						label: "OFF on select items"
					},
					{
						value: "95%",
						label: "Customer Satisfaction Rate"
					}
				] })]
			})]
		})
	});
}
function RouteComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureGrid, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collections, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBanner, {})
		]
	});
}
//#endregion
export { RouteComponent as component };
