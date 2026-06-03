import type { DataTableServer } from "#/components/base/data-table/types";
import BrandHeader from "#/components/containers/shared/brands/brand-header";
import { VendorBrandTable } from "#/components/containers/shared/brands/brand-table";
import type { VendorBrandMutationState } from "#/hooks/vendor/use-brands";
import type { BrandItem } from "#/types/brands";

type ShopBrandsTemplateProps = {
  server: DataTableServer<BrandItem>;
  onAddBrand: () => void;
  onEditBrand?: (brand: BrandItem) => void;
  onDeleteBrand?: (brand: BrandItem) => void;
  onToggleActive?: (brand: BrandItem) => void;
  mutationState?: VendorBrandMutationState;
  isBrandMutating?: (id: string) => boolean;
};

export default function ShopBrandsTemplate({
  server,
  onAddBrand,
  onEditBrand,
  onDeleteBrand,
  onToggleActive,
  mutationState,
  isBrandMutating,
}: ShopBrandsTemplateProps) {
  return (
    <div className="space-y-6">
      <BrandHeader onAdd={onAddBrand} />
      <VendorBrandTable
        server={server}
        onEdit={onEditBrand}
        onDelete={onDeleteBrand}
        onToggleActive={onToggleActive}
        mutationState={mutationState}
        isBrandMutating={isBrandMutating}
      />
    </div>
  );
}
