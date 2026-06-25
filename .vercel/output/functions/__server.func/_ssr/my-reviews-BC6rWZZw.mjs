import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-Pgq5HWQm.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { p as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { I as Pencil, Ot as CircleAlert, W as MessageSquare, Z as LoaderCircle, g as Star, u as Trash2 } from "../_libs/lucide-react.mjs";
import { t as Label$1 } from "./label-CqfikwJF.mjs";
import { t as Textarea } from "./textarea-vo1OZjof.mjs";
import { d as format } from "../_libs/date-fns.mjs";
import { a as CardHeader, i as CardFooter, n as CardContent, t as Card } from "./card-BDvQuHpQ.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog$1 } from "./dialog-D7cdI8cA.mjs";
import { a as useUserReviews, r as useReviewMutations } from "./use-reviews-BiSMwz98.mjs";
import { s as NotFound } from "./notfound-CG7ZW3I5.mjs";
import { t as AccountLayout } from "./account-layout-DPxGQ5LX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/my-reviews-BC6rWZZw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function EditReviewDialog({ open, onOpenChange, review }) {
	const [rating, setRating] = (0, import_react.useState)(review.rating);
	const [title, setTitle] = (0, import_react.useState)(review.title);
	const [comment, setComment] = (0, import_react.useState)(review.comment);
	const [hoveredRating, setHoveredRating] = (0, import_react.useState)(0);
	const { updateReview } = useReviewMutations();
	(0, import_react.useEffect)(() => {
		if (open) {
			setRating(review.rating);
			setTitle(review.title);
			setComment(review.comment);
		}
	}, [open, review]);
	const handleSubmit = () => {
		if (rating === 0 || !title.trim() || !comment.trim()) return;
		updateReview.mutate({
			reviewId: review.id,
			productId: review.productId,
			rating,
			title: title.trim(),
			comment: comment.trim()
		}, { onSuccess: () => {
			onOpenChange(false);
		} });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "sm:max-w-125",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Edit Review" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Update your review for this product." })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$1, { children: "Rating" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex gap-1",
									children: [
										1,
										2,
										3,
										4,
										5
									].map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "focus:outline-none",
										onMouseEnter: () => setHoveredRating(value),
										onMouseLeave: () => setHoveredRating(0),
										onClick: () => setRating(value),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: cn("h-6 w-6 transition-colors", value <= (hoveredRating || rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30") })
									}, value))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: rating === 0 ? "Select a rating" : `${rating} out of 5 stars`
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$1, {
								htmlFor: "title",
								children: "Title"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "title",
								className: "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
								placeholder: "Summarize your experience",
								value: title,
								onChange: (e) => setTitle(e.target.value)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$1, {
								htmlFor: "comment",
								children: "Review"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "comment",
								placeholder: "What did you like or dislike? What did you use this product for?",
								className: "min-h-25",
								value: comment,
								onChange: (e) => setComment(e.target.value)
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => onOpenChange(false),
					children: "Cancel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: handleSubmit,
					disabled: updateReview.isPending || rating === 0 || !title.trim() || !comment.trim(),
					children: updateReview.isPending ? "Updating..." : "Update Review"
				})] })
			]
		})
	});
}
function MyReviewCard({ id, productName, productImage, rating, title, comment, status, createdAt, vendorResponse, onEdit, onDelete, isDeleting = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "@container/card overflow-hidden p-0 border-transparent",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col @sm:flex-row",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative h-48 w-full shrink-0 @sm:size-40 @xl:size-46 bg-muted",
				children: productImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: productImage,
					alt: productName,
					className: "h-full w-full object-cover"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-full w-full items-center justify-center text-muted-foreground",
					children: "No Image"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
						className: "pb-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold leading-none tracking-tight",
								children: productName
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted-foreground mt-1",
								children: ["Reviewed on ", format(new Date(createdAt), "MMMM d, yyyy")]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", status === "approved" && "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400", status === "pending" && "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400", status === "rejected" && "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"),
									children: status.charAt(0).toUpperCase() + status.slice(1)
								})
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
						className: "flex-1 pb-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-1 text-yellow-400 mb-2",
								children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: cn("h-4 w-4", i < rating ? "fill-current" : "text-muted/30") }, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-medium mb-1",
								children: title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground line-clamp-3",
								children: comment
							}),
							vendorResponse && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 rounded-md bg-muted p-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium text-xs text-muted-foreground mb-1",
									children: "Response from Seller:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: vendorResponse })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardFooter, {
						className: "flex justify-end gap-2 pt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => onEdit?.(id),
							className: "h-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "mr-2 h-3.5 w-3.5" }), "Edit"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "destructive",
							size: "sm",
							onClick: () => onDelete?.(id),
							disabled: isDeleting,
							className: "h-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "mr-2 h-3.5 w-3.5" }), "Delete"]
						})]
					})
				]
			})]
		})
	});
}
function MyReviewsList() {
	const { data: reviews, isLoading, error } = useUserReviews();
	const { deleteReview } = useReviewMutations();
	const [editingReview, setEditingReview] = (0, import_react.useState)(null);
	const [isEditDialogOpen, setIsEditDialogOpen] = (0, import_react.useState)(false);
	const handleEdit = (id) => {
		const review = reviews?.find((r) => r.id === id);
		if (review) {
			setEditingReview({
				id: review.id,
				productId: review.productId,
				rating: review.rating,
				title: review.title,
				comment: review.comment
			});
			setIsEditDialogOpen(true);
		}
	};
	const handleDelete = (id) => {
		if (confirm("Are you sure you want to delete this review?")) {
			const review = reviews?.find((r) => r.id === id);
			if (review) deleteReview.mutate({
				reviewId: id,
				productId: review.productId
			});
		}
	};
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex justify-center py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-8 w-8 animate-spin text-muted-foreground" })
	});
	if (error) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-md bg-destructive/15 p-4 text-destructive",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Failed to load reviews. Please try again later." })]
		})
	});
	if (reviews?.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "@container container mx-auto px-4 py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotFound, {
			title: "You haven't written any reviews yet",
			description: "Purchase products to share your experience!",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-10 w-10 text-muted-foreground" }),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/product",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					children: "Start Shopping"
				})
			})
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4",
		children: reviews?.map((review) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MyReviewCard, {
			...review,
			onEdit: handleEdit,
			onDelete: handleDelete,
			isDeleting: deleteReview.isPending
		}, review.id))
	}), editingReview && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditReviewDialog, {
		open: isEditDialogOpen,
		onOpenChange: setIsEditDialogOpen,
		review: editingReview
	})] });
}
function MyReviewsTemplate() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-bold text-2xl tracking-tight",
				children: "My Reviews"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: "Manage your product reviews and ratings."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-lg border bg-card text-card-foreground shadow-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MyReviewsList, {})
			})
		})]
	}) });
}
function RouteComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MyReviewsTemplate, {});
}
//#endregion
export { RouteComponent as component };
