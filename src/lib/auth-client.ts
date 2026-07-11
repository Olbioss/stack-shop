import { adminClient, twoFactorClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

// No baseURL: the auth API is same-origin, so the client defaults to
// window.location.origin. A build-time env value here breaks any deploy
// whose origin differs from the value baked into the bundle.
export const authClient = createAuthClient({
  plugins: [adminClient(), twoFactorClient()],
});

export const {
  signIn,
  signOut,
  signUp,
  useSession,
  getSession,
  admin,
  twoFactor,
} = authClient;
