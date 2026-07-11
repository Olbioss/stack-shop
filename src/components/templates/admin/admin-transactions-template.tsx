import { CheckCircle2, DollarSign, Percent, TrendingUp } from "lucide-react";
import type { DataTableServer } from "#/components/base/data-table/types";
import { AdminTransactionsTable } from "#/components/containers/admin/transactions/admin-transactions-table";
import TransactionHeader from "#/components/containers/shared/transactions/transaction-header";
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card";
import { formatCurrency } from "#/lib/utils";
import type {
  AdminTransactionResponse,
  AdminTransactionStats,
} from "@/types/transaction";

interface AdminTransactionsTemplateProps {
  server: DataTableServer<AdminTransactionResponse>;
  stats?: AdminTransactionStats;
}

export default function AdminTransactionsTemplate({
  server,
  stats,
}: AdminTransactionsTemplateProps) {
  return (
    <div className="flex flex-col gap-6">
      <TransactionHeader role="admin" />

      {stats && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="font-medium text-sm">
                Total Revenue
              </CardTitle>
              <TrendingUp className="size-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="font-bold font-mono text-2xl text-success">
                {formatCurrency(stats.totalRevenue)}
              </div>
              <p className="text-muted-foreground text-xs">Last 30 days</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="font-medium text-sm">
                Platform Fees
              </CardTitle>
              <Percent className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="font-bold font-mono text-2xl">
                {formatCurrency(stats.platformFees)}
              </div>
              <p className="text-muted-foreground text-xs">Last 30 days</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="font-medium text-sm">
                Vendor Payouts
              </CardTitle>
              <DollarSign className="size-4 text-info" />
            </CardHeader>
            <CardContent>
              <div className="font-bold font-mono text-2xl">
                {formatCurrency(stats.vendorPayouts)}
              </div>
              <p className="text-muted-foreground text-xs">Net payouts</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="font-medium text-sm">
                Transactions
              </CardTitle>
              <CheckCircle2 className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="font-bold font-mono text-2xl">
                {stats.totalTransactions}
              </div>
              <p className="text-muted-foreground text-xs">
                {stats.successfulTransactions} successful
              </p>
            </CardContent>
          </Card>
        </div>
      )}

      <div className="rounded-md">
        <AdminTransactionsTable server={server} />
      </div>
    </div>
  );
}
