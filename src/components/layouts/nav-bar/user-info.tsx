"use client";

import Image from "next/image";

import { ChevronDown } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/session";
import { useAuthStore } from "@/features/auth/presentation/store/useAuth";

export const UserInfo = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="flex flex-row gap-2 items-center">
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col ">
          <span className="font-bold">{user?.name || "No name"}</span>
          <span className="text-sm">{user?.email || "No email"}</span>
        </div>
        <Avatar>
          <AvatarImage src="" />
          <AvatarFallback>
            <Image
              src="/profile-default.svg"
              alt="default profile"
              width={60}
              height={60}
            />
          </AvatarFallback>
        </Avatar>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <ChevronDown className="h-5 w-5" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Button onClick={() => signOut()}>Cerrar sesión</Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
