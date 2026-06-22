import type { DataTableServer } from "#/components/base/data-table/types";
import AttributeTable from "#/components/containers/shared/attributes/attribute-table";
import AttributeHeader from "@/components/containers/shared/attributes/attribute-header";
import type {
  AdminAttributeMutationState,
  AttributeItem,
} from "@/types/attributes";

interface AdminAttributesTemplateProps {
  server: DataTableServer<AttributeItem>;
  onEditAttribute?: (attribute: AttributeItem) => void;
  onDeleteAttribute?: (attribute: AttributeItem) => void;
  onToggleActive?: (attribute: AttributeItem) => void;
  mutationState?: AdminAttributeMutationState;
  isAttributeMutating?: (id: string) => boolean;
}

export default function AdminAttributesTemplate({
  server,
  onEditAttribute,
  onDeleteAttribute,
  onToggleActive,
  mutationState,
  isAttributeMutating,
}: AdminAttributesTemplateProps) {
  return (
    <div className="space-y-6">
      <AttributeHeader role="admin" />
      <AttributeTable
        server={server}
        onEdit={onEditAttribute}
        onDelete={onDeleteAttribute}
        onToggleActive={onToggleActive}
        mutationState={mutationState}
        isAttributeMutating={isAttributeMutating}
        mode="admin"
      />
    </div>
  );
}
