"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderSettings, sliderSettings_HighestRated } from "@/lib/lib";

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
        <div className="mb-4 flex flex-row justify-between px-2">
          <ReturnButton />
          <div className="flex flex-row gap-2">
            <Button onClick={() => handleRankingTypeChange("all")}>All</Button>
            <Button onClick={() => handleRankingTypeChange("airing")}>
              Airing
            </Button>
          </div>
        </div>
      )}

      <Slider {...sliderSettings_HighestRated}>
        {animes.map((anime) => (
          <div key={anime.node.id} className="px-2">
            <div className="flex flex-col items-center">
              <img
                className="h-[400px] w-full object-cover hover:contrast-125"
                src={anime.node.main_picture.large}
                alt={anime.node.title}
              />
            </div>
            <div className="flex min-h-[135px] flex-col items-center justify-center pb-8 pt-4">
              <div className="text-3xl font-bold">{anime.ranking.rank}</div>
              <div className="font-medium">{anime.node.title}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AnimeCards_Ranking;
