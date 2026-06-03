import CategoryTree from "#/components/base/store/category/category-tree";
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card";
import { categoryTree } from "#/data/categories";

export default function SidebarCategoryTree() {
  const allCategories = categoryTree; // In a real app, you might want to fetch all categories or build a tree

  return (
    <Card>
      <CardHeader>
        <CardTitle>Browse Categories</CardTitle>
      </CardHeader>
      <CardContent>
        <CategoryTree categories={allCategories} />
      </CardContent>
    </Card>
  );
}
