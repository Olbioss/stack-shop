import { c as useQueryClient, n as useMutation, o as useQuery } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as getOrdersByIds, i as getOrderById, n as createCheckoutSession, t as confirmPayment } from "./order-CWYBszKz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-checkout-Dhl-tOLO.js
/**
* Checkout Hooks
*
* React Query hooks for checkout operations.
*/
var orderKeys = {
	all: ["orders"],
	lists: () => [...orderKeys.all, "list"],
	list: (filters) => [...orderKeys.lists(), filters],
	details: () => [...orderKeys.all, "detail"],
	detail: (id) => [...orderKeys.details(), id],
	batch: (ids) => [
		...orderKeys.all,
		"batch",
		[...ids].sort()
	]
};
var CHECKOUT_SESSION_KEY = "checkout-session-data";
/**
* Store checkout session data in localStorage
*/
function storeCheckoutSession(data) {
	if (typeof window !== "undefined") localStorage.setItem(CHECKOUT_SESSION_KEY, JSON.stringify(data));
}
/**
* Clear checkout session from localStorage
*/
function clearCheckoutSession() {
	if (typeof window !== "undefined") localStorage.removeItem(CHECKOUT_SESSION_KEY);
}
function useCreateCheckoutSession(options) {
	return useMutation({
		mutationFn: async (data) => {
			return await createCheckoutSession({ data });
		},
		onSuccess: (result) => {
			const sessionData = {
				orderIds: result.orderIds,
				paymentIntentId: result.paymentIntentId,
				clientSecret: result.clientSecret,
				totalAmount: result.totalAmount
			};
			storeCheckoutSession(sessionData);
			options?.onSuccess?.(sessionData);
		},
		onError: (error) => {
			toast.error(error.message || "Failed to create checkout session");
		}
	});
}
function useConfirmPayment() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (data) => {
			return await confirmPayment({ data });
		},
		onSuccess: () => {
			clearCheckoutSession();
			queryClient.invalidateQueries({ queryKey: orderKeys.all });
			toast.success("Payment confirmed successfully!");
		},
		onError: (error) => {
			toast.error(error.message || "Failed to confirm payment");
		}
	});
}
function useOrderById(orderId) {
	return useQuery({
		queryKey: orderKeys.detail(orderId),
		queryFn: async () => {
			return (await getOrderById({ data: { orderId } })).order;
		},
		enabled: !!orderId
	});
}
function useOrdersByIds(input) {
	const orderIds = input.orderIds ?? [];
	return useQuery({
		queryKey: orderKeys.batch(orderIds),
		queryFn: async () => {
			return (await getOrdersByIds({ data: {
				...input,
				orderIds
			} })).orders;
		},
		enabled: orderIds.length > 0
	});
}
//#endregion
export { useOrdersByIds as a, useOrderById as i, useConfirmPayment as n, useCreateCheckoutSession as r, clearCheckoutSession as t };
