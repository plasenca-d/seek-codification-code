import { Loader } from "@/components/layouts/loader";
import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Loader />
    </div>
  );
}
