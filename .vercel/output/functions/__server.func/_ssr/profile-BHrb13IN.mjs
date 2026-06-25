import { o as __toESM } from "../_runtime.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { t as Skeleton } from "./skeleton-CLsJI6lr.mjs";
import { o as useQuery } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { C as Shield, Et as CircleCheck, I as Pencil, N as Plus, T as ShieldCheck, Tt as CircleX, q as MapPin, rt as Info, u as Trash2, w as ShieldOff } from "../_libs/lucide-react.mjs";
import { a as twoFactor, o as useSession } from "./auth-client-Jg3rYQV_.mjs";
import { t as Input } from "./input-BP4N0xFb.mjs";
import { n as AvatarFallback, r as AvatarImage, t as Avatar$1 } from "./avatar-BfSlRT72.mjs";
import { t as Label$1 } from "./label-CqfikwJF.mjs";
import { i as InputGroupInput, n as InputGroupAddon, t as InputGroup } from "./input-group-DL1MymOU.mjs";
import { i as TooltipTrigger, n as TooltipContent, r as TooltipProvider, t as Tooltip$1 } from "./tooltip-DECwMe-N.mjs";
import { a as CardHeader, n as CardContent, o as CardTitle, r as CardDescription, t as Card } from "./card-BDvQuHpQ.mjs";
import { t as Badge } from "./badge-NA1wPZ4a.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog$1 } from "./dialog-D7cdI8cA.mjs";
import { r as updateAddressSchema, t as createAddressSchema } from "./address-C_CBX6dn.mjs";
import { t as ConfirmDeleteDialog } from "./confirm-delete-dialog-BCCUdt4j.mjs";
import { t as EntityFormDialogExtended } from "./entity-form-dialog-extended-DEYvjcQR.mjs";
import { t as Checkbox$1 } from "./checkbox-Biw7eaUx.mjs";
import { n as useAddressMutations, t as addressesQueryOptions } from "./use-address-CyVPbo_4.mjs";
import { t as AccountLayout } from "./account-layout-DPxGQ5LX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/profile-BHrb13IN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Enable2FADialog({ open, onOpenChange, onSuccess }) {
	const [password, setPassword] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const handleEnable = async () => {
		if (!password) {
			toast.error("Please enter your password");
			return;
		}
		setLoading(true);
		try {
			const { data, error } = await twoFactor.enable({ password });
			if (error) {
				toast.error(error.message || "Failed to enable 2FA");
				return;
			}
			if (data?.backupCodes) {
				toast.success("Two-factor authentication enabled!");
				onSuccess?.(data.backupCodes);
				onOpenChange(false);
				setPassword("");
			}
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Failed to enable 2FA");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "sm:max-w-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Enable Two-Factor Authentication" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Enter your password to confirm and enable 2FA on your account. You'll receive backup codes after enabling." })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4 py-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$1, {
							htmlFor: "password",
							children: "Current Password"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "password",
							type: "password",
							placeholder: "Enter your password",
							value: password,
							onChange: (e) => setPassword(e.target.value),
							onKeyDown: (e) => {
								if (e.key === "Enter") handleEnable();
							}
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => {
						onOpenChange(false);
						setPassword("");
					},
					children: "Cancel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: handleEnable,
					disabled: loading || !password,
					children: loading ? "Enabling…" : "Enable 2FA"
				})] })
			]
		})
	});
}
function Disable2FADialog({ open, onOpenChange, onSuccess }) {
	const [password, setPassword] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const handleDisable = async () => {
		if (!password) {
			toast.error("Please enter your password");
			return;
		}
		setLoading(true);
		try {
			const { error } = await twoFactor.disable({ password });
			if (error) {
				toast.error(error.message || "Failed to disable 2FA");
				return;
			}
			toast.success("Two-factor authentication disabled");
			onSuccess?.();
			onOpenChange(false);
			setPassword("");
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Failed to disable 2FA");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "sm:max-w-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Disable Two-Factor Authentication" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Enter your password to confirm and disable 2FA on your account." })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4 py-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$1, {
							htmlFor: "disable-password",
							children: "Current Password"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "disable-password",
							type: "password",
							placeholder: "Enter your password",
							value: password,
							onChange: (e) => setPassword(e.target.value),
							onKeyDown: (e) => {
								if (e.key === "Enter") handleDisable();
							}
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => {
						onOpenChange(false);
						setPassword("");
					},
					children: "Cancel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "destructive",
					onClick: handleDisable,
					disabled: loading || !password,
					children: loading ? "Disabling…" : "Disable 2FA"
				})] })
			]
		})
	});
}
function BackupCodesDialog({ open, onOpenChange, backupCodes }) {
	const handleCopy = () => {
		navigator.clipboard.writeText(backupCodes.join("\n"));
		toast.success("Backup codes copied to clipboard");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "sm:max-w-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Save Your Backup Codes" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Save these backup codes in a secure place. You can use them to access your account if you lose access to your email." })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-2 rounded-lg bg-muted p-4 font-mono text-sm",
						children: backupCodes.map((code, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-center",
							children: code
						}, index))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium text-destructive text-sm",
						children: "⚠️ These codes will only be shown once!"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: handleCopy,
					children: "Copy Codes"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => onOpenChange(false),
					children: "Done"
				})] })
			]
		})
	});
}
function SecuritySettings() {
	const { data: session, refetch } = useSession();
	const [enable2FAOpen, setEnable2FAOpen] = (0, import_react.useState)(false);
	const [disable2FAOpen, setDisable2FAOpen] = (0, import_react.useState)(false);
	const [backupCodesOpen, setBackupCodesOpen] = (0, import_react.useState)(false);
	const [backupCodes, setBackupCodes] = (0, import_react.useState)([]);
	const userHas2FA = session?.user?.twoFactorEnabled ?? false;
	const handleEnable2FASuccess = async (codes) => {
		setBackupCodes(codes);
		setBackupCodesOpen(true);
		await refetch();
	};
	const handleDisable2FASuccess = async () => {
		await refetch();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "bg-input/10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-5 w-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Security Settings" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Configure security options for your account." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				className: "space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between rounded-lg border p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								userHas2FA ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5 text-green-500" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldOff, { className: "h-5 w-5 text-muted-foreground" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$1, {
									className: "font-medium text-base",
									children: "Two-Factor Authentication"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "h-4 w-4 cursor-help text-muted-foreground" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
									className: "max-w-xs",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "2FA adds an extra layer of security by requiring a verification code sent to your email during login." })
								})] }) })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-sm",
							children: userHas2FA ? "Your account is protected with 2FA" : "Add an extra layer of security to your account"
						})]
					}), userHas2FA ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "destructive",
						size: "sm",
						onClick: () => setDisable2FAOpen(true),
						children: "Disable 2FA"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						onClick: () => setEnable2FAOpen(true),
						children: "Enable 2FA"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-lg bg-muted/50 p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted-foreground text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-foreground",
							children: "Note:"
						}), " Two-factor authentication protects your account by requiring a verification code sent to your email when signing in. This applies only to email/password accounts — social logins use provider-level security."]
					})
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Enable2FADialog, {
			open: enable2FAOpen,
			onOpenChange: setEnable2FAOpen,
			onSuccess: handleEnable2FASuccess
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disable2FADialog, {
			open: disable2FAOpen,
			onOpenChange: setDisable2FAOpen,
			onSuccess: handleDisable2FASuccess
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackupCodesDialog, {
			open: backupCodesOpen,
			onOpenChange: setBackupCodesOpen,
			backupCodes
		})
	] });
}
function AddressDialog({ open, onOpenChange, initialData, onSubmit, isSubmitting = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EntityFormDialogExtended, {
		open,
		onOpenChange,
		onSubmit,
		isSubmitting,
		initialValues: initialData,
		title: "Address",
		description: initialData ? "Update your address details below." : "Enter the details for your new address.",
		validationSchema: initialData ? updateAddressSchema : createAddressSchema,
		submitButtonText: {
			create: "Add Address",
			update: "Update Address"
		},
		fields: [
			{
				name: "title",
				label: "Address Title",
				placeholder: "e.g. Home, Office",
				required: true,
				type: "text"
			},
			{
				name: "firstName",
				label: "First Name",
				placeholder: "First Name",
				type: "text"
			},
			{
				name: "lastName",
				label: "Last Name",
				placeholder: "Last Name",
				type: "text"
			},
			{
				name: "phone",
				label: "Phone Number",
				placeholder: "+1 234 567 8900",
				type: "text"
			},
			{
				name: "street",
				label: "Street Address",
				placeholder: "123 Main St",
				required: true,
				type: "text"
			},
			{
				name: "city",
				label: "City",
				placeholder: "New York",
				required: true,
				type: "text"
			},
			{
				name: "state",
				label: "State / Province",
				placeholder: "NY",
				required: true,
				type: "text"
			},
			{
				name: "zip",
				label: "ZIP / Postal Code",
				placeholder: "10001",
				required: true,
				type: "text"
			},
			{
				name: "country",
				label: "Country",
				placeholder: "United States",
				required: true,
				type: "text"
			},
			{
				name: "type",
				label: "Address Type",
				type: "select",
				selectOptions: [{
					label: "Shipping",
					value: "shipping"
				}, {
					label: "Billing",
					value: "billing"
				}],
				required: true,
				defaultValue: "shipping"
			},
			{
				name: "isDefault",
				label: "Default Address",
				defaultValue: false,
				type: "custom",
				render: ({ form }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
					name: "isDefault",
					children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center space-x-2 mt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
							id: "isDefault",
							checked: Boolean(field.state.value),
							onCheckedChange: (checked) => field.handleChange(checked === true)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$1, {
							htmlFor: "isDefault",
							className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
							children: "Set as default address"
						})]
					})
				})
			}
		],
		contentClassName: "sm:max-w-[600px]",
		scrollable: true
	});
}
function AddressBook() {
	const [isDialogOpen, setIsDialogOpen] = (0, import_react.useState)(false);
	const [editingAddress, setEditingAddress] = (0, import_react.useState)(null);
	const [deletingAddress, setDeletingAddress] = (0, import_react.useState)(null);
	const { data, isLoading } = useQuery(addressesQueryOptions());
	const addresses = data?.addresses || [];
	const { createAddress, updateAddress, deleteAddress, setDefaultAddress, isCreating, isUpdating, isDeleting } = useAddressMutations();
	const handleOpenDialog = (address) => {
		if (address) setEditingAddress({
			...address,
			firstName: address.firstName || void 0,
			lastName: address.lastName || void 0,
			phone: address.phone || void 0,
			isDefault: address.isDefault || false
		});
		else setEditingAddress(null);
		setIsDialogOpen(true);
	};
	const handleSave = async (data) => {
		try {
			if (editingAddress) await updateAddress(data);
			else await createAddress(data);
			setIsDialogOpen(false);
		} catch (error) {
			console.error(error);
		}
	};
	const handleDelete = (address) => {
		setDeletingAddress(address);
	};
	const confirmDelete = async () => {
		if (!deletingAddress) return;
		await deleteAddress({ id: deletingAddress.id });
		setDeletingAddress(null);
	};
	const handleSetDefault = async (id) => {
		await setDefaultAddress({ id });
	};
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-7 w-24" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-9 w-24" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-2",
			children: [1, 2].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-52 w-full rounded-xl" }, i))
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-semibold text-lg",
					children: "Addresses"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => handleOpenDialog(),
					size: "sm",
					className: "gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "Add New"]
				})]
			}),
			!addresses || addresses.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center justify-center rounded-xl border border-dashed p-8 text-center text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mb-4 size-10 opacity-20" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No addresses found" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "link",
						onClick: () => handleOpenDialog(),
						className: "mt-2",
						children: "Add your first address"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: addresses.map((address) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group relative flex flex-col gap-4 rounded-xl border bg-card p-5 text-card-foreground shadow-sm transition-all hover:border-primary/40 hover:shadow-md",
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
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100",
							children: [
								!address.isDefault && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									className: "h-8 w-8 text-muted-foreground hover:text-primary",
									title: "Set as Default",
									onClick: () => handleSetDefault(address.id),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									className: "h-8 w-8 text-muted-foreground hover:text-primary",
									onClick: () => handleOpenDialog(address),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									className: "h-8 w-8 text-muted-foreground hover:text-destructive",
									onClick: () => handleDelete(address),
									disabled: isDeleting,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
								})
							]
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
				}, address.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddressDialog, {
				open: isDialogOpen,
				onOpenChange: setIsDialogOpen,
				initialData: editingAddress,
				onSubmit: handleSave,
				isSubmitting: isCreating || isUpdating
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDeleteDialog, {
				open: !!deletingAddress,
				onOpenChange: (open) => !open && setDeletingAddress(null),
				onConfirm: confirmDelete,
				isDeleting,
				itemName: deletingAddress?.title,
				entityType: "address"
			})
		]
	});
}
function ProfileForm() {
	const { data } = useSession();
	const user = data?.user;
	if (!user) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border bg-input/10 text-card-foreground shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6 p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Avatar$1, {
						className: "h-20 w-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, {
							src: user.image || "",
							alt: user.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
							className: "text-lg",
							children: user.name.split(" ").map((n) => n[0]).join("").toUpperCase()
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-lg",
							children: user.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-muted-foreground text-sm",
							children: ["Member since ", new Date(user.createdAt).toLocaleDateString()]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 md:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$1, {
								htmlFor: "name",
								children: "Full Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroup, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroupInput, {
								id: "name",
								placeholder: "Enter your name",
								defaultValue: user.name
							}) })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$1, {
									htmlFor: "email",
									children: "Email"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InputGroup, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroupInput, {
									id: "email",
									type: "email",
									placeholder: "Enter your email",
									defaultValue: user.email,
									disabled: true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroupAddon, {
									align: "inline-end",
									children: user.emailVerified ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-emerald-500" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "size-4 text-destructive" })
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground text-xs",
										children: user.emailVerified ? "Email verified" : "Email not verified"
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2 md:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$1, {
								htmlFor: "image",
								children: "Profile Image URL"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroup, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroupInput, {
								id: "image",
								placeholder: "https://example.com/avatar.jpg",
								defaultValue: user.image || ""
							}) })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: "Save Changes" })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t p-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddressBook, {})
		})]
	});
}
function ProfileTemplate() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-between",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-bold text-2xl tracking-tight",
					children: "Profile"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileForm, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SecuritySettings, {})
		]
	}) });
}
var SplitComponent = ProfileTemplate;
//#endregion
export { SplitComponent as component };
