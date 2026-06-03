import type { DataTableServer } from "#/components/base/data-table/types";
import ProductHeader from "#/components/containers/vendor/products/product-header";
import ProductTable from "#/components/containers/vendor/products/product-table";
import type { ProductMutationState } from "#/components/containers/vendor/products/product-table-columns";
import type { ProductItem } from "#/types/products";

type Props = {
  server: DataTableServer<ProductItem>;
  onAddProduct?: () => void;
  onEdit?: (product: ProductItem) => void;
  onDelete?: (product: ProductItem) => void;
  onToggleActive?: (id: string) => void;
  mutationState?: ProductMutationState;
  isProductMutating?: (id: string) => boolean;
  showAddButton?: boolean;
};

export function ShopProductsTemplate({
  server,
  onAddProduct,
  onEdit,
  onDelete,
  onToggleActive,
  mutationState,
  isProductMutating,
  showAddButton = true,
}: Props) {
  return (
    <div className="space-y-6">
      <ProductHeader
        onAdd={onAddProduct}
        role="vendor"
        showAddButton={showAddButton}
      />
      <ProductTable
        server={server}
        onEdit={onEdit}
        onDelete={onDelete}
        onToggleActive={
          onToggleActive ? (product) => onToggleActive(product.id) : undefined
        }
        mutationState={mutationState}
        isMutating={isProductMutating}
        mode="vendor"
      />
    </div>
  );
}

export default ShopProductsTemplate;
