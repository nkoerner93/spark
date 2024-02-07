import Header from "@/components/ui/Header";
import HeroSection from "@/components/ui/HeroSection";

export default function Page() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Header />
      <HeroSection
        title="Kickstart your NEXT Project"
        subtitle="Accelerate your NextJS project with prebuilt projects for seamless "
        button1="Get Started"
        button1link="/"
        button2="Github"
        button2link="https://github.com/nkoerner93/spark"
      />
    </div>
  );
}
