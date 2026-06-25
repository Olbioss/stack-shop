import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { r as createServerFn } from "./ssr.mjs";
import { t as createSsrRpc } from "./createSsrRpc-CXFXGZZ3.mjs";
import { a as useSuspenseQuery, c as useQueryClient, i as queryOptions, n as useMutation } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as authMiddleware } from "./auth-BM1BErpv.mjs";
import { n as deleteShopSchema, o as updateShopSchema, r as getShopBySlugSchema, t as createShopSchema } from "./shop-CA4bt79N.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-shops-Cbmwju82.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var getVendorShops = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("a3fb4986a17e6149d8fe1a9fbde94c7dcd323396814f142dc4ada711156ea296"));
var getShopBySlug = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(getShopBySlugSchema).handler(createSsrRpc("da2d6690bfe9cb306f5dfac780f77bf310ef4add030ec3f94706abe6f353bbb6"));
var createShop = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(createShopSchema).handler(createSsrRpc("782e654ce2e675ca9ad1c08239dde7600d31dbdae6acaba02aead69394491407"));
var updateShop = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(updateShopSchema).handler(createSsrRpc("3241209ea36be4e052b0d372af3a4417a69a6b4f49191309e9b7d36fd52777dd"));
var deleteShop = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(deleteShopSchema).handler(createSsrRpc("77dd88faeb4c838de273ebcd6cab0ef8847d8ae150a680ee438bb27a87ab1be4"));
var vendorShopsQueryOptions = () => queryOptions({
	queryKey: ["vendor", "shops"],
	queryFn: () => getVendorShops()
});
var shopBySlugQueryOptions = (slug) => queryOptions({
	queryKey: [
		"vendor",
		"shops",
		slug
	],
	queryFn: () => getShopBySlug({ data: { slug } }),
	enabled: !!slug
});
var useShopMutations = () => {
	const queryClient = useQueryClient();
	const invalidateShops = () => {
		queryClient.invalidateQueries({ queryKey: ["vendor", "shops"] });
	};
	const createShopMutation = useMutation({
		mutationFn: async (data) => {
			return await createShop({ data });
		},
		onSuccess: (result) => {
			toast.success(`Shop "${result.shop?.name}" created successfully!`);
			invalidateShops();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to create shop");
		}
	});
	const updateShopMutation = useMutation({
		mutationFn: async (data) => {
			return await updateShop({ data });
		},
		onSuccess: (result) => {
			toast.success(`Shop "${result.shop?.name}" updated successfully!`);
			invalidateShops();
			if (result.shop?.slug) queryClient.invalidateQueries({ queryKey: [
				"vendor",
				"shops",
				result.shop.slug
			] });
		},
		onError: (error) => {
			toast.error(error.message || "Failed to update shop");
		}
	});
	const deleteShopMutation = useMutation({
		mutationFn: async (shopId) => {
			return await deleteShop({ data: { id: shopId } });
		},
		onSuccess: () => {
			toast.success("Shop deleted successfully");
			invalidateShops();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to delete shop");
		}
	});
	return {
		createShop: createShopMutation.mutateAsync,
		updateShop: updateShopMutation.mutateAsync,
		deleteShop: deleteShopMutation.mutateAsync,
		isCreating: createShopMutation.isPending,
		isUpdating: updateShopMutation.isPending,
		isDeleting: deleteShopMutation.isPending
	};
};
var useShops = () => {
	return {
		shopsQueryOptions: vendorShopsQueryOptions,
		shopBySlugQueryOptions,
		...useShopMutations()
	};
};
var useTransformedShops = (options) => {
	const { shopsQueryOptions } = useShops();
	const { data, ...rest } = useSuspenseQuery(shopsQueryOptions());
	const shops = data?.shops ?? [];
	const vendorId = data?.vendorId;
	return {
		shops: (0, import_react.useMemo)(() => {
			let filteredShops = shops;
			if (options?.filterByVendor && vendorId) filteredShops = shops.filter((shop) => shop.vendorId === vendorId);
			else if (options?.filterByVendor && !vendorId) filteredShops = [];
			return filteredShops.map((shop) => ({
				id: shop.id,
				vendorId: shop.vendorId,
				slug: shop.slug,
				name: shop.name,
				description: shop.description || null,
				logo: shop.logo || null,
				banner: shop.banner || null,
				category: shop.category || null,
				address: shop.address || null,
				phone: shop.phone || null,
				email: shop.email || null,
				enableNotifications: shop.enableNotifications || false,
				monthlyRevenue: new Intl.NumberFormat("en-US", {
					style: "currency",
					currency: "USD",
					minimumFractionDigits: 0,
					maximumFractionDigits: 0
				}).format(shop.totalRevenue || 0),
				status: shop.status === "active" ? "active" : "pending",
				rating: shop.rating || "0.0",
				totalProducts: shop.totalProducts || 0,
				totalOrders: shop.totalOrders || 0,
				createdAt: shop.createdAt || /* @__PURE__ */ new Date(),
				updatedAt: shop.updatedAt || /* @__PURE__ */ new Date()
			}));
		}, [
			shops,
			vendorId,
			options?.filterByVendor
		]),
		vendorId,
		...rest
	};
};
//#endregion
export { vendorShopsQueryOptions as i, useShops as n, useTransformedShops as r, shopBySlugQueryOptions as t };
