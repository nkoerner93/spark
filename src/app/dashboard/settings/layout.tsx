import { Button } from "@/components/ui/shad-cn/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/shad-cn/card";
import { CircleUser, Settings } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Card className="backdrop flex w-[350px] flex-row border-slate-200 shadow-md md:w-[780px]">
        <CardHeader className="backdrop w-[200px] rounded border-r border-slate-200 bg-primary">
          <CardTitle className="text-white">Settings</CardTitle>
          <CardDescription>Your preferences</CardDescription>
          <CardDescription>
            <ul className="text-md bold mt-4 flex flex-col gap-3 font-medium text-white">
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
        </CardHeader>
        <div className="p-4">{children}</div>
      </Card>
    </section>
  );
}

// Utlity Menulink component
function MenuLink({ children, link }: { children: ReactNode; link: string }) {
  return (
    <Link
      href={link}
      className="flex flex-row items-center gap-2 hover:text-slate-300"
    >
      {children}
    </Link>
  );
}
