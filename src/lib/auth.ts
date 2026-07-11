import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { admin, twoFactor } from "better-auth/plugins";
import { tanstackStartCookies } from "better-auth/tanstack-start";
import { db } from "./db";
import {
  account,
  session,
  twoFactor as twoFactorSchema,
  user,
  verification,
} from "./db/schema/auth-schema";
import { sendEmail } from "./email";
import OtpEmail from "./emails/otp-email";

export const auth = betterAuth({
  // Origin used to build OAuth redirect_uri ({baseURL}/api/auth/callback/{provider}).
  // Must match the callback URLs registered in the GitHub/Google consoles.
  baseURL: process.env.BETTER_AUTH_URL,

  // App name for TOTP issuer
  basePath: "/api/auth",

  appName: "Shop Stack",

  user: {
    additionalFields: {
      role: {
        type: "string",
        required: false,
        defaultValue: "customer",
      },
      orderEmailsEnabled: {
        type: "boolean",
        required: false,
        defaultValue: true,
      },
    },
  },

  // Security-related configuration
  // Use a deterministic dev secret if env is missing to prevent runtime errors
  secret: process.env.BETTER_AUTH_SECRET ?? "dev-secret",
  trustedOrigins: [
    process.env.VITE_BETTER_AUTH_URL,
    process.env.BETTER_AUTH_URL,
    // Vercel preview deployments get a unique origin per deploy
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined,
  ].filter((origin): origin is string => Boolean(origin)),
  emailAndPassword: {
    enabled: true,
    disableSignUp: false,
    requireEmailVerification: false,
    minPasswordLength: 8,
    maxPasswordLength: 128,
    autoSignIn: true,
  },
  advanced: {
    useSecureCookies: process.env.NODE_ENV === "production",
    defaultCookieAttributes: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    },
    disableCSRFCheck: false,
    ipAddress: {
      // Ensure rate limit/session IP tracking works behind proxies/CDNs if applicable
      ipAddressHeaders: ["x-forwarded-for", "cf-connecting-ip"],
    },
  },
  // Built-in rate limiting
  rateLimit: {
    enabled: true,
    window: 60,
    max: 100,
    // Use in-memory storage to avoid missing DB tables in dev
    storage: "memory",
    // Apply stricter limits to sensitive endpoints
    customRules: {
      "/sign-in/email": { window: 10, max: 3 },
      "/sign-up/email": { window: 10, max: 3 },
    },
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  plugins: [
    admin({ defaultRole: "customer" }),
    twoFactor({
      skipVerificationOnEnable: true,
      otpOptions: {
        async sendOTP({ user, otp }) {
          console.log("=== sendOTP called===");
          console.log("User email:", user.email);
          console.log("OTP code:", otp);
          try {
            const res = await sendEmail({
              to: user.email,
              subject: "Your OTP Code",
              body: OtpEmail({
                otp,
                userName: user.name || user.email || "User",
                expiresInMinutes: 5,
              }),
            });
            console.log("Email sent successfully! Message ID:", res.messageId);
          } catch (err) {
            console.error("Failed to send OTP email:", err);
            throw new Error("Failed to send verification code.");
          }
        },
      },
    }),
    tanstackStartCookies(),
  ],

  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      user,
      account,
      session,
      verification,
      twoFactor: twoFactorSchema,
    },
  }),
});
