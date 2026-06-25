import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { W as MessageSquare, g as Star, yt as Ellipsis } from "../_libs/lucide-react.mjs";
import { a as DropdownMenuLabel, c as DropdownMenuSeparator, f as DropdownMenuTrigger, i as DropdownMenuItem, r as DropdownMenuContent, t as DropdownMenu$1 } from "./dropdown-menu-uJlchZ0e.mjs";
import { n as AvatarFallback, r as AvatarImage, t as Avatar$1 } from "./avatar-BfSlRT72.mjs";
import { t as Label$1 } from "./label-CqfikwJF.mjs";
import { t as Textarea } from "./textarea-vo1OZjof.mjs";
import { t as Badge } from "./badge-NA1wPZ4a.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog$1 } from "./dialog-D7cdI8cA.mjs";
import { n as PageHeader, t as DataTable } from "./page-header-DLbA-yB-.mjs";
import { k as useVendorReviewMutations, u as createVendorReviewsFetcher } from "./use-vendor-entity-fetcher-C_d9aXVF.mjs";
import { n as VENDOR_REVIEW_PERMISSIONS } from "./review-permissions-btZT0bLx.mjs";
import { t as Route } from "./reviews-uevp_a_u.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reviews-DREnA_o3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MIN_LENGTH = 10;
var MAX_LENGTH = 500;
function RespondReviewDialog({ open, onOpenChange, review, onSubmit, isSubmitting }) {
	const [response, setResponse] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (open) setResponse(review?.vendorResponse ?? "");
	}, [open, review]);
	const trimmed = response.trim();
	const isValid = trimmed.length >= MIN_LENGTH && trimmed.length <= MAX_LENGTH;
	const handleSubmit = () => {
		if (!isValid) return;
		onSubmit(trimmed);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "sm:max-w-125",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Respond to review" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: review ? `Reply to ${review.userName || "the customer"}'s review of ${review.productName}.` : "Reply to this review." })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2 py-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$1, {
							htmlFor: "vendor-response",
							children: "Your response"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "vendor-response",
							placeholder: "Thank the customer or address their feedback...",
							className: "min-h-30",
							maxLength: MAX_LENGTH,
							value: response,
							onChange: (e) => setResponse(e.target.value)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-muted-foreground text-xs",
							children: [
								trimmed.length,
								"/",
								MAX_LENGTH,
								" characters (minimum ",
								MIN_LENGTH,
								")"
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => onOpenChange(false),
					children: "Cancel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: handleSubmit,
					disabled: isSubmitting || !isValid,
					children: isSubmitting ? "Posting..." : "Post response"
				})] })
			]
		})
	});
}
var REVIEW_STATUS_OPTIONS = [
	{
		label: "Pending",
		value: "pending"
	},
	{
		label: "Approved",
		value: "approved"
	},
	{
		label: "Rejected",
		value: "rejected"
	}
];
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
var initialsOf = (name) => name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
var createVendorReviewColumns = ({ permissions, onUpdateStatus, onRespond, isMutating }) => {
	return [
		{
			accessorKey: "productImage",
			header: "Product",
			enableSorting: false,
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Avatar$1, {
				className: "h-9 w-9 rounded-md border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, {
					src: row.original.productImage ?? void 0,
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
			enableSorting: false,
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-medium",
				children: row.getValue("productName")
			})
		},
		{
			accessorKey: "userName",
			header: "Customer",
			enableSorting: false,
			cell: ({ row }) => {
				const userName = row.getValue("userName") || "Anonymous";
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Avatar$1, {
						className: "h-6 w-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, {
							src: row.original.userAvatar ?? void 0,
							alt: userName
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
							className: "text-xs",
							children: initialsOf(userName)
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm",
						children: userName
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
			header: "Review",
			enableSorting: false,
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-md",
				children: [row.original.title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "truncate font-medium text-sm",
					children: row.original.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "truncate text-muted-foreground text-sm",
					children: row.getValue("comment")
				})]
			})
		},
		{
			id: "response",
			header: "Response",
			enableSorting: false,
			cell: ({ row }) => row.original.vendorResponse ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				variant: "outline",
				className: "text-xs",
				children: "Replied"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground text-sm",
				children: "—"
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
			accessorKey: "createdAt",
			header: "Date",
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-muted-foreground text-sm",
				children: new Date(row.getValue("createdAt")).toLocaleDateString()
			})
		},
		{
			id: "actions",
			header: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-right",
				children: "Actions"
			}),
			enableSorting: false,
			cell: ({ row }) => {
				const review = row.original;
				const status = review.status;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							className: "h-8 w-8 p-0",
							disabled: isMutating?.(review.id) ?? false,
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
								onClick: () => navigator.clipboard.writeText(review.id),
								children: "Copy ID"
							}),
							permissions?.canEdit && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
								onClick: () => onRespond?.(review),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "mr-2 size-4" }), review.vendorResponse ? "Edit response" : "Respond"]
							})] }),
							permissions?.canUpdateStatus && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
								status !== "approved" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
									onClick: () => onUpdateStatus?.(review.id, "approved"),
									className: "text-green-600",
									children: "Approve"
								}),
								status !== "rejected" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
									onClick: () => onUpdateStatus?.(review.id, "rejected"),
									className: "text-destructive",
									children: "Reject"
								})
							] })
						]
					})] })
				});
			}
		}
	];
};
var getVendorReviewFilters = () => {
	return [{
		id: "status",
		label: "Status",
		type: "select",
		options: REVIEW_STATUS_OPTIONS,
		placeholder: "Filter by status"
	}];
};
function VendorReviewTable({ server, className }) {
	const { updateStatus, respond } = useVendorReviewMutations();
	const [respondingTo, setRespondingTo] = (0, import_react.useState)(null);
	const isMutating = (reviewId) => updateStatus.isPending && updateStatus.variables?.reviewId === reviewId || respond.isPending && respond.variables?.reviewId === reviewId;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
		columns: (0, import_react.useMemo)(() => createVendorReviewColumns({
			permissions: VENDOR_REVIEW_PERMISSIONS,
			onUpdateStatus: (reviewId, newStatus) => updateStatus.mutate({
				reviewId,
				status: newStatus
			}),
			onRespond: (review) => setRespondingTo(review),
			isMutating
		}), [updateStatus.isPending, respond.isPending]),
		server,
		context: "shop",
		initialPageSize: 10,
		filterableColumns: (0, import_react.useMemo)(() => getVendorReviewFilters(), []),
		globalFilterPlaceholder: "Search reviews...",
		className
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RespondReviewDialog, {
		open: !!respondingTo,
		onOpenChange: (open) => {
			if (!open) setRespondingTo(null);
		},
		review: respondingTo,
		isSubmitting: respond.isPending,
		onSubmit: (response) => {
			if (!respondingTo) return;
			respond.mutate({
				reviewId: respondingTo.id,
				response
			}, { onSuccess: () => setRespondingTo(null) });
		}
	})] });
}
function ShopReviewsTemplate({ server, shopSlug }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Reviews",
			description: "Manage customer reviews and ratings for your shop"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VendorReviewTable, {
				server,
				shopSlug
			})
		})]
	});
}
function RouteComponent() {
	const { slug } = Route.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopReviewsTemplate, {
		server: (0, import_react.useMemo)(() => createVendorReviewsFetcher(slug), [slug]),
		shopSlug: slug
	});
}
//#endregion
export { RouteComponent as component };
