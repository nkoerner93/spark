import Header from "@/components/ui/Header";
import HeroSection from "@/components/ui/HeroSection";

export default function Page() {
  return (
    <section className="container max-w-screen-2xl items-center justify-between gap-8">
      <div className="relative flex min-h-screen flex-col">
        <Header />
        <HeroSection
          title="All-In-One Entertainment Dashboard"
          subtitle="Accelerate your NextJS project with prebuilt projects for seamless"
          button1="Register Now"
          button1link="/register"
          button2="Github"
          button2link="https://github.com/nkoerner93/spark"
        />
      </div>
    </section>
  );
}
