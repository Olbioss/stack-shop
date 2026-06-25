import { r as createServerFn } from "./ssr.mjs";
import { t as createSsrRpc } from "./createSsrRpc-CXFXGZZ3.mjs";
import { c as useQueryClient, n as useMutation, o as useQuery } from "../_libs/tanstack__react-query.mjs";
import { i as getOrderByIdSchema, o as getOrdersSchema, s as updateOrderStatusSchema, t as cancelOrderSchema } from "./order-Bl2io5m_.mjs";
import { t as adminMiddleware } from "./admin-CYCFP3zk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-admin-orders-ebDgXDm5.js
var getAdminOrders = createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(getOrdersSchema).handler(createSsrRpc("da8a6d05d4bb1eab7702a1bc0cac31da8b6c9f576df4c063a6b5ee63377b90c4"));
var getAdminOrderDetails = createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(getOrderByIdSchema).handler(createSsrRpc("8ea723f0277401280f14644a46a98c8c9b4da6162eca582e36533da66819047b"));
var updateAdminOrderStatus = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(updateOrderStatusSchema).handler(createSsrRpc("a1801a9022f9ecc873b9a5638cbd37d12341d581a211b780db92d7703dcf8fe3"));
createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(cancelOrderSchema).handler(createSsrRpc("28fbbd217356e3abaf9763a0d72f028eeb248d022aa588429632b278060206d0"));
var getAdminOrderStats = createServerFn({ method: "GET" }).middleware([adminMiddleware]).handler(createSsrRpc("2854ce7585d82e96d203d25e4a1b5d00a8d4f7b3009e2e8ad9ed70e97928526f"));
/**
* Admin Orders Hooks
*
* React Query hooks for admin order management.
*/
var adminOrderKeys = {
	all: ["admin-orders"],
	list: (params) => [
		...adminOrderKeys.all,
		"list",
		params
	],
	detail: (orderId) => [
		...adminOrderKeys.all,
		"detail",
		orderId
	],
	stats: () => [...adminOrderKeys.all, "stats"]
};
/**
* Hook to fetch admin order details
*/
function useAdminOrderDetails(orderId) {
	return useQuery({
		queryKey: adminOrderKeys.detail(orderId),
		queryFn: async () => {
			return (await getAdminOrderDetails({ data: { orderId } })).order;
		},
		enabled: !!orderId
	});
}
/**
* Hook to update admin order status
*/
function useUpdateAdminOrderStatus() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async ({ orderId, status, internalNotes }) => {
			return await updateAdminOrderStatus({ data: {
				orderId,
				status,
				internalNotes
			} });
		},
		onSuccess: (_, variables) => {
			queryClient.invalidateQueries({ queryKey: adminOrderKeys.all });
			queryClient.invalidateQueries({ queryKey: adminOrderKeys.detail(variables.orderId) });
		}
	});
}
/**
* Hook to fetch admin order stats
*/
function useAdminOrderStats() {
	return useQuery({
		queryKey: adminOrderKeys.stats(),
		queryFn: async () => {
			return await getAdminOrderStats();
		}
	});
}
//#endregion
export { useUpdateAdminOrderStatus as a, useAdminOrderStats as i, getAdminOrders as n, useAdminOrderDetails as r, adminOrderKeys as t };
