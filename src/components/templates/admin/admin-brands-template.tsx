import type { DataTableServer } from "#/components/base/data-table/types";
import AdminBrandsTable from "#/components/containers/admin/brands/admin-brands-table";
import BrandHeader from "#/components/containers/shared/brands/brand-header";
import type { AdminBrandMutationState } from "#/hooks/admin/use-admin-brands";
import type { BrandItem } from "@/types/brands";

interface AdminBrandsTemplateProps {
  server: DataTableServer<BrandItem>;
  onEditBrand?: (brand: BrandItem) => void;
  onDeleteBrand?: (brand: BrandItem) => void;
  onToggleActive?: (brand: BrandItem) => void;
  mutationState?: AdminBrandMutationState;
  isBrandMutating?: (id: string) => boolean;
}

export default function AdminBrandsTemplate({
  server,
  onEditBrand,
  onDeleteBrand,
  onToggleActive,
  mutationState,
  isBrandMutating,
}: AdminBrandsTemplateProps) {
  return (
    <div className="space-y-6">
      <BrandHeader role="admin" />
      <AdminBrandsTable
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
