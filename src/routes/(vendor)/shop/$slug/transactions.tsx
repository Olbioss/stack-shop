import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import ShopTransactionsTemplate from "#/components/templates/vendor/shop-transactions-template";
import { mockTransactions } from "#/data/transactions";
import type { Transaction } from "#/types/transaction";

export const Route = createFileRoute("/(vendor)/shop/$slug/transactions")({
  component: RouteComponent,
});

function RouteComponent() {
  const [transactions] = useState<Transaction[]>(mockTransactions);

  return <ShopTransactionsTemplate transactions={transactions} />;
}
