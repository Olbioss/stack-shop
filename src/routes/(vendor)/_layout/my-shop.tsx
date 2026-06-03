import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { MyShopsPageSkeleton } from "#/components/base/vendor/skeleton/shop-card-skeleton";
import { AddShopDialog } from "#/components/containers/shared/shops/add-shop-dialog";
import MyShopsTemplate from "#/components/templates/vendor/my-shops-template";
import { useEntityCRUD } from "#/hooks/common/use-entity-crud";
import { useShops, vendorShopsQueryOptions } from "#/hooks/vendor/use-shops";
import type { ShopFormValues } from "#/types/shop";

export const Route = createFileRoute("/(vendor)/_layout/my-shop")({
  component: RouteComponent,
  loader: async ({ context }) => {
    await context.queryClient.ensureQueryData(vendorShopsQueryOptions());
    return {};
  },
  pendingComponent: MyShopsPageSkeleton,
});

function RouteComponent() {
  const { createShop, isCreating } = useShops();
  const { data } = useSuspenseQuery(
    vendorShopsQueryOptions({ filterByVendor: true })
  );
  const { shops: transformedShops, vendorId } = data;

  const {
    isDialogOpen,
    setIsDialogOpen,
    handleAdd: handleAddShop,
    handleDialogClose,
  } = useEntityCRUD({
    onDelete: async (id) => {
      // Implement delete logic here, e.g., call a mutation to delete the shop
      console.log("Delete shop with ID:", id);
    },
  });

  const handleShopSubmit = async (data: ShopFormValues) => {
    try {
      await createShop({
        name: data.name,
        slug: data.slug,
        description: data.description,
        logo: typeof data.logo === "string" ? data.logo : undefined,
        banner: typeof data.banner === "string" ? data.banner : undefined,
        address: data.address,
        phone: data.phone,
        email: data.email,
        enableNotifications: data.enableNotification,
      });
      handleDialogClose();
    } catch (err) {
      console.error("Failed to create shop:", err);
    }
  };
  return (
    <>
      <MyShopsTemplate
        shops={transformedShops}
        onCreateShop={handleAddShop}
        currentVendorId={vendorId}
      />

      <AddShopDialog
        open={isDialogOpen}
        onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) handleDialogClose();
        }}
        onSubmit={handleShopSubmit}
        isSubmitting={isCreating}
      />
    </>
  );
}
