import { A as sql, B as pgEnum } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { a as pgTable, c as decimal, d as integer, f as boolean, i as primaryKey, l as numeric, o as timestamp, r as relations, s as text } from "../_libs/drizzle-orm.mjs";
import { r as shops } from "./shop-schema-C6uNILQs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-schema-BRxXUpzG.js
/**
* Attributes Schema
*
* Database schema for product attributes in the multi-vendor marketplace.
* Attributes are scoped to individual shops for defining product variations.
* Supports multiple types: select, color, image, label.
*/
/**
* Attribute Type Enum
*/
var attributeTypeEnum = pgEnum("attribute_type", [
	"select",
	"color",
	"image",
	"label"
]);
/**
* Attributes Table
* Stores product attributes for shops.
* Each attribute can have multiple values.
*/
var attributes = pgTable("attributes", {
	id: text("id").primaryKey().default(sql`gen_random_uuid()`),
	shopId: text("shop_id").notNull().references(() => shops.id, { onDelete: "cascade" }),
	name: text("name").notNull(),
	slug: text("slug").notNull(),
	type: attributeTypeEnum("type").notNull().default("select"),
	sortOrder: integer("sort_order").default(0),
	isActive: boolean("is_active").default(true),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => /* @__PURE__ */ new Date()).notNull()
});
/**
* Attribute Values Table
* Stores values for each attribute.
*/
var attributeValues = pgTable("attribute_values", {
	id: text("id").primaryKey().default(sql`gen_random_uuid()`),
	attributeId: text("attribute_id").notNull().references(() => attributes.id, { onDelete: "cascade" }),
	name: text("name").notNull(),
	slug: text("slug").notNull(),
	value: text("value").notNull(),
	sortOrder: integer("sort_order").default(0),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => /* @__PURE__ */ new Date()).notNull()
});
/**
* Attributes Relations
*/
var attributesRelations = relations(attributes, ({ one, many }) => ({
	shop: one(shops, {
		fields: [attributes.shopId],
		references: [shops.id]
	}),
	values: many(attributeValues)
}));
/**
* Attribute Values Relations
*/
var attributeValuesRelations = relations(attributeValues, ({ one }) => ({ attribute: one(attributes, {
	fields: [attributeValues.attributeId],
	references: [attributes.id]
}) }));
/**
* Brands Table
* Stores product brands for shops.
* Brands are scoped to individual shops.
*/
var brands = pgTable("brands", {
	id: text("id").primaryKey().default(sql`gen_random_uuid()`),
	shopId: text("shop_id").notNull().references(() => shops.id, { onDelete: "cascade" }),
	name: text("name").notNull(),
	slug: text("slug").notNull(),
	description: text("description"),
	logo: text("logo"),
	website: text("website"),
	sortOrder: integer("sort_order").default(0),
	isActive: boolean("is_active").default(true),
	productCount: integer("product_count").default(0),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => /* @__PURE__ */ new Date()).notNull()
});
relations(brands, ({ one }) => ({ shop: one(shops, {
	fields: [brands.shopId],
	references: [shops.id]
}) }));
var categories = pgTable("categories", {
	id: text("id").primaryKey().default(sql`gen_random_uuid()`),
	shopId: text("shop_id").notNull().references(() => shops.id, { onDelete: "cascade" }),
	name: text("name").notNull(),
	slug: text("slug").notNull(),
	description: text("description"),
	image: text("image"),
	icon: text("icon"),
	parentId: text("parent_id"),
	level: integer("level").default(0),
	sortOrder: integer("sort_order").default(0),
	isActive: boolean("is_active").default(true),
	featured: boolean("featured").default(false),
	productCount: integer("product_count").default(0),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => /* @__PURE__ */ new Date()).notNull()
});
relations(categories, ({ one, many }) => ({
	shop: one(shops, {
		fields: [categories.shopId],
		references: [shops.id]
	}),
	parent: one(categories, {
		fields: [categories.parentId],
		references: [categories.id],
		relationName: "categoryHierarchy"
	}),
	children: many(categories, { relationName: "categoryHierarchy" })
}));
/**
* Shipping Schema
*
* Database schema for shipping methods in the multi-vendor marketplace.
* Shipping methods are scoped to individual shops.
*/
/**
* Shipping Methods Table
* Stores shipping options/methods for shops.
*/
var shippingMethods = pgTable("shipping_methods", {
	id: text("id").primaryKey().default(sql`gen_random_uuid()`),
	shopId: text("shop_id").notNull().references(() => shops.id, { onDelete: "cascade" }),
	name: text("name").notNull(),
	description: text("description"),
	price: decimal("price", {
		precision: 10,
		scale: 2
	}).notNull().default("0"),
	duration: text("duration").notNull(),
	isActive: boolean("is_active").default(true),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => /* @__PURE__ */ new Date()).notNull()
});
/**
* Shipping Methods Relations
*/
var shippingMethodsRelations = relations(shippingMethods, ({ one }) => ({ shop: one(shops, {
	fields: [shippingMethods.shopId],
	references: [shops.id]
}) }));
/**
* Tags Schema
*
* Database schema for product tags in the multi-vendor marketplace.
* Tags are scoped to individual shops for organizing products.
*/
/**
* Tags Table
* Stores product tags for shops.
* Tags are scoped to individual shops for flexible product organization.
*/
var tags = pgTable("tags", {
	id: text("id").primaryKey().default(sql`gen_random_uuid()`),
	shopId: text("shop_id").notNull().references(() => shops.id, { onDelete: "cascade" }),
	name: text("name").notNull(),
	slug: text("slug").notNull(),
	description: text("description"),
	sortOrder: integer("sort_order").default(0),
	isActive: boolean("is_active").default(true),
	productCount: integer("product_count").default(0),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => /* @__PURE__ */ new Date()).notNull()
});
/**
* Tags Relations
*/
var tagsRelations = relations(tags, ({ one }) => ({ shop: one(shops, {
	fields: [tags.shopId],
	references: [shops.id]
}) }));
/**
* Tax Rates Schema
*
* Database schema for tax rates in the multi-vendor marketplace.
* Tax rates are scoped to individual shops with regional support.
*/
/**
* Tax Rates Table
* Stores tax rates for shops with support for regional variations.
* Tax rates can be targeted by country, state, and ZIP code.
*/
var taxRates = pgTable("tax_rates", {
	id: text("id").primaryKey().default(sql`gen_random_uuid()`),
	shopId: text("shop_id").notNull().references(() => shops.id, { onDelete: "cascade" }),
	name: text("name").notNull(),
	rate: text("rate").notNull(),
	country: text("country").notNull(),
	state: text("state"),
	zip: text("zip"),
	priority: text("priority").default("1"),
	isActive: boolean("is_active").default(true),
	isCompound: boolean("is_compound").default(false),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => /* @__PURE__ */ new Date()).notNull()
});
/**
* Tax Rates Relations
*/
var taxRatesRelations = relations(taxRates, ({ one }) => ({ shop: one(shops, {
	fields: [taxRates.shopId],
	references: [shops.id]
}) }));
/**
* Products Schema
*
* Database schema for products in the multi-vendor marketplace.
* Products are scoped to individual shops with relations to categories, brands, tags, and attributes.
*/
var productStatusEnum = pgEnum("product_status", [
	"draft",
	"active",
	"archived"
]);
var productTypeEnum = pgEnum("product_type", ["simple", "variable"]);
var products = pgTable("products", {
	id: text("id").primaryKey().default(sql`gen_random_uuid()`),
	shopId: text("shop_id").notNull().references(() => shops.id, { onDelete: "cascade" }),
	name: text("name").notNull(),
	slug: text("slug").notNull(),
	sku: text("sku"),
	description: text("description"),
	shortDescription: text("short_description"),
	sellingPrice: numeric("selling_price", {
		precision: 10,
		scale: 2
	}).notNull(),
	regularPrice: numeric("regular_price", {
		precision: 10,
		scale: 2
	}),
	costPrice: numeric("cost_price", {
		precision: 10,
		scale: 2
	}),
	stock: integer("stock").default(0),
	lowStockThreshold: integer("low_stock_threshold").default(5),
	trackInventory: boolean("track_inventory").default(true),
	categoryId: text("category_id").references(() => categories.id, { onDelete: "set null" }),
	brandId: text("brand_id").references(() => brands.id, { onDelete: "set null" }),
	taxId: text("tax_id").references(() => taxRates.id, { onDelete: "set null" }),
	status: productStatusEnum("status").notNull().default("draft"),
	productType: productTypeEnum("product_type").notNull().default("simple"),
	isFeatured: boolean("is_featured").default(false),
	isActive: boolean("is_active").default(true),
	metaTitle: text("meta_title"),
	metaDescription: text("meta_description"),
	variationPrices: text("variation_prices"),
	averageRating: numeric("average_rating", {
		precision: 3,
		scale: 2
	}).default("0"),
	reviewCount: integer("review_count").default(0),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => /* @__PURE__ */ new Date()).notNull()
});
var productImages = pgTable("product_images", {
	id: text("id").primaryKey().default(sql`gen_random_uuid()`),
	productId: text("product_id").notNull().references(() => products.id, { onDelete: "cascade" }),
	url: text("url").notNull(),
	alt: text("alt"),
	sortOrder: integer("sort_order").default(0),
	isPrimary: boolean("is_primary").default(false),
	createdAt: timestamp("created_at").defaultNow().notNull()
});
/**
* Product Tags Junction Table
* Many-to-many relationship between products and tags.
*/
var productTags = pgTable("product_tags", {
	productId: text("product_id").notNull().references(() => products.id, { onDelete: "cascade" }),
	tagId: text("tag_id").notNull().references(() => tags.id, { onDelete: "cascade" })
}, (table) => [primaryKey({ columns: [table.productId, table.tagId] })]);
var productAttributes = pgTable("product_attributes", {
	productId: text("product_id").notNull().references(() => products.id, { onDelete: "cascade" }),
	attributeId: text("attribute_id").notNull().references(() => attributes.id, { onDelete: "cascade" }),
	value: text("value")
}, (t) => ({ pk: primaryKey({ columns: [t.productId, t.attributeId] }) }));
var productShippingMethods = pgTable("product_shipping_methods", {
	productId: text("product_id").notNull().references(() => products.id, { onDelete: "cascade" }),
	shippingMethodId: text("shipping_method_id").notNull().references(() => shippingMethods.id, { onDelete: "cascade" })
}, (t) => ({ pk: primaryKey({ columns: [t.productId, t.shippingMethodId] }) }));
var productsRelations = relations(products, ({ one, many }) => ({
	shop: one(shops, {
		fields: [products.shopId],
		references: [shops.id]
	}),
	category: one(categories, {
		fields: [products.categoryId],
		references: [categories.id]
	}),
	brand: one(brands, {
		fields: [products.brandId],
		references: [brands.id]
	}),
	tax: one(taxRates, {
		fields: [products.taxId],
		references: [taxRates.id]
	}),
	images: many(productImages),
	productTags: many(productTags),
	productAttributes: many(productAttributes),
	shippingMethods: many(productShippingMethods)
}));
/**
* Product Images Relations
*/
var productImagesRelations = relations(productImages, ({ one }) => ({ product: one(products, {
	fields: [productImages.productId],
	references: [products.id]
}) }));
/**
* Product Tags Relations
*/
var productTagsRelations = relations(productTags, ({ one }) => ({
	product: one(products, {
		fields: [productTags.productId],
		references: [products.id]
	}),
	tag: one(tags, {
		fields: [productTags.tagId],
		references: [tags.id]
	})
}));
/**
* Product Attributes Relations
*/
var productAttributesRelations = relations(productAttributes, ({ one }) => ({
	product: one(products, {
		fields: [productAttributes.productId],
		references: [products.id]
	}),
	attribute: one(attributes, {
		fields: [productAttributes.attributeId],
		references: [attributes.id]
	})
}));
var productShippingMethodsRelations = relations(productShippingMethods, ({ one }) => ({
	product: one(products, {
		fields: [productShippingMethods.productId],
		references: [products.id]
	}),
	shippingMethod: one(shippingMethods, {
		fields: [productShippingMethods.shippingMethodId],
		references: [shippingMethods.id]
	})
}));
//#endregion
export { taxRatesRelations as S, shippingMethods as _, brands as a, tagsRelations as b, productAttributesRelations as c, productShippingMethods as d, productShippingMethodsRelations as f, productsRelations as g, products as h, attributesRelations as i, productImages as l, productTagsRelations as m, attributeValuesRelations as n, categories as o, productTags as p, attributes as r, productAttributes as s, attributeValues as t, productImagesRelations as u, shippingMethodsRelations as v, taxRates as x, tags as y };
