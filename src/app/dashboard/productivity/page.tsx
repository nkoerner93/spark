import { DashboardCard, CardCategory } from "@/components/ui/Dashboard_Card";
import HeroSection from "@/components/ui/HeroSection";
import React from "react";

const ProductivityDashboard = () => {
  return (
    <section>
      <HeroSection
        title="Productivity"
        subtitle={`What are you looking for today?`}
      />
      <div className="flex flex-row justify-center gap-8"></div>
    </section>
  );
};

export default ProductivityDashboard;
