"use client";
import Slider from "react-slick";

import "@nkoerner93/slick-carousel/slick/slick.css";
import "@nkoerner93/slick-carousel/slick/slick-theme.css";
import { sliderSettings_HighestRated } from "@/lib/lib";

import { AnimeRankingType, Anime_Data_HighestRated } from "src/types/types";
import { getAnimeListByRanking } from "@/app/actions/actions";

import { useState, useEffect } from "react";
import ReturnButton from "./ReturnButton";
import { Button } from "./shad-cn/button";

interface AnimeCards_RankingProps {
  returnButton?: boolean;
}

const AnimeCards_Ranking = ({
  returnButton = false,
}: AnimeCards_RankingProps) => {
  const [selectedRankingType, setSelectedRankingType] =
    useState<AnimeRankingType>("all");
  const [animes, setAnimes] = useState<Anime_Data_HighestRated[]>([]);

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        const data = await getAnimeListByRanking(selectedRankingType);
        const sortedAnimes = data.sort(
          (a, b) => a.ranking.rank - b.ranking.rank,
        );
        setAnimes(sortedAnimes);
      } catch (error) {
        console.error("Error fetching anime list:", error);
      }
    };

    fetchAnimes();
  }, [selectedRankingType]);

  const handleRankingTypeChange = (rankingType: AnimeRankingType) => {
    setSelectedRankingType(rankingType);
  };

  return (
    <div>
      {returnButton ? (
        <div>
          <button onClick={() => handleRankingTypeChange("all")}>All</button>
          <button onClick={() => handleRankingTypeChange("airing")}>
            Airing
          </button>
        </div>
      ) : (
        <div className="flex h-16 flex-row items-end justify-between px-1">
          <ReturnButton />
          <div className="flex flex-row gap-2 pb-1">
            <Button onClick={() => handleRankingTypeChange("all")}>All</Button>
            <Button onClick={() => handleRankingTypeChange("airing")}>
              Airing
            </Button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {animes.map((anime) => (
          <div key={anime.node.id} className="p-2">
            <div className="flex flex-col items-center gap-2">
              <img
                className="h-[400px] w-full object-cover hover:contrast-125"
                src={anime.node.main_picture.large}
                alt={anime.node.title}
              />
            </div>
            <div className="flex min-h-[135px] flex-col items-center justify-center pb-8 pt-4">
              <div className="text-3xl font-bold">{anime.ranking.rank}</div>
              <div className="text-center font-medium">{anime.node.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimeCards_Ranking;
