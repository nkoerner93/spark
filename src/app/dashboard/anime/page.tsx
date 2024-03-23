"use server";
import { getAnimeList } from "@/app/actions/actions";
import AnimeCards_Seasonal from "@/components/ui/AnimeCards_Seasonal";
import { CardCategory, DashboardCard } from "@/components/ui/DashboardCard";
import HeroSection from "@/components/ui/HeroSection";
import { getCurrentSeason } from "@/lib/utils/utils";

const AnimeDashboard = async () => {
  const season = getCurrentSeason();

  return (
    <section>
      <HeroSection
        title="Animes"
        subtitle={`Which animes are you looking for?`}
      />
      <DashboardCard
        title={CardCategory.Seasonal}
        link="/dashboard/anime/seasonal"
      />
    </section>
  );
};

export default AnimeDashboard;
