import { t as cn } from "./utils-Pgq5HWQm.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { N as Plus, U as Minus } from "../_libs/lucide-react.mjs";
import { i as InputGroupInput, n as InputGroupAddon, r as InputGroupButton, t as InputGroup } from "./input-group-DL1MymOU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quantity-selector-zUefD-A7.js
var import_jsx_runtime = require_jsx_runtime();
function QuantitySelector({ value, onChange, min = 1, max = 99, disabled = false, className, size = "default" }) {
	const buttonSize = size === "sm" ? "icon-xs" : "icon-sm";
	const containerHeight = size === "sm" ? "h-8" : "h-10";
	const iconSize = size === "sm" ? "h-3 w-3" : "h-4 w-4";
	const handleIncrement = () => {
		if (value < max) onChange(value + 1);
	};
	const handleDecrement = () => {
		if (value > min) onChange(value - 1);
	};
	const handleInputChange = (e) => {
		const newValue = parseInt(e.target.value, 10);
		if (!Number.isNaN(newValue) && newValue >= min && newValue <= max) onChange(newValue);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InputGroup, {
		className: cn("w-auto", containerHeight, className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroupAddon, {
				align: "inline-start",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroupButton, {
					variant: "default",
					size: buttonSize,
					onClick: handleDecrement,
					disabled: disabled || value <= min,
					"aria-label": "Decrease quantity",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: iconSize })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroupInput, {
				type: "number",
				value,
				onChange: handleInputChange,
				className: cn("w-12 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none", size === "default" ? "text-base" : "text-sm"),
				min,
				max,
				disabled,
				"aria-label": "Quantity"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroupAddon, {
				align: "inline-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroupButton, {
					variant: "default",
					size: buttonSize,
					onClick: handleIncrement,
					disabled: disabled || value >= max,
					"aria-label": "Increase quantity",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: iconSize })
				})
			})
		]
	});
}
//#endregion
export { QuantitySelector as t };
