import { LoaderCircle } from "lucide-react";

export function Loader() {
  return (
    <div className="flex items-center justify-center">
      <LoaderCircle className="mr-2 h-6 w-6 animate-spin" />
    </div>
  );
}
