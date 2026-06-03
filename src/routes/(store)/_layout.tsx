import { createFileRoute, Outlet } from "@tanstack/react-router";
import Brand from "#/components/templates/store/brand";
import Footer from "#/components/templates/store/footer";
import Header from "@/components/base/common/header";
export const Route = createFileRoute("/(store)/_layout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Header />
      <Outlet />
      <Brand />
      <Footer />
    </>
  );
}
