import { z } from "zod";

export const updateSettingSchema = z.object({
  id: z.string().min(1, "Setting id is required"),
  value: z.string(),
});

export type UpdateSettingInput = z.infer<typeof updateSettingSchema>;
