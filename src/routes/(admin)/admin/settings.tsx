import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { PageSkeleton } from "#/components/base/common/page-skeleton";
import AdminSettingsTemplate from "#/components/templates/admin/admin-settings-template";
import { settingsQueryOptions } from "#/hooks/admin/use-admin-settings";

export const Route = createFileRoute("/(admin)/admin/settings")({
  component: RouteComponent,
  pendingComponent: PageSkeleton,
});

function RouteComponent() {
  const { data } = useSuspenseQuery(settingsQueryOptions());

  return <AdminSettingsTemplate settings={data.settings} />;
}
