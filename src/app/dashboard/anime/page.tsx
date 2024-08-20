import { CardCategory, DashboardCard } from "@/components/ui/Dashboard_Card";
import HeroSection from "@/components/ui/HeroSection";

const AnimeDashboard = () => {
  return (
    <section>
      <HeroSection
        title="Animes"
        subtitle={`Which animes are you looking for?`}
      />
      <div className="flex flex-row flex-wrap justify-center gap-8">
        <DashboardCard
          title={CardCategory.SeasonalAnime}
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
