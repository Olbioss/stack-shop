import { createTagSchema } from "#/lib/validators/shared/tag-query";
import type { TagFormValues } from "#/types/tags";
import {
  EntityFormDialogExtended,
  type EntityFormField,
} from "@/components/base/forms/entity-form-dialog-extended";

interface AddTagDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: TagFormValues) => void;
  isSubmitting?: boolean;
  initialValues?: TagFormValues | null;
}

const fields: EntityFormField[] = [
  {
    name: "name",
    label: "Tag Name",
    type: "text",
    required: true,
    placeholder: "e.g. New Arrival, Best Seller, On Sale",
    autoGenerateSlug: true,
  },
  {
    name: "slug",
    label: "Slug",
    type: "text",
    required: true,
    placeholder: "e.g. new-arrival, best-seller, on-sale",
    description: "URL-friendly identifier for your tag",
  },
  {
    name: "description",
    label: "Description",
    required: false,
    type: "textarea",
    placeholder: "Optional description for this tag",
    description: "Brief explanation of what this tag represents",
  },
];

export function AddTagDialog({
  open,
  onOpenChange,
  onSubmit,
  isSubmitting = false,
  initialValues,
}: AddTagDialogProps) {
  return (
    <EntityFormDialogExtended<TagFormValues>
      open={open}
      onOpenChange={onOpenChange}
      onSubmit={onSubmit}
      isSubmitting={isSubmitting}
      initialValues={initialValues}
      title="Tag"
      description={"Create a new tag to organize your products."}
      validationSchema={createTagSchema}
      submitButtonText={{
        create: "Create Tag",
        update: "Update Tag",
      }}
      fields={fields}
    />
  );
}
