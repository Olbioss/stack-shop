import { o as __toESM } from "../_runtime.mjs";
import { r as toDisplayProducts } from "./products-query-helpers-YIHV58XJ.mjs";
import { t as cn } from "./utils-Pgq5HWQm.mjs";
import { a as Trigger2, i as Root2, n as Header, r as Item, t as Content2, w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { i as Track, n as Root, r as Thumb, t as Range } from "../_libs/radix-ui__react-slider.mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { o as useQuery, t as useInfiniteQuery } from "../_libs/tanstack__react-query.mjs";
import { t as storeProductsInfiniteQueryOptions } from "./use-store-product-C0VjBbOQ.mjs";
import { Nt as ChevronDown, O as Search, ft as Funnel, g as Star, t as X } from "../_libs/lucide-react.mjs";
import { a as SheetHeader, o as SheetTitle, r as SheetContent, s as SheetTrigger, t as Sheet } from "./sheet-BT4_YFID.mjs";
import { t as Label$1 } from "./label-CqfikwJF.mjs";
import { a as InputGroupText, i as InputGroupInput, n as InputGroupAddon, r as InputGroupButton, t as InputGroup } from "./input-group-DL1MymOU.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select$1 } from "./select-DjArhxEw.mjs";
import { t as Badge } from "./badge-NA1wPZ4a.mjs";
import { r as storeCategoriesQueryOptions } from "./use-store-categories-BiYNy2a5.mjs";
import { t as RadioGroup$1 } from "./radio-group-Cu2-BwWU.mjs";
import { t as ColorRadioItem } from "./product-card-XBLfr8UV.mjs";
import { t as ProductGrid } from "./product-grid-DqnKZ1d-.mjs";
import { t as Checkbox$1 } from "./checkbox-Biw7eaUx.mjs";
import { t as storeBrandsQueryOptions } from "./use-store-brands-Snb0r2-j.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product-BAcE-4CB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ActiveFilterChips({ filters, onRemove, onClearAll }) {
	if (filters.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-4 flex flex-wrap items-center gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mr-1 text-muted-foreground text-sm",
				children: "Active Filters:"
			}),
			filters.map((filter) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
				variant: "secondary",
				className: "gap-1 py-1 pr-1 pl-2",
				children: [filter.label, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					size: "icon",
					className: "h-4 w-4 rounded-full p-0.5 hover:bg-muted-foreground/20",
					onClick: () => onRemove(filter.id, filter.type),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3 w-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "sr-only",
						children: [
							"Remove ",
							filter.label,
							" filter"
						]
					})]
				})]
			}, `${filter.type}-${filter.id}`)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "link",
				size: "sm",
				onClick: onClearAll,
				className: "h-auto px-2 text-muted-foreground hover:text-primary",
				children: "Clear All"
			})
		]
	});
}
function Searchbar({ className, value, onChange, placeholder }) {
	const [localValue, setLocalValue] = (0, import_react.useState)(value);
	const onChangeRef = (0, import_react.useRef)(onChange);
	(0, import_react.useEffect)(() => {
		onChangeRef.current = onChange;
	});
	(0, import_react.useEffect)(() => {
		const id = setTimeout(() => onChangeRef.current(localValue), 300);
		return () => clearTimeout(id);
	}, [localValue]);
	const handleClear = () => setLocalValue("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InputGroup, {
		className: cn("w-full max-w-md", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroupAddon, {
				align: "inline-start",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroupText, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-5" }) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroupInput, {
				value: localValue,
				onChange: (e) => setLocalValue(e.target.value),
				placeholder
			}),
			localValue && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroupAddon, {
				align: "inline-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InputGroupButton, {
					size: "icon-xs",
					onClick: handleClear,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: "Clear search"
					})]
				})
			})
		]
	});
}
function SortDropdown({ value, onChange, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select$1, {
		value,
		onValueChange: (val) => onChange(val),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
			className: cn("w-45", className),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Sort by" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
				value: "relevance",
				children: "Relevance"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
				value: "price-asc",
				children: "Price: Low to High"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
				value: "price-desc",
				children: "Price: High to Low"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
				value: "newest",
				children: "Newest Arrivals"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
				value: "rating",
				children: "Top Rated"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
				value: "best-selling",
				children: "Best Selling"
			})
		] })]
	});
}
/**
* Maps frontend sort options to API sort parameters
*/
var sortMapping = {
	relevance: {
		sortBy: "createdAt",
		sortDirection: "desc"
	},
	"price-asc": {
		sortBy: "price",
		sortDirection: "asc"
	},
	"price-desc": {
		sortBy: "price",
		sortDirection: "desc"
	},
	newest: {
		sortBy: "createdAt",
		sortDirection: "desc"
	},
	rating: {
		sortBy: "createdAt",
		sortDirection: "desc"
	},
	"best-selling": {
		sortBy: "createdAt",
		sortDirection: "desc"
	}
};
/**
* Get API sort parameters from a sort option
*/
var getSortParams = (sort) => {
	return sortMapping[sort] || sortMapping.relevance;
};
/**
* Store Product Filters Hook
*
* Hook for managing product filters on the store front.
* Uses real API data via React Query with infinite scrolling pagination.
*/
var initialState = {
	search: "",
	sort: "relevance",
	categories: [],
	brands: [],
	priceRange: [0, 1e3],
	colors: [],
	sizes: [],
	rating: null,
	availability: [],
	conditions: []
};
var useProductFilters = () => {
	const [filters, setFilters] = (0, import_react.useState)(initialState);
	const { data: infiniteData, isPending, error, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(storeProductsInfiniteQueryOptions((0, import_react.useMemo)(() => {
		const sortParams = getSortParams(filters.sort);
		return {
			search: filters.search || void 0,
			minPrice: filters.priceRange[0] > 0 ? filters.priceRange[0] : void 0,
			maxPrice: filters.priceRange[1] < 1e3 ? filters.priceRange[1] : void 0,
			inStock: filters.availability.includes("In Stock") ? true : void 0,
			sortBy: sortParams.sortBy,
			sortDirection: sortParams.sortDirection
		};
	}, [
		filters.search,
		filters.priceRange,
		filters.availability,
		filters.sort
	])));
	const { data: categoriesData, isPending: isCategoriesPending } = useQuery(storeCategoriesQueryOptions({ limit: 50 }));
	const { data: brandsData, isPending: isBrandsPending } = useQuery(storeBrandsQueryOptions({ limit: 50 }));
	const availableCategories = (0, import_react.useMemo)(() => {
		return categoriesData?.data?.map((c) => c.name) ?? [];
	}, [categoriesData]);
	const availableBrands = (0, import_react.useMemo)(() => {
		return brandsData?.data?.map((b) => b.name) ?? [];
	}, [brandsData]);
	const filteredProducts = (0, import_react.useMemo)(() => {
		let result = infiniteData?.pages.flatMap((page) => page.data) ?? [];
		if (filters.categories.length > 0) result = result.filter((p) => p.categoryName && filters.categories.includes(p.categoryName));
		if (filters.brands.length > 0) result = result.filter((p) => p.brandName && filters.brands.includes(p.brandName));
		return toDisplayProducts(result);
	}, [
		infiniteData,
		filters.categories,
		filters.brands
	]);
	const totalProducts = infiniteData?.pages[0]?.total ?? 0;
	const updateFilter = (key, value) => {
		setFilters((prev) => ({
			...prev,
			[key]: value
		}));
	};
	const activeFilters = (0, import_react.useMemo)(() => {
		const active = [];
		if (filters.search) active.push({
			id: "search",
			label: `Search: ${filters.search}`,
			type: "search"
		});
		filters.categories.forEach((c) => {
			active.push({
				id: c,
				label: c,
				type: "category"
			});
		});
		filters.brands.forEach((b) => {
			active.push({
				id: b,
				label: b,
				type: "brand"
			});
		});
		if (filters.priceRange[0] > 0 || filters.priceRange[1] < 1e3) active.push({
			id: "price",
			label: `$${filters.priceRange[0]} - $${filters.priceRange[1]}`,
			type: "price"
		});
		filters.colors.forEach((c) => {
			active.push({
				id: c,
				label: c,
				type: "color"
			});
		});
		filters.sizes.forEach((s) => {
			active.push({
				id: s,
				label: `Size: ${s}`,
				type: "size"
			});
		});
		if (filters.rating) active.push({
			id: "rating",
			label: `${filters.rating}+ Stars`,
			type: "rating"
		});
		filters.availability.forEach((a) => {
			active.push({
				id: a,
				label: a,
				type: "availability"
			});
		});
		filters.conditions.forEach((c) => {
			active.push({
				id: c,
				label: c,
				type: "condition"
			});
		});
		return active;
	}, [filters]);
	const removeFilter = (id, type) => {
		switch (type) {
			case "search":
				updateFilter("search", "");
				break;
			case "category":
				updateFilter("categories", filters.categories.filter((c) => c !== id));
				break;
			case "brand":
				updateFilter("brands", filters.brands.filter((b) => b !== id));
				break;
			case "price":
				updateFilter("priceRange", [0, 1e3]);
				break;
			case "color":
				updateFilter("colors", filters.colors.filter((c) => c !== id));
				break;
			case "size":
				updateFilter("sizes", filters.sizes.filter((s) => s !== id));
				break;
			case "rating":
				updateFilter("rating", null);
				break;
			case "availability":
				updateFilter("availability", filters.availability.filter((a) => a !== id));
				break;
			case "condition":
				updateFilter("conditions", filters.conditions.filter((c) => c !== id));
				break;
		}
	};
	const clearAllFilters = () => {
		setFilters(initialState);
	};
	return {
		filters,
		updateFilter,
		products: filteredProducts,
		totalProducts,
		isPending,
		error,
		activeFilters,
		removeFilter,
		clearAllFilters,
		availableCategories,
		availableBrands,
		isFilterDataPending: isCategoriesPending || isBrandsPending,
		fetchNextPage,
		hasNextPage: hasNextPage ?? false,
		isFetchingNextPage
	};
};
function Accordion$1({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2, {
		"data-slot": "accordion",
		...props
	});
}
function AccordionItem({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
		"data-slot": "accordion-item",
		className: cn("border-b last:border-b-0", className),
		...props
	});
}
function AccordionTrigger({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
		className: "flex",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
			"data-slot": "accordion-trigger",
			className: cn("flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180", className),
			...props,
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200" })]
		})
	});
}
function AccordionContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
		"data-slot": "accordion-content",
		className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("pt-0 pb-4", className),
			children
		})
	});
}
function FilterGroup({ id, title, children, defaultOpen = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion$1, {
		type: "single",
		collapsible: true,
		defaultValue: defaultOpen ? id : void 0,
		className: "w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
			value: id,
			className: "border-b-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
				className: "py-3 font-medium text-sm hover:text-primary hover:no-underline",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pt-1 pb-4",
				children
			}) })]
		})
	});
}
function Slider$1({ className, defaultValue, value, min = 0, max = 100, ...props }) {
	const _values = import_react.useMemo(() => Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max], [
		value,
		defaultValue,
		min,
		max
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root, {
		"data-slot": "slider",
		defaultValue,
		value,
		min,
		max,
		className: cn("relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Track, {
			"data-slot": "slider-track",
			className: cn("relative grow overflow-hidden rounded-full bg-muted data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				"data-slot": "slider-range",
				className: cn("absolute bg-primary data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full")
			})
		}), Array.from({ length: _values.length }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thumb, {
			"data-slot": "slider-thumb",
			className: "block size-4 shrink-0 rounded-full border border-primary bg-white shadow-sm ring-ring/50 transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
		}, index))]
	});
}
var CATEGORIES = {
	Clothing: [
		"T-Shirts",
		"Jeans",
		"Jackets",
		"Dresses",
		"Activewear"
	],
	Electronics: [
		"Smartphones",
		"Laptops",
		"Headphones",
		"Accessories"
	],
	Home: [
		"Furniture",
		"Decor",
		"Kitchen",
		"Bedding"
	],
	Footwear: [
		"Sneakers",
		"Boots",
		"Sandals",
		"Formal"
	]
};
var BRANDS = [
	"Nike",
	"Adidas",
	"Apple",
	"Samsung",
	"Sony",
	"Zara",
	"H&M",
	"Levi's",
	"Uniqlo",
	"Dyson",
	"Bose"
];
var COLORS = [
	"Black",
	"White",
	"Red",
	"Blue",
	"Green",
	"Yellow",
	"Purple",
	"Pink",
	"Grey",
	"Beige"
];
var SIZES = [
	"XS",
	"S",
	"M",
	"L",
	"XL",
	"XXL"
];
var ADJECTIVES = [
	"Premium",
	"Classic",
	"Modern",
	"Elegant",
	"Durable",
	"Lightweight",
	"Comfortable",
	"Stylish"
];
var NOUNS = [
	"Runner",
	"Basic",
	"Pro",
	"Max",
	"Air",
	"Ultra",
	"Essential",
	"Signature"
];
var getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
var getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
var getRandomItems = (arr, min, max) => {
	const count = getRandomInt(min, max);
	return [...arr].sort(() => .5 - Math.random()).slice(0, count);
};
var generateReviews = (count) => {
	return Array.from({ length: count }).map((_, i) => ({
		id: `rev-${i}`,
		userName: getRandomItem([
			"John Doe",
			"Jane Smith",
			"Alice Johnson",
			"Bob Brown"
		]),
		userAvatar: `https://i.pravatar.cc/150?u=${getRandomInt(1, 1e3)}`,
		date: new Date(Date.now() - getRandomInt(0, 1e10)).toLocaleDateString(),
		rating: getRandomInt(3, 5),
		comment: getRandomItem([
			"Great product! Highly recommended.",
			"Good value for money.",
			"Excellent quality and fast shipping.",
			"Satisfied with the purchase.",
			"Could be better, but decent for the price."
		])
	}));
};
var generateProducts = (count) => {
	return Array.from({ length: count }).map((_, i) => {
		const categoryKey = getRandomItem(Object.keys(CATEGORIES));
		const subcategory = getRandomItem(CATEGORIES[categoryKey]);
		const brand = getRandomItem(BRANDS);
		const name = `${brand} ${getRandomItem(ADJECTIVES)} ${subcategory} ${getRandomItem(NOUNS)}`;
		const slug = name.toLowerCase().replace(/ /g, "-");
		const priceVal = getRandomInt(20, 500);
		const hasDiscount = Math.random() > .7;
		const discountPercent = hasDiscount ? getRandomItem([
			10,
			20,
			25,
			30,
			50
		]) : 0;
		const originalPrice = hasDiscount ? Math.round(priceVal / (1 - discountPercent / 100)) : priceVal;
		const ratingAvg = Number((Math.random() * 2 + 3).toFixed(1));
		const reviewCount = getRandomInt(5, 100);
		return {
			id: `prod-${i + 1}`,
			slug,
			name,
			description: `
        <p>Experience the ultimate in quality and performance with the ${name}. Designed for modern lifestyles, this product combines durability with sleek aesthetics.</p>
        <br/>
        <p>Key Features:</p>
        <ul>
          <li>Premium materials for long-lasting use</li>
          <li>Ergonomic design for maximum comfort</li>
          <li>Versatile functionality for various needs</li>
        </ul>
        <br/>
        <p>Whether you're a professional or an enthusiast, the ${name} is the perfect choice to elevate your experience.</p>
      `,
			category: {
				id: `cat-${categoryKey}`,
				name: categoryKey,
				slug: categoryKey.toLowerCase()
			},
			price: {
				current: priceVal,
				original: originalPrice,
				currency: "$",
				discountPercentage: discountPercent
			},
			images: [
				{
					id: `img-${i}-1`,
					url: `https://placehold.co/600x600?text=${encodeURIComponent(name)}`,
					alt: `${name} Main View`
				},
				{
					id: `img-${i}-2`,
					url: `https://placehold.co/600x600?text=${encodeURIComponent(`${name} Side`)}`,
					alt: `${name} Side View`
				},
				{
					id: `img-${i}-3`,
					url: `https://placehold.co/600x600?text=${encodeURIComponent(`${name} Detail`)}`,
					alt: `${name} Detail View`
				},
				{
					id: `img-${i}-4`,
					url: `https://placehold.co/600x600?text=${encodeURIComponent(`${name} Lifestyle`)}`,
					alt: `${name} Lifestyle View`
				}
			],
			rating: {
				average: ratingAvg,
				count: reviewCount,
				breakdown: {
					5: Math.floor(reviewCount * .6),
					4: Math.floor(reviewCount * .2),
					3: Math.floor(reviewCount * .1),
					2: Math.floor(reviewCount * .05),
					1: Math.floor(reviewCount * .05)
				}
			},
			reviews: generateReviews(3),
			stock: {
				inStock: Math.random() > .1,
				quantity: getRandomInt(0, 50)
			},
			store: {
				id: `store-${getRandomInt(1, 10)}`,
				name: `${brand} Official Store`,
				slug: `${brand.toLowerCase()}-store`,
				logo: `https://placehold.co/100x100?text=${brand[0]}`,
				rating: 4.8,
				reviewCount: 1250,
				isVerified: true,
				memberSince: "2020"
			},
			shipping: {
				freeShipping: Math.random() > .3,
				deliveryTime: "3-5 business days",
				policy: "30-day return policy. Buyer pays return shipping unless item is defective."
			},
			specifications: {
				Brand: brand,
				Model: `M-${getRandomInt(1e3, 9999)}`,
				Material: getRandomItem([
					"Cotton",
					"Polyester",
					"Leather",
					"Metal",
					"Plastic"
				]),
				Weight: `${getRandomInt(100, 1e3)}g`,
				Origin: "Imported"
			},
			isOnSale: hasDiscount,
			similarProducts: [],
			breadcrumbs: [
				{
					label: "Home",
					href: "/"
				},
				{
					label: categoryKey,
					href: `/category/${categoryKey.toLowerCase()}`
				},
				{
					label: subcategory,
					href: `/category/${categoryKey.toLowerCase()}/${subcategory.toLowerCase()}`
				},
				{
					label: name,
					href: "#"
				}
			],
			brand,
			colors: getRandomItems(COLORS, 1, 4),
			sizes: getRandomItems(SIZES, 2, 5),
			isNew: Math.random() > .8,
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			sales: getRandomInt(0, 1e3)
		};
	});
};
var products = generateProducts(50);
products.forEach((product) => {
	product.similarProducts = products.filter((p) => p.category.id === product.category.id && p.id !== product.id).slice(0, 6);
});
function FilterSidebar({ filters, updateFilter, availableBrands, availableCategories, className }) {
	const handleCheckboxChange = (checked, item, key) => {
		const current = filters[key];
		if (checked) updateFilter(key, [...current, item]);
		else updateFilter(key, current.filter((i) => i !== item));
	};
	const handlePriceChange = (value) => {
		updateFilter("priceRange", value);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `space-y-1 px-4 ${className}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-4 font-semibold text-lg",
				children: "Filters"
			}),
			availableCategories.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterGroup, {
				id: "categories",
				title: "Categories",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-h-48 space-y-2 overflow-y-auto pr-2",
					children: availableCategories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center space-x-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
							id: `cat-${category}`,
							checked: filters.categories.includes(category),
							onCheckedChange: (checked) => handleCheckboxChange(checked, category, "categories")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$1, {
							htmlFor: `cat-${category}`,
							className: "cursor-pointer font-normal text-sm",
							children: category
						})]
					}, category))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterGroup, {
				id: "price",
				title: "Price Range",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-2 pt-4 pb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider$1, {
						defaultValue: [0, 1e3],
						value: [filters.priceRange[0], filters.priceRange[1]],
						max: 1e3,
						step: 10,
						onValueChange: handlePriceChange,
						className: "mb-4"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between text-muted-foreground text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["$", filters.priceRange[0]] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["$", filters.priceRange[1]] })]
					})]
				})
			}),
			availableBrands.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterGroup, {
				id: "brands",
				title: "Brands",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-h-48 space-y-2 overflow-y-auto pr-2",
					children: availableBrands.map((brand) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center space-x-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
							id: `brand-${brand}`,
							checked: filters.brands.includes(brand),
							onCheckedChange: (checked) => handleCheckboxChange(checked, brand, "brands")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$1, {
							htmlFor: `brand-${brand}`,
							className: "cursor-pointer font-normal text-sm",
							children: brand
						})]
					}, brand))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterGroup, {
				id: "colors",
				title: "Colors",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup$1, {
					value: filters.colors[0] || "",
					onValueChange: (value) => updateFilter("colors", value ? [value] : []),
					className: "flex flex-wrap gap-2",
					children: COLORS.map((color) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorRadioItem, {
						color,
						value: color,
						id: `color-${color}`,
						className: "cursor-pointer"
					}, color))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterGroup, {
				id: "sizes",
				title: "Sizes",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: SIZES.map((size) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: filters.sizes.includes(size) ? "default" : "outline",
						size: "sm",
						onClick: () => {
							handleCheckboxChange(!filters.sizes.includes(size), size, "sizes");
						},
						className: "h-8 w-10 p-0",
						children: size
					}, size))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterGroup, {
				id: "ratings",
				title: "Ratings",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2",
					children: [
						4,
						3,
						2,
						1
					].map((rating) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "flex w-full cursor-pointer items-center space-x-2 rounded border-0 bg-transparent p-1 hover:bg-muted/50",
						onClick: () => updateFilter("rating", filters.rating === rating ? null : rating),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-4 w-4 rounded-full border ${filters.rating === rating ? "border-primary bg-primary" : "border-gray-300"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center",
							children: [Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `h-4 w-4 ${i < rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}` }, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-2 text-muted-foreground text-sm",
								children: "& Up"
							})]
						})]
					}, rating))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterGroup, {
				id: "availability",
				title: "Availability",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2",
					children: [
						"In Stock",
						"Ships in 24 hours",
						"Available for pickup"
					].map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center space-x-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
							id: `avail-${status}`,
							checked: filters.availability.includes(status),
							onCheckedChange: (checked) => handleCheckboxChange(checked, status, "availability")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$1, {
							htmlFor: `avail-${status}`,
							className: "cursor-pointer font-normal text-sm",
							children: status
						})]
					}, status))
				})
			})
		]
	});
}
function MobileFilterDrawer({ filters, updateFilter, totalResults, availableCategories, availableBrands, className }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				size: "lg",
				className: cn("flex @4xl:hidden gap-2", className),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "h-4 w-4" }), "Filters"]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
			side: "left",
			className: "@2xl:w-100 w-75 overflow-y-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, {
					className: "mb-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetTitle, { children: [
						"Filters (",
						totalResults,
						")"
					] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSidebar, {
					filters,
					updateFilter,
					availableCategories,
					availableBrands
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "sticky bottom-0 mt-6 border-t bg-background p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						className: "w-full",
						onClick: () => setOpen(false),
						children: [
							"Show ",
							totalResults,
							" Results"
						]
					})
				})
			]
		})]
	});
}
function ProductListingTemplate() {
	const { filters, updateFilter, products, totalProducts, isPending, activeFilters, removeFilter, clearAllFilters, availableCategories, availableBrands, fetchNextPage, hasNextPage, isFetchingNextPage } = useProductFilters();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "@container container mx-auto px-4 py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex @4xl:flex-row flex-col items-start @4xl:items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-bold text-3xl tracking-tight",
					children: "All Products"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-muted-foreground",
					children: [
						"Showing ",
						products.length,
						" of ",
						totalProducts,
						" products"
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex @4xl:w-auto w-full items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileFilterDrawer, {
							filters,
							updateFilter,
							totalResults: totalProducts,
							availableCategories,
							availableBrands
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "@4xl:w-75 flex-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Searchbar, {
								value: filters.search,
								onChange: (val) => updateFilter("search", val)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortDropdown, {
							value: filters.sort,
							onChange: (val) => updateFilter("sort", val)
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "@container flex items-start gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "sticky top-24 @5xl:block hidden w-64 shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSidebar, {
						filters,
						updateFilter,
						availableCategories,
						availableBrands
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActiveFilterChips, {
						filters: activeFilters,
						onRemove: removeFilter,
						onClearAll: clearAllFilters
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, {
						products,
						isLoading: isPending,
						hasNextPage,
						isFetchingNextPage,
						onLoadMore: fetchNextPage
					})]
				})]
			})]
		})
	});
}
var SplitComponent = ProductListingTemplate;
//#endregion
export { SplitComponent as component };
