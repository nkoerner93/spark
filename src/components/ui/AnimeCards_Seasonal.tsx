import { getAnimeList } from "@/app/actions/actions";
import React from "react";

const AnimeCards_Seasonal = async () => {
  try {
    const animes = await getAnimeList(2024, "spring");

    return (
      <div>
        <ul>
          {animes.map((anime) => (
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
