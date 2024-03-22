import { CardCategory, DashboardCard } from "@/components/ui/DashboardCard";
import HeroSection from "@/components/ui/HeroSection";

export default async function Dashboard() {
  return (
    <div>
      <HeroSection
        title="What are you interested in today?"
        subtitle="What are you interested in today?"
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
