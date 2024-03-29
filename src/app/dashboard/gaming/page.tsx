import { CardCategory, DashboardCard } from "@/components/ui/Dashboard_Card";
import HeroSection from "@/components/ui/HeroSection";
import React from "react";

const GamingDashboard = () => {
  return (
    <section>
      <HeroSection
        title="Gaming"
        subtitle={`Which games are you looking for?`}
      />
      <div className="flex flex-row justify-center gap-8">
        <DashboardCard
          title={CardCategory.PathOfExile}
          link="/dashboard/gaming/pathofexile"
        ></DashboardCard>
      </div>
    </section>
  );
};

export default GamingDashboard;
