import type { DataTableServer } from "#/components/base/data-table/types";
import { AdminCategoryTable } from "#/components/containers/shared/categories/category-table";
import type { AdminCategoryMutationState } from "#/hooks/admin/use-admin-categories";
import CategoryHeader from "@/components/containers/shared/categories/category-header";
import type { NormalizedCategory } from "@/types/category-types";

interface AdminCategoriesTemplateProps {
  server: DataTableServer<NormalizedCategory>;
  onEditCategory?: (category: NormalizedCategory) => void;
  onDeleteCategory?: (category: NormalizedCategory) => void;
  onToggleActive?: (category: NormalizedCategory) => void;
  onToggleFeatured?: (category: NormalizedCategory) => void;
  mutationState?: AdminCategoryMutationState;
  isCategoryMutating?: (id: string) => boolean;
}

export default function AdminCategoriesTemplate({
  server,
  onEditCategory,
  onDeleteCategory,
  onToggleActive,
  onToggleFeatured,
  mutationState,
  isCategoryMutating,
}: AdminCategoriesTemplateProps) {
  return (
    <div className="space-y-6">
      <CategoryHeader role="admin" />
      <AdminCategoryTable
        server={server}
        onEdit={onEditCategory}
        onDelete={onDeleteCategory}
        onToggleActive={onToggleActive}
        onToggleFeatured={onToggleFeatured}
        mutationState={mutationState}
        isCategoryMutating={isCategoryMutating}
      />
    </div>
  );
}
