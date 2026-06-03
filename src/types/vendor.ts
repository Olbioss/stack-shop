export type VendorNavItem = {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string | number;
  items?: {
    title: string;
    href: string;
  }[];
};
