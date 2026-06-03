import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import AdminTenantsTemplate from "#/components/templates/admin/tenants/admin-tenants-template";
import { mockTenants } from "#/data/tenants";
import type { AdminTenant } from "#/types/tenant";

export const Route = createFileRoute("/(admin)/admin/tenants/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [tenants] = useState<AdminTenant[]>(mockTenants);

  return <AdminTenantsTemplate tenants={tenants} />;
}
