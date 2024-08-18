import { CardCategory, DashboardCard } from "@/components/ui/Dashboard_Card";
import HeroSection from "@/components/ui/HeroSection";

export default function Dashboard() {
  return (
    <div>
      <HeroSection
        title="What are you interested in today?"
        subtitle="Please pick your dashboard by clicking on one of the categories below"
      />
      <section className="flex flex-row flex-wrap justify-center gap-8">
        <DashboardCard title={CardCategory.Anime} link="/dashboard/anime" />
        <DashboardCard title={CardCategory.Gaming} link="/dashboard/gaming" />
        <DashboardCard
          title={CardCategory.Productivity}
          link="/dashboard/productivity"
        />
      </section>
    </div>
  );
}
