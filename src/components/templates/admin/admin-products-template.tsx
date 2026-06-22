import type { DataTableServer } from "#/components/base/data-table/types";
import ProductHeader from "#/components/containers/vendor/products/product-header";
import ProductTable from "#/components/containers/vendor/products/product-table";
import type { ProductMutationState } from "#/components/containers/vendor/products/product-table-columns";
import type { ProductItem } from "#/types/products";

interface AdminProductsTemplateProps {
  server: DataTableServer<ProductItem>;
  onEdit?: (product: ProductItem) => void;
  onDelete?: (product: ProductItem) => void;
  mutationState?: ProductMutationState;
  isProductMutating?: (id: string) => boolean;
}

export default function AdminProductsTemplate({
  server,
  onEdit,
  onDelete,
  mutationState,
  isProductMutating,
}: AdminProductsTemplateProps) {
  return (
    <div className="space-y-6">
      <ProductHeader role="admin" showAddButton={false} />
      <ProductTable
        server={server}
        onEdit={onEdit}
        onDelete={onDelete}
        mutationState={mutationState}
        isMutating={isProductMutating}
        mode="vendor"
      />
    </div>
  );
}
