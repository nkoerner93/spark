import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/shad-cn/card";
import { getCurrentSeason } from "@/lib/utils/utils";
import Link from "next/link";
import { FC } from "react";
import {
  CardCategory,
  CardDescriptionEnum,
} from "src/constants/dashboardCardEnums";

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
      case CardCategory.Kanban:
        return "/images/cards/card_kanban.svg";
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
      case CardCategory.Kanban:
        return `${CardDescriptionEnum.Kanban}`;
      default:
        return "";
    }
  };

  return (
    <div className="flex max-w-[600px]">
      <Card className="w-[325px] rounded-lg drop-shadow-md lg:w-[375px] xl:w-[375px]">
        <CardHeader className="p-0">
          <Link href={link}>
            <img
              className="h-[250px] w-full rounded-t-lg object-cover opacity-100 contrast-[108%] transition duration-200 hover:cursor-pointer hover:contrast-125"
              src={getImagePath(title)} // Use getImagePath function
              alt={`${title} Card`}
              loading="eager"
            />
          </Link>
          <div className="flex flex-col px-6 pb-5 pt-2">
            <CardTitle
              className="py-2 capitalize"
              data-card="card-single"
              data-card-title={`card-${title}`}
            >
              {title}
            </CardTitle>
            <CardDescription>{getDescription(title)}</CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
export { CardCategory };
