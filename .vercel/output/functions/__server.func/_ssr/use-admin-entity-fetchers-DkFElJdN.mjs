import { Gt as string, Ht as object, Mt as _enum, Vt as number } from "../_libs/@better-auth/core+[...].mjs";
import { r as createServerFn } from "./ssr.mjs";
import { t as createSsrRpc } from "./createSsrRpc-CXFXGZZ3.mjs";
import { c as useQueryClient, i as queryOptions, n as useMutation, o as useQuery } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as getProductByIdSchema, f as updateProductStatusSchema, r as deleteProductSchema, t as adminProductsQuerySchema, u as toggleProductFeaturedSchema } from "./product-query-DTSuSPZY.mjs";
import { t as adminMiddleware } from "./admin-CYCFP3zk.mjs";
import { n as getAdminOrders, t as adminOrderKeys } from "./use-admin-orders-ebDgXDm5.mjs";
import { c as toggleCategoryFeaturedSchema, i as getCategoryByIdSchema, r as deleteCategorySchema, s as toggleCategoryActiveSchema, t as adminCategoriesQuerySchema } from "./category-query-C0zo9q64.mjs";
import { n as getAdminShops, t as adminShopsKeys } from "./use-admin-shops-ClDB9K08.mjs";
import { a as getAttributeByIdSchema, i as deleteAttributeSchema, o as toggleAttributeActiveSchema, s as updateAdminAttributeSchema, t as adminAttributesQuerySchema } from "./attribute-query-C2g1jHby.mjs";
import { i as getBrandByIdSchema, r as deleteBrandSchema, s as toggleBrandActiveSchema, t as adminBrandsQuerySchema } from "./brand-query-w-wFF7Pb.mjs";
import { i as deleteCouponSchema, l as toggleCouponActiveSchema, s as getCouponByIdSchema, t as adminCouponsQuerySchema } from "./coupon-query-CudBYs7G.mjs";
import { a as toggleTagActiveSchema, i as getTagByIdSchema, r as deleteTagSchema, t as adminTagsQuerySchema } from "./tag-query-B-OjxzSS.mjs";
import { a as toggleTaxRateActiveSchema, i as getTaxRateByIdSchema, r as deleteTaxRateSchema, t as adminTaxRatesQuerySchema } from "./tax-rate-query-BZqT2dMh.mjs";
import { n as createServerFetcher, t as booleanFilterTransform } from "./create-server-fetcher-Cvil3itN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-admin-entity-fetchers-DkFElJdN.js
/**
* Admin Attribute Server Functions
*
* Server functions for attribute management in the admin dashboard.
* Admins can view and manage ALL attributes across all vendors and shops.
*/
var getAdminAttributes = createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(adminAttributesQuerySchema).handler(createSsrRpc("571870e3d5d8477b74ba42c576a28d51cfe4e4d7759cb3868427fd4bc82b7dbd"));
var getAdminAttributeById = createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(getAttributeByIdSchema).handler(createSsrRpc("544f16e66abb7a47003bf4c854e72313242077b40715b8539d0fb0b0f08cb280"));
var toggleAdminAttributeActive = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(toggleAttributeActiveSchema).handler(createSsrRpc("ec7b6c3c79e96f4d3321bc1acce31cba64d7176e198918ce605cd28d7b6fcf79"));
var updateAdminAttribute = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(updateAdminAttributeSchema).handler(createSsrRpc("35d0f1270c5ee22fe116ff235f010577a00f94bfc19efcf41549615970b6e3e2"));
var deleteAdminAttribute = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(deleteAttributeSchema).handler(createSsrRpc("63803ef7efa2f99c78b773410fa89ea2061d9df386dd218de489424748137093"));
/**
* Admin Attributes Hook
*
* React Query hooks for admin attribute management.
* Provides query options and mutations for admin-level attribute operations.
* Supports React Query Suspense for SSR integration.
*/
var adminAttributesKeys = {
	all: ["admin", "attributes"],
	lists: () => [...adminAttributesKeys.all, "list"],
	list: (params) => [...adminAttributesKeys.lists(), params],
	details: () => [...adminAttributesKeys.all, "detail"],
	detail: (id) => [...adminAttributesKeys.details(), id]
};
var defaultParams$6 = {
	limit: 10,
	offset: 0,
	sortBy: "sortOrder",
	sortDirection: "asc"
};
/**
* Query options for fetching admin attributes with pagination and filters
* Compatible with both useQuery and useSuspenseQuery
*/
var adminAttributesQueryOptions = (params = {}) => {
	const mergedParams = {
		...defaultParams$6,
		...params
	};
	return queryOptions({
		queryKey: adminAttributesKeys.list(mergedParams),
		queryFn: () => getAdminAttributes({ data: mergedParams }),
		staleTime: 30 * 1e3
	});
};
/**
* Query options for fetching a single attribute by ID (admin)
* Compatible with both useQuery and useSuspenseQuery
*/
var adminAttributeByIdQueryOptions = (id) => queryOptions({
	queryKey: adminAttributesKeys.detail(id),
	queryFn: () => getAdminAttributeById({ data: { id } }),
	enabled: !!id,
	staleTime: 60 * 1e3
});
/**
* Hook providing mutations for admin attribute management
* Includes granular loading states for individual operations
*/
var useAdminAttributeMutations = () => {
	const queryClient = useQueryClient();
	const invalidateAttributes = () => {
		queryClient.invalidateQueries({ queryKey: adminAttributesKeys.all });
	};
	const toggleActiveMutation = useMutation({
		mutationFn: async ({ id, isActive }) => toggleAdminAttributeActive({ data: {
			id,
			isActive
		} }),
		onMutate: async ({ id, isActive }) => {
			await queryClient.cancelQueries({ queryKey: adminAttributesKeys.all });
			return {
				id,
				isActive
			};
		},
		onSuccess: (result) => {
			toast.success(result.message || "Attribute status updated");
			invalidateAttributes();
		},
		onError: (error, _variables, context) => {
			toast.error(error.message || "Failed to update attribute status");
			if (context) invalidateAttributes();
		}
	});
	const deleteAttributeMutation = useMutation({
		mutationFn: (id) => deleteAdminAttribute({ data: { id } }),
		onSuccess: () => {
			toast.success("Attribute deleted successfully");
			invalidateAttributes();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to delete attribute");
		}
	});
	const updateAttributeMutation = useMutation({
		mutationFn: (data) => updateAdminAttribute({ data }),
		onSuccess: (result) => {
			toast.success(result.message || "Attribute updated successfully");
			invalidateAttributes();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to update attribute");
		}
	});
	const mutationState = {
		togglingId: toggleActiveMutation.isPending ? toggleActiveMutation.variables?.id ?? null : null,
		deletingId: deleteAttributeMutation.isPending ? deleteAttributeMutation.variables ?? null : null,
		updatingId: updateAttributeMutation.isPending ? updateAttributeMutation.variables?.id ?? null : null,
		isAnyMutating: toggleActiveMutation.isPending || deleteAttributeMutation.isPending || updateAttributeMutation.isPending
	};
	return {
		toggleActive: toggleActiveMutation.mutateAsync,
		deleteAttribute: deleteAttributeMutation.mutateAsync,
		updateAttribute: updateAttributeMutation.mutateAsync,
		isTogglingActive: toggleActiveMutation.isPending,
		isDeleting: deleteAttributeMutation.isPending,
		isUpdating: updateAttributeMutation.isPending,
		mutationState,
		isAttributeMutating: (id) => mutationState.togglingId === id || mutationState.deletingId === id || mutationState.updatingId === id
	};
};
/**
* Combined hook for admin attribute management
*/
var useAdminAttributes = () => {
	return {
		adminAttributesQueryOptions,
		adminAttributeByIdQueryOptions,
		queryKeys: adminAttributesKeys,
		...useAdminAttributeMutations()
	};
};
/**
* Admin Brand Server Functions
*
* Server functions for brand management in the admin dashboard.
* Admins can view and manage ALL brands across all vendors and shops.
*/
/**
* Get all brands with optional filtering by shop/vendor
* Admins can see all brands across all vendors
*/
var getAdminBrands = createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(adminBrandsQuerySchema).handler(createSsrRpc("7e36a167532c758f1599c786fb3c1d77b7471c6b1720454ec1acc672eeac6821"));
/**
* Get a single brand by ID (admin can view any brand)
*/
var getAdminBrandById = createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(getBrandByIdSchema).handler(createSsrRpc("0f65d61ef60c80e6adbbd26ad61a5f636d98e179b409f4bd704aad1c6a7eb6ac"));
/**
* Toggle brand active status
*/
var toggleAdminBrandActive = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(toggleBrandActiveSchema).handler(createSsrRpc("20dc87ef7a85ac89daa1f0a41f4ee6be3a555b247a3191b7892f7e3aa546850b"));
/**
* Delete a brand (admin can delete any brand)
*/
var deleteAdminBrand = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(deleteBrandSchema).handler(createSsrRpc("7272428238f6e2b9c516e661169e039491663c2d0552047b60dff58f04080130"));
/**
* Admin Category Server Functions
*
* Server functions for category management in the admin dashboard.
* Admins can view and manage ALL categories across all vendors and shops.
*/
/**
* Get all categories with optional filtering by shop/vendor
* Admins can see all categories across all vendors
*/
var getAdminCategories = createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(adminCategoriesQuerySchema).handler(createSsrRpc("4a996a56854488ac0707d39ffca766fef984da97f3973cb6ab3ae1da2106ecb6"));
/**
* Get a single category by ID (admin can view any category)
*/
var getAdminCategoryById = createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(getCategoryByIdSchema).handler(createSsrRpc("4482b03b70fbed4c8287fb29e75b93068a87c0ea450fc2d1bc3d8d4a760c2bec"));
/**
* Toggle category active status
*/
var toggleAdminCategoryActive = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(toggleCategoryActiveSchema).handler(createSsrRpc("5343743de31ef139c2de66fe140049480d4466a0f173c4a57bc4f513483fa851"));
/**
* Toggle category featured status
*/
var toggleAdminCategoryFeatured = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(toggleCategoryFeaturedSchema).handler(createSsrRpc("621e2ccced018a42e08209dee427b1ec8fded6fb5228eb63de05265ed8cf3699"));
/**
* Delete a category (admin can delete any category)
*/
var deleteAdminCategory = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(deleteCategorySchema).handler(createSsrRpc("f28d4e33f8ffbbdab91f906075db41272bfcbfcec6c064b870082fcb12a7db8a"));
/**
* Admin Coupon Server Functions
*
* Server functions for coupon management in the admin dashboard.
* Admins can view and manage ALL coupons across all vendors and shops.
*/
/**
* Get all coupons with optional filtering by shop/vendor
* Admins can see all coupons across all vendors
*/
var getAdminCoupons = createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(adminCouponsQuerySchema).handler(createSsrRpc("569f5726728bc21c844611c73e4b004d0743a5bfff6f50ceae4644608a20939e"));
/**
* Get a single coupon by ID (admin can view any coupon)
*/
var getAdminCouponById = createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(getCouponByIdSchema).handler(createSsrRpc("74d66f188050ba1abf820ca788531adb49f36cfea27a8eaac9f26f075b041e43"));
/**
* Toggle coupon active status
*/
var toggleAdminCouponActive = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(toggleCouponActiveSchema).handler(createSsrRpc("dbdc9b28a99030c7c739e5c8115679e15f4cb423cb249c00a84bbc5c03b64f99"));
/**
* Delete a coupon (admin can delete any coupon)
*/
var deleteAdminCoupon = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(deleteCouponSchema).handler(createSsrRpc("5910becd58485153b5fa191aa2a237dbc4eeeac8f0781da04dbd6aea2f0b45c8"));
/**
* Admin Product Server Functions
*
* Server functions for product management in the admin dashboard.
* Admins can view and manage ALL products across all vendors and shops.
*/
/**
* Get all products with optional filtering by shop/vendor
* Admins can see all products across all vendors
*/
var getAdminProducts = createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(adminProductsQuerySchema).handler(createSsrRpc("8af94af91125a164f8bed6119e055a3ef1843df13819bbc13ad5fc9668f76403"));
/**
* Get a single product by ID (admin can view any product)
*/
var getAdminProductById = createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(getProductByIdSchema).handler(createSsrRpc("9b9b9b283af1c2395e86a563f92f20ae7599380fa78e37b2befc68574e7f1c81"));
/**
* Update product status (approve, archive, etc.)
*/
var updateAdminProductStatus = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(updateProductStatusSchema).handler(createSsrRpc("eb1ac3da5be0f3ea1ef0552fb7806959507cb9af53d1f69854a785a38988845f"));
/**
* Toggle product featured status
*/
var toggleAdminProductFeatured = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(toggleProductFeaturedSchema).handler(createSsrRpc("1b0c2c58b08ea7d1eba58eb10b22fad4f5005bd1e08ef85131c1b334a2fa62ea"));
/**
* Delete a product (admin can delete any product)
*/
var deleteAdminProduct = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(deleteProductSchema).handler(createSsrRpc("3bf0df45035a11781010001bf3077fac85a87a3a1adbf671de6c774156b07be6"));
/**
* Admin Tag Server Functions
*
* Server functions for tag management in the admin dashboard.
* Admins can view and manage ALL tags across all vendors and shops.
*/
/**
* Get all tags with optional filtering by shop/vendor
* Admins can see all tags across all vendors
*/
var getAdminTags = createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(adminTagsQuerySchema).handler(createSsrRpc("f13d708f47c4bcd371dc7e84d9f3ca4c41da49ab6bea71aec8906008a26bd74f"));
/**
* Get a single tag by ID (admin can view any tag)
*/
var getAdminTagById = createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(getTagByIdSchema).handler(createSsrRpc("f78fa2f90c9646720f3104ea7a657cb22a9636bdabe399f56085d6380740f3ea"));
/**
* Toggle tag active status
*/
var toggleAdminTagActive = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(toggleTagActiveSchema).handler(createSsrRpc("6ac389aea3648e98926f5c381ec85975e93ba796be8a3a9af6e2c1e3240f296e"));
/**
* Delete a tag (admin can delete any tag)
*/
var deleteAdminTag = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(deleteTagSchema).handler(createSsrRpc("15e45ad8a73a280d6e77def1d9d6a5a43ffb9dd833b4f6ffe9a5295fa1cd0884"));
/**
* Admin Tax Rate Server Functions
*
* Server functions for tax rate management in the admin dashboard.
* Admins can view and manage ALL tax rates across all vendors and shops.
*/
/**
* Get all tax rates with optional filtering by shop/vendor
* Admins can see all tax rates across all vendors
*/
var getAdminTaxRates = createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(adminTaxRatesQuerySchema).handler(createSsrRpc("f9b4aa597073222881ec9dcfc9f5a5fe0c77d7f3b36be8e017c62f7992e153d2"));
/**
* Get a single tax rate by ID (admin can view any tax rate)
*/
var getAdminTaxRateById = createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(getTaxRateByIdSchema).handler(createSsrRpc("86196c83edf0bc205d26ccc17399255593b5c74428c2675543e39a6a32c926b3"));
/**
* Toggle tax rate active status
*/
var toggleAdminTaxRateActive = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(toggleTaxRateActiveSchema).handler(createSsrRpc("b09a69df13bcfa8fad8e6db12be1d0a85cfa73b29c2f350b66421d01d1b91f74"));
/**
* Delete a tax rate (admin can delete any tax rate)
*/
var deleteAdminTaxRate = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(deleteTaxRateSchema).handler(createSsrRpc("a2c58aaaac113054645de0ae0255757cfcb3354b2cd14f1c041615b10f333f45"));
/**
* Admin Transaction Server Functions
*
* Server functions for admin transaction/payment management.
* Provides platform-wide view of all financial transactions.
*/
var getAdminTransactionsSchema = object({
	limit: number().min(1).max(100).optional().default(50),
	offset: number().min(0).optional().default(0),
	status: _enum([
		"pending",
		"processing",
		"succeeded",
		"failed",
		"refunded"
	]).optional(),
	shopId: string().optional(),
	vendorId: string().optional()
});
var getAdminTransactions = createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(getAdminTransactionsSchema).handler(createSsrRpc("809b3dd5d0ad5dd1f952187f8e7ffc123ff2a73600bb5508d4b0af315fc85c12"));
var getAdminTransactionStats = createServerFn({ method: "GET" }).middleware([adminMiddleware]).handler(createSsrRpc("2c2c619106088cb82b1227f8ff6b7b35c224b298c04e698b5e80f27c6174c0da"));
/**
* Admin Brands Hook
*
* React Query hooks for admin brand management.
* Provides query options and mutations for admin-level brand operations.
*/
var adminBrandsKeys = {
	all: ["admin", "brands"],
	lists: () => [...adminBrandsKeys.all, "list"],
	list: (params) => [...adminBrandsKeys.lists(), params],
	details: () => [...adminBrandsKeys.all, "detail"],
	detail: (id) => [...adminBrandsKeys.details(), id]
};
var defaultParams$5 = {
	limit: 10,
	offset: 0,
	sortBy: "sortOrder",
	sortDirection: "asc"
};
/**
* Query options for fetching admin brands with pagination and filters
*/
var adminBrandsQueryOptions = (params = {}) => {
	const mergedParams = {
		...defaultParams$5,
		...params
	};
	return queryOptions({
		queryKey: adminBrandsKeys.list(mergedParams),
		queryFn: () => getAdminBrands({ data: mergedParams })
	});
};
/**
* Query options for fetching a single brand by ID (admin)
*/
var adminBrandByIdQueryOptions = (id) => queryOptions({
	queryKey: adminBrandsKeys.detail(id),
	queryFn: () => getAdminBrandById({ data: { id } }),
	enabled: !!id
});
/**
* Hook providing mutations for admin brand management
*/
var useAdminBrandMutations = () => {
	const queryClient = useQueryClient();
	const invalidateBrands = () => {
		queryClient.invalidateQueries({ queryKey: adminBrandsKeys.all });
	};
	const toggleActiveMutation = useMutation({
		mutationFn: async ({ id, isActive }) => toggleAdminBrandActive({ data: {
			id,
			isActive
		} }),
		onSuccess: (result) => {
			toast.success(result.message || "Brand status updated");
			invalidateBrands();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to update brand status");
		}
	});
	const deleteBrandMutation = useMutation({
		mutationFn: (id) => deleteAdminBrand({ data: { id } }),
		onSuccess: () => {
			toast.success("Brand deleted successfully");
			invalidateBrands();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to delete brand");
		}
	});
	const mutationState = {
		deletingId: deleteBrandMutation.isPending ? deleteBrandMutation.variables ?? null : null,
		togglingId: toggleActiveMutation.isPending ? toggleActiveMutation.variables?.id ?? null : null,
		isAnyMutating: toggleActiveMutation.isPending || deleteBrandMutation.isPending
	};
	return {
		toggleActive: toggleActiveMutation.mutateAsync,
		deleteBrand: deleteBrandMutation.mutateAsync,
		isTogglingActive: toggleActiveMutation.isPending,
		isDeleting: deleteBrandMutation.isPending,
		mutationState,
		isBrandMutating: (id) => mutationState.deletingId === id || mutationState.togglingId === id
	};
};
/**
* Combined hook for admin brand management
*/
var useAdminBrands = () => {
	return {
		adminBrandsQueryOptions,
		adminBrandByIdQueryOptions,
		adminBrandsKeys,
		...useAdminBrandMutations()
	};
};
/**
* Admin Categories Hook
*
* React Query hooks for admin category management.
* Provides query options and mutations for admin-level category operations.
*/
var adminCategoriesKeys = {
	all: ["admin", "categories"],
	lists: () => [...adminCategoriesKeys.all, "list"],
	list: (params) => [...adminCategoriesKeys.lists(), params],
	details: () => [...adminCategoriesKeys.all, "detail"],
	detail: (id) => [...adminCategoriesKeys.details(), id]
};
var defaultParams$4 = {
	limit: 10,
	offset: 0,
	sortBy: "sortOrder",
	sortDirection: "asc"
};
/**
* Query options for fetching admin categories with pagination and filters
*/
var adminCategoriesQueryOptions = (params = {}) => {
	const mergedParams = {
		...defaultParams$4,
		...params
	};
	return queryOptions({
		queryKey: adminCategoriesKeys.list(mergedParams),
		queryFn: () => getAdminCategories({ data: mergedParams })
	});
};
/**
* Query options for fetching a single category by ID (admin)
*/
var adminCategoryByIdQueryOptions = (id) => queryOptions({
	queryKey: adminCategoriesKeys.detail(id),
	queryFn: () => getAdminCategoryById({ data: { id } }),
	enabled: !!id
});
/**
* Hook providing mutations for admin category management
*/
var useAdminCategoryMutations = () => {
	const queryClient = useQueryClient();
	const invalidateCategories = () => {
		queryClient.invalidateQueries({ queryKey: adminCategoriesKeys.all });
	};
	const toggleActiveMutation = useMutation({
		mutationFn: async ({ id, isActive }) => toggleAdminCategoryActive({ data: {
			id,
			isActive
		} }),
		onSuccess: (result) => {
			toast.success(result.message || "Category status updated");
			invalidateCategories();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to update category status");
		}
	});
	const toggleFeaturedMutation = useMutation({
		mutationFn: async ({ id, featured }) => toggleAdminCategoryFeatured({ data: {
			id,
			featured
		} }),
		onSuccess: (result) => {
			toast.success(result.message || "Category featured status updated");
			invalidateCategories();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to update featured status");
		}
	});
	const deleteCategoryMutation = useMutation({
		mutationFn: (id) => deleteAdminCategory({ data: { id } }),
		onSuccess: () => {
			toast.success("Category deleted successfully");
			invalidateCategories();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to delete category");
		}
	});
	const mutationState = {
		deletingId: deleteCategoryMutation.isPending ? deleteCategoryMutation.variables : null,
		togglingId: toggleActiveMutation.isPending || toggleFeaturedMutation.isPending ? toggleActiveMutation.variables?.id || toggleFeaturedMutation.variables?.id : null,
		isAnyMutating: deleteCategoryMutation.isPending || toggleActiveMutation.isPending || toggleFeaturedMutation.isPending
	};
	return {
		toggleActive: toggleActiveMutation.mutateAsync,
		toggleFeatured: toggleFeaturedMutation.mutateAsync,
		deleteCategory: deleteCategoryMutation.mutateAsync,
		isTogglingActive: toggleActiveMutation.isPending,
		isTogglingFeatured: toggleFeaturedMutation.isPending,
		isDeleting: deleteCategoryMutation.isPending,
		mutationState,
		isCategoryMutating: (id) => mutationState.deletingId === id || mutationState.togglingId === id
	};
};
/**
* Combined hook for admin category management
*/
var useAdminCategories = () => {
	return {
		adminCategoriesQueryOptions,
		adminCategoryByIdQueryOptions,
		...useAdminCategoryMutations()
	};
};
/**
* Admin Coupons Hook
*
* React Query hooks for admin coupon management.
* Provides query options and mutations for admin-level coupon operations.
*/
var adminCouponsKeys = {
	all: ["admin", "coupons"],
	lists: () => [...adminCouponsKeys.all, "list"],
	list: (params) => [...adminCouponsKeys.lists(), params],
	details: () => [...adminCouponsKeys.all, "detail"],
	detail: (id) => [...adminCouponsKeys.details(), id]
};
var defaultParams$3 = {
	limit: 10,
	offset: 0,
	sortBy: "createdAt",
	sortDirection: "desc"
};
/**
* Query options for fetching admin coupons with pagination and filters
*/
var adminCouponsQueryOptions = (params = {}) => {
	const mergedParams = {
		...defaultParams$3,
		...params
	};
	return queryOptions({
		queryKey: adminCouponsKeys.list(mergedParams),
		queryFn: () => getAdminCoupons({ data: mergedParams })
	});
};
/**
* Query options for fetching a single coupon by ID (admin)
*/
var adminCouponByIdQueryOptions = (id) => queryOptions({
	queryKey: adminCouponsKeys.detail(id),
	queryFn: () => getAdminCouponById({ data: { id } }),
	enabled: !!id
});
/**
* Hook providing mutations for admin coupon management
*/
var useAdminCouponMutations = () => {
	const queryClient = useQueryClient();
	const invalidateCoupons = () => {
		queryClient.invalidateQueries({ queryKey: adminCouponsKeys.all });
	};
	const toggleActiveMutation = useMutation({
		mutationFn: async ({ id, isActive }) => toggleAdminCouponActive({ data: {
			id,
			isActive
		} }),
		onSuccess: (result) => {
			toast.success(result.message || "Coupon status updated");
			invalidateCoupons();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to update coupon status");
		}
	});
	const deleteCouponMutation = useMutation({
		mutationFn: (id) => deleteAdminCoupon({ data: { id } }),
		onSuccess: () => {
			toast.success("Coupon deleted successfully");
			invalidateCoupons();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to delete coupon");
		}
	});
	const mutationState = {
		deletingId: deleteCouponMutation.isPending ? deleteCouponMutation.variables : null,
		togglingId: toggleActiveMutation.isPending ? toggleActiveMutation.variables?.id : null,
		isAnyMutating: deleteCouponMutation.isPending || toggleActiveMutation.isPending
	};
	return {
		toggleActive: toggleActiveMutation.mutateAsync,
		deleteCoupon: deleteCouponMutation.mutateAsync,
		isTogglingActive: toggleActiveMutation.isPending,
		isDeleting: deleteCouponMutation.isPending,
		mutationState,
		isCouponMutating: (id) => mutationState.deletingId === id || mutationState.togglingId === id
	};
};
/**
* Combined hook for admin coupon management
*/
var useAdminCoupons = () => {
	return {
		adminCouponsQueryOptions,
		adminCouponByIdQueryOptions,
		...useAdminCouponMutations()
	};
};
/**
* Admin Products Hook
*
* React Query hooks for admin product management.
* Provides query options and mutations for admin-level product operations.
*/
var adminProductsKeys = {
	all: ["admin", "products"],
	lists: () => [...adminProductsKeys.all, "list"],
	list: (params) => [...adminProductsKeys.lists(), params],
	details: () => [...adminProductsKeys.all, "detail"],
	detail: (id) => [...adminProductsKeys.details(), id]
};
var defaultParams$2 = {
	limit: 10,
	offset: 0,
	sortBy: "createdAt",
	sortDirection: "desc"
};
/**
* Query options for fetching admin products with pagination and filters
*/
var adminProductsQueryOptions = (params = {}) => {
	const mergedParams = {
		...defaultParams$2,
		...params
	};
	return queryOptions({
		queryKey: adminProductsKeys.list(mergedParams),
		queryFn: () => getAdminProducts({ data: mergedParams })
	});
};
/**
* Query options for fetching a single product by ID (admin)
*/
var adminProductByIdQueryOptions = (id) => queryOptions({
	queryKey: adminProductsKeys.detail(id),
	queryFn: () => getAdminProductById({ data: { id } }),
	enabled: !!id
});
/**
* Hook providing mutations for admin product management
*/
var useAdminProductMutations = () => {
	const queryClient = useQueryClient();
	const invalidateProducts = () => {
		queryClient.invalidateQueries({ queryKey: adminProductsKeys.all });
	};
	const updateStatusMutation = useMutation({
		mutationFn: async ({ id, status }) => updateAdminProductStatus({ data: {
			id,
			status
		} }),
		onSuccess: (result) => {
			toast.success(result.message || "Product status updated");
			invalidateProducts();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to update product status");
		}
	});
	const toggleFeaturedMutation = useMutation({
		mutationFn: async ({ id, isFeatured }) => toggleAdminProductFeatured({ data: {
			id,
			isFeatured
		} }),
		onSuccess: (result) => {
			toast.success(result.message || "Product featured status updated");
			invalidateProducts();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to update featured status");
		}
	});
	const deleteProductMutation = useMutation({
		mutationFn: (id) => deleteAdminProduct({ data: { id } }),
		onSuccess: () => {
			toast.success("Product deleted successfully");
			invalidateProducts();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to delete product");
		}
	});
	const mutationState = {
		deletingId: deleteProductMutation.isPending ? deleteProductMutation.variables : null,
		updatingId: updateStatusMutation.isPending ? updateStatusMutation.variables?.id : null,
		togglingId: toggleFeaturedMutation.isPending ? toggleFeaturedMutation.variables?.id : null,
		isAnyMutating: deleteProductMutation.isPending || updateStatusMutation.isPending || toggleFeaturedMutation.isPending
	};
	return {
		updateStatus: updateStatusMutation.mutateAsync,
		toggleFeatured: toggleFeaturedMutation.mutateAsync,
		deleteProduct: deleteProductMutation.mutateAsync,
		isUpdatingStatus: updateStatusMutation.isPending,
		isTogglingFeatured: toggleFeaturedMutation.isPending,
		isDeleting: deleteProductMutation.isPending,
		mutationState,
		isProductMutating: (id) => mutationState.deletingId === id || mutationState.updatingId === id || mutationState.togglingId === id
	};
};
/**
* Combined hook for admin product management
*/
var useAdminProducts = () => {
	return {
		adminProductsQueryOptions,
		adminProductByIdQueryOptions,
		...useAdminProductMutations()
	};
};
/**
* Admin Tags Hook
*
* React Query hooks for admin tag management.
* Provides query options and mutations for admin-level tag operations.
*/
var adminTagsKeys = {
	all: ["admin", "tags"],
	lists: () => [...adminTagsKeys.all, "list"],
	list: (params) => [...adminTagsKeys.lists(), params],
	details: () => [...adminTagsKeys.all, "detail"],
	detail: (id) => [...adminTagsKeys.details(), id]
};
var defaultParams$1 = {
	limit: 10,
	offset: 0,
	sortBy: "sortOrder",
	sortDirection: "asc"
};
/**
* Query options for fetching admin tags with pagination and filters
*/
var adminTagsQueryOptions = (params = {}) => {
	const mergedParams = {
		...defaultParams$1,
		...params
	};
	return queryOptions({
		queryKey: adminTagsKeys.list(mergedParams),
		queryFn: () => getAdminTags({ data: mergedParams })
	});
};
/**
* Query options for fetching a single tag by ID (admin)
*/
var adminTagByIdQueryOptions = (id) => queryOptions({
	queryKey: adminTagsKeys.detail(id),
	queryFn: () => getAdminTagById({ data: { id } }),
	enabled: !!id
});
/**
* Hook providing mutations for admin tag management
*/
var useAdminTagMutations = () => {
	const queryClient = useQueryClient();
	const invalidateTags = () => {
		queryClient.invalidateQueries({ queryKey: adminTagsKeys.all });
	};
	const toggleActiveMutation = useMutation({
		mutationFn: async ({ id, isActive }) => toggleAdminTagActive({ data: {
			id,
			isActive
		} }),
		onSuccess: (result) => {
			toast.success(result.message || "Tag status updated");
			invalidateTags();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to update tag status");
		}
	});
	const deleteTagMutation = useMutation({
		mutationFn: (id) => deleteAdminTag({ data: { id } }),
		onSuccess: () => {
			toast.success("Tag deleted successfully");
			invalidateTags();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to delete tag");
		}
	});
	const mutationState = {
		deletingId: deleteTagMutation.isPending ? deleteTagMutation.variables ?? null : null,
		togglingId: toggleActiveMutation.isPending ? toggleActiveMutation.variables?.id ?? null : null,
		isAnyMutating: toggleActiveMutation.isPending || deleteTagMutation.isPending
	};
	return {
		toggleActive: toggleActiveMutation.mutateAsync,
		deleteTag: deleteTagMutation.mutateAsync,
		isTogglingActive: toggleActiveMutation.isPending,
		isDeleting: deleteTagMutation.isPending,
		mutationState,
		isTagMutating: (id) => mutationState.deletingId === id || mutationState.togglingId === id
	};
};
/**
* Combined hook for admin tag management
*/
var useAdminTags = () => {
	return {
		adminTagsQueryOptions,
		adminTagByIdQueryOptions,
		...useAdminTagMutations()
	};
};
/**
* Admin Tax Rates Hook
*
* React Query hooks for admin tax rate management.
* Provides query options and mutations for admin-level tax rate operations.
*/
var adminTaxRatesKeys = {
	all: ["admin", "taxRates"],
	lists: () => [...adminTaxRatesKeys.all, "list"],
	list: (params) => [...adminTaxRatesKeys.lists(), params],
	details: () => [...adminTaxRatesKeys.all, "detail"],
	detail: (id) => [...adminTaxRatesKeys.details(), id]
};
var defaultParams = {
	limit: 10,
	offset: 0,
	sortBy: "priority",
	sortDirection: "asc"
};
/**
* Query options for fetching admin tax rates with pagination and filters
*/
var adminTaxRatesQueryOptions = (params = {}) => {
	const mergedParams = {
		...defaultParams,
		...params
	};
	return queryOptions({
		queryKey: adminTaxRatesKeys.list(mergedParams),
		queryFn: () => getAdminTaxRates({ data: mergedParams })
	});
};
/**
* Query options for fetching a single tax rate by ID (admin)
*/
var adminTaxRateByIdQueryOptions = (id) => queryOptions({
	queryKey: adminTaxRatesKeys.detail(id),
	queryFn: () => getAdminTaxRateById({ data: { id } }),
	enabled: !!id
});
/**
* Hook providing mutations for admin tax rate management
*/
var useAdminTaxRateMutations = () => {
	const queryClient = useQueryClient();
	const invalidateTaxRates = () => {
		queryClient.invalidateQueries({ queryKey: adminTaxRatesKeys.all });
	};
	const toggleActiveMutation = useMutation({
		mutationFn: async ({ id, isActive }) => toggleAdminTaxRateActive({ data: {
			id,
			isActive
		} }),
		onSuccess: (result) => {
			toast.success(result.message || "Tax rate status updated");
			invalidateTaxRates();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to update tax rate status");
		}
	});
	const deleteTaxRateMutation = useMutation({
		mutationFn: (id) => deleteAdminTaxRate({ data: { id } }),
		onSuccess: () => {
			toast.success("Tax rate deleted successfully");
			invalidateTaxRates();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to delete tax rate");
		}
	});
	const mutationState = {
		deletingId: deleteTaxRateMutation.isPending ? deleteTaxRateMutation.variables ?? null : null,
		togglingId: toggleActiveMutation.isPending ? toggleActiveMutation.variables?.id ?? null : null,
		isAnyMutating: toggleActiveMutation.isPending || deleteTaxRateMutation.isPending
	};
	return {
		toggleActive: toggleActiveMutation.mutateAsync,
		deleteTaxRate: deleteTaxRateMutation.mutateAsync,
		isTogglingActive: toggleActiveMutation.isPending,
		isDeleting: deleteTaxRateMutation.isPending,
		mutationState,
		isTaxRateMutating: (id) => mutationState.deletingId === id || mutationState.togglingId === id
	};
};
/**
* Combined hook for admin tax rate management
*/
var useAdminTaxRates = () => {
	return {
		adminTaxRatesQueryOptions,
		adminTaxRateByIdQueryOptions,
		...useAdminTaxRateMutations()
	};
};
/**
* Admin Transactions Hooks
*
* React Query hooks for admin transaction management.
*/
var adminTransactionKeys = {
	all: ["admin-transactions"],
	list: (params) => [
		...adminTransactionKeys.all,
		"list",
		params
	],
	stats: () => [...adminTransactionKeys.all, "stats"]
};
/**
* Hook to fetch admin transaction stats
*/
function useAdminTransactionStats() {
	return useQuery({
		queryKey: adminTransactionKeys.stats(),
		queryFn: async () => {
			return await getAdminTransactionStats();
		}
	});
}
function createAdminCategoriesFetcher() {
	return {
		fetcher: createServerFetcher({
			fetchFn: async (query) => {
				const response = await getAdminCategories({ data: query });
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
				featured: "featured"
			},
			defaultQuery: {
				sortBy: "sortOrder",
				sortDirection: "asc"
			},
			transformFilters: booleanFilterTransform
		}),
		queryKey: adminCategoriesKeys.lists()
	};
}
function createAdminBrandsFetcher() {
	return {
		fetcher: createServerFetcher({
			fetchFn: async (query) => {
				const response = await getAdminBrands({ data: query });
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
		queryKey: adminBrandsKeys.lists()
	};
}
function createAdminAttributesFetcher() {
	return {
		fetcher: createServerFetcher({
			fetchFn: async (query) => {
				const response = await getAdminAttributes({ data: query });
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
		queryKey: adminAttributesKeys.lists()
	};
}
function createAdminCouponsFetcher() {
	return {
		fetcher: createServerFetcher({
			fetchFn: async (query) => {
				const response = await getAdminCoupons({ data: query });
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
		queryKey: adminCouponsKeys.lists()
	};
}
function createAdminTenantsFetcher() {
	return {
		fetcher: createServerFetcher({
			fetchFn: async (query) => {
				const response = await getAdminShops({ data: query });
				return {
					data: (response.data ?? []).map((shop) => ({
						id: shop.id,
						name: shop.name,
						slug: shop.slug,
						ownerName: shop.ownerName ?? "Unknown",
						ownerEmail: shop.ownerEmail ?? "Unknown",
						plan: "free",
						status: shop.status ?? "pending",
						joinedDate: shop.createdAt,
						productCount: shop.totalProducts ?? 0,
						orderCount: shop.totalOrders ?? 0
					})),
					total: response.total ?? 0
				};
			},
			sortFieldMap: {
				name: "name",
				joinedDate: "createdAt",
				productCount: "totalProducts",
				orderCount: "totalOrders"
			},
			filterFieldMap: { status: "status" },
			defaultQuery: {
				sortBy: "createdAt",
				sortDirection: "desc"
			}
		}),
		queryKey: adminShopsKeys.lists()
	};
}
function createAdminTagsFetcher() {
	return {
		fetcher: createServerFetcher({
			fetchFn: async (query) => {
				const response = await getAdminTags({ data: query });
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
		queryKey: adminTagsKeys.lists()
	};
}
function createAdminTaxRatesFetcher() {
	return {
		fetcher: createServerFetcher({
			fetchFn: async (query) => {
				const response = await getAdminTaxRates({ data: query });
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
		queryKey: adminTaxRatesKeys.lists()
	};
}
function createAdminOrdersFetcher() {
	return {
		fetcher: createServerFetcher({
			fetchFn: async (query) => {
				const response = await getAdminOrders({ data: query });
				return {
					data: response.orders ?? [],
					total: response.total ?? 0
				};
			},
			sortFieldMap: {
				createdAt: "createdAt",
				orderNumber: "orderNumber",
				totalAmount: "totalAmount"
			},
			filterFieldMap: {
				status: "status",
				paymentStatus: "paymentStatus"
			},
			defaultQuery: {
				sortBy: "createdAt",
				sortDirection: "desc"
			}
		}),
		queryKey: adminOrderKeys.list()
	};
}
function createAdminTransactionsFetcher() {
	return {
		fetcher: createServerFetcher({
			fetchFn: async (query) => {
				const response = await getAdminTransactions({ data: query });
				return {
					data: response.transactions ?? [],
					total: response.total ?? 0
				};
			},
			sortFieldMap: {
				createdAt: "createdAt",
				amount: "amount"
			},
			filterFieldMap: { status: "status" },
			defaultQuery: {
				sortBy: "createdAt",
				sortDirection: "desc"
			}
		}),
		queryKey: adminTransactionKeys.list()
	};
}
function createAdminProductsFetcher() {
	return {
		fetcher: createServerFetcher({
			fetchFn: async (query) => {
				const response = await getAdminProducts({ data: query });
				return {
					data: response.data ?? [],
					total: response.total ?? 0
				};
			},
			sortFieldMap: {
				name: "name",
				sellingPrice: "sellingPrice",
				stock: "stock",
				createdAt: "createdAt",
				averageRating: "averageRating",
				reviewCount: "reviewCount"
			},
			filterFieldMap: {
				isActive: "isActive",
				status: "status",
				productType: "productType",
				categoryId: "categoryId",
				brandId: "brandId",
				isFeatured: "isFeatured",
				inStock: "inStock"
			},
			defaultQuery: {
				sortBy: "createdAt",
				sortDirection: "desc"
			},
			transformFilters: booleanFilterTransform
		}),
		queryKey: adminProductsKeys.lists()
	};
}
//#endregion
export { useAdminTaxRates as _, createAdminOrdersFetcher as a, createAdminTaxRatesFetcher as c, useAdminAttributes as d, useAdminBrands as f, useAdminTags as g, useAdminProducts as h, createAdminCouponsFetcher as i, createAdminTenantsFetcher as l, useAdminCoupons as m, createAdminBrandsFetcher as n, createAdminProductsFetcher as o, useAdminCategories as p, createAdminCategoriesFetcher as r, createAdminTagsFetcher as s, createAdminAttributesFetcher as t, createAdminTransactionsFetcher as u, useAdminTransactionStats as v };
