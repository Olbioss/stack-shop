import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as cn } from "./utils-Pgq5HWQm.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { t as Input } from "./input-BP4N0xFb.mjs";
import { t as Separator$1 } from "./separator-CLOPUVDG.mjs";
import { N as Plus, O as Search, Pt as Check, kt as ChevronsUpDown, t as X, u as Trash2 } from "../_libs/lucide-react.mjs";
import { a as FieldLabel, r as FieldError, t as Field } from "./field--Rw3cGW0.mjs";
import { a as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { c as productFormSchema } from "./product-query-DTSuSPZY.mjs";
import { t as shopBySlugQueryOptions } from "./use-shops-Cbmwju82.mjs";
import { n as PopoverContent, r as PopoverTrigger, t as Popover$1 } from "./popover-pu9A7ROb.mjs";
import { t as Badge } from "./badge-NA1wPZ4a.mjs";
import "./dialog-D7cdI8cA.mjs";
import { t as ConfirmDeleteDialog } from "./confirm-delete-dialog-BCCUdt4j.mjs";
import { t as getFieldErrors } from "./get-field-errors-D_p2DhaE.mjs";
import { n as validateOptionalField, t as validateField } from "./validators-q4Y98w6j.mjs";
import { t as EntityFormDialogExtended } from "./entity-form-dialog-extended-DEYvjcQR.mjs";
import { t as useEntityCRUD } from "./use-entity-crud-bXISf9GP.mjs";
import { T as useProducts, b as taxRatesQueryOptions, l as createVendorProductsFetcher, n as brandsQueryOptions, t as attributesQueryOptions, v as shippingMethodsQueryOptions, y as tagsQueryOptions } from "./use-vendor-entity-fetcher-C_d9aXVF.mjs";
import { t as categoriesQueryOptions } from "./use-category-CArlVryS.mjs";
import { t as Switch$1 } from "./switch-CuGkaFH3.mjs";
import { n as ProductTable, t as ProductHeader } from "./product-table-DT6MkyLe.mjs";
import { t as Route } from "./products-BNNSwrrq.mjs";
import { t as _e } from "../_libs/cmdk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-Vo2FAWHs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Command$1({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e, {
		"data-slot": "command",
		className: cn("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", className),
		...props
	});
}
function CommandInput({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-slot": "command-input-wrapper",
		className: "flex h-9 items-center gap-2 border-b px-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 shrink-0 opacity-50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Input, {
			"data-slot": "command-input",
			className: cn("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className),
			...props
		})]
	});
}
function CommandList({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.List, {
		"data-slot": "command-list",
		className: cn("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", className),
		...props
	});
}
function CommandEmpty({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Empty, {
		"data-slot": "command-empty",
		className: "py-6 text-center text-sm",
		...props
	});
}
function CommandGroup({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Group, {
		"data-slot": "command-group",
		className: cn("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", className),
		...props
	});
}
function CommandItem({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Item, {
		"data-slot": "command-item",
		className: cn("relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", className),
		...props
	});
}
/**
* Complete, correctly-typed defaults for every field the product form binds —
* including names used only inside `custom` render blocks (which `EntityFormField`
* entries can't register). Passed via the `defaultValues` prop so no form field
* starts `undefined` (controlled inputs) or wrongly-typed (arrays/records).
*/
var PRODUCT_FORM_DEFAULTS = {
	name: "",
	slug: "",
	sku: "",
	shortDescription: "",
	regularPrice: "",
	sellingPrice: "",
	costPrice: "",
	stock: 0,
	lowStockThreshold: 5,
	trackInventory: true,
	description: "",
	productType: "simple",
	status: "active",
	categoryId: "",
	brandId: "",
	tagIds: [],
	attributeIds: [],
	shippingMethodIds: [],
	attributeValues: {},
	variationPrices: {},
	taxId: "",
	isFeatured: false,
	isActive: true,
	metaTitle: "",
	metaDescription: "",
	thumbnailImage: "",
	galleryImages: []
};
/**
* Single-select searchable combobox bound to a TanStack Form field.
* Owns its Popover `open` state so it can close itself when an option is
* picked — a bare `render` function can't hold `useState`.
*/
function ComboboxField({ field, label, options, placeholder, searchPlaceholder, emptyText, disabled }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const selected = options.find((o) => o.id === field.state.value);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover$1, {
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				role: "combobox",
				disabled,
				className: cn("w-full justify-between", !field.state.value && "text-muted-foreground"),
				children: [selected ? selected.name : placeholder, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronsUpDown, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContent, {
			className: "w-full p-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Command$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandInput, { placeholder: searchPlaceholder }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandList, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandEmpty, { children: emptyText }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandGroup, { children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
				value: option.name,
				onSelect: () => {
					field.handleChange(option.id);
					setOpen(false);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: cn("mr-2 h-4 w-4", field.state.value === option.id ? "opacity-100" : "opacity-0") }), option.name]
			}, option.id)) })] })] })
		})]
	})] });
}
/**
* Multi-select tags combobox bound to a TanStack Form array field.
* Owns its Popover `open` state so it closes when an option is toggled.
*/
function TagsField({ field, tags, disabled }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const selected = field.state.value || [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: "Tags" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover$1, {
			open,
			onOpenChange: setOpen,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					variant: "outline",
					role: "combobox",
					disabled,
					className: cn("w-full justify-between", !selected.length && "text-muted-foreground"),
					children: [selected.length > 0 ? `${selected.length} tags selected` : "Select tags", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronsUpDown, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContent, {
				className: "w-full p-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Command$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandInput, { placeholder: "Search tags..." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandList, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandEmpty, { children: "No tag found." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandGroup, { children: tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
					value: tag.name,
					onSelect: () => {
						const next = selected.includes(tag.id) ? selected.filter((id) => id !== tag.id) : [...selected, tag.id];
						field.handleChange(next);
						setOpen(false);
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: cn("mr-2 h-4 w-4", selected.includes(tag.id) ? "opacity-100" : "opacity-0") }), tag.name]
				}, tag.id)) })] })] })
			})]
		}),
		selected.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 flex flex-wrap gap-1",
			children: selected.map((tagId) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
					variant: "secondary",
					children: [tags.find((t) => t.id === tagId)?.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "ml-1 rounded-full outline-none focus:ring-2 focus:ring-ring",
						disabled,
						onClick: () => field.handleChange(selected.filter((id) => id !== tagId)),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3" })
					})]
				}, tagId);
			})
		})
	] });
}
/**
* "Add Attribute" picker. Owns its Popover `open` state so it closes after an
* attribute is added to the `attributeIds` form field.
*/
function AddAttributePopover({ form, availableAttributes, disabled }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover$1, {
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "button",
				variant: "outline",
				size: "sm",
				disabled,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-2 size-3" }), "Add Attribute"]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContent, {
			className: "w-full p-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Command$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandInput, { placeholder: "Search attributes..." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandList, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandEmpty, { children: "No attribute found." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandGroup, { children: availableAttributes.map((attr) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandItem, {
				value: attr.name,
				onSelect: () => {
					const currentIds = form.getFieldValue("attributeIds") || [];
					if (!currentIds.includes(attr.id)) form.setFieldValue("attributeIds", [...currentIds, attr.id]);
					setOpen(false);
				},
				children: attr.name
			}, attr.id)) })] })] })
		})]
	});
}
function AddProductDialog({ open, onOpenChange, onSubmit, isSubmitting = false, categories, brands, tags, availableAttributes = [], taxes = [], shippingMethods = [], initialValues }) {
	const fields = (0, import_react.useMemo)(() => [
		{
			name: "name",
			label: "Product Name",
			required: true,
			placeholder: "e.g. Wireless Headphones",
			autoGenerateSlug: "createOnly"
		},
		{
			name: "slug",
			label: "Slug",
			required: true,
			placeholder: "e.g. wireless-headphones",
			description: "URL-friendly identifier for your product"
		},
		{
			name: "sku",
			label: "SKU",
			required: true,
			placeholder: "e.g. WH-001"
		},
		{
			name: "productType",
			label: "Product Type",
			type: "select",
			required: true,
			defaultValue: "simple",
			selectOptions: [{
				label: "Simple Product",
				value: "simple"
			}, {
				label: "Variable Product",
				value: "variable"
			}]
		},
		{
			name: "status",
			label: "Status",
			type: "select",
			required: true,
			defaultValue: "active",
			selectOptions: [
				{
					label: "Active",
					value: "active"
				},
				{
					label: "Draft",
					value: "draft"
				},
				{
					label: "Archived",
					value: "archived"
				}
			]
		},
		{
			name: "sellingPrice",
			label: "Selling Price",
			required: true,
			placeholder: "e.g. 99.99"
		},
		{
			name: "regularPrice",
			label: "Regular Price",
			placeholder: "e.g. 99.99"
		},
		{
			name: "costPrice",
			label: "Cost Price",
			placeholder: "e.g. 99.99"
		},
		{
			name: "inventory",
			type: "custom",
			render: ({ form, isSubmitting: isSubmittingExternal }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
						name: "trackInventory",
						children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
								id: "trackInventory",
								checked: field.state.value,
								onCheckedChange: field.handleChange,
								disabled: isSubmittingExternal
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
								htmlFor: "trackInventory",
								children: "Track Inventory"
							})]
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
						name: "stock",
						validators: { onBlur: validateField(productFormSchema.shape.stock) },
						children: (field) => {
							const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
								"data-invalid": isInvalid,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
										required: true,
										children: "Stock Quantity"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										type: "number",
										value: field.state.value,
										onBlur: field.handleBlur,
										onChange: (e) => field.handleChange(e.target.value),
										placeholder: "1",
										disabled: isSubmittingExternal,
										"aria-invalid": isInvalid
									}),
									isInvalid && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, {
										id: field.name,
										errors: getFieldErrors(field.state.meta.errors)
									})
								]
							});
						}
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
						name: "lowStockThreshold",
						validators: { onBlur: validateOptionalField(productFormSchema.shape.lowStockThreshold) },
						children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: "Low Stock Threshold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							value: field.state.value,
							onBlur: field.handleBlur,
							onChange: (e) => field.handleChange(e.target.value),
							placeholder: "5",
							disabled: isSubmittingExternal
						})] })
					})]
				})]
			})
		},
		{
			name: "shippingMethodIds",
			type: "custom",
			render: ({ form, isSubmitting: isSubmittingExternal }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
				name: "shippingMethodIds",
				validators: { onBlur: validateField(productFormSchema.shape.shippingMethodIds) },
				children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: "Shipping Methods" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							role: "combobox",
							disabled: isSubmittingExternal,
							className: cn("w-full justify-between", !field.state.value?.length && "text-muted-foreground"),
							children: [field.state.value?.length > 0 ? `${field.state.value.length} methods selected` : "Select shipping methods", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronsUpDown, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContent, {
						className: "w-full p-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Command$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandInput, { placeholder: "Search shipping methods..." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandList, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandEmpty, { children: "No shipping method found." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandGroup, { children: shippingMethods.map((method) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
							value: method.name,
							onSelect: () => {
								const current = field.state.value || [];
								const next = current.includes(method.id) ? current.filter((id) => id !== method.id) : [...current, method.id];
								field.handleChange(next);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: cn("mr-2 h-4 w-4", field.state.value?.includes(method.id) ? "opacity-100" : "opacity-0") }), method.name]
						}, method.id)) })] })] })
					})] }),
					field.state.value?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 flex flex-wrap gap-1",
						children: field.state.value.map((methodId) => {
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								variant: "secondary",
								children: [shippingMethods.find((m) => m.id === methodId)?.name, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "ml-1 rounded-full outline-none focus:ring-2 focus:ring-ring",
									disabled: isSubmittingExternal,
									onClick: () => field.handleChange(field.state.value.filter((id) => id !== methodId)),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3 w-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "sr-only",
										children: "Remove"
									})]
								})]
							}, methodId);
						})
					})
				] })
			})
		},
		{
			name: "relations",
			type: "custom",
			render: ({ form, isSubmitting: isSubmittingExternal }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
					name: "categoryId",
					children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComboboxField, {
						field,
						label: "Category",
						options: categories,
						placeholder: "Select category",
						searchPlaceholder: "Search category...",
						emptyText: "No category found.",
						disabled: isSubmittingExternal
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
					name: "brandId",
					children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComboboxField, {
						field,
						label: "Brand",
						options: brands,
						placeholder: "Select brand",
						searchPlaceholder: "Search brand...",
						emptyText: "No brand found.",
						disabled: isSubmittingExternal
					})
				})]
			})
		},
		{
			name: "tagIds",
			type: "custom",
			render: ({ form, isSubmitting: isSubmittingExternal }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
				name: "tagIds",
				children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagsField, {
					field,
					tags,
					disabled: isSubmittingExternal
				})
			})
		},
		{
			name: "taxId",
			label: "Tax Rate",
			type: "select",
			placeholder: "Select tax rate",
			selectOptions: taxes.map((t) => ({
				label: `${t.name} (${t.rate}%)`,
				value: t.id
			}))
		},
		{
			name: "description",
			label: "Description",
			type: "textarea",
			placeholder: "Detailed product description..."
		},
		{
			name: "shortDescription",
			label: "Short Description",
			type: "textarea",
			placeholder: "Brief summary of the product..."
		},
		{
			name: "thumbnailImage",
			label: "Thumbnail Image",
			type: "file",
			required: true
		},
		{
			name: "galleryImages",
			label: "Gallery Images",
			type: "file",
			multiple: true
		},
		{
			name: "flags",
			type: "custom",
			render: ({ form, isSubmitting: isSubmittingExternal }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
					name: "isActive",
					children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
							id: "isActive",
							checked: field.state.value,
							onCheckedChange: field.handleChange,
							disabled: isSubmittingExternal
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
							htmlFor: "isActive",
							children: "Active"
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
					name: "isFeatured",
					children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
							id: "isFeatured",
							checked: field.state.value,
							onCheckedChange: field.handleChange,
							disabled: isSubmittingExternal
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
							htmlFor: "isFeatured",
							children: "Featured"
						})]
					})
				})]
			})
		},
		{
			name: "attributes",
			type: "custom",
			render: ({ form, isSubmitting: isSubmittingExternal }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator$1, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-medium text-sm",
							children: "Attributes"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-muted-foreground text-xs",
							children: "Assign attributes to this product."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddAttributePopover, {
							form,
							availableAttributes,
							disabled: isSubmittingExternal
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
							name: "attributeIds",
							children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (field.state.value || []).map((attrId, _i) => {
								const attribute = availableAttributes.find((a) => a.id === attrId);
								if (!attribute) return null;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg border p-4 space-y-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-medium text-sm",
											children: attribute.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											type: "button",
											variant: "ghost",
											size: "icon",
											className: "h-8 w-8 text-muted-foreground hover:text-destructive",
											disabled: isSubmittingExternal,
											onClick: () => {
												const nextIds = field.state.value.filter((id) => id !== attrId);
												field.handleChange(nextIds);
												const currentValues = { ...form.getFieldValue("attributeValues") || {} };
												delete currentValues[attrId];
												form.setFieldValue("attributeValues", currentValues);
											},
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
										name: `attributeValues.${attrId}`,
										children: (valField) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex flex-wrap gap-2",
											children: attribute.values.map((val) => {
												const isSelected = (valField.state.value || []).includes(val.id);
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
													variant: isSelected ? "default" : "outline",
													className: cn("cursor-pointer gap-2", isSelected ? "bg-primary text-primary-foreground" : "hover:bg-accent"),
													onClick: () => {
														if (isSubmittingExternal) return;
														const current = valField.state.value || [];
														const next = current.includes(val.id) ? current.filter((id) => id !== val.id) : [...current, val.id];
														valField.handleChange(next);
													},
													children: [
														attribute.type === "color" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "size-3 rounded-full border border-white/20",
															style: { backgroundColor: val.value }
														}),
														attribute.type === "image" && val.value && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
															src: val.value,
															alt: val.name,
															className: "size-3 rounded-full object-cover"
														}),
														val.name || val.value
													]
												}, val.id);
											})
										})
									})]
								}, attrId);
							}) })
						})
					})]
				})]
			})
		},
		{
			name: "metaTitle",
			type: "text",
			placeholder: "e.g. Best Wireless Headphones 2024",
			label: "Meta Title"
		},
		{
			name: "metaDescription",
			type: "textarea",
			placeholder: "SEO friendly description",
			label: "Meta Description"
		}
	], [
		categories,
		brands,
		tags,
		availableAttributes,
		taxes,
		shippingMethods.map,
		shippingMethods.find
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EntityFormDialogExtended, {
		open,
		onOpenChange,
		title: "Product",
		description: initialValues ? "Update the details for your product." : "Create a new product for your shop.",
		fields,
		validationSchema: productFormSchema,
		defaultValues: PRODUCT_FORM_DEFAULTS,
		initialValues,
		onSubmit: (data) => {
			onSubmit(data, data.status || "active");
		},
		isSubmitting,
		contentClassName: "sm:max-w-2xl max-h-[90vh] overflow-y-auto"
	});
}
function ShopProductsTemplate({ server, onAddProduct, onEdit, onDelete, onToggleActive, mutationState, isProductMutating, showAddButton = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductHeader, {
			onAdd: onAddProduct,
			role: "vendor",
			showAddButton
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductTable, {
			server,
			onEdit,
			onDelete,
			onToggleActive: onToggleActive ? (product) => onToggleActive(product.id) : void 0,
			mutationState,
			isMutating: isProductMutating,
			mode: "vendor"
		})]
	});
}
function RouteComponent() {
	const { slug } = Route.useParams();
	const { data: shopData } = useSuspenseQuery(shopBySlugQueryOptions(slug));
	const shopId = shopData?.shop?.id ?? "";
	const server = (0, import_react.useMemo)(() => createVendorProductsFetcher(shopId), [shopId]);
	const { data: categoriesData } = useSuspenseQuery(categoriesQueryOptions({
		shopId,
		limit: 100,
		offset: 0,
		sortBy: "sortOrder",
		sortDirection: "asc"
	}));
	const { data: brandsData } = useSuspenseQuery(brandsQueryOptions({
		shopId,
		limit: 100,
		offset: 0,
		sortBy: "sortOrder",
		sortDirection: "asc"
	}));
	const { data: tagsData } = useSuspenseQuery(tagsQueryOptions({
		shopId,
		limit: 100,
		offset: 0,
		sortBy: "sortOrder",
		sortDirection: "asc"
	}));
	const { data: attributesData } = useSuspenseQuery(attributesQueryOptions({
		shopId,
		limit: 100,
		offset: 0,
		sortBy: "sortOrder",
		sortDirection: "asc"
	}));
	const { data: taxesData } = useSuspenseQuery(taxRatesQueryOptions({
		shopId,
		limit: 100,
		offset: 0,
		sortBy: "priority",
		sortDirection: "asc"
	}));
	const { data: shippingMethodsData } = useSuspenseQuery(shippingMethodsQueryOptions({
		shopId,
		limit: 100,
		offset: 0,
		isActive: true,
		sortBy: "name",
		sortDirection: "asc"
	}));
	const { createProduct, updateProduct, deleteProduct, mutationState, isProductMutating } = useProducts(shopId);
	const categories = categoriesData?.data?.map((c) => ({
		id: c.id,
		name: c.name
	})) ?? [];
	const brands = brandsData?.data?.map((b) => ({
		id: b.id,
		name: b.name
	})) ?? [];
	const tags = tagsData?.data?.map((t) => ({
		id: t.id,
		name: t.name
	})) ?? [];
	const availableAttributes = attributesData?.data?.map((a) => ({
		id: a.id,
		name: a.name,
		type: a.type,
		values: a.values.map((v) => ({
			id: v.id,
			name: v.name,
			value: v.value
		}))
	})) ?? [];
	const taxes = taxesData?.data?.map((t) => ({
		id: t.id,
		name: t.name,
		rate: t.rate
	})) ?? [];
	const shippingMethods = shippingMethodsData?.data?.map((s) => ({
		id: s.id,
		name: s.name
	})) ?? [];
	const { isDialogOpen, setIsDialogOpen, editingItem: editingProduct, deletingItem: deletingProduct, setDeletingItem: setDeletingProduct, handleAdd: handleAddProduct, handleEdit: handleEditProduct, handleDelete: handleDeleteProduct, confirmDelete, handleDialogClose } = useEntityCRUD({ onDelete: async (id) => {
		await deleteProduct(id);
	} });
	const handleProductSubmit = async (data, status) => {
		console.log("ProductsPage: handleProductSubmit triggered", {
			data,
			status
		});
		try {
			if (editingProduct) {
				console.log("ProductsPage: Updating existing product", editingProduct.id);
				const images = [];
				if (data.thumbnailImage) images.push({
					url: data.thumbnailImage,
					isPrimary: true,
					sortOrder: 0
				});
				if (Array.isArray(data.galleryImages)) data.galleryImages.forEach((url, index) => {
					images.push({
						url,
						isPrimary: false,
						sortOrder: index + 1
					});
				});
				await updateProduct({
					id: editingProduct.id,
					name: data.name,
					sku: data.sku,
					sellingPrice: data.sellingPrice,
					regularPrice: data.regularPrice || void 0,
					costPrice: data.costPrice || void 0,
					stock: Number(data.stock),
					lowStockThreshold: Number(data.lowStockThreshold) || 5,
					trackInventory: data.trackInventory,
					description: data.description,
					categoryId: data.categoryId || void 0,
					brandId: data.brandId || void 0,
					tagIds: data.tagIds,
					attributeIds: data.attributeIds,
					shippingMethodIds: data.shippingMethodIds,
					attributeValues: data.attributeValues,
					taxId: data.taxId || void 0,
					productType: data.productType,
					isActive: data.isActive,
					isFeatured: data.isFeatured,
					metaTitle: data.metaTitle || void 0,
					metaDescription: data.metaDescription || void 0,
					variationPrices: data.variationPrices,
					images,
					status
				});
				console.log("ProductsPage: Product update mutation called successfully");
			} else {
				console.log("ProductsPage: Creating new product");
				const images = [];
				if (data.thumbnailImage) images.push({
					url: data.thumbnailImage,
					isPrimary: true,
					sortOrder: 0
				});
				if (Array.isArray(data.galleryImages)) data.galleryImages.forEach((url, index) => {
					images.push({
						url,
						isPrimary: false,
						sortOrder: index + 1
					});
				});
				await createProduct({
					name: data.name,
					sku: data.sku,
					sellingPrice: data.sellingPrice,
					regularPrice: data.regularPrice || void 0,
					costPrice: data.costPrice || void 0,
					stock: Number(data.stock),
					lowStockThreshold: Number(data.lowStockThreshold) || 5,
					trackInventory: data.trackInventory,
					description: data.description || "",
					shortDescription: data.shortDescription || "",
					categoryId: data.categoryId || void 0,
					brandId: data.brandId || void 0,
					tagIds: data.tagIds,
					attributeIds: data.attributeIds,
					shippingMethodIds: data.shippingMethodIds,
					attributeValues: data.attributeValues,
					taxId: data.taxId || void 0,
					status,
					productType: data.productType,
					isFeatured: data.isFeatured,
					isActive: data.isActive,
					metaTitle: data.metaTitle || void 0,
					metaDescription: data.metaDescription || void 0,
					variationPrices: data.variationPrices,
					images
				});
				console.log("ProductsPage: Product creation mutation called successfully");
				console.log(data);
			}
			handleDialogClose();
		} catch (error) {
			console.error("Failed to save product:", error);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopProductsTemplate, {
			server,
			onAddProduct: handleAddProduct,
			onEdit: handleEditProduct,
			onDelete: handleDeleteProduct,
			mutationState,
			isProductMutating
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddProductDialog, {
			open: isDialogOpen,
			onOpenChange: (open) => {
				setIsDialogOpen(open);
				if (!open) handleDialogClose();
			},
			onSubmit: handleProductSubmit,
			isSubmitting: mutationState.isAnyMutating,
			categories,
			brands,
			tags,
			availableAttributes,
			taxes,
			shippingMethods,
			initialValues: editingProduct ? {
				name: editingProduct.name,
				slug: editingProduct.slug || "",
				sku: editingProduct.sku || "",
				sellingPrice: editingProduct.sellingPrice,
				regularPrice: editingProduct.regularPrice || "",
				costPrice: editingProduct.costPrice || "",
				stock: editingProduct.stock,
				lowStockThreshold: editingProduct.lowStockThreshold || 5,
				trackInventory: editingProduct.trackInventory,
				description: editingProduct.description || "",
				shortDescription: editingProduct.shortDescription || "",
				categoryId: editingProduct.categoryId || "",
				brandId: editingProduct.brandId || "",
				tagIds: editingProduct.tagIds,
				attributeIds: editingProduct.attributeIds,
				shippingMethodIds: editingProduct.shippingMethodIds || [],
				attributeValues: editingProduct.attributeValues || {},
				taxId: editingProduct.taxId || "",
				status: editingProduct.status,
				productType: editingProduct.productType,
				isActive: editingProduct.isActive,
				isFeatured: editingProduct.isFeatured,
				metaTitle: editingProduct.metaTitle || "",
				metaDescription: editingProduct.metaDescription || "",
				variationPrices: editingProduct.variationPrices,
				thumbnailImage: editingProduct.images.find((i) => i.isPrimary)?.url || "",
				galleryImages: editingProduct.images.filter((i) => !i.isPrimary).map((i) => i.url)
			} : null
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDeleteDialog, {
			open: !!deletingProduct,
			onOpenChange: (open) => !open && setDeletingProduct(null),
			onConfirm: confirmDelete,
			isDeleting: mutationState.deletingId === deletingProduct?.id,
			itemName: deletingProduct?.name,
			entityType: "product"
		})
	] });
}
//#endregion
export { RouteComponent as component };
