import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-Pgq5HWQm.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { h as useParams, p as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as useQuery } from "../_libs/tanstack__react-query.mjs";
import { Nt as ChevronDown, Z as LoaderCircle, jt as ChevronRight, wt as Circle } from "../_libs/lucide-react.mjs";
import { t as Separator$1 } from "./separator-CLOPUVDG.mjs";
import { a as CardHeader, n as CardContent, o as CardTitle, t as Card } from "./card-BDvQuHpQ.mjs";
import { t as Badge } from "./badge-NA1wPZ4a.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs$1 } from "./tabs-DkMjjh1r.mjs";
import { a as BreadcrumbPage, i as BreadcrumbList, n as BreadcrumbItem, o as BreadcrumbSeparator, r as BreadcrumbLink, t as Breadcrumb } from "./breadcrumb-CWxKtsMG.mjs";
import { n as featuredCategoriesQueryOptions, r as storeCategoriesQueryOptions, t as categoryTreeQueryOptions } from "./use-store-categories-BiYNy2a5.mjs";
import { i as toUICategoryTree, n as filterRootCategories, r as toUICategory, t as CategoryGrid } from "./category-transformers-Dqw6r5sC.mjs";
import { n as CollapsibleContent, r as CollapsibleTrigger, t as Collapsible$1 } from "./collapsible-CrHAV_WW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/category-fIdnBhTD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CategoryTree({ categories, className, showProductCount = true, expandedCategories = [], onExpandedChange }) {
	const [localExpanded, setLocalExpanded] = (0, import_react.useState)(expandedCategories);
	const currentSlug = useParams({ strict: false }).slug;
	const toggleExpanded = (categoryId) => {
		setLocalExpanded(localExpanded.includes(categoryId) ? localExpanded.filter((id) => id !== categoryId) : [...localExpanded, categoryId]);
		onExpandedChange?.(categoryId, !localExpanded.includes(categoryId));
	};
	const renderCategory = (category, level = 0) => {
		const isExpanded = localExpanded.includes(category.id);
		const isActive = category.slug === currentSlug;
		const hasChildren = category.subcategories && category.subcategories.length > 0;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Collapsible$1, {
			open: isExpanded,
			onOpenChange: () => toggleExpanded(category.id),
			className: "w-full",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("group relative flex items-center gap-2 rounded-md py-1.5 pr-2 transition-colors hover:bg-accent/50", isActive && "bg-accent font-medium", level > 0 && "ml-3 border-muted-foreground/50 border-l pl-3"),
				children: [hasChildren ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						className: cn("h-6 w-6 shrink-0 p-0 text-muted-foreground hover:text-foreground", isActive && "text-accent-foreground"),
						children: isExpanded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3.5 w-3.5" })
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-6 w-6 shrink-0 items-center justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: cn("h-1.5 w-1.5 fill-muted-foreground text-muted-foreground", isActive && "fill-primary text-primary") })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/category/$slug",
					params: { slug: category.slug },
					className: "flex flex-1 items-center gap-2 overflow-hidden",
					activeProps: { className: "font-medium text-primary" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex-1 truncate text-sm",
						children: category.name
					}), showProductCount && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: isActive ? "default" : "secondary",
						className: cn("ml-auto h-5 px-1.5 text-[10px]", !isActive && "bg-muted text-muted-foreground"),
						children: category.productCount
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleContent, { children: hasChildren && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1",
				children: category.subcategories.map((subcategory) => renderCategory(subcategory, level + 1))
			}) })]
		}, category.id);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("space-y-1", className),
		children: categories.map((category) => renderCategory(category))
	});
}
function CategoryTemplate() {
	const { data: categoriesData, isPending: isCategoriesPending, error: categoriesError } = useQuery(storeCategoriesQueryOptions({ limit: 50 }));
	const { data: featuredData, isPending: isFeaturedPending, error: featuredError } = useQuery(featuredCategoriesQueryOptions(8));
	const { data: treeData, isPending: isTreePending, error: treeError } = useQuery(categoryTreeQueryOptions());
	const rootCategories = (0, import_react.useMemo)(() => {
		return filterRootCategories((categoriesData?.data ?? []).map(toUICategory));
	}, [categoriesData?.data]);
	const featuredCategories = (0, import_react.useMemo)(() => (featuredData?.categories ?? []).map(toUICategory), [featuredData?.categories]);
	const categoryTree = (0, import_react.useMemo)(() => (treeData?.tree ?? []).map(toUICategoryTree), [treeData?.tree]);
	const isPending = isCategoriesPending || isFeaturedPending || isTreePending;
	const hasError = categoriesError || featuredError || treeError;
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "@container container mx-auto flex min-h-100 items-center justify-center px-4 py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-6 w-6 animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Loading categories..." })]
		})
	});
	if (hasError) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "@container container mx-auto flex min-h-100 items-center justify-center px-4 py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-center text-muted-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Failed to load categories. Please try again later." })
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "@container container mx-auto px-4 py-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumb, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BreadcrumbList, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbLink, {
						href: "/",
						children: "Home"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbSeparator, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbPage, { children: "Categories" }) })
				] }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 font-bold text-3xl tracking-tight",
					children: "All Categories"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted-foreground",
					children: "Browse our wide range of product categories"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid @5xl:grid-cols-12 gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "@5xl:col-span-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Browse Categories" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryTree, {
					categories: categoryTree,
					showProductCount: true
				}) })] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "@5xl:col-span-9 space-y-8",
				children: [
					featuredCategories.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-4 font-semibold text-xl",
						children: "Featured Categories"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryGrid, {
						categories: featuredCategories,
						variant: "featured",
						columns: {
							default: 1,
							sm: 2,
							md: 3,
							lg: 3,
							xl: 3
						}
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator$1, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs$1, {
						defaultValue: "grid",
						className: "w-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-semibold text-xl",
									children: "All Categories"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
									value: "grid",
									children: "Grid View"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
									value: "list",
									children: "List View"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
								value: "grid",
								className: "mt-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryGrid, {
									categories: rootCategories,
									variant: "default",
									columns: {
										default: 2,
										sm: 3,
										md: 4,
										lg: 4,
										xl: 5
									}
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
								value: "list",
								className: "mt-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryGrid, {
									categories: rootCategories,
									variant: "list",
									columns: {
										default: 1,
										sm: 1,
										md: 2,
										lg: 2,
										xl: 2
									}
								})
							})
						]
					})
				]
			})]
		})]
	});
}
var SplitComponent = CategoryTemplate;
//#endregion
export { SplitComponent as component };
