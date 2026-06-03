import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { ConfirmDeleteDialog } from "#/components/base/common/confirm-delete-dialog";
import { PageSkeleton } from "#/components/base/common/page-skeleton";
import { AddAttributeDialog } from "#/components/containers/shared/attributes/add-attribute-dialog";
import ShopAttributesTemplate from "#/components/templates/vendor/shop-attributes-template";
import { useEntityCRUD } from "#/hooks/common/use-entity-crud";
import { useAttributes } from "#/hooks/vendor/use-attributes";
import { shopBySlugQueryOptions } from "#/hooks/vendor/use-shops";
import { createVendorAttributesFetcher } from "#/hooks/vendor/use-vendor-entity-fetcher";
import type { AttributeFormValues, AttributeItem } from "#/types/attributes";

export const Route = createFileRoute("/(vendor)/shop/$slug/attributes")({
  component: RouteComponent,
  pendingComponent: PageSkeleton,
});

function RouteComponent() {
  const { slug } = Route.useParams();
  const { data: shopData } = useSuspenseQuery(shopBySlugQueryOptions(slug));
  const shopId = shopData?.shop?.id ?? "";

  const server = useMemo(() => createVendorAttributesFetcher(shopId), [shopId]);

  const {
    createAttribute,
    isCreating,
    updateAttribute,
    isUpdating,
    deleteAttribute,
    mutationState,
    isAttributeMutating,
  } = useAttributes(shopId);

  const {
    isDialogOpen,
    setIsDialogOpen,
    editingItem: editingAttribute,
    deletingItem: deletingAttribute,
    setDeletingItem: setDeletingAttribute,
    handleAdd: handleAddAttribute,
    handleEdit: handleEditAttribute,
    handleDelete: handleDeleteAttribute,
    confirmDelete,
    handleDialogClose,
  } = useEntityCRUD<AttributeItem>({
    onDelete: async (id) => {
      await deleteAttribute(id);
    },
  });

  const handleAttributeSubmit = async (data: AttributeFormValues) => {
    try {
      if (editingAttribute) {
        await updateAttribute({
          id: editingAttribute.id,
          name: data.name,
          slug: data.slug || undefined,
          type: data.type,
          values: data.values,
        });
      } else {
        await createAttribute({
          name: data.name,
          slug: data.slug || undefined,
          type: data.type,
          values: data.values,
          sortOrder: 0,
          isActive: true,
        });
      }
      handleDialogClose();
    } catch (error) {
      console.error("Failed to save attribute:", error);
    }
  };

  return (
    <>
      <ShopAttributesTemplate
        server={server}
        onAddAttribute={handleAddAttribute}
        onEditAttribute={handleEditAttribute}
        onDeleteAttribute={handleDeleteAttribute}
        mutationState={mutationState}
        isAttributeMutating={isAttributeMutating}
      />

      <AddAttributeDialog
        key={editingAttribute?.id ?? "new"}
        open={isDialogOpen}
        onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) handleDialogClose();
        }}
        onSubmit={handleAttributeSubmit}
        isSubmitting={isCreating || isUpdating}
        initialValues={
          editingAttribute
            ? {
                name: editingAttribute.name,
                slug: editingAttribute.slug,
                type: editingAttribute.type,
                values: editingAttribute.values.map((v) => ({
                  id: v.id,
                  name: v.name,
                  slug: v.slug,
                  value: v.value ?? "",
                })),
              }
            : null
        }
      />

      <ConfirmDeleteDialog
        open={!!deletingAttribute}
        onOpenChange={(open) => !open && setDeletingAttribute(null)}
        onConfirm={confirmDelete}
        itemName={deletingAttribute?.name}
        entityType="attribute"
      />
    </>
  );
}
