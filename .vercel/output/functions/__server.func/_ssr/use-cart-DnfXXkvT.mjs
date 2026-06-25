import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { r as createServerFn } from "./ssr.mjs";
import { t as createSsrRpc } from "./createSsrRpc-CXFXGZZ3.mjs";
import { c as useQueryClient, i as queryOptions, n as useMutation, o as useQuery } from "../_libs/tanstack__react-query.mjs";
import { a as getCartSchema, c as mergeCartsSchema, d as updateCartItemSchema, l as removeFromCartSchema, n as clearCartSchema, o as getGuestSessionId, r as clearGuestSessionId, t as addToCartSchema, u as setGuestSessionId } from "./cart-CJAFT02O.mjs";
import { t as optionalAuthMiddleware } from "./optional-auth-D6kWcuST.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-cart-DnfXXkvT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var getCart = createServerFn({ method: "GET" }).middleware([optionalAuthMiddleware]).inputValidator(getCartSchema).handler(createSsrRpc("9324b57f4d3fc760530ab4820798d75e1358b52e7bcb3422006e04d3e0a3f3c0"));
var addToCart = createServerFn({ method: "POST" }).middleware([optionalAuthMiddleware]).inputValidator(addToCartSchema.extend({ sessionId: getCartSchema.shape.sessionId })).handler(createSsrRpc("35160d3c72ac791024701e15b3ee882146e2e4d67179e97d309f95855ffa6096"));
var updateCartItem = createServerFn({ method: "POST" }).middleware([optionalAuthMiddleware]).inputValidator(updateCartItemSchema.extend({ sessionId: getCartSchema.shape.sessionId })).handler(createSsrRpc("8d5414a1d7a8f270108e7fa4b7a8915439b2fd3bed7c73b4ca156afca797c75f"));
var removeFromCart = createServerFn({ method: "POST" }).middleware([optionalAuthMiddleware]).inputValidator(removeFromCartSchema.extend({ sessionId: getCartSchema.shape.sessionId })).handler(createSsrRpc("daca747f7539f3366304dcaf0b0fc2681902f356b1b8caf9aa8a7a9973200125"));
var clearCart = createServerFn({ method: "POST" }).middleware([optionalAuthMiddleware]).inputValidator(clearCartSchema).handler(createSsrRpc("c3d39d3ebabedf3aa74ef8ac43be44c1a2e9641619b611072732bb4c41134c5b"));
var mergeCarts = createServerFn({ method: "POST" }).middleware([optionalAuthMiddleware]).inputValidator(mergeCartsSchema).handler(createSsrRpc("0111ee71fdba918a772ec11d9daba95f804c1f5b6f507ef4c735f3f35bf9360c"));
/**
* Cart Hook
*
* React Query hooks for cart operations.
* Syncs with server while maintaining local state for optimistic updates.
*/
var cartKeys = {
	all: ["cart"],
	session: (sessionId) => [
		...cartKeys.all,
		"session",
		sessionId
	]
};
var cartQueryOptions = (sessionId) => queryOptions({
	queryKey: cartKeys.session(sessionId),
	queryFn: () => getCart({ data: { sessionId } }),
	staleTime: 1e3 * 60 * 5
});
function useCart() {
	const queryClient = useQueryClient();
	const guestSessionId = getGuestSessionId();
	const { data: cart, isLoading, error, refetch } = useQuery(cartQueryOptions(guestSessionId));
	(0, import_react.useEffect)(() => {
		if (cart?.sessionId && !guestSessionId) setGuestSessionId(cart.sessionId);
	}, [cart?.sessionId, guestSessionId]);
	const invalidateCart = (0, import_react.useCallback)(() => {
		queryClient.invalidateQueries({ queryKey: cartKeys.all });
	}, [queryClient]);
	const addToCartMutation = useMutation({
		mutationFn: async (input) => {
			const sessionId = getGuestSessionId();
			return await addToCart({ data: {
				...input,
				sessionId
			} });
		},
		onSuccess: (result) => {
			if (result.cart.sessionId) setGuestSessionId(result.cart.sessionId);
			queryClient.setQueryData(cartKeys.session(getGuestSessionId()), result.cart);
			toast.success("Added to cart!");
		},
		onError: (error) => {
			toast.error(error.message || "Failed to add to cart");
		}
	});
	const updateCartItemMutation = useMutation({
		mutationFn: async (input) => {
			const sessionId = getGuestSessionId();
			return await updateCartItem({ data: {
				...input,
				sessionId
			} });
		},
		onMutate: async (input) => {
			await queryClient.cancelQueries({ queryKey: cartKeys.all });
			const previousCart = queryClient.getQueryData(cartKeys.session(guestSessionId));
			if (previousCart) {
				const updatedItems = previousCart.items.map((item) => item.id === input.itemId ? {
					...item,
					quantity: input.quantity
				} : item);
				const totalItems = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
				const subtotal = updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
				queryClient.setQueryData(cartKeys.session(guestSessionId), {
					...previousCart,
					items: updatedItems,
					totalItems,
					subtotal
				});
			}
			return { previousCart };
		},
		onError: (error, _vars, context) => {
			if (context?.previousCart) queryClient.setQueryData(cartKeys.session(guestSessionId), context.previousCart);
			toast.error(error.message || "Failed to update cart");
		},
		onSuccess: (result) => {
			queryClient.setQueryData(cartKeys.session(getGuestSessionId()), result.cart);
		}
	});
	const removeFromCartMutation = useMutation({
		mutationFn: async (itemId) => {
			return await removeFromCart({ data: {
				itemId,
				sessionId: getGuestSessionId()
			} });
		},
		onMutate: async (itemId) => {
			await queryClient.cancelQueries({ queryKey: cartKeys.all });
			const previousCart = queryClient.getQueryData(cartKeys.session(guestSessionId));
			if (previousCart) {
				const updatedItems = previousCart.items.filter((item) => item.id !== itemId);
				const totalItems = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
				const subtotal = updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
				queryClient.setQueryData(cartKeys.session(guestSessionId), {
					...previousCart,
					items: updatedItems,
					totalItems,
					subtotal
				});
			}
			return { previousCart };
		},
		onError: (error, _vars, context) => {
			if (context?.previousCart) queryClient.setQueryData(cartKeys.session(guestSessionId), context.previousCart);
			toast.error(error.message || "Failed to remove item");
		},
		onSuccess: (result) => {
			toast.success("Item removed from cart");
			queryClient.setQueryData(cartKeys.session(getGuestSessionId()), result.cart);
		}
	});
	const clearCartMutation = useMutation({
		mutationFn: async () => {
			return await clearCart({ data: { sessionId: getGuestSessionId() } });
		},
		onSuccess: (result) => {
			queryClient.setQueryData(cartKeys.session(getGuestSessionId()), result.cart);
			toast.success("Cart cleared");
		},
		onError: (error) => {
			toast.error(error.message || "Failed to clear cart");
		}
	});
	const mergeCartsMutation = useMutation({
		mutationFn: async () => {
			const guestSession = getGuestSessionId();
			if (!guestSession) throw new Error("No guest session to merge");
			return await mergeCarts({ data: { guestSessionId: guestSession } });
		},
		onSuccess: (result) => {
			clearGuestSessionId();
			queryClient.setQueryData(cartKeys.session(void 0), result);
			invalidateCart();
			toast.success("Cart merged successfully");
		},
		onError: (error) => {
			toast.error(error.message || "Failed to merge carts");
		}
	});
	return {
		items: cart?.items || [],
		totalItems: cart?.totalItems || 0,
		subtotal: cart?.subtotal || 0,
		isLoading,
		error,
		addItem: addToCartMutation.mutateAsync,
		updateQuantity: (itemId, quantity) => updateCartItemMutation.mutateAsync({
			itemId,
			quantity
		}),
		removeItem: removeFromCartMutation.mutateAsync,
		clearCart: clearCartMutation.mutateAsync,
		mergeCarts: mergeCartsMutation.mutateAsync,
		refetch,
		isAdding: addToCartMutation.isPending,
		isUpdating: updateCartItemMutation.isPending,
		isRemoving: removeFromCartMutation.isPending,
		isClearing: clearCartMutation.isPending,
		isMerging: mergeCartsMutation.isPending
	};
}
//#endregion
export { useCart as t };
