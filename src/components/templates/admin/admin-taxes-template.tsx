import TaxesTable from "#/components/containers/shared/taxes/tax-table";
import { ADMIN_TAX_PERMISSIONS } from "#/lib/config/tax-permissions";
import type { Taxes as Tax } from "#/types/taxes";
import TaxHeader from "@/components/containers/shared/taxes/tax-header";

interface AdminTaxesTemplateProps {
  taxes: Tax[];
  onAddTax: (data: Omit<Tax, "id" | "createdAt">) => void;
  onDeleteTax: (id: string) => void;
}

export default function AdminTaxesTemplate({
  taxes,
  onAddTax,
  onDeleteTax,
}: AdminTaxesTemplateProps) {
  return (
    <div className="flex flex-col gap-6">
      <TaxHeader role="admin" onAddTax={onAddTax} />
      <TaxesTable
        taxes={taxes}
        permissions={ADMIN_TAX_PERMISSIONS}
        onDeleteTax={onDeleteTax}
      />
    </div>
  );
}
