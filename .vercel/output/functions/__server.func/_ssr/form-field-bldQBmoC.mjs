import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Input } from "./input-BP4N0xFb.mjs";
import { a as FieldLabel, n as FieldDescription, r as FieldError, t as Field$1 } from "./field--Rw3cGW0.mjs";
import { t as Textarea } from "./textarea-vo1OZjof.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/form-field-bldQBmoC.js
var import_jsx_runtime = require_jsx_runtime();
function getErrorMessage(error) {
	if (typeof error === "string") return error;
	if (error instanceof Error) return error.message;
}
function FormTextField({ label, required, placeholder, autoComplete, error, value, onChange, onBlur, field, type = "text", className, description, suffix, ...props }) {
	const fieldValue = field ? field.state.value : value;
	const fieldChange = field ? field.handleChange : onChange;
	const fieldBlur = field ? field.handleBlur : onBlur;
	const fieldError = field ? (field.state.meta.isTouched || field.state.meta.errors.length > 0) && !field.state.meta.isValid ? field.state.meta.errors[0] : void 0 : error;
	const isInvalid = Boolean(fieldError);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field$1, {
		"data-invalid": isInvalid,
		className,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
				htmlFor: props.id || props.name,
				required,
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type,
					id: props.id || props.name,
					name: props.name,
					value: String(fieldValue ?? ""),
					onBlur: () => fieldBlur?.(),
					onChange: (e) => fieldChange?.(e.target.value),
					placeholder,
					autoComplete,
					"aria-invalid": isInvalid,
					className: suffix ? "pr-10" : void 0,
					...props
				}), suffix && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "-translate-y-1/2 absolute top-1/2 right-3 flex items-center",
					children: suffix
				})]
			}),
			description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldDescription, { children: description }),
			isInvalid && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { children: getErrorMessage(fieldError) })
		]
	});
}
function FormTextareaField({ label, required, placeholder, description, error, value, onChange, onBlur, field, className, suffix, ...props }) {
	const fieldValue = field ? field.state.value : value;
	const fieldChange = field ? field.handleChange : onChange;
	const fieldBlur = field ? field.handleBlur : onBlur;
	const fieldError = field ? (field.state.meta.isTouched || field.state.meta.errors.length > 0) && !field.state.meta.isValid ? field.state.meta.errors[0] : void 0 : error;
	const isInvalid = Boolean(fieldError);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field$1, {
		"data-invalid": isInvalid,
		className,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
				htmlFor: props.id || props.name,
				required,
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: props.id || props.name,
					name: props.name,
					value: String(fieldValue ?? ""),
					onBlur: () => fieldBlur?.(),
					onChange: (e) => fieldChange?.(e.target.value),
					placeholder,
					"aria-invalid": isInvalid,
					className: suffix ? "pr-10" : void 0,
					...props
				}), suffix && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "-translate-y-1/2 absolute top-1/2 right-3 flex items-center",
					children: suffix
				})]
			}),
			description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldDescription, { children: description }),
			isInvalid && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { children: getErrorMessage(fieldError) })
		]
	});
}
function Field(props) {
	const { form, name, onBlur, onChange, as, ...rest } = props;
	const validators = {};
	if (onBlur) validators.onBlur = onBlur;
	if (onChange) validators.onChange = onChange;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
		name,
		...Object.keys(validators).length > 0 ? { validators } : {},
		children: (field) => as === "textarea" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormTextareaField, {
			...rest,
			name,
			field
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormTextField, {
			...rest,
			name,
			field
		})
	});
}
//#endregion
export { FormTextField as n, FormTextareaField as r, Field as t };
