import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-Pgq5HWQm.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { n as buttonVariants, t as Button } from "./button-DQSToWRX.mjs";
import { a as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { Mt as ChevronLeft, Nt as ChevronDown, Rt as Calendar, jt as ChevronRight } from "../_libs/lucide-react.mjs";
import { t as Input } from "./input-BP4N0xFb.mjs";
import { a as FieldLabel, t as Field } from "./field--Rw3cGW0.mjs";
import { t as Textarea } from "./textarea-vo1OZjof.mjs";
import { t as shopBySlugQueryOptions } from "./use-shops-Cbmwju82.mjs";
import { n as PopoverContent, r as PopoverTrigger, t as Popover$1 } from "./popover-pu9A7ROb.mjs";
import { d as format, r as parseISO } from "../_libs/date-fns.mjs";
import { t as ConfirmDeleteDialog } from "./confirm-delete-dialog-BCCUdt4j.mjs";
import { t as EntityFormDialogExtended } from "./entity-form-dialog-extended-DEYvjcQR.mjs";
import { n as couponFormSchema } from "./coupon-query-CudBYs7G.mjs";
import { t as useEntityCRUD } from "./use-entity-crud-bXISf9GP.mjs";
import { s as createVendorCouponsFetcher, w as useCoupons } from "./use-vendor-entity-fetcher-DwnqReOY.mjs";
import { t as Route } from "./coupons-C_cid9Xe.mjs";
import { n as CouponHeader, r as VendorCouponTable } from "./coupon-table-CEoIDHm1.mjs";
import { t as Switch$1 } from "./switch-CuGkaFH3.mjs";
import { n as getDefaultClassNames, t as DayPicker } from "../_libs/react-day-picker.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/coupons-C6MHbFzw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Calendar$1({ className, classNames, showOutsideDays = true, captionLayout = "label", buttonVariant = "ghost", formatters, components, ...props }) {
	const defaultClassNames = getDefaultClassNames();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayPicker, {
		showOutsideDays,
		className: cn("group/calendar bg-background p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent", String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`, String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`, className),
		captionLayout,
		formatters: {
			formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
			...formatters
		},
		classNames: {
			root: cn("w-fit", defaultClassNames.root),
			months: cn("relative flex flex-col gap-4 md:flex-row", defaultClassNames.months),
			month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
			nav: cn("absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1", defaultClassNames.nav),
			button_previous: cn(buttonVariants({ variant: buttonVariant }), "size-(--cell-size) p-0 select-none aria-disabled:opacity-50", defaultClassNames.button_previous),
			button_next: cn(buttonVariants({ variant: buttonVariant }), "size-(--cell-size) p-0 select-none aria-disabled:opacity-50", defaultClassNames.button_next),
			month_caption: cn("flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)", defaultClassNames.month_caption),
			dropdowns: cn("flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium", defaultClassNames.dropdowns),
			dropdown_root: cn("relative rounded-md border border-input shadow-xs has-focus:border-ring has-focus:ring-[3px] has-focus:ring-ring/50", defaultClassNames.dropdown_root),
			dropdown: cn("absolute inset-0 bg-popover opacity-0", defaultClassNames.dropdown),
			caption_label: cn("font-medium select-none", captionLayout === "label" ? "text-sm" : "flex h-8 items-center gap-1 rounded-md pr-1 pl-2 text-sm [&>svg]:size-3.5 [&>svg]:text-muted-foreground", defaultClassNames.caption_label),
			table: "w-full border-collapse",
			weekdays: cn("flex", defaultClassNames.weekdays),
			weekday: cn("flex-1 rounded-md text-[0.8rem] font-normal text-muted-foreground select-none", defaultClassNames.weekday),
			week: cn("mt-2 flex w-full", defaultClassNames.week),
			week_number_header: cn("w-(--cell-size) select-none", defaultClassNames.week_number_header),
			week_number: cn("text-[0.8rem] text-muted-foreground select-none", defaultClassNames.week_number),
			day: cn("group/day relative aspect-square h-full w-full p-0 text-center select-none [&:last-child[data-selected=true]_button]:rounded-r-md", props.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-md" : "[&:first-child[data-selected=true]_button]:rounded-l-md", defaultClassNames.day),
			range_start: cn("rounded-l-md bg-accent", defaultClassNames.range_start),
			range_middle: cn("rounded-none", defaultClassNames.range_middle),
			range_end: cn("rounded-r-md bg-accent", defaultClassNames.range_end),
			today: cn("rounded-md bg-accent text-accent-foreground data-[selected=true]:rounded-none", defaultClassNames.today),
			outside: cn("text-muted-foreground aria-selected:text-muted-foreground", defaultClassNames.outside),
			disabled: cn("text-muted-foreground opacity-50", defaultClassNames.disabled),
			hidden: cn("invisible", defaultClassNames.hidden),
			...classNames
		},
		components: {
			Root: ({ className, rootRef, ...props }) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-slot": "calendar",
					ref: rootRef,
					className: cn(className),
					...props
				});
			},
			Chevron: ({ className, orientation, ...props }) => {
				if (orientation === "left") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
					className: cn("size-4", className),
					...props
				});
				if (orientation === "right") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
					className: cn("size-4", className),
					...props
				});
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
					className: cn("size-4", className),
					...props
				});
			},
			DayButton: CalendarDayButton,
			WeekNumber: ({ children, ...props }) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					...props,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex size-(--cell-size) items-center justify-center text-center",
						children
					})
				});
			},
			...components
		},
		...props
	});
}
function CalendarDayButton({ className, day, modifiers, ...props }) {
	const defaultClassNames = getDefaultClassNames();
	const ref = import_react.useRef(null);
	import_react.useEffect(() => {
		if (modifiers.focused) ref.current?.focus();
	}, [modifiers.focused]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		ref,
		variant: "ghost",
		size: "icon",
		"data-day": day.date.toLocaleDateString(),
		"data-selected-single": modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle,
		"data-range-start": modifiers.range_start,
		"data-range-end": modifiers.range_end,
		"data-range-middle": modifiers.range_middle,
		className: cn("flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground data-[range-middle=true]:rounded-none data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground dark:hover:text-accent-foreground [&>span]:text-xs [&>span]:opacity-70", defaultClassNames.day, className),
		...props
	});
}
function DatePicker({ date, setDate, className, placeholder = "Pick a date", disabled = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "outline",
			disabled,
			className: cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground", className),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "mr-2 h-4 w-4" }), date ? format(date, "PPP") : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: placeholder })]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContent, {
		className: "w-auto p-0",
		align: "start",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar$1, {
			mode: "single",
			selected: date,
			onSelect: setDate,
			initialFocus: true
		})
	})] });
}
var fields = [
	{
		name: "code",
		label: "Coupon Code",
		required: true,
		placeholder: "SUMMER2024",
		description: "Unique code for the coupon (uppercase).",
		type: "text"
	},
	{
		name: "description",
		label: "Description",
		type: "textarea",
		placeholder: "Summer sale discount..."
	},
	{
		name: "image",
		label: "Image URL",
		type: "file",
		placeholder: "https://example.com/image.png",
		description: "Optional image for the coupon."
	},
	{
		name: "type",
		label: "Discount Type",
		type: "select",
		required: true,
		defaultValue: "percentage",
		placeholder: "Select type",
		selectOptions: [
			{
				label: "Percentage",
				value: "percentage"
			},
			{
				label: "Fixed Amount",
				value: "fixed"
			},
			{
				label: "Free Shipping",
				value: "free_shipping"
			}
		]
	},
	{
		name: "discountAmount",
		type: "custom",
		render: ({ form }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
			selector: (state) => state.values.type,
			children: (type) => {
				const isFreeShipping = type === "free_shipping";
				const isPercentage = type === "percentage";
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
					name: "discountAmount",
					children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
						className: isFreeShipping ? "opacity-50" : "",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
							htmlFor: field.name,
							required: !isFreeShipping,
							children: isPercentage ? "Discount (%)" : "Discount Amount ($)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: field.name,
							name: field.name,
							type: "number",
							value: field.state.value,
							onBlur: field.handleBlur,
							onChange: (e) => field.handleChange(e.target.value),
							disabled: isFreeShipping,
							placeholder: isPercentage ? "10" : "10.00"
						})]
					})
				});
			}
		})
	},
	{
		name: "minimumCartAmount",
		label: "Min. Cart Amount",
		type: "text"
	},
	{
		name: "maximumDiscountAmount",
		type: "custom",
		render: ({ form }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
			selector: (state) => state.values.type,
			children: (type) => {
				if (type !== "percentage") return null;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
					name: "maximumDiscountAmount",
					children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
						htmlFor: field.name,
						children: "Max. Discount ($)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: field.name,
						name: field.name,
						type: "number",
						value: field.state.value ?? "",
						onBlur: field.handleBlur,
						onChange: (e) => field.handleChange(e.target.value),
						placeholder: "Optional limit"
					})] })
				});
			}
		})
	},
	{
		name: "activeFrom",
		type: "custom",
		defaultValue: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
		render: ({ form }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
				name: "activeFrom",
				children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
					htmlFor: field.name,
					required: true,
					children: "Active From"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DatePicker, {
					date: field.state.value ? parseISO(field.state.value) : void 0,
					setDate: (date) => field.handleChange(date ? format(date, "yyyy-MM-dd") : ""),
					placeholder: "Pick a start date"
				})] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
				name: "activeTo",
				children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
					htmlFor: field.name,
					required: true,
					children: "Active To"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DatePicker, {
					date: field.state.value ? parseISO(field.state.value) : void 0,
					setDate: (date) => field.handleChange(date ? format(date, "yyyy-MM-dd") : ""),
					placeholder: "Pick an end date"
				})] })
			})]
		})
	},
	{
		name: "activeTo",
		type: "custom",
		defaultValue: new Date(Date.now() + 720 * 60 * 60 * 1e3).toISOString().split("T")[0],
		render: () => null
	},
	{
		name: "usageLimit",
		label: "Usage Limit",
		type: "text",
		placeholder: "Unlimited"
	},
	{
		name: "usageLimitPerUser",
		label: "Usage Limit Per User",
		type: "text",
		defaultValue: 1,
		placeholder: "1"
	},
	{
		name: "isActive",
		type: "custom",
		defaultValue: true,
		render: ({ form }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
			name: "isActive",
			children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
					id: field.name,
					checked: field.state.value,
					onCheckedChange: field.handleChange
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
					htmlFor: field.name,
					className: "mb-0",
					children: "Active"
				})]
			})
		})
	},
	{
		name: "applicableTo",
		label: "Applicable To",
		type: "select",
		defaultValue: "all",
		placeholder: "Select applicability",
		selectOptions: [
			{
				label: "All Products",
				value: "all"
			},
			{
				label: "Specific Products",
				value: "specific_products"
			},
			{
				label: "Specific Categories",
				value: "specific_categories"
			}
		]
	},
	{
		name: "productIds",
		type: "custom",
		defaultValue: [],
		render: ({ form }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
			selector: (state) => state.values.applicableTo,
			children: (applicableTo) => {
				if (applicableTo !== "specific_products") return null;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
					name: "productIds",
					children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
							htmlFor: field.name,
							required: true,
							children: "Product IDs"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: field.name,
							name: field.name,
							value: Array.isArray(field.state.value) ? field.state.value.join(", ") : field.state.value,
							onChange: (e) => field.handleChange(e.target.value.split(",").map((s) => s.trim()).filter(Boolean)),
							placeholder: "prod_123, prod_456",
							className: "font-mono text-sm"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Comma-separated list of product IDs."
						})
					] })
				});
			}
		})
	},
	{
		name: "categoryIds",
		type: "custom",
		defaultValue: [],
		render: ({ form }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
			selector: (state) => state.values.applicableTo,
			children: (applicableTo) => {
				if (applicableTo !== "specific_categories") return null;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
					name: "categoryIds",
					children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
							htmlFor: field.name,
							required: true,
							children: "Category IDs"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: field.name,
							name: field.name,
							value: Array.isArray(field.state.value) ? field.state.value.join(", ") : field.state.value,
							onChange: (e) => field.handleChange(e.target.value.split(",").map((s) => s.trim()).filter(Boolean)),
							placeholder: "cat_123, cat_456",
							className: "font-mono text-sm"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Comma-separated list of category IDs."
						})
					] })
				});
			}
		})
	}
];
function AddCouponDialog({ open, onOpenChange, onSubmit, role = "vendor", isSubmitting = false, initialValues }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EntityFormDialogExtended, {
		open,
		onOpenChange,
		onSubmit,
		isSubmitting,
		initialValues: initialValues ? {
			...initialValues,
			discountAmount: initialValues.discountAmount?.toString() ?? "0",
			minimumCartAmount: initialValues.minimumCartAmount?.toString() ?? "0",
			maximumDiscountAmount: initialValues.maximumDiscountAmount?.toString() ?? void 0,
			activeFrom: initialValues.activeFrom ? new Date(initialValues.activeFrom).toISOString().split("T")[0] : "",
			activeTo: initialValues.activeTo ? new Date(initialValues.activeTo).toISOString().split("T")[0] : ""
		} : void 0,
		title: role === "admin" ? "Platform Coupon" : "Shop Coupon",
		description: role === "admin" ? "Create a new discount coupon for the platform." : "Create a new discount coupon for your shop.",
		validationSchema: couponFormSchema,
		fields,
		submitButtonText: {
			create: "Add Coupon",
			update: "Save Coupon"
		},
		contentClassName: "sm:max-w-2xl max-h-[90vh] overflow-y-auto"
	});
}
function ShopCouponsTemplate({ server, onAddCoupon, onEditCoupon, onDeleteCoupon, mutationState, isCouponMutating }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CouponHeader, { onAdd: onAddCoupon }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VendorCouponTable, {
			server,
			onEdit: onEditCoupon,
			onDelete: onDeleteCoupon,
			mutationState,
			isCouponMutating
		})]
	});
}
function RouteComponent() {
	const { slug } = Route.useParams();
	const { data: shopData } = useSuspenseQuery(shopBySlugQueryOptions(slug));
	const shopId = shopData?.shop?.id ?? "";
	const server = (0, import_react.useMemo)(() => createVendorCouponsFetcher(shopId), [shopId]);
	const { createCoupon, updateCoupon, deleteCoupon, mutationState, isCouponMutating } = useCoupons(shopId);
	const { isDialogOpen: isAddCouponDialogOpen, setIsDialogOpen: setIsAddCouponDialogOpen, editingItem: editingCoupon, deletingItem: deletingCoupon, setDeletingItem: setDeletingCoupon, handleAdd: handleAddCoupon, handleEdit: handleEditCoupon, handleDelete: handleDeleteCoupon, confirmDelete, handleDialogClose } = useEntityCRUD({ onDelete: async (id) => {
		await deleteCoupon(id);
	} });
	const handleCouponSubmit = async (data) => {
		try {
			const couponData = {
				code: data.code,
				description: data.description || void 0,
				type: data.type,
				discountAmount: data.discountAmount,
				minimumCartAmount: data.minimumCartAmount || "0",
				maximumDiscountAmount: data.maximumDiscountAmount || void 0,
				activeFrom: data.activeFrom,
				activeTo: data.activeTo,
				usageLimit: data.usageLimit || void 0,
				usageLimitPerUser: data.usageLimitPerUser ?? 1,
				isActive: data.isActive ?? true,
				applicableTo: data.applicableTo ?? "all",
				productIds: data.productIds ?? [],
				categoryIds: data.categoryIds ?? []
			};
			if (editingCoupon) await updateCoupon({
				id: editingCoupon.id,
				...couponData
			});
			else await createCoupon(couponData);
			handleDialogClose();
		} catch (error) {
			console.error("Failed to save coupon:", error);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopCouponsTemplate, {
			server,
			onAddCoupon: handleAddCoupon,
			onEditCoupon: handleEditCoupon,
			onDeleteCoupon: handleDeleteCoupon,
			mutationState,
			isCouponMutating
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddCouponDialog, {
			open: isAddCouponDialogOpen,
			onOpenChange: (open) => {
				if (!open) handleDialogClose();
				else setIsAddCouponDialogOpen(open);
			},
			onSubmit: handleCouponSubmit,
			isSubmitting: mutationState.isAnyMutating,
			initialValues: editingCoupon
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDeleteDialog, {
			open: !!deletingCoupon,
			onOpenChange: (open) => !open && setDeletingCoupon(null),
			onConfirm: confirmDelete,
			isDeleting: mutationState.deletingId === deletingCoupon?.id,
			itemName: deletingCoupon?.code,
			entityType: "coupon"
		})
	] });
}
//#endregion
export { RouteComponent as component };
