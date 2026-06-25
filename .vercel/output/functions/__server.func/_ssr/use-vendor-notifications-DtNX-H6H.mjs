import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./utils-Pgq5HWQm.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Root2, t as Item2 } from "../_libs/radix-ui__react-toggle-group.mjs";
import { r as createServerFn } from "./ssr.mjs";
import "./db-DORSFQFR.mjs";
import { t as createSsrRpc } from "./createSsrRpc-CXFXGZZ3.mjs";
import { c as useQueryClient, n as useMutation, o as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as authMiddleware } from "./auth-BM1BErpv.mjs";
import { i as markNotificationAsReadSchema, n as getNotificationsSchema, r as markAllAsReadSchema, t as createNotificationSchema } from "./notifications-GtjpqX23.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-vendor-notifications-DtNX-H6H.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var toggleVariants = cva("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
	variants: {
		variant: {
			default: "bg-transparent",
			outline: "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground"
		},
		size: {
			default: "h-9 min-w-9 px-2",
			sm: "h-8 min-w-8 px-1.5",
			lg: "h-10 min-w-10 px-2.5"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var ToggleGroupContext = import_react.createContext({
	size: "default",
	variant: "default",
	spacing: 0
});
function ToggleGroup$1({ className, variant, size, spacing = 0, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2, {
		"data-slot": "toggle-group",
		"data-variant": variant,
		"data-size": size,
		"data-spacing": spacing,
		style: { "--gap": spacing },
		className: cn("group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupContext.Provider, {
			value: {
				variant,
				size,
				spacing
			},
			children
		})
	});
}
function ToggleGroupItem({ className, children, variant, size, ...props }) {
	const context = import_react.useContext(ToggleGroupContext);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
		"data-slot": "toggle-group-item",
		"data-variant": context.variant || variant,
		"data-size": context.size || size,
		"data-spacing": context.spacing,
		className: cn(toggleVariants({
			variant: context.variant || variant,
			size: context.size || size
		}), "w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10", "data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:data-[variant=outline]:first:border-l", className),
		...props,
		children
	});
}
/**
* Vendor Notification Server Functions
*
* Server functions for managing vendor/shop notifications.
* Handles fetching, marking as read, and creating notifications.
*/
/**
* Get notifications for a vendor/shop.
*
* @param shopSlug - The slug of the shop to fetch notifications for.
* @param limit - Number of notifications to return (default: 20).
* @param offset - Pagination offset (default: 0).
* @param unreadOnly - Filter for unread notifications only (default: false).
*
* @returns A list of notifications for the specified shop.
*/
var getVendorNotifications = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(getNotificationsSchema).handler(createSsrRpc("8cc2a15baac0ea5c3ed78fed023590481591f88ddbd41570d2b739a0bfede785"));
var markNotificationAsRead = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(markNotificationAsReadSchema).handler(createSsrRpc("c995827ce11d022207b5147c817dc15421b5ddd5f680635e27cdf142a3646400"));
var markAllNotificationsAsRead = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(markAllAsReadSchema).handler(createSsrRpc("c23d37665a6fc36ee1c99742623a9d973a5b6ca7d51c77425e10920b174a5324"));
createServerFn({ method: "POST" }).inputValidator(createNotificationSchema).handler(createSsrRpc("814123b36a9ef276651e09a036619d2a502f884eab8640e15bb53e7135dc13e4"));
/**
* Vendor Notifications Hook
*
* React Query hook for managing vendor shop notifications.
*/
var notificationKeys = {
	all: ["notifications"],
	shop: (shopSlug) => [...notificationKeys.all, shopSlug],
	list: (shopSlug, filters) => [
		...notificationKeys.shop(shopSlug),
		"list",
		filters
	]
};
function useVendorNotifications({ shopSlug, limit = 20, unreadOnly = false, enabled = true, refetchInterval = 3e4 }) {
	const query = useQuery({
		queryKey: notificationKeys.list(shopSlug, {
			unreadOnly,
			limit
		}),
		queryFn: async () => {
			return getVendorNotifications({ data: {
				shopSlug,
				limit,
				offset: 0,
				unreadOnly
			} });
		},
		enabled: enabled && !!shopSlug,
		refetchInterval,
		staleTime: 1e4
	});
	return {
		notifications: query.data?.notifications ?? [],
		unreadCount: query.data?.unreadCount ?? 0,
		isLoading: query.isLoading,
		isError: query.isError,
		error: query.error,
		refetch: query.refetch
	};
}
function useVendorNotificationMutations(shopSlug) {
	const queryClient = useQueryClient();
	const markAsRead = useMutation({
		mutationFn: async (notificationId) => {
			return markNotificationAsRead({ data: {
				shopSlug,
				notificationId
			} });
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: notificationKeys.shop(shopSlug) });
		}
	});
	const markAllAsRead = useMutation({
		mutationFn: async () => {
			return markAllNotificationsAsRead({ data: { shopSlug } });
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: notificationKeys.shop(shopSlug) });
		}
	});
	return {
		markAsRead: markAsRead.mutate,
		markAllAsRead: markAllAsRead.mutate,
		isMarkingAsRead: markAsRead.isPending,
		isMarkingAllAsRead: markAllAsRead.isPending
	};
}
//#endregion
export { useVendorNotifications as i, ToggleGroupItem as n, useVendorNotificationMutations as r, ToggleGroup$1 as t };
