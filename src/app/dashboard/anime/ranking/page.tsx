"use server";
import AnimeCards_Ranking from "@/components/ui/AnimeCards_Ranking";
import HeroSection from "@/components/ui/HeroSection";

const AnimeRanking = async () => {
  return (
    <section>
      <HeroSection
        title="Highest Rated Animes"
        subtitle={`Discover the highest rated Animes from MyAnimeList.`}
      />
      <AnimeCards_Ranking />
    </section>
  );
};

export default AnimeRanking;
