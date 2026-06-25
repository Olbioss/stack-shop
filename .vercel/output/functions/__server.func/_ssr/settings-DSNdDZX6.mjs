import { o as __toESM } from "../_runtime.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { m as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as useQueryClient, i as queryOptions, n as useMutation, o as useQuery } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { $ as Link, Et as CircleCheck, Ot as CircleAlert, Z as LoaderCircle, vt as ExternalLink } from "../_libs/lucide-react.mjs";
import { a as CardHeader, n as CardContent, o as CardTitle, r as CardDescription, t as Card } from "./card-BDvQuHpQ.mjs";
import { t as Badge } from "./badge-NA1wPZ4a.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog$1 } from "./dialog-D7cdI8cA.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs$1 } from "./tabs-DkMjjh1r.mjs";
import { n as AlertDescription, r as AlertTitle, t as Alert } from "./alert-CaUgtvAi.mjs";
import { t as Route } from "./settings-knca8S4N.mjs";
import { n as getVendorStripeStatus, r as startStripeOnboarding, t as getStripeDashboardLink } from "./vendor-connect-MK7Ab2Xv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/settings-DSNdDZX6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Vendor Stripe Connect Hook
*
* React Query hooks for vendor Stripe Connect operations.
* Handles onboarding, status checking, and dashboard access.
*/
var vendorStripeConnectKeys = {
	all: ["vendor", "stripe-connect"],
	status: (shopSlug) => [
		...vendorStripeConnectKeys.all,
		"status",
		shopSlug
	]
};
/**
* Query options for fetching vendor's Stripe Connect status
*/
var vendorStripeStatusQueryOptions = (shopSlug) => queryOptions({
	queryKey: vendorStripeConnectKeys.status(shopSlug),
	queryFn: () => getVendorStripeStatus({ data: { shopSlug } }),
	enabled: !!shopSlug
});
/**
* Hook for starting Stripe Connect onboarding
*/
function useStartStripeOnboarding(options) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (params) => {
			return await startStripeOnboarding({ data: {
				shopSlug: params.shopSlug,
				returnPath: params.returnPath
			} });
		},
		onSuccess: (data, variables) => {
			queryClient.invalidateQueries({ queryKey: vendorStripeConnectKeys.status(variables.shopSlug) });
			options?.onSuccess?.(data);
		},
		onError: (error) => {
			toast.error(error.message || "Failed to start Stripe onboarding");
		}
	});
}
/**
* Hook for getting Stripe Express Dashboard link
*/
function useGetStripeDashboard(options) {
	return useMutation({
		mutationFn: async () => {
			return await getStripeDashboardLink();
		},
		onSuccess: (data) => {
			options?.onSuccess?.(data);
		},
		onError: (error) => {
			toast.error(error.message || "Failed to access Stripe dashboard");
		}
	});
}
/**
* Hook for disconnecting Stripe account
*/
function useDisconnectStripe(shopSlug, options) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async () => {
			const { disconnectStripeAccount } = await import("./vendor-connect-MK7Ab2Xv.mjs").then((n) => n.i);
			return await disconnectStripeAccount();
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: vendorStripeConnectKeys.status(shopSlug) });
			toast.success("Stripe account disconnected successfully");
			options?.onSuccess?.();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to disconnect Stripe account");
		}
	});
}
/**
* Vendor Settings Template
*
* Main template for vendor shop settings with tabs for different settings categories.
* Follows the same pattern as AdminSettingsTemplate.
*/
var VendorSettingsTemplate = ({ shopSlug, defaultTab = "general", stripeOnboardingStatus }) => {
	const navigate = useNavigate();
	const handleTabChange = (value) => {
		navigate({
			to: ".",
			search: { tab: value },
			replace: true
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center justify-between",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-bold text-3xl tracking-tight",
				children: "Settings"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: "Manage your shop preferences and configurations"
			})] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs$1, {
			value: defaultTab,
			onValueChange: handleTabChange,
			className: "w-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
					value: "general",
					children: "General Settings"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
					value: "payments",
					children: "Payment Settings"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "general",
					className: "space-y-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "General Information" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Configure general settings for your shop." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground text-sm",
						children: "Shop profile settings will be available here."
					}) })] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "payments",
					className: "space-y-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentSettingsSection, {
						shopSlug,
						onboardingStatus: stripeOnboardingStatus
					})
				})
			]
		})]
	});
};
function PaymentSettingsSection({ shopSlug, onboardingStatus }) {
	const navigate = useNavigate();
	const [isRedirecting, setIsRedirecting] = (0, import_react.useState)(false);
	const [showDisconnectDialog, setShowDisconnectDialog] = (0, import_react.useState)(false);
	const { data: stripeStatus, isPending, refetch } = useQuery(vendorStripeStatusQueryOptions(shopSlug));
	const startOnboardingMutation = useStartStripeOnboarding({ onSuccess: (data) => {
		setIsRedirecting(true);
		window.location.href = data.url;
	} });
	const getDashboardMutation = useGetStripeDashboard({ onSuccess: (data) => {
		window.open(data.url, "_blank", "noopener,noreferrer");
	} });
	const disconnectMutation = useDisconnectStripe(shopSlug, { onSuccess: () => {
		setShowDisconnectDialog(false);
		refetch();
	} });
	(0, import_react.useEffect)(() => {
		if (onboardingStatus === "success") {
			refetch();
			navigate({
				to: ".",
				search: { tab: "payments" },
				replace: true
			});
		}
	}, [
		onboardingStatus,
		refetch,
		navigate
	]);
	const handleStartOnboarding = () => {
		startOnboardingMutation.mutate({
			shopSlug,
			returnPath: "settings?tab=payments"
		});
	};
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
		className: "flex items-center justify-center py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-8 w-8 animate-spin text-muted-foreground" })
	}) });
	const status = stripeStatus;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		onboardingStatus === "success" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Alert, {
			className: "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-green-600" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertTitle, { children: "Onboarding Complete" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDescription, { children: "Your Stripe account has been successfully connected. You can now receive payments!" })
			]
		}),
		onboardingStatus === "refresh" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Alert, {
			className: "border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4 text-yellow-600" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertTitle, { children: "Onboarding Interrupted" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDescription, { children: "It looks like your Stripe onboarding was interrupted. Please click the button below to continue." })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center justify-between",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
				className: "flex items-center gap-2",
				children: [
					"Stripe Connect",
					status?.isConnected && status.chargesEnabled && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "default",
						className: "bg-green-600",
						children: "Connected"
					}),
					status?.isConnected && !status.chargesEnabled && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "secondary",
						children: "Pending"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Connect your Stripe account to receive payments from customers." })] })
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
			className: "space-y-4",
			children: !status?.isConnected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground text-sm",
					children: "To receive payments, you need to connect your Stripe account. This allows us to securely transfer funds to your bank account."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: handleStartOnboarding,
						disabled: startOnboardingMutation.isPending || isRedirecting,
						size: "lg",
						children: startOnboardingMutation.isPending || isRedirecting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }), "Redirecting to Stripe..."] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, { className: "mr-2 h-4 w-4" }), "Connect with Stripe"] })
					})
				})]
			}) : status.requiresAction ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Alert, {
					className: "border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4 text-yellow-600" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertTitle, { children: "Action Required" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDescription, { children: "Please complete the remaining requirements to enable payments." })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: handleStartOnboarding,
					disabled: startOnboardingMutation.isPending || isRedirecting,
					children: startOnboardingMutation.isPending || isRedirecting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }), "Redirecting..."] }) : "Complete Onboarding"
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-lg border p-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-green-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-sm",
									children: "Onboarding Complete"
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-lg border p-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [status.chargesEnabled ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-green-600" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4 text-yellow-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-sm",
									children: status.chargesEnabled ? "Charges Enabled" : "Charges Pending"
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-lg border p-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [status.payoutsEnabled ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-green-600" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4 text-yellow-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-sm",
									children: status.payoutsEnabled ? "Payouts Enabled" : "Payouts Pending"
								})]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: () => getDashboardMutation.mutate(),
						disabled: getDashboardMutation.isPending,
						children: [getDashboardMutation.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "mr-2 h-4 w-4" }), "Open Stripe Dashboard"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "destructive",
						onClick: () => setShowDisconnectDialog(true),
						children: "Disconnect"
					})]
				})]
			})
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
			open: showDisconnectDialog,
			onOpenChange: setShowDisconnectDialog,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Disconnect Stripe Account?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Are you sure you want to disconnect your Stripe account? This will:" })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm",
							children: "• Delete your Stripe Express account"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm",
							children: "• Stop you from receiving new payments"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm",
							children: "• Remove all payment configuration"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-destructive",
							children: "This action cannot be undone."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						className: "flex-1",
						onClick: () => setShowDisconnectDialog(false),
						disabled: disconnectMutation.isPending,
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "destructive",
						className: "flex-1",
						onClick: () => disconnectMutation.mutate(),
						disabled: disconnectMutation.isPending,
						children: disconnectMutation.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }), "Disconnecting..."] }) : "Disconnect"
					})]
				})
			] })
		})
	] });
}
function RouteComponent() {
	const { slug } = Route.useParams();
	const { tab, stripe_onboarding } = Route.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VendorSettingsTemplate, {
		shopSlug: slug,
		defaultTab: tab,
		stripeOnboardingStatus: stripe_onboarding
	});
}
//#endregion
export { RouteComponent as component };
