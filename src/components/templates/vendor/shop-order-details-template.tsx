import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import OrderActions from "#/components/containers/vendor/order-details/order-actions";
import OrderItemsList from "#/components/containers/vendor/order-details/order-items-list";
import OrderSummary from "#/components/containers/vendor/order-details/order-summary";
import OrderTimeline from "#/components/containers/vendor/order-details/order-timeline";
import type { OrderItemResponse, OrderStatus } from "#/types/orders";
import { Button } from "@/components/ui/button";

type VendorOrderDetailResponse = {
  id: string;
  orderNumber: string;
  status: OrderStatus;
  paymentStatus: string;
  fulfillmentStatus: string;
  subtotal: number;
  taxAmount: number;
  shippingAmount: number;
  discountAmount: number;
  totalAmount: number;
  shippingMethod: string | null;
  shippingAddress: unknown;
  billingAddress: unknown;
  customerNotes: string | null;
  internalNotes: string | null;
  couponCode: string | null;
  shopId: string;
  shopName: string;
  customer: {
    id?: string;
    name?: string | null;
    email: string | null;
  };
  items: OrderItemResponse[];
  payments: {
    id: string;
    method: string;
    provider: string;
    amount: number;
    status: string;
    createdAt: string;
  }[];
  createdAt: string;
  updatedAt: string;
};

type Props = {
  shopSlug?: string;
  order: VendorOrderDetailResponse;
  mode?: "vendor" | "admin";
  backLink?: {
    to: string;
    params?: Record<string, string>;
    label?: string;
  };
};

export default function ShopOrderDetailsTemplate({
  shopSlug,
  order,
  mode = "vendor",
  backLink,
}: Props) {
  // Transform order items for display
  const items = order.items.map((item) => ({
    id: item.id,
    name: item.productName,
    price: item.unitPrice,
    quantity: item.quantity,
    image: item.productImage ?? "/placeholder.png",
    sku: item.productSku ?? "N/A",
  }));

  // Transform customer for display
  const customer = {
    name: order.customer.name ?? order.customer.email ?? "Guest",
    email: order.customer.email ?? "No email",
    phone: (order.shippingAddress as { phone?: string })?.phone ?? "N/A",
  };

  // Transform timeline stages from order status
  const stages = [
    {
      id: "1",
      label: "Order Placed",
      date: order.createdAt,
      status:
        order.status === "pending"
          ? ("completed" as const)
          : ("completed" as const),
    },
    {
      id: "2",
      label: "Processing",
      date:
        order.status === "processing" ||
        order.status === "shipped" ||
        order.status === "delivered"
          ? order.updatedAt
          : undefined,
      status:
        order.status === "processing" ||
        order.status === "shipped" ||
        order.status === "delivered"
          ? ("active" as const)
          : ("pending" as const),
    },
    {
      id: "3",
      label: "Shipped",
      date:
        order.status === "shipped" || order.status === "delivered"
          ? order.updatedAt
          : undefined,
      status:
        order.status === "shipped" || order.status === "delivered"
          ? ("active" as const)
          : ("pending" as const),
    },
    {
      id: "4",
      label: "Delivered",
      date: order.status === "delivered" ? order.updatedAt : undefined,
      status:
        order.status === "delivered"
          ? ("completed" as const)
          : ("pending" as const),
    },
  ];

  // Get payment method from payments if available
  const paymentMethod =
    order.payments?.[0]?.method ?? order.shippingMethod ?? "N/A";

  const resolvedBackLink = backLink ?? {
    to: "/shop/$slug/orders",
    params: { slug: shopSlug ?? "" },
    label: "Back to Orders",
  };

  // 4:20
  // claude --resume bed7ec17-2589-4202-b88b-59dca55fa760

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" asChild>
          <Link to={resolvedBackLink.to} params={resolvedBackLink.params}>
            <ArrowLeft className="mr-2 size-4" />
            {resolvedBackLink.label ?? "Back to Orders"}
          </Link>
        </Button>
        <h1 className="font-bold text-2xl tracking-tight">
          Order #{order.orderNumber}
        </h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <OrderTimeline stages={stages} />
          <OrderItemsList items={items} />
        </div>
        <div className="space-y-6">
          <OrderActions
            orderId={order.id}
            currentStatus={order.status}
            paymentStatus={order.paymentStatus}
            mode={mode}
          />
          <OrderSummary
            orderId={order.orderNumber}
            orderDate={new Date(order.createdAt).toLocaleDateString()}
            customer={customer}
            paymentMethod={paymentMethod}
            paymentStatus={
              order.paymentStatus as "paid" | "unpaid" | "refunded"
            }
            subtotal={order.subtotal}
            shipping={order.shippingAmount}
            tax={order.taxAmount}
            total={order.totalAmount}
          />
        </div>
      </div>
    </div>
  );
}
