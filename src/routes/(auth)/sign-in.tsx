import { createFileRoute, Link } from "@tanstack/react-router";
import { fallback, zodSearchValidator } from "@tanstack/router-zod-adapter";
import z from "zod";
import AuthForm from "#/components/containers/auth/auth-form";
import { sanitizeRedirectTo } from "#/lib/utils/auth-redirect";

const signInSearchSchema = z.object({
  redirectTo: fallback(z.string().transform(sanitizeRedirectTo), "/").default(
    "/"
  ),
});

export const Route = createFileRoute("/(auth)/sign-in")({
  validateSearch: zodSearchValidator(signInSearchSchema),
  component: RouteComponent,
});

function RouteComponent() {
  const { redirectTo } = Route.useSearch();

  return (
    <div className="mx-auto w-full max-w-lg px-4 py-8">
      <div className="space-y-2 text-center">
        <h1 className="font-semibold text-2xl">Sign in to your account</h1>
        <p className="text-muted-foreground text-sm">
          Welcome back. Please enter your details.
        </p>
      </div>
      <div className="mt-6">
        <AuthForm mode="sign-in" includeSocial redirectUrl={redirectTo} />
      </div>
      <p className="mt-4 text-center text-muted-foreground text-sm">
        Don't have an account?{" "}
        <Link to="/sign-up" className="underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
