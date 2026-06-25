import { r as createServerFn } from "./ssr.mjs";
import { t as createSsrRpc } from "./createSsrRpc-CXFXGZZ3.mjs";
import { c as useQueryClient, i as queryOptions, n as useMutation } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as adminMiddleware } from "./admin-CYCFP3zk.mjs";
import { a as updateVendorCommissionSchema, i as updateShopStatusSchema, n as deleteShopByIdSchema, r as getShopByIdSchema, t as adminShopsQuerySchema } from "./shop-query-qB6XBGQX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-admin-shops-ClDB9K08.js
var getAdminShops = createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(adminShopsQuerySchema).handler(createSsrRpc("ac2c4a1d06ff99ff6c6cbedbb8d5784e3241c2d52c226a49e234e6e162b4dc01"));
/**
* Get a single shop by ID (admin can view any shop)
*/
var getAdminShopById = createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(getShopByIdSchema).handler(createSsrRpc("67fa3db952412772f8cc6f4563c8f85481ee1f3138c1bd159035c6c7f20e172c"));
/**
* Update shop status (activate, suspend, etc.)
*/
var updateAdminShopStatus = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(updateShopStatusSchema).handler(createSsrRpc("33a845a8a9ad8219cc57494b62837a429087e63884bd45b57f01bee75622a32a"));
/**
* Delete a shop (admin action)
*/
var deleteAdminShop = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(deleteShopByIdSchema).handler(createSsrRpc("65911f7e5db2a47f88dcc1fddef1d8a5dcfb141d136873a35b63c8835bf69778"));
/**
* Update vendor commission rate (admin action)
*/
var updateVendorCommission = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(updateVendorCommissionSchema).handler(createSsrRpc("5180d7e5ee507ab98bd9911a5923070662c5cd373dbbb25fcf95b90efdc96995"));
/**
* Admin Shops (Tenants) Hook
*
* React Query hooks for admin shop/tenant management.
* Provides query options and mutations for admin-level shop operations.
*/
var adminShopsKeys = {
	all: ["admin", "shops"],
	lists: () => [...adminShopsKeys.all, "list"],
	list: (params) => [...adminShopsKeys.lists(), params],
	details: () => [...adminShopsKeys.all, "detail"],
	detail: (id) => [...adminShopsKeys.details(), id]
};
var defaultParams = {
	limit: 10,
	offset: 0,
	sortBy: "createdAt",
	sortDirection: "desc"
};
/**
* Query options for fetching admin shops with pagination and filters
*/
var adminShopsQueryOptions = (params = {}) => {
	const mergedParams = {
		...defaultParams,
		...params
	};
	return queryOptions({
		queryKey: adminShopsKeys.list(mergedParams),
		queryFn: () => getAdminShops({ data: mergedParams })
	});
};
/**
* Query options for fetching a single shop by ID (admin)
*/
var adminShopByIdQueryOptions = (id) => queryOptions({
	queryKey: adminShopsKeys.detail(id),
	queryFn: () => getAdminShopById({ data: { id } }),
	enabled: !!id
});
/**
* Hook providing mutations for admin shop management
*/
var useAdminShopMutations = () => {
	const queryClient = useQueryClient();
	const invalidateShops = () => {
		queryClient.invalidateQueries({ queryKey: adminShopsKeys.all });
	};
	const updateStatusMutation = useMutation({
		mutationFn: async ({ id, status }) => updateAdminShopStatus({ data: {
			id,
			status
		} }),
		onSuccess: (result) => {
			toast.success(result.message || "Shop status updated");
			invalidateShops();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to update shop status");
		}
	});
	const deleteShopMutation = useMutation({
		mutationFn: (id) => deleteAdminShop({ data: { id } }),
		onSuccess: () => {
			toast.success("Shop deleted successfully");
			invalidateShops();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to delete shop");
		}
	});
	const updateCommissionMutation = useMutation({
		mutationFn: ({ vendorId, commissionRate }) => updateVendorCommission({ data: {
			vendorId,
			commissionRate
		} }),
		onSuccess: (result) => {
			toast.success(result.message || "Commission rate updated");
			invalidateShops();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to update commission");
		}
	});
	return {
		updateStatus: updateStatusMutation.mutateAsync,
		deleteShop: deleteShopMutation.mutateAsync,
		updateCommission: updateCommissionMutation.mutateAsync,
		isUpdatingStatus: updateStatusMutation.isPending,
		isDeleting: deleteShopMutation.isPending,
		isUpdatingCommission: updateCommissionMutation.isPending
	};
};
/**
* Combined hook for admin shop management
*/
var useAdminShops = () => {
	return {
		adminShopsQueryOptions,
		adminShopByIdQueryOptions,
		...useAdminShopMutations()
	};
};
//#endregion
export { getAdminShops as n, useAdminShops as r, adminShopsKeys as t };
