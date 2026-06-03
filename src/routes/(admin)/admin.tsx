import { createFileRoute, Outlet } from "@tanstack/react-router";
import AdminDashboardLayout from "#/components/templates/admin/admin-dashboard-layout";
import { adminMiddleware } from "#/lib/middleware/admin";

export const Route = createFileRoute("/(admin)/admin")({
  server: {
    middleware: [adminMiddleware],
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AdminDashboardLayout>
      <Outlet />
    </AdminDashboardLayout>
  );
}
