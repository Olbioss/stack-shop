import type { DataTableServer } from "#/components/base/data-table/types";
import type { VendorBrandMutationState } from "#/hooks/vendor/use-brands";
import type { NormalizedCategory } from "#/types/category-types";
import { VendorCategoryTable } from "@/components/containers/shared/categories/category-table";
import CategoryHeader from "@/components/containers/vendor/categories/category-header";

interface ShopCategoriesTemplateProps {
  server: DataTableServer<NormalizedCategory>;
  onAddCategory: () => void;
  onEditCategory: (category: NormalizedCategory) => void;
  onDeleteCategory: (category: NormalizedCategory) => void;
  mutationState?: VendorBrandMutationState;
  isCategoryMutating?: (id: string) => boolean;
}

export default function ShopCategoriesTemplate({
  server,
  onAddCategory,
  onEditCategory,
  onDeleteCategory,
  mutationState,
  isCategoryMutating,
}: ShopCategoriesTemplateProps) {
  return (
    <div className="space-y-6">
      <CategoryHeader onAddCategory={onAddCategory} />
      <VendorCategoryTable
        server={server}
        onEdit={onEditCategory}
        onDelete={onDeleteCategory}
        mutationState={mutationState}
        isCategoryMutating={isCategoryMutating}
      />
    </div>
  );
}
