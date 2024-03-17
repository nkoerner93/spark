import HeroSection from "@/components/ui/HeroSection";

export default async function Dashboard() {
  return (
    <HeroSection
      title="Discover new Animes"
      subtitle="Check out the list of currently running animes in this season."
      button1="Get Started"
      button1link="/"
    />
  );
}
