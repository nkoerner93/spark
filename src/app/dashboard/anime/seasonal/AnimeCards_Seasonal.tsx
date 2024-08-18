"use client";
import AnimeCard from "@/components/ui/AnimeCard";
import { Anime_Data_Seasonal } from "src/types/types"; // Import the Lucide Plus icon

const AnimeCards_Seasonal = ({ animes }: { animes: Anime_Data_Seasonal[] }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {animes.map((anime: Anime_Data_Seasonal) => (
        <AnimeCard key={anime.node.id} anime={anime} />
      ))}
    </div>
  );
};

export default AnimeCards_Seasonal;
