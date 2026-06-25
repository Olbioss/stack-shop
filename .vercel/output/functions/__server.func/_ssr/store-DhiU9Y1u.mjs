import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as cn } from "./utils-Pgq5HWQm.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { t as Skeleton } from "./skeleton-CLsJI6lr.mjs";
import { t as Input } from "./input-BP4N0xFb.mjs";
import { B as Package, Et as CircleCheck, O as Search, Z as LoaderCircle, g as Star, q as MapPin, r as Users, t as X, y as SlidersHorizontal } from "../_libs/lucide-react.mjs";
import { p as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as AvatarFallback, r as AvatarImage, t as Avatar$1 } from "./avatar-BfSlRT72.mjs";
import { t as Label$1 } from "./label-CqfikwJF.mjs";
import { t as useInfiniteQuery } from "../_libs/tanstack__react-query.mjs";
import { n as CardContent, t as Card } from "./card-BDvQuHpQ.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select$1 } from "./select-DjArhxEw.mjs";
import { t as Badge } from "./badge-NA1wPZ4a.mjs";
import { s as NotFound } from "./notfound-CG7ZW3I5.mjs";
import { n as RadioGroupItem, t as RadioGroup$1 } from "./radio-group-Cu2-BwWU.mjs";
import { n as storeShopsInfiniteQueryOptions } from "./use-store-shops-cZQ3-wBf.mjs";
import { t as BreadcrumbNav } from "./breadcrumb-nav-C6qkBKW3.mjs";
import { t as Checkbox$1 } from "./checkbox-Biw7eaUx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/store-DhiU9Y1u.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var categories = [
	"All Categories",
	"Groceries",
	"Electronics",
	"Fashion",
	"Home & Garden",
	"Sports",
	"Books"
];
var ratingOptions = [
	{
		value: 0,
		label: "All Ratings"
	},
	{
		value: 4,
		label: "4+ Stars"
	},
	{
		value: 4.5,
		label: "4.5+ Stars"
	}
];
var sortOptions = [
	{
		value: "rating",
		label: "Highest Rated"
	},
	{
		value: "popular",
		label: "Most Popular"
	},
	{
		value: "newest",
		label: "Newest"
	},
	{
		value: "name",
		label: "Name (A-Z)"
	}
];
function StoreFilterSidebar({ filters, onFilterChange, onReset }) {
	const hasActiveFilters = filters.search || filters.category || filters.minRating > 0 || filters.verifiedOnly;
	const handleSearchChange = (search) => {
		onFilterChange({ search });
	};
	const handleCategoryChange = (value) => {
		onFilterChange({ category: value === "All Categories" ? "" : value });
	};
	const handleRatingChange = (value) => {
		onFilterChange({ minRating: Number(value) });
	};
	const handleVerifiedChange = (checked) => {
		onFilterChange({ verifiedOnly: checked });
	};
	const handleSortChange = (value) => {
		onFilterChange({ sortBy: value });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-semibold text-lg",
						children: "Filters"
					})]
				}), hasActiveFilters && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					size: "sm",
					onClick: onReset,
					className: "h-8 gap-1 text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3" }), "Clear"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$1, {
					htmlFor: "search",
					children: "Search Stores"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "-translate-y-1/2 absolute top-1/2 left-3 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "search",
						placeholder: "Search by name...",
						value: filters.search,
						onChange: (e) => handleSearchChange(e.target.value),
						className: "pl-9"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$1, { children: "Category" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select$1, {
					value: filters.category || "All Categories",
					onValueChange: handleCategoryChange,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: category,
						children: category
					}, category)) })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$1, { children: "Minimum Rating" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup$1, {
					value: filters.minRating.toString(),
					onValueChange: handleRatingChange,
					children: ratingOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center space-x-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, {
							value: option.value.toString(),
							id: `rating-${option.value}`
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label$1, {
							htmlFor: `rating-${option.value}`,
							className: "flex cursor-pointer items-center gap-1 font-normal",
							children: [option.value > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3.5 fill-yellow-400 text-yellow-400" }), option.label]
						})]
					}, option.value))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center space-x-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
					id: "verified",
					checked: filters.verifiedOnly,
					onCheckedChange: handleVerifiedChange
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$1, {
					htmlFor: "verified",
					className: "cursor-pointer font-normal text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
					children: "Verified stores only"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$1, { children: "Sort By" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select$1, {
					value: filters.sortBy,
					onValueChange: handleSortChange,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: sortOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: option.value,
						children: option.label
					}, option.value)) })]
				})]
			})
		]
	});
}
function StoreCard({ store, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: cn("group gap-0 overflow-hidden bg-card py-0 transition-all hover:shadow-primary/5 hover:shadow-xl", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-video overflow-hidden bg-muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: store.banner,
					alt: `${store.name} banner`,
					className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" }),
				store.isVerified && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
					className: "absolute top-4 right-4 gap-1 border-blue-500/20 bg-blue-500/90 text-white backdrop-blur-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3" }), "Verified"]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
			className: "space-y-5 p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Avatar$1, {
						className: "h-16 w-16 shrink-0 border-2 border-border shadow-md ring-2 ring-background",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, {
							src: store.logo,
							alt: store.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
							className: "bg-primary/10 font-bold text-lg text-primary",
							children: store.name[0]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1 space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/store/$slug",
							params: { slug: store.slug },
							className: "line-clamp-1 block font-bold text-xl leading-tight transition-colors hover:text-primary",
							children: store.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "secondary",
							className: "text-xs",
							children: store.category
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "line-clamp-2 text-muted-foreground text-sm leading-relaxed",
					children: store.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-3 rounded-lg border bg-muted/30 p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center gap-1.5 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-8 w-8 items-center justify-center rounded-full bg-background",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "size-4 text-muted-foreground" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-base",
									children: store.totalProducts
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground text-xs",
									children: "Products"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center gap-1.5 border-muted border-x text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-8 w-8 items-center justify-center rounded-full bg-background",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-4 text-muted-foreground" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-base",
									children: store.followers >= 1e3 ? `${(store.followers / 1e3).toFixed(1)}k` : store.followers
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground text-xs",
									children: "Followers"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center gap-1.5 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-8 w-8 items-center justify-center rounded-full bg-background",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 fill-yellow-400 text-yellow-400" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-base",
									children: store.rating.toFixed(1)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground text-xs",
									children: "Rating"
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3 border-muted border-t pt-5",
					children: [store.address && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5 text-muted-foreground text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "line-clamp-1",
							children: store.address
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						className: "shrink-0",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/store/$slug",
							params: { slug: store.slug },
							children: "Visit Store"
						})
					})]
				})
			]
		})]
	});
}
function StoreCardSkeleton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "gap-0 overflow-hidden bg-card py-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "aspect-video w-full rounded-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
			className: "space-y-5 p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-16 w-16 shrink-0 rounded-full" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1 space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-6 w-3/4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-5 w-20" })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-full" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-5/6" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-3 rounded-lg border bg-muted/30 p-4",
					children: [
						1,
						2,
						3
					].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center gap-1.5 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-8 w-8 rounded-full" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-5 w-12" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-3 w-16" })
						]
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3 border-muted border-t pt-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-32" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-9 w-24 rounded-md" })]
				})
			]
		})]
	});
}
function StoreListSkeleton({ count = 6 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center justify-between rounded-lg bg-muted/50 px-4 py-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-5 w-40" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid @5xl:grid-cols-2 @[95rem]:grid-cols-3 grid-cols-1 gap-6",
			children: Array.from({ length: count }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreCardSkeleton, {}, i))
		})]
	});
}
function StoreList({ stores, totalCount, isLoading }) {
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreListSkeleton, {});
	if (stores.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotFound, {
		title: "No stores found",
		description: "Try adjusting your filters or search query to find what you're looking for."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center justify-between rounded-lg bg-muted/50 px-4 py-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-medium text-sm",
				children: [
					"Showing ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary",
						children: stores.length
					}),
					totalCount && totalCount > stores.length && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						" ",
						"of ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: totalCount
						})
					] }),
					" ",
					stores.length === 1 ? "store" : "stores"
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid @5xl:grid-cols-2 @7xl:grid-cols-3 grid-cols-1 gap-6",
			children: stores.map((store) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreCard, { store }, store.id))
		})]
	});
}
var defaultFilters = {
	search: "",
	category: "",
	minRating: 0,
	verifiedOnly: false,
	sortBy: "rating"
};
function StoresListingTemplate() {
	const [filters, setFilters] = (0, import_react.useState)(defaultFilters);
	const loadMoreRef = (0, import_react.useRef)(null);
	const { data, isPending, isFetchingNextPage, hasNextPage, fetchNextPage } = useInfiniteQuery(storeShopsInfiniteQueryOptions({
		limit: 12,
		search: filters.search || void 0,
		category: filters.category || void 0,
		sortBy: filters.sortBy === "newest" ? "createdAt" : filters.sortBy === "popular" ? "totalProducts" : filters.sortBy === "name" ? "name" : "rating",
		sortDirection: filters.sortBy === "name" ? "asc" : "desc"
	}));
	const stores = (0, import_react.useMemo)(() => {
		let transformed = (data?.pages.flatMap((page) => page.data) ?? []).map((shop) => ({
			id: shop.id,
			slug: shop.slug,
			name: shop.name,
			description: shop.description ?? "",
			logo: shop.logo ?? "",
			banner: shop.banner ?? "",
			rating: shop.rating,
			reviewCount: 0,
			isVerified: shop.status === "active",
			memberSince: shop.createdAt,
			totalProducts: shop.totalProducts,
			followers: 0,
			category: shop.category ?? "General",
			contactEmail: shop.email ?? void 0,
			contactPhone: shop.phone ?? void 0,
			address: shop.address ?? void 0
		}));
		if (filters.minRating > 0) transformed = transformed.filter((s) => s.rating >= filters.minRating);
		if (filters.verifiedOnly) transformed = transformed.filter((s) => s.isVerified);
		return transformed;
	}, [
		data?.pages,
		filters.minRating,
		filters.verifiedOnly
	]);
	const totalCount = data?.pages[0]?.total ?? 0;
	const handleObserver = (0, import_react.useCallback)((entries) => {
		const [entry] = entries;
		if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) fetchNextPage();
	}, [
		hasNextPage,
		isFetchingNextPage,
		fetchNextPage
	]);
	(0, import_react.useEffect)(() => {
		const element = loadMoreRef.current;
		if (!element) return;
		const observer = new IntersectionObserver(handleObserver, {
			threshold: .1,
			rootMargin: "100px"
		});
		observer.observe(element);
		return () => observer.disconnect();
	}, [handleObserver]);
	const handleFilterChange = (newFilters) => {
		setFilters((prev) => ({
			...prev,
			...newFilters
		}));
	};
	const resetFilters = () => {
		setFilters(defaultFilters);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "@container container mx-auto px-4 py-8 min-h-screen bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto px-4 py-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbNav, {
					items: [{
						label: "Home",
						href: "/"
					}, {
						label: "Stores",
						isActive: true
					}],
					className: "mb-4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mb-3 font-bold @2xl:text-4xl text-3xl tracking-tight",
						children: "All Stores"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg text-muted-foreground",
						children: "Discover and shop from our verified sellers"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex @2xl:flex-row flex-col gap-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
						className: "@2xl:w-72 w-full shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "@2xl:sticky @2xl:top-4 rounded-xl border bg-card p-6 shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreFilterSidebar, {
								filters,
								onFilterChange: handleFilterChange,
								onReset: resetFilters
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
						className: "min-w-0 flex-1",
						children: isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex min-h-75 items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-6 w-6 animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Loading stores..." })]
							})
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreList, {
								stores,
								totalCount,
								isLoading: isPending
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								ref: loadMoreRef,
								className: "h-10 w-full",
								children: isFetchingNextPage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-center py-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-6 w-6 animate-spin text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-2 text-muted-foreground text-sm",
										children: "Loading more stores..."
									})]
								})
							}),
							!hasNextPage && stores.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "py-4 text-center text-muted-foreground text-sm",
								children: "You've reached the end of the list"
							})
						] })
					})]
				})
			]
		})
	});
}
var SplitComponent = StoresListingTemplate;
//#endregion
export { SplitComponent as component };
