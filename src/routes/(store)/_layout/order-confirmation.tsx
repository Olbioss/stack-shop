import { createFileRoute } from "@tanstack/react-router";
import z from "zod";
import OrderConfirmationTemplate from "#/components/templates/store/order/order-confirmation-template";

const searchSchema = z.object({
  orderIds: z
    .union([z.string(), z.array(z.string())])
    .transform((value) => (Array.isArray(value) ? value : [value]))
    .optional(),
  paymentIntentId: z.string().optional(),
});
export const Route = createFileRoute("/(store)/_layout/order-confirmation")({
  validateSearch: (search) => searchSchema.parse(search),
  component: RootComponent,
});

function RootComponent() {
  const { orderIds, paymentIntentId } = Route.useSearch();
  return (
    <OrderConfirmationTemplate
      orderIds={orderIds}
      paymentIntentId={paymentIntentId}
    />
  );
}
