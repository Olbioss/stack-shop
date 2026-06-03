export type Review = {
  id: string;
  productName: string;
  productImage: string;
  customerName: string;
  customerAvatar?: string;
  rating: number;
  comment: string;
  date: string;
  status: "published" | "pending" | "rejected";
};

export type ReviewPermissions = {
  canDelete: boolean;
  canEdit: boolean;
  canView: boolean;
  canUpdateStatus: boolean;
};

export type ReviewFormValues = {
  productName: string;
  customerName: string;
  customerAvatar?: FileList | null;
  rating: number;
  comment: string;
  status: "published" | "pending" | "rejected";
};
