import UserHeader from "#/components/containers/shared/users/user-header";
import UserTable from "#/components/containers/shared/users/user-table";
import { ADMIN_USER_PERMISSIONS } from "@/lib/config/user-permissions";
import type { User, UserFormValues } from "@/types/users";

type Props = {
  users: User[];
  onAddUser: (data: UserFormValues) => void;
  onDeleteUser: (userId: string) => void;
};

export default function AdminUsersTemplate({
  users,
  onAddUser,
  onDeleteUser,
}: Props) {
  return (
    <div className="space-y-6">
      <UserHeader onAddUser={onAddUser} role="admin" />
      <UserTable
        users={users}
        permissions={ADMIN_USER_PERMISSIONS}
        onDeleteUser={onDeleteUser}
      />
    </div>
  );
}
