"use client";

import { InitializationMockProvider } from "@/components/providers/initialization-mock-provider";
import { ReactQueryProvider } from "@/components/providers/react-query-provider";
import NextThemeProvider from "@/components/providers/theme-provider";

export const Providers = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <ReactQueryProvider>
      <NextThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <InitializationMockProvider>{children}</InitializationMockProvider>
      </NextThemeProvider>
    </ReactQueryProvider>
  );
};
