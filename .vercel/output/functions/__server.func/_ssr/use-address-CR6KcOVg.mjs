import { r as createServerFn } from "./ssr.mjs";
import { t as createSsrRpc } from "./createSsrRpc-CXFXGZZ3.mjs";
import { c as useQueryClient, i as queryOptions, n as useMutation } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as authMiddleware } from "./auth-BM1BErpv.mjs";
import { n as deleteAddressSchema, r as updateAddressSchema, t as createAddressSchema } from "./address-C_CBX6dn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-address-CR6KcOVg.js
/**
* Customer Address Server Functions
*
* Server functions for managing customer addresses.
* Uses TanStack Start's createServerFn with authentication middleware.
*/
var getUserAddresses = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("6dbf2ed035dcf8ef932760b200dfc48bfe05b7bb449d2967b8b99ca0a7a126a2"));
var createAddress = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(createAddressSchema).handler(createSsrRpc("d169e55f9006d88632bcc2369e47121e9fffd0d28e0d4595f1f321261993a930"));
var updateAddress = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(updateAddressSchema).handler(createSsrRpc("4036644a3c6066179e0827de38d0b6ea147489153deefe0d451465074ddb588c"));
var deleteAddress = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(deleteAddressSchema).handler(createSsrRpc("6719ad971235867fab845c0b447018500d28bb27f5f76afbd329cd2b1ff1e472"));
var setDefaultAddress = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(deleteAddressSchema).handler(createSsrRpc("6cad83a32036f7f136f626b3783a0e184d864600d39b3c60158ea25c9a983920"));
/**
* Customer Addresses Hook
*
* React hook for address management in the customer account area.
* Uses TanStack Query with server functions for SSR-compatible data fetching.
*/
var addressKeys = {
	all: ["account", "addresses"],
	lists: () => [...addressKeys.all, "list"],
	details: () => [...addressKeys.all, "detail"]
};
var defaultParams = {};
/**
* Query options for fetching user addresses
*/
var addressesQueryOptions = (_params = defaultParams) => queryOptions({
	queryKey: addressKeys.lists(),
	queryFn: () => getUserAddresses()
});
/**
* Hook providing mutations for address management
*/
var useAddressMutations = () => {
	const queryClient = useQueryClient();
	const invalidateAddresses = () => {
		queryClient.invalidateQueries({ queryKey: addressKeys.lists() });
	};
	const createAddressMutation = useMutation({
		mutationFn: async (data) => {
			return await createAddress({ data });
		},
		onSuccess: () => {
			toast.success("Address added successfully");
			invalidateAddresses();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to add address");
		}
	});
	const updateAddressMutation = useMutation({
		mutationFn: async (data) => {
			return await updateAddress({ data });
		},
		onSuccess: () => {
			toast.success("Address updated successfully");
			invalidateAddresses();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to update address");
		}
	});
	const deleteAddressMutation = useMutation({
		mutationFn: async (data) => {
			return await deleteAddress({ data });
		},
		onSuccess: () => {
			toast.success("Address deleted successfully");
			invalidateAddresses();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to delete address");
		}
	});
	const setDefaultAddressMutation = useMutation({
		mutationFn: async (data) => {
			return await setDefaultAddress({ data });
		},
		onSuccess: () => {
			toast.success("Default address updated");
			invalidateAddresses();
		},
		onError: (_error) => {
			toast.error("Failed to set default address");
		}
	});
	return {
		createAddress: createAddressMutation.mutateAsync,
		updateAddress: updateAddressMutation.mutateAsync,
		deleteAddress: deleteAddressMutation.mutateAsync,
		setDefaultAddress: setDefaultAddressMutation.mutateAsync,
		isCreating: createAddressMutation.isPending,
		isUpdating: updateAddressMutation.isPending,
		isDeleting: deleteAddressMutation.isPending,
		isSettingDefault: setDefaultAddressMutation.isPending
	};
};
//#endregion
export { useAddressMutations as n, addressesQueryOptions as t };
