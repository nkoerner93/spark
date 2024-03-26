"use server";
import { CardCategory, DashboardCard } from "@/components/ui/Dashboard_Card";
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
      <div className="flex flex-row justify-center gap-8">
        <DashboardCard
          title={CardCategory.Seasonal}
          link="/dashboard/anime/seasonal"
        />
        <DashboardCard
          title={CardCategory.Ranking}
          link="/dashboard/anime/ranking"
        />
      </div>
    </section>
  );
};

export default AnimeDashboard;
