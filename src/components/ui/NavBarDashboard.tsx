import Link from "next/link";
import { FC } from "react";
import { MAINMENU } from "src/constants/authImageConstants";

interface NavBarDashboardProps {}

const NavBarDashboard: FC<NavBarDashboardProps> = ({}) => {
  return (
    <nav className="flex flex-col space-y-1 px-4 py-6">
      {MAINMENU.map((menuitem) => (
        <Link
          key={menuitem.title}
          className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
          href={menuitem.url}
        >
          {menuitem.icon && <menuitem.icon className="h-4 w-4" />}
          {menuitem.title}
        </Link>
      ))}
    </nav>
  );
};

export default NavBarDashboard;
