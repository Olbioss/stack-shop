import type { PaginatedResponse } from "./api-response";

export type Shop = {
  id: string;
  slug: string;
  name: string;
  description: string;
  logo: string;
  banner: string;
  category: string;
  rating: number;
  totalProducts: number;
  totalOrders: number;
  monthlyRevenue: string;
  status: "active" | "pending";
};

export type ShopFormValues = {
  name: string;
  slug: string;
  description: string;
  logo: string | null;
  banner: string | null;
  address: string;
  phone: string;
  email: string;
  enableNotification: boolean;
};

export type StoreShop = {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  logo: string | null;
  banner: string | null;
  category: string | null;
  address: string | null;
  phone: string | null;
  email: string | null;
  status: string | null;
  rating: number;
  totalProducts: number;
  totalOrders: number;
  vendorName: string | null;
  createdAt: string;
};

export type StoreShopListResponse = PaginatedResponse<StoreShop>;

export type AdminShop = {
  id: string;
  vendorId: string;
  name: string;
  slug: string;
  description: string | null;
  logo: string | null;
  banner: string | null;
  category: string | null;
  address: string | null;
  phone: string | null;
  email: string | null;
  status: string | null;
  rating: string | null;
  monthlyRevenue: string | null;
  commissionRate: string;
  stripeConnectedAccountId: string | null;
  stripeOnboardingComplete: boolean;
  stripeChargesEnabled: boolean;
  stripePayoutsEnabled: boolean;
  totalProducts: number;
  totalOrders: number;
  customerCount: number;
  createdAt: string;
  updatedAt: string;
  vendorBusinessName: string | null;
  vendorStatus: string | null;
  ownerName: string | null;
  ownerEmail: string | null;
  ownerImage: string | null;
};

export type AdminShopListResponse = PaginatedResponse<AdminShop>;
export type AdminShopDetailResponse = { shop: AdminShop };
