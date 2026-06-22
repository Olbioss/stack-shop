import type { DataTableServer } from "#/components/base/data-table/types";
import { getAdminAttributes } from "#/lib/functions/admin/attribute";
import { getAdminBrands } from "#/lib/functions/admin/brand";
import { getAdminCategories } from "#/lib/functions/admin/category";
import { getAdminCoupons } from "#/lib/functions/admin/coupon";
import { getAdminOrders } from "#/lib/functions/admin/order";
import { getAdminProducts } from "#/lib/functions/admin/product";
import { getAdminShops } from "#/lib/functions/admin/shops";
import { getAdminTags } from "#/lib/functions/admin/tag";
import { getAdminTaxRates } from "#/lib/functions/admin/tax";
import { getAdminTransactions } from "#/lib/functions/admin/transaction";
import {
  booleanFilterTransform,
  createServerFetcher,
} from "#/lib/helper/create-server-fetcher";
import type { AttributeItem } from "#/types/attributes";
import type { BrandItem } from "#/types/brands";
import type { NormalizedCategory } from "#/types/category-types";
import type { CouponItem } from "#/types/coupons";
import type { VendorOrderResponse } from "#/types/orders";
import type { ProductItem } from "#/types/products";
import type { TagItem } from "#/types/tags";
import type { TaxRateItem } from "#/types/taxes";
import type { AdminTenant } from "#/types/tenant";
import type { AdminTransactionResponse } from "#/types/transaction";
import { adminAttributesKeys } from "./use-admin-attributes";
import { adminBrandsKeys } from "./use-admin-brands";
import { adminCategoriesKeys } from "./use-admin-categories";
import { adminCouponsKeys } from "./use-admin-coupons";
import { adminOrderKeys } from "./use-admin-orders";
import { adminProductsKeys } from "./use-admin-products";
import { adminShopsKeys } from "./use-admin-shops";
import { adminTagsKeys } from "./use-admin-tags";
import { adminTaxRatesKeys } from "./use-admin-taxes";
import { adminTransactionKeys } from "./use-admin-transactions";

export const ADMIN_STATUS_OPTIONS = [
  { label: "Active", value: "true" },
  { label: "Inactive", value: "false" },
];

export function createAdminCategoriesFetcher(): DataTableServer<NormalizedCategory> {
  return {
    fetcher: createServerFetcher<NormalizedCategory, any>({
      fetchFn: async (query) => {
        const response = await getAdminCategories({ data: query });
        return { data: response.data ?? [], total: response.total ?? 0 };
      },
      sortFieldMap: { name: "name", createdAt: "createdAt" },
      filterFieldMap: { isActive: "isActive", featured: "featured" },
      defaultQuery: { sortBy: "sortOrder", sortDirection: "asc" },
      transformFilters: booleanFilterTransform,
    }),
    queryKey: adminCategoriesKeys.lists(),
  };
}

export function createAdminBrandsFetcher(): DataTableServer<BrandItem> {
  return {
    fetcher: createServerFetcher<BrandItem, any>({
      fetchFn: async (query) => {
        const response = await getAdminBrands({ data: query });
        return { data: response.data ?? [], total: response.total ?? 0 };
      },
      sortFieldMap: { name: "name", createdAt: "createdAt" },
      filterFieldMap: { isActive: "isActive" },
      defaultQuery: { sortBy: "sortOrder", sortDirection: "asc" },
      transformFilters: booleanFilterTransform,
    }),
    queryKey: adminBrandsKeys.lists(),
  };
}

export function createAdminAttributesFetcher(): DataTableServer<AttributeItem> {
  return {
    fetcher: createServerFetcher<AttributeItem, any>({
      fetchFn: async (query) => {
        const response = await getAdminAttributes({ data: query });
        return { data: response.data ?? [], total: response.total ?? 0 };
      },
      sortFieldMap: { name: "name", createdAt: "createdAt" },
      filterFieldMap: { isActive: "isActive", type: "type" },
      defaultQuery: { sortBy: "sortOrder", sortDirection: "asc" },
      transformFilters: booleanFilterTransform,
    }),
    queryKey: adminAttributesKeys.lists(),
  };
}

export function createAdminCouponsFetcher(): DataTableServer<CouponItem> {
  return {
    fetcher: createServerFetcher<CouponItem, any>({
      fetchFn: async (query) => {
        const response = await getAdminCoupons({ data: query });
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
    queryKey: adminCouponsKeys.lists(),
  };
}

export function createAdminTenantsFetcher(): DataTableServer<AdminTenant> {
  return {
    fetcher: createServerFetcher<AdminTenant, any>({
      fetchFn: async (query) => {
        const response = await getAdminShops({ data: query });
        const data: AdminTenant[] = (response.data ?? []).map((shop) => ({
          id: shop.id,
          name: shop.name,
          slug: shop.slug,
          ownerName: shop.ownerName ?? "Unknown",
          ownerEmail: shop.ownerEmail ?? "Unknown",
          plan: "free",
          status: (shop.status ?? "pending") as AdminTenant["status"],
          joinedDate: shop.createdAt,
          productCount: shop.totalProducts ?? 0,
          orderCount: shop.totalOrders ?? 0,
        }));
        return { data, total: response.total ?? 0 };
      },
      sortFieldMap: {
        name: "name",
        joinedDate: "createdAt",
        productCount: "totalProducts",
        orderCount: "totalOrders",
      },
      filterFieldMap: { status: "status" },
      defaultQuery: { sortBy: "createdAt", sortDirection: "desc" },
    }),
    queryKey: adminShopsKeys.lists(),
  };
}

export function createAdminTagsFetcher(): DataTableServer<TagItem> {
  return {
    fetcher: createServerFetcher<TagItem, any>({
      fetchFn: async (query) => {
        const response = await getAdminTags({ data: query });
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
    queryKey: adminTagsKeys.lists(),
  };
}

export function createAdminTaxRatesFetcher(): DataTableServer<TaxRateItem> {
  return {
    fetcher: createServerFetcher<TaxRateItem, any>({
      fetchFn: async (query) => {
        const response = await getAdminTaxRates({ data: query });
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
    queryKey: adminTaxRatesKeys.lists(),
  };
}

export function createAdminOrdersFetcher(): DataTableServer<VendorOrderResponse> {
  return {
    fetcher: createServerFetcher<VendorOrderResponse, any>({
      fetchFn: async (query) => {
        const response = await getAdminOrders({ data: query });
        return {
          data: (response.orders ?? []) as unknown as VendorOrderResponse[],
          total: response.total ?? 0,
        };
      },
      sortFieldMap: {
        createdAt: "createdAt",
        orderNumber: "orderNumber",
        totalAmount: "totalAmount",
      },
      filterFieldMap: { status: "status", paymentStatus: "paymentStatus" },
      defaultQuery: { sortBy: "createdAt", sortDirection: "desc" },
    }),
    queryKey: adminOrderKeys.list(),
  };
}

export function createAdminTransactionsFetcher(): DataTableServer<AdminTransactionResponse> {
  return {
    fetcher: createServerFetcher<AdminTransactionResponse, any>({
      fetchFn: async (query) => {
        const response = await getAdminTransactions({ data: query });
        return {
          data: response.transactions ?? [],
          total: response.total ?? 0,
        };
      },
      sortFieldMap: {
        createdAt: "createdAt",
        amount: "amount",
      },
      filterFieldMap: { status: "status" },
      defaultQuery: { sortBy: "createdAt", sortDirection: "desc" },
    }),
    queryKey: adminTransactionKeys.list(),
  };
}

export function createAdminProductsFetcher(): DataTableServer<ProductItem> {
  return {
    fetcher: createServerFetcher<ProductItem, any>({
      fetchFn: async (query) => {
        const response = await getAdminProducts({ data: query });
        return { data: response.data ?? [], total: response.total ?? 0 };
      },
      sortFieldMap: {
        name: "name",
        sellingPrice: "sellingPrice",
        stock: "stock",
        createdAt: "createdAt",
        averageRating: "averageRating",
        reviewCount: "reviewCount",
      },
      filterFieldMap: {
        isActive: "isActive",
        status: "status",
        productType: "productType",
        categoryId: "categoryId",
        brandId: "brandId",
        isFeatured: "isFeatured",
        inStock: "inStock",
      },
      defaultQuery: { sortBy: "createdAt", sortDirection: "desc" },
      transformFilters: booleanFilterTransform,
    }),
    queryKey: adminProductsKeys.lists(),
  };
}
