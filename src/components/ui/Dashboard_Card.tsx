import { FC } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/shad-cn/card";
import { getCurrentSeason } from "@/lib/utils/utils";
import Link from "next/link";
import Image from "next/image";

// Define enum for card categories
export enum CardCategory {
  Anime = "TV Series",
  Productivity = "Productivity",
  Gaming = "Gaming",
  SeasonalAnime = "Seasonal Animes",
  Ranking = "Highest Rated",
  PathOfExile = "Path of Exile",
  MapCalculator = "POE Map and Profit Calculator",
}

// Define enum for card descriptions
export enum CardDescriptionEnum {
  Anime = "Discover the latest television or anime series.",
  Productivity = "Boost your productivity with planning tools, task tracking and more.",
  Gaming = "Improve your gameplay with useful gaming tools like POE Map Tracking, POE Currency Coverter and more.",
  SeasonalAnime = "Discover new seasonal animes from",
  Ranking = "Check out the highest rated animes this season or of all time.",
  PathOfExile = "Action-RPG",
  MapCalculator = "Calculate your profits per Map or over multiple sessions",
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
        return "/images/cards/card_anime.webp";
      case CardCategory.Productivity:
        return "/images/cards/card_productivity.webp";
      case CardCategory.Gaming:
        return "/images/cards/card_gaming.jpg";
      case CardCategory.SeasonalAnime:
        return "/images/cards/card_anime_seasonal.jpg";
      case CardCategory.Ranking:
        return "/images/cards/card_ranking.jpeg";
      case CardCategory.PathOfExile:
        return "/images/cards/card_pathofexile.jpeg";
      case CardCategory.MapCalculator:
        return "/images/cards/card_pathofexile.jpeg";
      default:
        return "";
    }
  };

  // Define description based on title
  const getDescription = (title: CardCategory) => {
    switch (title) {
      case CardCategory.Anime:
        return `${CardDescriptionEnum.Anime}`;
      case CardCategory.Productivity:
        return CardDescriptionEnum.Productivity;
      case CardCategory.Gaming:
        return CardDescriptionEnum.Gaming;
      case CardCategory.SeasonalAnime:
        return `${CardDescriptionEnum.SeasonalAnime} ${getCurrentSeason()} Season.`;
      case CardCategory.Ranking:
        return `${CardDescriptionEnum.Ranking}`;
      case CardCategory.PathOfExile:
        return `${CardDescriptionEnum.PathOfExile}`;
      case CardCategory.MapCalculator:
        return `${CardDescriptionEnum.MapCalculator}`;
      default:
        return "";
    }
  };

  return (
    <div className="flex max-w-[600px]">
      <Card className="rounded-lg drop-shadow-md md:w-[325px] lg:w-[400px] xl:w-[450px]">
        <CardHeader className="p-0">
          <Link href={link}>
            <Image
              className="h-[350px] w-full rounded-t-lg object-cover opacity-100 contrast-[108%] transition duration-200 hover:cursor-pointer hover:contrast-125"
              src={getImagePath(title)} // Use getImagePath function
              alt={`${title} Card`}
              width={0}
              height={0}
              sizes="100vw"
            />
          </Link>
          <div className="flex flex-col px-6 pb-5 pt-2">
            <CardTitle className="py-2 capitalize">{title}</CardTitle>
            <CardDescription>{getDescription(title)}</CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
