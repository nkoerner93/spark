import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import HeroSection from "@/components/ui/HeroSection";
import ImageBlock from "@/components/ui/ImageBlock";

export default function Page() {
  return (
    <section className="min-h-screen">
      <Header />
      <div className="flex flex-grow flex-col">
        <div className="mx-auto max-w-screen-2xl px-20 pb-32 pt-20">
          <HeroSection
            title="All-In-One Utility Dashboard"
            subtitle="Spark is your all-in-one utility toolbox for entertainment & productivity, from planning your day, discovering your favorite new tv/anime series or using popular gaming tools."
            button1="Register Now"
            button1link="/register"
            button2="Github"
            button2link="https://github.com/nkoerner93/spark"
          />
          <div className="flex flex-col gap-32">
            <ImageBlock
              imageleft={false}
              title="Boost your Productivity"
              description="We offer multiple tools to improve your productivity, like day-planning tools, 
              task management systems, goal tracking features, and time management apps. 
              With our comprehensive suite of resources, you'll have everything you need to 
              streamline your workflow, stay organized, and achieve your goals with ease."
              link="/dashboard/anime"
              buttontext="Check Anime Series"
              alt="Animes"
              imagepath="cards/card_productivity.webp"
            />
            <ImageBlock
              imageleft={true}
              title="Discover your favorite new Anime-Series"
              description="Explore our extensive collection of the latest and greatest anime series! Stay up-to-date with the newest releases, ensuring you never miss out on the hottest shows. 
              Dive into a world of captivating storylines, stunning visuals, and unforgettable characters. 
              Our platform offers a curated selection of the highest-rated anime, making it easy for you to find your next favorite series. 
              With our regularly updated data from MyAnimeList, you'll always have access to the most recent episodes and seasons."
              link="/dashboard/anime"
              buttontext="Check Anime Series"
              alt="Animes"
              imagepath="cards/card_anime.webp"
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
