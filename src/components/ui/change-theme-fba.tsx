"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function ChangeThemeFBA() {
  const [isMounted, setIsMounted] = useState(false);

  const theme = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const onClick = () => {
    if (theme.theme === "light") {
      theme.setTheme("dark");
    }

    if (theme.theme === "dark") {
      theme.setTheme("light");
    }

    if (
      theme.theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      theme.setTheme("light");
    }

    if (
      theme.theme === "system" &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
      theme.setTheme("dark");
    }
  };

  return (
    <div
      className="fixed right-8 bottom-8 animate-fade-up z-50"
      data-testid="change-theme-fba"
    >
      <div
        className={cn(
          "rounded-full bg-primary w-12 h-12 flex items-center justify-center border-foreground",
          theme.theme === "light" ? "border-0" : "border"
        )}
      >
        <Button
          data-testid="change-theme-fba-button"
          variant={"link"}
          size={"icon"}
          className="text-white"
          onClick={onClick}
        >
          {theme.theme === "light" ? <Moon size={30} /> : <Sun size={30} />}
        </Button>
      </div>
    </div>
  );
}
