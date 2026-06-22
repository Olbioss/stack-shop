import { createFileRoute } from "@tanstack/react-router";
import { ConfirmDeleteDialog } from "#/components/base/common/confirm-delete-dialog";
import { PageSkeleton } from "#/components/base/common/page-skeleton";
import AdminBrandsTemplate from "#/components/templates/admin/admin-brands-template";
import { useAdminBrands } from "#/hooks/admin/use-admin-brands";
import { createAdminBrandsFetcher } from "#/hooks/admin/use-admin-entity-fetchers";
import { useEntityCRUD } from "#/hooks/common/use-entity-crud";
import type { BrandItem } from "#/types/brands";

export const Route = createFileRoute("/(admin)/admin/brands")({
  component: RouteComponent,
  pendingComponent: PageSkeleton,
});

function RouteComponent() {
  const server = createAdminBrandsFetcher();

  const { toggleActive, deleteBrand, mutationState, isBrandMutating } =
    useAdminBrands();

  const {
    deletingItem: deletingBrand,
    setDeletingItem: setDeletingBrand,
    handleDelete: handleDeleteBrand,
    confirmDelete,
  } = useEntityCRUD<BrandItem>({
    onDelete: async (id) => {
      await deleteBrand(id);
    },
  });

  const handleToggleActive = async (brand: BrandItem) =>
    await toggleActive({ id: brand.id, isActive: !brand.isActive });

  return (
    <>
      <AdminBrandsTemplate
        server={server}
        onDeleteBrand={handleDeleteBrand}
        onToggleActive={handleToggleActive}
        mutationState={mutationState}
        isBrandMutating={isBrandMutating}
      />

      <ConfirmDeleteDialog
        open={!!deletingBrand}
        onOpenChange={(open) => !open && setDeletingBrand(null)}
        onConfirm={confirmDelete}
        isDeleting={mutationState.deletingId === deletingBrand?.id}
        itemName={deletingBrand?.name}
        entityType="brand"
      />
    </>
  );
}
