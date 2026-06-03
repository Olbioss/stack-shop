import {
  EntityFormDialogExtended,
  type EntityFormField,
} from "#/components/base/forms/entity-form-dialog-extended";
import type { TaxFormValues } from "#/types/taxes";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: TaxFormValues) => void;
};

const fields: EntityFormField[] = [
  {
    name: "name",
    label: "Name",
    type: "text",
    required: true,
    placeholder: "e.g. VAT",
  },
  {
    name: "rate",
    label: "Rate (%)",
    type: "number",
    required: true,
    placeholder: "e.g. 20",
  },
  {
    name: "country",
    label: "Country",
    required: true,
    type: "text",
    placeholder: "e.g. US",
  },
  {
    name: "state",
    label: "State/Province",
    type: "text",
    placeholder: "e.g. California",
  },
  {
    name: "zip",
    label: "ZIP/Postal Code",
    type: "text",
    placeholder: "e.g. 90210",
  },
  {
    name: "priority",
    label: "Priority",
    type: "number",
    min: 1,
    required: true,
    placeholder: "1",
  },
];

export default function AddTaxDialog({ open, onOpenChange, onSubmit }: Props) {
  return (
    <EntityFormDialogExtended<TaxFormValues>
      open={open}
      onOpenChange={onOpenChange}
      onSubmit={onSubmit}
      title="Add New Tax Rate"
      description="Add a new tax rate for your shop."
      fields={fields}
      submitButtonText={{ create: "Add Tax Rate", update: "Save Tax Rate" }}
      scrollable={false}
      contentClassName="sm:max-w-150"
    />
  );
}
