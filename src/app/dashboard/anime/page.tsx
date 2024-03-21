import AnimeCards_Seasonal from "@/components/ui/AnimeCards_Seasonal";
import HeroSection from "@/components/ui/HeroSection";
import { getCurrentSeason } from "@/lib/utils/utils";

const AnimeDashboard = () => {
  const season = getCurrentSeason();

  return (
    <section>
      <HeroSection
        title="Animes"
        subtitle={`Discover all the animes from ${season} season.`}
      />
      <AnimeCards_Seasonal year={2024} season="spring" />
    </section>
  );
};

export default AnimeDashboard;
