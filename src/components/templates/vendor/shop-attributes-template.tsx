import type { DataTableServer } from "#/components/base/data-table/types";
import AttributeHeader from "#/components/containers/shared/attributes/attribute-header";
import AttributeTable from "#/components/containers/shared/attributes/attribute-table";
import type { AttributeTableActions } from "#/components/containers/shared/attributes/attribute-table-columns";
import type { VendorAttributeMutationState } from "#/hooks/vendor/use-attributes";
import type { AttributeItem } from "#/types/attributes";

interface ShopAttributesTemplateProps extends AttributeTableActions {
  server: DataTableServer<AttributeItem>;
  onAddAttribute: () => void;
  onEditAttribute?: (attribute: AttributeItem) => void;
  onDeleteAttribute?: (attribute: AttributeItem) => void;
  mutationState?: VendorAttributeMutationState;
  isAttributeMutating?: (id: string) => boolean;
}

export default function ShopAttributesTemplate({
  server,
  onAddAttribute,
  onEditAttribute,
  onDeleteAttribute,
  onToggleActive,
  mutationState,
  isAttributeMutating,
}: ShopAttributesTemplateProps) {
  return (
    <div className="space-y-6">
      <AttributeHeader
        onAdd={onAddAttribute}
        role="vendor"
        showAddButton={true}
      />
      <AttributeTable
        server={server}
        onEdit={onEditAttribute}
        onDelete={onDeleteAttribute}
        onToggleActive={onToggleActive}
        mutationState={mutationState}
        isAttributeMutating={isAttributeMutating}
        mode="vendor"
      />
    </div>
  );
}
