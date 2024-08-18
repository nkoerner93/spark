import { getAnimeListByRanking } from "@/app/actions/actions";
import AnimeList from "./AnimeCards_Ranking";
import RankingTypeSelector from "./RankingTypeSelector";
import { AnimeRankingType } from "src/types/types";
import HeroSection from "@/components/ui/HeroSection";

export default async function AnimeCards_Ranking({
  searchParams,
}: {
  searchParams: { type: string };
}) {
  const rankingType = searchParams.type || "all";
  const animes = await getAnimeListByRanking(rankingType as AnimeRankingType);

  return (
    <div>
      <HeroSection
        title="Highest Rated Animes"
        subtitle={`Discover the highest rated Animes from MyAnimeList.`}
      />
      <RankingTypeSelector currentType={rankingType} />
      <AnimeList animes={animes} />
    </div>
  );
}
