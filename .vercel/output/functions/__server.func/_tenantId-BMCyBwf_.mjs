import { o as __toESM } from "./_runtime.mjs";
import { n as formatCurrency } from "./_ssr/utils-Pgq5HWQm.mjs";
import { w as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { t as Button } from "./_ssr/button-DQSToWRX.mjs";
import { p as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { o as useQuery } from "./_libs/tanstack__react-query.mjs";
import { B as Package, Et as CircleCheck, F as Percent, Jt as ArrowLeft, St as CreditCard, Z as LoaderCircle, r as Users, x as ShoppingBag, yt as Ellipsis } from "./_libs/lucide-react.mjs";
import { t as Input } from "./_ssr/input-BP4N0xFb.mjs";
import { a as DropdownMenuLabel, c as DropdownMenuSeparator, f as DropdownMenuTrigger, i as DropdownMenuItem, r as DropdownMenuContent, t as DropdownMenu$1 } from "./_ssr/dropdown-menu-uJlchZ0e.mjs";
import { n as AvatarFallback, r as AvatarImage, t as Avatar$1 } from "./_ssr/avatar-BfSlRT72.mjs";
import { t as Label$1 } from "./_ssr/label-CqfikwJF.mjs";
import { d as format } from "./_libs/date-fns.mjs";
import { a as CardHeader, n as CardContent, o as CardTitle, r as CardDescription, t as Card } from "./_ssr/card-BDvQuHpQ.mjs";
import { t as Badge } from "./_ssr/badge-NA1wPZ4a.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs$1 } from "./_ssr/tabs-DkMjjh1r.mjs";
import { t as Route } from "./_tenantId-BNLhUn5y.mjs";
import { r as useAdminShops } from "./_ssr/use-admin-shops-ClDB9K08.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_tenantId-BMCyBwf_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function TenantHeader({ tenant }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "icon",
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/admin/tenants",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" })
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "flex items-center gap-3 font-bold text-3xl tracking-tight",
				children: [tenant.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: tenant.status === "active" ? "default" : tenant.status === "suspended" ? "destructive" : "secondary",
					className: "capitalize",
					children: tenant.status
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: tenant.slug }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Joined ", format(tenant.joinedDate, "MMM d, yyyy")] })
				]
			})] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				children: "Edit Store"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-4" })
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
				align: "end",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, { children: "Actions" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, { children: "View as Vendor" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
						className: "text-destructive",
						children: "Suspend Tenant"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
						className: "text-destructive",
						children: "Delete Tenant"
					})
				]
			})] })]
		})]
	});
}
function TenantStateOverview({ tenant }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 md:grid-cols-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
				className: "flex flex-row items-center justify-between space-y-0 pb-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					className: "font-medium text-sm",
					children: "Total Revenue"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "size-4 text-muted-foreground" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-bold text-2xl",
				children: tenant.stats.revenue
			}) })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
				className: "flex flex-row items-center justify-between space-y-0 pb-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					className: "font-medium text-sm",
					children: "Orders"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-4 text-muted-foreground" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-bold text-2xl",
				children: tenant.stats.orders
			}) })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
				className: "flex flex-row items-center justify-between space-y-0 pb-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					className: "font-medium text-sm",
					children: "Products"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "size-4 text-muted-foreground" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-bold text-2xl",
				children: tenant.stats.products
			}) })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
				className: "flex flex-row items-center justify-between space-y-0 pb-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					className: "font-medium text-sm",
					children: "Customers"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-4 text-muted-foreground" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-bold text-2xl",
				children: tenant.stats.customers
			}) })] })
		]
	});
}
function TenantTabs({ tenant }) {
	const { updateCommission, isUpdatingCommission } = useAdminShops();
	const baseCommissionRate = tenant.commissionRate ?? "10.00";
	const [commissionRate, setCommissionRate] = (0, import_react.useState)(baseCommissionRate);
	const [hasChanges, setHasChanges] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setCommissionRate(baseCommissionRate);
		setHasChanges(false);
	}, [baseCommissionRate]);
	const handleCommissionChange = (value) => {
		setCommissionRate(value);
		setHasChanges(value !== baseCommissionRate);
	};
	const handleSaveCommission = async () => {
		if (tenant.vendorId && hasChanges) {
			await updateCommission({
				vendorId: tenant.vendorId,
				commissionRate
			});
			setHasChanges(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs$1, {
		defaultValue: "overview",
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
					value: "overview",
					children: "Overview"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
					value: "commission",
					children: "Commission"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
					value: "owner",
					children: "Owner Info"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
					value: "subscription",
					children: "Subscription"
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
				value: "overview",
				className: "space-y-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Store Details" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Basic information about the store" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
					className: "space-y-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-muted-foreground text-sm",
							children: "Description"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: tenant.description })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-muted-foreground text-sm",
							children: "Store URL"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "cursor-pointer text-blue-600 underline",
							children: ["https://shopstack.com/", tenant.slug]
						})] })]
					})
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
				value: "commission",
				className: "space-y-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Percent, { className: "size-5" }), "Commission Settings"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Set the platform fee for this vendor. This percentage will be deducted from each sale as an application fee." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$1, {
									htmlFor: "commissionRate",
									children: "Commission Rate (%)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "commissionRate",
										type: "number",
										min: "0",
										max: "100",
										step: "0.01",
										value: commissionRate,
										onChange: (e) => handleCommissionChange(e.target.value),
										className: "max-w-50"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "%"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-muted-foreground text-xs",
									children: "Enter a value between 0 and 100"
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$1, { children: "Current Effective Rate" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-bold text-2xl",
									children: [baseCommissionRate, "%"]
								})
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: handleSaveCommission,
								disabled: !hasChanges || isUpdatingCommission || !tenant.vendorId,
								children: isUpdatingCommission ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }), "Saving..."] }) : "Save Commission Rate"
							}), hasChanges && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground text-sm",
								children: "Unsaved changes"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "mb-4 font-medium",
							children: "Stripe Connect Status"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-muted-foreground text-sm",
									children: "Connected Account"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "flex items-center gap-2",
									children: tenant.stripeConnectedAccountId ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-green-600" }), "Connected"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Not connected"
									})
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-muted-foreground text-sm",
									children: "Onboarding Status"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "flex items-center gap-2",
									children: tenant.stripeOnboardingComplete ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-green-600" }), "Complete"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Pending"
									})
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-muted-foreground text-sm",
									children: "Charges Enabled"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "flex items-center gap-2",
									children: tenant.stripeChargesEnabled ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-green-600" }), "Yes"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "No"
									})
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-muted-foreground text-sm",
									children: "Payouts Enabled"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "flex items-center gap-2",
									children: tenant.stripePayoutsEnabled ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-green-600" }), "Yes"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "No"
									})
								})] })
							]
						})]
					})]
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
				value: "owner",
				className: "space-y-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Owner Information" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Details about the account owner" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Avatar$1, {
						className: "h-16 w-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, {
							src: tenant.owner.avatar,
							alt: tenant.owner.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, { children: tenant.owner.name.substring(0, 2).toUpperCase() })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-medium text-lg",
						children: tenant.owner.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground",
						children: tenant.owner.email
					})] })]
				}) })] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
				value: "subscription",
				className: "space-y-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Current Plan" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Subscription details and billing" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "font-medium text-lg capitalize",
						children: [tenant.plan, " Plan"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground",
						children: "Billed monthly"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						children: "Manage Subscription"
					})]
				}) })] })
			})
		]
	});
}
function AdminTenantDetailsTemplate({ tenant }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TenantHeader, { tenant }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TenantStateOverview, { tenant }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TenantTabs, { tenant })
		]
	});
}
function RouteComponent() {
	const { tenantId } = Route.useParams();
	const { adminShopByIdQueryOptions } = useAdminShops();
	const { data, isLoading, isError, error } = useQuery(adminShopByIdQueryOptions(tenantId));
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center justify-center py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-8 animate-spin text-muted-foreground" })
	});
	if (isError) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center py-24 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-destructive",
			children: "Failed to load tenant details"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground text-sm",
			children: error?.message || "Please try again later"
		})]
	});
	const shop = data?.shop;
	if (!shop) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-col items-center justify-center py-24 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground",
			children: "Tenant not found"
		})
	});
	const revenueValue = Number(shop.monthlyRevenue ?? 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminTenantDetailsTemplate, { tenant: {
		id: shop.id,
		name: shop.name,
		slug: shop.slug,
		description: shop.description ?? "",
		owner: {
			name: shop.ownerName ?? "Unknown",
			email: shop.ownerEmail ?? "Unknown",
			avatar: shop.ownerImage ?? void 0
		},
		vendorId: shop.vendorId,
		commissionRate: shop.commissionRate ?? "10.00",
		stripeConnectedAccountId: shop.stripeConnectedAccountId ?? null,
		stripeOnboardingComplete: shop.stripeOnboardingComplete ?? false,
		stripeChargesEnabled: shop.stripeChargesEnabled ?? false,
		stripePayoutsEnabled: shop.stripePayoutsEnabled ?? false,
		plan: "free",
		status: shop.status ?? "pending",
		joinedDate: shop.createdAt,
		stats: {
			revenue: formatCurrency(Number.isNaN(revenueValue) ? 0 : revenueValue),
			orders: shop.totalOrders ?? 0,
			products: shop.totalProducts ?? 0,
			customers: shop.customerCount ?? 0
		}
	} });
}
//#endregion
export { RouteComponent as component };
