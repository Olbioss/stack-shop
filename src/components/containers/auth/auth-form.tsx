import { useForm } from "@tanstack/react-form";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { FieldInfo } from "#/components/base/common/field-info";
import { Form } from "#/components/base/forms/form";
import { FormTextField } from "#/components/base/forms/form-field";
import { Button } from "#/components/ui/button";
import { Checkbox } from "#/components/ui/checkbox";
import { Label } from "#/components/ui/label";
import { signIn, signUp, twoFactor } from "#/lib/auth-client";
import { loginSchema, registerSchema } from "#/lib/validators/auth";
import { TwoFactorForm } from "./two-factor-form";

type Props = {
  mode: "sign-in" | "sign-up";
  onSuccess?: () => void;
  includeSocial?: boolean;
  redirectUrl?: string;
};

export default function AuthForm({ mode, includeSocial, redirectUrl }: Props) {
  const [requires2FA, setRequires2FA] = useState(false);
  const navigate = useNavigate();

  const form = useForm({
    defaultValues:
      mode === "sign-in"
        ? { email: "", password: "", rememberMe: true }
        : { name: "", email: "", password: "", confirmPassword: "" },
    validators: {
      //@ts-expect-error
      onSubmit: mode === "sign-up" ? registerSchema : loginSchema,
    },
    onSubmit: async ({ value, formApi }) => {
      try {
        if (mode === "sign-in") {
          const res = await signIn.email({
            email: value.email,
            password: value.password,
            rememberMe: value.rememberMe,
          });

          if (res.error) {
            toast.error(res.error.message || "Sign in failed");
          } else if (
            res.data &&
            "twoFactorRedirect" in res.data &&
            res.data.twoFactorRedirect
          ) {
            // User has 2FA enabled - send OTP immediately
            try {
              const otpRes = await twoFactor.sendOtp({});
              if (otpRes.error) {
                console.error("Failed to send OTP:", otpRes.error);
                toast.error(
                  "Failed to send verification code. Please try again."
                );
                return;
              }
              toast.info("A verification code has been sent to your email");
            } catch (otpErr) {
              console.error("OTP send error:", otpErr);
              // Still show 2FA form even if OTP send fails - user can resend
            }
            setRequires2FA(true);
          } else {
            toast.success("Signed in successfully!");
            navigate({ to: redirectUrl });
          }
        } else {
          const { ...payload } = value;
          const res = await signUp.email({
            email: payload.email,
            password: payload.password,
            name: payload.name!,
          });

          if (res.error) {
            toast.error(res.error.message || "Sign up failed");
          } else {
            toast.success("Account created successfully!");
            navigate({ to: redirectUrl || "/" });
          }
        }
      } catch (error) {
        formApi.setErrorMap({
          // @ts-expect-error
          onSubmit:
            error instanceof Error ? error.message : "An error occurred",
        });
      }
    },
  });

  // Show 2FA verification form if required
  if (requires2FA) {
    return (
      <TwoFactorForm
        onCancel={() => setRequires2FA(false)}
        redirectUrl={redirectUrl}
      />
    );
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <Form form={form} className="space-y-6" noValidate>
        {mode === "sign-up" && (
          <form.Field
            name="name"
            children={(field) => (
              <>
                <FormTextField
                  label="Full Name"
                  field={field}
                  placeholder="John Doe"
                  autoComplete="name"
                  description="Your display name."
                  required
                />
                <FieldInfo field={field} />
              </>
            )}
          />
        )}

        <form.Field
          name="email"
          children={(field) => (
            <>
              <FormTextField
                label="Email"
                field={field}
                type="email"
                placeholder="johndoe@example.com"
                autoComplete="email"
                description={
                  mode === "sign-up"
                    ? "We'll never share your email."
                    : undefined
                }
                required
              />
              <FieldInfo field={field} />
            </>
          )}
        />

        <form.Field
          name="password"
          children={(field) => (
            <>
              <FormTextField
                label="Password"
                field={field}
                type="password"
                placeholder="Enter your password"
                autoComplete={
                  mode === "sign-in" ? "current-password" : "new-password"
                }
                description={
                  mode === "sign-up"
                    ? "Must be at least 8 characters long and include a mix of letters, numbers, and special characters."
                    : undefined
                }
                required
              />
              <FieldInfo field={field} />
            </>
          )}
        />

        {mode === "sign-up" && (
          <form.Field
            name="confirmPassword"
            children={(field) => (
              <>
                <FormTextField
                  label="Confirm Password"
                  field={field}
                  type="password"
                  placeholder="Confirm your password"
                  autoComplete="new-password"
                  required
                />
                <FieldInfo field={field} />
              </>
            )}
          />
        )}

        {mode === "sign-in" && (
          <form.Field
            name="rememberMe"
            children={(field) => (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id={field.name}
                    name={field.name}
                    checked={Boolean(field.state.value)}
                    onCheckedChange={(checked) =>
                      field.handleChange(checked === true)
                    }
                  />
                  <Label htmlFor={field.name}>Remember Me</Label>
                </div>
                {/* Link to forgot password when implemented */}
              </div>
            )}
          />
        )}
        <form.Subscribe
          selector={(state) => [state.errorMap]}
          children={([errorMap]) =>
            typeof errorMap.onSubmit === "string" ? (
              <p className="text-[0.8rem] font-medium text-destructive">
                {errorMap.onSubmit}
              </p>
            ) : null
          }
        />

        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <Button
              type="submit"
              disabled={!canSubmit}
              className="w-full"
              size="lg"
            >
              {isSubmitting
                ? "Please wait..."
                : mode === "sign-in"
                  ? "Sign In"
                  : "Create Account"}
            </Button>
          )}
        />
      </Form>

      {includeSocial && (
        <div className="space-y-3">
          <div className="relative">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                signIn.social({
                  provider: "github",
                  callbackURL: redirectUrl || "/",
                })
              }
              type="button"
            >
              GitHub
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                signIn.social({
                  provider: "google",
                  callbackURL: redirectUrl || "/",
                })
              }
              type="button"
            >
              Google
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
