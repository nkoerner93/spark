import Link from "next/link";
import { FC } from "react";
import { MAINMENU } from "src/constants/authImageConstants";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
  return (
    <div className="flex flex-row gap-28 text-primary">
      {MAINMENU.map((menuitem) => (
        <span key={menuitem.title} className="text-md font-semibold">
          <Link href={menuitem.url}>{menuitem.title}</Link>
        </span>
      ))}
    </div>
  );
};

export default NavBar;
