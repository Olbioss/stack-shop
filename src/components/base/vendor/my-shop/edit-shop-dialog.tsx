import { FileUploaderMinimal } from "@uploadcare/react-uploader";
import "@uploadcare/react-uploader/core.css";
import { X } from "lucide-react";
import type { AdminShop } from "#/types/shop";
import {
  EntityFormDialogExtended,
  type EntityFormField,
} from "@/components/base/forms/entity-form-dialog-extended";
import { Button } from "@/components/ui/button";
import { FieldLabel, Field as UIField } from "@/components/ui/field";
import type { Shop } from "@/lib/db/schema/shop-schema";
import { type UpdateShopInput, updateShopSchema } from "@/lib/validators/shop";

interface EditShopDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  shop: Shop | AdminShop;
  onSubmit: (data: UpdateShopInput) => Promise<void>;
  isSubmitting: boolean;
}

const fields: EntityFormField[] = [
  {
    name: "name",
    label: "Shop Name",
    type: "text",
    placeholder: "My Awesome Shop",
  },
  {
    name: "category",
    label: "Category",
    type: "text",
    placeholder: "Electronics, Fashion, etc.",
  },
  {
    name: "description",
    label: "Description",
    type: "textarea",
    placeholder: "Tell us about your shop...",
  },
  {
    name: "logo",
    label: "Logo / Banner",
    type: "custom",
    render: ({ form }) => (
      <div className="grid gap-4 sm:grid-cols-2">
        <form.Field name="logo">
          {(field: any) => (
            <UIField>
              <FieldLabel htmlFor={field.name}>Logo</FieldLabel>
              <div className="space-y-2">
                <FileUploaderMinimal
                  pubkey={import.meta.env.VITE_UPLOADCARE_PUBLIC_KEY}
                  classNameUploader="uc-auto uc-purple"
                  sourceList="local, gdrive"
                  imgOnly
                  multiple={false}
                  onFileUploadSuccess={(e) => {
                    if (e?.cdnUrl) field.handleChange(e.cdnUrl);
                  }}
                />
                {field.state.value && (
                  <div className="relative size-20 overflow-hidden rounded-md border">
                    <img
                      src={field.state.value}
                      alt="Logo"
                      className="h-full w-full object-cover"
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      className="absolute top-0 right-0 h-5 w-5 rounded-tr-none rounded-bl-md px-0"
                      onClick={() => field.handleChange("")}
                    >
                      <span className="sr-only">Remove</span>
                      <X className="size-3" />
                    </Button>
                  </div>
                )}
              </div>
            </UIField>
          )}
        </form.Field>
        <form.Field name="banner">
          {(field: any) => (
            <UIField>
              <FieldLabel htmlFor={field.name}>Banner</FieldLabel>
              <div className="space-y-2">
                <FileUploaderMinimal
                  pubkey={import.meta.env.VITE_UPLOADCARE_PUBLIC_KEY}
                  classNameUploader="uc-auto uc-purple"
                  sourceList="local, gdrive"
                  imgOnly
                  multiple={false}
                  onFileUploadSuccess={(e) => {
                    if (e?.cdnUrl) field.handleChange(e.cdnUrl);
                  }}
                />
                {field.state.value && (
                  <div className="relative aspect-video w-full overflow-hidden rounded-md border">
                    <img
                      src={field.state.value}
                      alt="Banner"
                      className="h-full w-full object-cover"
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      className="absolute top-0 right-0 h-5 w-5 rounded-tr-none rounded-bl-md px-0"
                      onClick={() => field.handleChange("")}
                    >
                      <span className="sr-only">Remove</span>
                      <X className="size-3" />
                    </Button>
                  </div>
                )}
              </div>
            </UIField>
          )}
        </form.Field>
      </div>
    ),
  },
];

export function EditShopDialog({
  open,
  onOpenChange,
  shop,
  onSubmit,
  isSubmitting,
}: EditShopDialogProps) {
  return (
    <EntityFormDialogExtended<UpdateShopInput>
      open={open}
      onOpenChange={onOpenChange}
      onSubmit={onSubmit}
      isSubmitting={isSubmitting}
      initialValues={{
        id: shop.id,
        name: shop.name || "",
        description: shop.description || "",
        logo: shop.logo || "",
        banner: shop.banner || "",
        category: shop.category || "",
      }}
      title="Shop"
      description="Update your shop's appearance and details."
      fields={fields}
      submitButtonText={{ create: "Create Shop", update: "Save Changes" }}
      contentClassName="sm:max-w-150"
      validationSchema={updateShopSchema}
    />
  );
}
