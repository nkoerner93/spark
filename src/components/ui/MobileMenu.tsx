"use client";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { MAINMENU } from "src/constants/authImageConstants";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./shad-cn/dropdown-menu";

interface MobileMenuProps {}

const MobileMenu: FC<MobileMenuProps> = ({}) => {
  return (
    <div className="block pt-1 lg:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <AlignJustify />
        </DropdownMenuTrigger>
        <DropdownMenuContent onCloseAutoFocus={(e) => e.preventDefault()}>
          {MAINMENU.map((menuitem) => (
            <span key={menuitem.title} className="text-md font-semibold">
              <Link href={menuitem.url}>
                <DropdownMenuItem>{menuitem.title}</DropdownMenuItem>
              </Link>
            </span>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileMenu;
