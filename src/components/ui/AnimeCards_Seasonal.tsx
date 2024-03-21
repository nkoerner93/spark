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
    img: URL;
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
        <ul>
          {animes.map((anime: Anime_Seasonal) => (
            <li key={anime.node.id}>
              <div className="font-medium">{anime.node.title}</div>
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
