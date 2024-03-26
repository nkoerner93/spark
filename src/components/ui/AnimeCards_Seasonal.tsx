"use client";
import { sliderSettings } from "@/lib/lib";

import { Anime_Data_Seasonal } from "src/types/types";
import Slider from "react-slick";
import "@nkoerner93/slick-carousel/slick/slick.css";
import "@nkoerner93/slick-carousel/slick/slick-theme.css";

const AnimeCards_Seasonal = ({ animes }: { animes: Anime_Data_Seasonal[] }) => {
  return (
    <div>
      <Slider {...sliderSettings}>
        {animes.map((anime: Anime_Data_Seasonal) => (
          <div key={anime.node.id} className="flex flex-row px-2">
            <div className="flex flex-col items-center">
              <img
                className="h-[400px] w-full object-cover hover:contrast-125"
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
    </div>
  );
};

export default AnimeCards_Seasonal;
