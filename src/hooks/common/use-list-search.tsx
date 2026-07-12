import { useSearch } from "@tanstack/react-router";

/**
 * Reads the `?search=` param from the current route to seed a DataTable's
 * global filter. Returns "" on routes that don't define the param, so it's
 * safe to call from any list table.
 */
export function useListSearch(): string {
  return useSearch({
    strict: false,
    select: (search) => (search as { search?: string }).search ?? "",
  });
}
