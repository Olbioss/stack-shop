import {
  EntityFormDialogExtended,
  type EntityFormField,
} from "@/components/base/forms/entity-form-dialog-extended";
import { FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import type { UserFormValues } from "@/types/users";

interface AddUserDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: UserFormValues) => void;
}

const fields: EntityFormField[] = [
  {
    name: "name",
    label: "Name",
    type: "text",
    required: true,
    placeholder: "e.g. John Doe",
  },
  {
    name: "email",
    label: "Email",
    type: "custom",
    render: ({ form }) => (
      <form.Field name="email">
        {(field: any) => (
          <div className="space-y-2">
            <FieldLabel htmlFor={field.name}>Email</FieldLabel>
            <Input
              id={field.name}
              name={field.name}
              type="email"
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              placeholder="e.g. john@example.com"
            />
          </div>
        )}
      </form.Field>
    ),
  },
  {
    name: "status",
    label: "Status",
    type: "select",
    defaultValue: "active",
    selectOptions: [
      { label: "Active", value: "active" },
      { label: "Inactive", value: "inactive" },
      { label: "Suspended", value: "suspended" },
    ],
  },
  {
    name: "avatar",
    label: "Avatar (Optional)",
    type: "custom",
    render: ({ form }) => (
      <form.Field name="avatar">
        {(field: any) => (
          <div className="space-y-2">
            <FieldLabel htmlFor={field.name}>Avatar (Optional)</FieldLabel>
            <Input
              id={field.name}
              name={field.name}
              type="file"
              accept="image/*"
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.files)}
              className="cursor-pointer"
            />
          </div>
        )}
      </form.Field>
    ),
  },
];

export function AddUserDialog({
  open,
  onOpenChange,
  onSubmit,
}: AddUserDialogProps) {
  return (
    <EntityFormDialogExtended<UserFormValues>
      open={open}
      onOpenChange={onOpenChange}
      onSubmit={onSubmit}
      title="User"
      description="Add a new user to the platform."
      fields={fields}
      submitButtonText={{ create: "Add User", update: "Save User" }}
      contentClassName="sm:max-w-150"
      scrollable={false}
    />
  );
}
