import { o as __toESM } from "../_runtime.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { t as useForm } from "../_libs/@tanstack/react-form+[...].mjs";
import { r as createServerFn } from "./ssr.mjs";
import { t as createSsrRpc } from "./createSsrRpc-CXFXGZZ3.mjs";
import { c as useQueryClient, n as useMutation, o as useQuery } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { N as Plus, g as Star, yt as Ellipsis } from "../_libs/lucide-react.mjs";
import { t as Input } from "./input-BP4N0xFb.mjs";
import { a as DropdownMenuLabel, c as DropdownMenuSeparator, f as DropdownMenuTrigger, i as DropdownMenuItem, r as DropdownMenuContent, t as DropdownMenu$1 } from "./dropdown-menu-uJlchZ0e.mjs";
import { n as AvatarFallback, r as AvatarImage, t as Avatar$1 } from "./avatar-BfSlRT72.mjs";
import { a as FieldLabel, i as FieldGroup, r as FieldError, t as Field } from "./field--Rw3cGW0.mjs";
import { t as Textarea } from "./textarea-vo1OZjof.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select$1 } from "./select-DjArhxEw.mjs";
import { t as Badge } from "./badge-NA1wPZ4a.mjs";
import { t as adminMiddleware } from "./admin-CYCFP3zk.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog$1 } from "./dialog-D7cdI8cA.mjs";
import { a as getAdminReviewByIdSchema, f as updateReviewStatusSchema, o as getAdminReviewsSchema, t as adminDeleteReviewSchema } from "./review-B2UzwQZg.mjs";
import { t as ConfirmDeleteDialog } from "./confirm-delete-dialog-BCCUdt4j.mjs";
import { t as getFieldErrors } from "./get-field-errors-D_p2DhaE.mjs";
import { n as PageHeader, t as DataTable } from "./page-header-DLbA-yB-.mjs";
import { t as PageSkeleton } from "./page-skeleton-DTaB0ooE.mjs";
import { t as ADMIN_REVIEW_PERMISSIONS } from "./review-permissions-btZT0bLx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reviews-CYrA558o.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var StarRatingInput = ({ rating, onChange }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-1",
		children: [[
			1,
			2,
			3,
			4,
			5
		].map((star) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => onChange(star),
			className: "focus:outline-none",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `size-6 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} hover:fill-yellow-400 hover:text-yellow-400 transition-colors` })
		}, star)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "ml-2 text-sm text-muted-foreground",
			children: [
				"(",
				rating,
				")"
			]
		})]
	});
};
function AddReviewDialog({ open, onOpenChange, onSubmit }) {
	const form = useForm({
		defaultValues: {
			productName: "",
			customerName: "",
			rating: 5,
			comment: "",
			status: "pending",
			customerAvatar: null
		},
		onSubmit: async ({ value }) => {
			onSubmit(value);
			onOpenChange(false);
			form.reset();
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[90vh] overflow-y-auto sm:max-w-150",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Add New Review" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Add a customer review for a product." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
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
							name: "productName",
							children: (field) => {
								const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
									"data-invalid": isInvalid,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
											htmlFor: field.name,
											children: "Product Name*"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: field.name,
											name: field.name,
											value: field.state.value,
											onBlur: field.handleBlur,
											onChange: (e) => field.handleChange(e.target.value),
											placeholder: "e.g. Wireless Headphones",
											"aria-invalid": isInvalid
										}),
										isInvalid && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { errors: getFieldErrors(field.state.meta.errors) })
									]
								});
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
							name: "customerName",
							children: (field) => {
								const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
									"data-invalid": isInvalid,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
											htmlFor: field.name,
											children: "Customer Name*"
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
							name: "rating",
							children: (field) => {
								const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
									"data-invalid": isInvalid,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
											htmlFor: field.name,
											children: "Rating*"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarRatingInput, {
											rating: field.state.value,
											onChange: field.handleChange
										}),
										isInvalid && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { errors: getFieldErrors(field.state.meta.errors) })
									]
								});
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
							name: "comment",
							children: (field) => {
								const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
									"data-invalid": isInvalid,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
											htmlFor: field.name,
											children: "Comment*"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
											id: field.name,
											name: field.name,
											value: field.state.value,
											onBlur: field.handleBlur,
											onChange: (e) => field.handleChange(e.target.value),
											placeholder: "Write your review comment...",
											"aria-invalid": isInvalid,
											className: "resize-none",
											rows: 4
										}),
										isInvalid && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { errors: getFieldErrors(field.state.meta.errors) })
									]
								});
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
							name: "status",
							children: (field) => {
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
									htmlFor: field.name,
									children: "Status"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select$1, {
									value: field.state.value,
									onValueChange: (value) => field.handleChange(value),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select status" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "published",
											children: "Published"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "pending",
											children: "Pending"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "rejected",
											children: "Rejected"
										})
									] })]
								})] });
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
							name: "customerAvatar",
							children: (field) => {
								const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
									"data-invalid": isInvalid,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
											htmlFor: field.name,
											children: "Customer Avatar (Optional)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: field.name,
											name: field.name,
											type: "file",
											accept: "image/*",
											onBlur: field.handleBlur,
											onChange: (e) => field.handleChange(e.target.files),
											"aria-invalid": isInvalid,
											className: "cursor-pointer"
										}),
										isInvalid && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { errors: getFieldErrors(field.state.meta.errors) })
									]
								});
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
					children: ([canSubmit, isSubmitting]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						disabled: !canSubmit || isSubmitting,
						children: isSubmitting ? "Adding..." : "Add Review"
					})
				})] })]
			})]
		})
	});
}
function ReviewHeader({ onAddReview, role = "vendor", showAddButton = true, children, className }) {
	const [isAddDialogOpen, setIsAddDialogOpen] = (0, import_react.useState)(false);
	const handleAddReview = (data) => {
		onAddReview?.(data);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageHeader, {
		title: "Reviews",
		description: role === "admin" ? "Manage platform-wide customer reviews and ratings" : "Manage customer reviews and ratings for your products",
		className,
		children: [
			children,
			showAddButton && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: () => setIsAddDialogOpen(true),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "Add Review"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddReviewDialog, {
				open: isAddDialogOpen,
				onOpenChange: setIsAddDialogOpen,
				onSubmit: handleAddReview
			})
		]
	});
}
var getStatusBadgeVariant = (status) => {
	switch (status) {
		case "approved": return "default";
		case "pending": return "secondary";
		case "rejected": return "destructive";
		default: return "outline";
	}
};
var getStatusLabel = (status) => {
	switch (status) {
		case "approved": return "Approved";
		case "pending": return "Pending";
		case "rejected": return "Rejected";
		default: return status;
	}
};
var StarRating = ({ rating }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-1",
		children: [[
			1,
			2,
			3,
			4,
			5
		].map((star) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `size-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}` }, star)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "ml-1 text-muted-foreground text-sm",
			children: [
				"(",
				rating,
				")"
			]
		})]
	});
};
var createReviewColumns = ({ permissions, onUpdateStatus, onDeleteReview }) => {
	return [
		{
			accessorKey: "productImage",
			header: "Product",
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Avatar$1, {
				className: "h-9 w-9 rounded-md border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, {
					src: row.getValue("productImage"),
					alt: row.original.productName
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
					className: "rounded-md uppercase",
					children: row.original.productName.slice(0, 2)
				})]
			})
		},
		{
			accessorKey: "productName",
			header: "Product Name",
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-medium",
				children: row.getValue("productName")
			})
		},
		{
			accessorKey: "customerName",
			header: "Customer",
			cell: ({ row }) => {
				const customerName = row.getValue("customerName");
				const customerAvatar = row.original.customerAvatar;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Avatar$1, {
						className: "h-6 w-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, {
							src: customerAvatar,
							alt: customerName
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
							className: "text-xs",
							children: customerName.split(" ").map((n) => n[0]).join("").toUpperCase()
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm",
						children: customerName
					})]
				});
			}
		},
		{
			accessorKey: "rating",
			header: "Rating",
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarRating, { rating: row.getValue("rating") })
		},
		{
			accessorKey: "comment",
			header: "Comment",
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-md truncate text-sm",
				children: row.getValue("comment")
			})
		},
		{
			accessorKey: "date",
			header: "Date",
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-muted-foreground text-sm",
				children: new Date(row.getValue("date")).toLocaleDateString()
			})
		},
		{
			accessorKey: "status",
			header: "Status",
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				variant: getStatusBadgeVariant(row.getValue("status")),
				className: "text-xs",
				children: getStatusLabel(row.getValue("status"))
			})
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
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-4" })]
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
						permissions?.canView && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, { children: "View Details" }),
						permissions?.canUpdateStatus && row.original.status === "pending" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
							onClick: () => onUpdateStatus?.(row.original.id, "approved"),
							className: "text-green-600",
							children: "Approve"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
							onClick: () => onUpdateStatus?.(row.original.id, "rejected"),
							className: "text-destructive",
							children: "Reject"
						})] }),
						permissions?.canDelete && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
							onClick: () => onDeleteReview?.(row.original.id),
							className: "text-destructive",
							children: "Delete"
						})] })
					]
				})] })
			})
		}
	];
};
function ReviewTable({ reviews, permissions = {
	canDelete: false,
	canEdit: true,
	canView: true,
	canUpdateStatus: true
}, onUpdateStatus, onDeleteReview, onAddReview, className }) {
	const columns = (0, import_react.useMemo)(() => {
		return createReviewColumns({
			permissions,
			onUpdateStatus,
			onDeleteReview
		});
	}, [
		permissions,
		onUpdateStatus,
		onDeleteReview
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [onAddReview && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex justify-end",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: onAddReview,
				size: "sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-2 h-4 w-4" }), "Add Review"]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
			columns,
			data: reviews,
			className
		})]
	});
}
function AdminReviewsTemplate({ reviews, onReviewStatusChange, onDeleteReview }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewHeader, {
		role: "admin",
		showAddButton: false
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewTable, {
		reviews,
		permissions: ADMIN_REVIEW_PERMISSIONS,
		onUpdateStatus: onReviewStatusChange,
		onDeleteReview
	})] });
}
/**
* Review Server Functions (Admin)
*
* Server functions for admin review operations.
* Admins can view ALL reviews across the platform.
* Admins can moderate, approve, reject, and delete reviews.
*/
/**
* Get all reviews across the platform
* Admin only
*/
var getAdminReviews = createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(getAdminReviewsSchema).handler(createSsrRpc("12777805f64fb1fe810fdfb37b774af0f9d574f40e2017704cda61650821ed42"));
createServerFn({ method: "GET" }).middleware([adminMiddleware]).handler(createSsrRpc("18970c1ac69561c894837b0b85d11b2030ae60d9663d49925c3a3925a6eb7780"));
var updateReviewStatus = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(updateReviewStatusSchema).handler(createSsrRpc("a8ce7230c03f3611e526e06a9d2212ea7564780cc71b5b10b71cc213957065f7"));
var adminDeleteReview = createServerFn({ method: "POST" }).middleware([adminMiddleware]).inputValidator(adminDeleteReviewSchema).handler(createSsrRpc("e416445483c691ebfd2462e9e902a3c14977ac62a52080cc8df16f34849db403"));
createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(getAdminReviewByIdSchema).handler(createSsrRpc("c3282a8291deedaeda9357ce21851e48bcf3b4230293074ee5a5d88947223ded"));
/**
* Admin Reviews Hooks
*
* React Query hooks for admin review operations.
* Admins can view ALL reviews and moderate them.
*/
var adminReviewKeys = {
	all: ["admin-reviews"],
	list: (params) => [
		...adminReviewKeys.all,
		"list",
		params
	],
	detail: (reviewId) => [
		...adminReviewKeys.all,
		"detail",
		reviewId
	],
	stats: () => [...adminReviewKeys.all, "stats"]
};
function useAdminReviews(params) {
	return useQuery({
		queryKey: adminReviewKeys.list(params),
		queryFn: async () => {
			return await getAdminReviews({ data: {
				shopId: params?.shopId,
				productId: params?.productId,
				userId: params?.userId,
				status: params?.status,
				rating: params?.rating,
				limit: params?.limit ?? 20,
				offset: params?.offset ?? 0
			} });
		}
	});
}
function useAdminReviewMutations() {
	const queryClient = useQueryClient();
	return {
		updateStatus: useMutation({
			mutationFn: async (data) => {
				return await updateReviewStatus({ data });
			},
			onSuccess: (result) => {
				toast.success(result.message);
				queryClient.invalidateQueries({ queryKey: adminReviewKeys.all });
			},
			onError: (error) => {
				toast.error(error.message || "Failed to update review status");
			}
		}),
		deleteReview: useMutation({
			mutationFn: async (data) => {
				return await adminDeleteReview({ data });
			},
			onSuccess: () => {
				toast.success("Review deleted successfully!");
				queryClient.invalidateQueries({ queryKey: adminReviewKeys.all });
			},
			onError: (error) => {
				toast.error(error.message || "Failed to delete review");
			}
		})
	};
}
function RouteComponent() {
	const { data, isLoading, isError } = useAdminReviews();
	const { updateStatus, deleteReview } = useAdminReviewMutations();
	const [deletingReview, setDeletingReview] = (0, import_react.useState)(null);
	const reviews = (0, import_react.useMemo)(() => {
		return (data?.data ?? []).map((review) => ({
			id: review.id,
			productName: review.productName,
			productImage: review.productImage ?? "",
			customerName: review.userName || "Anonymous",
			customerAvatar: review.userAvatar ?? void 0,
			rating: review.rating,
			comment: review.comment,
			date: review.createdAt,
			status: review.status
		}));
	}, [data?.data]);
	const handleReviewStatusChange = (reviewId, newStatus) => {
		updateStatus.mutate({
			reviewId,
			status: newStatus
		});
	};
	const handleDeleteReview = (reviewId) => {
		setDeletingReview(reviews.find((review) => review.id === reviewId) ?? null);
	};
	const handleConfirmDelete = () => {
		if (!deletingReview) return;
		const reason = window.prompt("Provide a reason for deletion (min 5 characters).");
		if (!reason || reason.trim().length < 5) {
			toast.error("Deletion reason must be at least 5 characters.");
			return;
		}
		deleteReview.mutate({
			reviewId: deletingReview.id,
			reason: reason.trim()
		});
		setDeletingReview(null);
	};
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageSkeleton, {});
	if (isError) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-lg border border-destructive/30 bg-destructive/10 p-4 text-destructive",
		children: "Failed to load reviews."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminReviewsTemplate, {
		reviews,
		onReviewStatusChange: handleReviewStatusChange,
		onDeleteReview: handleDeleteReview
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDeleteDialog, {
		open: !!deletingReview,
		onOpenChange: (open) => !open && setDeletingReview(null),
		onConfirm: handleConfirmDelete,
		isDeleting: deleteReview.isPending,
		itemName: deletingReview?.productName,
		entityType: "review"
	})] });
}
//#endregion
export { RouteComponent as component };
