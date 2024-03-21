import { getAnimeList } from "@/app/actions/actions";
import React from "react";

interface AnimeCards_SeasonalProps {
  year: number;
  season: string;
}

type Anime_Seasonal = {
  node: {
    id: number;
    title: string;
    main_picture: {
      medium: string;
      large: string;
    };
  };
};

const AnimeCards_Seasonal = async ({
  year,
  season,
}: AnimeCards_SeasonalProps) => {
  try {
    const animes = await getAnimeList(year, season);

    return (
      <div>
        <ul className="flex flex-row flex-wrap justify-center gap-8 text-center">
          {animes.map((anime: Anime_Seasonal) => (
            <li
              key={anime.node.id}
              className=" hover:cursor-pointer hover:contrast-125"
            >
              <div className="flex flex-col gap-4">
                <img
                  className="object-cover"
                  src={anime.node.main_picture.large}
                />
                <div className="font-medium">{anime.node.title}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  } catch (error) {
    console.error("Error fetching anime list:", error);
    return <div>Error fetching anime list</div>; // Render error message
  }
};

export default AnimeCards_Seasonal;
