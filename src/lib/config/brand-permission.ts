import type { BrandPermissions } from "#/types/brands";

export const ADMIN_BRAND_PERMISSIONS: BrandPermissions = {
  canDelete: true,
  canEdit: true,
  canView: true,
};

export const USER_BRAND_PERMISSIONS: BrandPermissions = {
  canDelete: false,
  canEdit: true,
  canView: true,
};
