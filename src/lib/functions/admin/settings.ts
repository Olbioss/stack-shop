/**
 * Settings Server Functions (Admin)
 *
 * Platform-wide key/value configuration. `getSettings` lazily inserts the
 * default set on first read so the admin page is populated without a re-seed.
 */

import { createServerFn } from "@tanstack/react-start";
import { asc, eq } from "drizzle-orm";
import { DEFAULT_SETTINGS } from "#/lib/constants/settings";
import { db } from "#/lib/db";
import { settings } from "#/lib/db/schema/settings-schema";
import { adminMiddleware } from "#/lib/middleware/admin";
import { updateSettingSchema } from "#/lib/validators/settings";

export const getSettings = createServerFn({ method: "GET" })
  .middleware([adminMiddleware])
  .handler(async () => {
    // Idempotently ensure the defaults exist; never overwrites edited values.
    await db
      .insert(settings)
      .values(DEFAULT_SETTINGS)
      .onConflictDoNothing({ target: settings.key });

    const rows = await db
      .select()
      .from(settings)
      .orderBy(asc(settings.category), asc(settings.key));

    return {
      settings: rows.map((row) => ({
        id: row.id,
        key: row.key,
        value: row.value,
        description: row.description ?? "",
        category: row.category,
        updatedAt: row.updatedAt.toISOString(),
      })),
    };
  });

export const updateSetting = createServerFn({ method: "POST" })
  .middleware([adminMiddleware])
  .inputValidator(updateSettingSchema)
  .handler(async ({ data }) => {
    const { id, value } = data;

    const [updated] = await db
      .update(settings)
      .set({ value })
      .where(eq(settings.id, id))
      .returning({ id: settings.id, key: settings.key });

    if (!updated) throw new Error("Setting not found");

    return { success: true, message: `Updated ${updated.key}` };
  });
