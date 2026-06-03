import { createFileRoute } from "@tanstack/react-router";
import Collections from "#/components/templates/store/homepage/collections";
import CtaBanner from "#/components/templates/store/homepage/cta-banner";
import FeatureGrid from "#/components/templates/store/homepage/feature-grid";
import Hero from "#/components/templates/store/homepage/hero";

export const Route = createFileRoute("/(store)/_layout/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeatureGrid />
      <Collections />
      <CtaBanner />
    </div>
  );
}
