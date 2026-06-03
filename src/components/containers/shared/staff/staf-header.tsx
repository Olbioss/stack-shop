import { createEntityHeader } from "@/components/base/common/entity-header";

export const StaffHeader = createEntityHeader({
  entityName: "Staff",
  entityNamePlural: "Staff",
  adminDescription: "Manage staff across the platform",
  vendorDescription: "Manage your staff",
});

export default StaffHeader;
export type { EntityHeaderProps as StaffHeaderProps } from "@/components/base/common/entity-header";
