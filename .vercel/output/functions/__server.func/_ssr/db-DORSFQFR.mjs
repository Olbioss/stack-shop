import { A as sql, B as pgEnum, W as unique } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { a as pgTable, d as integer, f as boolean, i as primaryKey, l as numeric, o as timestamp, r as relations, s as text, t as drizzle, u as jsonb } from "../_libs/drizzle-orm.mjs";
import { c as vendorsRelations, i as shopsRelations, o as user, r as shops, s as vendors } from "./shop-schema-C6uNILQs.mjs";
import { S as taxRatesRelations, _ as shippingMethods, a as brands, b as tagsRelations, c as productAttributesRelations, d as productShippingMethods, f as productShippingMethodsRelations, g as productsRelations, h as products, i as attributesRelations, l as productImages, m as productTagsRelations, n as attributeValuesRelations, o as categories, p as productTags, r as attributes, s as productAttributes, t as attributeValues, u as productImagesRelations, v as shippingMethodsRelations, x as taxRates, y as tags } from "./products-schema-BRxXUpzG.mjs";
import { t as cs } from "../_libs/neondatabase__serverless.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/db-DORSFQFR.js
/**
* Customer Addresses Schema
*
* Database schema for customer shipping and billing addresses.
* Addresses are linked to user accounts for reuse during checkout.
*/
/**
* Customer Addresses Table
* Stores billing and shipping addresses for customers.
*/
var customerAddresses = pgTable("customer_addresses", {
	id: text("id").primaryKey().default(sql`gen_random_uuid()`),
	userId: text("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),
	type: text("type").notNull().default("shipping"),
	title: text("title").notNull(),
	firstName: text("first_name"),
	lastName: text("last_name"),
	phone: text("phone"),
	street: text("street").notNull(),
	city: text("city").notNull(),
	state: text("state").notNull(),
	zip: text("zip").notNull(),
	country: text("country").notNull(),
	isDefault: boolean("is_default").default(false),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => /* @__PURE__ */ new Date()).notNull()
});
/**
* Customer Addresses Relations
*/
var customerAddressesRelations = relations(customerAddresses, ({ one }) => ({ user: one(user, {
	fields: [customerAddresses.userId],
	references: [user.id]
}) }));
/**
* Cart Schema
*
* Database schema for shopping cart functionality.
* Supports both authenticated users and guest sessions.
*/
/**
* Cart Sessions Table
* Manages cart sessions for both registered users and guests.
*/
var cartSessions = pgTable("cart_sessions", {
	id: text("id").primaryKey(),
	userId: text("user_id").references(() => user.id, { onDelete: "cascade" }),
	sessionId: text("session_id"),
	expiresAt: timestamp("expires_at"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => /* @__PURE__ */ new Date()).notNull()
});
/**
* Cart Items Table
* Individual items within a cart session.
*/
var cartItems = pgTable("cart_items", {
	id: text("id").primaryKey(),
	cartSessionId: text("cart_session_id").notNull().references(() => cartSessions.id, { onDelete: "cascade" }),
	productId: text("product_id").notNull().references(() => products.id, { onDelete: "cascade" }),
	quantity: integer("quantity").notNull().default(1),
	variantOptions: text("variant_options"),
	addedAt: timestamp("added_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => /* @__PURE__ */ new Date()).notNull()
}, (table) => [unique("cart_item_unique").on(table.cartSessionId, table.productId, table.variantOptions)]);
/**
* Cart Sessions Relations
*/
var cartSessionsRelations = relations(cartSessions, ({ one, many }) => ({
	user: one(user, {
		fields: [cartSessions.userId],
		references: [user.id]
	}),
	items: many(cartItems)
}));
/**
* Cart Items Relations
*/
var cartItemsRelations = relations(cartItems, ({ one }) => ({
	cartSession: one(cartSessions, {
		fields: [cartItems.cartSessionId],
		references: [cartSessions.id]
	}),
	product: one(products, {
		fields: [cartItems.productId],
		references: [products.id]
	})
}));
/**
* Coupons Schema
*
* Database schema for coupons in the multi-vendor marketplace.
* Supports percentage, fixed amount, and free shipping discount types.
* Coupons are scoped to individual shops with usage tracking.
*
* Features:
* - Junction tables for product/category restrictions
* - Per-user usage tracking for limit enforcement
* - Flexible applicability (all products, specific products, specific categories)
*/
/**
* Coupon Type Enum
* - 'percentage': Discount as a percentage of cart total
* - 'fixed': Fixed amount discount
* - 'free_shipping': Free shipping discount
*/
var couponTypeEnum = pgEnum("coupon_type", [
	"percentage",
	"fixed",
	"free_shipping"
]);
/**
* Coupon Status Enum
* - 'active': Coupon is active and can be used
* - 'inactive': Coupon is disabled by vendor
* - 'expired': Coupon validity period has ended
* - 'scheduled': Coupon is scheduled to become active in the future
*/
var couponStatusEnum = pgEnum("coupon_status", [
	"active",
	"inactive",
	"expired",
	"scheduled"
]);
/**
* Coupon Applicability Enum
* - 'all': Applies to all products in the shop
* - 'specific_products': Applies only to selected products
* - 'specific_categories': Applies only to products in selected categories
*/
var couponApplicabilityEnum = pgEnum("coupon_applicability", [
	"all",
	"specific_products",
	"specific_categories"
]);
/**
* Coupons Table
* Stores coupon/discount codes for shops with usage tracking.
*/
var coupons = pgTable("coupons", {
	id: text("id").primaryKey().default(sql`gen_random_uuid()`),
	shopId: text("shop_id").notNull().references(() => shops.id, { onDelete: "cascade" }),
	code: text("code").notNull(),
	description: text("description"),
	image: text("image"),
	type: couponTypeEnum("type").notNull().default("percentage"),
	discountAmount: numeric("discount_amount", {
		precision: 10,
		scale: 2
	}).notNull().default("0"),
	minimumCartAmount: numeric("minimum_cart_amount", {
		precision: 10,
		scale: 2
	}).notNull().default("0"),
	maximumDiscountAmount: numeric("maximum_discount_amount", {
		precision: 10,
		scale: 2
	}),
	activeFrom: timestamp("active_from").notNull(),
	activeTo: timestamp("active_to").notNull(),
	usageLimit: integer("usage_limit"),
	usageLimitPerUser: integer("usage_limit_per_user").default(1),
	usageCount: integer("usage_count").notNull().default(0),
	isActive: boolean("is_active").default(true),
	status: couponStatusEnum("status").notNull().default("active"),
	applicableTo: couponApplicabilityEnum("applicable_to").notNull().default("all"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => /* @__PURE__ */ new Date()).notNull()
});
/**
* Coupon Products Junction Table
* Links coupons to specific products when applicableTo = 'specific_products'
*/
var couponProducts = pgTable("coupon_products", {
	couponId: text("coupon_id").notNull().references(() => coupons.id, { onDelete: "cascade" }),
	productId: text("product_id").notNull().references(() => products.id, { onDelete: "cascade" })
}, (table) => ({ pk: primaryKey({ columns: [table.couponId, table.productId] }) }));
/**
* Coupon Categories Junction Table
* Links coupons to specific categories when applicableTo = 'specific_categories'
*/
var couponCategories = pgTable("coupon_categories", {
	couponId: text("coupon_id").notNull().references(() => coupons.id, { onDelete: "cascade" }),
	categoryId: text("category_id").notNull().references(() => categories.id, { onDelete: "cascade" })
}, (table) => ({ pk: primaryKey({ columns: [table.couponId, table.categoryId] }) }));
/**
* Coupon Usage Table
* Tracks individual coupon usage by users for per-user limit enforcement
*/
var couponUsage = pgTable("coupon_usage", {
	id: text("id").primaryKey().default(sql`gen_random_uuid()`),
	couponId: text("coupon_id").notNull().references(() => coupons.id, { onDelete: "cascade" }),
	userId: text("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),
	orderId: text("order_id"),
	discountApplied: numeric("discount_applied", {
		precision: 10,
		scale: 2
	}).notNull().default("0"),
	usedAt: timestamp("used_at").defaultNow().notNull()
});
/**
* Coupons Relations
*/
var couponsRelations = relations(coupons, ({ one, many }) => ({
	shop: one(shops, {
		fields: [coupons.shopId],
		references: [shops.id]
	}),
	products: many(couponProducts),
	categories: many(couponCategories),
	usage: many(couponUsage)
}));
/**
* Coupon Products Relations
*/
var couponProductsRelations = relations(couponProducts, ({ one }) => ({
	coupon: one(coupons, {
		fields: [couponProducts.couponId],
		references: [coupons.id]
	}),
	product: one(products, {
		fields: [couponProducts.productId],
		references: [products.id]
	})
}));
/**
* Coupon Categories Relations
*/
var couponCategoriesRelations = relations(couponCategories, ({ one }) => ({
	coupon: one(coupons, {
		fields: [couponCategories.couponId],
		references: [coupons.id]
	}),
	category: one(categories, {
		fields: [couponCategories.categoryId],
		references: [categories.id]
	})
}));
/**
* Coupon Usage Relations
*/
var couponUsageRelations = relations(couponUsage, ({ one }) => ({
	coupon: one(coupons, {
		fields: [couponUsage.couponId],
		references: [coupons.id]
	}),
	user: one(user, {
		fields: [couponUsage.userId],
		references: [user.id]
	})
}));
/**
* Orders Schema
*
* Database schema for orders in the multi-vendor marketplace.
* Supports order tracking, payment status, and fulfillment for each shop.
*
* Multi-vendor approach:
* - Each order belongs to ONE shop (if cart has items from multiple shops, create multiple orders)
* - Payments can be per-order or grouped by customer
*/
var orderStatusEnum = pgEnum("order_status", [
	"pending",
	"confirmed",
	"processing",
	"shipped",
	"delivered",
	"cancelled",
	"refunded"
]);
var paymentStatusEnum = pgEnum("payment_status", [
	"pending",
	"paid",
	"failed",
	"refunded",
	"partial_refund"
]);
var fulfillmentStatusEnum = pgEnum("fulfillment_status", [
	"unfulfilled",
	"partial",
	"fulfilled"
]);
var paymentMethodEnum = pgEnum("payment_method", [
	"card",
	"bank_transfer",
	"cash_on_delivery"
]);
var paymentProviderEnum = pgEnum("payment_provider", ["stripe", "manual"]);
var orders = pgTable("orders", {
	id: text("id").primaryKey().default(sql`gen_random_uuid()`),
	orderNumber: text("order_number").notNull().unique(),
	userId: text("user_id").references(() => user.id, { onDelete: "set null" }),
	guestEmail: text("guest_email"),
	shopId: text("shop_id").notNull().references(() => shops.id, { onDelete: "cascade" }),
	status: orderStatusEnum("status").notNull().default("pending"),
	paymentStatus: paymentStatusEnum("payment_status").notNull().default("pending"),
	fulfillmentStatus: fulfillmentStatusEnum("fulfillment_status").notNull().default("unfulfilled"),
	currency: text("currency").notNull().default("USD"),
	subtotal: numeric("subtotal", {
		precision: 10,
		scale: 2
	}).notNull(),
	taxAmount: numeric("tax_amount", {
		precision: 10,
		scale: 2
	}).notNull().default("0"),
	shippingAmount: numeric("shipping_amount", {
		precision: 10,
		scale: 2
	}).notNull().default("0"),
	discountAmount: numeric("discount_amount", {
		precision: 10,
		scale: 2
	}).notNull().default("0"),
	totalAmount: numeric("total_amount", {
		precision: 10,
		scale: 2
	}).notNull(),
	shippingMethod: text("shipping_method"),
	shippingAddress: jsonb("shipping_address").$type(),
	billingAddress: jsonb("billing_address").$type(),
	customerNotes: text("customer_notes"),
	internalNotes: text("internal_notes"),
	couponCode: text("coupon_code"),
	couponId: text("coupon_id"),
	metadata: jsonb("metadata").$type(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => /* @__PURE__ */ new Date()).notNull()
});
var orderItems = pgTable("order_items", {
	id: text("id").primaryKey().default(sql`gen_random_uuid()`),
	orderId: text("order_id").notNull().references(() => orders.id, { onDelete: "cascade" }),
	productId: text("product_id").notNull().references(() => products.id, { onDelete: "set null" }),
	productName: text("product_name").notNull(),
	productSku: text("product_sku"),
	productImage: text("product_image"),
	variantOptions: jsonb("variant_options").$type(),
	unitPrice: numeric("unit_price", {
		precision: 10,
		scale: 2
	}).notNull(),
	quantity: integer("quantity").notNull(),
	totalPrice: numeric("total_price", {
		precision: 10,
		scale: 2
	}).notNull(),
	discountAmount: numeric("discount_amount", {
		precision: 10,
		scale: 2
	}).notNull().default("0"),
	createdAt: timestamp("created_at").defaultNow().notNull()
});
var payments = pgTable("payments", {
	id: text("id").primaryKey().default(sql`gen_random_uuid()`),
	orderId: text("order_id").notNull().references(() => orders.id, { onDelete: "cascade" }),
	paymentMethod: paymentMethodEnum("payment_method").notNull(),
	provider: paymentProviderEnum("provider").notNull(),
	amount: numeric("amount", {
		precision: 10,
		scale: 2
	}).notNull(),
	currency: text("currency").notNull().default("USD"),
	status: text("status").notNull().default("pending"),
	stripePaymentIntentId: text("stripe_payment_intent_id"),
	stripeClientSecret: text("stripe_client_secret"),
	transactionId: text("transaction_id"),
	stripeTransferId: text("stripe_transfer_id"),
	applicationFeeAmount: numeric("application_fee_amount", {
		precision: 10,
		scale: 2
	}),
	connectedAccountId: text("connected_account_id"),
	metadata: jsonb("metadata").$type(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => /* @__PURE__ */ new Date()).notNull()
});
var ordersRelations = relations(orders, ({ one, many }) => ({
	user: one(user, {
		fields: [orders.userId],
		references: [user.id]
	}),
	shop: one(shops, {
		fields: [orders.shopId],
		references: [shops.id]
	}),
	items: many(orderItems),
	payments: many(payments)
}));
var orderItemsRelations = relations(orderItems, ({ one }) => ({
	order: one(orders, {
		fields: [orderItems.orderId],
		references: [orders.id]
	}),
	product: one(products, {
		fields: [orderItems.productId],
		references: [products.id]
	})
}));
var paymentsRelations = relations(payments, ({ one }) => ({ order: one(orders, {
	fields: [payments.orderId],
	references: [orders.id]
}) }));
var emailDeliveryTypeEnum = pgEnum("email_delivery_type", ["order_confirmation"]);
var emailDeliveryStatusEnum = pgEnum("email_delivery_status", [
	"processing",
	"sent",
	"failed",
	"skipped"
]);
var emailDeliveries = pgTable("email_deliveries", {
	id: text("id").primaryKey(),
	dedupeKey: text("dedupe_key").notNull().unique(),
	type: emailDeliveryTypeEnum("type").notNull(),
	toEmail: text("to_email").notNull(),
	orderId: text("order_id").references(() => orders.id, { onDelete: "cascade" }),
	status: emailDeliveryStatusEnum("status").notNull().default("processing"),
	attempts: integer("attempts").notNull().default(0),
	providerMessageId: text("provider_message_id"),
	lastError: text("last_error"),
	lastAttemptAt: timestamp("last_attempt_at"),
	sentAt: timestamp("sent_at"),
	metadata: jsonb("metadata").$type(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => /* @__PURE__ */ new Date()).notNull()
});
var emailDeliveriesRelations = relations(emailDeliveries, ({ one }) => ({ order: one(orders, {
	fields: [emailDeliveries.orderId],
	references: [orders.id]
}) }));
/**
* Notifications Schema
*
* Database schema for vendor/shop notifications.
* Stores order notifications, reviews, low stock alerts, etc.
*/
var notificationTypeEnum = pgEnum("notification_type", [
	"new_order",
	"order_status_update",
	"new_review",
	"low_stock",
	"payout",
	"system"
]);
var notifications = pgTable("notifications", {
	id: text("id").primaryKey().default(sql`gen_random_uuid()`),
	shopId: text("shop_id").notNull().references(() => shops.id, { onDelete: "cascade" }),
	type: notificationTypeEnum("type").notNull(),
	title: text("title").notNull(),
	message: text("message").notNull(),
	data: jsonb("data").$type(),
	isRead: boolean("is_read").default(false).notNull(),
	readAt: timestamp("read_at"),
	createdAt: timestamp("created_at").defaultNow().notNull()
});
var notificationsRelations = relations(notifications, ({ one }) => ({ shop: one(shops, {
	fields: [notifications.shopId],
	references: [shops.id]
}) }));
/**
* Reviews Schema
*
* Database schema for product reviews in the multi-vendor marketplace.
* Only customers who have purchased and paid for a product can leave a review.
*
* Real-world scenario:
* - Reviews are tied to order items (proof of purchase)
* - One review per order item
* - Reviews require payment to be completed (paymentStatus: 'paid')
*/
var reviewStatusEnum = pgEnum("review_status", [
	"pending",
	"approved",
	"rejected"
]);
var productReviews = pgTable("product_reviews", {
	id: text("id").primaryKey().default(sql`gen_random_uuid()`),
	userId: text("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),
	productId: text("product_id").notNull().references(() => products.id, { onDelete: "cascade" }),
	shopId: text("shop_id").notNull().references(() => shops.id, { onDelete: "cascade" }),
	orderId: text("order_id").notNull().references(() => orders.id, { onDelete: "cascade" }),
	orderItemId: text("order_item_id").notNull().references(() => orderItems.id, { onDelete: "cascade" }),
	rating: integer("rating").notNull(),
	title: text("title").notNull(),
	comment: text("comment").notNull(),
	status: reviewStatusEnum("status").notNull().default("approved"),
	helpfulCount: integer("helpful_count").notNull().default(0),
	vendorResponse: text("vendor_response"),
	vendorRespondedAt: timestamp("vendor_responded_at"),
	isVerifiedPurchase: boolean("is_verified_purchase").notNull().default(true),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => /* @__PURE__ */ new Date()).notNull()
});
/**
* Tracks which users found reviews helpful
* Prevents duplicate voting
*/
var reviewHelpfulVotes = pgTable("review_helpful_votes", {
	id: text("id").primaryKey().default(sql`gen_random_uuid()`),
	reviewId: text("review_id").notNull().references(() => productReviews.id, { onDelete: "cascade" }),
	userId: text("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),
	createdAt: timestamp("created_at").defaultNow().notNull()
});
var productReviewsRelations = relations(productReviews, ({ one, many }) => ({
	user: one(user, {
		fields: [productReviews.userId],
		references: [user.id]
	}),
	product: one(products, {
		fields: [productReviews.productId],
		references: [products.id]
	}),
	shop: one(shops, {
		fields: [productReviews.shopId],
		references: [shops.id]
	}),
	order: one(orders, {
		fields: [productReviews.orderId],
		references: [orders.id]
	}),
	orderItem: one(orderItems, {
		fields: [productReviews.orderItemId],
		references: [orderItems.id]
	}),
	helpfulVotes: many(reviewHelpfulVotes)
}));
var reviewHelpfulVotesRelations = relations(reviewHelpfulVotes, ({ one }) => ({
	review: one(productReviews, {
		fields: [reviewHelpfulVotes.reviewId],
		references: [productReviews.id]
	}),
	user: one(user, {
		fields: [reviewHelpfulVotes.userId],
		references: [user.id]
	})
}));
/**
* Wishlist Schema
*
* Database schema for user wishlists.
* Links users to products they want to save for later.
*/
/**
* Wishlist Items Table
* Stores products added to user wishlists.
*/
var wishlistItems = pgTable("wishlist_items", {
	id: text("id").primaryKey().default(sql`gen_random_uuid()`),
	userId: text("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),
	productId: text("product_id").notNull().references(() => products.id, { onDelete: "cascade" }),
	createdAt: timestamp("created_at").defaultNow().notNull()
});
var schema = {
	user,
	vendors,
	vendorsRelations,
	shops,
	shopsRelations,
	categories,
	brands,
	attributes,
	attributeValues,
	attributesRelations,
	attributeValuesRelations,
	tags,
	tagsRelations,
	taxRates,
	taxRatesRelations,
	productAttributes,
	productAttributesRelations,
	productImages,
	productImagesRelations,
	products,
	productsRelations,
	productTags,
	productTagsRelations,
	coupons,
	couponProducts,
	couponCategories,
	couponUsage,
	couponsRelations,
	couponProductsRelations,
	couponCategoriesRelations,
	couponUsageRelations,
	cartSessions,
	cartItems,
	cartItemsRelations,
	cartSessionsRelations,
	customerAddresses,
	customerAddressesRelations,
	wishlistItems,
	wishlistItemsRelations: relations(wishlistItems, ({ one }) => ({
		user: one(user, {
			fields: [wishlistItems.userId],
			references: [user.id]
		}),
		product: one(products, {
			fields: [wishlistItems.productId],
			references: [products.id]
		})
	})),
	shippingMethods,
	shippingMethodsRelations,
	productShippingMethods,
	productShippingMethodsRelations,
	orders,
	ordersRelations,
	orderItems,
	orderItemsRelations,
	payments,
	paymentsRelations,
	notifications,
	notificationsRelations,
	emailDeliveries,
	emailDeliveriesRelations,
	productReviews,
	productReviewsRelations,
	reviewHelpfulVotes,
	reviewHelpfulVotesRelations
};
var sqlClient = null;
var dbClient = null;
function getSql() {
	if (!sqlClient) {
		const url = process.env.DATABASE_URL;
		if (!url) throw new Error("DATABASE_URL environment variable is not set. Please check your .env file.");
		sqlClient = cs(url);
	}
	return sqlClient;
}
function getDb() {
	if (!dbClient) dbClient = drizzle({
		client: getSql(),
		schema
	});
	return dbClient;
}
new Proxy({}, {
	get(_, prop) {
		return Reflect.get(getSql(), prop);
	},
	apply(_, thisArg, args) {
		return Reflect.apply(getSql(), thisArg, args);
	}
});
var db = new Proxy({}, { get(_, prop) {
	return Reflect.get(getDb(), prop);
} });
//#endregion
export { couponUsage as a, db as c, orderItems as d, orders as f, wishlistItems as g, reviewHelpfulVotes as h, couponProducts as i, emailDeliveries as l, productReviews as m, cartSessions as n, coupons as o, payments as p, couponCategories as r, customerAddresses as s, cartItems as t, notifications as u };
