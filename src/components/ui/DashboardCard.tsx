import { FC } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/shad-cn/card";
import { getCurrentSeason } from "@/lib/utils/utils";
import Link from "next/link";

// Define enum for card categories
export enum CardCategory {
  Anime = "Anime",
  Productivity = "Productivity",
  Gaming = "Gaming",
}

// Define enum for card descriptions
export enum CardDescriptionEnum {
  Anime = "Discover the latest animes in",
  Productivity = "Boost your productivity with planning tools, task tracking and more.",
  Gaming = "Improve your gameplay with useful gaming tools like POE Map Tracking, POE Currency Coverter and more.",
}

interface DashboardCardProps {
  title: CardCategory;
  link: string;
}

export const DashboardCard: FC<DashboardCardProps> = ({ title, link }) => {
  // Define image path based on title
  const getImagePath = (title: CardCategory) => {
    switch (title) {
      case CardCategory.Anime:
        return "/images/cards/card_anime.jpg";
      case CardCategory.Productivity:
        return "/images/cards/card_productivity.jpg";
      case CardCategory.Gaming:
        return "/images/cards/card_gaming.jpg";
      default:
        return "";
    }
  };

  // Define description based on title
  const getDescription = (title: CardCategory) => {
    switch (title) {
      case CardCategory.Anime:
        return `${CardDescriptionEnum.Anime} ${getCurrentSeason()} Season.`;
      case CardCategory.Productivity:
        return CardDescriptionEnum.Productivity;
      case CardCategory.Gaming:
        return CardDescriptionEnum.Gaming;
      default:
        return "";
    }
  };

  return (
    <div className="flex max-w-[600px] md:w-[325px] lg:w-[400px] xl:w-[450px]">
      <Card className="drop-shadow-md">
        <CardHeader>
          <Link href={link}>
            <img
              className="h-[350px] rounded object-cover opacity-100 contrast-[108%] transition duration-200 hover:cursor-pointer hover:contrast-125"
              src={getImagePath(title)} // Use getImagePath function
              alt={`${title} Card`}
            />
          </Link>
          <CardTitle className="py-2 capitalize">{title}</CardTitle>
          <CardDescription>{getDescription(title)}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};
