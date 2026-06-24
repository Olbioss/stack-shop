import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import ShopReviewsTemplate from "#/components/templates/vendor/shop-reviews-template";
import { createVendorReviewsFetcher } from "#/hooks/vendor/use-vendor-entity-fetcher";

export const Route = createFileRoute("/(vendor)/shop/$slug/reviews")({
  component: RouteComponent,
});

function RouteComponent() {
  const { slug } = Route.useParams();
  const server = useMemo(() => createVendorReviewsFetcher(slug), [slug]);

  return <ShopReviewsTemplate server={server} shopSlug={slug} />;
}
