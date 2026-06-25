import { o as __toESM } from "./_runtime.mjs";
import { r as toDisplayProducts } from "./_ssr/products-query-helpers-YIHV58XJ.mjs";
import { w as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { t as Button } from "./_ssr/button-DQSToWRX.mjs";
import { p as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { o as useQuery } from "./_libs/tanstack__react-query.mjs";
import { n as storeProductsQueryOptions } from "./_ssr/use-store-product-C0VjBbOQ.mjs";
import { Jt as ArrowLeft, Q as List, Z as LoaderCircle, ct as Grid3x3, x as ShoppingBag } from "./_libs/lucide-react.mjs";
import { t as Separator$1 } from "./_ssr/separator-CLOPUVDG.mjs";
import { a as BreadcrumbPage, i as BreadcrumbList, n as BreadcrumbItem, o as BreadcrumbSeparator, r as BreadcrumbLink, t as Breadcrumb } from "./_ssr/breadcrumb-CWxKtsMG.mjs";
import { a as subcategoriesQueryOptions, i as storeCategoryBySlugQueryOptions } from "./_ssr/use-store-categories-BiYNy2a5.mjs";
import { t as Route } from "./_slug-DE0XW6wD.mjs";
import { s as NotFound } from "./_ssr/notfound-CG7ZW3I5.mjs";
import { r as toUICategory, t as CategoryGrid } from "./_ssr/category-transformers-Dqw6r5sC.mjs";
import { t as ProductGrid } from "./_ssr/product-grid-DqnKZ1d-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-BAxStvyN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CategoryDetailTemplate({ slug }) {
	const [viewMode, setViewMode] = (0, import_react.useState)("grid");
	const { data: categoryData, isPending: isCategoryPending, error: categoryError } = useQuery(storeCategoryBySlugQueryOptions(slug));
	const category = categoryData?.category;
	const { data: subcategoriesData } = useQuery({
		...subcategoriesQueryOptions(category?.id ?? ""),
		enabled: !!category?.id
	});
	const { data: productsData, isPending: isProductsPending } = useQuery({
		...storeProductsQueryOptions({
			categoryId: category?.id,
			limit: 20,
			sortBy: "createdAt",
			sortDirection: "desc"
		}),
		enabled: !!category?.id
	});
	const products = (0, import_react.useMemo)(() => toDisplayProducts(productsData?.data ?? []), [productsData?.data]);
	const subcategories = (0, import_react.useMemo)(() => (subcategoriesData?.categories ?? []).map(toUICategory), [subcategoriesData?.categories]);
	const breadcrumb = (0, import_react.useMemo)(() => {
		if (!category) return [];
		return [{
			id: category.id,
			name: category.name,
			slug: category.slug
		}];
	}, [category]);
	if (isCategoryPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "@container container mx-auto flex min-h-100 items-center justify-center px-4 py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-6 w-6 animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Loading category..." })]
		})
	});
	if (categoryError || !category) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "@container container mx-auto px-4 py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotFound, {
			title: "Category not found",
			description: "The category you're looking for doesn't exist or has been removed.",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-10 w-10 text-muted-foreground" }),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/category",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					children: "Browse All Categories"
				})
			})
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "@container container mx-auto px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumb, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BreadcrumbList, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbLink, {
						href: "/",
						children: "Home"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbSeparator, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbLink, {
						href: "/category",
						children: "Categories"
					}) }),
					breadcrumb.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbSeparator, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbItem, { children: index === breadcrumb.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbPage, { children: item.name }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbLink, {
							href: `/category/${item.slug}`,
							children: item.name
						}) })]
					}, item.id))
				] }) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex @md:flex-row flex-col @md:items-center @md:justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [category.icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-2xl",
								children: category.icon
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-bold text-3xl tracking-tight",
								children: category.name
							})]
						}),
						category.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 @md:max-w-2xl text-muted-foreground",
							children: category.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-muted-foreground text-sm",
							children: [category.productCount, " products in this category"]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/category",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							className: "gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), "Back to Categories"]
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid @5xl:grid-cols-12 gap-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "@5xl:col-span-12 space-y-8",
					children: [
						subcategories.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mb-4 font-semibold text-xl",
							children: "Subcategories"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryGrid, {
							categories: subcategories,
							variant: "default",
							columns: {
								default: 2,
								sm: 3,
								md: 4,
								lg: 5,
								xl: 6
							}
						})] }),
						subcategories.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator$1, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6 flex @4xl:flex-row flex-col @4xl:items-center @4xl:justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-semibold text-xl",
								children: ["Products in ", category.name]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: viewMode === "grid" ? "default" : "outline",
									size: "sm",
									onClick: () => setViewMode("grid"),
									className: "gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grid3x3, { className: "h-4 w-4" }), "Grid"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: viewMode === "list" ? "default" : "outline",
									size: "sm",
									onClick: () => setViewMode("list"),
									className: "gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { className: "h-4 w-4" }), "List"]
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, {
							products,
							viewMode,
							isLoading: isProductsPending
						})] })
					]
				})
			})
		]
	});
}
function RouteComponent() {
	const { slug } = Route.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryDetailTemplate, { slug });
}
//#endregion
export { RouteComponent as component };
