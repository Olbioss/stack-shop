import type { Category } from "#/types/category-types";
import CategoryCardGrid from "./category-card-grid";
import CategoryCardList from "./category-card-list";

type Props = {
  category: Category;
  variant?: "default" | "compact" | "featured" | "list";
  className?: string;
  showProductCount?: boolean;
};

export default function CategoryCard({
  category,
  variant = "default",
  className,
  showProductCount = true,
}: Props) {
  const isList = variant === "list";

  if (isList) {
    return (
      <CategoryCardList
        category={category}
        className={className}
        showProductCount={showProductCount}
      />
    );
  }
  return (
    <CategoryCardGrid
      category={category}
      variant={variant as "default" | "compact" | "featured"}
      className={className}
      showProductCount={showProductCount}
    />
  );
}
