import { createFileRoute } from "@tanstack/react-router";
import AdminTenantDetailsTemplate from "#/components/templates/admin/tenants/admin-tenant-details-template";
import { mockTenantDetails } from "#/data/tenants";

export const Route = createFileRoute("/(admin)/admin/tenants/$tenantId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { tenantId } = Route.useParams();

  // In a real app, fetch tenant details based on tenantId
  // const tenant = useTenant(tenantId);
  const tenant = { ...mockTenantDetails, id: tenantId };

  return <AdminTenantDetailsTemplate tenant={tenant} />;
}
