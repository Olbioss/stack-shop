import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-Pgq5HWQm.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { p as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as Package, Ft as CheckCheck, Ht as Bell, Pt as Check, St as CreditCard, Z as LoaderCircle, b as ShoppingCart, c as TriangleAlert, g as Star, rt as Info } from "../_libs/lucide-react.mjs";
import { t as ScrollArea$1 } from "./scroll-area-CZTHPdUq.mjs";
import { t as Separator$1 } from "./separator-CLOPUVDG.mjs";
import { i as useVendorNotifications, n as ToggleGroupItem, r as useVendorNotificationMutations, t as ToggleGroup$1 } from "./use-vendor-notifications-DtNX-H6H.mjs";
import { u as formatDistanceToNow } from "../_libs/date-fns.mjs";
import { t as Card } from "./card-BDvQuHpQ.mjs";
import { t as Route } from "./notifications-yWeTkm-t.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/notifications-xTKCDh7k.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var notificationIcons = {
	new_order: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "size-4 text-green-500" }),
	order_status_update: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "size-4 text-blue-500" }),
	new_review: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 text-yellow-500" }),
	low_stock: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-4 text-orange-500" }),
	payout: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "size-4 text-emerald-500" }),
	system: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "size-4 text-muted-foreground" })
};
function NotificationsPage() {
	const { slug } = Route.useParams();
	const [filter, setFilter] = (0, import_react.useState)("all");
	const { notifications, unreadCount, isLoading } = useVendorNotifications({
		shopSlug: slug,
		limit: 50,
		refetchInterval: 3e4
	});
	const { markAsRead, markAllAsRead, isMarkingAllAsRead, isMarkingAsRead } = useVendorNotificationMutations(slug);
	const filteredNotifications = (0, import_react.useMemo)(() => {
		if (filter === "unread") return notifications.filter((n) => !n.isRead);
		if (filter === "read") return notifications.filter((n) => n.isRead);
		return notifications;
	}, [filter, notifications]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto w-full max-w-3xl space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-semibold text-xl",
						children: "Notifications"
					}), unreadCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "relative flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 font-medium text-[10px] text-primary-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "-top-0.5 -right-0.5 absolute flex size-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex size-2 rounded-full bg-primary" })]
						}), unreadCount]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ToggleGroup$1, {
						type: "single",
						value: filter,
						onValueChange: (value) => {
							if (!value) return;
							setFilter(value);
						},
						variant: "outline",
						size: "sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupItem, {
								value: "all",
								"aria-label": "All notifications",
								children: "All"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupItem, {
								value: "unread",
								"aria-label": "Unread notifications",
								children: "Unread"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupItem, {
								value: "read",
								"aria-label": "Read notifications",
								children: "Read"
							})
						]
					}), unreadCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						onClick: () => markAllAsRead(),
						disabled: isMarkingAllAsRead,
						className: "h-8 gap-1.5 text-xs",
						children: [isMarkingAllAsRead ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckCheck, { className: "size-3" }), "Mark all read"]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "p-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea$1, {
					className: "max-h-160",
					children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center justify-center py-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-6 animate-spin text-muted-foreground" })
					}) : notifications.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center justify-center px-4 py-12 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-10 text-muted-foreground/40" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-medium text-muted-foreground text-sm",
								children: "No notifications yet"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-muted-foreground/70 text-xs",
								children: "You'll see new orders and alerts here"
							})
						]
					}) : filteredNotifications.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center justify-center px-4 py-12 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-10 text-muted-foreground/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-medium text-muted-foreground text-sm",
							children: "No notifications found"
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "divide-y",
						children: filteredNotifications.map((notification) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: cn("group relative flex gap-3 px-4 py-3 transition-colors hover:bg-muted/50", !notification.isRead && "bg-primary/5"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-muted",
									children: notificationIcons[notification.type] || /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-4 text-muted-foreground" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start justify-between gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: cn("text-sm leading-tight", !notification.isRead && "font-medium"),
												children: notification.title
											}), !notification.isRead && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												variant: "ghost",
												size: "icon",
												className: "invisible size-6 shrink-0 group-hover:visible",
												disabled: isMarkingAsRead,
												onClick: () => markAsRead(notification.id),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "sr-only",
													children: "Mark as read"
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-0.5 line-clamp-2 text-muted-foreground text-xs",
											children: notification.message
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-muted-foreground/70",
												children: formatDistanceToNow(new Date(notification.createdAt), { addSuffix: true })
											}), notification.data?.orderId && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground/50",
												children: "•"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/shop/$slug/orders/$orderId",
												params: {
													slug,
													orderId: notification.data.orderId
												},
												className: "font-medium text-[10px] text-primary hover:underline",
												onClick: () => {
													if (!notification.isRead) markAsRead(notification.id);
												},
												children: "View order"
											})] })]
										})
									]
								}),
								!notification.isRead && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "-translate-y-1/2 absolute top-1/2 left-1.5 flex size-2 items-center justify-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex size-2 animate-ping rounded-full bg-primary opacity-60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex size-1.5 rounded-full bg-primary" })]
								})
							]
						}, notification.id))
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator$1, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "sm",
					asChild: true,
					className: "h-8 text-xs",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop/$slug",
						params: { slug },
						children: "Back to dashboard"
					})
				})
			})
		]
	});
}
//#endregion
export { NotificationsPage as component };
