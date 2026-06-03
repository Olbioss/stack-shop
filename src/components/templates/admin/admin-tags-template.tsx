import TagHeader from "#/components/containers/shared/tags/tag-header";
import TagsTable from "#/components/containers/shared/tags/tag-table";
import { ADMIN_TAG_PERMISSIONS } from "#/lib/config/tag-permissions";
import type { Tag } from "@/types/tags";

interface AdminTagsTemplateProps {
  tags: Tag[];
  onAddTag: (data: { name: string; description: string }) => void;
  onDeleteTag: (tagId: string) => void;
}

export default function AdminTagsTemplate({
  tags,
  onAddTag,
  onDeleteTag,
}: AdminTagsTemplateProps) {
  return (
    <div className="space-y-6">
      <TagHeader role="admin" onAddTag={onAddTag} />
      <TagsTable
        tags={tags}
        permissions={ADMIN_TAG_PERMISSIONS}
        onDeleteTag={onDeleteTag}
      />
    </div>
  );
}
