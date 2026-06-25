import { o as __toESM } from "../_runtime.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./utils-Pgq5HWQm.mjs";
import { w as require_jsx_runtime, y as Slot } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import "./skeleton-CLsJI6lr.mjs";
import { _ as useRouter, a as useLocation, p as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as Package, D as Settings, Ft as CheckCheck, Ht as Bell, Nt as ChevronDown, O as Search, R as PanelLeft, St as CreditCard, Y as LogOut, Z as LoaderCircle, b as ShoppingCart, c as TriangleAlert, g as Star, i as User, rt as Info } from "../_libs/lucide-react.mjs";
import { r as signOut } from "./auth-client-Jg3rYQV_.mjs";
import { t as ScrollArea$1 } from "./scroll-area-CZTHPdUq.mjs";
import { t as Input } from "./input-BP4N0xFb.mjs";
import "./separator-CLOPUVDG.mjs";
import { a as SheetHeader, i as SheetDescription, o as SheetTitle, r as SheetContent, t as Sheet } from "./sheet-BT4_YFID.mjs";
import { a as DropdownMenuLabel, c as DropdownMenuSeparator, f as DropdownMenuTrigger, i as DropdownMenuItem, r as DropdownMenuContent, t as DropdownMenu$1 } from "./dropdown-menu-uJlchZ0e.mjs";
import { t as ModeToggle } from "./mode-toggle-371wKQNY.mjs";
import { n as AvatarFallback, r as AvatarImage, t as Avatar$1 } from "./avatar-BfSlRT72.mjs";
import { i as TooltipTrigger, n as TooltipContent, r as TooltipProvider, t as Tooltip$1 } from "./tooltip-DECwMe-N.mjs";
import { n as PopoverContent, r as PopoverTrigger, t as Popover$1 } from "./popover-pu9A7ROb.mjs";
import { i as useVendorNotifications, n as ToggleGroupItem, r as useVendorNotificationMutations, t as ToggleGroup$1 } from "./use-vendor-notifications-DtNX-H6H.mjs";
import { u as formatDistanceToNow } from "../_libs/date-fns.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/vendor-user-menu-CeQCPGbd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
	const [isMobile, setIsMobile] = import_react.useState(void 0);
	import_react.useEffect(() => {
		const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
		const onChange = () => {
			setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		};
		mql.addEventListener("change", onChange);
		setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		return () => mql.removeEventListener("change", onChange);
	}, []);
	return !!isMobile;
}
var SIDEBAR_COOKIE_NAME = "sidebar_state";
var SIDEBAR_COOKIE_MAX_AGE = 3600 * 24 * 7;
var SIDEBAR_WIDTH = "16rem";
var SIDEBAR_WIDTH_MOBILE = "18rem";
var SIDEBAR_WIDTH_ICON = "3rem";
var SIDEBAR_KEYBOARD_SHORTCUT = "b";
var SidebarContext = import_react.createContext(null);
function useSidebar() {
	const context = import_react.useContext(SidebarContext);
	if (!context) throw new Error("useSidebar must be used within a SidebarProvider.");
	return context;
}
function SidebarProvider({ defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }) {
	const isMobile = useIsMobile();
	const [openMobile, setOpenMobile] = import_react.useState(false);
	const [_open, _setOpen] = import_react.useState(defaultOpen);
	const open = openProp ?? _open;
	const setOpen = import_react.useCallback((value) => {
		const openState = typeof value === "function" ? value(open) : value;
		if (setOpenProp) setOpenProp(openState);
		else _setOpen(openState);
		document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
	}, [setOpenProp, open]);
	const toggleSidebar = import_react.useCallback(() => {
		return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
	}, [isMobile, setOpen]);
	import_react.useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
				event.preventDefault();
				toggleSidebar();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [toggleSidebar]);
	const state = open ? "expanded" : "collapsed";
	const contextValue = import_react.useMemo(() => ({
		state,
		open,
		setOpen,
		isMobile,
		openMobile,
		setOpenMobile,
		toggleSidebar
	}), [
		state,
		open,
		setOpen,
		isMobile,
		openMobile,
		toggleSidebar
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarContext.Provider, {
		value: contextValue,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, {
			delayDuration: 0,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-slot": "sidebar-wrapper",
				style: {
					"--sidebar-width": SIDEBAR_WIDTH,
					"--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
					...style
				},
				className: cn("group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar", className),
				...props,
				children
			})
		})
	});
}
function Sidebar({ side = "left", variant = "sidebar", collapsible = "offcanvas", className, children, ...props }) {
	const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
	if (collapsible === "none") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "sidebar",
		className: cn("flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground", className),
		...props,
		children
	});
	if (isMobile) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		open: openMobile,
		onOpenChange: setOpenMobile,
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
			"data-sidebar": "sidebar",
			"data-slot": "sidebar",
			"data-mobile": "true",
			className: "w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
			style: { "--sidebar-width": SIDEBAR_WIDTH_MOBILE },
			side,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetHeader, {
				className: "sr-only",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, { children: "Sidebar" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetDescription, { children: "Displays the mobile sidebar." })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-full w-full flex-col",
				children
			})]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group peer hidden text-sidebar-foreground md:block",
		"data-state": state,
		"data-collapsible": state === "collapsed" ? collapsible : "",
		"data-variant": variant,
		"data-side": side,
		"data-slot": "sidebar",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"data-slot": "sidebar-gap",
			className: cn("relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"data-slot": "sidebar-container",
			className: cn("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex", side === "left" ? "left-0 group-data-[collapsible=offcanvas]:-left-(--sidebar-width)" : "right-0 group-data-[collapsible=offcanvas]:-right-(--sidebar-width)", variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l", className),
			...props,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-sidebar": "sidebar",
				"data-slot": "sidebar-inner",
				className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow-sm",
				children
			})
		})]
	});
}
function SidebarTrigger({ className, onClick, ...props }) {
	const { toggleSidebar } = useSidebar();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		"data-sidebar": "trigger",
		"data-slot": "sidebar-trigger",
		variant: "ghost",
		size: "icon",
		className: cn("size-7", className),
		onClick: (event) => {
			onClick?.(event);
			toggleSidebar();
		},
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelLeft, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Toggle Sidebar"
		})]
	});
}
function SidebarRail({ className, ...props }) {
	const { toggleSidebar } = useSidebar();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		"data-sidebar": "rail",
		"data-slot": "sidebar-rail",
		"aria-label": "Toggle Sidebar",
		tabIndex: -1,
		onClick: toggleSidebar,
		title: "Toggle Sidebar",
		className: cn("absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-0.5 hover:after:bg-sidebar-border sm:flex", "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize", "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize", "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full hover:group-data-[collapsible=offcanvas]:bg-sidebar", "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", className),
		...props
	});
}
function SidebarInset({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		"data-slot": "sidebar-inset",
		className: cn("relative flex w-full flex-1 flex-col bg-background", "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2", className),
		...props
	});
}
function SidebarHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "sidebar-header",
		"data-sidebar": "header",
		className: cn("flex flex-col gap-2 p-2", className),
		...props
	});
}
function SidebarFooter({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "sidebar-footer",
		"data-sidebar": "footer",
		className: cn("flex flex-col gap-2 p-2", className),
		...props
	});
}
function SidebarContent({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "sidebar-content",
		"data-sidebar": "content",
		className: cn("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", className),
		...props
	});
}
function SidebarGroup({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "sidebar-group",
		"data-sidebar": "group",
		className: cn("relative flex w-full min-w-0 flex-col p-2", className),
		...props
	});
}
function SidebarGroupLabel({ className, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "div", {
		"data-slot": "sidebar-group-label",
		"data-sidebar": "group-label",
		className: cn("flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 ring-sidebar-ring outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", className),
		...props
	});
}
function SidebarGroupContent({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "sidebar-group-content",
		"data-sidebar": "group-content",
		className: cn("w-full text-sm", className),
		...props
	});
}
function SidebarMenu({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		"data-slot": "sidebar-menu",
		"data-sidebar": "menu",
		className: cn("flex w-full min-w-0 flex-col gap-1", className),
		...props
	});
}
function SidebarMenuItem({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
		"data-slot": "sidebar-menu-item",
		"data-sidebar": "menu-item",
		className: cn("group/menu-item relative", className),
		...props
	});
}
var sidebarMenuButtonVariants = cva("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm ring-sidebar-ring outline-hidden transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", {
	variants: {
		variant: {
			default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
			outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
		},
		size: {
			default: "h-8 text-sm",
			sm: "h-7 text-xs",
			lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function SidebarMenuButton({ asChild = false, isActive = false, variant = "default", size = "default", tooltip, className, ...props }) {
	const Comp = asChild ? Slot : "button";
	const { isMobile, state } = useSidebar();
	const button = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, {
		"data-slot": "sidebar-menu-button",
		"data-sidebar": "menu-button",
		"data-size": size,
		"data-active": isActive,
		className: cn(sidebarMenuButtonVariants({
			variant,
			size
		}), className),
		...props
	});
	if (!tooltip) return button;
	if (typeof tooltip === "string") tooltip = { children: tooltip };
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
		asChild: true,
		children: button
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
		side: "right",
		align: "center",
		hidden: state !== "collapsed" || isMobile,
		...tooltip
	})] });
}
function SidebarMenuSub({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		"data-slot": "sidebar-menu-sub",
		"data-sidebar": "menu-sub",
		className: cn("mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5", "group-data-[collapsible=icon]:hidden", className),
		...props
	});
}
function SidebarMenuSubItem({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
		"data-slot": "sidebar-menu-sub-item",
		"data-sidebar": "menu-sub-item",
		className: cn("group/menu-sub-item relative", className),
		...props
	});
}
function SidebarMenuSubButton({ asChild = false, size = "md", isActive = false, className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "a", {
		"data-slot": "sidebar-menu-sub-button",
		"data-sidebar": "menu-sub-button",
		"data-size": size,
		"data-active": isActive,
		className: cn("flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground ring-sidebar-ring outline-hidden hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground", "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground", size === "sm" && "text-xs", size === "md" && "text-sm", "group-data-[collapsible=icon]:hidden", className),
		...props
	});
}
var notificationIcons = {
	new_order: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "size-4 text-green-500" }),
	order_status_update: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "size-4 text-blue-500" }),
	new_review: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 text-yellow-500" }),
	low_stock: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-4 text-orange-500" }),
	payout: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "size-4 text-emerald-500" }),
	system: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "size-4 text-muted-foreground" })
};
function NotificationDropdown({ shopSlug }) {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const { notifications, unreadCount, isLoading } = useVendorNotifications({
		shopSlug,
		limit: 20,
		refetchInterval: 3e4
	});
	const { markAsRead, markAllAsRead, isMarkingAllAsRead } = useVendorNotificationMutations(shopSlug);
	const handleMarkAsRead = (notificationId) => {
		markAsRead(notificationId);
	};
	const handleMarkAllAsRead = () => {
		markAllAsRead();
	};
	const filteredNotifications = (0, import_react.useMemo)(() => {
		if (filter === "unread") return notifications.filter((n) => !n.isRead);
		if (filter === "read") return notifications.filter((n) => n.isRead);
		return notifications;
	}, [filter, notifications]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "ghost",
			size: "icon",
			className: "relative rounded-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-5 text-muted-foreground" }),
				unreadCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "-top-0.5 -right-0.5 absolute flex size-5 items-center justify-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex size-full animate-ping rounded-full bg-destructive/20 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "relative inline-flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-medium text-white ring-2 ring-background",
						children: unreadCount > 9 ? "9+" : unreadCount
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					children: "Notifications"
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContent, {
		className: "w-105 p-0",
		align: "end",
		sideOffset: 8,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "shrink-0 space-y-3 border-b bg-muted/10 px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-semibold text-sm",
								children: "Notifications"
							}), unreadCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex h-5 items-center justify-center rounded-full bg-primary/10 px-2 font-medium text-[10px] text-primary",
								children: [unreadCount, " new"]
							})]
						}), unreadCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							size: "sm",
							onClick: handleMarkAllAsRead,
							disabled: isMarkingAllAsRead,
							className: "h-7 gap-1.5 px-2 text-xs hover:bg-transparent hover:text-primary",
							children: [isMarkingAllAsRead ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckCheck, { className: "size-3" }), "Mark all read"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ToggleGroup$1, {
						type: "single",
						value: filter,
						onValueChange: (value) => {
							if (!value) return;
							setFilter(value);
						},
						className: "w-full justify-start",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupItem, {
								value: "all",
								"aria-label": "All notifications",
								className: "h-7 flex-1 rounded-sm text-xs data-[state=on]:bg-primary data-[state=on]:text-primary-foreground",
								children: "All"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupItem, {
								value: "unread",
								"aria-label": "Unread notifications",
								className: "h-7 flex-1 rounded-sm text-xs data-[state=on]:bg-primary data-[state=on]:text-primary-foreground",
								children: "Unread"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupItem, {
								value: "read",
								"aria-label": "Read notifications",
								className: "h-7 flex-1 rounded-sm text-xs data-[state=on]:bg-primary data-[state=on]:text-primary-foreground",
								children: "Read"
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea$1, {
					className: "h-87.5",
					children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-full items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-6 animate-spin text-muted-foreground" })
					}) : filteredNotifications.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex h-full flex-col items-center justify-center p-8 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex size-12 items-center justify-center rounded-full bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-6 text-muted-foreground/50" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-medium text-sm",
								children: "No notifications"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 max-w-50 text-muted-foreground text-xs",
								children: filter === "unread" ? "You're all caught up! Check 'All' to see past notifications." : "You haven't received any notifications yet."
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col",
						children: filteredNotifications.map((notification) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: cn("group relative flex gap-4 border-b p-4 transition-colors hover:bg-muted/40", !notification.isRead && "bg-primary/5 hover:bg-primary/10"),
							children: [
								!notification.isRead && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute top-4 right-4 flex size-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex size-2 rounded-full bg-primary" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: cn("flex size-9 shrink-0 items-center justify-center rounded-full border bg-background shadow-sm", !notification.isRead && "border-primary/20"),
									children: notificationIcons[notification.type] || /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-4 text-muted-foreground" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1 space-y-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mr-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: cn("text-sm leading-none", !notification.isRead ? "font-semibold text-foreground" : "font-medium text-muted-foreground"),
												children: notification.title
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "line-clamp-2 text-muted-foreground text-xs leading-relaxed",
											children: notification.message
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3 pt-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] text-muted-foreground/60",
													children: formatDistanceToNow(new Date(notification.createdAt), { addSuffix: true })
												}),
												notification.data?.orderId && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-muted-foreground/30",
													children: "•"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													to: "/shop/$slug/orders/$orderId",
													params: {
														slug: shopSlug,
														orderId: notification.data.orderId
													},
													className: "font-medium text-[10px] text-primary hover:underline",
													onClick: () => {
														if (!notification.isRead) handleMarkAsRead(notification.id);
													},
													children: "View details"
												})] }),
												!notification.isRead && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-muted-foreground/30",
													children: "•"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: (e) => {
														e.preventDefault();
														e.stopPropagation();
														handleMarkAsRead(notification.id);
													},
													className: "font-medium text-[10px] text-muted-foreground hover:text-foreground hover:underline",
													children: "Mark as read"
												})] })
											]
										})
									]
								})
							]
						}, notification.id))
					})
				}),
				notifications.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "shrink-0 border-t bg-muted/10 p-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop/$slug/notifications",
						params: { slug: shopSlug },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							className: "h-9 w-full justify-center text-muted-foreground text-xs hover:text-foreground",
							children: "View all notifications"
						})
					})
				})
			]
		})
	})] });
}
function VendorHeader({ title, showSearch = true, className, shopSlug }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarTrigger, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-semibold text-lg md:text-xl",
					children: title
				}), showSearch && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "ml-auto flex w-full max-w-md items-center gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "-translate-y-1/2 absolute top-1/2 left-3 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "search",
							placeholder: "Search...",
							className: "pl-9"
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [
					shopSlug ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotificationDropdown, { shopSlug }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						size: "icon",
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "Notifications"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/admin/settings",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: "Settings"
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeToggle, {})
				]
			})
		]
	});
}
function VendorNavMenu({ items, className }) {
	const pathname = useLocation().pathname;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarMenu, {
		className: cn(className),
		children: items.map((item) => {
			const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
			const Icon = item.icon;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarMenuItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarMenuButton, {
				asChild: true,
				isActive,
				tooltip: item.title,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					preload: false,
					to: item.href,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.title }),
						item.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-auto flex size-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs",
							children: item.badge
						})
					]
				})
			}), item.items && item.items.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarMenuSub, { children: item.items.map((subItem) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarMenuSubItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarMenuSubButton, {
					asChild: true,
					isActive: pathname === subItem.href,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: subItem.href,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: subItem.title })
					})
				}) }, subItem.href);
			}) })] }, item.href);
		})
	});
}
function VendorUserMenu({ user }) {
	const { isMobile } = useSidebar();
	const router = useRouter();
	const handleSignOut = async () => {
		const currentPath = window.location.pathname + window.location.search;
		await signOut();
		router.navigate({
			to: "/sign-in",
			search: { redirectTo: currentPath }
		});
	};
	const initials = (user.name || "").split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarMenu, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarMenuButton, {
			size: "lg",
			className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Avatar$1, {
					className: "size-8 rounded-lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, {
						src: user.image ?? void 0,
						alt: user.name ?? "User"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
						className: "rounded-lg",
						children: initials
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid flex-1 text-left text-sm leading-tight",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate font-semibold",
						children: user.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate text-muted-foreground text-xs",
						children: user.email
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "ml-auto size-4" })
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
		className: "w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg",
		side: isMobile ? "bottom" : "right",
		align: "end",
		sideOffset: 4,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, {
				className: "p-0 font-normal",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 px-1 py-1.5 text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Avatar$1, {
						className: "size-8 rounded-lg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, {
							src: user.image ?? void 0,
							alt: user.name ?? "User"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
							className: "rounded-lg",
							children: initials
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid flex-1 text-left text-sm leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate font-semibold",
							children: user.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate text-muted-foreground text-xs",
							children: user.email
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "mr-2 size-4" }), "Profile"] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
				onClick: handleSignOut,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "mr-2 size-4" }), "Log out"]
			})
		]
	})] }) }) });
}
//#endregion
export { SidebarGroupContent as a, SidebarInset as c, VendorHeader as d, VendorNavMenu as f, SidebarGroup as i, SidebarProvider as l, SidebarContent as n, SidebarGroupLabel as o, VendorUserMenu as p, SidebarFooter as r, SidebarHeader as s, Sidebar as t, SidebarRail as u };
