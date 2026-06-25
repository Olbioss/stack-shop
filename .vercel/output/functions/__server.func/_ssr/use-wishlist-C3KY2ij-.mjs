import { r as createServerFn } from "./ssr.mjs";
import { t as optionalAuthMiddleware } from "./optional-auth-D6kWcuST.mjs";
import { t as createSsrRpc } from "./createSsrRpc-CXFXGZZ3.mjs";
import { c as useQueryClient, i as queryOptions, n as useMutation } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as authMiddleware } from "./auth-BM1BErpv.mjs";
import { t as toggleWishlistSchema } from "./wishlist-Dtqzq8Ig.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-wishlist-C3KY2ij-.js
/**
* Wishlist Server Functions
*
* Server functions for managing user wishlists.
* Uses TanStack Start's createServerFn with authentication middleware.
*/
var getWishlist = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("245430af01ba4f382981d82ee4d30a75593d72179215e4bfa032fc1d0d1ea640"));
var toggleWishlist = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(toggleWishlistSchema).handler(createSsrRpc("3255777bc3528258b1411c218a598d72d90d34c1d61ca0220c35162d355617c6"));
var checkWishlistStatus = createServerFn({ method: "POST" }).middleware([optionalAuthMiddleware]).inputValidator(toggleWishlistSchema).handler(createSsrRpc("5b0adee9a0c2d5441423f75e2214368ff10b19701dc934c1cd5f250a46babe4d"));
/**
* Wishlist Hook
*
* React hook for wishlist management in the client.
* Uses TanStack Query with server functions.
*/
var wishlistKeys = {
	all: ["account", "wishlist"],
	lists: () => [...wishlistKeys.all, "list"],
	item: (productId) => [
		...wishlistKeys.all,
		"item",
		productId
	]
};
/**
* Query options for fetching user wishlist
*/
var wishlistQueryOptions = () => queryOptions({
	queryKey: wishlistKeys.lists(),
	queryFn: () => getWishlist()
});
/**
* Query options for checking if a product is in wishlist
*/
var wishlistStatusQueryOptions = (productId) => queryOptions({
	queryKey: wishlistKeys.item(productId),
	queryFn: () => checkWishlistStatus({ data: { productId } }),
	enabled: !!productId
});
/**
* Hook providing mutations for wishlist management
*/
var useWishlistMutations = () => {
	const queryClient = useQueryClient();
	const invalidateWishlist = () => {
		queryClient.invalidateQueries({ queryKey: wishlistKeys.lists() });
	};
	const invalidateStatus = (productId) => {
		queryClient.invalidateQueries({ queryKey: wishlistKeys.item(productId) });
	};
	const toggleWishlistMutation = useMutation({
		mutationFn: async (data) => {
			return {
				...await toggleWishlist({ data }),
				productId: data.productId
			};
		},
		onSuccess: (result) => {
			if (result.added) toast.success("Added to wishlist");
			else toast.success("Removed from wishlist");
			invalidateWishlist();
			invalidateStatus(result.productId);
		},
		onError: (error) => {
			toast.error(error.message || "Failed to update wishlist");
		}
	});
	return {
		toggleWishlist: toggleWishlistMutation.mutateAsync,
		isToggling: toggleWishlistMutation.isPending
	};
};
//#endregion
export { wishlistQueryOptions as n, wishlistStatusQueryOptions as r, useWishlistMutations as t };
