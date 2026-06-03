import type { DataTableServer } from "#/components/base/data-table/types";
import TaxHeader from "#/components/containers/shared/taxes/tax-header";
import { TaxTable } from "#/components/containers/shared/taxes/tax-table";
import type { TaxMutationState } from "#/components/containers/shared/taxes/tax-table-columns";
import type { TaxRateItem } from "@/types/taxes";

interface ShopTaxesTemplateProps {
  server: DataTableServer<TaxRateItem>;
  onAddTax?: () => void;
  onEdit?: (taxRate: TaxRateItem) => void;
  onDelete?: (taxRate: TaxRateItem) => void;
  onToggleActive?: (id: string) => void;
  mutationState?: TaxMutationState;
  isTaxMutating?: (id: string) => boolean;
  showAddButton?: boolean;
}

export default function ShopTaxesTemplate({
  server,
  onAddTax,
  onEdit,
  onDelete,
  onToggleActive,
  mutationState,
  isTaxMutating,
  showAddButton = true,
}: ShopTaxesTemplateProps) {
  return (
    <div className="space-y-6">
      <TaxHeader onAdd={onAddTax} role="vendor" showAddButton={showAddButton} />
      <TaxTable
        server={server}
        onEdit={onEdit}
        onDelete={onDelete}
        onToggleActive={
          onToggleActive ? (taxRate) => onToggleActive(taxRate.id) : undefined
        }
        mutationState={mutationState}
        isMutating={isTaxMutating}
        mode="vendor"
      />
    </div>
  );
}
