import Header from "@/components/ui/Header";
import HeroSection from "@/components/ui/HeroSection";
import ImageBlock from "@/components/ui/ImageBlock";

export default function Page() {
  return (
    <section className="container max-w-screen-2xl items-center justify-between gap-8">
      <div className="relative flex min-h-screen flex-col">
        <Header />
        <HeroSection
          title="All-In-One Utility Dashboard"
          subtitle="Spark is your all-in-one utility toolbox for entertainment & productivity, from planning your day, discovering your favorite new tv/anime series or using popular gaming tools."
          button1="Register Now"
          button1link="/register"
          button2="Github"
          button2link="https://github.com/nkoerner93/spark"
        />
        <ImageBlock
          imageleft={false}
          title="Discover your favorite new TV-Series"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptate mollitia provident, iste sed nihil accusamus praesentium maiores atque fuga natus soluta rerum ea tempore quas. Fuga voluptas temporibus minima!
        Nesciunt eaque modi earum velit quod dignissimos voluptatibus doloremque. Blanditiis sit facilis itaque voluptates libero animi ullam suscipit dolorum quaerat amet! Minima fugiat ratione vero suscipit. Alias, laudantium quae? Asperiores.
        Quam ex quas dolorem totam sunt adipisci maxime eius dolore quis asperiores ipsam tenetur corrupti quae sed eveniet eum minima officiis, voluptatem nam ea aperiam? Sint tempora corrupti nulla non."
          link="/dashboard/anime"
          buttontext="Check Anime Series"
        />
      </div>
    </section>
  );
}
