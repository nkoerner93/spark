import Link from "next/link";
import { FC } from "react";
import { MAINMENU } from "src/constants/authImageConstants";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
  return (
    <nav>
      <div className="hidden flex-row gap-28 text-primary lg:flex">
        {MAINMENU.map((menuitem) => (
          <span key={menuitem.title} className="text-md font-medium">
            <Link href={menuitem.url}>{menuitem.title}</Link>
          </span>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
