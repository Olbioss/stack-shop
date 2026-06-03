import {
  queryOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";
import type { Shop } from "#/lib/db/schema/shop-schema";
import {
  createShop,
  deleteShop,
  getShopBySlug,
  getVendorShops,
  updateShop,
} from "#/lib/functions/shops";
import type { CreateShopInput, UpdateShopInput } from "#/lib/validators/shop";

type ShopWithStats = Shop & {
  totalProducts: number;
  totalOrders: number;
  totalRevenue: number;
};

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const formatShop = (shop: ShopWithStats) => ({
  id: shop.id,
  vendorId: shop.vendorId,
  slug: shop.slug,
  name: shop.name,
  description: shop.description,
  logo: shop.logo,
  banner: shop.banner,
  category: shop.category,
  address: shop.address,
  phone: shop.phone,
  email: shop.email,
  enableNotifications: shop.enableNotifications ?? false,
  monthlyRevenue: currencyFormatter.format(shop.totalRevenue || 0),
  status: (shop.status === "active" ? "active" : "pending") as
    | "active"
    | "pending",
  rating: shop.rating ?? "0.0",
  totalProducts: shop.totalProducts,
  totalOrders: shop.totalOrders,
  createdAt: shop.createdAt,
  updatedAt: shop.updatedAt,
});

export type FormattedShop = ReturnType<typeof formatShop>;

export const vendorShopsQueryOptions = (options?: {
  filterByVendor?: boolean;
}) =>
  queryOptions({
    queryKey: ["vendor", "shops"],
    queryFn: () => getVendorShops(),
    select: options
      ? (data) => {
          const list = options.filterByVendor
            ? data.vendorId
              ? data.shops.filter((s) => s.vendorId === data.vendorId)
              : []
            : data.shops;
          return {
            vendorId: data.vendorId,
            isAdmin: data.isAdmin,
            shops: list.map(formatShop),
          };
        }
      : undefined,
  });

export const shopBySlugQueryOptions = (slug: string) =>
  queryOptions({
    queryKey: ["vendor", "shops", slug],
    queryFn: () => getShopBySlug({ data: { slug } }),
    enabled: !!slug,
  });

export const useShopMutations = () => {
  const queryClient = useQueryClient();

  const invalidateShops = () =>
    queryClient.invalidateQueries({ queryKey: ["vendor", "shops"] });

  const createShopMutation = useMutation({
    mutationFn: async (data: CreateShopInput) => {
      const result = await createShop({ data });
      return result;
    },
    onSuccess: (result) => {
      toast.success(`Shop "${result.shop?.name}" created successfully!`);
      invalidateShops();
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to create shop");
    },
  });

  const updateShopMutation = useMutation({
    mutationFn: async (data: UpdateShopInput) => {
      const result = await updateShop({ data });
      return result;
    },
    onSuccess: (result) => {
      toast.success(`Shop "${result.shop?.name}" updated successfully!`);
      invalidateShops();
      if (result.shop?.slug) {
        queryClient.invalidateQueries({
          queryKey: ["vendor", "shops", result.shop.slug],
        });
      }
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to update shop");
    },
  });

  const deleteShopMutation = useMutation({
    mutationFn: async (shopId: string) => {
      const result = await deleteShop({ data: { id: shopId } });
      return result;
    },
    onSuccess: () => {
      toast.success("Shop deleted successfully");
      invalidateShops();
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to delete shop");
    },
  });

  return {
    createShop: createShopMutation.mutateAsync,
    updateShop: updateShopMutation.mutateAsync,
    deleteShop: deleteShopMutation.mutateAsync,
    isCreating: createShopMutation.isPending,
    isUpdating: updateShopMutation.isPending,
    isDeleting: deleteShopMutation.isPending,
  };
};

export const useShops = () => {
  const mutations = useShopMutations();
  return {
    shopsQueryOptions: vendorShopsQueryOptions,
    shopBySlugQueryOptions,
    ...mutations,
  };
};
