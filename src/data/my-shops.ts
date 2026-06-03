export type ShopStatus = "active" | "pending" | "inactive";

export type Shop = {
  id: string;
  vendorId: string;
  slug: string;
  name: string;
  description: string;
  logo: string;
  banner: string;
  category: string;
  address: string | null;
  phone: string | null;
  email: string | null;
  enableNotifications: boolean;
  monthlyRevenue: string;
  status: ShopStatus;
  rating: string;
  totalProducts: number;
  totalOrders: number;
  createdAt: Date;
  updatedAt: Date;
};

export const mockShops: Shop[] = [
  {
    id: "1",
    vendorId: "v1",
    slug: "tech-gadgets-store",
    name: "Tech Gadgets Store",
    description:
      "Your one-stop shop for the latest tech gadgets and accessories",
    logo: "",
    banner: "",
    category: "Electronics",
    address: null,
    phone: null,
    email: null,
    enableNotifications: false,
    monthlyRevenue: "$12,450",
    status: "active",
    rating: "4.8",
    totalProducts: 156,
    totalOrders: 342,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    vendorId: "v1",
    slug: "fashion-hub",
    name: "Fashion Hub",
    description: "Trendy fashion items for men and women",
    logo: "",
    banner: "",
    category: "Fashion",
    address: null,
    phone: null,
    email: null,
    enableNotifications: false,
    monthlyRevenue: "$8,230",
    status: "active",
    rating: "4.6",
    totalProducts: 89,
    totalOrders: 198,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    vendorId: "v1",
    slug: "home-essentials",
    name: "Home Essentials",
    description: "Everything you need for your home",
    logo: "",
    banner: "",
    category: "Home & Garden",
    address: null,
    phone: null,
    email: null,
    enableNotifications: false,
    monthlyRevenue: "$6,890",
    status: "pending",
    rating: "4.9",
    totalProducts: 67,
    totalOrders: 156,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
