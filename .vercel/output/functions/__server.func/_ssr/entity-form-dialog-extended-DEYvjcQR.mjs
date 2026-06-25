import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-Pgq5HWQm.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { t as useForm } from "../_libs/@tanstack/react-form+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as X } from "../_libs/lucide-react.mjs";
import { t as ScrollArea$1 } from "./scroll-area-CZTHPdUq.mjs";
import { t as Input } from "./input-BP4N0xFb.mjs";
import { t as Label$1 } from "./label-CqfikwJF.mjs";
import { a as FieldLabel, n as FieldDescription, r as FieldError, t as Field } from "./field--Rw3cGW0.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select$1 } from "./select-DjArhxEw.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog$1 } from "./dialog-D7cdI8cA.mjs";
import { n as RadioGroupItem, t as RadioGroup$1 } from "./radio-group-Cu2-BwWU.mjs";
import { n as validateOptionalField, t as validateField } from "./validators-q4Y98w6j.mjs";
import { t as Form } from "./form-D2eiYF_8.mjs";
import { t as Field$1 } from "./form-field-bldQBmoC.mjs";
import { t as F } from "../_libs/uploadcare__react-uploader.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/entity-form-dialog-extended-DEYvjcQR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function EntityFormDialogExtended({ open, onOpenChange, onSubmit, isSubmitting: externalIsSubmitting = false, initialValues, defaultValues: defaultValuesProp, title, description, fields, validationSchema, submitButtonText = {
	create: "Create",
	update: "Update"
}, contentClassName, scrollable = true }) {
	const isEditing = Boolean(initialValues);
	const form = useForm({
		defaultValues: {
			...fields.reduce((acc, field) => {
				acc[field.name] = field.defaultValue ?? "";
				return acc;
			}, {}),
			...defaultValuesProp || {},
			...initialValues || {}
		},
		onSubmit: async ({ value, formApi }) => {
			if (validationSchema) {
				await formApi.validateAllFields("blur");
				await formApi.validateAllFields("change");
				const errors = Object.entries(formApi.state.fieldMeta).filter(([_key, meta]) => meta?.errors && meta.errors.length > 0).map(([key, meta]) => ({
					field: key,
					errors: meta?.errors
				}));
				if (errors.length > 0) {
					console.error("Form validation failed:", errors);
					toast.error("Please fix the errors in the form before submitting.");
					return;
				}
			}
			await onSubmit(value);
			onOpenChange(false);
			form.reset();
		},
		onSubmitInvalid: () => {
			toast.error("Please fix the errors in the form before submitting.");
		}
	});
	const prevOpenRef = (0, import_react.useRef)(open);
	(0, import_react.useEffect)(() => {
		if (open && !prevOpenRef.current) if (initialValues) {
			Object.entries(initialValues).forEach(([key, value]) => {
				form.setFieldValue(key, value);
			});
			fields.forEach((field) => {
				if (!(field.name in initialValues)) form.setFieldValue(field.name, field.defaultValue ?? "");
			});
		} else {
			form.reset();
			fields.forEach((field) => {
				const value = field.defaultValue ?? "";
				if (value !== "") form.setFieldValue(field.name, value);
			});
		}
		if (!open && prevOpenRef.current) form.reset();
		prevOpenRef.current = open;
	}, [
		open,
		initialValues,
		fields,
		form
	]);
	const renderField = (field) => {
		if (field.type === "custom" && field.render) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: field.render({
			form,
			isSubmitting: externalIsSubmitting,
			isEditing
		}) }, field.name);
		const fieldSchema = validationSchema?.shape[field.name];
		const validators = {};
		if (fieldSchema) validators.onBlur = field.required ? validateField(fieldSchema) : validateOptionalField(fieldSchema);
		if (field.autoGenerateSlug) {
			if (field.autoGenerateSlug === "createOnly" ? !isEditing : true) validators.onChange = ({ value }) => {
				if (typeof value === "string") form.setFieldValue("slug", value.toLowerCase().replace(/\s+/g, "-"));
			};
		}
		if (field.type === "number") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
			name: field.name,
			...Object.keys(validators).length > 0 ? { validators } : {},
			children: (fieldState) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
					htmlFor: fieldState.name,
					children: field.label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: fieldState.name,
					type: "number",
					min: field.min,
					max: field.max,
					step: field.step ?? "any",
					value: fieldState.state.value,
					onBlur: fieldState.handleBlur,
					onChange: (e) => {
						const raw = e.target.value;
						const parsed = field.step !== void 0 && Number.isInteger(field.step) ? parseInt(raw, 10) : parseFloat(raw);
						fieldState.handleChange(Number.isNaN(parsed) ? "" : parsed);
					},
					placeholder: field.placeholder
				}),
				field.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldDescription, { children: field.description }),
				fieldState.state.meta.errors.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { children: String(fieldState.state.meta.errors[0]) })
			] })
		}, field.name);
		if (field.type === "date") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
			name: field.name,
			...Object.keys(validators).length > 0 ? { validators } : {},
			children: (fieldState) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
					htmlFor: fieldState.name,
					children: field.label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: fieldState.name,
					type: "date",
					value: fieldState.state.value,
					onBlur: fieldState.handleBlur,
					onChange: (e) => fieldState.handleChange(e.target.value)
				}),
				field.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldDescription, { children: field.description }),
				fieldState.state.meta.errors.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { children: String(fieldState.state.meta.errors[0]) })
			] })
		}, field.name);
		if (field.type === "radio" && field.selectOptions) {
			const options = field.selectOptions;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
				name: field.name,
				...Object.keys(validators).length > 0 ? { validators } : {},
				children: (fieldState) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: field.label }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup$1, {
						value: fieldState.state.value,
						onValueChange: fieldState.handleChange,
						className: "flex flex-col gap-2",
						children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, {
								id: `${fieldState.name}-${option.value}`,
								value: option.value
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label$1, {
								htmlFor: `${fieldState.name}-${option.value}`,
								children: [option.icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option.icon, { className: "inline-block mr-1.5 size-4" }), option.label]
							})]
						}, option.value))
					}),
					field.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldDescription, { children: field.description }),
					fieldState.state.meta.errors.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { children: String(fieldState.state.meta.errors[0]) })
				] })
			}, field.name);
		}
		if (field.type === "file") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
			name: field.name,
			...Object.keys(validators).length > 0 ? { validators } : {},
			children: (fieldState) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
					htmlFor: fieldState.name,
					children: field.label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
					pubkey: "d7dad26d0605e309e96b",
					classNameUploader: "uc-auto uc-purple",
					gridShowFileNames: true,
					sourceList: "local, gdrive",
					imgOnly: true,
					multiple: field.multiple,
					filesViewMode: "grid",
					onFileUploadSuccess: (e) => {
						if (e?.cdnUrl) if (field.multiple) {
							const current = fieldState.state.value || [];
							fieldState.handleChange([...current, e.cdnUrl]);
						} else fieldState.handleChange(e.cdnUrl);
					}
				}),
				!field.multiple && fieldState.state.value && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 relative group w-fit",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: fieldState.state.value,
						alt: "Preview",
						className: "size-16 rounded-md object-cover border"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => fieldState.handleChange(""),
						className: "absolute -top-1 -right-1 bg-destructive text-destructive-foreground rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3" })
					})]
				}),
				field.multiple && Array.isArray(fieldState.state.value) && fieldState.state.value.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 flex flex-wrap gap-2",
					children: fieldState.state.value.map((url, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: url,
							alt: `Preview ${index}`,
							className: "size-16 rounded-md object-cover border"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								const next = fieldState.state.value.filter((_, i) => i !== index);
								fieldState.handleChange(next);
							},
							className: "absolute -top-1 -right-1 bg-destructive text-destructive-foreground rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3" })
						})]
					}, index))
				}),
				field.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldDescription, { children: field.description }),
				fieldState.state.meta.errors.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { children: String(fieldState.state.meta.errors[0]) })
			] })
		}, field.name);
		if (field.type === "select" && field.selectOptions) {
			const options = field.selectOptions;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
				name: field.name,
				...Object.keys(validators).length > 0 ? { validators } : {},
				children: (fieldState) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
						htmlFor: fieldState.name,
						children: field.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select$1, {
						value: fieldState.state.value,
						onValueChange: fieldState.handleChange,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							className: "w-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: field.placeholder })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: option.value,
							children: option.icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(option.icon, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: option.label })]
							}) : option.label
						}, option.value)) })]
					}),
					field.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldDescription, { children: field.description }),
					fieldState.state.meta.errors.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { children: String(fieldState.state.meta.errors[0]) })
				] })
			}, field.name);
		}
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
			form,
			name: field.name,
			label: field.label ?? field.name,
			placeholder: field.placeholder,
			description: field.description,
			required: field.required,
			as: field.type === "textarea" ? "textarea" : void 0,
			onBlur: fieldSchema ? field.required ? validateField(fieldSchema) : validateOptionalField(fieldSchema) : void 0,
			onChange: field.autoGenerateSlug ? ({ value }) => {
				if ((field.autoGenerateSlug === "createOnly" ? !isEditing : true) && typeof value === "string") form.setFieldValue("slug", value.toLowerCase().replace(/\s+/g, "-"));
			} : void 0
		}, field.name);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: cn(contentClassName ?? "sm:max-w-125", scrollable && "h-[85vh] flex flex-col overflow-hidden min-h-0"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: initialValues ? `Edit ${title}` : `Add New ${title}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: description })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Form, {
				form,
				className: cn("space-y-4", scrollable && "flex flex-col flex-1 overflow-hidden min-h-0"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("flex flex-col flex-1 overflow-hidden", scrollable && "min-h-0"),
					children: scrollable ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea$1, {
						className: "flex-1 min-h-0 h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-4 p-1 pr-4 pb-10",
							children: fields.map(renderField)
						})
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4",
						children: fields.map(renderField)
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "outline",
						onClick: () => onOpenChange(false),
						size: "lg",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
						selector: (state) => [state.canSubmit, state.isSubmitting],
						children: ([canSubmit, isSubmitting]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: !canSubmit || isSubmitting || externalIsSubmitting,
							size: "lg",
							children: isSubmitting || externalIsSubmitting ? initialValues ? `${submitButtonText.update}...` : `${submitButtonText.create}...` : initialValues ? submitButtonText.update : submitButtonText.create
						})
					})]
				})]
			})]
		})
	});
}
//#endregion
export { EntityFormDialogExtended as t };
