import { useQuery } from "@tanstack/react-query";
import { getCustomerOrders } from "#/lib/functions/store/order";
import type { OrderStatus } from "#/types/orders";

export const customerOrderKeys = {
  all: ["customer-orders"] as const,
  list: (params?: { limit?: number; offset?: number; status?: OrderStatus }) =>
    [...customerOrderKeys.all, "list", params] as const,
};

export function useCustomerOrders(params?: {
  limit?: number;
  offset?: number;
  status?: OrderStatus;
}) {
  return useQuery({
    queryKey: customerOrderKeys.list(params),
    queryFn: async () => {
      const result = await getCustomerOrders({
        data: {
          limit: params?.limit ?? 50,
          offset: params?.offset ?? 0,
          status: params?.status,
        },
      });
      return result;
    },
  });
}
