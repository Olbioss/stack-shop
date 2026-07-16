---
name: verify
description: Build, launch, and drive stack-shop locally to verify changes end-to-end (dev server, prod preview, Playwright flows)
---

# Verifying stack-shop changes

## Launch

- Dev: `bun run dev` (vite, port 3000). Prod-like: `bun run build`, then
  `set -a; source .env.local; set +a; bun run preview` (also port 3000).
  `.env.local` exists at the repo root and is required for DB access.
- Wait for readiness by polling `curl http://localhost:3000/` for a 200.

## Gotchas

- The server routes on `Sec-Fetch-Dest`: fetching a source module like
  `/src/lib/functions/store/address.ts` needs `-H "Sec-Fetch-Dest: script"`,
  otherwise you get the SSR'd 404 page. The transformed output contains the
  serverFn RPC id (base64 blob passed to `createClientRpc`), which you can
  curl directly as `/_serverFn/<id>` to test middleware behavior.
- Redirects thrown in auth middleware behave differently in dev vs prod
  builds when triggered from TanStack Query — verify redirect flows on the
  prod preview, not just dev.
- Product listing lives at `/product` (singular), not `/products`.
  A known seeded product detail page: `/product/prod_0526` (PowerBank).

## Driving flows (Playwright)

- Chromium via `bunx playwright@<version>`; headless shell may need
  `bunx playwright@<v> install chromium-headless-shell` once.
- Never `waitUntil: "networkidle"` — HMR/streams keep the network busy.
  Use `domcontentloaded` + explicit waits.
- Wait ~5s after load before clicking: clicks before React hydration are
  silently dropped. Confirm add-to-cart via the sonner toast
  (`[data-sonner-toast]`), retry the click if no toast.
- TanStack Form inputs ignore `page.fill()` (submit sees empty values);
  use `locator.pressSequentially()` instead.
- Test account (local DB): `claude-test@example.com` / `Test1234!x`.
  Create more via `POST /api/auth/sign-up/email` (no email verification).
