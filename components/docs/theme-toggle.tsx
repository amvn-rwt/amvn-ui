"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useHydrated, useTheme } from "@wrksz/themes/client";

import { Button } from "@/components/ui/button";
import { playSound } from "@/lib/sounds";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useHydrated();

  const isDark = resolvedTheme === "dark";

  function handleToggle() {
    const nextTheme = isDark ? "light" : "dark";
    playSound(nextTheme === "light" ? "themeOn" : "themeOff");
    setTheme(nextTheme);
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label={
        !mounted
          ? "Toggle theme"
          : isDark
            ? "Switch to light mode"
            : "Switch to dark mode"
      }
      onClick={handleToggle}
    >
      {mounted ? (
        isDark ? (
          <SunIcon />
        ) : (
          <MoonIcon />
        )
      ) : (
        <MoonIcon className="opacity-0" />
      )}
    </Button>
  );
}
