import OrderHeader from "#/components/containers/shared/orders/order-header";
import OrderTable from "#/components/containers/shared/orders/order-table";
import { ADMIN_ORDER_PERMISSIONS } from "#/lib/config/order-permissions";
import type { Order } from "#/types/orders";

interface AdminOrdersTemplateProps {
  orders: Order[];
  onAddOrder: (
    data: Omit<Order, "id" | "date" | "customer"> & {
      customerName: string;
      customerEmail: string;
    }
  ) => void;
  onDeleteOrder: (id: string) => void;
}

export default function AdminOrdersTemplate({
  orders,
  onAddOrder,
  onDeleteOrder,
}: AdminOrdersTemplateProps) {
  const handleUpdateStatus = (orderId: string, newStatus: string) => {
    console.log("Update status for order:", orderId, "to:", newStatus);
  };

  return (
    <div className="flex flex-col gap-6">
      <OrderHeader role="admin" onAddOrder={onAddOrder} />
      <OrderTable
        orders={orders}
        shopSlug="admin"
        permissions={ADMIN_ORDER_PERMISSIONS}
        onUpdateStatus={handleUpdateStatus}
        onDeleteOrder={onDeleteOrder}
      />
    </div>
  );
}
