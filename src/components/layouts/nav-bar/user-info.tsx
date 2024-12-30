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

export const UserInfo = () => {
  return (
    <div className="flex flex-row gap-2 items-center">
      <Avatar>
        <AvatarImage src="https://picsum.photos/200/300" />
        <AvatarFallback>
          <Image
            src="/profile-default.svg"
            alt="default profile"
            width={60}
            height={60}
          />
        </AvatarFallback>
      </Avatar>
      <div className="">
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
    </div>
  );
};
