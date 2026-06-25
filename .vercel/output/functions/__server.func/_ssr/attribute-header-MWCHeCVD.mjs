import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as cn } from "./utils-Pgq5HWQm.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { t as Input } from "./input-BP4N0xFb.mjs";
import { t as Separator$1 } from "./separator-CLOPUVDG.mjs";
import { N as Plus, Pt as Check, Z as LoaderCircle, a as Type, it as Image, u as Trash2, yt as Ellipsis, z as Palette } from "../_libs/lucide-react.mjs";
import { a as DropdownMenuLabel, c as DropdownMenuSeparator, f as DropdownMenuTrigger, i as DropdownMenuItem, r as DropdownMenuContent, t as DropdownMenu$1 } from "./dropdown-menu-uJlchZ0e.mjs";
import { a as FieldLabel, n as FieldDescription, r as FieldError, t as Field } from "./field--Rw3cGW0.mjs";
import { i as TooltipTrigger, n as TooltipContent, r as TooltipProvider, t as Tooltip$1 } from "./tooltip-DECwMe-N.mjs";
import { t as Badge } from "./badge-NA1wPZ4a.mjs";
import { n as attributeValueInputSchema, r as createAttributeSchema } from "./attribute-query-C2g1jHby.mjs";
import { t as getFieldErrors } from "./get-field-errors-D_p2DhaE.mjs";
import { t as validateField } from "./validators-q4Y98w6j.mjs";
import { t as EntityFormDialogExtended } from "./entity-form-dialog-extended-DEYvjcQR.mjs";
import { t as DataTable } from "./page-header-DLbA-yB-.mjs";
import { t as createEntityHeader } from "./entity-header-DzvDdutM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/attribute-header-MWCHeCVD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var formSchema = createAttributeSchema.omit({ shopId: true });
var TYPE_OPTIONS = [
	{
		value: "color",
		label: "Color",
		icon: Palette,
		preview: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-4 rounded-full border bg-white" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-4 rounded-full border bg-yellow-200" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-4 rounded-full border bg-blue-200" })
			]
		})
	},
	{
		value: "image",
		label: "Image",
		icon: Image,
		preview: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex gap-1",
			children: [
				1,
				2,
				3
			].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-4 rounded bg-muted" }, i))
		})
	},
	{
		value: "label",
		label: "Label",
		icon: Type,
		preview: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-4 w-4 items-center justify-center rounded border bg-white text-[8px]",
				children: "XL"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-4 w-4 items-center justify-center rounded border bg-white text-[8px]",
				children: "L"
			})]
		})
	},
	{
		value: "select",
		label: "Select",
		icon: Check,
		preview: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-12 rounded border bg-white" })
	}
];
function generateSlugFromName(name) {
	return name.toLowerCase().trim().replace(/\s+/g, "-");
}
function createTempId() {
	if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
	return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
function AddAttributeDialog({ open, onOpenChange, onSubmit, role = "vendor", isSubmitting = false, initialValues }) {
	const handleValueNameChange = (form, index, nextName, fieldHandler) => {
		fieldHandler(nextName);
		form.setFieldValue(`values[${index}].slug`, generateSlugFromName(nextName));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EntityFormDialogExtended, {
		open,
		onOpenChange,
		onSubmit,
		isSubmitting,
		initialValues: initialValues ? {
			...initialValues,
			values: initialValues.values.map((v) => ({
				id: v.id || createTempId(),
				name: v.name,
				slug: v.slug,
				value: v.value
			}))
		} : null,
		title: "Attribute",
		description: role === "admin" ? "Create a new attribute for the platform." : "Create a new attribute to define product variations.",
		validationSchema: formSchema,
		submitButtonText: {
			create: "Create Attribute",
			update: "Update Attribute"
		},
		fields: [
			{
				name: "name",
				label: "Attribute Name",
				type: "text",
				required: true,
				placeholder: "e.g. Color, Size, Material",
				autoGenerateSlug: "createOnly"
			},
			{
				name: "slug",
				label: "Slug",
				type: "text",
				placeholder: "e.g. color, size, material",
				description: "URL-friendly identifier for your attribute"
			},
			{
				name: "type",
				label: "Type",
				type: "custom",
				required: true,
				defaultValue: "select",
				render: ({ form }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
					name: "type",
					children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: "Type" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-4 gap-2 pt-2",
								children: TYPE_OPTIONS.map((option) => {
									const isSelected = field.state.value === option.value;
									const Icon = option.icon;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										role: "button",
										tabIndex: 0,
										className: cn("cursor-pointer rounded-lg border p-4 transition-all hover:bg-accent hover:text-accent-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring", isSelected && "border-primary bg-accent text-accent-foreground ring-1 ring-primary"),
										onClick: () => field.handleChange(option.value),
										onKeyDown: (e) => {
											if (e.key === "Enter" || e.key === " ") {
												e.preventDefault();
												field.handleChange(option.value);
											}
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mb-2 flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-medium text-sm",
													children: option.label
												})]
											}), isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-primary" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-muted-foreground text-xs",
											children: option.preview
										})]
									}, option.value);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldDescription, { children: "Determines how this attribute's values are displayed." })
						]
					})
				})
			},
			{
				name: "values",
				type: "custom",
				defaultValue: [],
				render: ({ form, isSubmitting: isSubmittingExternal }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator$1, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
						name: "values",
						mode: "array",
						children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-medium text-sm",
									children: "Values"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-muted-foreground text-xs",
									children: "Add values for this attribute."
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "button",
									variant: "outline",
									size: "sm",
									onClick: () => field.pushValue({
										id: createTempId(),
										name: "",
										slug: "",
										value: ""
									}),
									disabled: isSubmittingExternal,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-2 size-3" }), "Add Value"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [field.state.value.map((value, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-3 rounded-lg border p-4 sm:grid-cols-12",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "sm:col-span-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
												name: `values[${i}].name`,
												validators: { onBlur: validateField(attributeValueInputSchema.shape.name) },
												children: (subField) => {
													const isInvalid = subField.state.meta.isTouched && !subField.state.meta.isValid;
													return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
														"data-invalid": isInvalid,
														className: "gap-1",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
																htmlFor: `value-name-${i}`,
																className: "text-xs",
																children: "Name"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
																id: `value-name-${i}`,
																value: subField.state.value,
																onBlur: subField.handleBlur,
																onChange: (e) => handleValueNameChange(form, i, e.target.value, subField.handleChange),
																placeholder: "Name",
																className: "h-8",
																"aria-invalid": isInvalid,
																disabled: isSubmittingExternal
															}),
															isInvalid && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { errors: getFieldErrors(subField.state.meta.errors) })
														]
													});
												}
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "sm:col-span-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
												name: `values[${i}].slug`,
												validators: { onBlur: validateField(attributeValueInputSchema.shape.slug) },
												children: (subField) => {
													const isInvalid = subField.state.meta.isTouched && !subField.state.meta.isValid;
													return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
														"data-invalid": isInvalid,
														className: "gap-1",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
																htmlFor: `value-slug-${i}`,
																className: "text-xs",
																children: "Slug"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
																id: `value-slug-${i}`,
																value: subField.state.value,
																onBlur: subField.handleBlur,
																onChange: (e) => subField.handleChange(e.target.value),
																placeholder: "Slug",
																className: "h-8",
																"aria-invalid": isInvalid,
																disabled: isSubmittingExternal
															}),
															isInvalid && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { errors: getFieldErrors(subField.state.meta.errors) })
														]
													});
												}
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
											selector: (state) => state.values.type,
											children: (type) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [type === "color" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "sm:col-span-3",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
													name: `values[${i}].value`,
													validators: { onBlur: validateField(attributeValueInputSchema.shape.value) },
													children: (subField) => {
														const isInvalid = subField.state.meta.isTouched && !subField.state.meta.isValid;
														return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
															"data-invalid": isInvalid,
															className: "gap-1",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
																	htmlFor: `value-color-${i}`,
																	className: "text-xs",
																	children: "Color"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "flex gap-2",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
																		type: "color",
																		id: `value-color-picker-${i}`,
																		value: subField.state.value || "#000000",
																		onBlur: subField.handleBlur,
																		onChange: (e) => subField.handleChange(e.target.value),
																		className: "h-8 w-12 p-1",
																		"aria-label": "Color Picker",
																		disabled: isSubmittingExternal
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
																		id: `value-color-${i}`,
																		value: subField.state.value,
																		onBlur: subField.handleBlur,
																		onChange: (e) => subField.handleChange(e.target.value),
																		placeholder: "#000000",
																		className: "h-8",
																		"aria-invalid": isInvalid,
																		disabled: isSubmittingExternal
																	})]
																}),
																isInvalid && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { errors: getFieldErrors(subField.state.meta.errors) })
															]
														});
													}
												})
											}), type === "image" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "sm:col-span-3",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
													name: `values[${i}].value`,
													validators: { onBlur: validateField(attributeValueInputSchema.shape.value) },
													children: (subField) => {
														const isInvalid = subField.state.meta.isTouched && !subField.state.meta.isValid;
														return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
															"data-invalid": isInvalid,
															className: "gap-1",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
																	htmlFor: `value-image-${i}`,
																	className: "text-xs",
																	children: "Image URL"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
																	id: `value-image-${i}`,
																	value: subField.state.value,
																	onBlur: subField.handleBlur,
																	onChange: (e) => subField.handleChange(e.target.value),
																	placeholder: "https://...",
																	className: "h-8",
																	"aria-invalid": isInvalid,
																	disabled: isSubmittingExternal
																}),
																isInvalid && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { errors: getFieldErrors(subField.state.meta.errors) })
															]
														});
													}
												})
											})] })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex items-end justify-end sm:col-span-1",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												type: "button",
												variant: "ghost",
												size: "icon",
												className: "h-8 w-8 text-muted-foreground hover:text-destructive",
												onClick: () => field.removeValue(i),
												disabled: isSubmittingExternal,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
											})
										})
									]
								}, value?.id || i)), field.state.value.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex h-24 flex-col items-center justify-center rounded-lg border border-dashed text-muted-foreground text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No values added yet." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs",
										children: "Click \"Add Value\" to start adding options."
									})]
								})]
							})]
						})
					})]
				})
			}
		],
		contentClassName: "max-h-[90vh] overflow-y-auto sm:max-w-150"
	});
}
var ATTRIBUTE_STATUS_OPTIONS = [{
	label: "Active",
	value: "true"
}, {
	label: "Inactive",
	value: "false"
}];
var ATTRIBUTE_TYPE_OPTIONS = [
	{
		label: "Select",
		value: "select"
	},
	{
		label: "Color",
		value: "color"
	},
	{
		label: "Image",
		value: "image"
	},
	{
		label: "Label",
		value: "label"
	}
];
var getSharedAttributeFilters = () => {
	return [{
		id: "isActive",
		label: "Status",
		type: "select",
		options: ATTRIBUTE_STATUS_OPTIONS,
		placeholder: "Filter by status"
	}, {
		id: "type",
		label: "Type",
		type: "select",
		options: ATTRIBUTE_TYPE_OPTIONS,
		placeholder: "Filter by type"
	}];
};
var createAttributeColumns = ({ mode, actions, mutationState, isAttributeMutating }) => {
	const isAdmin = mode === "admin";
	return [
		{
			accessorKey: "id",
			header: "ID",
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-20 truncate text-muted-foreground text-xs",
				children: row.getValue("id")
			}),
			enableSorting: true
		},
		{
			accessorKey: "name",
			header: "Name",
			cell: ({ row }) => {
				const isMutating = isAttributeMutating?.(row.original.id) ?? false;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("font-medium", isMutating && "opacity-60"),
					children: [isMutating && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "inline h-3 w-3 animate-spin mr-1" }), row.getValue("name")]
				});
			},
			enableSorting: true
		},
		{
			accessorKey: "type",
			header: "Type",
			cell: ({ row }) => {
				const type = row.original.type;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "outline",
					className: "capitalize",
					children: type
				});
			},
			enableSorting: true
		},
		{
			accessorKey: "values",
			header: "Values",
			cell: ({ row }) => {
				const values = row.original.values || [];
				const type = row.original.type;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-1",
					children: [values.slice(0, 5).map((val) => {
						if (type === "color") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "size-6 rounded-full border shadow-sm",
								style: { backgroundColor: val.value || "#000000" }
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: val.name }) })] }) }, val.id);
						if (type === "image") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "size-8 overflow-hidden rounded-md border bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: val.value || "/placeholder.svg",
									alt: val.name,
									className: "h-full w-full object-cover"
								})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: val.name }) })] }) }, val.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "secondary",
							className: "text-xs",
							children: val.name
						}, val.id);
					}), values.length > 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						variant: "outline",
						className: "text-xs",
						children: [
							"+",
							values.length - 5,
							" more"
						]
					})]
				});
			},
			enableSorting: false
		},
		{
			accessorKey: "slug",
			header: "Slug",
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
				className: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono font-semibold text-sm",
				children: row.getValue("slug")
			}),
			enableSorting: false
		},
		...isAdmin ? [{
			accessorKey: "shopName",
			header: "Shop",
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-muted-foreground text-sm",
				children: row.original.shopName || "-"
			}),
			enableSorting: false
		}] : [],
		{
			accessorKey: "productCount",
			header: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-center",
				children: "Products"
			}),
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-center",
				children: row.getValue("productCount") ?? 0
			}),
			enableSorting: true
		},
		{
			accessorKey: "isActive",
			header: "Status",
			cell: ({ row }) => {
				const isActive = row.original.isActive;
				const isToggling = mutationState?.togglingId === row.original.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: isActive ? "default" : "secondary",
						className: cn("capitalize", isToggling && "opacity-60"),
						children: isActive ? "Active" : "Inactive"
					}), isToggling && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3 w-3 animate-spin" })]
				});
			},
			enableSorting: false
		},
		{
			id: "actions",
			header: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-right",
				children: "Actions"
			}),
			cell: ({ row }) => {
				const isMutating = isAttributeMutating?.(row.original.id) ?? false;
				const isDeleting = mutationState?.deletingId === row.original.id;
				const isToggling = mutationState?.togglingId === row.original.id;
				const isUpdating = mutationState?.updatingId === row.original.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
						asChild: true,
						disabled: isMutating,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							className: "h-8 w-8 p-0",
							disabled: isMutating,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: "Open menu"
							}), isMutating ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-4" })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
						align: "end",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, { children: "Actions" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
								onClick: () => navigator.clipboard.writeText(row.original.id),
								children: "Copy ID"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
							actions.onEdit && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
								onClick: () => actions.onEdit(row.original),
								disabled: isMutating,
								children: isUpdating ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3 w-3 animate-spin" }), "Updating..."]
								}) : "Edit"
							}),
							isAdmin && actions.onToggleActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
								onClick: () => actions.onToggleActive(row.original),
								disabled: isToggling,
								children: isToggling ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3 w-3 animate-spin" }), "Updating..."]
								}) : row.original.isActive ? "Deactivate" : "Activate"
							}),
							actions.onDelete && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
								className: "text-destructive",
								onClick: () => actions.onDelete(row.original),
								disabled: isDeleting,
								children: isDeleting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3 w-3 animate-spin" }), "Deleting..."]
								}) : "Delete"
							})] })
						]
					})] })
				});
			},
			enableSorting: false
		}
	];
};
function AttributeTable({ attributes, server, onEdit, onDelete, onToggleActive, mutationState, isAttributeMutating, className, mode = "vendor" }) {
	const columns = (0, import_react.useMemo)(() => {
		return createAttributeColumns({
			mode,
			actions: {
				onEdit,
				onDelete,
				onToggleActive
			},
			isAttributeMutating,
			mutationState
		});
	}, [
		onEdit,
		onDelete,
		onToggleActive,
		isAttributeMutating,
		mutationState,
		mode
	]);
	const filterableColumns = (0, import_react.useMemo)(() => getSharedAttributeFilters(), []);
	if (server) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
		columns,
		server,
		context: mode === "admin" ? "admin" : "shop",
		initialPageSize: 10,
		filterableColumns,
		globalFilterPlaceholder: "Search attributes...",
		className
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
		columns,
		data: attributes || [],
		className
	});
}
var AttributeHeader = createEntityHeader({
	entityName: "Attribute",
	entityNamePlural: "Attributes",
	adminDescription: "Manage product Attribute across the platform",
	vendorDescription: "Manage your product Attribute and organization",
	addButtonSize: "lg"
});
//#endregion
export { AttributeHeader as n, AttributeTable as r, AddAttributeDialog as t };
