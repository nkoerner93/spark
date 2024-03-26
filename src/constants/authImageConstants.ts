import { MenuItems_MainMenu } from "src/types/types";

export const AUTHIMAGES = [
  "/images/auth/auth_background.jpg",
  "/images/auth/auth_background2.jpg",
  "/images/auth/auth_background3.jpg",
];

export const MAINMENU: MenuItems_MainMenu[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
  },
  {
    title: "Productivity",
    url: "/dashboard/productivity",
  },
  {
    title: "Gaming",
    url: "/dashboard/gaming",
  },
  {
    title: "Anime",
    url: "/dashboard/anime",
  },
];
export const ANIMEMENU: MenuItems_MainMenu[] = [
  {
    title: "Seasonal",
    url: "/dashboard/anime/seasonal",
  },
  {
    title: "Highest Rated",
    url: "/dashboard/anime/highestrated",
  },
];
