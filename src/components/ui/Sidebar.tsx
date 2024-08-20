import Link from "next/link";
import { Button } from "@/components/ui/shad-cn/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/shad-cn/dropdown-menu";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/shad-cn/avatar";
import { ChevronRight, LogOut, Settings, User, Zap } from "lucide-react";
import Spark_Heading from "./Spark_Heading";
import NavBarDashboard from "@/components/ui/NavBarDashboard";
import { Menu_LoggedInDropdown } from "./Menu_LoggedInDropdown";
import { getSession } from "@/app/actions/actions";

export default async function Sidebar() {
  const session = await getSession();
  const sessionData = JSON.parse(JSON.stringify(session));

  return (
    <div className="fixed inset-y-0 left-0 z-20 hidden h-full w-64 flex-col border-r border-border bg-background 2xl:flex">
      <div className="flex h-16 shrink-0 items-center justify-between px-4">
        <Link href={"/dashboard"}>
          <div className="flex flex-row items-center gap-2">
            <Zap className="h-6 w-6 text-orange-600" />
            <Spark_Heading fontweight="font-bold" size="text-xl">
              Spark
            </Spark_Heading>
          </div>
        </Link>
      </div>
      <div className="flex flex-1 flex-col overflow-y-auto">
        <NavBarDashboard />
      </div>
      <div className="border-t px-4 py-4">
        <Menu_LoggedInDropdown session={sessionData} />
      </div>
    </div>
  );
}
