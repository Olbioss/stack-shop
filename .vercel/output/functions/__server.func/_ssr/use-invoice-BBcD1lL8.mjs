import { r as createServerFn } from "./ssr.mjs";
import { ln as string, on as object } from "../_libs/@better-auth/core+[...].mjs";
import { t as createSsrRpc } from "./createSsrRpc-CXFXGZZ3.mjs";
import { n as useMutation } from "../_libs/tanstack__react-query.mjs";
import { t as optionalAuthMiddleware } from "./optional-auth-D6kWcuST.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-invoice-BBcD1lL8.js
var getInvoiceUrlSchema = object({
	orderId: string(),
	paymentIntentId: string().optional()
});
/**
* Get the invoice/receipt URL for an order
*/
var getInvoiceUrl = createServerFn({ method: "POST" }).middleware([optionalAuthMiddleware]).inputValidator(getInvoiceUrlSchema).handler(createSsrRpc("6847ea9a4634a90f932f170614f284865075c9842546864bce5cbd03c1edeeed"));
var useDownloadInvoice = () => {
	const mutation = useMutation({
		mutationFn: async ({ orderId, paymentIntentId, newWindow }) => {
			try {
				const { url } = await getInvoiceUrl({ data: {
					orderId,
					paymentIntentId
				} });
				if (newWindow) newWindow.location.href = url;
				else window.location.assign(url);
				return url;
			} catch (error) {
				if (newWindow) newWindow.close();
				throw error;
			}
		},
		onSuccess: () => {
			toast.success("Invoice download started");
		},
		onError: (error) => {
			toast.error(error instanceof Error ? error.message : "Failed to download invoice");
		}
	});
	return {
		...mutation,
		download: (orderId, opts) => {
			const newWindow = window.open("", "_blank", "noopener,noreferrer");
			if (!newWindow) {
				toast.error("Pop-up blocked. Opening invoice in this tab.");
				mutation.mutate({
					orderId,
					paymentIntentId: opts?.paymentIntentId,
					newWindow: null
				});
				return;
			}
			newWindow.opener = null;
			mutation.mutate({
				orderId,
				paymentIntentId: opts?.paymentIntentId,
				newWindow
			});
		}
	};
};
//#endregion
export { useDownloadInvoice as t };
