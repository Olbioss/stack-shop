import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { ConfirmDeleteDialog } from "#/components/base/common/confirm-delete-dialog";
import { PageSkeleton } from "#/components/base/common/page-skeleton";
import { AddTagDialog } from "#/components/containers/shared/tags/add-tag-dialog";
import ShopTagsTemplate from "#/components/templates/vendor/shop-tags-template";
import { useEntityCRUD } from "#/hooks/common/use-entity-crud";
import { shopBySlugQueryOptions } from "#/hooks/vendor/use-shops";
import { useTags } from "#/hooks/vendor/use-tags";
import { createVendorTagsFetcher } from "#/hooks/vendor/use-vendor-entity-fetcher";
import type { TagFormValues, TagItem } from "#/types/tags";

export const Route = createFileRoute("/(vendor)/shop/$slug/tags")({
  component: RouteComponent,
  pendingComponent: PageSkeleton,
});

function RouteComponent() {
  const { slug } = Route.useParams();
  const { data: shopData } = useSuspenseQuery(shopBySlugQueryOptions(slug));
  const shopId = shopData?.shop?.id ?? "";

  const server = useMemo(() => createVendorTagsFetcher(shopId), [shopId]);

  const {
    createTag,
    isCreating,
    updateTag,
    isUpdating,
    deleteTag,
    mutationState,
    isTagMutating,
  } = useTags(shopId);

  const {
    isDialogOpen,
    setIsDialogOpen,
    editingItem: editingTag,
    deletingItem: deletingTag,
    setDeletingItem: setDeletingTag,
    handleAdd: handleAddTag,
    handleEdit: handleEditTag,
    handleDelete: handleDeleteTag,
    confirmDelete,
    handleDialogClose,
  } = useEntityCRUD<TagItem>({
    onDelete: async (id) => {
      await deleteTag(id);
    },
  });

  const handleTagSubmit = async (data: TagFormValues) => {
    try {
      if (editingTag) {
        await updateTag({
          id: editingTag.id,
          name: data.name,
          slug: data.slug,
          description: data.description,
          sortOrder: data.sortOrder,
          isActive: data.isActive,
        });
      } else {
        await createTag({
          name: data.name,
          slug: data.slug,
          description: data.description,
          sortOrder: data.sortOrder ?? 0,
          isActive: data.isActive ?? true,
        });
      }
      handleDialogClose();
    } catch (error) {
      console.error("Failed to save tag:", error);
    }
  };

  return (
    <>
      <ShopTagsTemplate
        server={server}
        onAddTag={handleAddTag}
        onEdit={handleEditTag}
        onDelete={handleDeleteTag}
        mutationState={mutationState}
        isTagMutating={isTagMutating}
      />

      <AddTagDialog
        open={isDialogOpen}
        onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) handleDialogClose();
        }}
        onSubmit={handleTagSubmit}
        isSubmitting={isCreating || isUpdating}
        initialValues={
          editingTag
            ? {
                name: editingTag.name,
                slug: editingTag.slug,
                description: editingTag.description,
                sortOrder: editingTag.sortOrder,
                isActive: editingTag.isActive,
              }
            : null
        }
      />

      <ConfirmDeleteDialog
        open={!!deletingTag}
        onOpenChange={(open) => !open && setDeletingTag(null)}
        onConfirm={confirmDelete}
        itemName={deletingTag?.name}
        entityType="tag"
      />
    </>
  );
}
