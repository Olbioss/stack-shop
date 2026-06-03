import TransactionsHeader from "#/components/containers/vendor/transactions/transactions-header";
import TransactionsTable from "#/components/containers/vendor/transactions/transactions-table";
import type { Transaction } from "@/types/transaction";

interface ShopTransactionsTemplateProps {
  transactions: Transaction[];
}

export default function ShopTransactionsTemplate({
  transactions,
}: ShopTransactionsTemplateProps) {
  return (
    <div className="space-y-6">
      <TransactionsHeader />
      <TransactionsTable transactions={transactions} />
    </div>
  );
}
