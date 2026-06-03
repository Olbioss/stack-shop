import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import AdminSettingsTemplate from "#/components/templates/admin/admin-settings-template";
import { mockSettings } from "#/data/settings";
import type { Setting } from "#/types/settings";

export const Route = createFileRoute("/(admin)/admin/settings")({
  component: RouteComponent,
});

function RouteComponent() {
  const [settings] = useState<Setting[]>(mockSettings);

  return <AdminSettingsTemplate settings={settings} />;
}
