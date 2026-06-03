import type { DataTableServer } from "#/components/base/data-table/types";
import { vendorProductsKeys } from "#/hooks/vendor/use-products";
import { getAttributes } from "#/lib/functions/vendor/attributes";
import { getBrands } from "#/lib/functions/vendor/brands";
import { getCoupons } from "#/lib/functions/vendor/coupons";
import { getVendorOrders } from "#/lib/functions/vendor/order";
import { getProducts } from "#/lib/functions/vendor/products";
import { getShippingMethods } from "#/lib/functions/vendor/shipping";
import { getTags } from "#/lib/functions/vendor/tag";
import { getTaxRates } from "#/lib/functions/vendor/tax";
import {
  booleanFilterTransform,
  createServerFetcher,
} from "#/lib/helper/create-server-fetcher";
import type { AttributeItem } from "#/types/attributes";
import type { BrandItem } from "#/types/brands";
import type { CouponItem } from "#/types/coupons";
import type { VendorOrderResponse } from "#/types/orders";
import type { ProductItem } from "#/types/products";
import type { ShippingMethodItem } from "#/types/shipping";
import type { TagItem } from "#/types/tags";
import type { TaxRateItem } from "#/types/taxes";
import { getCategories } from "@/lib/functions/vendor/categories";
import type { NormalizedCategory } from "@/types/category-types";
import { vendorShippingKeys } from "../common/use-shipping";
import { vendorAttributesKeys } from "./use-attributes";
import { vendorBrandsKeys } from "./use-brands";
import { vendorCouponsKeys } from "./use-coupons";
import { vendorTagsKeys } from "./use-tags";
import { vendorTaxRatesKeys } from "./use-tax-rates";
import { vendorOrderKeys } from "./use-vendor-orders";

export const VENDOR_STATUS_OPTIONS = [
  { label: "Active", value: "true" },
  { label: "Inactive", value: "false" },
];

export function createVendorCategoriesFetcher(
  shopId: string
): DataTableServer<NormalizedCategory> {
  return {
    fetcher: createServerFetcher<NormalizedCategory, any>({
      fetchFn: async (query) => {
        const response = await getCategories({ data: { ...query, shopId } });
        return { data: response.data ?? [], total: response.total ?? 0 };
      },
      sortFieldMap: { name: "name", level: "level", createdAt: "createdAt" },
      filterFieldMap: { isActive: "isActive", featured: "featured" },
      defaultQuery: { sortBy: "sortOrder", sortDirection: "asc" },
      transformFilters: booleanFilterTransform,
    }),
    queryKey: ["vendor", "categories", shopId],
  };
}

export function createVendorBrandsFetcher(
  shopId: string
): DataTableServer<BrandItem> {
  return {
    fetcher: createServerFetcher<BrandItem, any>({
      fetchFn: async (query) => {
        const response = await getBrands({ data: { ...query, shopId } });
        return { data: response.data ?? [], total: response.total ?? 0 };
      },
      sortFieldMap: { name: "name", createdAt: "createdAt" },
      filterFieldMap: { isActive: "isActive" },
      defaultQuery: { sortBy: "sortOrder", sortDirection: "asc" },
      transformFilters: booleanFilterTransform,
    }),
    queryKey: vendorBrandsKeys.lists(shopId),
  };
}

export function createVendorAttributesFetcher(
  shopId: string
): DataTableServer<AttributeItem> {
  return {
    fetcher: createServerFetcher<AttributeItem, any>({
      fetchFn: async (query) => {
        const response = await getAttributes({ data: { ...query, shopId } });
        return { data: response.data ?? [], total: response.total ?? 0 };
      },
      sortFieldMap: { name: "name", createdAt: "createdAt" },
      filterFieldMap: { isActive: "isActive", type: "type" },
      defaultQuery: { sortBy: "sortOrder", sortDirection: "asc" },
      transformFilters: booleanFilterTransform,
    }),
    queryKey: vendorAttributesKeys.lists(shopId),
  };
}

export function createVendorTagsFetcher(
  shopId: string
): DataTableServer<TagItem> {
  return {
    fetcher: createServerFetcher<TagItem, any>({
      fetchFn: async (query) => {
        const response = await getTags({ data: { ...query, shopId } });
        return { data: response.data ?? [], total: response.total ?? 0 };
      },
      sortFieldMap: {
        name: "name",
        createdAt: "createdAt",
        productCount: "productCount",
      },
      filterFieldMap: { isActive: "isActive" },
      defaultQuery: { sortBy: "sortOrder", sortDirection: "asc" },
      transformFilters: booleanFilterTransform,
    }),
    queryKey: vendorTagsKeys.lists(shopId),
  };
}

export function createVendorTaxRatesFetcher(
  shopId: string
): DataTableServer<TaxRateItem> {
  return {
    fetcher: createServerFetcher<TaxRateItem, any>({
      fetchFn: async (query) => {
        const response = await getTaxRates({ data: { ...query, shopId } });
        return { data: response.data ?? [], total: response.total ?? 0 };
      },
      sortFieldMap: {
        name: "name",
        rate: "rate",
        priority: "priority",
        createdAt: "createdAt",
      },
      filterFieldMap: { isActive: "isActive", country: "country" },
      defaultQuery: { sortBy: "priority", sortDirection: "asc" },
      transformFilters: booleanFilterTransform,
    }),
    queryKey: vendorTaxRatesKeys.lists(shopId),
  };
}

export function createVendorCouponsFetcher(
  shopId: string
): DataTableServer<CouponItem> {
  return {
    fetcher: createServerFetcher<CouponItem, any>({
      fetchFn: async (query) => {
        const response = await getCoupons({ data: { ...query, shopId } });
        return { data: response.data ?? [], total: response.total ?? 0 };
      },
      sortFieldMap: {
        code: "code",
        discountAmount: "discountAmount",
        usageCount: "usageCount",
        activeFrom: "activeFrom",
        activeTo: "activeTo",
        createdAt: "createdAt",
      },
      filterFieldMap: {
        isActive: "isActive",
        type: "type",
        status: "status",
        applicableTo: "applicableTo",
      },
      defaultQuery: { sortBy: "createdAt", sortDirection: "desc" },
      transformFilters: booleanFilterTransform,
    }),
    queryKey: vendorCouponsKeys.lists(shopId),
  };
}

export function createVendorProductsFetcher(
  shopId: string
): DataTableServer<ProductItem> {
  return {
    fetcher: createServerFetcher<ProductItem, any>({
      fetchFn: async (query) => {
        const response = await getProducts({ data: { ...query, shopId } });
        return { data: response.data ?? [], total: response.total ?? 0 };
      },
      sortFieldMap: {
        name: "name",
        sellingPrice: "sellingPrice",
        stock: "stock",
        createdAt: "createdAt",
      },
      filterFieldMap: {
        isActive: "isActive",
        status: "status",
        categoryId: "categoryId",
        brandId: "brandId",
      },
      defaultQuery: { sortBy: "createdAt", sortDirection: "desc" },
      transformFilters: booleanFilterTransform,
    }),
    // Must share a prefix with vendorProductsKeys.lists() so the invalidation
    // in useProductMutations refreshes this table.
    queryKey: [...vendorProductsKeys.lists(), shopId],
  };
}

export function createVendorShippingFetcher(
  shopId: string
): DataTableServer<ShippingMethodItem> {
  return {
    fetcher: createServerFetcher<ShippingMethodItem, any>({
      fetchFn: async (query) => {
        const response = await getShippingMethods({
          data: { ...query, shopId },
        });
        return { data: response.data ?? [], total: response.total ?? 0 };
      },
      sortFieldMap: { name: "name", price: "price", createdAt: "createdAt" },
      filterFieldMap: { isActive: "isActive" },
      defaultQuery: { sortBy: "createdAt", sortDirection: "desc" },
      transformFilters: booleanFilterTransform,
    }),
    queryKey: vendorShippingKeys.lists(shopId),
  };
}

// ============================================================================
// Orders Fetcher
// ============================================================================
export function createVendorOrdersFetcher(
  shopSlug: string
): DataTableServer<VendorOrderResponse> {
  return {
    fetcher: createServerFetcher<VendorOrderResponse, any>({
      fetchFn: async (query) => {
        const response = await getVendorOrders({
          data: { ...query, shopSlug },
        });
        return { data: response.orders ?? [], total: response.total ?? 0 };
      },
      // Server hardcodes orderBy(desc(createdAt)); sortFieldMap is a no-op today.
      sortFieldMap: { createdAt: "createdAt", orderNumber: "orderNumber" },
      filterFieldMap: { status: "status" },
      defaultQuery: { sortBy: "createdAt", sortDirection: "desc" },
    }),
    queryKey: vendorOrderKeys.list({ shopSlug }),
  };
}
