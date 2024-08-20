"use client";
import { Button } from "@/components/ui/shad-cn/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/shad-cn/dropdown-menu";
import { SessionData } from "@/lib/lib";
import { handleLogout } from "@/lib/utils/utils";
import Link from "next/link";

export function Menu_Dropdown({ session }: { session: SessionData }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="capitalize">
          {session.username}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <MenuItemWithHover
            link="/dashboard/settings/profile"
            name="Profile"
          />
          <MenuItemWithHover
            link="/dashboard/settings/preferences"
            name="Preferences"
          />
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <MenuItemWithHover
            link="/dashboard/users"
            name="All Users"
          ></MenuItemWithHover>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="hover:cursor-pointer"
          onClick={handleLogout}
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function MenuItemWithHover({
  link,
  name,
}: {
  link: string;
  name: string;
}) {
  return (
    <Link href={link}>
      <DropdownMenuItem className="hover:cursor-pointer">
        {name}
      </DropdownMenuItem>
    </Link>
  );
}
