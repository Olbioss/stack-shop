import { o as __toESM } from "../_runtime.mjs";
import { Ft as boolean, Gt as string, Ht as object, qt as url } from "../_libs/@better-auth/core+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as admin } from "./auth-client-Jg3rYQV_.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { t as Input } from "./input-BP4N0xFb.mjs";
import { yt as Ellipsis } from "../_libs/lucide-react.mjs";
import { a as DropdownMenuLabel, c as DropdownMenuSeparator, d as DropdownMenuSubTrigger, f as DropdownMenuTrigger, i as DropdownMenuItem, l as DropdownMenuSub, o as DropdownMenuRadioGroup, r as DropdownMenuContent, s as DropdownMenuRadioItem, t as DropdownMenu$1, u as DropdownMenuSubContent } from "./dropdown-menu-uJlchZ0e.mjs";
import { t as useForm } from "../_libs/@tanstack/react-form+[...].mjs";
import { n as AvatarFallback, r as AvatarImage, t as Avatar$1 } from "./avatar-BfSlRT72.mjs";
import { a as FieldLabel, i as FieldGroup, r as FieldError, t as Field } from "./field--Rw3cGW0.mjs";
import { r as createServerFn } from "./ssr.mjs";
import { t as createSsrRpc } from "./createSsrRpc-CXFXGZZ3.mjs";
import { c as useQueryClient, i as queryOptions, n as useMutation, o as useQuery } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as authMiddleware } from "./auth-BM1BErpv.mjs";
import { d as format } from "../_libs/date-fns.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select$1 } from "./select-DjArhxEw.mjs";
import { t as Badge } from "./badge-NA1wPZ4a.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog$1 } from "./dialog-D7cdI8cA.mjs";
import { t as ConfirmDeleteDialog } from "./confirm-delete-dialog-BCCUdt4j.mjs";
import { t as DataTable } from "./page-header-DLbA-yB-.mjs";
import { t as createEntityHeader } from "./entity-header-DzvDdutM.mjs";
import { t as PageSkeleton } from "./page-skeleton-DTaB0ooE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/users-CxOYp_ag.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function getFieldErrors(errors) {
	if (!Array.isArray(errors)) return [];
	return errors.filter((error) => typeof error === "string");
}
function AddUserDialog({ open, onOpenChange, onSubmit, isSubmitting = false }) {
	const form = useForm({
		defaultValues: {
			name: "",
			email: "",
			password: "",
			role: "customer"
		},
		onSubmit: async ({ value }) => {
			await onSubmit(value);
			onOpenChange(false);
			form.reset();
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[90vh] overflow-y-auto sm:max-w-150",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Add New User" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Add a new user to the platform." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					e.stopPropagation();
					form.handleSubmit();
				},
				className: "space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldGroup, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
							name: "name",
							children: (field) => {
								const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
									"data-invalid": isInvalid,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
											htmlFor: field.name,
											children: "Name*"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: field.name,
											name: field.name,
											value: field.state.value,
											onBlur: field.handleBlur,
											onChange: (e) => field.handleChange(e.target.value),
											placeholder: "e.g. John Doe",
											"aria-invalid": isInvalid
										}),
										isInvalid && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { errors: getFieldErrors(field.state.meta.errors) })
									]
								});
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
							name: "email",
							children: (field) => {
								const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
									"data-invalid": isInvalid,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
											htmlFor: field.name,
											children: "Email*"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: field.name,
											name: field.name,
											type: "email",
											value: field.state.value,
											onBlur: field.handleBlur,
											onChange: (e) => field.handleChange(e.target.value),
											placeholder: "e.g. john@example.com",
											"aria-invalid": isInvalid
										}),
										isInvalid && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { errors: getFieldErrors(field.state.meta.errors) })
									]
								});
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
							name: "password",
							children: (field) => {
								const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
									"data-invalid": isInvalid,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
											htmlFor: field.name,
											children: "Password*"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: field.name,
											name: field.name,
											type: "password",
											value: field.state.value,
											onBlur: field.handleBlur,
											onChange: (e) => field.handleChange(e.target.value),
											placeholder: "Create a password",
											"aria-invalid": isInvalid
										}),
										isInvalid && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { errors: getFieldErrors(field.state.meta.errors) })
									]
								});
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
							name: "role",
							children: (field) => {
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
									htmlFor: field.name,
									children: "Role"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select$1, {
									value: field.state.value,
									onValueChange: (value) => field.handleChange(value),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select role" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "customer",
											children: "Customer"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "vendor",
											children: "Vendor"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "admin",
											children: "Admin"
										})
									] })]
								})] });
							}
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "outline",
					onClick: () => onOpenChange(false),
					children: "Cancel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
					selector: (state) => [state.canSubmit, state.isSubmitting],
					children: ([canSubmit, formSubmitting]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						disabled: !canSubmit || formSubmitting || isSubmitting,
						children: formSubmitting || isSubmitting ? "Adding..." : "Add User"
					})
				})] })]
			})]
		})
	});
}
var UserHeader = createEntityHeader({
	entityName: "User",
	entityNamePlural: "Users",
	adminDescription: "Manage platform users and customers",
	vendorDescription: "Manage your shop's customers and users"
});
function UserTable({ users, permissions = {
	canDelete: true,
	canEdit: true,
	canView: true,
	canCreate: true
}, onDeleteUser, onBanUser, onUnbanUser, onUpdateRole, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
		columns: [
			{
				accessorKey: "id",
				header: "ID",
				cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-20 truncate text-muted-foreground text-xs",
					children: row.getValue("id")
				})
			},
			{
				accessorKey: "name",
				header: "Name",
				cell: ({ row }) => {
					const user = row.original;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Avatar$1, {
							className: "h-8 w-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, {
								src: user.image,
								alt: user.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, { children: user.name.split(" ").map((n) => n[0]).join("").toUpperCase() })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-medium",
							children: user.name
						})]
					});
				}
			},
			{
				accessorKey: "email",
				header: "Email",
				cell: ({ row }) => {
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-muted-foreground",
						children: row.getValue("email")
					});
				}
			},
			{
				accessorKey: "role",
				header: "Role",
				cell: ({ row }) => {
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-muted-foreground",
						children: row.getValue("role")
					});
				}
			},
			{
				accessorKey: "status",
				header: "Status",
				cell: ({ row }) => {
					const status = row.getValue("status");
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: status === "banned" ? "destructive" : "default",
						className: status === "active" ? "bg-green-500" : "",
						children: status
					});
				}
			},
			{
				accessorKey: "createdAt",
				header: "Created At",
				cell: ({ row }) => {
					const createdAt = row.getValue("createdAt");
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-muted-foreground",
						children: format(createdAt instanceof Date ? createdAt : new Date(createdAt), "yyyy-MM-dd")
					});
				}
			},
			{
				id: "actions",
				header: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-right",
					children: "Actions"
				}),
				cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							className: "h-8 w-8 p-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: "Open menu"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "h-4 w-4" })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
						align: "end",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, { children: "Actions" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
								onClick: () => navigator.clipboard.writeText(row.original.id),
								children: "Copy ID"
							}),
							permissions.canEdit && onUpdateRole && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuSub, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSubTrigger, { children: "Update Role" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSubContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuRadioGroup, {
								value: row.original.role,
								onValueChange: (value) => onUpdateRole(row.original.id, value),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuRadioItem, {
										value: "customer",
										children: "Customer"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuRadioItem, {
										value: "vendor",
										children: "Vendor"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuRadioItem, {
										value: "admin",
										children: "Admin"
									})
								]
							}) })] }),
							permissions.canEdit && row.original.status === "active" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
								onClick: () => onBanUser?.(row.original.id),
								children: "Ban User"
							}),
							permissions.canEdit && row.original.status === "banned" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
								onClick: () => onUnbanUser?.(row.original.id),
								children: "Unban User"
							}),
							permissions.canDelete && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
								onClick: () => onDeleteUser?.(row.original.id),
								className: "text-destructive",
								children: "Delete"
							})] })
						]
					})] })
				})
			}
		],
		data: users,
		className
	});
}
var ADMIN_USER_PERMISSIONS = {
	canDelete: true,
	canEdit: true,
	canView: true,
	canCreate: true
};
function AdminUsersTemplate({ users, onOpenAddDialog, onDeleteUser, onBanUser, onUnbanUser, onUpdateRole }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserHeader, {
			onAdd: onOpenAddDialog,
			role: "admin"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserTable, {
			users,
			permissions: ADMIN_USER_PERMISSIONS,
			onDeleteUser,
			onBanUser,
			onUnbanUser,
			onUpdateRole
		})]
	});
}
createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("87caa8bd223f38d78ccad0506fc11618ee7df5dea85bc88d9d915ad2b7c281a8"));
var updateUserProfileSchema = object({
	name: string().min(1, "Name is required"),
	image: url().optional().nullable(),
	orderEmailsEnabled: boolean().optional()
});
createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(updateUserProfileSchema).handler(createSsrRpc("2aa65bef0cdc90a074deeb02730646bd0d9afb797c2fe2403563faca0eb16127"));
var getUsers = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("7c03b72b82f640d4512a324b6f8f63d0a7fd43ee5086600503b278246a98c685"));
/**
* Admin Users Hook
*
* React hook for admin user management with TanStack Query.
* Uses server functions for SSR-compatible data fetching.
* Uses Better Auth client directly for mutations.
*/
/**
* Query options for fetching users list
*/
var usersQueryOptions = () => queryOptions({
	queryKey: ["admin", "users"],
	queryFn: () => getUsers()
});
/**
* Hook providing mutations for admin user management
*/
var useUserMutations = () => {
	const queryClient = useQueryClient();
	const invalidateUsers = () => {
		queryClient.invalidateQueries({ queryKey: ["admin", "users"] });
	};
	const createUserMutation = useMutation({
		mutationFn: async (data) => {
			const result = await admin.createUser({
				email: data.email,
				password: data.password,
				name: data.name,
				role: data.role
			});
			if (result.error) throw new Error(result.error.message || "Failed to create user");
			return result.data;
		},
		onSuccess: () => {
			toast.success("User created successfully");
			invalidateUsers();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to create user");
		}
	});
	const banUserMutation = useMutation({
		mutationFn: async (data) => {
			const result = await admin.banUser({
				userId: data.userId,
				banReason: data.reason
			});
			if (result.error) throw new Error(result.error.message || "Failed to ban user");
			return result.data;
		},
		onSuccess: () => {
			toast.error("User has been banned");
			invalidateUsers();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to ban user");
		}
	});
	const unbanUserMutation = useMutation({
		mutationFn: async (data) => {
			const result = await admin.unbanUser({ userId: data.userId });
			if (result.error) throw new Error(result.error.message || "Failed to unban user");
			return result.data;
		},
		onSuccess: () => {
			toast.success("User has been unbanned");
			invalidateUsers();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to unban user");
		}
	});
	const updateRoleMutation = useMutation({
		mutationFn: async (data) => {
			const result = await admin.setRole({
				userId: data.userId,
				role: data.role
			});
			if (result.error) throw new Error(result.error.message || "Failed to update role");
			return result.data;
		},
		onSuccess: (_, variables) => {
			toast.success(`User role updated to ${variables.role}`);
			invalidateUsers();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to update role");
		}
	});
	const deleteUserMutation = useMutation({
		mutationFn: async (userId) => {
			const result = await admin.removeUser({ userId });
			if (result.error) throw new Error(result.error.message || "Failed to delete user");
			return result.data;
		},
		onSuccess: () => {
			toast.success("User deleted successfully");
			invalidateUsers();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to delete user");
		}
	});
	return {
		createUser: createUserMutation.mutateAsync,
		banUser: banUserMutation.mutateAsync,
		unbanUser: unbanUserMutation.mutateAsync,
		updateRole: updateRoleMutation.mutateAsync,
		deleteUser: deleteUserMutation.mutateAsync,
		isCreating: createUserMutation.isPending,
		isBanning: banUserMutation.isPending,
		isUnbanning: unbanUserMutation.isPending,
		isUpdatingRole: updateRoleMutation.isPending,
		isDeleting: deleteUserMutation.isPending
	};
};
var useUsers = () => {
	return {
		queryOptions: usersQueryOptions,
		...useUserMutations()
	};
};
function RouteComponent() {
	const [isAddDialogOpen, setIsAddDialogOpen] = (0, import_react.useState)(false);
	const [deletingUser, setDeletingUser] = (0, import_react.useState)(null);
	const { queryOptions, createUser, deleteUser, banUser, unbanUser, updateRole, isCreating, isDeleting } = useUsers();
	const { data, isLoading, isError } = useQuery(queryOptions());
	const users = data?.users ?? [];
	const handleAddUser = async (data) => {
		await createUser(data);
	};
	const handleConfirmDelete = async () => {
		if (!deletingUser) return;
		await deleteUser(deletingUser.id);
		setDeletingUser(null);
	};
	const handleBanUser = async (userId) => await banUser({ userId });
	const handleUnbanUser = async (userId) => await unbanUser({ userId });
	const handleUpdateRole = async (userId, role) => await updateRole({
		userId,
		role
	});
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageSkeleton, {});
	if (isError) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-lg border border-destructive/30 bg-destructive/10 p-4 text-destructive",
		children: "Failed to load users."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddUserDialog, {
			open: isAddDialogOpen,
			onOpenChange: setIsAddDialogOpen,
			onSubmit: handleAddUser,
			isSubmitting: isCreating
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDeleteDialog, {
			open: !!deletingUser,
			onOpenChange: (open) => {
				if (!open) setDeletingUser(null);
			},
			onConfirm: handleConfirmDelete,
			itemName: deletingUser?.name,
			entityType: "user",
			isDeleting
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminUsersTemplate, {
			users,
			onOpenAddDialog: () => setIsAddDialogOpen(true),
			onDeleteUser: (userId) => setDeletingUser(users.find((user) => user.id === userId) ?? null),
			onBanUser: handleBanUser,
			onUnbanUser: handleUnbanUser,
			onUpdateRole: handleUpdateRole
		})
	] });
}
//#endregion
export { RouteComponent as component };
