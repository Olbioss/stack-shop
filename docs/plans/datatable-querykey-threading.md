# Thread a Real Query Key Through `DataTable` → `useServerPagination`

## Context

The current implementation invalidates the categories table by calling `queryClient.invalidateQueries({ queryKey: ["datatable", "shop"] })` from `useCategoryMutations` (`src/hooks/vendor/use-category.tsx:76-80`). This works today but is brittle:

- `"shop"` is a hardcoded literal in two unrelated files. If `category-table.tsx:59` changes `context="shop"` to anything else, invalidation silently stops working with no compile error.
- The mutation hook reaches into `useServerPagination`'s internal cache-key shape. Future changes to that hook (renaming the prefix from `"datatable"`, adding a new dimension to the key) break the mutation hook from a distance.

The goal: let the consumer of `DataTable` provide its own scope `queryKey`. The route, which already owns `shopId`, supplies `["vendor", "categories", shopId]`. The existing `invalidateQueries({ queryKey: ["vendor", "categories", shopId] })` in `useCategoryMutations` (`use-category.tsx:73-75`) then matches the table's cache by prefix automatically — no extra invalidation call needed.

Outcome: the `["datatable", "shop"]` line in `use-category.tsx` goes away. Cross-file coupling on the literal `"shop"` disappears. The pattern stays available for any other entity table to opt into.

## Approach

Add an optional `queryKey?: QueryKey` to `DataTableServer<TData>`. When provided, `useServerPagination` builds its `useQuery` cache key as `[...queryKey, params]`; otherwise it falls back to the current `["datatable", context, params]`. Change `createVendorCategoriesFetcher` to return a `DataTableServer<NormalizedCategory>` object (both `fetcher` and `queryKey`) instead of a bare fetcher function. Rename the `fetcher` prop on the template + table to `server` so it passes the whole object through. The route passes `server={server}` down. Remove the now-redundant `["datatable", "shop"]` invalidation from the mutation hook.

### Files to modify

1. `src/components/base/data-table/types.ts`
2. `src/hooks/common/use-server-pagination.tsx`
3. `src/components/base/data-table/data-table.tsx`
4. `src/hooks/vendor/use-vendor-entity-fetcher.ts`
5. `src/components/templates/vendor/shop-categories-template.tsx`
6. `src/components/containers/shared/categories/category-table.tsx`
7. `src/routes/(vendor)/shop/$slug/categories.tsx`
8. `src/hooks/vendor/use-category.tsx`

### Changes

**1. `src/components/base/data-table/types.ts` — extend `DataTableServer<TData>`**

Add an optional `queryKey` field. Import `QueryKey` from `@tanstack/react-query`.

```ts
import type { QueryKey } from "@tanstack/react-query";

export interface DataTableServer<TData> {
  fetcher: (
    params: DataTableFetchParams
  ) => Promise<DataTableFetchResult<TData>>;
  /**
   * Optional scope key used as a prefix for the internal React Query cache key.
   * Lets callers invalidate this table from outside by matching the same prefix.
   * Falls back to ["datatable", context] when omitted.
   */
  queryKey?: QueryKey;
}
```

**2. `src/hooks/common/use-server-pagination.tsx` — accept and use the optional `queryKey`**

Update the options type and the `useQuery` call:

```ts
export type UseServerPaginationOptions<TData> = {
  fetcher: (
    params: DataTableFetchParams
  ) => Promise<DataTableFetchResult<TData>>;
  initialPageSize?: number;
  context?: DataTableContext;
  queryKey?: QueryKey;
};

export function useServerPagination<TData>({
  fetcher,
  initialPageSize = 10,
  context,
  queryKey,
}: UseServerPaginationOptions<TData>) {
  // ... existing state and params setup unchanged ...

  const query = useQuery<DataTableFetchResult<TData>>({
    queryKey: queryKey
      ? [...queryKey, params]
      : ["datatable", context, params],
    queryFn: () => fetcher(params),
    placeholderData: (prev) => prev,
  });

  // ... rest unchanged ...
}
```

Import `QueryKey` from `@tanstack/react-query`.

**3. `src/components/base/data-table/data-table.tsx` — forward `server.queryKey` to `useServerPagination`**

At lines 36-46, pass `queryKey: server?.queryKey`:

```ts
const {
  // ... existing destructure ...
} = useServerPagination<TData>({
  fetcher:
    server?.fetcher ??
    (async () => ({
      rows: clientData ?? [],
      pageCount: 1,
      total: clientData?.length ?? 0,
    })),
  initialPageSize,
  context,
  queryKey: server?.queryKey,
});
```

**4. `src/hooks/vendor/use-vendor-entity-fetcher.ts` — return a `DataTableServer<NormalizedCategory>` object**

Change the return type and shape of `createVendorCategoriesFetcher`:

```ts
import type { DataTableServer } from "#/components/base/data-table/types";

export function createVendorCategoriesFetcher(
  shopId: string
): DataTableServer<NormalizedCategory> {
  return {
    fetcher: createServerFetcher<NormalizedCategory, any>({
      fetchFn: async (query) => {
        const response = await getCategories({ data: { ...query, shopId } });
        return { data: response.data ?? [], total: response.total ?? 0 };
      },
      sortFieldMap: { name: "name", level: "level", createdAt: "createdAt" },
      filterFieldMap: { isActive: "isActive", featured: "featured" },
      defaultQuery: { sortBy: "sortOrder", sortDirection: "asc" },
      transformFilters: booleanFilterTransform,
    }),
    queryKey: ["vendor", "categories", shopId],
  };
}
```

The `queryKey` here matches the prefix already used by `useCategoryMutations.invalidateCategories()` at `use-category.tsx:73-75`, so invalidation will catch it automatically once routed through `useServerPagination`.

**5. `src/components/templates/vendor/shop-categories-template.tsx` — rename `fetcher` prop to `server`**

```ts
import type { DataTableServer } from "#/components/base/data-table/types";

interface ShopCategoriesTemplateProps {
  server: DataTableServer<NormalizedCategory>;
  // ... other props unchanged ...
}

export default function ShopCategoriesTemplate({
  server,
  onAddCategory,
  // ...
}: ShopCategoriesTemplateProps) {
  return (
    <div className="space-y-6">
      <CategoryHeader onAddCategory={onAddCategory} />
      <VendorCategoryTable
        server={server}
        // ...
      />
    </div>
  );
}
```

**6. `src/components/containers/shared/categories/category-table.tsx` — `VendorCategoryTable` accepts `server` instead of `fetcher`**

```ts
import type { DataTableServer } from "#/components/base/data-table/types";

interface VendorCategoryTableProps extends CategoryTableActions {
  server: DataTableServer<NormalizedCategory>;
  // ...
}

export function VendorCategoryTable({
  server,
  // ...
}: VendorCategoryTableProps) {
  // ... existing useMemo blocks unchanged ...
  return (
    <DataTable
      columns={columns}
      server={server}
      context="shop"
      initialPageSize={10}
      filterableColumns={filterableColumns}
      globalFilterPlaceholder="Search categories..."
      className={className}
    />
  );
}
```

The `context="shop"` line can stay — it now only affects the fallback queryKey (which is no longer used for this table) and any future fetcher that wants to know the context. Leaving it preserves backward compat for unrelated logic.

**7. `src/routes/(vendor)/shop/$slug/categories.tsx` — rename local var and prop name**

At lines 27-30:

```ts
const server = useMemo(
  () => createVendorCategoriesFetcher(shopId),
  [shopId]
);
```

At line 107:

```tsx
<ShopCategoriesTemplate
  server={server}
  // ... rest unchanged ...
/>
```

**8. `src/hooks/vendor/use-category.tsx` — drop the temp datatable invalidation**

At lines 72-81, revert `invalidateCategories` back to its original two-line form (the datatable-prefix invalidation is no longer needed because the table's cache key now lives under the `["vendor", "categories", shopId]` prefix):

```ts
const invalidateCategories = () => {
  queryClient.invalidateQueries({
    queryKey: ["vendor", "categories", shopId],
  });
};
```

### Why this is safe for other consumers

- `DataTable` in client mode (`<DataTable data={...}>` without `server`) is unaffected — `useServerPagination` only runs the query when a fetcher is provided, and `queryKey` is optional.
- The only existing server-mode DataTable in the codebase is the categories table (verified via grep on `server={{`). So there are no other consumers to migrate.
- `categoriesQueryOptions` (`use-category.tsx:34-39`) still uses `["vendor", "categories", params.shopId, params]` for the suspense query feeding the parent-dropdown — and that key also has prefix `["vendor", "categories", shopId]`, so the same single `invalidateCategories()` call now correctly invalidates both the dropdown query AND the table query.

## Critical files

- `src/components/base/data-table/types.ts:24-28` — `DataTableServer<TData>` to extend.
- `src/hooks/common/use-server-pagination.tsx:15-21,46-51` — options type and `useQuery` call.
- `src/components/base/data-table/data-table.tsx:21-46` — wire `server.queryKey` through.
- `src/hooks/vendor/use-vendor-entity-fetcher.ts:17-32` — return shape change (factory).
- `src/components/templates/vendor/shop-categories-template.tsx:10-19,29-40` — prop rename.
- `src/components/containers/shared/categories/category-table.tsx:16-23,55-65` — prop rename + `server` pass-through.
- `src/routes/(vendor)/shop/$slug/categories.tsx:27-30,107` — consumer.
- `src/hooks/vendor/use-category.tsx:72-81` — drop the temp invalidation.

## Verification

1. **Type check**: `bunx tsc --noEmit -p tsconfig.json`. Expect no new errors. Files that didn't compile before this change (e.g. `category-query-helper.ts` with the missing `products` import) will still be broken, but the touched files should be clean.

2. **Manual: create**: Run the dev server, sign in as a vendor owning `new-store`, navigate to `http://localhost:3000/shop/new-store/categories`. Click "Add category", fill the form, submit. The new row should appear in the table without a browser reload, and the success toast should fire.

3. **Manual: update**: Edit an existing category's name and submit — the row should update in place.

4. **Manual: delete**: Delete a category, confirm — the row should disappear and `total` should decrement.

5. **Cache check (React Query Devtools)**: Confirm there is a cache entry under `["vendor", "categories", "<shopId>", { pageIndex: 0, ... }]` (i.e. with `params` appended). After a mutation, that entry should flip from `fresh` → `stale` → `fetching` → `success`. Confirm that NO entry exists under `["datatable", ...]` for this table anymore.

6. **Pagination preserved**: On page 2 of the table, create a category — should remain on page 2 after refetch.

7. **Other DataTables**: If any other page in the app uses `<DataTable data={...}>` (client mode), verify it still renders normally — the changes only affect the server-mode code path.
