"use client";
import { getSession } from "@/app/actions/actions";
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
    <section className="mx-auto mt-20 w-full max-w-screen-2xl p-4 md:w-auto">
      <Card className="backdrop flex w-full flex-col rounded-lg border-slate-200 shadow-md md:flex-row">
        <CardHeader className="backdrop w-full rounded-t-lg rounded-bl-lg border-slate-200 bg-primary p-5 md:p-7">
          <CardTitle className="text-secondary">Settings</CardTitle>
          <CardDescription className="border-b border-slate-700 pb-4">
            Your preferences
          </CardDescription>
          <CardDescription>
            <ul className="text-md bold my-4 flex flex-row gap-5 font-medium text-secondary md:flex-col">
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
          <CardDescription className="border-t border-slate-700 pt-4 font-medium text-secondary">
            <MenuLink link={handleLogout}>
              <LogOut strokeWidth={1.25} size={20} /> Logout
            </MenuLink>
          </CardDescription>
        </CardHeader>
        <div className="min-h-[300px] min-w-[450px] p-4 md:p-7">{children}</div>
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
        className="flex flex-row items-center gap-2 hover:text-secondary"
      >
        {children}
      </Link>
    );
  } else {
    return (
      <a
        onClick={link}
        className="flex flex-row items-center gap-2 hover:text-secondary"
        href="#"
      >
        {children}
      </a>
    );
  }
}
