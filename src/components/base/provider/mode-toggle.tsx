import { Monitor, Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-provider";

const ORDER = ["light", "dark", "system"] as const;

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  // Single click cycles light -> dark -> system so "system" (follow the OS)
  // stays reachable without a dropdown.
  const cycle = () => {
    const index = ORDER.indexOf(theme as (typeof ORDER)[number]);
    setTheme(ORDER[(index + 1) % ORDER.length]);
  };

  const Icon = theme === "dark" ? Moon : theme === "system" ? Monitor : Sun;
  const label =
    theme === "dark" ? "Dark" : theme === "system" ? "System" : "Light";

  return (
    <Button
      variant="outline"
      size="icon"
      type="button"
      onClick={cycle}
      aria-label={`Theme: ${label}. Click to change.`}
      title={`Theme: ${label}`}
    >
      <Icon className="size-[1.2rem]" />
      <span className="sr-only">Toggle theme (current: {label})</span>
    </Button>
  );
}
