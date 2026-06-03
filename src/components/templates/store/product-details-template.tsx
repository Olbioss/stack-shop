import ProductBreadcrumb from "#/components/base/products/details/product-breadcrum";
import ProductDetailsTabs from "#/components/containers/store/product-detail/details-tabs";
import ProductMainSection from "#/components/containers/store/product-detail/main-section";
import SimilarProductsSection from "#/components/containers/store/product-detail/similar-products-section";
import type { StoreProduct } from "#/types/store-types";

type Props = {
  product: StoreProduct;
  similarProducts?: StoreProduct[];
};

export default function ProductDetailsTemplate({
  product,
  similarProducts,
}: Props) {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Store", href: "/store" },
    {
      label: product.categoryName || "Product",
      href: product.categoryId ? `/store?category=${product.categoryId}` : "#",
    },
    { label: product.name, href: `/store/product/${product.slug}` },
  ];
  return (
    <div className="@container container mx-auto @4xl:px-6 px-4 @5xl:py-12 py-8">
      <ProductBreadcrumb items={breadcrumbs} />

      <div className="space-y-16">
        <ProductMainSection product={product} />

        <ProductDetailsTabs product={product} />

        {similarProducts && similarProducts.length > 0 && (
          <SimilarProductsSection products={similarProducts} />
        )}
      </div>
    </div>
  );
}
