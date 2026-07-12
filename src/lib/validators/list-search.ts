import { z } from "zod";

/**
 * Search params for dashboard list pages. `search` seeds the DataTable's
 * global filter, so the command palette can deep-link into a filtered list
 * (e.g. /admin/orders?search=ORD-123).
 */
export const listSearchSchema = z.object({
  search: z.string().optional(),
});

export type ListSearch = z.infer<typeof listSearchSchema>;
