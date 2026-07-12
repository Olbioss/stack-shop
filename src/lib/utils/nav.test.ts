import { describe, expect, it } from "vitest";
import { resolveActiveNavHref } from "./nav";

// Shop sidebar hrefs: "Overview" is the base, everything else nests under it.
const shopHrefs = [
  "/shop/acme",
  "/shop/acme/products",
  "/shop/acme/coupons",
  "/shop/acme/orders",
];

describe("resolveActiveNavHref", () => {
  it("marks the Overview (index) item active on the base route", () => {
    expect(resolveActiveNavHref("/shop/acme", shopHrefs)).toBe("/shop/acme");
  });

  it("does not keep Overview active on nested routes", () => {
    expect(resolveActiveNavHref("/shop/acme/products", shopHrefs)).toBe(
      "/shop/acme/products"
    );
    expect(resolveActiveNavHref("/shop/acme/coupons", shopHrefs)).toBe(
      "/shop/acme/coupons"
    );
  });

  it("keeps the parent item active on a detail sub-route", () => {
    expect(resolveActiveNavHref("/shop/acme/orders/ord-123", shopHrefs)).toBe(
      "/shop/acme/orders"
    );
  });

  it("returns null when nothing matches", () => {
    expect(resolveActiveNavHref("/dashboard", shopHrefs)).toBeNull();
  });
});
