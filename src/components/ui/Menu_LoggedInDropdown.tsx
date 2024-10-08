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
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function Menu_LoggedInDropdown({ session }: { session: SessionData }) {
  const shortname = session.username ? session.username.slice(0, 2) : "";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
            <AvatarFallback className="uppercase">{shortname}</AvatarFallback>
          </Avatar>
          <div className="flex-1 text-left">
            <div className="font-medium">{session.username}</div>
            <p className="text-xs text-muted-foreground">{session.email}</p>
          </div>
          <ChevronRight className="h-4 w-4" />
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
