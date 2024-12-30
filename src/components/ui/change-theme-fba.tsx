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
  };

  return (
    <div className="absolute right-8 bottom-8 animate-fade-up z-50">
      <div
        className={cn(
          "rounded-full bg-primary w-12 h-12 flex items-center justify-center border-foreground",
          theme.theme === "light" ? "border-0" : "border"
        )}
      >
        <Button
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
