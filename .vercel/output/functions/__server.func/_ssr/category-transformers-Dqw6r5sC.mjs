import { t as cn } from "./utils-Pgq5HWQm.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { B as Package, qt as ArrowRight } from "../_libs/lucide-react.mjs";
import { p as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as CardContent, t as Card } from "./card-BDvQuHpQ.mjs";
import { t as Badge } from "./badge-NA1wPZ4a.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/category-transformers-Dqw6r5sC.js
var import_jsx_runtime = require_jsx_runtime();
function CategoryCardGrid({ category, variant = "default", className, showProductCount = true }) {
	const isCompact = variant === "compact";
	const isFeatured = variant === "featured";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/category/$slug",
		params: { slug: category.slug },
		className: "group block h-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			className: cn("hover:-translate-y-1 h-full overflow-hidden py-0 transition-all duration-300 hover:shadow-xl", isFeatured ? "border-primary/20 shadow-md" : "border-muted hover:border-primary/50", className),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				className: "flex h-full flex-col p-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("relative w-full overflow-hidden bg-muted", isCompact ? "aspect-2/1" : isFeatured ? "aspect-video" : "aspect-4/3"),
						children: [
							category.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: category.image,
								alt: category.name,
								className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-full w-full items-center justify-center bg-secondary/20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-6xl",
									children: category.icon
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute top-3 left-3 flex flex-col gap-2",
								children: category.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									className: "bg-primary/90 shadow-sm backdrop-blur-sm hover:bg-primary",
									children: "Featured"
								})
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-1 flex-col p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-2 flex items-start justify-between gap-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [category.icon && !category.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xl",
									children: category.icon
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: cn("font-bold transition-colors group-hover:text-primary", isCompact ? "text-lg" : "text-xl"),
									children: category.name
								})]
							})
						}),
						!isCompact && category.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-4 line-clamp-2 flex-1 text-muted-foreground text-sm",
							children: category.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: cn("mt-auto flex items-center justify-between border-border/50 border-t pt-3", isCompact && "pt-2"),
							children: [showProductCount && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 font-medium text-muted-foreground text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [category.productCount, " products"] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "-translate-x-2 flex items-center font-medium text-primary text-sm opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100",
								children: ["Browse ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-3.5 w-3.5" })]
							})]
						})
					]
				})]
			})
		})
	});
}
function CategoryCardList({ category, className, showProductCount = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/category/$slug",
		params: { slug: category.slug },
		className: "group block",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			className: cn("overflow-hidden py-0 transition-all hover:border-primary/50 hover:shadow-md", className),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				className: "flex items-center gap-4 p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative h-16 w-16 shrink-0 overflow-hidden rounded-md bg-muted",
						children: category.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: category.image,
							alt: category.name,
							className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-full w-full items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-2xl",
								children: category.icon
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-1 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "truncate font-bold text-lg transition-colors group-hover:text-primary",
									children: category.name
								}), category.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "secondary",
									className: "h-5 px-1.5 text-[10px]",
									children: "Featured"
								})]
							}),
							category.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-1 line-clamp-1 text-muted-foreground text-sm",
								children: category.description
							}),
							showProductCount && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1 text-muted-foreground text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-3 w-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [category.productCount, " products"] })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "icon",
						variant: "ghost",
						className: "shrink-0 text-muted-foreground group-hover:text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-5 w-5" })
					})
				]
			})
		})
	});
}
function CategoryCard({ category, variant = "default", className, showProductCount = true }) {
	if (variant === "list") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryCardList, {
		category,
		className,
		showProductCount
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryCardGrid, {
		category,
		variant,
		className,
		showProductCount
	});
}
/**
* Grid utility functions for Tailwind CSS
* These functions help generate static grid classes that can be properly analyzed by Tailwind
*/
/**
* Maps grid column numbers to their corresponding Tailwind classes
*/
var getGridColsClass = (cols) => {
	return {
		1: "grid-cols-1",
		2: "grid-cols-2",
		3: "grid-cols-3",
		4: "grid-cols-4",
		5: "grid-cols-5",
		6: "grid-cols-6",
		7: "grid-cols-7",
		8: "grid-cols-8",
		9: "grid-cols-9",
		10: "grid-cols-10",
		11: "grid-cols-11",
		12: "grid-cols-12"
	}[cols] || "grid-cols-2";
};
/**
* Maps grid column numbers and breakpoints to their corresponding responsive Tailwind classes
*/
var getResponsiveGridColsClass = (cols, breakpoint) => {
	return {
		"@xl": {
			1: "@xl:grid-cols-1",
			2: "@xl:grid-cols-2",
			3: "@xl:grid-cols-3",
			4: "@xl:grid-cols-4",
			5: "@xl:grid-cols-5",
			6: "@xl:grid-cols-6",
			7: "@xl:grid-cols-7",
			8: "@xl:grid-cols-8",
			9: "@xl:grid-cols-9",
			10: "@xl:grid-cols-10",
			11: "@xl:grid-cols-11",
			12: "@xl:grid-cols-12"
		},
		"@2xl": {
			1: "@2xl:grid-cols-1",
			2: "@2xl:grid-cols-2",
			3: "@2xl:grid-cols-3",
			4: "@2xl:grid-cols-4",
			5: "@2xl:grid-cols-5",
			6: "@2xl:grid-cols-6",
			7: "@2xl:grid-cols-7",
			8: "@2xl:grid-cols-8",
			9: "@2xl:grid-cols-9",
			10: "@2xl:grid-cols-10",
			11: "@2xl:grid-cols-11",
			12: "@2xl:grid-cols-12"
		},
		"@5xl": {
			1: "@5xl:grid-cols-1",
			2: "@5xl:grid-cols-2",
			3: "@5xl:grid-cols-3",
			4: "@5xl:grid-cols-4",
			5: "@5xl:grid-cols-5",
			6: "@5xl:grid-cols-6",
			7: "@5xl:grid-cols-7",
			8: "@5xl:grid-cols-8",
			9: "@5xl:grid-cols-9",
			10: "@5xl:grid-cols-10",
			11: "@5xl:grid-cols-11",
			12: "@5xl:grid-cols-12"
		},
		"@7xl": {
			1: "@7xl:grid-cols-1",
			2: "@7xl:grid-cols-2",
			3: "@7xl:grid-cols-3",
			4: "@7xl:grid-cols-4",
			5: "@7xl:grid-cols-5",
			6: "@7xl:grid-cols-6",
			7: "@7xl:grid-cols-7",
			8: "@7xl:grid-cols-8",
			9: "@7xl:grid-cols-9",
			10: "@7xl:grid-cols-10",
			11: "@7xl:grid-cols-11",
			12: "@7xl:grid-cols-12"
		}
	}[breakpoint]?.[cols] || "";
};
function CategoryGrid({ categories, variant = "default", columns = {
	default: 2,
	sm: 3,
	md: 4,
	lg: 5,
	xl: 6
}, className, showProductCount = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("grid gap-4", columns.default && getGridColsClass(columns.default), columns.sm && getResponsiveGridColsClass(columns.sm, "@xl"), columns.md && getResponsiveGridColsClass(columns.md, "@2xl"), columns.lg && getResponsiveGridColsClass(columns.lg, "@5xl"), columns.xl && getResponsiveGridColsClass(columns.xl, "@7xl"), className),
		children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryCard, {
			category,
			variant,
			showProductCount
		}, category.id))
	});
}
/**
* Transform NormalizedCategory (API response) to Category (UI type)
*/
function toUICategory(cat) {
	return {
		id: cat.id,
		name: cat.name,
		slug: cat.slug,
		description: cat.description ?? void 0,
		image: cat.image ?? void 0,
		icon: cat.icon ?? void 0,
		parentId: cat.parentId ?? void 0,
		level: cat.level,
		productCount: cat.productCount,
		isActive: cat.isActive,
		featured: cat.featured,
		sortOrder: cat.sortOrder
	};
}
/**
* Transform CategoryTreeNode (API tree with `children`) to CategoryWithChildren (UI type with `subcategories`)
*/
function toUICategoryTree(node) {
	return {
		...toUICategory(node),
		subcategories: node.children.map(toUICategoryTree)
	};
}
/**
* Filter root categories from a list (level 0 or no parent)
*/
function filterRootCategories(categories) {
	return categories.filter((cat) => cat.level === 0 || !cat.parentId);
}
//#endregion
export { toUICategoryTree as i, filterRootCategories as n, toUICategory as r, CategoryGrid as t };
