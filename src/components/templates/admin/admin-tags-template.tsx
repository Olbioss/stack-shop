import type { DataTableServer } from "#/components/base/data-table/types";
import TagHeader from "#/components/containers/shared/tags/tag-header";
import TagsTable from "#/components/containers/shared/tags/tag-table";
import type {
  TagMutationState,
  TagTableActions,
} from "#/components/containers/shared/tags/tag-table-columns";
import type { TagItem } from "@/types/tags";

interface AdminTagsTemplateProps extends TagTableActions {
  server: DataTableServer<TagItem>;
  mutationState?: TagMutationState;
  isTagMutating?: (id: string) => boolean;
}

export default function AdminTagsTemplate({
  server,
  onDelete,
  onToggleActive,
  mutationState,
  isTagMutating,
}: AdminTagsTemplateProps) {
  return (
    <div className="space-y-6">
      <TagHeader role="admin" showAddButton={false} />
      <TagsTable
        server={server}
        onDelete={onDelete}
        onToggleActive={onToggleActive}
        mutationState={mutationState}
        isTagMutating={isTagMutating}
        mode="admin"
      />
    </div>
  );
}
