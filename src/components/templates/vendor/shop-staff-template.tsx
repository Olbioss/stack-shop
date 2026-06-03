import StaffHeader from "#/components/containers/shared/staff/staf-header";
import StaffTable from "#/components/containers/shared/staff/staff-table";
import { VENDOR_STAFF_PERMISSIONS } from "#/lib/config/staff-permissions";
import type { Staff } from "@/types/staff";

interface ShopStaffTemplateProps {
  staff: Staff[];
  onAddStaff?: () => void;
  onEditStaff?: (staffId: string) => void;
  onDeleteStaff?: (staffId: string) => void;
}

export default function ShopStaffTemplate({
  staff,
  onAddStaff,
  onEditStaff,
  onDeleteStaff,
}: ShopStaffTemplateProps) {
  return (
    <div className="space-y-6">
      <StaffHeader
        role="vendor"
        onAdd={onAddStaff}
        showAddButton={!!onAddStaff}
      />
      <StaffTable
        staff={staff}
        permissions={VENDOR_STAFF_PERMISSIONS}
        onEditStaff={onEditStaff}
        onDeleteStaff={onDeleteStaff}
      />
    </div>
  );
}
