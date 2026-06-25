import { o as __toESM } from "./_runtime.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { t as cn } from "./_ssr/utils-Pgq5HWQm.mjs";
import { w as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./_ssr/button-DQSToWRX.mjs";
import { t as Skeleton } from "./_ssr/skeleton-CLsJI6lr.mjs";
import { B as Package, Ct as Clock, Et as CircleCheck, J as Mail, P as Phone, Rt as Calendar, V as PackageOpen, W as MessageSquare, Z as LoaderCircle, d as ThumbsUp, g as Star, h as Store, ot as Heart, q as MapPin, r as Users } from "./_libs/lucide-react.mjs";
import { p as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { n as AvatarFallback, r as AvatarImage, t as Avatar$1 } from "./_ssr/avatar-BfSlRT72.mjs";
import { o as useQuery } from "./_libs/tanstack__react-query.mjs";
import { n as create, t as persist } from "./_libs/zustand.mjs";
import { r as toDisplayProducts } from "./_ssr/products-query-helpers-YIHV58XJ.mjs";
import { n as storeProductsQueryOptions } from "./_ssr/use-store-product-C0VjBbOQ.mjs";
import { d as format } from "./_libs/date-fns.mjs";
import { a as CardHeader, n as CardContent, o as CardTitle, t as Card } from "./_ssr/card-BDvQuHpQ.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select$1 } from "./_ssr/select-DjArhxEw.mjs";
import { t as Progress$1 } from "./_ssr/progress-ClMoOgm6.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs$1 } from "./_ssr/tabs-DkMjjh1r.mjs";
import { i as useShopReviews, r as useReviewMutations } from "./_ssr/use-reviews-BCGsuaA3.mjs";
import { s as NotFound } from "./_ssr/notfound-CG7ZW3I5.mjs";
import { n as ProductCard } from "./_ssr/product-card-XBLfr8UV.mjs";
import { t as storeShopBySlugQueryOptions } from "./_ssr/use-store-shops-cZQ3-wBf.mjs";
import { t as Route } from "./_slug-DaFJdXdC.mjs";
import { t as BreadcrumbNav } from "./_ssr/breadcrumb-nav-C6qkBKW3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-C2qBGhsg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function StoreHeaderSkeleton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-48 w-full rounded-xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex @3xl:flex-row flex-col gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-24 w-24 shrink-0 rounded-full" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-8 w-64" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-5 w-32" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-9 w-28" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-9 w-28" })]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid @3xl:w-auto w-full grid-cols-4 gap-4",
					children: [
						1,
						2,
						3,
						4
					].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mx-auto h-6 w-16" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mx-auto h-4 w-20" })]
					}, i))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-full" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-5/6" })]
			})
		]
	});
}
function StoreProductsSkeleton({ count = 6 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex @2xl:flex-row flex-col items-start @2xl:items-center justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-7 w-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-56" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-16" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-10 w-45" })]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid @2xl:grid-cols-2 @5xl:grid-cols-3 gap-6",
			children: Array.from({ length: count }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4 rounded-xl border-2 border-muted border-dashed p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "aspect-square w-full rounded-t-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-5 w-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-16" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-6 w-full" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-muted border-t border-dashed pt-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-5 w-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-4 rounded-full" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-4 rounded-full" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-4 rounded-full" })
								]
							})]
						})
					]
				})]
			}, i))
		})]
	});
}
function StoreAbout({ store, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, { children: ["About ", store.name] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
			className: "space-y-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mb-2 font-semibold",
				children: "Description"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground leading-relaxed",
				children: store.description
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mb-3 font-semibold",
				children: "Contact Information"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [
					store.contactEmail && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-9 w-9 items-center justify-center rounded-lg bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4 text-muted-foreground" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-xs",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${store.contactEmail}`,
							className: "font-medium hover:text-primary",
							children: store.contactEmail
						})] })]
					}),
					store.contactPhone && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-9 w-9 items-center justify-center rounded-lg bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-muted-foreground" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-xs",
							children: "Phone"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:${store.contactPhone}`,
							className: "font-medium hover:text-primary",
							children: store.contactPhone
						})] })]
					}),
					store.address && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-9 w-9 items-center justify-center rounded-lg bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-muted-foreground" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-xs",
							children: "Address"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: store.address
						})] })]
					}),
					store.businessHours && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-9 w-9 items-center justify-center rounded-lg bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4 text-muted-foreground" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-xs",
							children: "Business Hours"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: store.businessHours
						})] })]
					})
				]
			})] })]
		})] })
	});
}
var mockStores = [
	{
		id: "1",
		slug: "grocery-shop",
		name: "Grocery Shop",
		description: "Your one-stop shop for fresh groceries, organic produce, and daily essentials. We pride ourselves on quality and freshness.",
		logo: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=80",
		banner: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=1200&q=80",
		rating: 4.5,
		reviewCount: 234,
		isVerified: true,
		memberSince: "2022-01-15",
		totalProducts: 156,
		followers: 1250,
		category: "Groceries",
		contactEmail: "contact@groceryshop.com",
		contactPhone: "+1 (555) 123-4567",
		address: "123 Market Street, Food District",
		businessHours: "Mon-Sat: 8AM-8PM, Sun: 9AM-6PM"
	},
	{
		id: "2",
		slug: "tech-gadgets",
		name: "Tech Gadgets",
		description: "Latest electronics and gadgets at competitive prices. From smartphones to smart home devices.",
		logo: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80",
		banner: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=80",
		rating: 4.8,
		reviewCount: 567,
		isVerified: true,
		memberSince: "2021-06-20",
		totalProducts: 342,
		followers: 3450,
		category: "Electronics",
		contactEmail: "support@techgadgets.com",
		contactPhone: "+1 (555) 987-6543",
		address: "456 Tech Avenue, Innovation Hub",
		businessHours: "Mon-Fri: 9AM-9PM, Sat-Sun: 10AM-7PM"
	},
	{
		id: "3",
		slug: "fashion-boutique",
		name: "Fashion Boutique",
		description: "Trendy clothing and accessories for men and women. Curated collections from top designers.",
		logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80",
		banner: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&q=80",
		rating: 4.3,
		reviewCount: 189,
		isVerified: true,
		memberSince: "2022-03-10",
		totalProducts: 278,
		followers: 890,
		category: "Fashion",
		contactEmail: "hello@fashionboutique.com",
		contactPhone: "+1 (555) 456-7890",
		address: "789 Style Boulevard, Fashion District",
		businessHours: "Mon-Sun: 10AM-8PM"
	},
	{
		id: "4",
		slug: "home-decor",
		name: "Home Decor",
		description: "Beautiful home furnishings and decor items to transform your living space.",
		logo: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80",
		banner: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&q=80",
		rating: 4.6,
		reviewCount: 312,
		isVerified: false,
		memberSince: "2022-08-05",
		totalProducts: 198,
		followers: 567,
		category: "Home & Garden",
		contactEmail: "info@homedecor.com",
		address: "321 Design Lane, Creative Quarter",
		businessHours: "Tue-Sun: 10AM-6PM"
	},
	{
		id: "5",
		slug: "sports-equipment",
		name: "Sports Equipment",
		description: "Quality sports gear and fitness equipment for all your athletic needs.",
		logo: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&q=80",
		banner: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1200&q=80",
		rating: 4.7,
		reviewCount: 445,
		isVerified: true,
		memberSince: "2021-11-12",
		totalProducts: 412,
		followers: 2100,
		category: "Sports",
		contactEmail: "sales@sportsequipment.com",
		contactPhone: "+1 (555) 234-5678",
		address: "654 Athletic Road, Sports Complex",
		businessHours: "Mon-Sat: 7AM-9PM, Sun: 8AM-7PM"
	},
	{
		id: "6",
		slug: "book-haven",
		name: "Book Haven",
		description: "A paradise for book lovers with a vast collection of fiction, non-fiction, and rare editions.",
		logo: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80",
		banner: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&q=80",
		rating: 4.9,
		reviewCount: 678,
		isVerified: true,
		memberSince: "2020-04-18",
		totalProducts: 1234,
		followers: 4200,
		category: "Books",
		contactEmail: "contact@bookhaven.com",
		contactPhone: "+1 (555) 345-6789",
		address: "987 Literature Lane, Reading District",
		businessHours: "Mon-Sun: 9AM-9PM"
	}
];
var defaultFilters = {
	search: "",
	category: "",
	minRating: 0,
	verifiedOnly: false,
	sortBy: "rating"
};
var useStoreFront = create()(persist((set, get) => ({
	stores: mockStores,
	currentStore: null,
	filters: defaultFilters,
	followedStores: [],
	isLoading: false,
	setStores: (stores) => set({ stores }),
	setCurrentStore: (store) => set({ currentStore: store }),
	getStoreBySlug: (slug) => {
		const store = get().stores.find((s) => s.slug === slug);
		if (store) set({ currentStore: store });
		return store;
	},
	setFilters: (newFilters) => set((state) => ({ filters: {
		...state.filters,
		...newFilters
	} })),
	resetFilters: () => set({ filters: defaultFilters }),
	toggleFollow: (storeId) => set((state) => {
		return { followedStores: state.followedStores.includes(storeId) ? state.followedStores.filter((id) => id !== storeId) : [...state.followedStores, storeId] };
	}),
	isFollowing: (storeId) => get().followedStores.includes(storeId),
	getFilteredStores: () => {
		const { stores, filters } = get();
		let filtered = [...stores];
		if (filters.search) {
			const searchLower = filters.search.toLowerCase();
			filtered = filtered.filter((store) => store.name.toLowerCase().includes(searchLower) || store.description.toLowerCase().includes(searchLower));
		}
		if (filters.category) filtered = filtered.filter((store) => store.category === filters.category);
		if (filters.minRating > 0) filtered = filtered.filter((store) => store.rating >= filters.minRating);
		if (filters.verifiedOnly) filtered = filtered.filter((store) => store.isVerified);
		filtered.sort((a, b) => {
			switch (filters.sortBy) {
				case "rating": return b.rating - a.rating;
				case "newest": return new Date(b.memberSince).getTime() - new Date(a.memberSince).getTime();
				case "popular": return b.followers - a.followers;
				case "name": return a.name.localeCompare(b.name);
				default: return 0;
			}
		});
		return filtered;
	}
}), {
	name: "storefront",
	partialize: (state) => ({ followedStores: state.followedStores })
}));
function StoreBanner({ store, className }) {
	const { isFollowing, toggleFollow } = useStoreFront();
	const following = isFollowing(store.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative overflow-hidden rounded-xl", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative @2xl:h-64 h-48 overflow-hidden bg-muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: store.banner,
				alt: `${store.name} banner`,
				className: "h-full w-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute right-0 bottom-0 left-0 p-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex @2xl:flex-row flex-col items-start @2xl:items-end gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Avatar$1, {
						className: "-mb-8 @2xl:h-32 h-24 @2xl:w-32 w-24 border-4 border-background shadow-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, {
							src: store.logo,
							alt: store.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
							className: "bg-primary/10 font-bold text-2xl text-primary",
							children: store.name[0]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 text-white",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-1 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-bold @2xl:text-3xl text-2xl",
								children: store.name
							}), store.isVerified && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
								className: "h-6 w-6 text-blue-400",
								"aria-label": "Verified Store"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-yellow-400 text-yellow-400" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium",
											children: store.rating.toFixed(1)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-white/80",
											children: [
												"(",
												store.reviewCount,
												" reviews)"
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-white/60",
									children: "•"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-white/80",
									children: store.category
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: following ? "secondary" : "default",
							size: "lg",
							onClick: () => toggleFollow(store.id),
							className: "gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: cn("size-4", following && "fill-current") }), following ? "Following" : "Follow"]
						})
					})
				]
			})
		})]
	});
}
function StoreStats({ stats, className }) {
	const formattedDate = format(stats.memberSince, "MMMM yyyy");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid @2xl:grid-cols-4 grid-cols-2 gap-4",
			children: [
				{
					icon: Package,
					label: "Products",
					value: stats.totalProducts.toLocaleString(),
					color: "text-blue-500"
				},
				{
					icon: Users,
					label: "Followers",
					value: stats.followers >= 1e3 ? `${(stats.followers / 1e3).toFixed(1)}k` : stats.followers.toString(),
					color: "text-green-500"
				},
				{
					icon: Star,
					label: "Rating",
					value: stats.rating.toFixed(1),
					color: "text-yellow-500"
				},
				{
					icon: Calendar,
					label: "Member Since",
					value: formattedDate,
					color: "text-purple-500"
				}
			].map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 rounded-lg border bg-card p-4 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `rounded-full bg-muted p-2.5 ${stat.color}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(stat.icon, { className: "size-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-bold text-lg leading-none",
						children: stat.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground text-sm",
						children: stat.label
					})]
				})]
			}, stat.label))
		})
	});
}
function StoreHeader({ store }) {
	const stats = {
		totalProducts: store.totalProducts,
		followers: store.followers,
		rating: store.rating,
		memberSince: store.memberSince
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreBanner, { store }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreStats, { stats })]
	});
}
var sortOptions = [
	{
		value: "newest",
		label: "Newest"
	},
	{
		value: "price-low",
		label: "Price: Low to High"
	},
	{
		value: "price-high",
		label: "Price: High to Low"
	},
	{
		value: "rating",
		label: "Highest Rated"
	},
	{
		value: "popular",
		label: "Most Popular"
	}
];
function StoreProducts({ storeName, storeSlug }) {
	const [sortBy, setSortBy] = (0, import_react.useState)("newest");
	const { data: productsData, isPending } = useQuery({
		...storeProductsQueryOptions({
			shopSlug: storeSlug,
			limit: 50,
			sortBy: sortBy === "newest" ? "createdAt" : "price",
			sortDirection: sortBy === "price-low" ? "asc" : "desc"
		}),
		enabled: !!storeSlug
	});
	const products = (0, import_react.useMemo)(() => toDisplayProducts(productsData?.data ?? []), [productsData?.data]);
	const sortedProducts = (0, import_react.useMemo)(() => {
		if (sortBy === "rating") return [...products].sort((a, b) => b.rating.average - a.rating.average);
		return products;
	}, [products, sortBy]);
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-50 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-5 w-5 animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Loading products..." })]
		})
	});
	if (sortedProducts.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotFound, {
		title: "No Products Yet",
		description: "This store hasn't listed any products yet. Check back soon!",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageOpen, { className: "size-12 text-muted-foreground" }),
		className: "py-12"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex @2xl:flex-row flex-col items-start @2xl:items-center justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "@2xl:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-semibold text-xl",
					children: [
						"Products (",
						sortedProducts.length,
						")"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-muted-foreground text-sm",
					children: ["Browse all products from ", storeName]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted-foreground text-sm",
					children: "Sort by:"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select$1, {
					value: sortBy,
					onValueChange: setSortBy,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "w-45",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: sortOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: option.value,
						children: option.label
					}, option.value)) })]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid @2xl:grid-cols-2 @5xl:grid-cols-3 gap-6",
			children: sortedProducts.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product }, product.id))
		})]
	});
}
function StoreReviews({ shopId, rating, reviewCount }) {
	const { data: reviewsData, isLoading, error } = useShopReviews(shopId, {
		limit: 10,
		offset: 0
	});
	const { voteHelpful } = useReviewMutations();
	const reviews = reviewsData?.reviews ?? [];
	const totalReviews = reviewsData?.total ?? reviewCount;
	const ratingBreakdown = (reviewsData?.ratingStats)?.breakdown ?? {
		5: 0,
		4: 0,
		3: 0,
		2: 0,
		1: 0
	};
	const ratingDistribution = [
		5,
		4,
		3,
		2,
		1
	].map((star) => {
		const count = ratingBreakdown[star] || 0;
		return {
			star,
			count,
			percentage: totalReviews > 0 ? count / totalReviews * 100 : 0
		};
	});
	const handleVoteHelpful = (reviewId) => {
		voteHelpful.mutate({
			reviewId,
			productId: ""
		});
	};
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
			className: "p-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid @2xl:grid-cols-2 gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center justify-center space-y-2 border-muted @2xl:border-r p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-12 w-20 animate-pulse rounded bg-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-5 w-32 animate-pulse rounded bg-muted" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-6 animate-pulse rounded bg-muted" }, i))
				})]
			})
		}) })
	});
	if (error) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center py-12 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "mb-4 h-12 w-12 text-muted-foreground" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mb-2 font-semibold text-lg",
				children: "Unable to load reviews"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground text-sm",
				children: "There was an error loading reviews. Please try again later."
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
			className: "p-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid @2xl:grid-cols-2 gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center justify-center space-y-2 border-muted @2xl:border-r p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-bold text-5xl",
							children: rating.toFixed(1)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-1",
							children: [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `size-5 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}` }, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-muted-foreground text-sm",
							children: [
								"Based on ",
								totalReviews,
								" reviews"
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: ratingDistribution.map(({ star, count, percentage }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex w-12 items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm",
									children: star
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3 fill-yellow-400 text-yellow-400" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress$1, {
								value: percentage,
								className: "h-2 flex-1"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-12 text-muted-foreground text-sm",
								children: count
							})
						]
					}, star))
				})]
			})
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-semibold text-lg",
				children: "Customer Reviews"
			}), reviews.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-4",
				children: reviews.map((review) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
					className: "p-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Avatar$1, {
							className: "h-10 w-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, {
								src: review.userAvatar ?? "",
								alt: review.userName
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, { children: review.userName.split(" ").map((n) => n[0]).join("") })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-start justify-between",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold",
										children: review.userName
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex items-center gap-0.5",
											children: [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `size-3.5 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}` }, i))
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground text-xs",
											children: new Date(review.createdAt).toLocaleDateString("en-US", {
												month: "long",
												day: "numeric",
												year: "numeric"
											})
										})]
									})] })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-sm leading-relaxed",
									children: review.comment
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "ghost",
										size: "sm",
										className: "h-8 gap-1",
										onClick: () => handleVoteHelpful(review.id),
										disabled: voteHelpful.isPending || review.hasVotedHelpful,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThumbsUp, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs",
											children: [
												"Helpful (",
												review.helpfulCount,
												")"
											]
										})]
									})
								})
							]
						})]
					})
				}) }, review.id))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center justify-center py-12 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "mb-4 h-12 w-12 text-muted-foreground" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-2 font-semibold text-lg",
						children: "No reviews yet"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground text-sm",
						children: "This store hasn't received any reviews yet."
					})
				]
			})]
		})]
	});
}
function StorePageTemplate({ slug }) {
	const { data: shopData, isPending, error } = useQuery(storeShopBySlugQueryOptions(slug));
	const currentStore = (0, import_react.useMemo)(() => {
		if (!shopData?.shop) return null;
		const shop = shopData.shop;
		return {
			id: shop.id,
			slug: shop.slug,
			name: shop.name,
			description: shop.description ?? "No description available",
			logo: shop.logo ?? "",
			banner: shop.banner ?? "",
			category: shop.category ?? "General",
			rating: shop.rating,
			reviewCount: 0,
			isVerified: shop.status === "active",
			memberSince: shop.createdAt,
			totalProducts: shop.totalProducts,
			followers: 0,
			contactEmail: shop.email ?? void 0,
			contactPhone: shop.phone ?? void 0,
			address: shop.address ?? void 0,
			businessHours: void 0
		};
	}, [shopData?.shop]);
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "@container container mx-auto px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-5 w-64" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreHeaderSkeleton, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-10 w-full max-w-md" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreProductsSkeleton, {})]
			})
		]
	});
	if (error || !currentStore) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "@container flex min-h-[70vh] w-full items-center justify-center p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotFound, {
			title: "Store not found",
			description: "The store you're looking for doesn't exist or may have been removed.",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Store, { className: "@[48rem]:size-24 size-12 text-muted-foreground" }),
			className: "w-full @[48rem]:max-w-2xl max-w-md border-dashed @[48rem]:py-24 **:data-[slot=empty-description]:@[48rem]:text-lg **:data-[slot=empty-title]:@[48rem]:text-3xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/store",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "@[48rem]:h-12 @[48rem]:px-8 @[48rem]:text-base",
					children: "Browse Stores"
				})
			})
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "@container container mx-auto px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbNav, {
				items: [
					{
						label: "Home",
						href: "/"
					},
					{
						label: "Stores",
						href: "/store"
					},
					{
						label: currentStore?.name,
						isActive: true
					}
				],
				className: "mb-4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreHeader, { store: currentStore }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs$1, {
					defaultValue: "products",
					className: "space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
							className: "w-full justify-start",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
									value: "products",
									children: "Products"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
									value: "about",
									children: "About"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
									value: "reviews",
									children: "Reviews"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "products",
							className: "space-y-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreProducts, {
								storeName: currentStore.name,
								storeSlug: slug
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "about",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreAbout, { store: currentStore })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "reviews",
							className: "space-y-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreReviews, {
								shopId: currentStore.id,
								rating: currentStore.rating,
								reviewCount: currentStore.reviewCount
							})
						})
					]
				})
			})
		]
	});
}
function RouteComponent() {
	const { slug } = Route.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StorePageTemplate, { slug });
}
//#endregion
export { RouteComponent as component };
