import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import AdminProductsTemplate from "#/components/templates/admin/admin-products-template";
import { mockProducts, type Product } from "#/data/products";

export const Route = createFileRoute("/(admin)/admin/products")({
  component: RouteComponent,
});

function RouteComponent() {
  const [products] = useState<Product[]>(mockProducts);

  return <AdminProductsTemplate products={products} />;
}
