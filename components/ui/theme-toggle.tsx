"use client";

import * as React from "react";
import { Sun, Moon, Laptop } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { JSX } from "react";
import clsx from "clsx";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const themes: { name: "light" | "dark" | "system"; icon: JSX.Element }[] = [
    { name: "system", icon: <Laptop className="h-4 w-4" /> },
    { name: "light", icon: <Sun className="h-4 w-4" /> },
    { name: "dark", icon: <Moon className="h-4 w-4" /> },
  ];

  return (
    <div
      className={clsx(
        "inline-flex rounded-xl border p-1 bg-background",
        className,
      )}
    >
      {themes.map((t) => {
        const isActive = theme === t.name;
        return (
          <Button
            key={t.name}
            size="icon"
            variant={isActive ? "default" : "ghost"}
            onClick={() => setTheme(t.name)}
            className={`h-8 w-8 p-0 ${
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground"
            } cursor-pointer transition-colors duration-500`}
          >
            {t.icon}
          </Button>
        );
      })}
    </div>
  );
};