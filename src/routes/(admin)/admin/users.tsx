import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import AdminUsersTemplate from "#/components/templates/admin/admin-users-template";
import { mockUsers } from "#/data/users";
import type { User, UserFormValues } from "#/types/users";

export const Route = createFileRoute("/(admin)/admin/users")({
  component: RouteComponent,
});

function RouteComponent() {
  const [users, setUsers] = useState<User[]>(mockUsers);

  const handleAddUser = (data: UserFormValues) => {
    const newUser: User = {
      ...data,
      id: String(users.length + 1),
      avatar: `https://placehold.co/40?text=${data.name
        .split(" ")
        .map((n) => n[0])
        .join("")}`,
      totalOrders: 0,
      totalSpent: "$0.00",
      createdAt: new Date(),
    };
    setUsers([...users, newUser]);
  };

  const handleDeleteUser = (id: string) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <AdminUsersTemplate
      users={users}
      onAddUser={handleAddUser}
      onDeleteUser={handleDeleteUser}
    />
  );
}
