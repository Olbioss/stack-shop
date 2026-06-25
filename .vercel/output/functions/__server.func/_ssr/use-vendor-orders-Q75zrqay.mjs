import { r as createServerFn } from "./ssr.mjs";
import { ln as string, on as object } from "../_libs/@better-auth/core+[...].mjs";
import { t as createSsrRpc } from "./createSsrRpc-CXFXGZZ3.mjs";
import { c as useQueryClient, n as useMutation, o as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as authMiddleware } from "./auth-BM1BErpv.mjs";
import { i as getOrderByIdSchema, o as getOrdersSchema, s as updateOrderStatusSchema } from "./order-Bl2io5m_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-vendor-orders-Q75zrqay.js
/**
* Order Server Functions (Vendor)
*
* Server functions for vendor order management.
* Allows vendors to view and manage their shop orders.
* Supports admin access to any shop's orders.
*/
var getVendorOrders = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(getOrdersSchema).handler(createSsrRpc("d8030022d2ee68b38e753810b1e88d494a532431773b5a1651823a3ad4d54445"));
var getVendorOrderDetails = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(getOrderByIdSchema).handler(createSsrRpc("4fc0c2a1e3bf2e2626af837735b8f5d5729b9353c9d1cd26e8fbc2fc96b8a88f"));
var updateVendorOrderStatus = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(updateOrderStatusSchema).handler(createSsrRpc("4e1065eb552e4451758756bcb963d02ac29895005d43afcff9b8180a4466fe07"));
var getVendorOrderStatsSchema = object({ shopSlug: string().optional() });
var getVendorOrderStats = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(getVendorOrderStatsSchema).handler(createSsrRpc("cf9464380bf08096876a70e5fb5efbb80688d36188a26ebcfbdf473eb44caa3a"));
var vendorOrderKeys = {
	all: ["vendor-orders"],
	list: (params) => [
		...vendorOrderKeys.all,
		"list",
		params
	],
	detail: (orderId) => [
		...vendorOrderKeys.all,
		"detail",
		orderId
	],
	stats: (shopSlug) => [
		...vendorOrderKeys.all,
		"stats",
		shopSlug
	]
};
function useVendorOrderDetails(orderId) {
	return useQuery({
		queryKey: vendorOrderKeys.detail(orderId),
		queryFn: async () => {
			return (await getVendorOrderDetails({ data: { orderId } })).order;
		},
		enabled: !!orderId
	});
}
function useUpdateVendorOrderStatus() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async ({ orderId, status, internalNotes }) => {
			return await updateVendorOrderStatus({ data: {
				orderId,
				status,
				internalNotes
			} });
		},
		onSuccess: (_, variables) => {
			queryClient.invalidateQueries({ queryKey: vendorOrderKeys.all });
			queryClient.invalidateQueries({ queryKey: vendorOrderKeys.detail(variables.orderId) });
		}
	});
}
function useVendorOrderStats(shopSlug) {
	return useQuery({
		queryKey: vendorOrderKeys.stats(shopSlug),
		queryFn: async () => {
			return await getVendorOrderStats({ data: { shopSlug } });
		}
	});
}
//#endregion
export { vendorOrderKeys as a, useVendorOrderStats as i, useUpdateVendorOrderStatus as n, useVendorOrderDetails as r, getVendorOrders as t };
