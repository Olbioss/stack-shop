import { describe, expect, it } from "vitest";
import { resolveSignInRedirect, sanitizeRedirectTo } from "./auth-redirect";

describe("sanitizeRedirectTo", () => {
  it("keeps normal internal page paths", () => {
    expect(sanitizeRedirectTo("/checkout")).toBe("/checkout");
    expect(sanitizeRedirectTo("/products?page=2")).toBe("/products?page=2");
  });

  it("rejects serverFn RPC paths", () => {
    expect(sanitizeRedirectTo("/_serverFn/6dbf2ed035dcf8ef")).toBe("/");
    expect(sanitizeRedirectTo("/_serverFn/abc?payload=x")).toBe("/");
  });

  it("rejects external and protocol-relative URLs", () => {
    expect(sanitizeRedirectTo("https://evil.example.com")).toBe("/");
    expect(sanitizeRedirectTo("//evil.example.com")).toBe("/");
  });

  it("rejects empty values", () => {
    expect(sanitizeRedirectTo("")).toBe("/");
  });
});

describe("resolveSignInRedirect", () => {
  it("returns path + search for a page request", () => {
    const request = new Request("https://shop.example.com/wishlist?tab=all");
    expect(resolveSignInRedirect(request)).toBe("/wishlist?tab=all");
  });

  it("uses the same-origin referer for a serverFn RPC request", () => {
    const request = new Request(
      "https://shop.example.com/_serverFn/6dbf2ed035dcf8ef?payload=x",
      { headers: { referer: "https://shop.example.com/checkout?step=1" } }
    );
    expect(resolveSignInRedirect(request)).toBe("/checkout?step=1");
  });

  it("falls back to / for a serverFn RPC request without a referer", () => {
    const request = new Request(
      "https://shop.example.com/_serverFn/6dbf2ed035dcf8ef"
    );
    expect(resolveSignInRedirect(request)).toBe("/");
  });

  it("ignores a cross-origin referer on a serverFn RPC request", () => {
    const request = new Request(
      "https://shop.example.com/_serverFn/6dbf2ed035dcf8ef",
      { headers: { referer: "https://evil.example.com/checkout" } }
    );
    expect(resolveSignInRedirect(request)).toBe("/");
  });

  it("resolves relative request URLs against forwarded headers", () => {
    const request = {
      url: "/wishlist?tab=all",
      headers: new Headers({
        "x-forwarded-proto": "https",
        "x-forwarded-host": "shop.example.com",
      }),
    };
    expect(resolveSignInRedirect(request)).toBe("/wishlist?tab=all");
  });
});
