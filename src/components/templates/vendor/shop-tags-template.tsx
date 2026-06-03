import type { DataTableServer } from "#/components/base/data-table/types";
import TagHeader from "#/components/containers/shared/tags/tag-header";
import TagTable from "#/components/containers/shared/tags/tag-table";
import type {
  TagMutationState,
  TagTableActions,
} from "#/components/containers/shared/tags/tag-table-columns";
import type { TagItem } from "#/types/tags";

interface ShopTagsTemplateProps extends TagTableActions {
  server: DataTableServer<TagItem>;
  mutationState?: TagMutationState;
  isTagMutating?: (id: string) => boolean;
  onAddTag?: () => void;
  showAddButton?: boolean;
}

export default function ShopTagsTemplate({
  server,
  onAddTag,
  onEdit,
  onDelete,
  onToggleActive,
  mutationState,
  isTagMutating,
  showAddButton = true,
}: ShopTagsTemplateProps) {
  return (
    <div className="space-y-6">
      <TagHeader onAdd={onAddTag} role="vendor" showAddButton={showAddButton} />
      <TagTable
        server={server}
        onEdit={onEdit}
        onDelete={onDelete}
        onToggleActive={onToggleActive}
        mutationState={mutationState}
        isTagMutating={isTagMutating}
        mode="vendor"
      />
    </div>
  );
}
