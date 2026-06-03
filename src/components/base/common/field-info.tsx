import type { FieldApi } from "@tanstack/react-form";

// @ts-expect-error
export function FieldInfo({ field }: { field: FieldApi<any, any, any, any> }) {
  const { errors, isTouched } = field.state.meta;

  if (!isTouched || !errors.length) return null;

  // @ts-expect-error
  const messages = errors.map((err) =>
    typeof err === "string"
      ? err
      : // Zod + tanstack/zod-form-adapter typically put the text on `message`
        ((err as { message?: string }).message ?? JSON.stringify(err))
  );

  return (
    <p className="text-[0.8rem] font-medium text-destructive">
      {messages.join(", ")}
    </p>
  );
}
