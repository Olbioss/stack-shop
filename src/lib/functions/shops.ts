import { createServerFn } from "@tanstack/react-start";
import { eq } from "drizzle-orm";
import { db } from "../db";
import { type Shop, shops, vendors } from "../db/schema/shop-schema";
import { getVendorForUser, isUserAdmin } from "../helper/vendors";
import { authMiddleware } from "../middleware/auth";
import { generateSlug } from "../utils/slug";
import {
  createShopSchema,
  deleteShopSchema,
  getShopBySlugSchema,
  updateShopSchema,
} from "../validators/shop";

// TODO: Implement caching for shop stats to avoid expensive queries on every request
async function getShopStates(shopIds: string[]) {
  if (shopIds.length === 0) return new Map();

  //   const productCountMap = await getProductCount(shopIds);
}

// ============================================================================
// Get All Shops for Current Vendor (or All Shops for Admin)
// ============================================================================
export const getVendorShops = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    const userId = context.session.user.id;
    const vendor = await getVendorForUser(userId);
    const isAdmin = await isUserAdmin(userId);

    let allShops: Shop[] = [];

    if (isAdmin) {
      allShops = await db.query.shops.findMany({
        orderBy: (shops, { desc }) => desc(shops.createdAt),
      });
    } else {
      if (!vendor) {
        throw new Error(
          "Vendor profile not found. Please complete vendor registration."
        );
      }

      allShops = await db.query.shops.findMany({
        where: (shops, { eq }) => eq(shops.vendorId, vendor.id),
        orderBy: (shops, { desc }) => desc(shops.createdAt),
      });
    }
    const shopIds = allShops.map((shop) => shop.id);
    const stateMap = await getShopStates(shopIds);

    const shopsWithStats = allShops.map((shop) => {
      const stats = stateMap?.get(shop.id) || {
        productCount: 0,
        orderCount: 0,
        totalRevenue: 0,
      };

      return {
        ...shop,
        totalProducts: stats.productCount,
        totalOrders: stats.orderCount,
        totalRevenue: stats.totalRevenue,
      };
    });

    return {
      shops: shopsWithStats,
      vendorId: vendor?.id || null,
      isAdmin,
    };
  });

// ============================================================================
// Get Shop by Slug
// ============================================================================
export const getShopBySlug = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .inputValidator(getShopBySlugSchema)
  .handler(async ({ data, context }) => {
    const userId = context.session.user.id;
    const { slug } = data;
    const isAdmin = await isUserAdmin(userId);

    if (isAdmin) {
      const shop = await db.query.shops.findFirst({
        where: (shops, { eq }) => eq(shops.slug, slug),
      });
      if (!shop) throw new Error("Shop not found");
      return { shop, isAdmin: true };
    }
    const vendor = await getVendorForUser(userId);
    if (!vendor) throw new Error("Vendor profile not found.");

    const shop = await db.query.shops.findFirst({
      where: (shops, { and, eq }) =>
        and(eq(shops.slug, slug), eq(shops.vendorId, vendor.id)),
    });
    if (!shop) throw new Error("Shop not found or you do not have access.");

    return { shop, isAdmin: false };
  });

export const createShop = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .inputValidator(createShopSchema)
  .handler(async ({ data, context }) => {
    const userId = context.session.user.id;
    // Get vendor for current user
    let vendor = await getVendorForUser(userId);

    // If no vendor profile and user is admin, create one automatically
    if (!vendor) {
      const isAdmin = await isUserAdmin(userId);
      if (isAdmin) {
        await db.insert(vendors).values({
          userId,
          businessName: "Admin Vendor Profile",
          status: "active", // Auto-approve admin
          contactEmail: context.session.user.email,
        });
        // Fetch the newly created vendor
        vendor = await getVendorForUser(userId);
      }
    }
    if (!vendor)
      throw new Error(
        "Vendor profile not found. Please complete vendor registration."
      );
    // Check if vendor is approved before allowing shop creation
    if (vendor.status !== "active" && vendor.status !== "pending_approval")
      throw new Error("Your vendor account is not active.");

    // Generate or validate slug
    let slug = data.slug;
    if (!slug) slug = generateSlug(data.name);

    // Ensure slug is unique
    const existingShop = await db.query.shops.findFirst({
      where: (shops, { eq }) => eq(shops.slug, slug),
    });
    if (existingShop)
      throw new Error("Slug already in use. Please choose another.");

    // Create the shop
    const [newShop] = await db
      .insert(shops)
      .values({
        vendorId: vendor.id,
        name: data.name,
        slug,
        description: data.description || null,
        logo: data.logo || null,
        banner: data.banner || null,
        category: data.category || null,
        address: data.address || null,
        phone: data.phone || null,
        email: data.email || null,
        enableNotifications: data.enableNotifications ?? false,
        status: "pending",
      })
      .returning();

    return {
      success: true,
      shop: newShop,
    };
  });

// ============================================================================
// Update Shop
// ============================================================================
export const updateShop = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .inputValidator(updateShopSchema)
  .handler(async ({ data, context }) => {
    const userId = context.session.user.id;
    const { id: shopId, ...updateData } = data;

    const vendor = await getVendorForUser(userId);
    if (!vendor) throw new Error("Vendor profile not found.");

    const existingShop = await db.query.shops.findFirst({
      where: (shops, { and, eq }) =>
        and(eq(shops.id, shopId), eq(shops.vendorId, vendor.id)),
    });
    if (!existingShop)
      throw new Error("Shop not found or you do not have access to it.");

    // Check for duplicate slug if slug is being updated
    if (updateData.slug && updateData.slug !== existingShop.slug) {
      const slugExists = await db.query.shops.findFirst({
        where: eq(shops.slug, updateData.slug),
      });
      if (slugExists) throw new Error("A shop with this slug already exists.");
    }
    // Build update object (only include defined values)
    const updateValues: Record<string, any> = {};
    if (updateData.name !== undefined) updateValues.name = updateData.name;
    if (updateData.slug !== undefined) updateValues.slug = updateData.slug;
    if (updateData.description !== undefined)
      updateValues.description = updateData.description;
    if (updateData.logo !== undefined) updateValues.logo = updateData.logo;
    if (updateData.banner !== undefined)
      updateValues.banner = updateData.banner;
    if (updateData.category !== undefined)
      updateValues.category = updateData.category;
    if (updateData.address !== undefined)
      updateValues.address = updateData.address;
    if (updateData.phone !== undefined) updateValues.phone = updateData.phone;
    if (updateData.email !== undefined) updateValues.email = updateData.email;
    if (updateData.enableNotifications !== undefined)
      updateValues.enableNotifications = updateData.enableNotifications;
    if (updateData.status !== undefined)
      updateValues.status = updateData.status;

    // Update the shop
    await db.update(shops).set(updateValues).where(eq(shops.id, shopId));
    // Fetch updated shop
    const updatedShop = await db.query.shops.findFirst({
      where: (shops, { eq }) => eq(shops.id, shopId),
    });

    return {
      success: true,
      shop: updatedShop,
    };
  });

// ============================================================================
// Delete Shop
// ============================================================================
export const deleteShop = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .inputValidator(deleteShopSchema)
  .handler(async ({ data, context }) => {
    const userId = context.session.user.id;
    const { id: shopId } = data;

    const vendor = await getVendorForUser(userId);
    if (!vendor) throw new Error("Vendor profile not found.");

    // Ensure the shop belongs to the vendor
    const existingShop = await db.query.shops.findFirst({
      where: (shops, { and, eq }) =>
        and(eq(shops.id, shopId), eq(shops.vendorId, vendor.id)),
    });
    if (!existingShop)
      throw new Error("Shop not found or you do not have access to it.");

    // Delete the shop
    await db.delete(shops).where(eq(shops.id, shopId));

    return {
      success: true,
      message: "Shop deleted successfully.",
    };
  });
