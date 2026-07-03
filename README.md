# Stack Shop

A multi-vendor e-commerce platform built on TanStack Start. One deployment serves three areas: a customer storefront, a per-shop vendor dashboard, and a platform admin panel — backed by Postgres (Drizzle ORM), Better Auth, and Stripe.

## Features

**Storefront** (`/`)
- Browse products by category, brand, tag, and store; product detail pages with variants (attributes), images, and reviews
- Cart, wishlist, and coupon support
- Stripe-powered checkout, order confirmation, order history, and order tracking
- Customer profile, addresses, and "my reviews"

**Vendor dashboard** (`/shop/$slug`)
- Vendor sign-up and onboarding; each vendor manages one or more shops
- Products (with attributes, images via Uploadcare, tags, shipping methods), orders and per-order detail, transactions
- Shop-level catalogs: categories, brands, tags, attributes, taxes, coupons, shipping
- Staff management with granular per-resource permissions, notifications, reviews, shop settings

**Admin panel** (`/admin`)
- Platform-wide management: tenants (vendors), users, staff, products, orders, transactions, coupons, reviews, categories/brands/tags/attributes, taxes, settings

**Platform**
- Better Auth authentication: email/password plus Google and GitHub OAuth, two-factor auth, and role-based access (customer by default, vendor, admin) enforced by route middleware
- Stripe payments with a webhook endpoint (`/api/webhooks/stripe`); multi-vendor transfer design lives in `docs/plans/`
- Transactional email with React Email templates sent through Brevo SMTP (Nodemailer)
- Server-side rendering and server functions via TanStack Start + Nitro (deployable to Vercel)

## Tech stack

- **Framework**: TanStack Start (React 19, SSR, file-based routing) with TanStack Router, Query, Form, and Table
- **Database**: Neon Postgres + Drizzle ORM (schema per domain in `src/lib/db/schema/`)
- **Auth**: Better Auth (admin + two-factor plugins, Google/GitHub social login)
- **Payments**: Stripe (server SDK + React Stripe.js)
- **UI**: Tailwind CSS 4, shadcn/ui (Radix), Recharts, sonner, Zustand
- **Files/Email**: Uploadcare (product images), React Email + Nodemailer (Brevo)
- **Tooling**: Bun, Vite, Biome (lint/format), Vitest + Testing Library

## Project structure

```
src/
├── routes/
│   ├── (store)/        # storefront: home, product, category, store, cart,
│   │                   # checkout, orders, wishlist, reviews, profile
│   ├── (vendor)/       # vendor dashboard under /shop/$slug + /dashboard
│   ├── (admin)/        # admin panel under /admin
│   ├── (auth)/         # sign-in, sign-up, vendor-sign-up
│   └── api/            # Better Auth handler, Stripe webhook
├── components/         # ui / base / containers / templates
├── hooks/              # data hooks split by area: store, vendor, admin, common
├── lib/
│   ├── db/             # Drizzle schema, migrations, seed script
│   ├── functions/      # TanStack server functions
│   ├── config/         # per-resource staff permission definitions
│   ├── middleware/     # auth/role guards
│   ├── emails/         # React Email templates
│   ├── stripe/         # Stripe helpers
│   └── validators/     # Zod schemas
└── data/               # seed data (seeding.json)
```

## Getting started

### Prerequisites

- [Bun](https://bun.sh)
- A [Neon](https://neon.tech) Postgres database (any Postgres connection string works)
- Stripe, Uploadcare, and Brevo accounts for payments, image uploads, and email
- Google / GitHub OAuth apps if you want social login

### 1. Configure environment

```bash
cp .env.example .env.local
```

Fill in: `DATABASE_URL`, `BETTER_AUTH_SECRET` (+ `BETTER_AUTH_URL` / `VITE_BETTER_AUTH_URL`, default `http://localhost:3000`), `GOOGLE_*` / `GITHUB_*` OAuth credentials, `STRIPE_SECRET_KEY` / `STRIPE_WEBHOOK_SECRET` / `VITE_STRIPE_PUBLISHABLE_KEY`, `VITE_UPLOADCARE_PUBLIC_KEY`, and the `BREVO_*` SMTP settings.

### 2. Install, migrate, seed

```bash
bun install
bun run db:migrate   # apply Drizzle migrations
bun run db:seed      # sample shops, products, categories, etc.
```

### 3. Run

```bash
bun run dev          # http://localhost:3000
```

For Stripe webhooks locally:

```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

## Scripts

| Command | Description |
|---|---|
| `bun run dev` | Dev server on port 3000 |
| `bun run build` / `bun run preview` | Production build / preview |
| `bun run test` | Vitest run |
| `bun run lint` / `format` / `check` | Biome |
| `bun run db:generate` | Generate a migration from schema changes |
| `bun run db:migrate` / `db:push` / `db:pull` | Apply / push / pull schema |
| `bun run db:studio` | Drizzle Studio |
| `bun run db:seed` | Seed sample data |

## Documentation

Design notes and implementation plans live in `docs/plans/` (e.g. multi-vendor Stripe transfers, data-table query-key threading).
