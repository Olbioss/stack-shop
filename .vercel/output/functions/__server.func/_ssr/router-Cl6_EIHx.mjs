import { o as __toESM } from "../_runtime.mjs";
import { f as inArray, s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { s as vendors } from "./shop-schema-C6uNILQs.mjs";
import { c as db, f as orders, p as payments } from "./db-DORSFQFR.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { t as Skeleton } from "./skeleton-CLsJI6lr.mjs";
import { E as rootRouteId, _ as useRouter, d as createFileRoute, f as createRootRouteWithContext, g as useMatch, i as HeadContent, p as Link, r as Scripts, s as createRouter, u as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as storeProductsInfiniteQueryOptions } from "./use-store-product-C0VjBbOQ.mjs";
import { t as Body } from "../_libs/react-email__body.mjs";
import { t as Column } from "../_libs/react-email__column.mjs";
import { t as Container } from "../_libs/react-email__container.mjs";
import { t as Head } from "../_libs/react-email__head.mjs";
import { t as Heading } from "../_libs/react-email__heading.mjs";
import { t as Hr } from "../_libs/react-email__hr.mjs";
import { t as Html } from "../_libs/react-email__html.mjs";
import { t as Img } from "../_libs/react-email__img.mjs";
import { t as Link$1 } from "../_libs/react-email__link.mjs";
import { t as Preview } from "../_libs/react-email__preview.mjs";
import { t as Row } from "../_libs/react-email__row.mjs";
import { t as Section } from "../_libs/react-email__section.mjs";
import { t as Text } from "../_libs/react-email__text.mjs";
import { n as sendEmail, t as auth } from "./auth-DHeFNCFg.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { A as RotateCcw, At as ChevronUp, M as RefreshCcw, Nt as ChevronDown, Ot as CircleAlert, at as House, ht as FileQuestionMark } from "../_libs/lucide-react.mjs";
import { t as ScrollArea$1 } from "./scroll-area-CZTHPdUq.mjs";
import { t as ThemeProvider } from "./theme-provider-CkZ48z6K.mjs";
import { t as authMiddleware } from "./auth-BM1BErpv.mjs";
import { i as vendorShopsQueryOptions } from "./use-shops-Cbmwju82.mjs";
import { t as Route$39 } from "../_orderId-CleNnDms.mjs";
import { a as CardHeader, i as CardFooter, n as CardContent, o as CardTitle, t as Card } from "./card-BDvQuHpQ.mjs";
import { t as adminMiddleware } from "./admin-CYCFP3zk.mjs";
import { t as Route$40 } from "../_orderId-CqFxar2X.mjs";
import { t as Route$41 } from "../_productId-UVfxBhZ7.mjs";
import { n as featuredCategoriesQueryOptions, r as storeCategoriesQueryOptions, t as categoryTreeQueryOptions } from "./use-store-categories-BiYNy2a5.mjs";
import { t as Route$42 } from "../_slug-DE0XW6wD.mjs";
import { t as Route$43 } from "../_slug-BDaPTqMn.mjs";
import { n as storeShopsInfiniteQueryOptions } from "./use-store-shops-cZQ3-wBf.mjs";
import { t as Route$44 } from "../_slug-ChV4MggD.mjs";
import { t as Route$45 } from "../_slug-BOYyAY90.mjs";
import { t as Route$46 } from "../_tenantId-BNLhUn5y.mjs";
import { t as PageSkeleton } from "./page-skeleton-DTaB0ooE.mjs";
import { t as Route$47 } from "./attributes-_4Me4R-p.mjs";
import { t as Route$48 } from "./brands-Bi-pkL3N.mjs";
import { t as Route$49 } from "./categories-Bemc7Z2s.mjs";
import { n as CollapsibleContent, r as CollapsibleTrigger, t as Collapsible$1 } from "./collapsible-CrHAV_WW.mjs";
import { n as constructWebhookEvent } from "./connect-DkFD0Nte.mjs";
import { t as Route$50 } from "./coupons-C_cid9Xe.mjs";
import { t as Route$51 } from "./notifications-yWeTkm-t.mjs";
import { t as sendOrderConfirmationEmailForOrderId } from "./order-confirmation-DYJzsIk4.mjs";
import { t as createOrderNotification } from "./vendor-BrxIDr4W.mjs";
import { t as Route$52 } from "./order-confirmation-Bw5A2DJF.mjs";
import { t as Route$53 } from "./orders-FlbOEjCu.mjs";
import { t as storeBrandsQueryOptions } from "./use-store-brands-Snb0r2-j.mjs";
import { t as Route$54 } from "./products-Bw_UCMKS.mjs";
import { t as Route$55 } from "./reviews-Lz5a5lR3.mjs";
import { t as Route$56 } from "./sign-in-6qkkRgch.mjs";
import { t as Route$57 } from "./track-order-D9_UtfCb.mjs";
import { t as Route$58 } from "./transactions-BA2Ohaa3.mjs";
import { t as Route$59 } from "./taxes-BYrMgwCj.mjs";
import { t as Route$60 } from "./tags-Ck8CTll7.mjs";
import { t as Route$61 } from "./shipping-DTHWOjNE.mjs";
import { t as Route$62 } from "./settings-knca8S4N.mjs";
import { t as setupRouterSsrQueryIntegration } from "../_libs/@tanstack/react-router-ssr-query+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Cl6_EIHx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DefaultErrorComponent({ error }) {
	const router = useRouter();
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const isRoot = useMatch({
		strict: false,
		select: (state) => state.id === rootRouteId
	});
	const errorMessage = Error instanceof Error ? error.message : JSON.stringify(error);
	const stackTrace = error instanceof Error ? error.stack : null;
	console.error("DefaultErrorBoundary caught error:", error);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "@container flex min-h-[50vh] min-w-0 flex-1 flex-col items-center justify-center p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "w-full max-w-md border-border/40 shadow-xl backdrop-blur-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
					className: "flex flex-col items-center gap-2 pb-2 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-full bg-destructive/10 p-3 text-destructive ring-1 ring-destructive/20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
							className: "font-bold text-2xl",
							children: "Something went wrong"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-sm",
							children: "We encountered an unexpected error. Please try again or return to the previous page."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
					className: "flex flex-col gap-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col gap-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Collapsible$1, {
							open: isOpen,
							onOpenChange: setIsOpen,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "ghost",
									size: "sm",
									className: "flex w-full items-center justify-between font-normal text-muted-foreground text-xs hover:bg-muted/50",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Error Details" }), isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "size-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-3" })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 rounded-md bg-muted/50 p-3 font-mono text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "wrap-break-word font-semibold text-destructive",
									children: errorMessage
								}), stackTrace && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea$1, {
									className: "mt-2 h-37.5 w-full rounded border bg-background/50 p-2 text-muted-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
										className: "whitespace-pre-wrap break-all text-[10px] leading-tight opacity-70",
										children: stackTrace
									})
								})]
							}) })]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardFooter, {
					className: "flex flex-col gap-2 @xl:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => router.invalidate(),
						className: "w-full @xl:w-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCcw, { className: "size-4" }), "Try Again"]
					}), isRoot ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						asChild: true,
						className: "w-full gap-2 @xl:flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "size-4" }), "Home"]
						})
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: () => window.history.back(),
						className: "w-full gap-2 @xl:flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), "Go Back"]
					})]
				})
			]
		})
	});
}
function NotFound({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-[50vh] min-w-0 flex-1 flex-col items-center justify-center p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "w-full max-w-md border-border/40 shadow-xl backdrop-blur-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
					className: "flex flex-col items-center gap-2 pb-2 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-full bg-muted p-4 ring-1 ring-muted-foreground/20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileQuestionMark, { className: "size-8 text-muted-foreground" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
							className: "font-bold text-2xl",
							children: "Page Not Found"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-muted-foreground text-sm",
							children: children || /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The page you are looking for doesn't exist or has been moved." })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
					className: "flex justify-center pb-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "select-none font-black font-mono text-9xl text-muted-foreground/20",
						children: "404"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardFooter, {
					className: "flex flex-col gap-2 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						onClick: () => window.history.back(),
						className: "w-full gap-2 sm:flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), "Go Back"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "w-full gap-2 sm:flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "size-4" }), "Home"]
						})
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 text-muted-foreground text-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "transition-colors hover:text-foreground hover:underline",
				children: "Return to Home Page"
			})
		})]
	});
}
function getContext() {
	return { queryClient: new QueryClient() };
}
var styles_default = "/assets/styles-BS19cF2l.css";
var Route$38 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "ShopStack Multi-tenant E-commerce" }
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}]
	}),
	shellComponent: RootDocument
});
function RootDocument({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ThemeProvider, {
			defaultTheme: "system",
			storageKey: "theme",
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				richColors: true,
				closeButton: true,
				position: "top-right",
				theme: "system"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
var $$splitComponentImporter$35 = () => import("../_layout-CtG6lj-w.mjs");
var Route$37 = createFileRoute("/(vendor)/_layout")({
	server: { middleware: [authMiddleware] },
	component: lazyRouteComponent($$splitComponentImporter$35, "component")
});
var $$splitComponentImporter$34 = () => import("../_layout-BG4a7LL9.mjs");
var Route$36 = createFileRoute("/(store)/_layout")({ component: lazyRouteComponent($$splitComponentImporter$34, "component") });
var $$splitComponentImporter$33 = () => import("./vendor-sign-up-BYdQuVCD.mjs");
var Route$35 = createFileRoute("/(auth)/vendor-sign-up")({ component: lazyRouteComponent($$splitComponentImporter$33, "component") });
var $$splitComponentImporter$32 = () => import("./sign-up-pOkB94CA.mjs");
var Route$34 = createFileRoute("/(auth)/sign-up")({ component: lazyRouteComponent($$splitComponentImporter$32, "component") });
var $$splitComponentImporter$31 = () => import("./forbidden-DrWIKjZ5.mjs");
var Route$33 = createFileRoute("/(admin)/forbidden")({ component: lazyRouteComponent($$splitComponentImporter$31, "component") });
var $$splitComponentImporter$30 = () => import("./admin-TEDnEpR6.mjs");
var Route$32 = createFileRoute("/(admin)/admin")({
	server: { middleware: [adminMiddleware] },
	component: lazyRouteComponent($$splitComponentImporter$30, "component")
});
var $$splitComponentImporter$29 = () => import("../_layout-B3Q_pAlp.mjs");
var Route$31 = createFileRoute("/(store)/_layout/")({ component: lazyRouteComponent($$splitComponentImporter$29, "component") });
var $$splitComponentImporter$28 = () => import("./admin-CkFmfVab.mjs");
var Route$30 = createFileRoute("/(admin)/admin/")({ component: lazyRouteComponent($$splitComponentImporter$28, "component") });
function VendorNewOrderEmail({ orderNumber = "ORD-ABC123", customerName = "John Doe", customerEmail = "john@example.com", orderDate = (/* @__PURE__ */ new Date()).toLocaleDateString(), items = [{
	name: "Sample Product",
	quantity: 1,
	price: 29.99,
	image: null
}], subtotal = 29.99, tax = 1.5, shipping = 0, total = 31.49, shippingAddress = {
	street: "123 Main St",
	city: "San Francisco",
	state: "CA",
	zip: "94102",
	country: "USA"
}, shopName = "My Shop", dashboardLink = "#" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Html, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Preview, { children: [
			"🎉 New order #",
			orderNumber,
			" from ",
			customerName,
			" - $",
			total.toFixed(2)
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {
			style: main,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				style: container,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
						style: headerSection,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
							style: logo,
							children: "Shop Stack"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
							style: headerSubtext,
							children: "Vendor Dashboard"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						style: alertBanner,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
							style: alertText,
							children: "🎉 New Order Received!"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
						style: content,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
								as: "h1",
								style: h1,
								children: "You have a new order!"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
								style: heroText,
								children: [
									"Great news! ",
									shopName,
									" just received a new order."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
								style: orderBox,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Column, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
										style: orderLabel,
										children: "Order Number"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
										style: orderValue,
										children: orderNumber
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Column, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
										style: orderLabel,
										children: "Order Total"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
										style: orderValueHighlight,
										children: ["$", total.toFixed(2)]
									})] })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hr, { style: hrBox }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Column, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
										style: orderLabel,
										children: "Customer"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
										style: orderValue,
										children: customerName
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Column, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
										style: orderLabel,
										children: "Date"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
										style: orderValue,
										children: orderDate
									})] })] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
								as: "h2",
								style: h2,
								children: "Customer Details"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
								style: infoBox,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
										style: infoLabel,
										children: "Name"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
										style: infoValue,
										children: customerName
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
										style: infoLabel,
										children: "Email"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
										style: infoValue,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
											href: `mailto:${customerEmail}`,
											style: link,
											children: customerEmail
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hr, { style: hr }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Heading, {
								as: "h2",
								style: h2,
								children: [
									"Order Items (",
									items.length,
									")"
								]
							}),
							items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
								style: itemRow,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
										style: itemImageCol,
										children: item.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Img, {
											src: item.image,
											alt: item.name,
											width: 56,
											height: 56,
											style: itemImage
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: itemImagePlaceholder })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Column, {
										style: itemDetailsCol,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
											style: itemName,
											children: item.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
											style: itemQty,
											children: [
												"$",
												item.price.toFixed(2),
												" × ",
												item.quantity
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
										style: itemPriceCol,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
											style: itemPrice,
											children: ["$", (item.price * item.quantity).toFixed(2)]
										})
									})
								] })
							}, index)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hr, { style: hr }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
								style: summarySection,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
										style: summaryLabelCol,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
											style: summaryLabel,
											children: "Subtotal"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
										style: summaryValueCol,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
											style: summaryValue,
											children: ["$", subtotal.toFixed(2)]
										})
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
										style: summaryLabelCol,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
											style: summaryLabel,
											children: "Tax"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
										style: summaryValueCol,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
											style: summaryValue,
											children: ["$", tax.toFixed(2)]
										})
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
										style: summaryLabelCol,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
											style: summaryLabel,
											children: "Shipping"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
										style: summaryValueCol,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
											style: summaryValue,
											children: shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`
										})
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hr, { style: hrLight }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
										style: summaryLabelCol,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
											style: totalLabel,
											children: "Order Total"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
										style: summaryValueCol,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
											style: totalValue,
											children: ["$", total.toFixed(2)]
										})
									})] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hr, { style: hr }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
								as: "h2",
								style: h2,
								children: "Ship To"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
								style: infoBox,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
									style: addressText,
									children: [
										customerName,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										shippingAddress.street,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										shippingAddress.city,
										", ",
										shippingAddress.state,
										" ",
										shippingAddress.zip,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										shippingAddress.country
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
								style: ctaSection,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
									href: dashboardLink,
									style: button,
									children: "View Order in Dashboard"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
								style: tipText,
								children: "💡 Tip: Process orders quickly to maintain a high seller rating!"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
						style: footer,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
							style: footerText,
							children: "This notification was sent because you have a shop on Shop Stack."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
							style: footerCopyright,
							children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" Shop Stack. All rights reserved."
							]
						})]
					})
				]
			})
		})
	] });
}
var main = {
	backgroundColor: "#f6f9fc",
	fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Ubuntu, sans-serif"
};
var container = {
	backgroundColor: "#ffffff",
	margin: "0 auto",
	padding: "0",
	marginBottom: "64px",
	maxWidth: "600px",
	borderRadius: "8px",
	overflow: "hidden",
	boxShadow: "0 4px 6px rgba(0, 0, 0, 0.07)"
};
var headerSection = {
	backgroundColor: "#18181b",
	padding: "24px 40px",
	textAlign: "center"
};
var logo = {
	color: "#ffffff",
	fontSize: "24px",
	fontWeight: "700",
	margin: "0",
	letterSpacing: "-0.5px"
};
var headerSubtext = {
	color: "#a1a1aa",
	fontSize: "12px",
	fontWeight: "500",
	textTransform: "uppercase",
	letterSpacing: "1px",
	margin: "8px 0 0 0"
};
var alertBanner = {
	backgroundColor: "#22c55e",
	padding: "16px 40px",
	textAlign: "center"
};
var alertText = {
	color: "#ffffff",
	fontSize: "16px",
	fontWeight: "600",
	margin: "0"
};
var content = { padding: "32px 40px" };
var h1 = {
	color: "#18181b",
	fontSize: "24px",
	fontWeight: "700",
	margin: "0 0 8px 0",
	lineHeight: "1.3"
};
var h2 = {
	color: "#18181b",
	fontSize: "16px",
	fontWeight: "600",
	margin: "20px 0 12px 0"
};
var heroText = {
	color: "#52525b",
	fontSize: "15px",
	lineHeight: "24px",
	margin: "0 0 24px 0"
};
var orderBox = {
	backgroundColor: "#f4f4f5",
	borderRadius: "8px",
	padding: "20px 24px",
	margin: "0 0 24px 0"
};
var orderLabel = {
	color: "#71717a",
	fontSize: "11px",
	fontWeight: "500",
	textTransform: "uppercase",
	letterSpacing: "0.5px",
	margin: "0 0 4px 0"
};
var orderValue = {
	color: "#18181b",
	fontSize: "15px",
	fontWeight: "600",
	margin: "0"
};
var orderValueHighlight = {
	color: "#22c55e",
	fontSize: "18px",
	fontWeight: "700",
	margin: "0"
};
var hrBox = {
	borderColor: "#d4d4d8",
	margin: "16px 0"
};
var infoBox = {
	backgroundColor: "#fafafa",
	borderRadius: "6px",
	padding: "16px 20px",
	margin: "0"
};
var infoLabel = {
	color: "#71717a",
	fontSize: "11px",
	fontWeight: "500",
	textTransform: "uppercase",
	letterSpacing: "0.5px",
	margin: "0 0 2px 0"
};
var infoValue = {
	color: "#18181b",
	fontSize: "14px",
	margin: "0 0 12px 0"
};
var hr = {
	borderColor: "#e4e4e7",
	margin: "24px 0"
};
var hrLight = {
	borderColor: "#e4e4e7",
	margin: "12px 0"
};
var itemRow = { marginBottom: "12px" };
var itemImageCol = {
	width: "72px",
	verticalAlign: "top"
};
var itemImage = {
	borderRadius: "6px",
	objectFit: "cover"
};
var itemImagePlaceholder = {
	width: "56px",
	height: "56px",
	backgroundColor: "#e4e4e7",
	borderRadius: "6px"
};
var itemDetailsCol = {
	verticalAlign: "top",
	paddingLeft: "12px"
};
var itemName = {
	color: "#18181b",
	fontSize: "14px",
	fontWeight: "500",
	margin: "0 0 4px 0"
};
var itemQty = {
	color: "#71717a",
	fontSize: "13px",
	margin: "0"
};
var itemPriceCol = {
	textAlign: "right",
	verticalAlign: "top"
};
var itemPrice = {
	color: "#18181b",
	fontSize: "14px",
	fontWeight: "600",
	margin: "0"
};
var summarySection = { padding: "0" };
var summaryLabelCol = { width: "70%" };
var summaryValueCol = {
	width: "30%",
	textAlign: "right"
};
var summaryLabel = {
	color: "#71717a",
	fontSize: "14px",
	margin: "4px 0"
};
var summaryValue = {
	color: "#18181b",
	fontSize: "14px",
	margin: "4px 0"
};
var totalLabel = {
	color: "#18181b",
	fontSize: "16px",
	fontWeight: "600",
	margin: "4px 0"
};
var totalValue = {
	color: "#22c55e",
	fontSize: "20px",
	fontWeight: "700",
	margin: "4px 0"
};
var addressText = {
	color: "#52525b",
	fontSize: "14px",
	lineHeight: "22px",
	margin: "0"
};
var ctaSection = {
	textAlign: "center",
	marginTop: "28px"
};
var button = {
	backgroundColor: "#18181b",
	borderRadius: "8px",
	color: "#ffffff",
	display: "inline-block",
	fontSize: "14px",
	fontWeight: "600",
	padding: "14px 28px",
	textDecoration: "none"
};
var tipText = {
	backgroundColor: "#fef3c7",
	borderRadius: "6px",
	color: "#92400e",
	fontSize: "13px",
	padding: "12px 16px",
	marginTop: "24px",
	textAlign: "center"
};
var footer = {
	backgroundColor: "#fafafa",
	borderTop: "1px solid #e4e4e7",
	padding: "20px 40px",
	textAlign: "center"
};
var footerText = {
	color: "#71717a",
	fontSize: "12px",
	lineHeight: "20px",
	margin: "0 0 8px 0"
};
var footerCopyright = {
	color: "#a1a1aa",
	fontSize: "11px",
	margin: "0"
};
var link = {
	color: "#18181b",
	textDecoration: "underline"
};
var webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
var Route$29 = createFileRoute("/api/webhooks/stripe")({ server: { handlers: { POST: async ({ request }) => {
	if (!webhookSecret) {
		console.error("STRIPE_WEBHOOK_SECRET is not set");
		return new Response(JSON.stringify({ error: "Webhook secret not configured" }), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
	}
	const signature = request.headers.get("stripe-signature");
	if (!signature) return new Response(JSON.stringify({ error: "No signature provided" }), {
		status: 400,
		headers: { "Content-Type": "application/json" }
	});
	const body = await request.text();
	let event;
	try {
		event = constructWebhookEvent(body, signature, webhookSecret);
	} catch (err) {
		console.error("Webhook signature verification failed:", err);
		return new Response(JSON.stringify({ error: "Invalid signature" }), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
	}
	try {
		switch (event.type) {
			case "account.updated": {
				const account = event.data.object;
				await db.update(vendors).set({
					stripeOnboardingComplete: account.details_submitted,
					stripeChargesEnabled: account.charges_enabled,
					stripePayoutsEnabled: account.payouts_enabled
				}).where(eq(vendors.stripeConnectedAccountId, account.id));
				console.log(`Updated vendor status for Stripe account: ${account.id}`);
				break;
			}
			case "payment_intent.succeeded": {
				const paymentIntent = event.data.object;
				console.log(`Payment succeeded: ${paymentIntent.id}`);
				const orderIdsStr = paymentIntent.metadata?.orderIds;
				let orderIdList = orderIdsStr ? orderIdsStr.split(",") : [];
				if (orderIdList.length === 0) orderIdList = (await db.select({ orderId: payments.orderId }).from(payments).where(eq(payments.stripePaymentIntentId, paymentIntent.id))).map((row) => row.orderId);
				if (orderIdList.length === 0) {
					console.log("No orders linked to payment intent");
					break;
				}
				await db.update(orders).set({
					status: "confirmed",
					paymentStatus: "paid"
				}).where(inArray(orders.id, orderIdList));
				await db.update(payments).set({
					status: "succeeded",
					transactionId: paymentIntent.id
				}).where(inArray(payments.orderId, orderIdList));
				const ordersList = await db.query.orders.findMany({
					where: inArray(orders.id, orderIdList),
					with: {
						items: true,
						shop: { with: { vendor: { with: { user: true } } } }
					}
				});
				if (ordersList.length === 0) {
					console.log("No orders found for payment intent");
					break;
				}
				for (const order of ordersList) try {
					const customerEmail = order.shippingAddress?.email || order.guestEmail;
					const customerName = order.shippingAddress ? `${order.shippingAddress.firstName} ${order.shippingAddress.lastName}` : "Customer";
					const emailItems = order.items.map((item) => ({
						name: item.productName,
						quantity: item.quantity,
						price: parseFloat(item.unitPrice),
						image: item.productImage
					}));
					const shippingAddress = order.shippingAddress || {
						street: "",
						city: "",
						state: "",
						zip: "",
						country: ""
					};
					const customerEmailResult = await sendOrderConfirmationEmailForOrderId(order.id);
					console.log("Order confirmation email result:", {
						orderNumber: order.orderNumber,
						orderId: order.id,
						customerEmail,
						result: customerEmailResult
					});
					const vendorEmail = order.shop?.vendor?.contactEmail || order.shop?.vendor?.user?.email;
					if (vendorEmail && order.shop?.enableNotifications !== false) try {
						await sendEmail({
							to: vendorEmail,
							subject: `🎉 New Order ${order.orderNumber} - $${parseFloat(order.totalAmount).toFixed(2)}`,
							body: VendorNewOrderEmail({
								orderNumber: order.orderNumber,
								customerName,
								customerEmail: customerEmail || "N/A",
								orderDate: order.createdAt.toLocaleDateString("en-US", {
									year: "numeric",
									month: "long",
									day: "numeric"
								}),
								items: emailItems,
								subtotal: parseFloat(order.subtotal),
								tax: parseFloat(order.taxAmount),
								shipping: parseFloat(order.shippingAmount),
								total: parseFloat(order.totalAmount),
								shippingAddress,
								shopName: order.shop?.name || "Your Shop",
								dashboardLink: `${process.env.VITE_APP_URL || "http://localhost:3000"}/shop/${order.shop?.slug}/orders/${order.id}`
							})
						});
						console.log(`Sent vendor notification email for order ${order.orderNumber} to ${vendorEmail}`);
					} catch (emailError) {
						console.error(`Failed to send vendor email for order ${order.orderNumber}:`, emailError);
					}
					if (order.shopId) try {
						await createOrderNotification({
							shopId: order.shopId,
							orderNumber: order.orderNumber,
							orderId: order.id,
							customerName,
							totalAmount: parseFloat(order.totalAmount),
							itemCount: order.items.length
						});
						console.log(`Created in-platform notification for order ${order.orderNumber}`);
					} catch (notifError) {
						console.error(`Failed to create notification for order ${order.orderNumber}:`, notifError);
					}
				} catch (orderError) {
					console.error(`Error processing order ${order.orderNumber}:`, orderError);
				}
				break;
			}
			default: console.log(`Unhandled event type: ${event.type}`);
		}
	} catch (handlerError) {
		console.error("Webhook handler error:", handlerError);
		return new Response(JSON.stringify({ error: "Webhook handler error" }), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
	}
	return new Response(JSON.stringify({ received: true }), {
		status: 200,
		headers: { "Content-Type": "application/json" }
	});
} } } });
var Route$28 = createFileRoute("/api/auth/$")({ server: { handlers: {
	GET: async ({ request }) => {
		return await auth.handler(request);
	},
	POST: async ({ request }) => {
		return await auth.handler(request);
	}
} } });
function ShopCardSkeleton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-32 w-full rounded-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-6 w-3/4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-20" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-6 w-16" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-3 w-16" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-3 w-12" })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
				className: "space-y-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-3 gap-2",
					children: [
						1,
						2,
						3
					].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1 rounded-lg bg-muted p-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mx-auto h-3 w-12" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mx-auto h-4 w-8" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mx-auto h-2 w-16" })
						]
					}, i))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardFooter, {
				className: "gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-9 flex-1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-9 flex-1" })]
			})
		]
	});
}
function MyShopsGridSkeleton({ count = 3 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: Array.from({ length: count }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopCardSkeleton, {}, i))
	});
}
function MyShopsPageSkeleton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-9 w-32" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-5 w-64" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-9 w-32" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MyShopsGridSkeleton, {})]
	});
}
var $$splitComponentImporter$27 = () => import("./my-shop-DskcqVjx.mjs");
var Route$27 = createFileRoute("/(vendor)/_layout/my-shop")({
	component: lazyRouteComponent($$splitComponentImporter$27, "component"),
	loader: async ({ context }) => {
		await context.queryClient.ensureQueryData(vendorShopsQueryOptions());
		return {};
	},
	pendingComponent: MyShopsPageSkeleton
});
function VendorStatCardSkeleton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
		className: "flex flex-row items-center justify-between space-y-0 pb-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-4" })]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mb-1 h-8 w-24" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-3 w-32" })] })] });
}
function VendorStatsGridSkeleton({ count = 4 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
		children: Array.from({ length: count }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VendorStatCardSkeleton, {}, i))
	});
}
function VendorChartCardSkeleton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-6 w-32" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-75 w-full" }) })] });
}
function VendorDashboardSkeleton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-9 w-48" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-5 w-64" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VendorStatsGridSkeleton, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2 lg:grid-cols-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "col-span-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VendorChartCardSkeleton, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "col-span-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VendorChartCardSkeleton, {})
				})]
			})
		]
	});
}
var $$splitComponentImporter$26 = () => import("./dashboard-CC_nC1e4.mjs");
var Route$26 = createFileRoute("/(vendor)/_layout/dashboard")({
	component: lazyRouteComponent($$splitComponentImporter$26, "component"),
	loader: async () => {
		await new Promise((resolve) => setTimeout(resolve, 1e3));
		return {};
	},
	pendingComponent: VendorDashboardSkeleton,
	pendingMs: 0
});
var $$splitComponentImporter$25 = () => import("./wishlist-UGGrZuue.mjs");
var Route$25 = createFileRoute("/(store)/_layout/wishlist")({
	server: { middleware: [authMiddleware] },
	component: lazyRouteComponent($$splitComponentImporter$25, "component")
});
var $$splitComponentImporter$24 = () => import("./profile-BHrb13IN.mjs");
var Route$24 = createFileRoute("/(store)/_layout/profile")({
	server: { middleware: [authMiddleware] },
	component: lazyRouteComponent($$splitComponentImporter$24, "component")
});
var $$splitComponentImporter$23 = () => import("./orders-DStVkLRF.mjs");
var Route$23 = createFileRoute("/(store)/_layout/orders")({
	server: { middleware: [authMiddleware] },
	component: lazyRouteComponent($$splitComponentImporter$23, "component")
});
var $$splitComponentImporter$22 = () => import("./order-tracking-DLLDtSmO.mjs");
var Route$22 = createFileRoute("/(store)/_layout/order-tracking")({ component: lazyRouteComponent($$splitComponentImporter$22, "component") });
var $$splitComponentImporter$21 = () => import("./my-reviews-BC6rWZZw.mjs");
var Route$21 = createFileRoute("/(store)/_layout/my-reviews")({
	server: { middleware: [authMiddleware] },
	component: lazyRouteComponent($$splitComponentImporter$21, "component")
});
var $$splitComponentImporter$20 = () => import("./checkout-CMdvoRxC.mjs");
var Route$20 = createFileRoute("/(store)/_layout/checkout")({ component: lazyRouteComponent($$splitComponentImporter$20, "component") });
var $$splitComponentImporter$19 = () => import("./cart-D9a7eTIf.mjs");
var Route$19 = createFileRoute("/(store)/_layout/cart")({ component: lazyRouteComponent($$splitComponentImporter$19, "component") });
var $$splitComponentImporter$18 = () => import("./users-CxOYp_ag.mjs");
var Route$18 = createFileRoute("/(admin)/admin/users")({ component: lazyRouteComponent($$splitComponentImporter$18, "component") });
var $$splitComponentImporter$17 = () => import("./transactions-0FSNC9Xg.mjs");
var Route$17 = createFileRoute("/(admin)/admin/transactions")({ component: lazyRouteComponent($$splitComponentImporter$17, "component") });
var $$splitComponentImporter$16 = () => import("./taxes-BgwNzNwB.mjs");
var Route$16 = createFileRoute("/(admin)/admin/taxes")({
	component: lazyRouteComponent($$splitComponentImporter$16, "component"),
	pendingComponent: PageSkeleton
});
var $$splitComponentImporter$15 = () => import("./tags-ns682LgW.mjs");
var Route$15 = createFileRoute("/(admin)/admin/tags")({
	component: lazyRouteComponent($$splitComponentImporter$15, "component"),
	pendingComponent: PageSkeleton
});
var $$splitComponentImporter$14 = () => import("./staff-mYEEUiTH.mjs");
var Route$14 = createFileRoute("/(admin)/admin/staff")({ component: lazyRouteComponent($$splitComponentImporter$14, "component") });
var $$splitComponentImporter$13 = () => import("./settings-BSvSc5Xi.mjs");
var Route$13 = createFileRoute("/(admin)/admin/settings")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
var $$splitComponentImporter$12 = () => import("./reviews-CYrA558o.mjs");
var Route$12 = createFileRoute("/(admin)/admin/reviews")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./products-G2ipsUxc.mjs");
var Route$11 = createFileRoute("/(admin)/admin/products")({
	component: lazyRouteComponent($$splitComponentImporter$11, "component"),
	pendingComponent: PageSkeleton
});
var $$splitComponentImporter$10 = () => import("./my-store-DwJ-yKS2.mjs");
var Route$10 = createFileRoute("/(admin)/admin/my-store")({
	component: lazyRouteComponent($$splitComponentImporter$10, "component"),
	loader: async ({ context }) => {
		await context.queryClient.ensureQueryData(vendorShopsQueryOptions());
		return {};
	},
	pendingComponent: MyShopsPageSkeleton
});
var $$splitComponentImporter$9 = () => import("./coupons-CAeU9RNt.mjs");
var Route$9 = createFileRoute("/(admin)/admin/coupons")({
	component: lazyRouteComponent($$splitComponentImporter$9, "component"),
	pendingComponent: PageSkeleton
});
var $$splitComponentImporter$8 = () => import("./categories-ace9q0aN.mjs");
var Route$8 = createFileRoute("/(admin)/admin/categories")({
	component: lazyRouteComponent($$splitComponentImporter$8, "component"),
	pendingComponent: PageSkeleton
});
var $$splitComponentImporter$7 = () => import("./brands-BZhmNj6b.mjs");
var Route$7 = createFileRoute("/(admin)/admin/brands")({
	component: lazyRouteComponent($$splitComponentImporter$7, "component"),
	pendingComponent: PageSkeleton
});
var $$splitComponentImporter$6 = () => import("./attributes-BpDYcX0H.mjs");
var Route$6 = createFileRoute("/(admin)/admin/attributes")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./store-DAd4-H2v.mjs");
var Route$5 = createFileRoute("/(store)/_layout/store/")({
	loader: async ({ context }) => {
		await context.queryClient.prefetchInfiniteQuery(storeShopsInfiniteQueryOptions({
			limit: 12,
			sortBy: "rating",
			sortDirection: "desc"
		}));
	},
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./product-BAcE-4CB.mjs");
var Route$4 = createFileRoute("/(store)/_layout/product/")({
	loader: async ({ context }) => {
		await Promise.all([
			context.queryClient.prefetchInfiniteQuery(storeProductsInfiniteQueryOptions()),
			context.queryClient.prefetchQuery(storeCategoriesQueryOptions({ limit: 50 })),
			context.queryClient.prefetchQuery(storeBrandsQueryOptions({ limit: 50 }))
		]);
		return {};
	},
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./category-fIdnBhTD.mjs");
var Route$3 = createFileRoute("/(store)/_layout/category/")({
	loader: async ({ context }) => {
		await Promise.all([
			context.queryClient.prefetchQuery(storeCategoriesQueryOptions({ limit: 50 })),
			context.queryClient.prefetchQuery(featuredCategoriesQueryOptions(8)),
			context.queryClient.prefetchQuery(categoryTreeQueryOptions())
		]);
		return {};
	},
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./tenants-CyQzUBmV.mjs");
var Route$2 = createFileRoute("/(admin)/admin/tenants/")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	pendingComponent: PageSkeleton
});
var $$splitComponentImporter$1 = () => import("./orders-CX657Mku.mjs");
var Route$1 = createFileRoute("/(admin)/admin/orders/")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	pendingComponent: PageSkeleton
});
var $$splitComponentImporter = () => import("./staff-CFUYVKKD.mjs");
var Route = createFileRoute("/(vendor)/shop/$slug/staff")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var vendorLayoutRoute = Route$37.update({
	id: "/(vendor)/_layout",
	getParentRoute: () => Route$38
});
var storeLayoutRoute = Route$36.update({
	id: "/(store)/_layout",
	getParentRoute: () => Route$38
});
var authVendorSignUpRoute = Route$35.update({
	id: "/(auth)/vendor-sign-up",
	path: "/vendor-sign-up",
	getParentRoute: () => Route$38
});
var authSignUpRoute = Route$34.update({
	id: "/(auth)/sign-up",
	path: "/sign-up",
	getParentRoute: () => Route$38
});
var authSignInRoute = Route$56.update({
	id: "/(auth)/sign-in",
	path: "/sign-in",
	getParentRoute: () => Route$38
});
var adminForbiddenRoute = Route$33.update({
	id: "/(admin)/forbidden",
	path: "/forbidden",
	getParentRoute: () => Route$38
});
var adminAdminRoute = Route$32.update({
	id: "/(admin)/admin",
	path: "/admin",
	getParentRoute: () => Route$38
});
var storeLayoutIndexRoute = Route$31.update({
	id: "/",
	path: "/",
	getParentRoute: () => storeLayoutRoute
});
var adminAdminIndexRoute = Route$30.update({
	id: "/",
	path: "/",
	getParentRoute: () => adminAdminRoute
});
var ApiWebhooksStripeRoute = Route$29.update({
	id: "/api/webhooks/stripe",
	path: "/api/webhooks/stripe",
	getParentRoute: () => Route$38
});
var ApiAuthSplatRoute = Route$28.update({
	id: "/api/auth/$",
	path: "/api/auth/$",
	getParentRoute: () => Route$38
});
var vendorShopSlugRoute = Route$45.update({
	id: "/(vendor)/shop/$slug",
	path: "/shop/$slug",
	getParentRoute: () => Route$38
});
var vendorLayoutMyShopRoute = Route$27.update({
	id: "/my-shop",
	path: "/my-shop",
	getParentRoute: () => vendorLayoutRoute
});
var vendorLayoutDashboardRoute = Route$26.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => vendorLayoutRoute
});
var storeLayoutWishlistRoute = Route$25.update({
	id: "/wishlist",
	path: "/wishlist",
	getParentRoute: () => storeLayoutRoute
});
var storeLayoutTrackOrderRoute = Route$57.update({
	id: "/track-order",
	path: "/track-order",
	getParentRoute: () => storeLayoutRoute
});
var storeLayoutProfileRoute = Route$24.update({
	id: "/profile",
	path: "/profile",
	getParentRoute: () => storeLayoutRoute
});
var storeLayoutOrdersRoute = Route$23.update({
	id: "/orders",
	path: "/orders",
	getParentRoute: () => storeLayoutRoute
});
var storeLayoutOrderTrackingRoute = Route$22.update({
	id: "/order-tracking",
	path: "/order-tracking",
	getParentRoute: () => storeLayoutRoute
});
var storeLayoutOrderConfirmationRoute = Route$52.update({
	id: "/order-confirmation",
	path: "/order-confirmation",
	getParentRoute: () => storeLayoutRoute
});
var storeLayoutMyReviewsRoute = Route$21.update({
	id: "/my-reviews",
	path: "/my-reviews",
	getParentRoute: () => storeLayoutRoute
});
var storeLayoutCheckoutRoute = Route$20.update({
	id: "/checkout",
	path: "/checkout",
	getParentRoute: () => storeLayoutRoute
});
var storeLayoutCartRoute = Route$19.update({
	id: "/cart",
	path: "/cart",
	getParentRoute: () => storeLayoutRoute
});
var adminAdminUsersRoute = Route$18.update({
	id: "/users",
	path: "/users",
	getParentRoute: () => adminAdminRoute
});
var adminAdminTransactionsRoute = Route$17.update({
	id: "/transactions",
	path: "/transactions",
	getParentRoute: () => adminAdminRoute
});
var adminAdminTaxesRoute = Route$16.update({
	id: "/taxes",
	path: "/taxes",
	getParentRoute: () => adminAdminRoute
});
var adminAdminTagsRoute = Route$15.update({
	id: "/tags",
	path: "/tags",
	getParentRoute: () => adminAdminRoute
});
var adminAdminStaffRoute = Route$14.update({
	id: "/staff",
	path: "/staff",
	getParentRoute: () => adminAdminRoute
});
var adminAdminSettingsRoute = Route$13.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => adminAdminRoute
});
var adminAdminReviewsRoute = Route$12.update({
	id: "/reviews",
	path: "/reviews",
	getParentRoute: () => adminAdminRoute
});
var adminAdminProductsRoute = Route$11.update({
	id: "/products",
	path: "/products",
	getParentRoute: () => adminAdminRoute
});
var adminAdminMyStoreRoute = Route$10.update({
	id: "/my-store",
	path: "/my-store",
	getParentRoute: () => adminAdminRoute
});
var adminAdminCouponsRoute = Route$9.update({
	id: "/coupons",
	path: "/coupons",
	getParentRoute: () => adminAdminRoute
});
var adminAdminCategoriesRoute = Route$8.update({
	id: "/categories",
	path: "/categories",
	getParentRoute: () => adminAdminRoute
});
var adminAdminBrandsRoute = Route$7.update({
	id: "/brands",
	path: "/brands",
	getParentRoute: () => adminAdminRoute
});
var adminAdminAttributesRoute = Route$6.update({
	id: "/attributes",
	path: "/attributes",
	getParentRoute: () => adminAdminRoute
});
var vendorShopSlugIndexRoute = Route$43.update({
	id: "/",
	path: "/",
	getParentRoute: () => vendorShopSlugRoute
});
var storeLayoutStoreIndexRoute = Route$5.update({
	id: "/store/",
	path: "/store/",
	getParentRoute: () => storeLayoutRoute
});
var storeLayoutProductIndexRoute = Route$4.update({
	id: "/product/",
	path: "/product/",
	getParentRoute: () => storeLayoutRoute
});
var storeLayoutCategoryIndexRoute = Route$3.update({
	id: "/category/",
	path: "/category/",
	getParentRoute: () => storeLayoutRoute
});
var adminAdminTenantsIndexRoute = Route$2.update({
	id: "/tenants/",
	path: "/tenants/",
	getParentRoute: () => adminAdminRoute
});
var adminAdminOrdersIndexRoute = Route$1.update({
	id: "/orders/",
	path: "/orders/",
	getParentRoute: () => adminAdminRoute
});
var vendorShopSlugTransactionsRoute = Route$58.update({
	id: "/transactions",
	path: "/transactions",
	getParentRoute: () => vendorShopSlugRoute
});
var vendorShopSlugTaxesRoute = Route$59.update({
	id: "/taxes",
	path: "/taxes",
	getParentRoute: () => vendorShopSlugRoute
});
var vendorShopSlugTagsRoute = Route$60.update({
	id: "/tags",
	path: "/tags",
	getParentRoute: () => vendorShopSlugRoute
});
var vendorShopSlugStaffRoute = Route.update({
	id: "/staff",
	path: "/staff",
	getParentRoute: () => vendorShopSlugRoute
});
var vendorShopSlugShippingRoute = Route$61.update({
	id: "/shipping",
	path: "/shipping",
	getParentRoute: () => vendorShopSlugRoute
});
var vendorShopSlugSettingsRoute = Route$62.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => vendorShopSlugRoute
});
var vendorShopSlugReviewsRoute = Route$55.update({
	id: "/reviews",
	path: "/reviews",
	getParentRoute: () => vendorShopSlugRoute
});
var vendorShopSlugNotificationsRoute = Route$51.update({
	id: "/notifications",
	path: "/notifications",
	getParentRoute: () => vendorShopSlugRoute
});
var vendorShopSlugCouponsRoute = Route$50.update({
	id: "/coupons",
	path: "/coupons",
	getParentRoute: () => vendorShopSlugRoute
});
var vendorShopSlugCategoriesRoute = Route$49.update({
	id: "/categories",
	path: "/categories",
	getParentRoute: () => vendorShopSlugRoute
});
var vendorShopSlugBrandsRoute = Route$48.update({
	id: "/brands",
	path: "/brands",
	getParentRoute: () => vendorShopSlugRoute
});
var vendorShopSlugAttributesRoute = Route$47.update({
	id: "/attributes",
	path: "/attributes",
	getParentRoute: () => vendorShopSlugRoute
});
var storeLayoutStoreSlugRoute = Route$44.update({
	id: "/store/$slug",
	path: "/store/$slug",
	getParentRoute: () => storeLayoutRoute
});
var storeLayoutProductProductIdRoute = Route$41.update({
	id: "/product/$productId",
	path: "/product/$productId",
	getParentRoute: () => storeLayoutRoute
});
var storeLayoutCategorySlugRoute = Route$42.update({
	id: "/category/$slug",
	path: "/category/$slug",
	getParentRoute: () => storeLayoutRoute
});
var adminAdminTenantsTenantIdRoute = Route$46.update({
	id: "/tenants/$tenantId",
	path: "/tenants/$tenantId",
	getParentRoute: () => adminAdminRoute
});
var adminAdminOrdersOrderIdRoute = Route$40.update({
	id: "/orders/$orderId",
	path: "/orders/$orderId",
	getParentRoute: () => adminAdminRoute
});
var vendorShopSlugProductsIndexRoute = Route$54.update({
	id: "/products/",
	path: "/products/",
	getParentRoute: () => vendorShopSlugRoute
});
var vendorShopSlugOrdersIndexRoute = Route$53.update({
	id: "/orders/",
	path: "/orders/",
	getParentRoute: () => vendorShopSlugRoute
});
var vendorShopSlugOrdersOrderIdRoute = Route$39.update({
	id: "/orders/$orderId",
	path: "/orders/$orderId",
	getParentRoute: () => vendorShopSlugRoute
});
var adminAdminRouteChildren = {
	adminAdminAttributesRoute,
	adminAdminBrandsRoute,
	adminAdminCategoriesRoute,
	adminAdminCouponsRoute,
	adminAdminMyStoreRoute,
	adminAdminProductsRoute,
	adminAdminReviewsRoute,
	adminAdminSettingsRoute,
	adminAdminStaffRoute,
	adminAdminTagsRoute,
	adminAdminTaxesRoute,
	adminAdminTransactionsRoute,
	adminAdminUsersRoute,
	adminAdminIndexRoute,
	adminAdminOrdersOrderIdRoute,
	adminAdminTenantsTenantIdRoute,
	adminAdminOrdersIndexRoute,
	adminAdminTenantsIndexRoute
};
var adminAdminRouteWithChildren = adminAdminRoute._addFileChildren(adminAdminRouteChildren);
var storeLayoutRouteChildren = {
	storeLayoutCartRoute,
	storeLayoutCheckoutRoute,
	storeLayoutMyReviewsRoute,
	storeLayoutOrderConfirmationRoute,
	storeLayoutOrderTrackingRoute,
	storeLayoutOrdersRoute,
	storeLayoutProfileRoute,
	storeLayoutTrackOrderRoute,
	storeLayoutWishlistRoute,
	storeLayoutIndexRoute,
	storeLayoutCategorySlugRoute,
	storeLayoutProductProductIdRoute,
	storeLayoutStoreSlugRoute,
	storeLayoutCategoryIndexRoute,
	storeLayoutProductIndexRoute,
	storeLayoutStoreIndexRoute
};
var storeLayoutRouteWithChildren = storeLayoutRoute._addFileChildren(storeLayoutRouteChildren);
var vendorLayoutRouteChildren = {
	vendorLayoutDashboardRoute,
	vendorLayoutMyShopRoute
};
var vendorLayoutRouteWithChildren = vendorLayoutRoute._addFileChildren(vendorLayoutRouteChildren);
var vendorShopSlugRouteChildren = {
	vendorShopSlugAttributesRoute,
	vendorShopSlugBrandsRoute,
	vendorShopSlugCategoriesRoute,
	vendorShopSlugCouponsRoute,
	vendorShopSlugNotificationsRoute,
	vendorShopSlugReviewsRoute,
	vendorShopSlugSettingsRoute,
	vendorShopSlugShippingRoute,
	vendorShopSlugStaffRoute,
	vendorShopSlugTagsRoute,
	vendorShopSlugTaxesRoute,
	vendorShopSlugTransactionsRoute,
	vendorShopSlugIndexRoute,
	vendorShopSlugOrdersOrderIdRoute,
	vendorShopSlugOrdersIndexRoute,
	vendorShopSlugProductsIndexRoute
};
var rootRouteChildren = {
	adminAdminRoute: adminAdminRouteWithChildren,
	adminForbiddenRoute,
	authSignInRoute,
	authSignUpRoute,
	authVendorSignUpRoute,
	storeLayoutRoute: storeLayoutRouteWithChildren,
	vendorLayoutRoute: vendorLayoutRouteWithChildren,
	vendorShopSlugRoute: vendorShopSlugRoute._addFileChildren(vendorShopSlugRouteChildren),
	ApiAuthSplatRoute,
	ApiWebhooksStripeRoute
};
var routeTree = Route$38._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
	const context = getContext();
	const router = createRouter({
		routeTree,
		context,
		scrollRestoration: true,
		defaultErrorComponent: DefaultErrorComponent,
		defaultNotFoundComponent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotFound, {}),
		defaultPreload: "intent",
		defaultPreloadStaleTime: 0
	});
	setupRouterSsrQueryIntegration({
		router,
		queryClient: context.queryClient
	});
	return router;
}
//#endregion
export { getRouter };
