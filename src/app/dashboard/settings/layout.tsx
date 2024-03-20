"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/shad-cn/card";
import { handleLogout } from "@/lib/utils/utils";
import { CircleUser, Settings, LogOut } from "lucide-react";
import Link from "next/link";
import { MouseEventHandler } from "react";
import { ReactNode } from "react";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full">
      <Card className="backdrop flex w-full flex-col rounded-lg border-slate-200 shadow-md md:w-[780px] md:flex-row lg:w-[1040px]">
        <CardHeader className="backdrop w-full rounded-t-lg border-slate-200 bg-primary p-5 md:w-[200px] md:rounded-bl-lg md:p-7">
          <CardTitle className="text-white">Settings</CardTitle>
          <CardDescription className="border-b border-slate-700 pb-4">
            Your preferences
          </CardDescription>
          <CardDescription>
            <ul className="text-md bold my-4 flex flex-row gap-5 font-medium text-white md:flex-col">
              <li>
                <MenuLink link="/dashboard/settings/profile">
                  <CircleUser strokeWidth={1.25} size={20} /> Profile
                </MenuLink>
              </li>
              <li>
                <MenuLink link="/dashboard/settings/preferences">
                  <Settings strokeWidth={1.25} size={20} /> Preferences
                </MenuLink>
              </li>
            </ul>
          </CardDescription>
          <CardDescription className="border-t border-slate-700 pt-4 font-medium text-white">
            <MenuLink link={handleLogout}>
              <LogOut strokeWidth={1.25} size={20} /> Logout
            </MenuLink>
          </CardDescription>
        </CardHeader>
        <div className="min-h-[200px] p-4 md:p-7">{children}</div>
      </Card>
    </section>
  );
}

// Utlity Menulink component
function MenuLink({
  children,
  link,
}: {
  children: ReactNode;
  link: string | MouseEventHandler<HTMLAnchorElement>;
}) {
  if (typeof link === "string") {
    return (
      <Link
        href={link}
        className="flex flex-row items-center gap-2 hover:text-slate-300"
      >
        {children}
      </Link>
    );
  } else {
    return (
      <a
        onClick={link}
        className="flex flex-row items-center gap-2 hover:text-slate-300"
        href="#"
      >
        {children}
      </a>
    );
  }
}
