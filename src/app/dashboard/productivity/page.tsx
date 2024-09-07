import { CardCategory, DashboardCard } from "@/components/ui/Dashboard_Card";
import HeroSection from "@/components/ui/HeroSection";

const ProductivityDashboard = () => {
  return (
    <section>
      <HeroSection
        title="Productivity"
        subtitle={`What are you looking for today?`}
      />
      <div className="flex flex-row justify-center gap-8">
        <DashboardCard
          title={CardCategory.Kanban}
          link="/dashboard/productivity/kanban"
        />
      </div>
    </section>
  );
};

export default ProductivityDashboard;
