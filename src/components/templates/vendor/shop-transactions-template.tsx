import { CheckCircle2, Clock, Percent, TrendingUp } from "lucide-react";
import type { DataTableServer } from "#/components/base/data-table/types";
import TransactionHeader from "#/components/containers/shared/transactions/transaction-header";
import VendorTransactionTable from "#/components/containers/shared/transactions/vendor-transaction-table";

import { formatCurrency } from "#/lib/utils";
import type { VendorTransactionResponse } from "#/types/transaction";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface VendorTransactionStats {
  totalEarnings: number;
  pendingEarnings: number;
  platformFeesPaid: number;
  totalTransactions: number;
  successfulTransactions: number;
  pendingTransactions: number;
  refundedTransactions: number;
}

interface ShopTransactionsTemplateProps {
  server: DataTableServer<VendorTransactionResponse>;
  stats?: VendorTransactionStats;
  shopSlug: string;
}

export default function ShopTransactionsTemplate({
  server,
  stats,
}: ShopTransactionsTemplateProps) {
  return (
    <div className="space-y-6">
      <TransactionHeader />

      {/* Stats Cards */}
      {stats && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="font-medium text-sm">
                Total Earnings
              </CardTitle>
              <TrendingUp className="size-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="font-bold font-mono text-2xl text-success">
                {formatCurrency(stats.totalEarnings)}
              </div>
              <p className="text-muted-foreground text-xs">Last 30 days</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="font-medium text-sm">
                Pending Earnings
              </CardTitle>
              <Clock className="size-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="font-bold font-mono text-2xl">
                {formatCurrency(stats.pendingEarnings)}
              </div>
              <p className="text-muted-foreground text-xs">
                {stats.pendingTransactions} pending transaction(s)
              </p>
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
                {formatCurrency(stats.platformFeesPaid)}
              </div>
              <p className="text-muted-foreground text-xs">Last 30 days</p>
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

      {/* Transaction Table */}
      <div className="rounded-md">
        <VendorTransactionTable server={server} />
      </div>
    </div>
  );
}
