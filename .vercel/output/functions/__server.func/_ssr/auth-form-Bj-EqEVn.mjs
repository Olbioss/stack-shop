import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as twoFactor, i as signUp, n as signIn } from "./auth-client-Jg3rYQV_.mjs";
import { t as cn } from "./utils-Pgq5HWQm.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { m as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useForm } from "../_libs/@tanstack/react-form+[...].mjs";
import { t as Label$1 } from "./label-CqfikwJF.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Form } from "./form-D2eiYF_8.mjs";
import { n as FormTextField } from "./form-field-bldQBmoC.mjs";
import { t as Checkbox$1 } from "./checkbox-Biw7eaUx.mjs";
import { r as registerSchema, t as loginSchema } from "./auth-DLhAwWpU.mjs";
import { n as jt, t as Lt } from "../_libs/input-otp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-form-Bj-EqEVn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function FieldInfo({ field }) {
	const { errors, isTouched } = field.state.meta;
	if (!isTouched || !errors.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-[0.8rem] font-medium text-destructive",
		children: errors.map((err) => typeof err === "string" ? err : err.message ?? JSON.stringify(err)).join(", ")
	});
}
function InputOTP({ className, containerClassName, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lt, {
		"data-slot": "input-otp",
		containerClassName: cn("flex items-center gap-2 has-disabled:opacity-50", containerClassName),
		className: cn("disabled:cursor-not-allowed", className),
		...props
	});
}
function InputOTPGroup({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "input-otp-group",
		className: cn("flex items-center", className),
		...props
	});
}
function InputOTPSlot({ index, className, ...props }) {
	const { char, hasFakeCaret, isActive } = import_react.useContext(jt)?.slots[index] ?? {};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-slot": "input-otp-slot",
		"data-active": isActive,
		className: cn("relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md aria-invalid:border-destructive data-[active=true]:z-10 data-[active=true]:border-ring data-[active=true]:ring-[3px] data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:border-destructive data-[active=true]:aria-invalid:ring-destructive/20 dark:bg-input/30 dark:data-[active=true]:aria-invalid:ring-destructive/40", className),
		...props,
		children: [char, hasFakeCaret && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-0 flex items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-px animate-caret-blink bg-foreground duration-1000" })
		})]
	});
}
function TwoFactorForm({ onCancel, redirectUrl }) {
	const navigate = useNavigate();
	const [otp, setOtp] = (0, import_react.useState)("");
	const [trustDevice, setTrustDevice] = (0, import_react.useState)(false);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [sendingOtp, setSendingOtp] = (0, import_react.useState)(false);
	const handleVerify = async () => {
		if (otp.length !== 6) {
			toast.error("Please enter a valid 6-digit code");
			return;
		}
		setLoading(true);
		try {
			const { data, error } = await twoFactor.verifyOtp({
				code: otp,
				trustDevice
			});
			if (error) {
				toast.error(error.message || "Verification failed");
				setOtp("");
				return;
			}
			if (data) {
				toast.success("Verification successful!");
				navigate({ to: redirectUrl || "/" });
			}
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Verification failed");
			setOtp("");
		} finally {
			setLoading(false);
		}
	};
	const handleResendOtp = async () => {
		setSendingOtp(true);
		try {
			const { error } = await twoFactor.sendOtp({});
			if (error) {
				if (error.status === 401) toast.error("Session expired. Please cancel and try signing in again.");
				else toast.error(error.message || "Failed to send code");
				return;
			}
			toast.success("A new code has been sent to your email");
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Failed to send code");
		} finally {
			setSendingOtp(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto w-full max-w-md space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-semibold text-2xl tracking-tight",
					children: "Two-Factor Authentication"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground text-sm",
					children: "A 6-digit code has been sent to your email. Enter it below to continue."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputOTP, {
					maxLength: 6,
					value: otp,
					onChange: setOtp,
					onComplete: handleVerify,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InputOTPGroup, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputOTPSlot, { index: 0 }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputOTPSlot, { index: 1 }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputOTPSlot, { index: 2 }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputOTPSlot, { index: 3 }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputOTPSlot, { index: 4 }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputOTPSlot, { index: 5 })
					] })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
					id: "trustDevice",
					checked: trustDevice,
					onCheckedChange: (checked) => setTrustDevice(checked === true)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$1, {
					htmlFor: "trustDevice",
					className: "text-sm",
					children: "Trust this device for 30 days"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					onClick: handleVerify,
					disabled: loading || otp.length !== 6,
					className: "w-full",
					size: "lg",
					children: loading ? "Verifying…" : "Verify Code"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "outline",
						onClick: handleResendOtp,
						disabled: sendingOtp,
						className: "flex-1",
						size: "lg",
						children: sendingOtp ? "Sending…" : "Resend Code"
					}), onCancel && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "ghost",
						onClick: onCancel,
						className: "flex-1",
						size: "lg",
						children: "Cancel"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-muted-foreground text-xs",
				children: "Didn't receive the code? Check your spam folder or request a new code."
			})
		]
	});
}
function AuthForm({ mode, includeSocial, redirectUrl }) {
	const [requires2FA, setRequires2FA] = (0, import_react.useState)(false);
	const navigate = useNavigate();
	const form = useForm({
		defaultValues: mode === "sign-in" ? {
			email: "",
			password: "",
			rememberMe: true
		} : {
			name: "",
			email: "",
			password: "",
			confirmPassword: ""
		},
		validators: { onSubmit: mode === "sign-up" ? registerSchema : loginSchema },
		onSubmit: async ({ value, formApi }) => {
			try {
				if (mode === "sign-in") {
					const res = await signIn.email({
						email: value.email,
						password: value.password,
						rememberMe: value.rememberMe
					});
					if (res.error) toast.error(res.error.message || "Sign in failed");
					else if (res.data && "twoFactorRedirect" in res.data && res.data.twoFactorRedirect) {
						try {
							const otpRes = await twoFactor.sendOtp({});
							if (otpRes.error) {
								console.error("Failed to send OTP:", otpRes.error);
								toast.error("Failed to send verification code. Please try again.");
								return;
							}
							toast.info("A verification code has been sent to your email");
						} catch (otpErr) {
							console.error("OTP send error:", otpErr);
						}
						setRequires2FA(true);
					} else {
						toast.success("Signed in successfully!");
						navigate({ to: redirectUrl });
					}
				} else {
					const { ...payload } = value;
					const res = await signUp.email({
						email: payload.email,
						password: payload.password,
						name: payload.name
					});
					if (res.error) toast.error(res.error.message || "Sign up failed");
					else {
						toast.success("Account created successfully!");
						navigate({ to: redirectUrl || "/" });
					}
				}
			} catch (error) {
				formApi.setErrorMap({ onSubmit: error instanceof Error ? error.message : "An error occurred" });
			}
		}
	});
	if (requires2FA) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TwoFactorForm, { onCancel: () => setRequires2FA(false) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto w-full max-w-md space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Form, {
			form,
			className: "space-y-6",
			noValidate: true,
			children: [
				mode === "sign-up" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
					name: "name",
					children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormTextField, {
						label: "Full Name",
						field,
						placeholder: "John Doe",
						autoComplete: "name",
						description: "Your display name.",
						required: true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldInfo, { field })] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
					name: "email",
					children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormTextField, {
						label: "Email",
						field,
						type: "email",
						placeholder: "johndoe@example.com",
						autoComplete: "email",
						description: mode === "sign-up" ? "We'll never share your email." : void 0,
						required: true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldInfo, { field })] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
					name: "password",
					children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormTextField, {
						label: "Password",
						field,
						type: "password",
						placeholder: "Enter your password",
						autoComplete: mode === "sign-in" ? "current-password" : "new-password",
						description: mode === "sign-up" ? "Must be at least 8 characters long and include a mix of letters, numbers, and special characters." : void 0,
						required: true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldInfo, { field })] })
				}),
				mode === "sign-up" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
					name: "confirmPassword",
					children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormTextField, {
						label: "Confirm Password",
						field,
						type: "password",
						placeholder: "Confirm your password",
						autoComplete: "new-password",
						required: true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldInfo, { field })] })
				}),
				mode === "sign-in" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
					name: "rememberMe",
					children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center justify-between",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
								id: field.name,
								name: field.name,
								checked: Boolean(field.state.value),
								onCheckedChange: (checked) => field.handleChange(checked === true)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$1, {
								htmlFor: field.name,
								children: "Remember Me"
							})]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
					selector: (state) => [state.errorMap],
					children: ([errorMap]) => typeof errorMap.onSubmit === "string" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[0.8rem] font-medium text-destructive",
						children: errorMap.onSubmit
					}) : null
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
					selector: (state) => [state.canSubmit, state.isSubmitting],
					children: ([canSubmit, isSubmitting]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						disabled: !canSubmit,
						className: "w-full",
						size: "lg",
						children: isSubmitting ? "Please wait..." : mode === "sign-in" ? "Sign In" : "Create Account"
					})
				})
			]
		}), includeSocial && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 flex items-center",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-full border-t" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative flex justify-center text-xs",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "bg-background px-2 text-muted-foreground",
						children: "Or continue with"
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-2 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "lg",
					onClick: () => signIn.social({
						provider: "github",
						callbackURL: redirectUrl || "/"
					}),
					type: "button",
					children: "GitHub"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "lg",
					onClick: () => signIn.social({
						provider: "google",
						callbackURL: redirectUrl || "/"
					}),
					type: "button",
					children: "Google"
				})]
			})]
		})]
	});
}
//#endregion
export { AuthForm as t };
