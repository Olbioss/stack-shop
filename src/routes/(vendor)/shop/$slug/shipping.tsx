import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { ConfirmDeleteDialog } from "#/components/base/common/confirm-delete-dialog";
import { PageSkeleton } from "#/components/base/common/page-skeleton";
import { AddShippingDialog } from "#/components/containers/shared/shipping/add-shipping-dialog";
import ShopShippingTemplate from "#/components/templates/vendor/shop-shipping-template";
import { useEntityCRUD } from "#/hooks/common/use-entity-crud";
import { useShipping } from "#/hooks/common/use-shipping";
import { shopBySlugQueryOptions } from "#/hooks/vendor/use-shops";
import { createVendorShippingFetcher } from "#/hooks/vendor/use-vendor-entity-fetcher";
import type { CreateShippingMethodInput } from "#/lib/validators/shipping";
import type { ShippingMethodItem } from "#/types/shipping";

export const Route = createFileRoute("/(vendor)/shop/$slug/shipping")({
  loader: async ({ context: { queryClient }, params: { slug } }) => {
    await queryClient.ensureQueryData(shopBySlugQueryOptions(slug));
  },
  component: RouteComponent,
  pendingComponent: PageSkeleton,
});

function RouteComponent() {
  const { slug } = Route.useParams();
  const {
    data: { shop },
  } = useSuspenseQuery(shopBySlugQueryOptions(slug));

  const {
    createShipping,
    updateShipping,
    deleteShipping,
    mutationState,
    isShippingMutating,
  } = useShipping(shop.id);

  const server = useMemo(() => createVendorShippingFetcher(shop.id), [shop.id]);

  const {
    isDialogOpen,
    setIsDialogOpen,
    editingItem: editingShipping,
    deletingItem: deletingShipping,
    setDeletingItem: setDeletingShipping,
    handleAdd: handleAddShipping,
    handleEdit: handleEditShipping,
    handleDelete: handleDeleteShipping,
    confirmDelete,
    handleDialogClose,
  } = useEntityCRUD<ShippingMethodItem>({
    onDelete: async (id) => {
      await deleteShipping(id);
    },
  });

  const handleShippingSubmit = async (
    data: Omit<CreateShippingMethodInput, "shopId">
  ) => {
    try {
      if (editingShipping) {
        await updateShipping({
          ...data,
          id: editingShipping.id,
        });
      } else {
        await createShipping(data);
      }
      handleDialogClose();
    } catch (error) {
      console.error("Failed to save shipping method:", error);
    }
  };

  return (
    <>
      <ShopShippingTemplate
        server={server}
        onAddShipping={handleAddShipping}
        onDelete={handleDeleteShipping}
        onEdit={handleEditShipping}
        mutationState={mutationState}
        isShippingMutating={isShippingMutating}
      />

      <AddShippingDialog
        open={isDialogOpen}
        onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) handleDialogClose();
        }}
        onSubmit={handleShippingSubmit}
        isSubmitting={mutationState.isAnyMutating}
        initialValues={
          editingShipping
            ? {
                name: editingShipping.name,
                price: Number(editingShipping.price),
                duration: editingShipping.duration,
                description: editingShipping.description || "",
                isActive: editingShipping.isActive,
              }
            : null
        }
      />

      <ConfirmDeleteDialog
        open={!!deletingShipping}
        onOpenChange={(open) => !open && setDeletingShipping(null)}
        onConfirm={confirmDelete}
        isDeleting={mutationState.deletingId === deletingShipping?.id}
        itemName={deletingShipping?.name}
        entityType="shipping method"
      />
    </>
  );
}
