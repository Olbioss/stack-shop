import { t as cn } from "./utils-Pgq5HWQm.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Input } from "./input-BP4N0xFb.mjs";
import { a as FieldLabel, r as FieldError, t as Field } from "./field--Rw3cGW0.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select$1 } from "./select-DjArhxEw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/phone-input-BDui8KAR.js
var import_jsx_runtime = require_jsx_runtime();
var COUNTRY_CODES = [
	{
		value: "BD",
		label: "BD"
	},
	{
		value: "USA",
		label: "USA"
	},
	{
		value: "UK",
		label: "UK"
	},
	{
		value: "IND",
		label: "IND"
	}
];
function PhoneInput({ phoneValue, countryCodeValue, onPhoneChange, onCountryCodeChange, error, required = true }) {
	const isInvalid = Boolean(error);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
		"data-invalid": isInvalid,
		className: "flex-1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
				required,
				children: "Phone number"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select$1, {
					value: countryCodeValue ?? "",
					onValueChange: onCountryCodeChange,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "w-24 shadow-none",
						"aria-invalid": isInvalid,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: COUNTRY_CODES.map((country) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: country.value,
						children: country.label
					}, country.value)) })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "tel",
					value: phoneValue ?? "",
					onChange: (e) => onPhoneChange(e.target.value),
					placeholder: "+880 1234567890",
					autoComplete: "tel",
					className: cn("flex-1 shadow-none"),
					"aria-invalid": isInvalid
				})]
			}),
			isInvalid && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { children: String(error ?? "") })
		]
	});
}
//#endregion
export { PhoneInput as t };
