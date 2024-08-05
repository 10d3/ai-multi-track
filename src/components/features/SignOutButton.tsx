"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PropsWithChildren } from "react";
import { DollarSign, LogOut, Settings, Shield, User } from "lucide-react";
import Link from "next/link";
import { signOutAction } from "./auth.action";

export type SignOutButtonProps = PropsWithChildren;

export const SignOutButton = (props: SignOutButtonProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{props.children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link
            className="flex flex-row gap-1 items-center"
            href="/home/profile"
          >
            <User size={15} /> Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            className="flex flex-row gap-1 items-center"
            href="/home/profile"
          >
            <DollarSign size={15} /> Billing
          </Link>
        </DropdownMenuItem>
        {/* <DropdownMenuItem>Team</DropdownMenuItem> */}
        <DropdownMenuItem>
          <Link
            className="flex flex-row gap-1 items-center"
            href="/home/settings"
          >
            <Settings size={15} />
            Settings
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            signOutAction();
          }}
        >
          <LogOut size={15} className="mr-2" />
          sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
