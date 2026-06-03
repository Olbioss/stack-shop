import type { EntityFormField } from "@/components/base/forms/entity-form-dialog-extended";
import { EntityFormDialogExtended } from "@/components/base/forms/entity-form-dialog-extended";
import type { TagFormValues } from "@/types/tags";

interface AddTagDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: TagFormValues) => void;
}

const fields: EntityFormField[] = [
  {
    name: "name",
    label: "Name",
    type: "text",
    required: true,
    placeholder: "e.g. New Arrival",
  },
  {
    name: "description",
    label: "Description",
    type: "textarea",
    placeholder: "Describe this tag...",
  },
];

export function AddTagDialog({
  open,
  onOpenChange,
  onSubmit,
}: AddTagDialogProps) {
  return (
    <EntityFormDialogExtended<TagFormValues>
      open={open}
      onOpenChange={onOpenChange}
      onSubmit={onSubmit}
      title="Tag"
      description="Add a new tag for your products."
      fields={fields}
      submitButtonText={{ create: "Add Tag", update: "Save Tag" }}
      scrollable={false}
      contentClassName="sm:max-w-150"
    />
  );
}
