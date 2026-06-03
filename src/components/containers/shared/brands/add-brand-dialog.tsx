import {
  EntityFormDialogExtended,
  type EntityFormField,
} from "#/components/base/forms/entity-form-dialog-extended";
import { createBrandSchema } from "#/lib/validators/brands";
import type { BrandFormValues } from "#/types/brands";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: BrandFormValues) => void;
  isSubmitting?: boolean;
  initialValues?: BrandFormValues | null;
};

export default function AddBrandDialog({
  open,
  onOpenChange,
  onSubmit,
  isSubmitting = false,
  initialValues,
}: Props) {
  const fields: EntityFormField[] = [
    {
      name: "name",
      label: "Brand Name",
      type: "text",
      required: true,
      placeholder: "e.g. Nike, Adidas",
      description: "URL-friendly identifier for your brand",
      autoGenerateSlug: true,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      required: true,
      placeholder: "e.g. nike, adidas",
    },
    {
      name: "logo",
      label: "Logo",
      type: "file",
      required: false,
      placeholder: "e.g. https://www.nike.com/logo.png",
    },
    {
      name: "website",
      label: "Website",
      type: "text",
      required: false,
      placeholder: "e.g. https://www.nike.com",
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      required: false,
      placeholder: "e.g. Leading sportswear brand",
    },
  ];

  return (
    <EntityFormDialogExtended<BrandFormValues>
      scrollable={false}
      contentClassName="sm:max-w-150"
      open={open}
      onOpenChange={onOpenChange}
      onSubmit={onSubmit}
      isSubmitting={isSubmitting}
      initialValues={initialValues}
      title="Brand"
      description="Create a new product Brand for your shop."
      validationSchema={createBrandSchema}
      submitButtonText={{
        create: "Create Brand",
        update: "Update Brand",
      }}
      fields={fields}
    />
  );
}
