import { createFileRoute, Link } from "@tanstack/react-router";
import AuthForm from "#/components/containers/auth/auth-form";

export const Route = createFileRoute("/(auth)/sign-up")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="mx-auto w-full max-w-lg px-4 py-8">
      <div className="space-y-2 text-center">
        <h1 className="font-semibold text-2xl">Create your account</h1>
        <p className="text-muted-foreground text-sm">Sign up to get started.</p>
      </div>
      <div className="mt-6">
        <AuthForm mode="sign-up" includeSocial />
      </div>
      <p className="mt-4 text-center text-muted-foreground text-sm">
        Already have an account?{" "}
        <Link to="/sign-in" className="underline">
          Sign in
        </Link>
      </p>
      <p className="mt-2 text-center text-muted-foreground text-sm">
        Want to sell on our platform?{" "}
        <Link to="/vendor-sign-up" className="underline">
          Register as a Vendor
        </Link>
      </p>
    </div>
  );
}
