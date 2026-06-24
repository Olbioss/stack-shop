import {
  EntityFormDialogExtended,
  type EntityFormField,
} from "#/components/base/forms/entity-form-dialog-extended";
import { Input } from "#/components/ui/input";
import type { StaffFormValues } from "#/types/staff";
import { FieldLabel, Field as UIField } from "@/components/ui/field";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: StaffFormValues) => void;
};

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
    type: "text",
    required: true,
    placeholder: "e.g. john.doe@example.com",
  },
  {
    name: "role",
    label: "Role",
    type: "select",
    placeholder: "Select a role",
    required: true,
    selectOptions: [
      { value: "manager", label: "Manager" },
      { value: "staff", label: "Staff" },
      { value: "admin", label: "Admin" },
    ],
  },
  {
    name: "status",
    label: "Status",
    type: "select",
    required: true,
    selectOptions: [
      { value: "active", label: "Active" },
      { value: "invited", label: "Invited" },
      { value: "inactive", label: "Inactive" },
    ],
  },
  {
    name: "avatar",
    label: "Avatar",
    type: "custom",
    render: ({ form }) => (
      <form.Field name="image">
        {(field: any) => (
          <UIField>
            <FieldLabel htmlFor={field.name}>Avatar</FieldLabel>
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

export default function AddStaffDialog({
  open,
  onOpenChange,
  onSubmit,
}: Props) {
  return (
    <EntityFormDialogExtended<StaffFormValues>
      open={open}
      onOpenChange={onOpenChange}
      onSubmit={onSubmit}
      title="Staff Member"
      description="Add a new staff member to your shop."
      fields={fields}
      submitButtonText={{ create: "Add Staff", update: "Save Changes" }}
      scrollable={false}
      contentClassName="sm:max-w-150"
    />
  );
}
