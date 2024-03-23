"use server";
import { getAnimeList } from "@/app/actions/actions";
import AnimeCards_Seasonal from "@/components/ui/AnimeCards_Seasonal";
import HeroSection from "@/components/ui/HeroSection";
import { getCurrentSeason } from "@/lib/utils/utils";
import { AnimeCards_SeasonalProps } from "src/types/types";

const AnimeDashboard = async () => {
  const season = getCurrentSeason();

  const animes = await getAnimeList(2024, "spring");
  // Sort anime results alphabetically by title
  await animes.sort((a: any, b: any) =>
    a.node.title.localeCompare(b.node.title),
  );

  return (
    <section>
      <HeroSection
        title="Animes"
        subtitle={`Discover all the animes from ${season} season.`}
      />
      <AnimeCards_Seasonal animes={animes} />
    </section>
  );
};

export default AnimeDashboard;
