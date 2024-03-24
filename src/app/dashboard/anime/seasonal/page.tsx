"use server";
import { getAnimeListBySeason } from "@/app/actions/actions";
import AnimeCards_Seasonal from "@/components/ui/AnimeCards_Seasonal";
import HeroSection from "@/components/ui/HeroSection";
import { getCurrentSeason } from "@/lib/utils/utils";

const AnimeSeasonal = async () => {
  const season = getCurrentSeason();

  const animes = await getAnimeListBySeason(2024, "spring");
  // Sort anime results alphabetically by title
  animes.sort((a: any, b: any) => a.node.title.localeCompare(b.node.title));

  return (
    <section>
      <HeroSection
        title="Seasonal Animes"
        subtitle={`Discover all the animes from ${season} season.`}
      />
      <AnimeCards_Seasonal animes={animes} />
    </section>
  );
};

export default AnimeSeasonal;
