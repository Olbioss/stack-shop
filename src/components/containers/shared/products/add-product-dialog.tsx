import { Check, ChevronsUpDown, Plus, Trash2, X } from "lucide-react";
import { useMemo, useState } from "react";
import {
  EntityFormDialogExtended,
  type EntityFormField,
} from "@/components/base/forms/entity-form-dialog-extended";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { getFieldErrors } from "@/lib/helper/get-field-errors";
import { validateField, validateOptionalField } from "@/lib/helper/validators";
import { cn } from "@/lib/utils";
import { productFormSchema } from "@/lib/validators/shared/product-query";
import type { ProductFormValues } from "@/types/products";

interface AddProductDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (
    data: ProductFormValues,
    status: "draft" | "active"
  ) => void | Promise<void>;
  isSubmitting?: boolean;
  categories: { id: string; name: string }[];
  brands: { id: string; name: string }[];
  tags: { id: string; name: string }[];
  availableAttributes?: {
    id: string;
    name: string;
    type: "color" | "image" | "label" | "select";
    values: { id: string; name: string; value: string }[];
  }[];
  taxes?: { id: string; name: string; rate: string }[];
  shippingMethods?: { id: string; name: string }[];
  initialValues?: ProductFormValues | null;
}

/**
 * Complete, correctly-typed defaults for every field the product form binds —
 * including names used only inside `custom` render blocks (which `EntityFormField`
 * entries can't register). Passed via the `defaultValues` prop so no form field
 * starts `undefined` (controlled inputs) or wrongly-typed (arrays/records).
 */
const PRODUCT_FORM_DEFAULTS: ProductFormValues = {
  name: "",
  slug: "",
  sku: "",
  shortDescription: "",
  regularPrice: "",
  sellingPrice: "",
  costPrice: "",
  stock: 0,
  lowStockThreshold: 5,
  trackInventory: true,
  description: "",
  productType: "simple",
  status: "active",
  categoryId: "",
  brandId: "",
  tagIds: [],
  attributeIds: [],
  shippingMethodIds: [],
  attributeValues: {},
  variationPrices: {},
  taxId: "",
  isFeatured: false,
  isActive: true,
  metaTitle: "",
  metaDescription: "",
  thumbnailImage: "",
  galleryImages: [],
};

/**
 * Single-select searchable combobox bound to a TanStack Form field.
 * Owns its Popover `open` state so it can close itself when an option is
 * picked — a bare `render` function can't hold `useState`.
 */
function ComboboxField({
  field,
  label,
  options,
  placeholder,
  searchPlaceholder,
  emptyText,
  disabled,
}: {
  field: any;
  label: string;
  options: { id: string; name: string }[];
  placeholder: string;
  searchPlaceholder: string;
  emptyText: string;
  disabled?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const selected = options.find((o) => o.id === field.state.value);

  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            disabled={disabled}
            className={cn(
              "w-full justify-between",
              !field.state.value && "text-muted-foreground"
            )}
          >
            {selected ? selected.name : placeholder}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder={searchPlaceholder} />
            <CommandList>
              <CommandEmpty>{emptyText}</CommandEmpty>
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    key={option.id}
                    value={option.name}
                    onSelect={() => {
                      field.handleChange(option.id);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        field.state.value === option.id
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {option.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </Field>
  );
}

/**
 * Multi-select tags combobox bound to a TanStack Form array field.
 * Owns its Popover `open` state so it closes when an option is toggled.
 */
function TagsField({
  field,
  tags,
  disabled,
}: {
  field: any;
  tags: { id: string; name: string }[];
  disabled?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const selected: string[] = field.state.value || [];

  return (
    <Field>
      <FieldLabel>Tags</FieldLabel>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            type="button"
            variant="outline"
            role="combobox"
            disabled={disabled}
            className={cn(
              "w-full justify-between",
              !selected.length && "text-muted-foreground"
            )}
          >
            {selected.length > 0
              ? `${selected.length} tags selected`
              : "Select tags"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search tags..." />
            <CommandList>
              <CommandEmpty>No tag found.</CommandEmpty>
              <CommandGroup>
                {tags.map((tag) => (
                  <CommandItem
                    key={tag.id}
                    value={tag.name}
                    onSelect={() => {
                      const next = selected.includes(tag.id)
                        ? selected.filter((id) => id !== tag.id)
                        : [...selected, tag.id];
                      field.handleChange(next);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selected.includes(tag.id) ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {tag.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {selected.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {selected.map((tagId) => {
            const tag = tags.find((t) => t.id === tagId);
            return (
              <Badge key={tagId} variant="secondary">
                {tag?.name}
                <button
                  type="button"
                  className="ml-1 rounded-full outline-none focus:ring-2 focus:ring-ring"
                  disabled={disabled}
                  onClick={() =>
                    field.handleChange(selected.filter((id) => id !== tagId))
                  }
                >
                  <X className="size-3" />
                </button>
              </Badge>
            );
          })}
        </div>
      )}
    </Field>
  );
}

/**
 * "Add Attribute" picker. Owns its Popover `open` state so it closes after an
 * attribute is added to the `attributeIds` form field.
 */
function AddAttributePopover({
  form,
  availableAttributes,
  disabled,
}: {
  form: any;
  availableAttributes: { id: string; name: string }[];
  disabled?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button type="button" variant="outline" size="sm" disabled={disabled}>
          <Plus className="mr-2 size-3" />
          Add Attribute
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search attributes..." />
          <CommandList>
            <CommandEmpty>No attribute found.</CommandEmpty>
            <CommandGroup>
              {availableAttributes.map((attr) => (
                <CommandItem
                  key={attr.id}
                  value={attr.name}
                  onSelect={() => {
                    const currentIds = form.getFieldValue("attributeIds") || [];
                    if (!currentIds.includes(attr.id)) {
                      form.setFieldValue("attributeIds", [
                        ...currentIds,
                        attr.id,
                      ]);
                    }
                    setOpen(false);
                  }}
                >
                  {attr.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export function AddProductDialog({
  open,
  onOpenChange,
  onSubmit,
  isSubmitting = false,
  categories,
  brands,
  tags,
  availableAttributes = [],
  taxes = [],
  shippingMethods = [],
  initialValues,
}: AddProductDialogProps) {
  const fields: EntityFormField[] = useMemo(
    () => [
      {
        name: "name",
        label: "Product Name",
        required: true,
        placeholder: "e.g. Wireless Headphones",
        autoGenerateSlug: "createOnly",
      },
      {
        name: "slug",
        label: "Slug",
        required: true,
        placeholder: "e.g. wireless-headphones",
        description: "URL-friendly identifier for your product",
      },
      {
        name: "sku",
        label: "SKU",
        required: true,
        placeholder: "e.g. WH-001",
      },
      {
        name: "productType",
        label: "Product Type",
        type: "select",
        required: true,
        defaultValue: "simple",
        selectOptions: [
          { label: "Simple Product", value: "simple" },
          { label: "Variable Product", value: "variable" },
        ],
      },
      {
        name: "status",
        label: "Status",
        type: "select",
        required: true,
        defaultValue: "active",
        selectOptions: [
          { label: "Active", value: "active" },
          { label: "Draft", value: "draft" },
          { label: "Archived", value: "archived" },
        ],
      },
      {
        name: "sellingPrice",
        label: "Selling Price",
        required: true,
        placeholder: "e.g. 99.99",
      },
      {
        name: "regularPrice",
        label: "Regular Price",
        placeholder: "e.g. 99.99",
      },
      {
        name: "costPrice",
        label: "Cost Price",
        placeholder: "e.g. 99.99",
      },
      {
        name: "inventory",
        type: "custom",
        render: ({ form, isSubmitting: isSubmittingExternal }) => (
          <div className="space-y-4">
            <div className="flex items-center gap-6">
              <form.Field name="trackInventory">
                {(field: any) => (
                  <div className="flex items-center gap-2">
                    <Switch
                      id="trackInventory"
                      checked={field.state.value}
                      onCheckedChange={field.handleChange}
                      disabled={isSubmittingExternal}
                    />
                    <FieldLabel htmlFor="trackInventory">
                      Track Inventory
                    </FieldLabel>
                  </div>
                )}
              </form.Field>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <form.Field
                name="stock"
                validators={{
                  onBlur: validateField(productFormSchema.shape.stock),
                }}
              >
                {(field: any) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel required>Stock Quantity</FieldLabel>
                      <Input
                        type="number"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="1"
                        disabled={isSubmittingExternal}
                        aria-invalid={isInvalid}
                      />
                      {isInvalid && (
                        <FieldError
                          id={field.name}
                          errors={getFieldErrors(field.state.meta.errors)}
                        />
                      )}
                    </Field>
                  );
                }}
              </form.Field>

              <form.Field
                name="lowStockThreshold"
                validators={{
                  onBlur: validateOptionalField(
                    productFormSchema.shape.lowStockThreshold
                  ),
                }}
              >
                {(field: any) => (
                  <Field>
                    <FieldLabel>Low Stock Threshold</FieldLabel>
                    <Input
                      type="number"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="5"
                      disabled={isSubmittingExternal}
                    />
                  </Field>
                )}
              </form.Field>
            </div>
          </div>
        ),
      },
      {
        name: "shippingMethodIds",
        type: "custom",
        render: ({ form, isSubmitting: isSubmittingExternal }) => (
          <form.Field
            name="shippingMethodIds"
            validators={{
              onBlur: validateField(productFormSchema.shape.shippingMethodIds),
            }}
          >
            {(field: any) => (
              <Field>
                <FieldLabel>Shipping Methods</FieldLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      disabled={isSubmittingExternal}
                      className={cn(
                        "w-full justify-between",
                        !field.state.value?.length && "text-muted-foreground"
                      )}
                    >
                      {field.state.value?.length > 0
                        ? `${field.state.value.length} methods selected`
                        : "Select shipping methods"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0">
                    <Command>
                      <CommandInput placeholder="Search shipping methods..." />
                      <CommandList>
                        <CommandEmpty>No shipping method found.</CommandEmpty>
                        <CommandGroup>
                          {shippingMethods.map((method) => (
                            <CommandItem
                              key={method.id}
                              value={method.name}
                              onSelect={() => {
                                const current = field.state.value || [];
                                const next = current.includes(method.id)
                                  ? current.filter(
                                      (id: string) => id !== method.id
                                    )
                                  : [...current, method.id];
                                field.handleChange(next);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  field.state.value?.includes(method.id)
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {method.name}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                {field.state.value?.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {field.state.value.map((methodId: string) => {
                      const method = shippingMethods.find(
                        (m) => m.id === methodId
                      );
                      return (
                        <Badge key={methodId} variant="secondary">
                          {method?.name}
                          <button
                            type="button"
                            className="ml-1 rounded-full outline-none focus:ring-2 focus:ring-ring"
                            disabled={isSubmittingExternal}
                            onClick={() =>
                              field.handleChange(
                                field.state.value.filter(
                                  (id: string) => id !== methodId
                                )
                              )
                            }
                          >
                            <X className="h-3 w-3" />
                            <span className="sr-only">Remove</span>
                          </button>
                        </Badge>
                      );
                    })}
                  </div>
                )}
              </Field>
            )}
          </form.Field>
        ),
      },
      {
        name: "relations",
        type: "custom",
        render: ({ form, isSubmitting: isSubmittingExternal }) => (
          <div className="grid grid-cols-2 gap-4">
            <form.Field name="categoryId">
              {(field: any) => (
                <ComboboxField
                  field={field}
                  label="Category"
                  options={categories}
                  placeholder="Select category"
                  searchPlaceholder="Search category..."
                  emptyText="No category found."
                  disabled={isSubmittingExternal}
                />
              )}
            </form.Field>
            <form.Field name="brandId">
              {(field: any) => (
                <ComboboxField
                  field={field}
                  label="Brand"
                  options={brands}
                  placeholder="Select brand"
                  searchPlaceholder="Search brand..."
                  emptyText="No brand found."
                  disabled={isSubmittingExternal}
                />
              )}
            </form.Field>
          </div>
        ),
      },
      {
        name: "tagIds",
        type: "custom",
        render: ({ form, isSubmitting: isSubmittingExternal }) => (
          <form.Field name="tagIds">
            {(field: any) => (
              <TagsField
                field={field}
                tags={tags}
                disabled={isSubmittingExternal}
              />
            )}
          </form.Field>
        ),
      },
      {
        name: "taxId",
        label: "Tax Rate",
        type: "select",
        placeholder: "Select tax rate",
        selectOptions: taxes.map((t) => ({
          label: `${t.name} (${t.rate}%)`,
          value: t.id,
        })),
      },
      {
        name: "description",
        label: "Description",
        type: "textarea",
        placeholder: "Detailed product description...",
      },
      {
        name: "shortDescription",
        label: "Short Description",
        type: "textarea",
        placeholder: "Brief summary of the product...",
      },
      {
        name: "thumbnailImage",
        label: "Thumbnail Image",
        type: "file",
        required: true,
      },
      {
        name: "galleryImages",
        label: "Gallery Images",
        type: "file",
        multiple: true,
      },
      {
        name: "flags",
        type: "custom",
        render: ({ form, isSubmitting: isSubmittingExternal }) => (
          <div className="flex gap-6">
            <form.Field name="isActive">
              {(field: any) => (
                <div className="flex items-center gap-2">
                  <Switch
                    id="isActive"
                    checked={field.state.value}
                    onCheckedChange={field.handleChange}
                    disabled={isSubmittingExternal}
                  />
                  <FieldLabel htmlFor="isActive">Active</FieldLabel>
                </div>
              )}
            </form.Field>
            <form.Field name="isFeatured">
              {(field: any) => (
                <div className="flex items-center gap-2">
                  <Switch
                    id="isFeatured"
                    checked={field.state.value}
                    onCheckedChange={field.handleChange}
                    disabled={isSubmittingExternal}
                  />
                  <FieldLabel htmlFor="isFeatured">Featured</FieldLabel>
                </div>
              )}
            </form.Field>
          </div>
        ),
      },
      {
        name: "attributes",
        type: "custom",
        render: ({ form, isSubmitting: isSubmittingExternal }) => (
          <div className="space-y-4">
            <Separator />
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-sm">Attributes</div>
                  <div className="text-muted-foreground text-xs">
                    Assign attributes to this product.
                  </div>
                </div>
                <AddAttributePopover
                  form={form}
                  availableAttributes={availableAttributes}
                  disabled={isSubmittingExternal}
                />
              </div>

              <div className="space-y-4">
                <form.Field name="attributeIds">
                  {(field: any) => (
                    <>
                      {(field.state.value || []).map(
                        (attrId: string, _i: number) => {
                          const attribute = availableAttributes.find(
                            (a) => a.id === attrId
                          );
                          if (!attribute) return null;

                          return (
                            <div
                              key={attrId}
                              className="rounded-lg border p-4 space-y-3"
                            >
                              <div className="flex items-center justify-between">
                                <div className="font-medium text-sm">
                                  {attribute.name}
                                </div>
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 text-muted-foreground hover:text-destructive"
                                  disabled={isSubmittingExternal}
                                  onClick={() => {
                                    const nextIds = field.state.value.filter(
                                      (id: string) => id !== attrId
                                    );
                                    field.handleChange(nextIds);

                                    const currentValues = {
                                      ...(form.getFieldValue(
                                        "attributeValues"
                                      ) || {}),
                                    };
                                    delete currentValues[attrId];
                                    form.setFieldValue(
                                      "attributeValues",
                                      currentValues
                                    );
                                  }}
                                >
                                  <Trash2 className="size-4" />
                                </Button>
                              </div>

                              <form.Field name={`attributeValues.${attrId}`}>
                                {(valField: any) => (
                                  <div className="flex flex-wrap gap-2">
                                    {attribute.values.map((val) => {
                                      const isSelected = (
                                        valField.state.value || []
                                      ).includes(val.id);
                                      return (
                                        <Badge
                                          key={val.id}
                                          variant={
                                            isSelected ? "default" : "outline"
                                          }
                                          className={cn(
                                            "cursor-pointer gap-2",
                                            isSelected
                                              ? "bg-primary text-primary-foreground"
                                              : "hover:bg-accent"
                                          )}
                                          onClick={() => {
                                            if (isSubmittingExternal) return;
                                            const current =
                                              valField.state.value || [];
                                            const next = current.includes(
                                              val.id
                                            )
                                              ? current.filter(
                                                  (id: string) => id !== val.id
                                                )
                                              : [...current, val.id];
                                            valField.handleChange(next);
                                          }}
                                        >
                                          {attribute.type === "color" && (
                                            <div
                                              className="size-3 rounded-full border border-white/20"
                                              style={{
                                                backgroundColor: val.value,
                                              }}
                                            />
                                          )}
                                          {attribute.type === "image" &&
                                            val.value && (
                                              <img
                                                src={val.value}
                                                alt={val.name}
                                                className="size-3 rounded-full object-cover"
                                              />
                                            )}
                                          {val.name || val.value}
                                        </Badge>
                                      );
                                    })}
                                  </div>
                                )}
                              </form.Field>
                            </div>
                          );
                        }
                      )}
                    </>
                  )}
                </form.Field>
              </div>
            </div>
          </div>
        ),
      },
      {
        name: "metaTitle",
        type: "text",
        placeholder: "e.g. Best Wireless Headphones 2024",
        label: "Meta Title",
      },
      {
        name: "metaDescription",
        type: "textarea",
        placeholder: "SEO friendly description",
        label: "Meta Description",
      },
    ],
    [
      categories,
      brands,
      tags,
      availableAttributes,
      taxes,
      shippingMethods.map,
      shippingMethods.find,
    ]
  );

  return (
    <EntityFormDialogExtended
      open={open}
      onOpenChange={onOpenChange}
      title="Product"
      description={
        initialValues
          ? "Update the details for your product."
          : "Create a new product for your shop."
      }
      fields={fields}
      validationSchema={productFormSchema}
      defaultValues={PRODUCT_FORM_DEFAULTS}
      initialValues={initialValues}
      onSubmit={(data) => {
        const status = (data as any).status || "active";
        onSubmit(data as ProductFormValues, status);
      }}
      isSubmitting={isSubmitting}
      contentClassName="sm:max-w-2xl max-h-[90vh] overflow-y-auto"
    />
  );
}
