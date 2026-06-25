import { c as useQueryClient, i as queryOptions, n as useMutation } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { _ as getCategoryById, g as getCategories, h as deleteCategory, r as createCategory, x as updateCategory } from "./use-vendor-entity-fetcher-C_d9aXVF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-category-CArlVryS.js
/**
* Vendor Categories Hook
*
* React hook for category management in the vendor dashboard.
* Uses TanStack Query with server functions for SSR-compatible data fetching.
*/
/**
* Query options for fetching categories with pagination
*/
var categoriesQueryOptions = (params) => queryOptions({
	queryKey: [
		"vendor",
		"categories",
		params.shopId,
		params
	],
	queryFn: () => getCategories({ data: params }),
	enabled: !!params.shopId
});
/**
* Query options for fetching a single category by ID
*/
var categoryByIdQueryOptions = (id, shopId) => queryOptions({
	queryKey: [
		"vendor",
		"categories",
		shopId,
		id
	],
	queryFn: () => getCategoryById({ data: {
		id,
		shopId
	} }),
	enabled: !!id && !!shopId
});
/**
* Hook providing mutations for category management
*/
var useCategoryMutations = (shopId) => {
	const queryClient = useQueryClient();
	const invalidateCategories = () => {
		queryClient.invalidateQueries({ queryKey: [
			"vendor",
			"categories",
			shopId
		] });
	};
	const createCategoryMutation = useMutation({
		mutationFn: async (data) => {
			return await createCategory({ data: {
				...data,
				shopId
			} });
		},
		onSuccess: (result) => {
			toast.success(`Category "${result.category?.name}" created successfully!`);
			invalidateCategories();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to create category");
		}
	});
	const updateCategoryMutation = useMutation({
		mutationFn: async (data) => {
			return await updateCategory({ data: {
				...data,
				shopId
			} });
		},
		onSuccess: (result) => {
			toast.success(`Category "${result.category?.name}" updated successfully!`);
			invalidateCategories();
			if (result.category?.id) queryClient.invalidateQueries({ queryKey: [
				"vendor",
				"categories",
				shopId,
				result.category.id
			] });
		},
		onError: (error) => {
			toast.error(error.message || "Failed to update category");
		}
	});
	const deleteCategoryMutation = useMutation({
		mutationFn: async (categoryId) => {
			return await deleteCategory({ data: {
				id: categoryId,
				shopId
			} });
		},
		onSuccess: () => {
			toast.success("Category deleted successfully");
			invalidateCategories();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to delete category");
		}
	});
	const mutationState = {
		creatingId: createCategoryMutation.isPending ? "new" : null,
		deletingId: deleteCategoryMutation.isPending ? deleteCategoryMutation.variables : null,
		updatingId: updateCategoryMutation.isPending ? updateCategoryMutation.variables?.id : null,
		isAnyMutating: createCategoryMutation.isPending || deleteCategoryMutation.isPending || updateCategoryMutation.isPending
	};
	return {
		createCategory: createCategoryMutation.mutateAsync,
		updateCategory: updateCategoryMutation.mutateAsync,
		deleteCategory: deleteCategoryMutation.mutateAsync,
		isCreating: createCategoryMutation.isPending,
		isUpdating: updateCategoryMutation.isPending,
		isDeleting: deleteCategoryMutation.isPending,
		mutationState,
		isCategoryMutating: (id) => mutationState.deletingId === id || mutationState.updatingId === id
	};
};
/**
* Combined hook for category management
*/
var useCategories = (shopId) => {
	return {
		categoriesQueryOptions: (params) => categoriesQueryOptions({
			...params,
			shopId
		}),
		categoryByIdQueryOptions: (id) => categoryByIdQueryOptions(id, shopId),
		...useCategoryMutations(shopId)
	};
};
//#endregion
export { useCategories as n, categoriesQueryOptions as t };
