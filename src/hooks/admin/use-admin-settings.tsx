/**
 * Admin Settings Hook
 *
 * React Query hooks for platform settings: a query for the full list and a
 * mutation to update a single setting's value.
 */
import {
  queryOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";
import { getSettings, updateSetting } from "@/lib/functions/admin/settings";

export const adminSettingsKeys = {
  all: ["admin", "settings"] as const,
  list: () => [...adminSettingsKeys.all, "list"] as const,
};

export const settingsQueryOptions = () =>
  queryOptions({
    queryKey: adminSettingsKeys.list(),
    queryFn: () => getSettings(),
  });

export const useAdminSettings = () => {
  const queryClient = useQueryClient();

  const updateSettingMutation = useMutation({
    mutationFn: ({ id, value }: { id: string; value: string }) =>
      updateSetting({ data: { id, value } }),
    onSuccess: (result) => {
      toast.success(result.message || "Setting updated");
      queryClient.invalidateQueries({ queryKey: adminSettingsKeys.all });
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to update setting");
    },
  });

  return {
    settingsQueryOptions,
    updateSetting: updateSettingMutation.mutateAsync,
    isUpdating: updateSettingMutation.isPending,
    updatingId: updateSettingMutation.isPending
      ? (updateSettingMutation.variables?.id ?? null)
      : null,
  };
};
