import { o as __toESM } from "../_runtime.mjs";
import { Gt as string, Ht as object, Pt as array, Rt as email } from "../_libs/@better-auth/core+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as useSession } from "./auth-client-Jg3rYQV_.mjs";
import { t as cn } from "./utils-Pgq5HWQm.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { t as ScrollArea$1 } from "./scroll-area-CZTHPdUq.mjs";
import { t as Skeleton } from "./skeleton-CLsJI6lr.mjs";
import { t as Separator$1 } from "./separator-CLOPUVDG.mjs";
import { N as Plus, Pt as Check, St as CreditCard, T as ShieldCheck, Vt as BookUser, X as Lock, Z as LoaderCircle, p as Tag, qt as ArrowRight, t as X, x as ShoppingBag } from "../_libs/lucide-react.mjs";
import { f as DropdownMenuTrigger, i as DropdownMenuItem, r as DropdownMenuContent, t as DropdownMenu$1 } from "./dropdown-menu-uJlchZ0e.mjs";
import { m as useNavigate, p as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useForm } from "../_libs/@tanstack/react-form+[...].mjs";
import { t as Label$1 } from "./label-CqfikwJF.mjs";
import { i as FieldGroup } from "./field--Rw3cGW0.mjs";
import { r as createServerFn } from "./ssr.mjs";
import { o as getGuestSessionId } from "./cart-CJAFT02O.mjs";
import { t as createSsrRpc } from "./createSsrRpc-CXFXGZZ3.mjs";
import { o as useQuery } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as useCart } from "./use-cart-DnfXXkvT.mjs";
import { i as InputGroupInput, n as InputGroupAddon, r as InputGroupButton, t as InputGroup } from "./input-group-DL1MymOU.mjs";
import { t as useCartStore } from "./cart-store-C9JgFNbK.mjs";
import { t as Badge } from "./badge-NA1wPZ4a.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog$1 } from "./dialog-D7cdI8cA.mjs";
import { a as EmptyMedia, i as EmptyHeader, n as EmptyContent, o as EmptyTitle, r as EmptyDescription, s as NotFound, t as Empty } from "./notfound-CG7ZW3I5.mjs";
import { n as RadioGroupItem, t as RadioGroup$1 } from "./radio-group-Cu2-BwWU.mjs";
import { t as BreadcrumbNav } from "./breadcrumb-nav-C6qkBKW3.mjs";
import { n as FormTextField, r as FormTextareaField } from "./form-field-bldQBmoC.mjs";
import { t as validateStoreCoupon } from "./coupon-ly67B2fF.mjs";
import { t as Checkbox$1 } from "./checkbox-Biw7eaUx.mjs";
import { t as PhoneInput } from "./phone-input-BDui8KAR.mjs";
import { n as useConfirmPayment, r as useCreateCheckoutSession, t as clearCheckoutSession } from "./use-checkout-aiTEqQno.mjs";
import { t as addressesQueryOptions } from "./use-address-CR6KcOVg.mjs";
import { i as useStripe, n as PaymentElement, r as useElements, t as Elements } from "../_libs/@stripe/react-stripe-js+[...].mjs";
import { t as loadStripe } from "../_libs/stripe__stripe-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-gU2SNTjv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Stripe Payment Form
*
* Payment form using Stripe Elements for secure card input.
*/
var stripePromise = loadStripe("pk_test_51TYUHgJ1ER1ZX7kKorLVuqvisYlyjHAVDqArfXM5HXLmeAtyuaHuuHSYOshibAlzS93zjFq0o3m5mLfQhN4NTQjW005D96LYFz");
/**
* Inner payment form component (must be inside Elements provider)
*/
function PaymentFormInner({ checkoutSession, onCancel }) {
	const stripe = useStripe();
	const elements = useElements();
	const navigate = useNavigate();
	const confirmPayment = useConfirmPayment();
	const [isProcessing, setIsProcessing] = (0, import_react.useState)(false);
	const [errorMessage, setErrorMessage] = (0, import_react.useState)(null);
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!stripe || !elements) return;
		setIsProcessing(true);
		setErrorMessage(null);
		try {
			const { error, paymentIntent } = await stripe.confirmPayment({
				elements,
				confirmParams: { return_url: `${window.location.origin}/order-confirmation` },
				redirect: "if_required"
			});
			if (error) {
				setErrorMessage(error.message || "Payment failed. Please try again.");
				setIsProcessing(false);
				return;
			}
			if (paymentIntent && paymentIntent.status === "succeeded") {
				await confirmPayment.mutateAsync({
					paymentIntentId: checkoutSession.paymentIntentId,
					orderIds: checkoutSession.orderIds
				});
				clearCheckoutSession();
				toast.success("Payment successful!");
				navigate({
					to: "/order-confirmation",
					search: {
						orderIds: checkoutSession.orderIds,
						paymentIntentId: checkoutSession.paymentIntentId
					}
				});
			}
		} catch (err) {
			setErrorMessage(err instanceof Error ? err.message : "Payment failed. Please try again.");
		} finally {
			setIsProcessing(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handleSubmit,
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-lg border bg-muted/50 p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentElement, { options: { layout: "tabs" } })
			}),
			errorMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-lg bg-destructive/10 p-3 text-center text-destructive text-sm",
				children: errorMessage
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-center gap-2 text-muted-foreground text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3 w-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Your payment info is secure and encrypted" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "outline",
					className: "flex-1",
					onClick: onCancel,
					disabled: isProcessing,
					children: "Cancel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					className: "flex-1",
					disabled: !stripe || !elements || isProcessing,
					children: isProcessing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }), "Processing..."] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "mr-2 h-4 w-4" }),
						"Pay $",
						checkoutSession.totalAmount.toFixed(2)
					] })
				})]
			})
		]
	});
}
/**
* Payment dialog with Stripe Elements
*/
function StripePaymentDialog({ open, onOpenChange, checkoutSession }) {
	if (!checkoutSession) return null;
	const handleCancel = () => {
		onOpenChange(false);
		clearCheckoutSession();
		toast.info("Payment cancelled. Your order has been saved as pending.");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "flex max-h-[90vh] max-w-lg flex-col gap-0 p-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b p-6 pb-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-10 w-10 items-center justify-center rounded-full bg-primary/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5 text-primary" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Complete Your Payment" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Secure payment powered by Stripe" })] })]
				}) })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea$1, {
				className: "h-[60vh]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 rounded-lg bg-muted p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Order Total"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-semibold text-lg",
								children: ["$", checkoutSession.totalAmount.toFixed(2)]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1 text-muted-foreground text-xs",
							children: [checkoutSession.orderIds.length, " order(s)"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Elements, {
						stripe: stripePromise,
						options: {
							clientSecret: checkoutSession.clientSecret,
							appearance: {
								theme: "stripe",
								variables: {
									colorPrimary: "hsl(221.2 83.2% 53.3%)",
									colorBackground: "hsl(0 0% 100%)",
									colorText: "hsl(222.2 84% 4.9%)",
									colorDanger: "hsl(0 84.2% 60.2%)",
									fontFamily: "Inter, system-ui, sans-serif",
									borderRadius: "8px"
								}
							}
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentFormInner, {
							checkoutSession,
							onCancel: handleCancel
						})
					})]
				})
			})]
		})
	});
}
function ShippingAddressFields({ form }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FieldGroup, {
		className: "gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid @4xl:grid-cols-2 grid-cols-1 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
					name: "firstName",
					children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormTextField, {
						label: "First Name",
						required: true,
						placeholder: "John",
						autoComplete: "given-name",
						field
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
					name: "lastName",
					children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormTextField, {
						label: "Last Name",
						required: true,
						placeholder: "Doe",
						autoComplete: "family-name",
						field
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid @4xl:grid-cols-2 grid-cols-1 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
					name: "email",
					children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormTextField, {
						label: "Email",
						required: true,
						type: "email",
						placeholder: "john.doe@example.com",
						autoComplete: "email",
						field
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
					name: "phone",
					children: (phoneField) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
						name: "countryCode",
						children: (countryCodeField) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneInput, {
							phoneValue: phoneField.state.value,
							countryCodeValue: countryCodeField.state.value,
							onPhoneChange: (value) => phoneField.handleChange(value),
							onCountryCodeChange: (value) => countryCodeField.handleChange(value),
							error: phoneField.state.meta.isTouched && !phoneField.state.meta.isValid ? phoneField.state.meta.errors[0] : void 0
						})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
				name: "street",
				children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormTextField, {
					label: "Street Address",
					required: true,
					placeholder: "123 Main St",
					autoComplete: "street-address",
					field
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid @4xl:grid-cols-3 grid-cols-1 gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
						name: "city",
						children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormTextField, {
							label: "City",
							required: true,
							placeholder: "Dhaka",
							autoComplete: "address-level2",
							field
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
						name: "state",
						children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormTextField, {
							label: "State",
							required: true,
							placeholder: "Dhaka Division",
							autoComplete: "address-level1",
							field
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
						name: "zipCode",
						children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormTextField, {
							label: "Zip Code",
							required: true,
							placeholder: "1200",
							autoComplete: "postal-code",
							field
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
				name: "description",
				children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormTextareaField, {
					label: "Description",
					placeholder: "Add any special delivery instructions...",
					description: "Optional: Add any special delivery instructions or notes.",
					field,
					className: "min-h-24"
				})
			})
		]
	});
}
var shippingAddressSchema = object({
	firstName: string().min(2, "First name must be at least 2 characters").max(50, "First name must be at most 50 characters"),
	lastName: string().min(2, "Last name must be at least 2 characters").max(50, "Last name must be at most 50 characters"),
	email: email({ message: "Invalid email address" }),
	phone: string().min(10, "Phone number must be at least 10 digits"),
	countryCode: string(),
	street: string().min(5, "Street address must be at least 5 characters"),
	city: string().min(2, "City is required"),
	state: string().min(2, "State is required"),
	zipCode: string().min(4, "Zip code must be at least 4 characters"),
	description: string().optional()
});
function ShippingAddressForm({ onAddressSelect, initialValues }) {
	const { data, isLoading } = useQuery(addressesQueryOptions());
	const addresses = data?.addresses || [];
	const form = useForm({
		defaultValues: {
			firstName: initialValues?.firstName || "",
			lastName: initialValues?.lastName || "",
			email: initialValues?.email || "",
			phone: initialValues?.phone || "",
			countryCode: initialValues?.countryCode || "BD",
			street: initialValues?.street || "",
			city: initialValues?.city || "",
			state: initialValues?.state || "",
			zipCode: initialValues?.zipCode || "",
			description: initialValues?.description || ""
		},
		validators: { onSubmit: shippingAddressSchema },
		onSubmit: async ({ value }) => onAddressSelect(value)
	});
	const handleFillAddress = (0, import_react.useCallback)((addr) => {
		form.setFieldValue("firstName", addr.firstName || "");
		form.setFieldValue("lastName", addr.lastName || "");
		form.setFieldValue("phone", addr.phone || "");
		form.setFieldValue("countryCode", addr.country);
		form.setFieldValue("street", addr.street || "");
		form.setFieldValue("city", addr.city);
		form.setFieldValue("state", addr.state);
		form.setFieldValue("zipCode", addr.zip);
	}, [form]);
	(0, import_react.useEffect)(() => {
		if (!isLoading && addresses.length > 0 && !initialValues && !form.state.isTouched) handleFillAddress(addresses.find((a) => a.isDefault) || addresses[0]);
	}, [
		isLoading,
		addresses,
		initialValues,
		form.state.isTouched,
		handleFillAddress
	]);
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-10 w-full" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-96 w-full" })]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-semibold text-xl",
				children: "Shipping Address"
			}), addresses.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					size: "sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookUser, { className: "mr-2 h-4 w-4" }), "Auto-fill"]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuContent, {
				align: "end",
				children: addresses.map((addr) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
					onClick: () => handleFillAddress(addr),
					children: addr.title
				}, addr.id))
			})] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: (e) => {
				e.preventDefault();
				e.stopPropagation();
				form.handleSubmit();
			},
			className: "space-y-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShippingAddressFields, { form }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				className: "w-full",
				disabled: form.state.isSubmitting,
				children: "Save & Continue"
			})]
		})]
	});
}
function CheckoutAddressSection({ title, isAuthenticated = false, selectedAddress, onSelectAddress, userInfo }) {
	const { data, isLoading } = useQuery(addressesQueryOptions());
	const addresses = data?.addresses || [];
	const [isAddingNew, setIsAddingNew] = (0, import_react.useState)(false);
	const handleAddressSelect = (0, import_react.useCallback)((address) => {
		onSelectAddress({
			firstName: address.firstName || "",
			lastName: address.lastName || "",
			email: address.email || "",
			phone: address.phone || "",
			countryCode: address.country,
			street: address.street,
			city: address.city,
			state: address.state,
			zipCode: address.zip,
			description: address.description
		});
	}, [onSelectAddress]);
	(0, import_react.useEffect)(() => {
		if (!selectedAddress && addresses.length > 0) handleAddressSelect(addresses.find((address) => address.isDefault) ?? addresses[0]);
	}, [
		addresses,
		selectedAddress,
		handleAddressSelect
	]);
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-7 w-32" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-9 w-24" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-2",
			children: [1, 2].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-40 w-full rounded-xl" }, i))
		})]
	});
	if (!isAuthenticated) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-semibold text-xl",
			children: title || "Shipping Address"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShippingAddressForm, {
			onAddressSelect: onSelectAddress,
			initialValues: selectedAddress || (userInfo ? {
				firstName: userInfo.name?.split(" ")[0] || "",
				lastName: userInfo.name?.split(" ").slice(1).join(" ") || "",
				email: userInfo.email || "",
				street: ""
			} : null)
		})]
	});
	if (addresses.length === 0 || isAddingNew) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-semibold text-xl",
				children: addresses.length === 0 ? title || "Shipping Address" : "Add New Address"
			}), addresses.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				onClick: () => setIsAddingNew(false),
				size: "sm",
				children: "Cancel"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShippingAddressForm, {
			onAddressSelect: (addr) => {
				onSelectAddress(addr);
				setIsAddingNew(false);
			},
			initialValues: selectedAddress
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-semibold text-xl",
				children: title || "Shipping Address"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: () => setIsAddingNew(true),
				size: "sm",
				className: "gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "Add New"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-2",
			children: addresses.map((address) => {
				const isSelected = selectedAddress?.zipCode === address.zip && selectedAddress?.street === address.street;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					role: "button",
					tabIndex: 0,
					onKeyDown: (e) => {
						if (e.key === "Enter" || e.key === " ") handleAddressSelect(address);
					},
					className: cn("group relative flex cursor-pointer flex-col gap-4 rounded-xl border bg-card p-5 text-card-foreground shadow-sm transition-all hover:border-primary/40 hover:shadow-md outline-none focus-visible:ring-2 focus-visible:ring-primary", isSelected && "border-primary ring-1 ring-primary"),
					onClick: () => handleAddressSelect(address),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: address.type === "billing" ? "default" : "secondary",
								className: "capitalize",
								children: address.type
							}), address.isDefault && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								className: "border-primary/50",
								children: "Default"
							})]
						}), isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-medium text-base",
								children: address.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-muted-foreground",
								children: address.street
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-muted-foreground",
								children: [
									address.city,
									", ",
									address.state,
									" ",
									address.zip
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-muted-foreground",
								children: address.country
							})
						]
					})]
				}, address.id);
			})
		})]
	});
}
function EmptyState({ icon, title, description, action, className, variant = "icon" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Empty, {
		className: cn(className),
		children: [icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyMedia, {
			variant,
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(EmptyHeader, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyTitle, { children: title }),
			description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyDescription, { children: description }),
			action && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyContent, { children: action })
		] })]
	});
}
function CheckoutOrderSummary({ onProceedToPayment, canProceed = true, isProcessing = false, onCouponsChange, appliedCoupons = [], onRemoveCoupon }) {
	const { items, subtotal, isLoading: isCartLoading } = useCart();
	const { shippingAddress, shippingMethod, shippingCost } = useCartStore();
	const [couponCode, setCouponCode] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (couponCode && appliedCoupons.some((c) => c.code === couponCode.toUpperCase())) setCouponCode("");
	}, [appliedCoupons, couponCode]);
	const estimatedTaxes = 5;
	const totalDiscount = appliedCoupons.reduce((acc, coupon) => acc + coupon.discountAmount, 0);
	const total = Math.max(0, subtotal + shippingCost + estimatedTaxes - totalDiscount);
	const isReady = canProceed && !!shippingAddress && !!shippingMethod && items.length > 0;
	if (isCartLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border bg-background p-6 shadow-sm space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-8 w-1/3 mb-6" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-4",
				children: [
					1,
					2,
					3
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-20 w-full" }, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator$1, { className: "my-6" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-10 w-full" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-full" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-full" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-full" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-12 w-full mt-4" })
		]
	});
	if (items.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border bg-background p-6 shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mb-6 font-semibold text-xl",
			children: "Your Cart"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-10 w-10 text-muted-foreground" }),
			title: "No items yet",
			description: "Add items to your cart to continue with checkout.",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/product",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					className: "rounded-full",
					children: "Browse Products"
				})
			}),
			className: "py-8"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-lg border bg-background p-6 shadow-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-6 font-semibold text-xl",
					children: "Your Cart"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4",
					children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-20 w-20 rounded-md border bg-muted",
							children: [item.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.image,
								alt: item.name,
								className: "h-full w-full rounded-md object-cover"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-full w-full items-center justify-center bg-secondary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-8 w-8 text-muted-foreground" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "-right-2 -top-2 absolute flex h-6 w-6 items-center justify-center rounded-full bg-foreground font-semibold text-background text-xs",
								children: item.quantity
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-medium text-base leading-tight",
									children: item.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-sm",
									children: item.variantOptions ? Object.values(item.variantOptions).join(" / ") : ""
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-semibold text-lg",
								children: ["$", Number(item.price).toFixed(2)]
							})]
						})]
					}, item.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator$1, { className: "my-6" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InputGroup, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroupAddon, {
								align: "inline-start",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroupInput, {
								placeholder: "Add promo code",
								value: couponCode,
								onChange: (e) => setCouponCode(e.target.value)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroupAddon, {
								align: "inline-end",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroupButton, {
									variant: "ghost",
									onClick: () => onCouponsChange?.(couponCode),
									disabled: !couponCode,
									children: "Apply"
								})
							})
						] }),
						appliedCoupons.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: appliedCoupons.map((coupon) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1 rounded-md border bg-secondary/50 px-2 py-1 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { className: "h-3 w-3 text-muted-foreground" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium",
										children: coupon.code
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted-foreground",
										children: [
											"(-$",
											coupon.discountAmount.toFixed(2),
											")"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => onRemoveCoupon?.(coupon.code),
										className: "ml-1 rounded-full p-0.5 hover:bg-background hover:text-destructive",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3 w-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "sr-only",
											children: ["Remove coupon ", coupon.code]
										})]
									})
								]
							}, coupon.code))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Subtotal"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-medium",
										children: ["$", subtotal.toFixed(2)]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Shipping"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-medium",
										children: ["$", shippingCost.toFixed(2)]
									})]
								}),
								totalDiscount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-green-600",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Discount" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-medium",
										children: ["-$", totalDiscount.toFixed(2)]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Estimated taxes"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-medium",
										children: ["$", estimatedTaxes.toFixed(2)]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator$1, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between font-semibold text-lg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["$", total.toFixed(2)] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "w-full rounded-full",
							size: "lg",
							disabled: !isReady || isProcessing,
							onClick: onProceedToPayment,
							children: isProcessing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }), "Processing..."] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Continue to Payment", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })] })
						})
					]
				})
			]
		})
	});
}
var getAvailableShippingMethods = createServerFn({ method: "POST" }).inputValidator(object({ productIds: array(string()) })).handler(createSsrRpc("24da5e63e48c86de0dd254b103a3ec8116e7e976dd24d640ce31369a555052f5"));
function ShippingMethodSelector() {
	const { items } = useCart();
	const { shippingMethod, setShippingMethod } = useCartStore();
	const productIds = items.map((item) => item.productId);
	const { data: availableMethods, isLoading, error } = useQuery({
		queryKey: ["available-shipping-methods", productIds],
		queryFn: () => getAvailableShippingMethods({ data: { productIds } }),
		enabled: productIds.length > 0
	});
	(0, import_react.useEffect)(() => {
		if (availableMethods && availableMethods.length > 0) {
			if (!(shippingMethod && availableMethods.some((m) => m.id === shippingMethod.id))) {
				const firstMethod = availableMethods[0];
				setShippingMethod({
					id: firstMethod.id,
					name: firstMethod.name,
					price: Number(firstMethod.price),
					duration: firstMethod.duration
				});
			}
		}
	}, [
		availableMethods,
		shippingMethod,
		setShippingMethod
	]);
	if (items.length === 0) return null;
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-semibold text-xl",
			children: "Shipping Method"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex h-24 items-center justify-center rounded-lg border bg-muted/50",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-6 w-6 animate-spin text-muted-foreground" })
		})]
	});
	if (error) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-semibold text-xl",
			children: "Shipping Method"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-destructive",
			children: "Failed to load shipping methods. Please try again."
		})]
	});
	if (!availableMethods || availableMethods.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-semibold text-xl",
			children: "Shipping Method"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-lg border bg-muted/50 p-4 text-muted-foreground",
			children: "No shipping methods available for these items."
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-semibold text-xl",
			children: "Shipping Method"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup$1, {
			value: shippingMethod?.id,
			onValueChange: (value) => {
				const selected = availableMethods.find((m) => m.id === value);
				if (selected) setShippingMethod({
					id: selected.id,
					name: selected.name,
					price: Number(selected.price),
					duration: selected.duration
				});
			},
			className: "grid gap-4",
			children: availableMethods.map((method) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("relative flex items-center space-x-3 rounded-lg border border-input p-4 transition-colors hover:border-primary/50", shippingMethod?.id === method.id && "border-primary bg-primary/5"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, {
					value: method.id,
					id: method.id
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label$1, {
					htmlFor: method.id,
					className: "flex flex-1 cursor-pointer items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium text-sm",
							children: method.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-xs",
							children: method.duration
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-semibold text-lg",
						children: ["$", Number(method.price).toFixed(2)]
					})]
				})]
			}, method.id))
		})]
	});
}
function CheckoutTemplate() {
	const { data: session, isPending: isSessionLoading } = useSession();
	const isAuthenticated = !!session;
	const { shippingMethod, setShippingAddress, appliedCoupons, addCoupon, removeCoupon } = useCartStore();
	const { items, isLoading: isCartLoading } = useCart();
	const [selectedShippingAddress, setSelectedShippingAddress] = (0, import_react.useState)(null);
	const [selectedBillingAddress, setSelectedBillingAddress] = (0, import_react.useState)(null);
	const [useSameForBilling, setUseSameForBilling] = (0, import_react.useState)(true);
	const [showPaymentDialog, setShowPaymentDialog] = (0, import_react.useState)(false);
	const [checkoutSession, setCheckoutSession] = (0, import_react.useState)(null);
	const isLoading = isSessionLoading || isCartLoading;
	const createCheckoutSession = useCreateCheckoutSession({ onSuccess: (data) => {
		setCheckoutSession(data);
		setShowPaymentDialog(true);
	} });
	const handleShippingAddressSelect = (0, import_react.useCallback)((address) => {
		setSelectedShippingAddress(address);
		setShippingAddress(address);
	}, [setShippingAddress]);
	const sessionEmail = session?.user?.email?.trim() || "";
	const mapAddress = (address) => ({
		firstName: address.firstName,
		lastName: address.lastName,
		email: address.email?.trim() || sessionEmail,
		phone: address.phone,
		street: address.street,
		city: address.city,
		state: address.state,
		zip: address.zipCode,
		country: address.countryCode
	});
	const handleProceedToPayment = async () => {
		if (!selectedShippingAddress) {
			toast.error("Please select or enter a shipping address");
			return;
		}
		if (!useSameForBilling && !selectedBillingAddress) {
			toast.error("Please select or enter a billing address");
			return;
		}
		if (!shippingMethod) {
			toast.error("Please select a shipping method");
			return;
		}
		const shippingAddress = mapAddress(selectedShippingAddress);
		const billingAddress = useSameForBilling || !selectedBillingAddress ? void 0 : mapAddress(selectedBillingAddress);
		createCheckoutSession.mutate({
			sessionId: getGuestSessionId(),
			shippingAddress,
			billingAddress,
			useSameBillingAddress: useSameForBilling,
			shippingMethod: shippingMethod.id,
			couponCodes: appliedCoupons.length > 0 ? appliedCoupons : void 0
		});
	};
	const handleCouponsChange = async (code) => {
		const couponCode = code?.trim();
		if (!couponCode) {
			toast.error("Please enter a coupon code");
			return;
		}
		if (appliedCoupons.some((coupon) => coupon.code.toLowerCase() === couponCode.toLowerCase())) {
			toast.error("This coupon is already applied");
			return;
		}
		const itemsByShop = items.reduce((acc, item) => {
			if (!acc[item.shopId]) acc[item.shopId] = {
				shopId: item.shopId,
				items: [],
				subtotal: 0
			};
			acc[item.shopId].items.push(item);
			acc[item.shopId].subtotal += item.price * item.quantity;
			return acc;
		}, {});
		const shopIds = Object.keys(itemsByShop);
		let validationResult = null;
		let validShopId = null;
		for (const shopId of shopIds) {
			const shopData = itemsByShop[shopId];
			if (appliedCoupons.some((coupon) => coupon.shopId === shopId)) continue;
			try {
				const result = await validateStoreCoupon({ data: {
					code: couponCode,
					shopId,
					cartAmount: shopData.subtotal.toString(),
					cartItems: shopData.items.map((item) => ({
						productId: item.productId,
						quantity: item.quantity,
						price: item.price.toString()
					}))
				} });
				if (result.valid) {
					validationResult = result;
					validShopId = shopId;
					break;
				}
			} catch {}
		}
		if (validationResult?.valid && validShopId) {
			addCoupon({
				shopId: validShopId,
				code: couponCode.toUpperCase(),
				discountAmount: validationResult.discountAmount || 0
			});
			toast.success(validationResult.message || "Coupon applied!");
			return;
		}
		let errorMessage = "Invalid coupon code";
		if (shopIds.length === 0) errorMessage = "Your cart is empty";
		else if (appliedCoupons.length === shopIds.length && shopIds.length > 0) errorMessage = "All shops already have a coupon applied";
		toast.error(errorMessage);
	};
	const handleRemoveCoupon = (code) => {
		removeCoupon(code);
		toast.success("Coupon removed");
	};
	const checkoutSteps = [{
		label: "Cart",
		href: "/cart"
	}, {
		label: "Shipping",
		href: "#",
		isActive: true
	}];
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "@container container mx-auto px-4 py-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-6 w-48" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid @5xl:grid-cols-12 gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "@5xl:col-span-7 space-y-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mb-6 h-6 w-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-10 w-full" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-10 w-full" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-10 w-full" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-3 gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-10 w-full" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-10 w-full" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-10 w-full" })
								]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mb-4 h-6 w-32" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-16 w-full" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-16 w-full" })]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "@5xl:col-span-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mb-6 h-6 w-24" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-4",
						children: [
							1,
							2,
							3
						].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-20 w-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-5 w-3/4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-1/2" })]
							})]
						}, i))
					})]
				})
			})]
		})]
	});
	if (items.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "@container container mx-auto px-4 py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotFound, {
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-12 w-12 text-muted-foreground" }),
			title: "Your cart is empty",
			description: "Add some items to your cart before proceeding to checkout.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/product",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "lg",
					className: "rounded-full",
					children: "Continue Shopping"
				})
			})
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "@container container mx-auto px-4 py-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbNav, {
			items: checkoutSteps,
			className: "mb-8"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 @5xl:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-8 @5xl:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckoutAddressSection, {
						type: "shipping",
						title: "Shipping Address",
						isAuthenticated,
						selectedAddress: selectedShippingAddress,
						onSelectAddress: handleShippingAddressSelect,
						userInfo: {
							name: session?.user?.name,
							email: session?.user?.email
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-lg border bg-card p-6 shadow-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
								id: "same-billing",
								checked: useSameForBilling,
								onCheckedChange: (checked) => setUseSameForBilling(checked === true)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$1, {
								htmlFor: "same-billing",
								className: "cursor-pointer",
								children: "Use same address for billing"
							})]
						})
					}),
					!useSameForBilling && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckoutAddressSection, {
						type: "billing",
						title: "Billing Address",
						isAuthenticated,
						selectedAddress: selectedBillingAddress,
						onSelectAddress: setSelectedBillingAddress,
						userInfo: {
							name: session?.user?.name,
							email: session?.user?.email
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShippingMethodSelector, {})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "@5xl:col-span-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckoutOrderSummary, {
					onProceedToPayment: handleProceedToPayment,
					canProceed: !!selectedShippingAddress && (useSameForBilling || !!selectedBillingAddress),
					isProcessing: createCheckoutSession.isPending,
					onCouponsChange: handleCouponsChange,
					appliedCoupons,
					onRemoveCoupon: handleRemoveCoupon
				})
			})]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StripePaymentDialog, {
		open: showPaymentDialog,
		onOpenChange: setShowPaymentDialog,
		checkoutSession
	})] });
}
var SplitComponent = CheckoutTemplate;
//#endregion
export { SplitComponent as component };
