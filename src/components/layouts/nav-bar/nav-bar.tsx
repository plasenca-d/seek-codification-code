import Image from "next/image";
import { UserInfo } from "./user-info";

export default function NavBar() {
  return (
    <nav className="bg-background flex justify-between items-center py-2">
      <div className="flex items-center gap-1">
        <Image src="/logo.png" alt="logo" width={60} height={60} />
        <div className="hidden md:block text-lg">Todo List App</div>
      </div>
      <div>
        <UserInfo />
      </div>
    </nav>
  );
}
