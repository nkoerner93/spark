import Header from "@/components/ui/Header";
import HeroSection from "@/components/ui/HeroSection";

export default async function Dashboard() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Header />
      <HeroSection
        title="Discover new Animes"
        subtitle="Check out the list of currently running animes in this season."
        button1="Get Started"
        button1link="/"
        button2="Favorites"
        button2link="https://github.com/nkoerner93/spark"
      />
    </div>
  );
}
