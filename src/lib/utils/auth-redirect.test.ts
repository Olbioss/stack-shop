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

  it("unwraps a nested sign-in URL to its inner target", () => {
    expect(sanitizeRedirectTo("/sign-in?redirectTo=%2Fcheckout")).toBe(
      "/checkout"
    );
    expect(sanitizeRedirectTo("/sign-in?redirectTo=/checkout")).toBe(
      "/checkout"
    );
  });

  it("collapses double-nested sign-in URLs", () => {
    expect(
      sanitizeRedirectTo(
        "/sign-in?redirectTo=%2Fsign-in%3FredirectTo%3D%252Fcheckout"
      )
    ).toBe("/checkout");
  });

  it("maps auth pages without an inner target to /", () => {
    expect(sanitizeRedirectTo("/sign-in")).toBe("/");
    expect(sanitizeRedirectTo("/sign-up")).toBe("/");
  });

  it("still sanitizes the unwrapped inner value", () => {
    expect(sanitizeRedirectTo("/sign-up?redirectTo=/_serverFn/abc")).toBe("/");
    expect(sanitizeRedirectTo("/sign-in?redirectTo=//evil.example.com")).toBe(
      "/"
    );
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

  it("unwraps a sign-in-page referer instead of nesting it", () => {
    // A retried guarded query fires while the user already sits on the
    // sign-in page — the redirect target must stay the inner page.
    const request = new Request(
      "https://shop.example.com/_serverFn/6dbf2ed035dcf8ef",
      {
        headers: {
          referer: "https://shop.example.com/sign-in?redirectTo=%2Fcheckout",
        },
      }
    );
    expect(resolveSignInRedirect(request)).toBe("/checkout");
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
