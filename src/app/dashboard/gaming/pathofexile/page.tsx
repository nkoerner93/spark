import { CardCategory, DashboardCard } from "@/components/ui/Dashboard_Card";
import HeroSection from "@/components/ui/HeroSection";
import React from "react";

const GamingDashboard = () => {
  return (
    <section>
      <HeroSection
        title="Path of Exile"
        subtitle={`Please select your tool from the list below`}
      />
      <div className="flex flex-row justify-center gap-8"></div>
    </section>
  );
};

export default GamingDashboard;
