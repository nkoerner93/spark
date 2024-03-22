"use client";
import React, { useState, useEffect } from "react";
import { getAnimeList } from "@/app/actions/actions";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderSettings } from "@/lib/lib";

import { Loader2 } from "lucide-react";
import { AnimeCards_SeasonalProps, Anime_Data_Seasonal } from "src/types/types";

const AnimeCards_Seasonal: React.FC<AnimeCards_SeasonalProps> = ({
  year,
  season,
}: AnimeCards_SeasonalProps) => {
  const [animes, setAnimes] = useState<Anime_Data_Seasonal[]>([]);
  const [nextPageUrl, setNextPageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchAnimes = async () => {
    try {
      const { animes: initialAnimes, animepage } = await getAnimeList(
        year,
        season,
      );
      // Sort anime results alphabetically by title
      initialAnimes.sort((a, b) => a.node.title.localeCompare(b.node.title));
      setAnimes(initialAnimes);
      setNextPageUrl(animepage.next);
      setLoading(false);
      console.log(initialAnimes); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Error fetching anime list:", error);
      // Handle error
    }
  };

  useEffect(() => {
    fetchAnimes();
  }, []); // Fetch initial anime list on component mount

  return (
    <div>
      {loading ? (
        <div>
          <Loader2 className="animate-spin" />
        </div>
      ) : (
        <Slider {...sliderSettings}>
          {animes.map((anime: Anime_Data_Seasonal) => (
            <div key={anime.node.id} className="flex flex-col px-2">
              <div className="flex flex-col items-center">
                <img
                  className="h-[600px] object-cover hover:contrast-125"
                  src={anime.node.main_picture.large}
                  alt={anime.node.title}
                />
              </div>
              <div className="flex min-h-[80px] items-center justify-center">
                <div className="my-4 font-medium">{anime.node.title}</div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default AnimeCards_Seasonal;
