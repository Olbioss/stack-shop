import { Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "#/components/ui/button";
import PageHeader from "@/components/base/common/page-header";
import type { UserFormValues } from "@/types/users";
import { AddUserDialog } from "./add-user-dialog";

export interface UserHeaderProps {
  onAddUser?: (data: UserFormValues) => void;
  role?: "admin" | "vendor";
  showAddButton?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export default function UserHeader({
  onAddUser,
  role = "vendor",
  showAddButton = true,
  children,
  className,
}: UserHeaderProps) {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const handleAddUser = (data: UserFormValues) => {
    onAddUser?.(data);
  };

  return (
    <PageHeader
      title="Users"
      description={
        role === "admin"
          ? "Manage platform users and customers"
          : "Manage your shop's customers and users"
      }
      className={className}
    >
      {children}
      {showAddButton && (
        <Button onClick={() => setIsAddDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      )}
      <AddUserDialog
        open={isAddDialogOpen}
        onOpenChange={setIsAddDialogOpen}
        onSubmit={handleAddUser}
      />
    </PageHeader>
  );
}
