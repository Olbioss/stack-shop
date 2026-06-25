import { Ht as object, Rt as email } from "./_libs/@better-auth/core+[...].mjs";
import { o as useSession, r as signOut } from "./_ssr/auth-client-Jg3rYQV_.mjs";
import { t as cn } from "./_ssr/utils-Pgq5HWQm.mjs";
import { w as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./_ssr/button-DQSToWRX.mjs";
import { t as ScrollArea$1 } from "./_ssr/scroll-area-CZTHPdUq.mjs";
import { t as Skeleton } from "./_ssr/skeleton-CLsJI6lr.mjs";
import { t as Input } from "./_ssr/input-BP4N0xFb.mjs";
import { t as Separator$1 } from "./_ssr/separator-CLOPUVDG.mjs";
import { G as Menu, Ut as BadgeCheck, Z as LoaderCircle, h as Store, qt as ArrowRight, x as ShoppingBag } from "./_libs/lucide-react.mjs";
import { a as SheetHeader, n as SheetClose, o as SheetTitle, r as SheetContent, s as SheetTrigger, t as Sheet } from "./_ssr/sheet-BT4_YFID.mjs";
import { a as DropdownMenuLabel, c as DropdownMenuSeparator, f as DropdownMenuTrigger, i as DropdownMenuItem, r as DropdownMenuContent, t as DropdownMenu$1 } from "./_ssr/dropdown-menu-uJlchZ0e.mjs";
import { _ as useRouter, c as Outlet, p as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as useForm } from "./_libs/@tanstack/react-form+[...].mjs";
import { t as ModeToggle } from "./_ssr/mode-toggle-371wKQNY.mjs";
import { n as AvatarFallback, r as AvatarImage, t as Avatar$1 } from "./_ssr/avatar-BfSlRT72.mjs";
import { r as FieldError, t as Field } from "./_ssr/field--Rw3cGW0.mjs";
import { t as useCart } from "./_ssr/use-cart-DnfXXkvT.mjs";
import { t as CartItem } from "./_ssr/cart-item-Ba76y0Dl.mjs";
import { t as useCartStore } from "./_ssr/cart-store-C9JgFNbK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_layout-BG4a7LL9.js
var import_jsx_runtime = require_jsx_runtime();
var StarburstIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 60 60",
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mask", {
		id: "a",
		width: "60",
		height: "60",
		x: "0",
		y: "0",
		maskUnits: "userSpaceOnUse",
		style: { maskType: "luminance" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "#fff",
			d: "M60 0H0v60h60z"
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
		mask: "url(#a)",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "m30 0 .8 22.392L36.237.656l-3.873 22.068 9.838-20.13-8.377 20.78L47.634 5.73 35.119 24.315 52.294 9.926 36.19 25.503 55.981 15 36.989 26.889l21.543-6.16-21.05 7.68 22.354-1.545L37.65 30l22.186 3.136-22.353-1.545 21.049 7.68-21.543-6.16L55.98 45 36.189 34.497l16.105 15.577L35.12 35.685l12.515 18.586-13.809-17.646 8.377 20.782-9.838-20.131 3.873 22.068L30.8 37.608 30 60l-.8-22.392-5.437 21.737 3.873-22.07-9.838 20.132 8.377-20.782-13.809 17.646 12.515-18.586L7.706 50.074 23.81 34.497 4.019 45l18.992-11.888L1.468 39.27l21.05-7.68L.163 33.136 22.35 30 .164 26.864l22.353 1.546-21.049-7.68 21.543 6.159L4.02 15l19.792 10.503L7.706 9.926 24.88 24.315 12.366 5.729l13.809 17.646-8.377-20.781 9.838 20.13L23.763.656 29.2 22.392z"
		})
	})]
});
function MarqueeBadge({ label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "flex items-center @5xl:gap-4 gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarburstIcon, { className: "@5xl:size-[50px] @7xl:size-[60px] size-10 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "@5xl:text-2xl @7xl:text-3xl text-body-20 text-xl uppercase",
			children: label
		})]
	});
}
var speedMap = {
	slow: "animation-duration-[50s]",
	normal: "animation-duration-[35s]",
	fast: "animation-duration-[20s]"
};
function Marquee({ items, className, speed }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("relative overflow-hidden border-y-2 border-dashed", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("marquee flex w-max min-w-full items-center gap-6 @5xl:py-10 @7xl:py-12 py-7.5", speedMap[speed ?? "normal"]),
			children: [...items.map((el) => ({
				el,
				key: el.key ?? void 0
			})), ...items.map((el) => ({
				el,
				key: `${el.key ?? "dup"}`
			}))].map((n, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-3",
				children: n.el
			}, String(n.key ?? `mk-${idx}`)))
		})
	});
}
var brandsCategories = [
	"TANK TOP",
	"TSHIRT",
	"LONG-SLEEVE TSHIRT",
	"RAGLAN SLEEVE SHIRT",
	"CROP TOP",
	"V-NECK SHIRT",
	"MUSCLE SHIRT"
];
function Brand({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {
			items: brandsCategories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarqueeBadge, { label: category }, category)),
			speed: "slow",
			className: "border-t-2"
		})
	});
}
function Copyright({ brand, legalLinks, year = (/* @__PURE__ */ new Date()).getFullYear(), className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex w-full @6xl:flex-row flex-col items-start justify-between gap-4", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "font-mono text-body-70",
			children: [
				"© ",
				year,
				" ",
				brand,
				". All rights reserved."
			]
		}), !!legalLinks.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap items-center gap-3 text-body-70",
			children: legalLinks.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [i > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-body-70",
					children: "|"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					className: "hover:text-foreground",
					children: l.label
				})]
			}, l.label))
		})]
	});
}
function FooterBottom() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "@4xl:px-12 @6xl:px-15 @7xl:px-20 px-5 py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copyright, {
			brand: "ShopStack",
			legalLinks: [{
				label: "Terms & Conditions",
				to: "/terms"
			}, {
				label: "Privacy Policy",
				to: "/privacy"
			}]
		})
	});
}
function FooterNav({ title, links }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
			className: "font-medium text-foreground text-lg",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "flex flex-wrap items-center gap-3",
			children: links.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					className: "@4xl:text-base @7xl:text-xl text-sm transition-colors hover:text-foreground",
					children: item.label
				}), index < links.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-body-70",
					children: "•"
				})]
			}, item.label))
		})]
	});
}
var schema = object({ email: email("Please enter a valid email address") });
function SubscribeForm() {
	const form = useForm({
		defaultValues: { email: "" },
		validators: { onSubmit: schema },
		onSubmit: async ({ value }) => {
			console.log("newsletter-subscribe", value);
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
		onSubmit: (e) => {
			e.preventDefault();
			form.handleSubmit();
		},
		noValidate: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
			name: "email",
			children: (field) => {
				const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
				const stringErrors = field.state.meta.errors?.filter((e) => typeof e === "string").map((e) => ({ message: e }));
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
					"data-invalid": isInvalid,
					className: "relative w-full max-w-119.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: field.name,
							name: field.name,
							type: "email",
							value: field.state.value ?? "",
							onBlur: field.handleBlur,
							onChange: (e) => field.handleChange(e.target.value),
							"aria-invalid": isInvalid,
							placeholder: "Your Email",
							autoComplete: "email",
							className: "@6xl:h-16 h-12 w-full rounded-xl border-none bg-zinc-900 px-4 pr-12 text-zinc-400 placeholder:text-zinc-500 focus-visible:ring-1 focus-visible:ring-zinc-700"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							size: "icon",
							type: "submit",
							className: "-translate-y-1/2 absolute top-1/2 right-2 text-zinc-400 hover:bg-transparent hover:text-white",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: "Subscribe"
							})]
						})]
					}), isInvalid && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, {
						errors: stringErrors,
						className: "-bottom-6 absolute left-0"
					})]
				});
			}
		})
	});
}
var homeMenu = [
	{
		label: "Why Us",
		to: "/#why-us"
	},
	{
		label: "About Us",
		to: "/#about"
	},
	{
		label: "Testimonials",
		to: "/#testimonials"
	},
	{
		label: "FAQ’s",
		to: "/#faqs"
	}
];
var productsMenu = [
	{
		label: "Menswear",
		to: "/products?category=mens"
	},
	{
		label: "Womenswear",
		to: "/products?category=womens"
	},
	{
		label: "Kidswear",
		to: "/products?category=kids"
	}
];
function FooterMiddle() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-body-15 border-y-2 border-dashed",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "@4xl:px-12 @6xl:px-15 @7xl:px-20 px-4 @5xl:py-16 @7xl:py-20 py-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid @4xl:grid-cols-2 @6xl:grid-cols-3 grid-cols-1 gap-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-body-70 text-sm tracking-wide",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterNav, {
							title: "Home",
							links: homeMenu
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-body-70 text-sm tracking-wide",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterNav, {
							title: "Products",
							links: productsMenu
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "@4xl:col-span-2 @6xl:col-span-1 space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-medium text-foreground text-lg",
							children: "Subscribe to Newsletter"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubscribeForm, {})]
					})
				]
			})
		})
	});
}
var DribbbleIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "currentColor",
	viewBox: "0 0 24 24",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38zM12.21 13.49c-3.022 1.054-4.806 3.18-5.027 3.453.11.12.255.275.41.41 1.4 1.214 3.218 1.954 5.207 1.954 1.36 0 2.65-.34 3.78-.95-.05-.296-.31-1.748-.97-3.563-.467-1.27-.95-2.39-1.4-3.304z" })
});
var InstagramIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "currentColor",
	viewBox: "0 0 24 24",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 0C8.741 0 8.333.014 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.741 0 12s.014 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.741 24 12 24s3.667-.014 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.014-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.259 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" })
});
var TwitterIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "currentColor",
	viewBox: "0 0 24 24",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" })
});
var defaultLinks = [
	{
		label: "Instagram",
		href: "/#instagram",
		icon: InstagramIcon
	},
	{
		label: "Dribbble",
		href: "/#dribbble",
		icon: DribbbleIcon
	},
	{
		label: "Twitter",
		href: "https://x.com/home",
		icon: TwitterIcon
	},
	{
		label: "Behance",
		href: "/#behance",
		icon: BadgeCheck
	}
];
function SocialLinks({ links = defaultLinks, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-wrap items-center @5xl:gap-5 gap-4", className),
		children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: link.href,
			"aria-label": link.label,
			target: "_blank",
			className: cn("inline-flex @5xl:size-14 @7xl:size-16 size-12 items-center justify-center rounded-xl bg-primary-80 text-dark-06 transition-colors hover:bg-accent hover:text-accent-foreground"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link.icon, { className: "@6xl:size-7 size-6" })
		}, link.label))
	});
}
function FooterTop() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "@4xl:px-12 @6xl:px-15 @7xl:px-20 px-5 py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex @3xl:flex-row flex-col @3xl:items-center @3xl:justify-between gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
				className: "font-bold @6xl:text-[124px] text-6xl",
				children: [
					"Shop",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary",
						children: "."
					}),
					"Stack"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialLinks, {})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "@container",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterTop, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterMiddle, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterBottom, {})
		]
	});
}
function CartSheet() {
	const { items, totalItems, subtotal, isLoading, updateQuantity, removeItem, isUpdating, isRemoving } = useCart();
	const { isOpen, setIsOpen } = useCartStore();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		open: isOpen,
		onOpenChange: setIsOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
			className: "flex w-full flex-col sm:max-w-lg",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetTitle, { children: [
				"Cart (",
				totalItems,
				")"
			] }) }), isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "divide-y",
					children: [
						1,
						2,
						3
					].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-20 w-20 rounded-md" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-32" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-3 w-24" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-16" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-8 w-24" })]
							})]
						})]
					}, i))
				})
			}) : items.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea$1, {
				className: "flex-1 px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "divide-y",
					children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartItem, {
						item,
						isCompact: true,
						onUpdateQuantity: (itemId, quantity) => {
							updateQuantity(itemId, quantity);
						},
						onRemove: (itemId) => {
							removeItem(itemId);
						},
						isUpdating,
						isRemoving
					}, item.id))
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4 py-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator$1, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5 px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between font-medium text-base",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Subtotal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-semibold text-2xl text-foreground",
								children: ["$", subtotal.toFixed(2)]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-sm",
							children: "Shipping and taxes calculated at checkout."
						})]
					}),
					(isUpdating || isRemoving) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-center gap-2 px-6 text-muted-foreground text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Updating..." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/cart",
							onClick: () => setIsOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "w-full",
								size: "lg",
								children: "View Cart"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							className: "w-full",
							size: "lg",
							onClick: () => setIsOpen(false),
							children: "Continue Shopping"
						})]
					})
				]
			})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-full flex-col items-center justify-center space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-12 w-12 text-muted-foreground" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium text-lg text-muted-foreground",
						children: "Your cart is empty"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "link",
						onClick: () => setIsOpen(false),
						children: "Start Shopping"
					})
				]
			})]
		})
	});
}
function Navbar({ items, className = "hidden items-center gap-6 text-sm @5xl:flex", linkClassName = "", activeLinkClassName = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: cn(className),
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: item.to,
			className: cn("flex @7xl:h-16 items-center justify-center rounded-xl border border-dashed bg-transparent px-[30px] text-lg transition-all hover:border-transparent hover:bg-primary hover:text-background dark:text-body-70 dark:hover:text-background", linkClassName),
			activeProps: { className: cn("@7xl:h-16 h-12 rounded-xl text-lg px-[30px] bg-foreground! text-background border-transparent dark:bg-body-15! hover:dark:text-foreground", activeLinkClassName) },
			children: item.label
		}, item.to))
	});
}
function MobileMenu({ navigationItems, trigger }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
		asChild: true,
		children: trigger
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
		side: "right",
		className: "p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {
			items: navigationItems,
			className: "flex flex-col gap-3"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 flex items-center gap-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetClose, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "icon",
					"aria-label": "Open cart",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-5" })
				})
			})
		})]
	})] });
}
function getInitials(name, email) {
	if (name && name.trim().length > 0) {
		const parts = name.trim().split(/\s+/);
		return (parts[0]?.[0] || "").concat(parts[1]?.[0] || "").toUpperCase();
	}
	if (email) return email[0]?.toUpperCase() || "U";
	return "U";
}
function UserMenu({ user }) {
	const initials = getInitials(user?.name, user?.email);
	const router = useRouter();
	const isVendor = user?.role === "vendor";
	const handleSignOut = async () => {
		const currentPath = window.location.pathname + window.location.search;
		await signOut();
		router.navigate({
			to: "/sign-in",
			search: { redirectTo: currentPath }
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			size: "icon-lg",
			type: "button",
			"aria-label": "User menu",
			className: "rounded-full",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Avatar$1, {
				className: "size-8 border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, {
					src: user?.image || void 0,
					alt: user?.name || user?.email || "User"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, { children: initials })]
			})
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
		align: "end",
		className: "w-56 p-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, {
				className: "font-normal",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium text-sm leading-none",
						children: user?.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground text-xs leading-none",
						children: user?.email
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
			isVendor && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/dashboard",
					className: "w-full cursor-pointer font-medium text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Store, { className: "mr-2 h-4 w-4" }), "Vendor Dashboard"]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/profile",
					className: "w-full cursor-pointer font-medium",
					children: "Profile"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/orders",
					className: "w-full cursor-pointer font-medium",
					children: "My Orders"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/wishlist",
					className: "w-full cursor-pointer font-medium",
					children: "My Wishlists"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/checkout",
					className: "w-full cursor-pointer font-medium",
					children: "Checkout"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				onClick: handleSignOut,
				className: "cursor-pointer font-medium text-destructive focus:text-destructive",
				children: "Logout"
			})
		]
	})] });
}
var navigationItems = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/product",
		label: "Products"
	},
	{
		to: "/category",
		label: "Categories"
	}
];
function Header() {
	const { data } = useSession();
	const user = data?.user;
	const { totalItems } = useCart();
	const { setIsOpen } = useCartStore();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "@container sticky top-0 z-40 w-full border-b border-dashed bg-background backdrop-blur supports-filter:bg-background/80",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "@container container mx-auto grid @6xl:grid-cols-3 grid-cols-2 items-center px-4 py-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, { items: navigationItems }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center justify-start @6xl:justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "font-bold @6xl:text-4xl text-xl tracking-tight dark:text-white",
						children: [
							"Shop",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-4xl text-primary",
								children: "."
							}),
							"Stack"
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-end gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "@6xl:flex hidden items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "icon-lg",
								type: "button",
								"aria-label": "Open Cart",
								onClick: () => setIsOpen(true),
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "@7xl:size-6 size-5" }), totalItems > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "-right-1 -top-1 absolute flex h-5 w-5 items-center justify-center rounded-full bg-primary font-medium text-[10px] text-primary-foreground",
									children: totalItems
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartSheet, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeToggle, {}),
							user ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserMenu, { user }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/sign-in",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									size: "lg",
									type: "button",
									children: "Sign In"
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex @6xl:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileMenu, {
							navigationItems,
							trigger: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "secondary",
								size: "icon-lg",
								"aria-label": "Open menu",
								className: "rounded-xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
							})
						})
					})]
				})
			]
		})
	});
}
function RouteComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { RouteComponent as component };
