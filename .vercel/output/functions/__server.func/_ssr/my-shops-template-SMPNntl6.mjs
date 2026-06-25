import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as cn } from "./utils-Pgq5HWQm.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { t as Input } from "./input-BP4N0xFb.mjs";
import { t as Separator$1 } from "./separator-CLOPUVDG.mjs";
import { B as Package, It as ChartColumn, N as Plus, g as Star, q as MapPin, t as X } from "../_libs/lucide-react.mjs";
import { p as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Label$1 } from "./label-CqfikwJF.mjs";
import { a as FieldLabel, t as Field } from "./field--Rw3cGW0.mjs";
import { o as updateShopSchema, t as createShopSchema } from "./shop-CA4bt79N.mjs";
import { n as useShops } from "./use-shops-Cbmwju82.mjs";
import { a as CardHeader, i as CardFooter, n as CardContent, t as Card } from "./card-BDvQuHpQ.mjs";
import { t as Badge } from "./badge-NA1wPZ4a.mjs";
import { n as v } from "../_libs/uploadcare__react-uploader.mjs";
import { t as EntityFormDialogExtended } from "./entity-form-dialog-extended-DEYvjcQR.mjs";
import { t as Switch$1 } from "./switch-CuGkaFH3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/my-shops-template-SMPNntl6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var fields$1 = [
	{
		name: "name",
		label: "Shop Name",
		type: "text",
		required: true,
		placeholder: "e.g. Tech Gadgets Store",
		autoGenerateSlug: true
	},
	{
		name: "slug",
		label: "Slug",
		type: "text",
		required: true,
		placeholder: "e.g. tech-gadgets-store"
	},
	{
		name: "description",
		label: "Description",
		type: "textarea",
		placeholder: "Describe your shop..."
	},
	{
		name: "logo",
		label: "Logo / Banner",
		type: "custom",
		render: ({ form }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
				name: "logo",
				children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
					htmlFor: field.name,
					children: "Logo"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "spacye-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(v, {
						pubkey: "d7dad26d0605e309e96b",
						classNameUploader: "uc-auto uc-purple",
						sourceList: "local, gdrive",
						imgOnly: true,
						multiple: false,
						onFileUploadSuccess: (e) => {
							if (e?.cdnUrl) field.handleChange(e.cdnUrl);
						}
					}), field.state.value && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative size-20 overflow-hidden rounded-md border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: field.state.value,
							alt: "Logo",
							className: "h-full w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							variant: "destructive",
							size: "icon",
							className: "absolute top-0 right-0 h-5 w-5 rounded-tr-none rounded-bl-md px-0",
							onClick: () => field.handleChange(null),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: "Remove"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3" })]
						})]
					})]
				})] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
				name: "banner",
				children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
					htmlFor: field.name,
					children: "Banner"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(v, {
						pubkey: "d7dad26d0605e309e96b",
						classNameUploader: "uc-auto uc-purple",
						sourceList: "local, gdrive",
						className: "uc-auto uc-purple",
						imgOnly: true,
						multiple: false,
						onFileUploadSuccess: (e) => {
							if (e?.cdnUrl) field.handleChange(e.cdnUrl);
						}
					}), field.state.value && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-video w-full overflow-hidden rounded-md border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: field.state.value,
							alt: "Banner",
							className: "h-full w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							variant: "destructive",
							size: "icon",
							className: "absolute top-0 right-0 h-5 w-5 rounded-tr-none rounded-bl-md px-0",
							onClick: () => field.handleChange(null),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: "Remove"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3" })]
						})]
					})]
				})] })
			})]
		})
	},
	{
		name: "address",
		label: "Address",
		type: "text",
		required: true,
		placeholder: "e.g. 123 Tech St, Silicon Valley"
	},
	{
		name: "phone",
		label: "Phone / Email",
		type: "custom",
		render: ({ form }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
				name: "phone",
				children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
					htmlFor: field.name,
					children: "Phone"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: field.name,
					value: field.state.value,
					onBlur: field.handleBlur,
					onChange: (e) => field.handleChange(e.target.value),
					placeholder: "e.g. +1 234 567 8900"
				})] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
				name: "email",
				children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
					htmlFor: field.name,
					children: "Notification Email (Coming Soon)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: field.name,
					value: field.state.value,
					onBlur: field.handleBlur,
					onChange: (e) => field.handleChange(e.target.value),
					placeholder: "Enter email for notifications",
					disabled: true
				})] })
			})]
		})
	},
	{
		name: "enableNotification",
		label: "Notifications",
		type: "custom",
		render: ({ form }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
			name: "enableNotification",
			children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-row items-center justify-between rounded-lg border p-4 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-0.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$1, {
						htmlFor: field.name,
						className: "text-base",
						children: "Enable Notifications"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground text-sm",
						children: "Receive updates about your shop."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
					id: field.name,
					checked: field.state.value,
					onCheckedChange: (checked) => field.handleChange(checked)
				})]
			})
		})
	},
	{
		name: "_paymentInfo",
		type: "custom",
		render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator$1, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-lg border bg-muted/50 p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "mb-2 font-semibold",
				children: "Payment Information"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground text-sm",
				children: "Stripe connection will be available soon to handle your payments securely."
			})]
		})] })
	}
];
function AddShopDialog({ open, onOpenChange, onSubmit }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EntityFormDialogExtended, {
		open,
		onOpenChange,
		onSubmit,
		title: "Shop",
		description: "Enter the details for your new shop.",
		fields: fields$1,
		submitButtonText: {
			create: "Create Shop",
			update: "Save Shop"
		},
		contentClassName: "sm:max-w-150",
		validationSchema: createShopSchema
	});
}
var fields = [
	{
		name: "name",
		label: "Shop Name",
		type: "text",
		placeholder: "My Awesome Shop"
	},
	{
		name: "category",
		label: "Category",
		type: "text",
		placeholder: "Electronics, Fashion, etc."
	},
	{
		name: "description",
		label: "Description",
		type: "textarea",
		placeholder: "Tell us about your shop..."
	},
	{
		name: "logo",
		label: "Logo / Banner",
		type: "custom",
		render: ({ form }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
				name: "logo",
				children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
					htmlFor: field.name,
					children: "Logo"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(v, {
						pubkey: "d7dad26d0605e309e96b",
						classNameUploader: "uc-auto uc-purple",
						sourceList: "local, gdrive",
						imgOnly: true,
						multiple: false,
						onFileUploadSuccess: (e) => {
							if (e?.cdnUrl) field.handleChange(e.cdnUrl);
						}
					}), field.state.value && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative size-20 overflow-hidden rounded-md border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: field.state.value,
							alt: "Logo",
							className: "h-full w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							variant: "destructive",
							size: "icon",
							className: "absolute top-0 right-0 h-5 w-5 rounded-tr-none rounded-bl-md px-0",
							onClick: () => field.handleChange(""),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: "Remove"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3" })]
						})]
					})]
				})] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
				name: "banner",
				children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
					htmlFor: field.name,
					children: "Banner"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(v, {
						pubkey: "d7dad26d0605e309e96b",
						classNameUploader: "uc-auto uc-purple",
						sourceList: "local, gdrive",
						imgOnly: true,
						multiple: false,
						onFileUploadSuccess: (e) => {
							if (e?.cdnUrl) field.handleChange(e.cdnUrl);
						}
					}), field.state.value && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-video w-full overflow-hidden rounded-md border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: field.state.value,
							alt: "Banner",
							className: "h-full w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							variant: "destructive",
							size: "icon",
							className: "absolute top-0 right-0 h-5 w-5 rounded-tr-none rounded-bl-md px-0",
							onClick: () => field.handleChange(""),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: "Remove"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3" })]
						})]
					})]
				})] })
			})]
		})
	}
];
function EditShopDialog({ open, onOpenChange, shop, onSubmit, isSubmitting }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EntityFormDialogExtended, {
		open,
		onOpenChange,
		onSubmit,
		isSubmitting,
		initialValues: {
			id: shop.id,
			name: shop.name || "",
			description: shop.description || "",
			logo: shop.logo || "",
			banner: shop.banner || "",
			category: shop.category || ""
		},
		title: "Shop",
		description: "Update your shop's appearance and details.",
		fields,
		submitButtonText: {
			create: "Create Shop",
			update: "Save Changes"
		},
		contentClassName: "sm:max-w-150",
		validationSchema: updateShopSchema
	});
}
function ShopCard({ shop, canManage, className }) {
	const [isDialogOpen, setIsDialogOpen] = (0, import_react.useState)(false);
	const { updateShop, isUpdating } = useShops();
	const handleUpdateShop = async (data) => {
		try {
			await updateShop(data);
			setIsDialogOpen(false);
		} catch (error) {
			console.error("Failed to update shop:", error);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: cn("pt-0", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-32 rounded-t-xl bg-linear-to-br from-primary/20 to-primary/5",
				children: [shop.banner ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: shop.banner,
					alt: shop.name,
					className: "h-full w-full rounded-t-xl object-cover"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 flex items-center justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex size-16 items-center justify-center rounded-full bg-background shadow-lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-bold text-2xl text-primary",
							children: shop.name.charAt(0)
						})
					})
				}), shop.logo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "-bottom-8 absolute left-6 rounded-full border-4 border-background bg-background shadow-md",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: shop.logo,
						alt: shop.name,
						className: "size-16 rounded-full object-cover"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
				className: "space-y-2 pt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-lg leading-tight",
							children: shop.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 line-clamp-2 text-muted-foreground text-sm",
							children: shop.description
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: shop.status === "active" ? "default" : "secondary",
						children: shop.status
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4 text-muted-foreground text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: shop.category || "Uncategorized" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3 fill-yellow-400 text-yellow-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: shop.rating })]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
				className: "space-y-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-3 gap-2 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg bg-muted p-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-center gap-1 text-muted-foreground text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "size-3" }), "Products"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-semibold text-sm",
								children: shop.totalProducts
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg bg-muted p-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-center gap-1 text-muted-foreground text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "size-3" }), "Orders"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-semibold text-sm",
								children: shop.totalOrders
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg bg-muted p-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-muted-foreground text-xs",
								children: "Revenue"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-semibold text-sm",
								children: shop.monthlyRevenue
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardFooter, {
				className: "gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					className: "flex-1",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop/$slug",
						params: { slug: shop.slug },
						children: "View Dashboard"
					})
				}), canManage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "flex-1",
					onClick: () => setIsDialogOpen(true),
					children: "Manage"
				})]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditShopDialog, {
		open: isDialogOpen,
		onOpenChange: setIsDialogOpen,
		shop,
		onSubmit: handleUpdateShop,
		isSubmitting: isUpdating
	})] });
}
function ShopHeader({ onCreateShop, title = "My Shops", description = "Manage and monitor all your shops in one place", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-bold text-3xl tracking-tight",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: description
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: onCreateShop,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-2 size-4" }), "Create New Shop"]
			})]
		})
	});
}
function MyShopsTemplate({ shops, onCreateShop, currentVendorId, title, description }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopHeader, {
			onCreateShop,
			title,
			description
		}), shops.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-64 flex-col items-center justify-center rounded-lg border border-dashed text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-semibold text-lg",
					children: "No shops found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-sm text-muted-foreground text-sm",
					children: "You haven't created any shops yet. Create your first shop to get started."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: onCreateShop,
					className: "mt-4",
					variant: "outline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-2 size-4" }), "Create Shop"]
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
			children: shops.map((shop) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopCard, {
				shop,
				canManage: shop.vendorId === currentVendorId
			}, shop.id))
		})]
	});
}
//#endregion
export { MyShopsTemplate as n, AddShopDialog as t };
