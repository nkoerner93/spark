"use server";
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
      <DashboardCard
        title={CardCategory.Seasonal}
        link="/dashboard/anime/ranking"
      />
    </section>
  );
};

export default AnimeDashboard;
