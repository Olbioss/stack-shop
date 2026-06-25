import { r as createServerFn } from "./ssr.mjs";
import { Gt as zod_default, ln as string } from "../_libs/@better-auth/core+[...].mjs";
import { a as getProductByIdSchema, d as updateProductSchema, n as createProductSchema, p as vendorProductsQuerySchema, r as deleteProductSchema } from "./product-query-DTSuSPZY.mjs";
import { t as createSsrRpc } from "./createSsrRpc-CXFXGZZ3.mjs";
import { c as useQueryClient, i as queryOptions, n as useMutation, o as useQuery } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as authMiddleware } from "./auth-BM1BErpv.mjs";
import { a as vendorOrderKeys, t as getVendorOrders } from "./use-vendor-orders-Q75zrqay.mjs";
import { f as updateReviewStatusSchema, l as getVendorReviewsSchema, u as respondToReviewSchema } from "./review-B2UzwQZg.mjs";
import { l as updateCategorySchema, n as createCategorySchema, u as vendorCategoriesQuerySchema } from "./category-query-C0zo9q64.mjs";
import { c as updateAttributeSchema, l as vendorAttributesQuerySchema, r as createAttributeSchema } from "./attribute-query-C2g1jHby.mjs";
import { c as updateBrandSchema, l as vendorBrandsQuerySchema, n as createBrandSchema } from "./brand-query-w-wFF7Pb.mjs";
import { a as getAvailableCouponsForUserSchema, d as validateCouponSchema, f as vendorCouponsQuerySchema, i as deleteCouponSchema, o as getCouponByCodeSchema, r as createCouponSchema, s as getCouponByIdSchema, u as updateCouponSchema } from "./coupon-query-CudBYs7G.mjs";
import { n as createTagSchema, o as updateTagSchema, s as vendorTagsQuerySchema } from "./tag-query-B-OjxzSS.mjs";
import { n as createTaxRateSchema, o as updateTaxRateSchema, s as vendorTaxRatesQuerySchema } from "./tax-rate-query-BZqT2dMh.mjs";
import { n as createServerFetcher, t as booleanFilterTransform } from "./create-server-fetcher-Cvil3itN.mjs";
import { a as updateShippingMethodSchema, i as getShippingMethodsQuerySchema, n as deleteShippingMethodSchema, r as getShippingMethodByIdSchema, t as createShippingMethodSchema } from "./shipping-BnpSxyrq.mjs";
import "./brands-DdHqH_d3.mjs";
import "./category-Cw6oCYeI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-vendor-entity-fetcher-DwnqReOY.js
/**
* Attribute Server Functions
*
* Server functions for attribute management in the vendor dashboard.
* Uses TanStack Start's createServerFn with Zod validation.
*
* Performance Optimizations:
* - Uses batch queries with inArray to eliminate N+1 queries for product counts
* - Uses Promise.all for parallel database operations
* - Computes productCount dynamically from productAttributes table for accuracy
*/
var getAttributes = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(vendorAttributesQuerySchema).handler(createSsrRpc("587789bfe7c37ecda4e35816350db3f39589de82c5fc7acebaaaa3be49491edc"));
var getAttributeById = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(vendorAttributesQuerySchema.pick({ shopId: true }).extend({ id: string().min(1, "Attribute ID is required") })).handler(createSsrRpc("c000805e0f6582998eb2897ddc4a39631a80f83ed983f631dde09d6b61f64cc2"));
var createAttribute = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(createAttributeSchema).handler(createSsrRpc("7b35d90dcbe7e347bcc5be1ccc0658a450170f65a68a3418c1cecd0fa7deebba"));
var updateAttribute = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(updateAttributeSchema).handler(createSsrRpc("be71035562387bfeee6a5c2e633fa7c9160d2f04ffbf9b85800aa9cad025bbf5"));
var deleteAttribute = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(vendorAttributesQuerySchema.pick({ shopId: true }).extend({ id: string().min(1, "Attribute ID is required") })).handler(createSsrRpc("3260e2304aed9b928c68d5ebe29e99d9c9d433737b8012f44b27e8570ad13fa2"));
var vendorAttributesKeys = {
	all: (shopId) => [
		"vendor",
		"attributes",
		shopId
	],
	lists: (shopId) => [...vendorAttributesKeys.all(shopId), "list"],
	list: (params) => [...vendorAttributesKeys.lists(params.shopId), params],
	details: (shopId) => [...vendorAttributesKeys.all(shopId), "detail"],
	detail: (shopId, id) => [...vendorAttributesKeys.details(shopId), id]
};
var defaultParams$4 = {
	limit: 10,
	offset: 0,
	sortBy: "sortOrder",
	sortDirection: "asc"
};
var attributesQueryOptions = (params) => queryOptions({
	queryKey: vendorAttributesKeys.list(params),
	queryFn: () => getAttributes({ data: {
		...defaultParams$4,
		...params
	} }),
	enabled: !!params.shopId
});
var attributeByIdQueryOptions = (id, shopId) => queryOptions({
	queryKey: vendorAttributesKeys.detail(shopId, id),
	queryFn: () => getAttributeById({ data: {
		id,
		shopId
	} }),
	enabled: !!id && !!shopId
});
var useAttributeMutations = (shopId) => {
	const queryClient = useQueryClient();
	const invalidateAttributes = () => {
		queryClient.invalidateQueries({ queryKey: vendorAttributesKeys.all(shopId) });
	};
	const createAttributeMutation = useMutation({
		mutationFn: async (data) => {
			return await createAttribute({ data: {
				...data,
				shopId
			} });
		},
		onSuccess: (result) => {
			toast.success(`Attribute "${result.attribute?.name}" created successfully!`);
			invalidateAttributes();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to create attribute");
		}
	});
	const updateAttributeMutation = useMutation({
		mutationFn: async (data) => {
			return await updateAttribute({ data: {
				...data,
				shopId
			} });
		},
		onSuccess: (result) => {
			toast.success(`Attribute "${result.attribute?.name}" updated successfully!`);
			invalidateAttributes();
			if (result.attribute?.id) queryClient.invalidateQueries({ queryKey: vendorAttributesKeys.detail(shopId, result.attribute.id) });
		},
		onError: (error) => {
			toast.error(error.message || "Failed to update attribute");
		}
	});
	const deleteAttributeMutation = useMutation({
		mutationFn: async (attributeId) => {
			return await deleteAttribute({ data: {
				id: attributeId,
				shopId
			} });
		},
		onSuccess: () => {
			toast.success("Attribute deleted successfully");
			invalidateAttributes();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to delete attribute");
		}
	});
	const mutationState = {
		creatingId: createAttributeMutation.isPending ? "new" : null,
		deletingId: deleteAttributeMutation.isPending ? deleteAttributeMutation.variables ?? null : null,
		updatingId: updateAttributeMutation.isPending ? updateAttributeMutation.variables?.id ?? null : null,
		isAnyMutating: createAttributeMutation.isPending || updateAttributeMutation.isPending || deleteAttributeMutation.isPending
	};
	return {
		createAttribute: createAttributeMutation.mutateAsync,
		updateAttribute: updateAttributeMutation.mutateAsync,
		deleteAttribute: deleteAttributeMutation.mutateAsync,
		isCreating: createAttributeMutation.isPending,
		isUpdating: updateAttributeMutation.isPending,
		isDeleting: deleteAttributeMutation.isPending,
		mutationState,
		isAttributeMutating: (id) => mutationState.deletingId === id || mutationState.updatingId === id
	};
};
var useAttributes = (shopId) => {
	return {
		attributesQueryOptions: (params) => attributesQueryOptions({
			...params,
			shopId
		}),
		attributeByIdQueryOptions: (id) => attributeByIdQueryOptions(id, shopId),
		queryKeys: vendorAttributesKeys,
		...useAttributeMutations(shopId)
	};
};
var getProducts = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(vendorProductsQuerySchema).handler(createSsrRpc("98315c507bfec44dce41e598015c64bcaa8f9768027ab711d3fb136d8f13e40c"));
var getProductById = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(getProductByIdSchema.extend({ shopId: getProductByIdSchema.shape.id }).omit({ id: true }).extend({
	id: getProductByIdSchema.shape.id,
	shopId: getProductByIdSchema.shape.id
})).handler(createSsrRpc("54d1a37b17d6aba826dea10efa3f6a99a128772a7f0fdd7e87ff5405a416b222"));
var createProduct = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(createProductSchema).handler(createSsrRpc("36f7409d7cdd3490960a90dab8edf7cab13bdaeb0d6fced6cc1f679f0a5c6fc3"));
var updateProduct = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(updateProductSchema).handler(createSsrRpc("269ca78e3e645938008c5fc1dd78f5f12a151d360101d7c843caefe33ea24890"));
var deleteProduct = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(deleteProductSchema.extend({ shopId: deleteProductSchema.shape.id })).handler(createSsrRpc("41f4a38332ffa8c374057a8fb0c6b66f5d29ea1df7f766d4b97f00eb7f1ec198"));
/**
* Vendor Products Hook
*
* React hook for product management in the vendor dashboard.
* Uses TanStack Query with server functions for SSR-compatible data fetching.
*/
var vendorProductsKeys = {
	all: ["vendor", "products"],
	lists: () => [...vendorProductsKeys.all, "list"],
	list: (shopId, params) => [
		...vendorProductsKeys.lists(),
		shopId,
		params
	],
	details: () => [...vendorProductsKeys.all, "detail"],
	detail: (shopId, id) => [
		...vendorProductsKeys.details(),
		shopId,
		id
	]
};
/**
* Query options for fetching a single product by ID
*/
var productByIdQueryOptions = (id, shopId) => queryOptions({
	queryKey: vendorProductsKeys.detail(shopId, id),
	queryFn: () => getProductById({ data: {
		id,
		shopId
	} }),
	enabled: !!id && !!shopId
});
/**
* Hook providing mutations for product management
*/
var useProductMutations = (shopId) => {
	const queryClient = useQueryClient();
	const invalidateProducts = () => {
		queryClient.invalidateQueries({ queryKey: vendorProductsKeys.lists() });
	};
	const createProductMutation = useMutation({
		mutationFn: async (data) => {
			return await createProduct({ data: {
				...data,
				shopId
			} });
		},
		onSuccess: (result) => {
			toast.success(`Product "${result.product?.name}" created successfully!`);
			invalidateProducts();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to create product");
		}
	});
	const updateProductMutation = useMutation({
		mutationFn: async (data) => {
			return await updateProduct({ data: {
				...data,
				shopId
			} });
		},
		onSuccess: (result) => {
			toast.success(`Product "${result.product?.name}" updated successfully!`);
			invalidateProducts();
			if (result.product?.id) queryClient.invalidateQueries({ queryKey: vendorProductsKeys.detail(shopId, result.product.id) });
		},
		onError: (error) => {
			toast.error(error.message || "Failed to update product");
		}
	});
	const deleteProductMutation = useMutation({
		mutationFn: async (productId) => {
			return await deleteProduct({ data: {
				id: productId,
				shopId
			} });
		},
		onSuccess: () => {
			toast.success("Product deleted successfully");
			invalidateProducts();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to delete product");
		}
	});
	const mutationState = {
		creatingId: createProductMutation.isPending ? "new" : null,
		deletingId: deleteProductMutation.isPending ? deleteProductMutation.variables : null,
		isCreating: createProductMutation.isPending,
		updatingId: updateProductMutation.isPending ? updateProductMutation.variables?.id : null,
		isAnyMutating: createProductMutation.isPending || updateProductMutation.isPending || deleteProductMutation.isPending
	};
	return {
		createProduct: createProductMutation.mutateAsync,
		updateProduct: updateProductMutation.mutateAsync,
		deleteProduct: deleteProductMutation.mutateAsync,
		isCreating: createProductMutation.isPending,
		isUpdating: updateProductMutation.isPending,
		isDeleting: deleteProductMutation.isPending,
		mutationState,
		isProductMutating: (id) => mutationState.deletingId === id || mutationState.updatingId === id
	};
};
/**
* Combined hook for product management
*/
var useProducts = (shopId) => {
	return {
		productByIdQueryOptions: (id) => productByIdQueryOptions(id, shopId),
		...useProductMutations(shopId)
	};
};
/**
* Shipping Server Functions
*
* Server functions for shipping management in the vendor dashboard.
*/
var getShippingMethods = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(getShippingMethodsQuerySchema).handler(createSsrRpc("7db5e519f5bd8724e88cf3d70ee2f2b5402c2de398af7cd23db6f07579652336"));
var getShippingMethodById = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(getShippingMethodByIdSchema).handler(createSsrRpc("90f57122889c8f101a25722ab8855857a89b60d7b615efa623477a2ce9699b9a"));
var createShippingMethod = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(createShippingMethodSchema).handler(createSsrRpc("f4a6e2030fc964c0bce8d5e1a9cb707ddf90ece82acfec8b4b66b29ba82ab3bd"));
var updateShippingMethod = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(updateShippingMethodSchema).handler(createSsrRpc("8f3033892d0557a8569da1494cad3fd7fdf468c7069af8d7ecbd29363a0e56b9"));
var deleteShippingMethod = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(deleteShippingMethodSchema).handler(createSsrRpc("1a10ad7fbb6e0f6d37b874278a3d4a0e85359e33d07a6a2e1e8d3994795028c8"));
var getBrands = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(vendorBrandsQuerySchema).handler(createSsrRpc("4ef217286a43e24388263aadb9dabe3bfcf53aeac35c084494b834c6c3099cf8"));
var getBrandById = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(vendorBrandsQuerySchema.pick({ shopId: true }).extend({ id: vendorBrandsQuerySchema.shape.shopId })).handler(createSsrRpc("25446829858865e913c3521dfcd002be4e4cc7075577ce2c6273bfe9271c6a81"));
var createBrand = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(createBrandSchema).handler(createSsrRpc("0eb4c4357baecb962af6d25b63c74eeee688219dc1fada1d51426d538849ddff"));
var updateBrand = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(updateBrandSchema).handler(createSsrRpc("140b47cb75b83dae8f75df9b5205562701650d8e6af56a70b0a40e2bcbdfa555"));
var deleteBrand = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(vendorBrandsQuerySchema.pick({ shopId: true }).extend({ id: vendorBrandsQuerySchema.shape.shopId })).handler(createSsrRpc("63b82dc9ffd443ff86a277a1aadc9d32bd490716e4367e529d3f8fb0053364cb"));
/**
* Coupon Server Functions
*
* Server functions for coupon management in the vendor dashboard.
* Uses TanStack Start's createServerFn with Zod validation.
*/
var getCoupons = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(vendorCouponsQuerySchema).handler(createSsrRpc("3faca418e59f080a191f35a86f6ff5aedd8e22e6d329eeeecbc8ecbb4bdb0f26"));
var getCouponById = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(getCouponByIdSchema.extend({ shopId: string().min(1, "Shop ID is required") })).handler(createSsrRpc("8b18697112588ce4b34fc2e4f62fa767806b1d9e7cda9de108cfbf02a6486630"));
createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(getCouponByCodeSchema).handler(createSsrRpc("57993649a0a3f17945838c988690c671778fe9cdc0726fffdfe0db38389cbb95"));
var createCoupon = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(createCouponSchema).handler(createSsrRpc("44de5d3cca36cf84cd4c3f3fd6c7eadf15ca7c6a2b59b5008cfa5679ed0fffd9"));
var updateCoupon = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(updateCouponSchema).handler(createSsrRpc("9ef988ebe83cc84eb38e2280e042e6eec40082ce3e153c10f9553ad02b4e3a35"));
var deleteCoupon = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(deleteCouponSchema.extend({ shopId: string().min(1, "Shop ID is required") })).handler(createSsrRpc("4cafa832e934d622973c09980e4dbf3da7a27e63e8b2b0fe512ac461b7f8f6bc"));
var validateCoupon = createServerFn({ method: "POST" }).inputValidator(validateCouponSchema).handler(createSsrRpc("fc717e6a587b23d33a2062a0540485d9dfe1b7403ef7429cf8c712bb7fef63ea"));
var getAvailableCouponsForUser = createServerFn({ method: "GET" }).inputValidator(getAvailableCouponsForUserSchema).handler(createSsrRpc("758bad04bdbabb26a7ca466bc717e0fa43253d6ad32a5d53147c8c8b0afae726"));
/**
* Review Server Functions (Vendor)
*
* Server functions for vendor review operations.
* Vendors can view reviews for products in shops they own.
* Access is scoped to the vendor's own shops (admins may pass any shopSlug).
*/
/**
* Resolve the shop id for a vendor review query, enforcing ownership.
* Returns null when the shop does not exist or the user has no access.
*/
/**
* Get reviews for a vendor's shop (paginated, filterable by product/status/rating).
*/
var getVendorReviews = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(getVendorReviewsSchema).handler(createSsrRpc("a666737e81104e36ec1c0c0de3a0595553c00115fe1e4c9fe61a1b048e5776aa"));
/**
* Approve or reject a review for a shop the vendor owns.
*/
var updateVendorReviewStatus = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(updateReviewStatusSchema).handler(createSsrRpc("1f3369c6a0980a59dd01c8bd508f53a49dc3b673c6ebe8a929dd524f338f3b71"));
/**
* Post (or update) a vendor response to a review for a shop the vendor owns.
*/
var respondToReview = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(respondToReviewSchema).handler(createSsrRpc("ed663de432dfbce4e241eab3267d1d1c7f71e38b7ef729f9ede9708654776643"));
/**
* Tag Server Functions
*
* Server functions for tag management in the vendor dashboard.
* Uses TanStack Start's createServerFn with Zod validation.
*/
var getTags = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(vendorTagsQuerySchema).handler(createSsrRpc("d2fb2bc9b075457362a756a7d05f17202b6eb26cf0b32def3a500550a5c04493"));
var getTagById = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(vendorTagsQuerySchema.pick({ shopId: true }).extend({ id: string().min(1, "Tag ID is required") })).handler(createSsrRpc("48a77372ad7a396d4cf0051657794825ef3ac78bc6025863e9b53fa402cd9e81"));
var createTag = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(createTagSchema).handler(createSsrRpc("3b269942628be306fbafe0e2930da88c6958d4311783e3d96a6118db2e467223"));
var updateTag = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(updateTagSchema).handler(createSsrRpc("ab3a551f36cc54683b3c0da85adb09243ad34a992c06e974dba1b2f5bb37b212"));
var deleteTag = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(vendorTagsQuerySchema.pick({ shopId: true }).extend({ id: string().min(1, "Tag ID is required") })).handler(createSsrRpc("75b2829599b108257a73bf7e2448b03319aa873af7fd3b6066d8e1a634518f26"));
/**
* Tax Rate Server Functions
*
* Server functions for tax rate management in the vendor dashboard.
* Uses TanStack Start's createServerFn with Zod validation.
*/
var getTaxRates = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(vendorTaxRatesQuerySchema).handler(createSsrRpc("dbc1125bd721eee6b100a424d3a3752081db6731a4f787eabc4c87172f2845cd"));
var getTaxRateById = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(vendorTaxRatesQuerySchema.pick({ shopId: true }).extend({ id: string().min(1, "Tax rate ID is required") })).handler(createSsrRpc("642855e375b3333080afe046d05f7f610c26b11d5533d1149b4444b8440896be"));
var createTaxRate = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(createTaxRateSchema).handler(createSsrRpc("ce70106983f078669668a9011fb44d28d13b212ad85c615ebb9e12df9729ada5"));
var updateTaxRate = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(updateTaxRateSchema).handler(createSsrRpc("fcd31a5f30a48676a91b777b96cb2a8644d8cd54a7093002ac5bf1be2ac87413"));
var deleteTaxRate = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(vendorTaxRatesQuerySchema.pick({ shopId: true }).extend({ id: string().min(1, "Tax rate ID is required") })).handler(createSsrRpc("d12e29e873f5d448053b30c213dedb3e8242d4e457cd49b19165cc574288b418"));
var toggleTaxRateActive = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(vendorTaxRatesQuerySchema.pick({ shopId: true }).extend({ id: string().min(1, "Tax rate ID is required") })).handler(createSsrRpc("6d0dc9578ade1131d633d9d1e81aa225fad2504a3e9f4ccb31b3720d540a3c0d"));
var getVendorTransactionsSchema = zod_default.object({
	limit: zod_default.number().min(1).max(100).optional().default(50),
	offset: zod_default.number().min(0).optional().default(0),
	status: zod_default.enum([
		"pending",
		"processing",
		"succeeded",
		"failed",
		"refunded"
	]).optional(),
	shopSlug: zod_default.string().optional()
});
var getVendorTransactionStatsSchema = zod_default.object({ shopSlug: zod_default.string().optional() });
var getVendorTransactions = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(getVendorTransactionsSchema).handler(createSsrRpc("d8e25468e3a9cca3a78b3348b4431e674c2c3e0ddaaf5b32d805c33d8f5b10ed"));
var getVendorTransactionStats = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(getVendorTransactionStatsSchema).handler(createSsrRpc("f93abd37ca8fc9c7d1950ff83fb57b21887b78e01314cd2001cacafc7caa45ca"));
var getCategories = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(vendorCategoriesQuerySchema).handler(createSsrRpc("ac9426bb67c84a3999b7d6ca1c3cae0017d43a5e56b392b5222c9525672255d3"));
var getCategoryById = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(vendorCategoriesQuerySchema.pick({ shopId: true }).extend({ id: vendorCategoriesQuerySchema.shape.shopId })).handler(createSsrRpc("86db024604b2bb22816a24d4ef0a9ada3dd75e44ebb5a44686a38d3d3ecda81b"));
var createCategory = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(createCategorySchema).handler(createSsrRpc("b507ba3651755eedbb5f942277f8dc6c1a03dae3e4a39a8b76280ce1fc959867"));
var updateCategory = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(updateCategorySchema).handler(createSsrRpc("2fbb467abe6871094ed16fe999c70ddbb827e8778fcafb49b4457a7221b25608"));
var deleteCategory = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(vendorCategoriesQuerySchema.pick({ shopId: true }).extend({ id: vendorCategoriesQuerySchema.shape.shopId })).handler(createSsrRpc("4fb6138a8ec260e12a52e5af65b3577b3970195c46db4167536f88be8fe4213d"));
/**
* Vendor Shipping Hook
*
* React hook for shipping management in the vendor dashboard.
* Uses TanStack Query with server functions for SSR-compatible data fetching.
*/
var vendorShippingKeys = {
	all: (shopId) => [
		"vendor",
		"shipping",
		shopId
	],
	lists: (shopId) => [...vendorShippingKeys.all(shopId), "list"],
	list: (params) => [...vendorShippingKeys.lists(params.shopId), params],
	details: (shopId) => [...vendorShippingKeys.all(shopId), "detail"],
	detail: (shopId, id) => [...vendorShippingKeys.details(shopId), id]
};
var defaultParams$3 = {
	limit: 10,
	offset: 0,
	sortBy: "createdAt",
	sortDirection: "desc"
};
var shippingMethodsQueryOptions = (params) => queryOptions({
	queryKey: vendorShippingKeys.list(params),
	queryFn: () => getShippingMethods({ data: {
		...defaultParams$3,
		...params
	} }),
	enabled: !!params.shopId,
	staleTime: 30 * 1e3
});
var shippingMethodByIdQueryOptions = (id, shopId) => queryOptions({
	queryKey: vendorShippingKeys.detail(shopId, id),
	queryFn: () => getShippingMethodById({ data: {
		id,
		shopId
	} }),
	enabled: !!id && !!shopId,
	staleTime: 60 * 1e3
});
var useShippingMutations = (shopId) => {
	const queryClient = useQueryClient();
	const invalidateShipping = () => {
		queryClient.invalidateQueries({ queryKey: vendorShippingKeys.all(shopId) });
	};
	const createShippingMutation = useMutation({
		mutationFn: async (data) => {
			return await createShippingMethod({ data: {
				...data,
				shopId
			} });
		},
		onSuccess: (result) => {
			toast.success(`Shipping method "${result.shippingMethod?.name}" created successfully!`);
			invalidateShipping();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to create shipping method");
		}
	});
	const updateShippingMutation = useMutation({
		mutationFn: async (data) => {
			return await updateShippingMethod({ data: {
				...data,
				shopId
			} });
		},
		onSuccess: (result) => {
			toast.success(`Shipping method "${result.shippingMethod?.name}" updated successfully!`);
			invalidateShipping();
			if (result.shippingMethod?.id) queryClient.invalidateQueries({ queryKey: vendorShippingKeys.detail(shopId, result.shippingMethod.id) });
		},
		onError: (error) => {
			toast.error(error.message || "Failed to update shipping method");
		}
	});
	const deleteShippingMutation = useMutation({
		mutationFn: async (shippingId) => {
			return await deleteShippingMethod({ data: {
				id: shippingId,
				shopId
			} });
		},
		onSuccess: () => {
			toast.success("Shipping method deleted successfully");
			invalidateShipping();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to delete shipping method");
		}
	});
	const mutationState = {
		creatingId: createShippingMutation.isPending ? "new" : null,
		deletingId: deleteShippingMutation.isPending ? deleteShippingMutation.variables ?? null : null,
		updatingId: updateShippingMutation.isPending ? updateShippingMutation.variables?.id ?? null : null,
		isAnyMutating: createShippingMutation.isPending || updateShippingMutation.isPending || deleteShippingMutation.isPending
	};
	return {
		createShipping: createShippingMutation.mutateAsync,
		updateShipping: updateShippingMutation.mutateAsync,
		deleteShipping: deleteShippingMutation.mutateAsync,
		isCreating: createShippingMutation.isPending,
		isUpdating: updateShippingMutation.isPending,
		isDeleting: deleteShippingMutation.isPending,
		mutationState,
		isShippingMutating: (id) => mutationState.deletingId === id || mutationState.updatingId === id
	};
};
var useShipping = (shopId) => {
	return {
		shippingMethodsQueryOptions: (params) => shippingMethodsQueryOptions({
			...params,
			shopId
		}),
		shippingMethodByIdQueryOptions: (id) => shippingMethodByIdQueryOptions(id, shopId),
		queryKeys: vendorShippingKeys,
		...useShippingMutations(shopId)
	};
};
/**
* Vendor Brands Hook
*
* React hook for brand management in the vendor dashboard.
* Uses TanStack Query with server functions for SSR-compatible data fetching.
*/
var vendorBrandsKeys = {
	all: (shopId) => [
		"vendor",
		"brands",
		shopId
	],
	lists: (shopId) => [...vendorBrandsKeys.all(shopId), "list"],
	list: (params) => [...vendorBrandsKeys.lists(params.shopId), params],
	details: (shopId) => [...vendorBrandsKeys.all(shopId), "detail"],
	detail: (shopId, id) => [...vendorBrandsKeys.details(shopId), id]
};
var defaultParams$2 = {
	limit: 10,
	offset: 0,
	sortBy: "sortOrder",
	sortDirection: "asc"
};
/**
* Query options for fetching brands with pagination
*/
var brandsQueryOptions = (params) => queryOptions({
	queryKey: vendorBrandsKeys.list(params),
	queryFn: () => getBrands({ data: {
		...defaultParams$2,
		...params
	} }),
	enabled: !!params.shopId
});
/**
* Query options for fetching a single brand by ID
*/
var brandByIdQueryOptions = (id, shopId) => queryOptions({
	queryKey: vendorBrandsKeys.detail(shopId, id),
	queryFn: () => getBrandById({ data: {
		id,
		shopId
	} }),
	enabled: !!id && !!shopId
});
/**
* Hook providing mutations for brand management
*/
var useBrandMutations = (shopId) => {
	const queryClient = useQueryClient();
	const invalidateBrands = () => {
		queryClient.invalidateQueries({ queryKey: vendorBrandsKeys.all(shopId) });
	};
	const createBrandMutation = useMutation({
		mutationFn: async (data) => {
			return await createBrand({ data: {
				...data,
				shopId
			} });
		},
		onSuccess: (result) => {
			toast.success(`Brand "${result.brand?.name}" created successfully!`);
			invalidateBrands();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to create brand");
		}
	});
	const updateBrandMutation = useMutation({
		mutationFn: async (data) => {
			return await updateBrand({ data: {
				...data,
				shopId
			} });
		},
		onSuccess: (result) => {
			toast.success(`Brand "${result.brand?.name}" updated successfully!`);
			invalidateBrands();
			if (result.brand?.id) queryClient.invalidateQueries({ queryKey: vendorBrandsKeys.detail(shopId, result.brand.id) });
		},
		onError: (error) => {
			toast.error(error.message || "Failed to update brand");
		}
	});
	const deleteBrandMutation = useMutation({
		mutationFn: async (brandId) => {
			return await deleteBrand({ data: {
				id: brandId,
				shopId
			} });
		},
		onSuccess: () => {
			toast.success("Brand deleted successfully");
			invalidateBrands();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to delete brand");
		}
	});
	const mutationState = {
		creatingId: createBrandMutation.isPending ? "new" : null,
		deletingId: deleteBrandMutation.isPending ? deleteBrandMutation.variables ?? null : null,
		updatingId: updateBrandMutation.isPending ? updateBrandMutation.variables?.id ?? null : null,
		isAnyMutating: createBrandMutation.isPending || updateBrandMutation.isPending || deleteBrandMutation.isPending
	};
	return {
		createBrand: createBrandMutation.mutateAsync,
		updateBrand: updateBrandMutation.mutateAsync,
		deleteBrand: deleteBrandMutation.mutateAsync,
		isCreating: createBrandMutation.isPending,
		isUpdating: updateBrandMutation.isPending,
		isDeleting: deleteBrandMutation.isPending,
		mutationState,
		isBrandMutating: (id) => mutationState.deletingId === id || mutationState.updatingId === id
	};
};
/**
* Combined hook for brand management
*/
var useBrands = (shopId) => {
	return {
		brandsQueryOptions: (params) => brandsQueryOptions({
			...params,
			shopId
		}),
		brandByIdQueryOptions: (id) => brandByIdQueryOptions(id, shopId),
		queryKeys: vendorBrandsKeys,
		...useBrandMutations(shopId)
	};
};
/**
* Vendor Coupons Hook
*
* React hook for coupon management in the vendor dashboard.
* Uses TanStack Query with server functions for SSR-compatible data fetching.
*/
var vendorCouponsKeys = {
	all: (shopId) => [
		"vendor",
		"coupons",
		shopId
	],
	lists: (shopId) => [...vendorCouponsKeys.all(shopId), "list"],
	list: (shopId, params) => [...vendorCouponsKeys.lists(shopId), params],
	details: (shopId) => [...vendorCouponsKeys.all(shopId), "detail"],
	detail: (shopId, id) => [...vendorCouponsKeys.details(shopId), id],
	available: (shopId) => [...vendorCouponsKeys.all(shopId), "available"],
	validation: (shopId) => [...vendorCouponsKeys.all(shopId), "validation"]
};
/**
* Query options for fetching coupons with pagination
*/
var couponsQueryOptions = (params) => queryOptions({
	queryKey: vendorCouponsKeys.list(params.shopId, params),
	queryFn: () => getCoupons({ data: params }),
	enabled: !!params.shopId
});
/**
* Query options for fetching a single coupon by ID
*/
var couponByIdQueryOptions = (id, shopId) => queryOptions({
	queryKey: vendorCouponsKeys.detail(shopId, id),
	queryFn: () => getCouponById({ data: {
		id,
		shopId
	} }),
	enabled: !!id && !!shopId
});
/**
* Query options for fetching available coupons for a user
*/
var availableCouponsQueryOptions = (params) => queryOptions({
	queryKey: vendorCouponsKeys.available(params.shopId),
	queryFn: () => getAvailableCouponsForUser({ data: params }),
	enabled: !!params.shopId
});
/**
* Hook providing mutations for coupon management
*/
var useCouponMutations = (shopId) => {
	const queryClient = useQueryClient();
	const invalidateCoupons = () => {
		queryClient.invalidateQueries({ queryKey: vendorCouponsKeys.all(shopId) });
		queryClient.invalidateQueries({ queryKey: ["datatable"] });
	};
	const createCouponMutation = useMutation({
		mutationFn: async (data) => {
			return await createCoupon({ data: {
				...data,
				shopId
			} });
		},
		onSuccess: (result) => {
			toast.success(`Coupon "${result.coupon?.code}" created successfully!`);
			invalidateCoupons();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to create coupon");
		}
	});
	const updateCouponMutation = useMutation({
		mutationFn: async (data) => {
			return await updateCoupon({ data: {
				...data,
				shopId
			} });
		},
		onSuccess: (result) => {
			toast.success(`Coupon "${result.coupon?.code}" updated successfully!`);
			invalidateCoupons();
			if (result.coupon?.id) queryClient.invalidateQueries({ queryKey: vendorCouponsKeys.detail(shopId, result.coupon.id) });
		},
		onError: (error) => {
			toast.error(error.message || "Failed to update coupon");
		}
	});
	const deleteCouponMutation = useMutation({
		mutationFn: async (couponId) => {
			return await deleteCoupon({ data: {
				id: couponId,
				shopId
			} });
		},
		onSuccess: () => {
			toast.success("Coupon deleted successfully");
			invalidateCoupons();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to delete coupon");
		}
	});
	const validateCouponMutation = useMutation({
		mutationKey: vendorCouponsKeys.validation(shopId),
		mutationFn: async (input) => {
			return await validateCoupon({ data: {
				...input,
				shopId
			} });
		},
		onSuccess: (data) => {
			if (data.coupon) queryClient.setQueryData([...vendorCouponsKeys.validation(shopId), data.coupon.code], data);
		}
	});
	const mutationState = {
		creatingId: createCouponMutation.isPending ? "new" : null,
		deletingId: deleteCouponMutation.isPending ? deleteCouponMutation.variables : null,
		updatingId: updateCouponMutation.isPending ? updateCouponMutation.variables?.id : null,
		isCreating: createCouponMutation.isPending,
		isAnyMutating: createCouponMutation.isPending || deleteCouponMutation.isPending || updateCouponMutation.isPending
	};
	return {
		createCoupon: createCouponMutation.mutateAsync,
		updateCoupon: updateCouponMutation.mutateAsync,
		deleteCoupon: deleteCouponMutation.mutateAsync,
		validateCoupon: validateCouponMutation.mutateAsync,
		isCreating: createCouponMutation.isPending,
		isUpdating: updateCouponMutation.isPending,
		isDeleting: deleteCouponMutation.isPending,
		isValidating: validateCouponMutation.isPending,
		validationResult: validateCouponMutation.data,
		validationError: validateCouponMutation.error,
		resetValidation: validateCouponMutation.reset,
		mutationState,
		isCouponMutating: (id) => mutationState.deletingId === id || mutationState.updatingId === id
	};
};
/**
* Combined hook for coupon management
*/
var useCoupons = (shopId) => {
	return {
		couponsQueryOptions: (params) => couponsQueryOptions({
			...params,
			shopId
		}),
		couponByIdQueryOptions: (id) => couponByIdQueryOptions(id, shopId),
		availableCouponsQueryOptions: (params) => availableCouponsQueryOptions({
			...params,
			shopId
		}),
		...useCouponMutations(shopId)
	};
};
var vendorTagsKeys = {
	all: (shopId) => [
		"vendor",
		"tags",
		shopId
	],
	lists: (shopId) => [...vendorTagsKeys.all(shopId), "list"],
	list: (params) => [...vendorTagsKeys.lists(params.shopId), params],
	details: (shopId) => [...vendorTagsKeys.all(shopId), "detail"],
	detail: (shopId, id) => [...vendorTagsKeys.details(shopId), id]
};
var defaultParams$1 = {
	limit: 10,
	offset: 0,
	sortBy: "sortOrder",
	sortDirection: "asc"
};
var tagsQueryOptions = (params) => queryOptions({
	queryKey: vendorTagsKeys.list(params),
	queryFn: () => getTags({ data: {
		...defaultParams$1,
		...params
	} }),
	enabled: !!params.shopId
});
var tagByIdQueryOptions = (id, shopId) => queryOptions({
	queryKey: vendorTagsKeys.detail(shopId, id),
	queryFn: () => getTagById({ data: {
		id,
		shopId
	} }),
	enabled: !!id && !!shopId
});
var useTagMutations = (shopId) => {
	const queryClient = useQueryClient();
	const invalidateTags = () => {
		queryClient.invalidateQueries({ queryKey: vendorTagsKeys.all(shopId) });
	};
	const createTagMutation = useMutation({
		mutationFn: async (data) => {
			return await createTag({ data: {
				...data,
				shopId
			} });
		},
		onSuccess: (result) => {
			toast.success(`Tag "${result.tag?.name}" created successfully!`);
			invalidateTags();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to create tag");
		}
	});
	const updateTagMutation = useMutation({
		mutationFn: async (data) => {
			return await updateTag({ data: {
				...data,
				shopId
			} });
		},
		onSuccess: (result) => {
			toast.success(`Tag "${result.tag?.name}" updated successfully!`);
			invalidateTags();
			if (result.tag?.id) queryClient.invalidateQueries({ queryKey: vendorTagsKeys.detail(shopId, result.tag.id) });
		},
		onError: (error) => {
			toast.error(error.message || "Failed to update tag");
		}
	});
	const deleteTagMutation = useMutation({
		mutationFn: async (tagId) => {
			return await deleteTag({ data: {
				id: tagId,
				shopId
			} });
		},
		onSuccess: () => {
			toast.success("Tag deleted successfully");
			invalidateTags();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to delete tag");
		}
	});
	const mutationState = {
		creatingId: createTagMutation.isPending ? "new" : null,
		deletingId: deleteTagMutation.isPending ? deleteTagMutation.variables ?? null : null,
		updatingId: updateTagMutation.isPending ? updateTagMutation.variables?.id ?? null : null,
		isAnyMutating: createTagMutation.isPending || updateTagMutation.isPending || deleteTagMutation.isPending
	};
	return {
		createTag: createTagMutation.mutateAsync,
		updateTag: updateTagMutation.mutateAsync,
		deleteTag: deleteTagMutation.mutateAsync,
		isCreating: createTagMutation.isPending,
		isUpdating: updateTagMutation.isPending,
		isDeleting: deleteTagMutation.isPending,
		mutationState,
		isTagMutating: (id) => mutationState.deletingId === id || mutationState.updatingId === id
	};
};
var useTags = (shopId) => {
	return {
		tagsQueryOptions: (params) => tagsQueryOptions({
			...params,
			shopId
		}),
		tagByIdQueryOptions: (id) => tagByIdQueryOptions(id, shopId),
		queryKeys: vendorTagsKeys,
		...useTagMutations(shopId)
	};
};
var vendorTaxRatesKeys = {
	all: (shopId) => [
		"vendor",
		"tax-rates",
		shopId
	],
	lists: (shopId) => [...vendorTaxRatesKeys.all(shopId), "list"],
	list: (params) => [...vendorTaxRatesKeys.lists(params.shopId), params],
	details: (shopId) => [...vendorTaxRatesKeys.all(shopId), "detail"],
	detail: (shopId, id) => [...vendorTaxRatesKeys.details(shopId), id]
};
var defaultParams = {
	limit: 10,
	offset: 0,
	sortBy: "priority",
	sortDirection: "asc"
};
var taxRatesQueryOptions = (params) => queryOptions({
	queryKey: vendorTaxRatesKeys.list(params),
	queryFn: () => getTaxRates({ data: {
		...defaultParams,
		...params
	} }),
	enabled: !!params.shopId
});
var taxRateByIdQueryOptions = (id, shopId) => queryOptions({
	queryKey: vendorTaxRatesKeys.detail(shopId, id),
	queryFn: () => getTaxRateById({ data: {
		id,
		shopId
	} }),
	enabled: !!id && !!shopId
});
var useTaxRateMutations = (shopId) => {
	const queryClient = useQueryClient();
	const invalidateTaxRates = () => {
		queryClient.invalidateQueries({ queryKey: vendorTaxRatesKeys.all(shopId) });
	};
	const createTaxRateMutation = useMutation({
		mutationFn: async (data) => {
			return await createTaxRate({ data: {
				...data,
				shopId
			} });
		},
		onSuccess: (result) => {
			toast.success(`Tax rate "${result.taxRate?.name}" created successfully!`);
			invalidateTaxRates();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to create tax rate");
		}
	});
	const updateTaxRateMutation = useMutation({
		mutationFn: async (data) => {
			return await updateTaxRate({ data: {
				...data,
				shopId
			} });
		},
		onSuccess: (result) => {
			toast.success(`Tax rate "${result.taxRate?.name}" updated successfully!`);
			invalidateTaxRates();
			if (result.taxRate?.id) queryClient.invalidateQueries({ queryKey: vendorTaxRatesKeys.detail(shopId, result.taxRate.id) });
		},
		onError: (error) => {
			toast.error(error.message || "Failed to update tax rate");
		}
	});
	const deleteTaxRateMutation = useMutation({
		mutationFn: async (taxRateId) => {
			return await deleteTaxRate({ data: {
				id: taxRateId,
				shopId
			} });
		},
		onSuccess: () => {
			toast.success("Tax rate deleted successfully");
			invalidateTaxRates();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to delete tax rate");
		}
	});
	const toggleTaxRateActiveMutation = useMutation({
		mutationFn: async (taxRateId) => {
			return {
				...await toggleTaxRateActive({ data: {
					id: taxRateId,
					shopId
				} }),
				taxRateId
			};
		},
		onSuccess: (result) => {
			toast.success(result.message || "Tax rate status updated");
			invalidateTaxRates();
			queryClient.invalidateQueries({ queryKey: vendorTaxRatesKeys.detail(shopId, result.taxRateId) });
		},
		onError: (error) => {
			toast.error(error.message || "Failed to update tax rate status");
		}
	});
	const mutationState = {
		creatingId: createTaxRateMutation.isPending ? "new" : null,
		deletingId: deleteTaxRateMutation.isPending ? deleteTaxRateMutation.variables ?? null : null,
		updatingId: updateTaxRateMutation.isPending ? updateTaxRateMutation.variables?.id ?? null : null,
		togglingId: toggleTaxRateActiveMutation.isPending ? toggleTaxRateActiveMutation.variables ?? null : null,
		isAnyMutating: createTaxRateMutation.isPending || updateTaxRateMutation.isPending || deleteTaxRateMutation.isPending || toggleTaxRateActiveMutation.isPending
	};
	return {
		createTaxRate: createTaxRateMutation.mutateAsync,
		updateTaxRate: updateTaxRateMutation.mutateAsync,
		deleteTaxRate: deleteTaxRateMutation.mutateAsync,
		toggleTaxRateActive: toggleTaxRateActiveMutation.mutateAsync,
		isCreating: createTaxRateMutation.isPending,
		isUpdating: updateTaxRateMutation.isPending,
		isDeleting: deleteTaxRateMutation.isPending,
		isToggling: toggleTaxRateActiveMutation.isPending,
		mutationState,
		isTaxRateMutating: (id) => mutationState.deletingId === id || mutationState.updatingId === id || mutationState.togglingId === id
	};
};
var useTaxRates = (shopId) => {
	return {
		taxRatesQueryOptions: (params) => taxRatesQueryOptions({
			...params,
			shopId
		}),
		taxRateByIdQueryOptions: (id) => taxRateByIdQueryOptions(id, shopId),
		queryKeys: vendorTaxRatesKeys,
		...useTaxRateMutations(shopId)
	};
};
/**
* Vendor Reviews Hooks
*
* React Query keys/hooks for vendor review management.
*/
var vendorReviewsKeys = {
	all: ["vendor-reviews"],
	list: (params) => [
		...vendorReviewsKeys.all,
		"list",
		params
	]
};
/**
* Vendor review moderation mutations: approve/reject status and respond.
* Both invalidate the vendor reviews cache on success.
*/
function useVendorReviewMutations() {
	const queryClient = useQueryClient();
	return {
		updateStatus: useMutation({
			mutationFn: async (data) => updateVendorReviewStatus({ data }),
			onSuccess: (result) => {
				toast.success(result.message);
				queryClient.invalidateQueries({ queryKey: vendorReviewsKeys.all });
			},
			onError: (error) => {
				toast.error(error.message || "Failed to update review status");
			}
		}),
		respond: useMutation({
			mutationFn: async (data) => respondToReview({ data }),
			onSuccess: (result) => {
				toast.success(result.message);
				queryClient.invalidateQueries({ queryKey: vendorReviewsKeys.all });
			},
			onError: (error) => {
				toast.error(error.message || "Failed to post response");
			}
		})
	};
}
/**
* Vendor Transactions Hooks
*
* React Query hooks for vendor transaction management.
*/
var vendorTransactionKeys = {
	all: ["vendor-transactions"],
	list: (params) => [
		...vendorTransactionKeys.all,
		"list",
		params
	],
	stats: (shopSlug) => [
		...vendorTransactionKeys.all,
		"stats",
		shopSlug
	]
};
/**
* Hook to fetch vendor transaction stats
*/
function useVendorTransactionStats(shopSlug) {
	return useQuery({
		queryKey: vendorTransactionKeys.stats(shopSlug),
		queryFn: async () => {
			return await getVendorTransactionStats({ data: { shopSlug } });
		}
	});
}
function createVendorCategoriesFetcher(shopId) {
	return {
		fetcher: createServerFetcher({
			fetchFn: async (query) => {
				const response = await getCategories({ data: {
					...query,
					shopId
				} });
				return {
					data: response.data ?? [],
					total: response.total ?? 0
				};
			},
			sortFieldMap: {
				name: "name",
				level: "level",
				createdAt: "createdAt"
			},
			filterFieldMap: {
				isActive: "isActive",
				featured: "featured"
			},
			defaultQuery: {
				sortBy: "sortOrder",
				sortDirection: "asc"
			},
			transformFilters: booleanFilterTransform
		}),
		queryKey: [
			"vendor",
			"categories",
			shopId
		]
	};
}
function createVendorBrandsFetcher(shopId) {
	return {
		fetcher: createServerFetcher({
			fetchFn: async (query) => {
				const response = await getBrands({ data: {
					...query,
					shopId
				} });
				return {
					data: response.data ?? [],
					total: response.total ?? 0
				};
			},
			sortFieldMap: {
				name: "name",
				createdAt: "createdAt"
			},
			filterFieldMap: { isActive: "isActive" },
			defaultQuery: {
				sortBy: "sortOrder",
				sortDirection: "asc"
			},
			transformFilters: booleanFilterTransform
		}),
		queryKey: vendorBrandsKeys.lists(shopId)
	};
}
function createVendorAttributesFetcher(shopId) {
	return {
		fetcher: createServerFetcher({
			fetchFn: async (query) => {
				const response = await getAttributes({ data: {
					...query,
					shopId
				} });
				return {
					data: response.data ?? [],
					total: response.total ?? 0
				};
			},
			sortFieldMap: {
				name: "name",
				createdAt: "createdAt"
			},
			filterFieldMap: {
				isActive: "isActive",
				type: "type"
			},
			defaultQuery: {
				sortBy: "sortOrder",
				sortDirection: "asc"
			},
			transformFilters: booleanFilterTransform
		}),
		queryKey: vendorAttributesKeys.lists(shopId)
	};
}
function createVendorTagsFetcher(shopId) {
	return {
		fetcher: createServerFetcher({
			fetchFn: async (query) => {
				const response = await getTags({ data: {
					...query,
					shopId
				} });
				return {
					data: response.data ?? [],
					total: response.total ?? 0
				};
			},
			sortFieldMap: {
				name: "name",
				createdAt: "createdAt",
				productCount: "productCount"
			},
			filterFieldMap: { isActive: "isActive" },
			defaultQuery: {
				sortBy: "sortOrder",
				sortDirection: "asc"
			},
			transformFilters: booleanFilterTransform
		}),
		queryKey: vendorTagsKeys.lists(shopId)
	};
}
function createVendorTaxRatesFetcher(shopId) {
	return {
		fetcher: createServerFetcher({
			fetchFn: async (query) => {
				const response = await getTaxRates({ data: {
					...query,
					shopId
				} });
				return {
					data: response.data ?? [],
					total: response.total ?? 0
				};
			},
			sortFieldMap: {
				name: "name",
				rate: "rate",
				priority: "priority",
				createdAt: "createdAt"
			},
			filterFieldMap: {
				isActive: "isActive",
				country: "country"
			},
			defaultQuery: {
				sortBy: "priority",
				sortDirection: "asc"
			},
			transformFilters: booleanFilterTransform
		}),
		queryKey: vendorTaxRatesKeys.lists(shopId)
	};
}
function createVendorCouponsFetcher(shopId) {
	return {
		fetcher: createServerFetcher({
			fetchFn: async (query) => {
				const response = await getCoupons({ data: {
					...query,
					shopId
				} });
				return {
					data: response.data ?? [],
					total: response.total ?? 0
				};
			},
			sortFieldMap: {
				code: "code",
				discountAmount: "discountAmount",
				usageCount: "usageCount",
				activeFrom: "activeFrom",
				activeTo: "activeTo",
				createdAt: "createdAt"
			},
			filterFieldMap: {
				isActive: "isActive",
				type: "type",
				status: "status",
				applicableTo: "applicableTo"
			},
			defaultQuery: {
				sortBy: "createdAt",
				sortDirection: "desc"
			},
			transformFilters: booleanFilterTransform
		}),
		queryKey: vendorCouponsKeys.lists(shopId)
	};
}
function createVendorProductsFetcher(shopId) {
	return {
		fetcher: createServerFetcher({
			fetchFn: async (query) => {
				const response = await getProducts({ data: {
					...query,
					shopId
				} });
				return {
					data: response.data ?? [],
					total: response.total ?? 0
				};
			},
			sortFieldMap: {
				name: "name",
				sellingPrice: "sellingPrice",
				stock: "stock",
				createdAt: "createdAt"
			},
			filterFieldMap: {
				isActive: "isActive",
				status: "status",
				categoryId: "categoryId",
				brandId: "brandId"
			},
			defaultQuery: {
				sortBy: "createdAt",
				sortDirection: "desc"
			},
			transformFilters: booleanFilterTransform
		}),
		queryKey: [...vendorProductsKeys.lists(), shopId]
	};
}
function createVendorShippingFetcher(shopId) {
	return {
		fetcher: createServerFetcher({
			fetchFn: async (query) => {
				const response = await getShippingMethods({ data: {
					...query,
					shopId
				} });
				return {
					data: response.data ?? [],
					total: response.total ?? 0
				};
			},
			sortFieldMap: {
				name: "name",
				price: "price",
				createdAt: "createdAt"
			},
			filterFieldMap: { isActive: "isActive" },
			defaultQuery: {
				sortBy: "createdAt",
				sortDirection: "desc"
			},
			transformFilters: booleanFilterTransform
		}),
		queryKey: vendorShippingKeys.lists(shopId)
	};
}
function createVendorTransactionsFetcher(shopSlug) {
	return {
		fetcher: createServerFetcher({
			fetchFn: async (query) => {
				const response = await getVendorTransactions({ data: {
					...query,
					shopSlug
				} });
				return {
					data: response.transactions ?? [],
					total: response.total ?? 0
				};
			},
			sortFieldMap: {
				createdAt: "createdAt",
				totalAmount: "totalAmount"
			},
			filterFieldMap: { status: "status" },
			defaultQuery: {
				sortBy: "createdAt",
				sortDirection: "desc"
			}
		}),
		queryKey: vendorTransactionKeys.list({ shopSlug })
	};
}
function createVendorOrdersFetcher(shopSlug) {
	return {
		fetcher: createServerFetcher({
			fetchFn: async (query) => {
				const response = await getVendorOrders({ data: {
					...query,
					shopSlug
				} });
				return {
					data: response.orders ?? [],
					total: response.total ?? 0
				};
			},
			sortFieldMap: {
				createdAt: "createdAt",
				orderNumber: "orderNumber"
			},
			filterFieldMap: { status: "status" },
			defaultQuery: {
				sortBy: "createdAt",
				sortDirection: "desc"
			}
		}),
		queryKey: vendorOrderKeys.list({ shopSlug })
	};
}
function createVendorReviewsFetcher(shopSlug) {
	return {
		fetcher: createServerFetcher({
			fetchFn: async (query) => {
				const response = await getVendorReviews({ data: {
					...query,
					shopSlug
				} });
				return {
					data: response.data ?? [],
					total: response.total ?? 0
				};
			},
			sortFieldMap: {
				createdAt: "createdAt",
				rating: "rating"
			},
			filterFieldMap: {
				status: "status",
				rating: "rating",
				productId: "productId"
			},
			defaultQuery: {
				sortBy: "createdAt",
				sortDirection: "desc"
			}
		}),
		queryKey: vendorReviewsKeys.list({ shopSlug })
	};
}
//#endregion
export { useVendorTransactionStats as A, useBrands as C, useTags as D, useShipping as E, useTaxRates as O, useAttributes as S, useProducts as T, getCategoryById as _, createVendorBrandsFetcher as a, taxRatesQueryOptions as b, createVendorOrdersFetcher as c, createVendorShippingFetcher as d, createVendorTagsFetcher as f, getCategories as g, deleteCategory as h, createVendorAttributesFetcher as i, useVendorReviewMutations as k, createVendorProductsFetcher as l, createVendorTransactionsFetcher as m, brandsQueryOptions as n, createVendorCategoriesFetcher as o, createVendorTaxRatesFetcher as p, createCategory as r, createVendorCouponsFetcher as s, attributesQueryOptions as t, createVendorReviewsFetcher as u, shippingMethodsQueryOptions as v, useCoupons as w, updateCategory as x, tagsQueryOptions as y };
