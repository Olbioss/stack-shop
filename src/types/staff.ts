export type Staff = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "manager" | "staff";
  status: "active" | "invited" | "inactive";
  joinedDate: string;
  avatar?: string;
};

export type StaffPermissions = {
  canDelete: boolean;
  canEdit: boolean;
  canView: boolean;
  canCreate: boolean;
};

export type StaffFormValues = {
  name: string;
  email: string;
  role: "admin" | "manager" | "staff";
  status: "active" | "invited" | "inactive";
  avatar?: FileList | null;
};
