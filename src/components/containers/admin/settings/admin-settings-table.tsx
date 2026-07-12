import type { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import DataTable from "@/components/base/data-table/data-table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useAdminSettings } from "@/hooks/admin/use-admin-settings";

interface Setting {
  id: string;
  key: string;
  value: string;
  description: string;
  category: string;
  updatedAt: string;
}

interface AdminSettingsTableProps {
  data: Setting[];
}

export function AdminSettingsTable({ data }: AdminSettingsTableProps) {
  const { updateSetting, isUpdating } = useAdminSettings();
  const [editing, setEditing] = useState<Setting | null>(null);
  const [value, setValue] = useState("");

  const openEdit = useCallback((setting: Setting) => {
    setEditing(setting);
    setValue(setting.value);
  }, []);

  const handleSave = async () => {
    if (!editing) return;
    await updateSetting({ id: editing.id, value });
    setEditing(null);
  };

  const columns = useMemo<ColumnDef<Setting>[]>(
    () => [
      {
        accessorKey: "key",
        header: "Key",
        cell: ({ row }) => (
          <div className="font-mono text-sm">{row.getValue("key")}</div>
        ),
      },
      {
        accessorKey: "value",
        header: "Value",
        cell: ({ row }) => (
          <div className="max-w-40 truncate font-mono text-sm">
            {row.getValue("value")}
          </div>
        ),
      },
      {
        accessorKey: "description",
        header: "Description",
        cell: ({ row }) => (
          <div className="max-w-48 truncate text-muted-foreground text-sm">
            {row.getValue("description")}
          </div>
        ),
      },
      {
        accessorKey: "category",
        header: "Category",
        cell: ({ row }) => (
          <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 font-medium text-primary text-xs">
            {row.getValue("category")}
          </span>
        ),
      },
      {
        accessorKey: "updatedAt",
        header: "Updated",
        cell: ({ row }) => (
          <div className="text-sm">
            {new Date(row.getValue("updatedAt")).toLocaleDateString()}
          </div>
        ),
      },
      {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
          const setting = row.original;
          return (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onClick={() =>
                          navigator.clipboard.writeText(setting.key)
                        }
                      >
                        Copy Key
                      </DropdownMenuItem>
                      <DropdownMenuItem onSelect={() => openEdit(setting)}>
                        Edit
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TooltipTrigger>
                <TooltipContent>
                  <p>More options</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        },
      },
    ],
    [openEdit]
  );

  return (
    <>
      <DataTable
        columns={columns}
        data={data}
        globalFilterPlaceholder="Search settings..."
      />

      <Dialog
        open={!!editing}
        onOpenChange={(open) => !open && setEditing(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit setting</DialogTitle>
            <DialogDescription className="font-mono text-xs">
              {editing?.key}
            </DialogDescription>
          </DialogHeader>
          {editing?.description && (
            <p className="text-muted-foreground text-sm">
              {editing.description}
            </p>
          )}
          <div className="space-y-2">
            <Label htmlFor="setting-value">Value</Label>
            <Input
              id="setting-value"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSave();
              }}
            />
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setEditing(null)}
              disabled={isUpdating}
            >
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={isUpdating}>
              {isUpdating ? "Saving..." : "Save"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
