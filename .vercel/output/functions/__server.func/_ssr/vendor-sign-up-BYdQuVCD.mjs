import { o as __toESM } from "../_runtime.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { m as useNavigate, p as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useForm } from "../_libs/@tanstack/react-form+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { _t as EyeOff, gt as Eye } from "../_libs/lucide-react.mjs";
import { n as validateOptionalField, t as validateField } from "./validators-q4Y98w6j.mjs";
import { t as Form } from "./form-D2eiYF_8.mjs";
import { t as Field } from "./form-field-bldQBmoC.mjs";
import { t as PhoneInput } from "./phone-input-BDui8KAR.mjs";
import { i as vendorRegisterSchema, n as passwordSchema } from "./auth-DLhAwWpU.mjs";
import { n as registerVendor } from "./vendor-BrxIDr4W.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/vendor-sign-up-BYdQuVCD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function VendorSignUpForm({ onSuccess }) {
	const navigate = useNavigate();
	const [step, setStep] = (0, import_react.useState)(1);
	const [showPassword, setShowPassword] = (0, import_react.useState)(false);
	const [showConfirmPassword, setShowConfirmPassword] = (0, import_react.useState)(false);
	const form = useForm({
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
			storeName: "",
			storeDescription: "",
			contactPhone: "",
			countryCode: "BD",
			address: ""
		},
		onSubmit: async ({ value }) => {
			try {
				const res = await registerVendor({ data: value });
				if (res?.success) {
					toast.success("Vendor account created successfully!");
					toast.info(`Your shop "${res.shop.name}" is pending approval.`);
					onSuccess?.();
					navigate({ to: "/" });
				}
			} catch (err) {
				toast.error(err instanceof Error ? err.message : "Registration failed");
			}
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto w-full max-w-md space-y-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Form, {
			form,
			className: "space-y-6",
			noValidate: true,
			multiStep: {
				currentStep: step,
				totalSteps: 2,
				fieldNamesByStep: { 1: [
					"name",
					"email",
					"password",
					"confirmPassword"
				] },
				onStepChange: (newStep) => setStep(newStep)
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `flex h-8 w-8 items-center justify-center rounded-full font-medium text-sm ${step === 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`,
							children: "1"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-8 bg-border" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `flex h-8 w-8 items-center justify-center rounded-full font-medium text-sm ${step === 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`,
							children: "2"
						})
					]
				}),
				step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center text-muted-foreground text-sm",
						children: "Step 1: Personal Information"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						form,
						name: "name",
						label: "Full Name",
						onBlur: validateField(vendorRegisterSchema.shape.name),
						onChange: validateOptionalField(vendorRegisterSchema.shape.name),
						placeholder: "John Doe",
						autoComplete: "name",
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						form,
						name: "email",
						label: "Email",
						onBlur: validateField(vendorRegisterSchema.shape.email),
						onChange: validateOptionalField(vendorRegisterSchema.shape.email),
						type: "email",
						placeholder: "you@example.com",
						autoComplete: "email",
						description: "This will also be your store's contact email.",
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						form,
						name: "password",
						label: "Password",
						onBlur: validateField(vendorRegisterSchema.shape.password),
						onChange: validateOptionalField(vendorRegisterSchema.shape.password),
						type: showPassword ? "text" : "password",
						placeholder: "8+ chars, strong password",
						autoComplete: "new-password",
						description: "At least 8 chars, one uppercase, one number, one symbol.",
						required: true,
						suffix: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setShowPassword(!showPassword),
							className: "text-muted-foreground hover:text-foreground",
							"aria-label": showPassword ? "Hide password" : "Show password",
							children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						form,
						name: "confirmPassword",
						label: "Confirm Password",
						onBlur: ({ value, fieldApi }) => {
							const res = passwordSchema.safeParse(value);
							if (!res.success) return res.error.issues[0].message;
							if (fieldApi.form.getFieldValue("password") !== value) return "Passwords do not match";
						},
						onChange: ({ value, fieldApi }) => {
							if (!value) return void 0;
							if (fieldApi.form.getFieldValue("password") !== value) return "Passwords do not match";
						},
						type: showConfirmPassword ? "text" : "password",
						placeholder: "Re-enter password",
						autoComplete: "new-password",
						required: true,
						suffix: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setShowConfirmPassword(!showConfirmPassword),
							className: "text-muted-foreground hover:text-foreground",
							"aria-label": showConfirmPassword ? "Hide password" : "Show password",
							children: showConfirmPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "w-full",
						children: "Continue to Store Setup"
					})
				] }),
				step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center text-muted-foreground text-sm",
						children: "Step 2: Store Information"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						form,
						name: "storeName",
						label: "Store Name",
						onBlur: validateField(vendorRegisterSchema.shape.storeName),
						onChange: validateOptionalField(vendorRegisterSchema.shape.storeName),
						placeholder: "My Awesome Store",
						description: "This will be displayed to customers.",
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						form,
						name: "storeDescription",
						label: "Store Description",
						placeholder: "Tell customers about your store...",
						as: "textarea"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
						name: "contactPhone",
						children: (phoneField) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
							name: "countryCode",
							children: (codeField) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneInput, {
								phoneValue: phoneField.state.value,
								countryCodeValue: codeField.state.value,
								onPhoneChange: phoneField.handleChange,
								onCountryCodeChange: codeField.handleChange,
								error: phoneField.state.meta.isTouched && phoneField.state.meta.errors[0]
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						form,
						name: "address",
						label: "Store Address",
						placeholder: "123 Market Street, City, State"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							className: "flex-1",
							onClick: () => setStep(1),
							children: "Back"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
							selector: (state) => [state.canSubmit, state.isSubmitting],
							children: ([canSubmit, isSubmitting]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								disabled: !canSubmit || isSubmitting,
								className: "flex-1",
								children: isSubmitting ? "Creating Account..." : "Create Vendor Account"
							})
						})]
					})
				] })
			]
		})
	});
}
function RouteComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto w-full max-w-lg px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-semibold text-2xl",
					children: "Become a Vendor"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground text-sm",
					children: "Create your vendor account and start selling on our platform."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VendorSignUpForm, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 space-y-2 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-muted-foreground text-sm",
					children: [
						"Already have an account?",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/sign-in",
							className: "underline",
							children: "Sign in"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-muted-foreground text-sm",
					children: [
						"Want to shop instead?",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/sign-up",
							className: "underline",
							children: "Create a customer account"
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { RouteComponent as component };
