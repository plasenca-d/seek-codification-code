"use client";

import NextThemeProvider from "@/components/providers/theme-provider";

export const Providers = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemeProvider>
  );
};
