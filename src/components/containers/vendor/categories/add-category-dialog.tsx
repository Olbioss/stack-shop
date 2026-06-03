import {
  Camera,
  Footprints,
  Gamepad,
  Glasses,
  Headphones,
  Home,
  Laptop,
  Shirt,
  Smartphone,
  Watch,
} from "lucide-react";
import {
  EntityFormDialogExtended,
  type EntityFormField,
} from "#/components/base/forms/entity-form-dialog-extended";
import { Input } from "#/components/ui/input";
import type { CategoryFormValues } from "#/types/category-types";
import { FieldLabel, Field as UIField } from "@/components/ui/field";

export type CategoryOption = {
  id: string;
  name: string;
};

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: CategoryFormValues) => void;
  categories: CategoryOption[];
};

const AVAILABLE_ICONS = [
  { value: "smartphone", label: "Smartphone", icon: Smartphone },
  { value: "laptop", label: "Laptop", icon: Laptop },
  { value: "shirt", label: "Clothing", icon: Shirt },
  { value: "home", label: "Home", icon: Home },
  { value: "footprints", label: "Shoes", icon: Footprints },
  { value: "watch", label: "Accessories", icon: Watch },
  { value: "camera", label: "Camera", icon: Camera },
  { value: "headphones", label: "Audio", icon: Headphones },
  { value: "gamepad", label: "Gaming", icon: Gamepad },
  { value: "glasses", label: "Eyewear", icon: Glasses },
];

export default function AddCategoryDialog({
  categories,
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
      placeholder: "e.g. Electronics",
      autoGenerateSlug: true,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      required: true,
      placeholder: "e.g. electronics",
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      placeholder: "Describe this category...",
    },
    {
      name: "parentId",
      label: "Parent Category",
      type: "select",
      placeholder: "Select a parent category (Optional)",
      defaultValue: "none",
      selectOptions: [
        { value: "none", label: "None (Root Category)" },
        ...categories.map((c) => ({ value: c.id, label: c.name })),
      ],
    },
    {
      name: "icon",
      label: "Icon",
      type: "select",
      placeholder: "Select an icon",
      selectOptions: AVAILABLE_ICONS.map((i) => ({
        value: i.value,
        label: i.label,
        icon: i.icon,
      })),
    },
    {
      name: "image",
      label: "Category Image",
      type: "custom",
      render: ({ form }) => (
        <form.Field name="image">
          {(field) => (
            <UIField>
              <FieldLabel htmlFor={field.name}>Category Image</FieldLabel>
              <Input
                id={field.name}
                type="file"
                accept="image/*"
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.files)}
                className="cursor-pointer"
              />
            </UIField>
          )}
        </form.Field>
      ),
    },
  ];

  return (
    <EntityFormDialogExtended<CategoryFormValues>
      open={open}
      onOpenChange={onOpenChange}
      onSubmit={onSubmit}
      title="Category"
      description="Add a new category to organize your products."
      fields={fields}
      submitButtonText={{ create: "Create Category ", update: "Save Category" }}
      scrollable={false}
      contentClassName="sm:max-w-150"
    />
  );
}
