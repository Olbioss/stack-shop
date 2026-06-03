export type Transaction = {
  id: string;
  trackingNumber: string;
  totalPrice: string;
  productPrice: string;
  deliveryFee: string;
  taxableAmount: string;
  discount: string;
  paymentGateway: string;
  paymentStatus: "paid" | "pending" | "failed" | "refunded";
  date: string;
};

export type TransactionPermissions = {
  canView: boolean;
  canEdit: boolean;
  canDelete: boolean;
  canRefund: boolean;
};
