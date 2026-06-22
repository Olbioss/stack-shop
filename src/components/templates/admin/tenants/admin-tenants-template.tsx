import type { DataTableServer } from "#/components/base/data-table/types";
import AdminTenantTable from "#/components/containers/admin/tenant/admin-tenant-table";
import PageHeader from "@/components/base/common/page-header";
import type { AdminTenant } from "@/types/tenant";

interface AdminTenantsTemplateProps {
  server: DataTableServer<AdminTenant>;
}

export default function AdminTenantsTemplate({
  server,
}: AdminTenantsTemplateProps) {
  return (
    <>
      <PageHeader
        title="Tenants"
        description="Manage all registered shops and vendors"
      />

      <AdminTenantTable server={server} />
    </>
  );
}
