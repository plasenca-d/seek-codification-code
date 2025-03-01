import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import { Providers } from "./providers";
import "./globals.css";
import ChangeThemeFBA from "@/components/ui/change-theme-fba";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Todo List App",
  description: "Todo List App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
          <ChangeThemeFBA />
        </Providers>
      </body>
    </html>
  );
}
