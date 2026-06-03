import {
  EntityFormDialogExtended,
  type EntityFormField,
} from "#/components/base/forms/entity-form-dialog-extended";

export type BrandFormValues = {
  name: string;
  slug: string;
  website?: string;
  description?: string;
  logo?: string;
};

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: BrandFormValues) => void;
};

export default function AddBrandDialog({
  open,
  onOpenChange,
  onSubmit,
}: Props) {
  const fields: EntityFormField[] = [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
      placeholder: "e.g. Apple Inc.",
      autoGenerateSlug: true,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      required: true,
      placeholder: "e.g. apple-inc",
    },
    {
      name: "website",
      label: "Website",
      type: "text",
      required: false,
      placeholder: "e.g. https://www.apple.com",
    },
    {
      name: "logo",
      label: "Logo",
      type: "text",
      required: false,
      placeholder: "e.g. https://www.apple.com/logo.png",
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      required: false,
      placeholder: "e.g. Leading technology company",
    },
  ];

  return (
    <EntityFormDialogExtended<BrandFormValues>
      open={open}
      onOpenChange={onOpenChange}
      onSubmit={onSubmit}
      title="Brand"
      description="Create a new brand to associate with your products."
      fields={fields}
      submitButtonText={{ create: "Create Brand", update: "Save Brand" }}
      scrollable={false}
      contentClassName="sm:max-w-150"
    />
  );
}
