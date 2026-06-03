import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { ConfirmDeleteDialog } from "#/components/base/common/confirm-delete-dialog";
import { PageSkeleton } from "#/components/base/common/page-skeleton";
import { AddCategoryDialog } from "#/components/containers/shared/categories/add-category-dialog";
import ShopCategoriesTemplate from "#/components/templates/vendor/shop-categories-template";
import { useEntityCRUD } from "#/hooks/common/use-entity-crud";
import { useCategories } from "#/hooks/vendor/use-category";
import { shopBySlugQueryOptions } from "#/hooks/vendor/use-shops";
import { createVendorCategoriesFetcher } from "#/hooks/vendor/use-vendor-entity-fetcher";
import type {
  CategoryFormValues,
  NormalizedCategory,
} from "#/types/category-types";

export const Route = createFileRoute("/(vendor)/shop/$slug/categories")({
  component: RouteComponent,
  pendingComponent: PageSkeleton,
});

function RouteComponent() {
  const { slug } = Route.useParams();
  const { data: shopData } = useSuspenseQuery(shopBySlugQueryOptions(slug));
  const shopId = shopData?.shop.id ?? "";

  const server = useMemo(
    () => createVendorCategoriesFetcher(shopId),
    [shopId]
  );

  const {
    categoriesQueryOptions: categoriesOptions,
    createCategory,
    updateCategory,
    deleteCategory,
    mutationState,
    isCategoryMutating,
  } = useCategories(shopId);

  const { data: categoriesData } = useSuspenseQuery(
    categoriesOptions({
      limit: 100,
      offset: 0,
      sortBy: "sortOrder",
      sortDirection: "asc",
    })
  );

  const {
    isDialogOpen,
    setIsDialogOpen,
    editingItem: editingCategory,
    deletingItem: deletingCategory,
    setDeletingItem: setDeletingCategory,
    handleAdd: handleAddCategory,
    handleEdit: handleEditCategory,
    handleDelete: handleDeleteCategory,
    confirmDelete,
    handleDialogClose,
  } = useEntityCRUD<NormalizedCategory>({
    onDelete: async (id) => {
      await deleteCategory(id);
    },
  });

  const categoryOptions = (categoriesData?.data ?? []).map((c) => ({
    id: c.id,
    name: c.name,
  }));

  const handleCategorySubmit = async (data: CategoryFormValues) => {
    try {
      if (editingCategory) {
        await updateCategory({
          id: editingCategory.id,
          name: data.name,
          slug: data.slug,
          description: data.description || undefined,
          icon: data.icon || undefined,
          parentId: data.parentId === "none" ? undefined : data.parentId,
          image: data.image || undefined,
        });
      } else {
        await createCategory({
          name: data.name,
          slug: data.slug,
          description: data.description || undefined,
          icon: data.icon || undefined,
          parentId: data.parentId === "none" ? undefined : data.parentId,
          sortOrder: 0,
          isActive: true,
          featured: false,
          image: data.image || undefined,
        });
      }
      handleDialogClose();
    } catch (error) {
      // Error is handled by the mutation's onError callback
      console.error("Failed to save category:", error);
    }
  };

  return (
    <>
      <ShopCategoriesTemplate
        server={server}
        onAddCategory={handleAddCategory}
        onEditCategory={handleEditCategory}
        onDeleteCategory={handleDeleteCategory}
        mutationState={mutationState}
        isCategoryMutating={isCategoryMutating}
      />

      <AddCategoryDialog
        open={isDialogOpen}
        onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) handleDialogClose();
        }}
        onSubmit={handleCategorySubmit}
        categories={categoryOptions}
        isSubmitting={mutationState.isAnyMutating}
        initialValues={
          editingCategory
            ? {
                name: editingCategory.name,
                slug: editingCategory.slug,
                description: editingCategory.description ?? "",
                image: editingCategory.image ?? null,
                icon: editingCategory.icon ?? "",
                parentId: editingCategory.parentId ?? "none",
              }
            : null
        }
      />

      <ConfirmDeleteDialog
        open={!!deletingCategory}
        onOpenChange={(open) => !open && setDeletingCategory(null)}
        onConfirm={confirmDelete}
        isDeleting={mutationState.deletingId === deletingCategory?.id}
        itemName={deletingCategory?.name}
        entityType="category"
      />
    </>
  );
}
