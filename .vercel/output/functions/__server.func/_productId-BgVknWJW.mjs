import { o as __toESM } from "./_runtime.mjs";
import { t as cn } from "./_ssr/utils-Pgq5HWQm.mjs";
import { w as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { t as Button } from "./_ssr/button-DQSToWRX.mjs";
import { p as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { o as useQuery } from "./_libs/tanstack__react-query.mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { t as useCart } from "./_ssr/use-cart-DnfXXkvT.mjs";
import { t as useCartStore } from "./_ssr/cart-store-C9JgFNbK.mjs";
import { A as RotateCcw, Ct as Clock, Et as CircleCheck, K as Maximize2, L as PenLine, Mt as ChevronLeft, Pt as Check, T as ShieldCheck, W as MessageSquare, b as ShoppingCart, d as ThumbsUp, g as Star, jt as ChevronRight, o as Truck, ot as Heart, rt as Info, ut as GitCompare } from "./_libs/lucide-react.mjs";
import { t as Input } from "./_ssr/input-BP4N0xFb.mjs";
import { n as AvatarFallback, r as AvatarImage, t as Avatar$1 } from "./_ssr/avatar-BfSlRT72.mjs";
import { t as Label$1 } from "./_ssr/label-CqfikwJF.mjs";
import { t as Textarea } from "./_ssr/textarea-vo1OZjof.mjs";
import { t as QuantitySelector } from "./_ssr/quantity-selector-zUefD-A7.mjs";
import { i as TooltipTrigger, n as TooltipContent, r as TooltipProvider, t as Tooltip$1 } from "./_ssr/tooltip-DECwMe-N.mjs";
import { n as CardContent, t as Card } from "./_ssr/card-BDvQuHpQ.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select$1 } from "./_ssr/select-DjArhxEw.mjs";
import { t as Badge } from "./_ssr/badge-NA1wPZ4a.mjs";
import { n as TableBody, o as TableRow, r as TableCell, t as Table } from "./_ssr/table-D-104eYZ.mjs";
import { t as Route } from "./_productId-UVfxBhZ7.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog$1 } from "./_ssr/dialog-D7cdI8cA.mjs";
import { t as Progress$1 } from "./_ssr/progress-ClMoOgm6.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs$1 } from "./_ssr/tabs-DkMjjh1r.mjs";
import { a as BreadcrumbPage, i as BreadcrumbList, n as BreadcrumbItem, o as BreadcrumbSeparator, r as BreadcrumbLink, t as Breadcrumb } from "./_ssr/breadcrumb-CWxKtsMG.mjs";
import { n as useReviewEligibility, r as useReviewMutations, t as useProductReviews } from "./_ssr/use-reviews-BiSMwz98.mjs";
import { r as wishlistStatusQueryOptions, t as useWishlistMutations } from "./_ssr/use-wishlist-DuePbXzO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_productId-BgVknWJW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductBreadcrumb({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumb, {
		className: "mb-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbList, { children: items.map((item, index) => {
			const isLast = index === items.length - 1;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbItem, { children: isLast ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbPage, { children: item.label }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbLink, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.href,
						children: item.label
					})
				}) }), !isLast && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbSeparator, {})]
			}, item.label);
		}) })
	});
}
function ProductAdditionalInfoTab({ specifications }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-md border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: Object.entries(specifications).map(([key, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
			className: "w-1/3 bg-muted/30 font-medium text-muted-foreground",
			children: key
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: value })] }, key)) }) })
	});
}
function ProductDescriptionTab({ description }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "prose prose-sm dark:prose-invert max-w-none text-muted-foreground",
		dangerouslySetInnerHTML: { __html: description }
	});
}
function ProductShippingTab({ shipping }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid @2xl:grid-cols-2 gap-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-fit rounded-full bg-muted p-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-5 w-5 text-primary" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-medium",
					children: "Delivery Information"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-muted-foreground text-sm",
					children: [
						"Estimated delivery time is ",
						shipping.deliveryTime,
						".",
						shipping.freeShipping && " We offer free shipping on this item."
					]
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-fit rounded-full bg-muted p-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-5 w-5 text-primary" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-medium",
					children: "Processing Time"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-muted-foreground text-sm",
					children: "Orders are typically processed within 1-2 business days."
				})] })]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-fit rounded-full bg-muted p-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-5 w-5 text-primary" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-medium",
					children: "Return Policy"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-muted-foreground text-sm",
					children: shipping.policy
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-fit rounded-full bg-muted p-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5 text-primary" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-medium",
					children: "Warranty"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-muted-foreground text-sm",
					children: "1 year manufacturer warranty included."
				})] })]
			})]
		})]
	});
}
function RatingSummary({ averageRating, totalRatings, ratingBreakdown, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex flex-col gap-6 sm:flex-row sm:items-start", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center justify-center gap-2 text-center sm:w-1/3 sm:items-start sm:text-left lg:w-full lg:items-center lg:text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-bold text-5xl text-foreground",
					children: averageRating.toFixed(1)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex text-yellow-400",
					children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: cn("h-5 w-5", i < Math.round(averageRating) ? "fill-current" : "text-muted") }, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-muted-foreground text-sm",
					children: [totalRatings, " Product Ratings"]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-full flex-1 space-y-2",
			children: [
				5,
				4,
				3,
				2,
				1
			].map((star) => {
				const count = ratingBreakdown[star] || 0;
				const percentage = totalRatings > 0 ? count / totalRatings * 100 : 0;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex w-12 shrink-0 items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: star
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3 w-3 fill-yellow-400 text-yellow-400" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress$1, {
							value: percentage,
							className: "h-2 w-auto min-w-0 flex-1"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-10 shrink-0 text-right text-muted-foreground",
							children: count
						})
					]
				}, star);
			})
		})]
	});
}
function ReviewCard({ userName, userAvatar, date, rating, reviewText, className, isVerifiedPurchase = false, helpfulCount = 0, hasVotedHelpful = false, onVoteHelpful, isVoting = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex gap-4 border-b py-6 last:border-0", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Avatar$1, {
			className: "h-10 w-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, {
				src: userAvatar,
				alt: userName
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, { children: userName[0] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 space-y-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-semibold text-foreground",
							children: userName
						}), isVerifiedPurchase && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" }), "Verified Purchase"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground text-xs",
						children: date
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex text-yellow-400",
						children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: cn("h-3.5 w-3.5", i < rating ? "fill-current" : "text-muted") }, i))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground text-sm leading-relaxed",
					children: reviewText
				}),
				onVoteHelpful && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2 pt-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						size: "sm",
						className: cn("h-8 gap-1.5 text-xs", hasVotedHelpful && "bg-primary/10 text-primary"),
						onClick: onVoteHelpful,
						disabled: isVoting,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThumbsUp, { className: cn("h-3.5 w-3.5", hasVotedHelpful && "fill-current") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							hasVotedHelpful ? "Voted" : "Helpful",
							" (",
							helpfulCount,
							")"
						] })]
					})
				})
			]
		})]
	});
}
function ReviewFormCta({ onReviewClick, canReview = false, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("rounded-lg border bg-muted/30 p-6", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-semibold text-foreground text-lg",
				children: "Review this product"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground text-sm",
				children: "Share your thoughts with other customers"
			}),
			canReview ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				className: "mt-4 w-full",
				onClick: onReviewClick,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "mr-2 h-4 w-4" }), "Write a review"]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					className: "mt-4 w-full",
					disabled: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "mr-2 h-4 w-4" }), "Write a review"]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
				className: "max-w-xs",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-2 text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "h-3 w-3 shrink-0" }), "You can only review products you have purchased and paid for."]
				})
			})] }) })
		]
	});
}
function ReviewFormDialog({ open, onOpenChange, productId, eligibleOrderItems }) {
	const [selectedOrderItemId, setSelectedOrderItemId] = (0, import_react.useState)("");
	const [rating, setRating] = (0, import_react.useState)(0);
	const [title, setTitle] = (0, import_react.useState)("");
	const [comment, setComment] = (0, import_react.useState)("");
	const [hoveredRating, setHoveredRating] = (0, import_react.useState)(0);
	const { createReview } = useReviewMutations();
	const unreviewedItems = eligibleOrderItems.filter((item) => !item.alreadyReviewed);
	const handleOpenChange = (newOpen) => {
		if (!newOpen) {
			setSelectedOrderItemId("");
			setRating(0);
			setTitle("");
			setComment("");
		}
		onOpenChange(newOpen);
	};
	const handleSubmit = () => {
		if (!selectedOrderItemId || rating === 0 || !title.trim() || !comment.trim()) return;
		createReview.mutate({
			productId,
			orderItemId: selectedOrderItemId,
			rating,
			title: title.trim(),
			comment: comment.trim()
		}, { onSuccess: () => {
			handleOpenChange(false);
		} });
	};
	const isFormValid = selectedOrderItemId !== "" && rating > 0 && title.trim().length >= 5 && comment.trim().length >= 10;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
		open,
		onOpenChange: handleOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "sm:max-w-lg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Write a Review" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Share your honest experience with this product. Only verified purchases can leave reviews." })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6 py-4",
					children: [
						unreviewedItems.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$1, {
								htmlFor: "order",
								children: "Select Purchase"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select$1, {
								value: selectedOrderItemId,
								onValueChange: setSelectedOrderItemId,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									id: "order",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select your purchase" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: unreviewedItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: item.orderItemId,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium",
											children: item.productName
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-muted-foreground text-xs",
											children: [
												"Order #",
												item.orderNumber,
												" •",
												" ",
												new Date(item.purchaseDate).toLocaleDateString()
											]
										})]
									})
								}, item.orderItemId)) })]
							})]
						}),
						unreviewedItems.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-lg border border-dashed p-6 text-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-sm",
								children: "You don't have any eligible purchases for this product. Only verified purchases can be reviewed."
							})
						}),
						selectedOrderItemId && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$1, { children: "Rating" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1",
									children: [[
										1,
										2,
										3,
										4,
										5
									].map((star) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "p-1 transition-transform hover:scale-110",
										onClick: () => setRating(star),
										onMouseEnter: () => setHoveredRating(star),
										onMouseLeave: () => setHoveredRating(0),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: cn("h-8 w-8 transition-colors", star <= (hoveredRating || rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground") })
									}, star)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-2 text-muted-foreground text-sm",
										children: rating > 0 ? [
											"",
											"Poor",
											"Fair",
											"Good",
											"Very Good",
											"Excellent"
										][rating] : "Select rating"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$1, {
										htmlFor: "title",
										children: "Review Title"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "title",
										placeholder: "Summarize your experience",
										value: title,
										onChange: (e) => setTitle(e.target.value),
										maxLength: 100
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-muted-foreground text-xs",
										children: [title.length, "/100 characters (min 5)"]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$1, {
										htmlFor: "comment",
										children: "Your Review"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										id: "comment",
										placeholder: "Tell others about your experience with this product...",
										value: comment,
										onChange: (e) => setComment(e.target.value),
										rows: 4,
										maxLength: 1e3
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-muted-foreground text-xs",
										children: [comment.length, "/1000 characters (min 10)"]
									})
								]
							})
						] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => handleOpenChange(false),
					disabled: createReview.isPending,
					children: "Cancel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: handleSubmit,
					disabled: !isFormValid || createReview.isPending,
					children: createReview.isPending ? "Submitting..." : "Submit Review"
				})] })
			]
		})
	});
}
function ProductReviewsTab({ productId }) {
	const [sortBy, setSortBy] = (0, import_react.useState)("newest");
	const [isReviewDialogOpen, setIsReviewDialogOpen] = (0, import_react.useState)(false);
	const { data: reviewsData, isLoading, error } = useProductReviews(productId, {
		limit: 10,
		offset: 0,
		sortBy
	});
	const { data: eligibility } = useReviewEligibility(productId);
	const { voteHelpful } = useReviewMutations();
	const handleVoteHelpful = (reviewId) => {
		voteHelpful.mutate({
			reviewId,
			productId
		});
	};
	const handleWriteReview = () => {
		setIsReviewDialogOpen(true);
	};
	const reviews = reviewsData?.reviews ?? [];
	const totalRatings = reviewsData?.total ?? 0;
	const ratingStats = reviewsData?.ratingStats;
	const averageRating = ratingStats?.average ?? 0;
	const ratingBreakdown = ratingStats?.breakdown ?? {
		5: 0,
		4: 0,
		3: 0,
		2: 0,
		1: 0
	};
	const canReview = eligibility?.canReview ?? false;
	const eligibleOrderItems = eligibility?.eligibleOrderItems ?? [];
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid @5xl:grid-cols-12 gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "@5xl:col-span-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4",
					children: [...Array(3)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-32 animate-pulse rounded-lg bg-muted" }, i))
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "@5xl:col-span-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-64 animate-pulse rounded-lg bg-muted" })
			})]
		})
	});
	if (error) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center py-12 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "mb-4 h-12 w-12 text-muted-foreground" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mb-2 font-semibold text-lg",
				children: "Unable to load reviews"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground text-sm",
				children: "There was an error loading reviews. Please try again later."
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid @5xl:grid-cols-12 gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "@5xl:col-span-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "font-semibold text-lg",
						children: [
							"Customer Reviews (",
							totalRatings,
							")"
						]
					}), reviews.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select$1, {
						value: sortBy,
						onValueChange: (value) => setSortBy(value),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							className: "w-40",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Sort by" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "newest",
								children: "Newest First"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "oldest",
								children: "Oldest First"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "highest",
								children: "Highest Rated"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "lowest",
								children: "Lowest Rated"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "helpful",
								children: "Most Helpful"
							})
						] })]
					})]
				}), reviews.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2",
					children: reviews.map((review) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewCard, {
						userName: review.userName,
						userAvatar: review.userAvatar ?? "",
						date: new Date(review.createdAt).toLocaleDateString("en-US", {
							month: "long",
							day: "numeric",
							year: "numeric"
						}),
						rating: review.rating,
						reviewText: review.comment,
						isVerifiedPurchase: review.isVerifiedPurchase,
						helpfulCount: review.helpfulCount,
						hasVotedHelpful: review.hasVotedHelpful,
						onVoteHelpful: () => handleVoteHelpful(review.id),
						isVoting: voteHelpful.isPending
					}, review.id))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center justify-center py-12 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "mb-4 h-12 w-12 text-muted-foreground" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mb-2 font-semibold text-lg",
							children: "No reviews yet"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-sm",
							children: "Be the first to review this product!"
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "@5xl:col-span-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RatingSummary, {
					averageRating,
					totalRatings,
					ratingBreakdown,
					className: "@2xl:flex-row @5xl:flex-col flex-col"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewFormCta, {
					canReview,
					onReviewClick: handleWriteReview,
					className: "mt-6"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewFormDialog, {
			open: isReviewDialogOpen,
			onOpenChange: setIsReviewDialogOpen,
			productId,
			eligibleOrderItems
		})]
	});
}
function ProductDetailsTabs({ product }) {
	const specifications = {};
	if (product.attributeIds && product.attributeNames) product.attributeIds.forEach((attrId, index) => {
		const attrName = product.attributeNames[index];
		const valueNames = (product.attributeValues[attrId] || []).map((vid) => product.attributeValueNames[vid]).filter(Boolean).join(", ");
		if (attrName && valueNames) specifications[attrName] = valueNames;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs$1, {
		defaultValue: "description",
		className: "w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto border-b",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
				className: "h-auto w-full justify-start gap-2 rounded-none bg-transparent p-0 sm:gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "description",
						className: "relative whitespace-nowrap rounded-none border-transparent border-b-2 bg-transparent px-2 pt-2 pb-3 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none sm:px-0",
						children: "Description"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "additional-info",
						className: "relative whitespace-nowrap rounded-none border-transparent border-b-2 bg-transparent px-2 pt-2 pb-3 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none sm:px-0",
						children: "Additional Information"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
						value: "reviews",
						className: "relative whitespace-nowrap rounded-none border-transparent border-b-2 bg-transparent px-2 pt-2 pb-3 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none sm:px-0",
						children: [
							"Reviews (",
							product.reviewCount,
							")"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "shipping",
						className: "relative whitespace-nowrap rounded-none border-transparent border-b-2 bg-transparent px-2 pt-2 pb-3 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none sm:px-0",
						children: "Shipping & Returns"
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "description",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductDescriptionTab, { description: product.description || "" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "additional-info",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductAdditionalInfoTab, { specifications })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "reviews",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductReviewsTab, { productId: product.id })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "shipping",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductShippingTab, { shipping: {
						freeShipping: false,
						deliveryTime: "3-5 business days",
						policy: "Standard return policy applies."
					} })
				})
			]
		})]
	});
}
function ProductActions({ onAddToCart, onBuyNow, onToggleWishlist, onToggleCompare, isWishlisted, isCompareListed, isLoading, disabled, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex flex-col gap-3", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex w-full flex-col gap-3 sm:flex-row",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				size: "lg",
				className: "h-14 flex-1 gap-2 py-4 text-base sm:h-10 sm:py-2 sm:text-sm",
				onClick: onAddToCart,
				disabled: disabled || isLoading,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "h-5 w-5" }), "Add to cart"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "lg",
				variant: "secondary",
				className: "h-14 flex-1 py-4 text-base sm:h-10 sm:py-2 sm:text-sm",
				onClick: onBuyNow,
				disabled: disabled || isLoading,
				children: "Buy Now"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex w-full gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				size: "default",
				className: cn("flex-1 gap-2", isCompareListed && "border-primary bg-primary/5 text-primary"),
				onClick: onToggleCompare,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitCompare, { className: "h-4 w-4" }), "Compare"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				size: "default",
				className: cn("flex-1 gap-2", isWishlisted && "border-red-200 bg-red-50 text-red-500 hover:bg-red-100 hover:text-red-600"),
				onClick: onToggleWishlist,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: cn("h-4 w-4", isWishlisted && "fill-current") }), "Wishlist"]
			})]
		})]
	});
}
function ProductHeader({ title, category, rating, reviewCount, isOnSale, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("space-y-4", className),
		children: [
			isOnSale && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				variant: "destructive",
				className: "w-fit",
				children: "Sale"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-bold @2xl:text-4xl text-3xl text-foreground tracking-tight",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-4 text-muted-foreground text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/category/$slug",
							params: { slug: category.slug },
							className: "font-medium text-primary hover:underline",
							children: category.name
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-px bg-border" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center text-yellow-400",
								children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: cn("h-4 w-4", i < Math.floor(rating) ? "fill-current" : "text-muted") }, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground",
								children: rating
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"(",
								reviewCount,
								" reviews)"
							] })
						]
					})
				]
			})
		]
	});
}
function ProductThumbnail({ image, alt, isActive, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("relative aspect-square w-full overflow-hidden rounded-md border-2 bg-white transition-all hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/50", isActive ? "border-primary" : "border-transparent"),
		"aria-label": `View ${alt}`,
		"aria-current": isActive ? "true" : void 0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: image,
			alt,
			className: "h-full w-full object-cover object-center",
			loading: "lazy"
		})
	});
}
function ProductImageGallery({ images, className }) {
	const [activeImageIndex, setActiveImageIndex] = (0, import_react.useState)(0);
	const [isZoomed, setIsZoomed] = (0, import_react.useState)(false);
	const activeImage = images[activeImageIndex];
	if (!images || images.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex aspect-square w-full items-center justify-center rounded-lg bg-muted",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted-foreground",
			children: "No images available"
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex flex-col gap-4", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "group relative aspect-square w-full overflow-hidden rounded-lg border bg-white",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setIsZoomed(!isZoomed),
				className: "relative h-full w-full overflow-hidden border-0 bg-transparent p-0",
				"aria-label": isZoomed ? "Zoom out image" : "Zoom in image",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: activeImage.url,
					alt: activeImage.alt,
					className: cn("h-full w-full object-cover object-center transition-transform duration-500", isZoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in")
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "secondary",
				size: "icon",
				className: "absolute top-4 right-4 opacity-0 transition-opacity group-hover:opacity-100",
				onClick: () => setIsZoomed(!isZoomed),
				"aria-label": isZoomed ? "Zoom out" : "Zoom in",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, { className: "h-4 w-4" })
			})]
		}), images.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-5 gap-4",
			children: images.map((image, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductThumbnail, {
				image: image.url,
				alt: image.alt,
				isActive: index === activeImageIndex,
				onClick: () => {
					setActiveImageIndex(index);
					setIsZoomed(false);
				}
			}, image.id))
		})]
	});
}
function ProductPrice({ currentPrice, originalPrice, currency, discountPercentage, inStock, className }) {
	const hasDiscount = originalPrice > currentPrice;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex flex-col gap-2", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-baseline gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-bold text-3xl text-foreground",
				children: [currency, currentPrice.toFixed(2)]
			}), hasDiscount && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-lg text-muted-foreground line-through",
				children: [currency, originalPrice.toFixed(2)]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [hasDiscount && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-medium text-destructive text-sm",
				children: [
					"Save ",
					currency,
					(originalPrice - currentPrice).toFixed(2),
					" (",
					discountPercentage,
					"%)"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				variant: inStock ? "outline" : "destructive",
				className: cn(inStock && "border-green-500 text-green-600"),
				children: inStock ? "In Stock" : "Out of Stock"
			})]
		})]
	});
}
function ShippingInfoItem({ icon: Icon, label, value, detailsLink, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-start gap-3", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-full bg-muted p-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-muted-foreground" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium text-foreground",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: value
				})]
			}),
			detailsLink && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: detailsLink,
				className: "font-medium text-primary text-xs hover:underline",
				children: "See Details"
			})
		]
	});
}
function ShippingInfoSection({ shipping, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("space-y-4 border-t pt-4", className),
		children: [
			shipping.freeShipping && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShippingInfoItem, {
				icon: Truck,
				label: "Free Shipping & Returns",
				value: "On all orders over $50",
				detailsLink: "/shipping-policy"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShippingInfoItem, {
				icon: Clock,
				label: "Delivery",
				value: `Estimated delivery: ${shipping.deliveryTime}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShippingInfoItem, {
				icon: RotateCcw,
				label: "Return Policy",
				value: shipping.policy,
				detailsLink: "/return-policy"
			})
		]
	});
}
function StoreInfoCard({ store, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: cn("overflow-hidden bg-muted/30 py-0", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
			className: "p-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Avatar$1, {
						className: "h-12 w-12 border-2 border-background",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, {
							src: store.logo,
							alt: store.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
							className: "bg-primary/10 text-primary",
							children: store.name[0]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/store/$slug",
								params: { slug: store.slug },
								className: "font-semibold hover:underline",
								children: store.name
							}), store.isVerified && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
								className: "h-4 w-4 text-blue-500",
								"aria-label": "Verified Store"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-3 text-muted-foreground text-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-yellow-400 text-yellow-400" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: store.rating }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										"(",
										store.reviewCount,
										")"
									] })
								]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "default",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/store/$slug",
							params: { slug: store.slug },
							children: "Visit Store"
						})
					})
				]
			})
		})
	});
}
function ProductMainSection({ product }) {
	const [quantity, setQuantity] = (0, import_react.useState)(1);
	const [isCompareListed, setIsCompareListed] = (0, import_react.useState)(false);
	const { addItem } = useCart();
	const { setIsOpen } = useCartStore();
	const { toggleWishlist, isToggling } = useWishlistMutations();
	const { data: wishlistStatus } = useQuery(wishlistStatusQueryOptions(product.id));
	const isWishlisted = wishlistStatus?.isInWishlist ?? false;
	const handleAddToCart = async () => {
		try {
			await addItem({
				productId: product.id,
				quantity
			});
			setIsOpen(true);
			toast.success("Added to cart");
		} catch (error) {
			console.error("Failed to add to cart:", error);
			toast.error("Failed to add to cart");
		}
	};
	const handleBuyNow = () => {
		console.log("Buy now:", product.id, quantity);
	};
	const handleToggleWishlist = async () => {
		await toggleWishlist({ productId: product.id });
	};
	const regularPrice = parseFloat(product.regularPrice || "0");
	const sellingPrice = parseFloat(product.sellingPrice);
	const discountPercentage = regularPrice > sellingPrice ? Math.round((regularPrice - sellingPrice) / regularPrice * 100) : 0;
	const category = {
		name: product.categoryName || "Unknown",
		slug: product.categoryId || ""
	};
	const store = {
		id: product.shopId,
		name: product.shopName || "Unknown Store",
		slug: product.shopSlug || "",
		logo: "",
		rating: 0,
		reviewCount: 0,
		isVerified: false,
		memberSince: ""
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid @5xl:grid-cols-12 grid-cols-1 @5xl:gap-12 gap-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "@5xl:col-span-7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductImageGallery, { images: product.images.map((img) => ({
				id: img.id,
				url: img.url,
				alt: img.alt || product.name
			})) })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "@5xl:col-span-5 flex flex-col gap-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductHeader, {
							title: product.name,
							category,
							rating: parseFloat(product.averageRating) || 0,
							reviewCount: product.reviewCount || 0,
							isOnSale: regularPrice > sellingPrice
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductPrice, {
							currentPrice: sellingPrice,
							originalPrice: regularPrice,
							currency: "$",
							discountPercentage,
							inStock: product.stock > 0
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4 border-t pt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuantitySelector, {
									value: quantity,
									onChange: setQuantity,
									max: product.stock,
									disabled: product.stock <= 0
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductActions, {
								onAddToCart: handleAddToCart,
								onBuyNow: handleBuyNow,
								onToggleWishlist: handleToggleWishlist,
								onToggleCompare: () => setIsCompareListed(!isCompareListed),
								isWishlisted,
								isCompareListed,
								isLoading: isToggling,
								disabled: product.stock <= 0
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreInfoCard, { store }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShippingInfoSection, { shipping: {
					freeShipping: false,
					deliveryTime: "3-5 business days",
					policy: "Standard return policy applies."
				} })
			]
		})]
	});
}
function ProductCardHorizontal({ product, className }) {
	const mainImage = product.images[0]?.url || "https://placehold.co/300x300";
	const regularPrice = parseFloat(product.regularPrice || "0");
	const sellingPrice = parseFloat(product.sellingPrice);
	const rating = parseFloat(product.averageRating) || 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/product/$productId",
		params: { productId: product.id },
		className: cn("group flex w-full min-w-70 max-w-[320px] flex-col gap-3 rounded-lg border bg-background p-4 transition-all hover:shadow-md", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-square w-full overflow-hidden rounded-md bg-muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: mainImage,
				alt: product.name,
				className: "h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105",
				loading: "lazy"
			}), regularPrice > sellingPrice && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				variant: "destructive",
				className: "absolute top-2 left-2",
				children: "Sale"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium text-muted-foreground text-xs",
					children: product.brandName || "Unknown Brand"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "line-clamp-2 font-medium text-foreground text-sm group-hover:text-primary",
					children: product.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex text-yellow-400",
						children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: cn("h-3 w-3", i < Math.round(rating) ? "fill-current" : "text-muted") }, i))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-muted-foreground text-xs",
						children: [
							"(",
							product.reviewCount || 0,
							")"
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline gap-2 pt-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-bold text-foreground text-lg",
						children: ["$", sellingPrice.toFixed(2)]
					}), regularPrice > sellingPrice && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-muted-foreground text-sm line-through",
						children: ["$", regularPrice.toFixed(2)]
					})]
				})
			]
		})]
	});
}
function SimilarProductsSection({ products }) {
	const scrollContainerRef = (0, import_react.useRef)(null);
	const scroll = (direction) => {
		if (scrollContainerRef.current) {
			const scrollAmount = 300;
			const newScrollLeft = direction === "left" ? scrollContainerRef.current.scrollLeft - scrollAmount : scrollContainerRef.current.scrollLeft + scrollAmount;
			scrollContainerRef.current.scrollTo({
				left: newScrollLeft,
				behavior: "smooth"
			});
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-bold text-2xl tracking-tight",
				children: "Similar Products"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "icon",
					className: "h-8 w-8 rounded-full",
					onClick: () => scroll("left"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "icon",
					className: "h-8 w-8 rounded-full",
					onClick: () => scroll("right"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: scrollContainerRef,
			className: "scrollbar-hide flex gap-6 overflow-x-auto pb-4",
			style: {
				scrollbarWidth: "none",
				msOverflowStyle: "none"
			},
			children: products.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCardHorizontal, { product }, product.id))
		})]
	});
}
function ProductDetailsTemplate({ product, similarProducts = [] }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "@container container mx-auto @4xl:px-6 px-4 @5xl:py-12 py-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductBreadcrumb, { items: [
			{
				label: "Home",
				href: "/"
			},
			{
				label: "Store",
				href: "/store"
			},
			{
				label: product.categoryName || "Product",
				href: product.categoryId ? `/store?category=${product.categoryId}` : "#"
			},
			{
				label: product.name,
				href: `/store/product/${product.slug}`
			}
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductMainSection, { product }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductDetailsTabs, { product }),
				similarProducts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SimilarProductsSection, { products: similarProducts })
			]
		})]
	});
}
function RouteComponent() {
	const { product } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductDetailsTemplate, { product });
}
//#endregion
export { RouteComponent as component };
