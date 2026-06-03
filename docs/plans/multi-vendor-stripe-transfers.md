# Plan: Multi-Vendor Payout via Stripe Separate Charges & Transfers

## Problem

`src/lib/functions/store/order.ts` (`createCheckoutSession`) only pays vendors
when the cart is **single-vendor** — it uses a Stripe **destination charge**,
which can route to exactly one connected account.

For a multi-vendor cart (`!isSingleVendor`) the code falls through to a plain
`createPaymentIntent` charged to the **platform account**. `connectedAccountId`
and `applicationFeeAmount` stay `null` on every `payments` row, and **no funds
ever reach the vendors** — the platform keeps 100%.

The correct Stripe pattern for splitting one payment across N vendors is
**separate charges and transfers**: take one platform charge, then issue one
`Transfer` per vendor to their connected account after the payment succeeds.

## What already exists (reused, not created)

- `payments` table (`src/lib/db/schema/order-schema.ts`) already has the
  tracking columns: `stripeTransferId`, `connectedAccountId`,
  `applicationFeeAmount`. **No migration needed.**
- One `orders` row + one `payments` row is created **per shop** already, so a
  multi-vendor payout is naturally per-order — each `payments` row gets its own
  transfer.
- `vendors` table has `stripeConnectedAccountId`, `stripeChargesEnabled`,
  `stripePayoutsEnabled`, `commissionRate`.
- `createdOrders: { id, total, shopId }[]` in `createCheckoutSession` already
  carries the per-shop total needed to size each transfer.
- `confirmPayment` server fn already verifies the PaymentIntent succeeded and
  iterates orders — the natural hook point for triggering transfers.

## Design

### 1. `transfer_group` on the platform charge
A `Transfer` is associated to its originating charge via a shared
`transfer_group` string. The multi-vendor `createPaymentIntent` call must set
one so transfers and the charge are linked for reporting/reconciliation.

- Use a stable group id, e.g. `checkout_<sortedOrderIds joined>` or a generated
  `cuid`. Persist it (orders/payments `metadata`) so the transfer step can read
  it back.

### 2. New helper: `createTransfer` in `src/lib/stripe/connect.ts`
```ts
export async function createTransfer(
  amountInCents: number,
  currency: string,
  destinationAccountId: string,
  transferGroup: string,
  metadata?: Record<string, string>,
  idempotencyKey?: string,
): Promise<Stripe.Transfer> {
  if (!stripe) throw new Error("Stripe is not configured");
  return stripe.transfers.create(
    {
      amount: Math.round(amountInCents),
      currency: currency.toLowerCase(),
      destination: destinationAccountId,
      transfer_group: transferGroup,
      metadata,
    },
    idempotencyKey ? { idempotencyKey } : undefined,
  );
}
```
Transfers draw from the platform's available balance; no `source_transaction`
needed when separate-charges-and-transfers is used.

### 3. Checkout: store per-order fee + group, defer the transfer
In `createCheckoutSession`, the `!isSingleVendor` branch should still compute
each order's commission **at checkout time** so the transfer step is a pure
read:

- Build a `transferGroup` string; pass it to `createPaymentIntent` (add a
  `transferGroup` param to `createPaymentIntent` in `src/lib/stripe/index.ts`).
- For each `createdOrders` entry: look up the shop's vendor, compute
  `applicationFeeAmount = order.total * commissionRate`.
- Insert each `payments` row with `applicationFeeAmount` set and
  `connectedAccountId` = the vendor's account (so the transfer step has
  everything). Leave `stripeTransferId` null — it is filled when the transfer
  fires. Store `transferGroup` in `payments.metadata`.
- Vendors **without** `stripeConnectedAccountId` / `stripePayoutsEnabled`: leave
  `connectedAccountId` null → no transfer, platform retains funds (flag for
  manual payout or later onboarding).

### 4. Execute transfers after payment succeeds
Add a `disburseMultiVendorTransfers(orderIds)` step, called from
`confirmPayment` after orders are marked `paid`:

For each order's `payments` row:
- Skip if `stripeTransferId` is already set (**idempotency** — also pass a
  deterministic `idempotencyKey`, e.g. `transfer_<paymentId>`).
- Skip if `connectedAccountId` is null (vendor not onboarded).
- `transferAmount = amount - applicationFeeAmount` (decide explicitly whether
  shipping & the 5% tax go to the vendor or the platform — see Open Questions).
- Call `createTransfer(...)`, then update the `payments` row with
  `stripeTransferId` and `status` tracking.
- Wrap per-order so one vendor's failure doesn't abort the rest;
  collect failures and surface/log them.

### 5. (Recommended) Move the trigger to the webhook
`confirmPayment` runs only if the client calls it. The robust source of truth
is the Stripe webhook on `payment_intent.succeeded`. `src/routes/api/webhooks/
stripe.ts` currently only verifies the signature and discards the event.
Phase 2: parse the event, resolve `orderIds` from PaymentIntent metadata, and
call the same `disburseMultiVendorTransfers` (idempotent, so safe alongside
`confirmPayment`).

## Files

| File | Change |
|------|--------|
| `src/lib/stripe/connect.ts` | Add `createTransfer` helper |
| `src/lib/stripe/index.ts` | Add optional `transferGroup` param to `createPaymentIntent` |
| `src/lib/functions/store/order.ts` | Multi-vendor branch: compute per-order fee, set `transferGroup`, populate `payments` rows; add `disburseMultiVendorTransfers`; call it from `confirmPayment` |
| `src/routes/api/webhooks/stripe.ts` | Phase 2: handle `payment_intent.succeeded` → disburse |

## Verification

1. `bunx tsc --noEmit -p tsconfig.json` — no new errors.
2. Stripe test mode, multi-vendor cart with 2 connected test accounts:
   - one platform PaymentIntent created with a `transfer_group`;
   - after `confirmPayment`, each `payments` row has a `stripeTransferId`;
   - each connected account's balance increases by `total - commission`;
   - platform retains the summed commissions.
3. Re-running `confirmPayment` / webhook does **not** create duplicate
   transfers (idempotency).
4. A vendor with no connected account → its order produces no transfer and is
   flagged, the rest still pay out.

## Open Questions

- **Shipping & tax split** — does the vendor receive shipping + the 5% tax, or
  only product subtotal minus commission? Current single-vendor destination
  charge takes commission on `grandTotal` (everything); mirror that unless
  product wants otherwise.
- **Refunds** — multi-vendor refunds must also reverse the transfer
  (`stripe.transfers.createReversal`); out of scope here, note as follow-up.
- **Negative transfer guard** — if commission ≥ order total (heavy coupon),
  clamp transfer to ≥ 0 and skip zero transfers.
- **Platform balance timing** — transfers need available platform balance;
  in test mode this is immediate, in live mode consider the funds-availability
  delay.
