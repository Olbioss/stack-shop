import { FileUploaderMinimal } from "@uploadcare/react-uploader";
import type { ShopFormValues } from "#/types/shop";
import {
  EntityFormDialogExtended,
  type EntityFormField,
} from "@/components/base/forms/entity-form-dialog-extended";
import { FieldLabel, Field as UIField } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import "@uploadcare/react-uploader/core.css";
import { X } from "lucide-react";
import { Button } from "#/components/ui/button";
import { createShopSchema } from "#/lib/validators/shop";

type AddShopDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: ShopFormValues) => void | Promise<void>;
  isSubmitting?: boolean;
};

const fields: EntityFormField[] = [
  {
    name: "name",
    label: "Shop Name",
    type: "text",
    required: true,
    placeholder: "e.g. Tech Gadgets Store",
    autoGenerateSlug: true,
  },
  {
    name: "slug",
    label: "Slug",
    type: "text",
    required: true,
    placeholder: "e.g. tech-gadgets-store",
  },
  {
    name: "description",
    label: "Description",
    type: "textarea",
    placeholder: "Describe your shop...",
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
              <div className="spacye-y-2">
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
                      onClick={() => field.handleChange(null)}
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
                  className="uc-auto uc-purple"
                  imgOnly
                  multiple={false}
                  onFileUploadSuccess={(e) => {
                    if (e?.cdnUrl) {
                      field.handleChange(e.cdnUrl);
                    }
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
                      onClick={() => field.handleChange(null)}
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
  {
    name: "address",
    label: "Address",
    type: "text",
    required: true,
    placeholder: "e.g. 123 Tech St, Silicon Valley",
  },
  {
    name: "phone",
    label: "Phone / Email",
    type: "custom",
    render: ({ form }) => (
      <div className="grid gap-4 sm:grid-cols-2">
        <form.Field name="phone">
          {(field: any) => (
            <UIField>
              <FieldLabel htmlFor={field.name}>Phone</FieldLabel>
              <Input
                id={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="e.g. +1 234 567 8900"
              />
            </UIField>
          )}
        </form.Field>
        <form.Field name="email">
          {(field: any) => (
            <UIField>
              <FieldLabel htmlFor={field.name}>
                Notification Email (Coming Soon)
              </FieldLabel>
              <Input
                id={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Enter email for notifications"
                disabled
              />
            </UIField>
          )}
        </form.Field>
      </div>
    ),
  },
  {
    name: "enableNotification",
    label: "Notifications",
    type: "custom",
    render: ({ form }) => (
      <form.Field name="enableNotification">
        {(field: any) => (
          <div className="flex flex-row items-center justify-between rounded-lg border p-4 shadow-sm">
            <div className="space-y-0.5">
              <Label htmlFor={field.name} className="text-base">
                Enable Notifications
              </Label>
              <p className="text-muted-foreground text-sm">
                Receive updates about your shop.
              </p>
            </div>
            <Switch
              id={field.name}
              checked={field.state.value}
              onCheckedChange={(checked) => field.handleChange(checked)}
            />
          </div>
        )}
      </form.Field>
    ),
  },
  {
    name: "_paymentInfo",
    type: "custom",
    render: () => (
      <>
        <Separator />
        <div className="rounded-lg border bg-muted/50 p-4">
          <h4 className="mb-2 font-semibold">Payment Information</h4>
          <p className="text-muted-foreground text-sm">
            Stripe connection will be available soon to handle your payments
            securely.
          </p>
        </div>
      </>
    ),
  },
];

export function AddShopDialog({
  open,
  onOpenChange,
  onSubmit,
}: AddShopDialogProps) {
  return (
    <EntityFormDialogExtended<ShopFormValues>
      open={open}
      onOpenChange={onOpenChange}
      onSubmit={onSubmit}
      title="Shop"
      description="Enter the details for your new shop."
      fields={fields}
      submitButtonText={{ create: "Create Shop", update: "Save Shop" }}
      contentClassName="sm:max-w-150"
      validationSchema={createShopSchema}
    />
  );
}
