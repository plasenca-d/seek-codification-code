import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Login",
  description: "Login",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
