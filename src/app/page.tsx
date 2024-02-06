import Header from "@/components/layout/Header";
import HeroSection from "@/components/ui/HeroSection";

export default function Page() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Header />
      <HeroSection
        title="Kickstart your NEXT Project"
        subtitle="Unlock the Power of Prebuilt NextJS Projects with Spark with seamless database integration and built-in authentication. Based on ShadCN and completely Open Source."
        button1="Get Started"
        button1link="/"
        button2="Github"
        button2link="https://github.com/nkoerner93/spark"
      />
    </div>
  );
}
