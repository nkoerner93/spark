import { Anime_Data_Seasonal } from "src/types/types"; // Import the Lucide Plus icon
import AddSeriesToFavorites from "./AddSeriesToFavorites";

const AnimeCards_Seasonal = ({ animes }: { animes: Anime_Data_Seasonal[] }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {animes.map((anime: Anime_Data_Seasonal) => (
        <div key={anime.node.id} className="relative p-2">
          <div className="flex flex-col items-center gap-2">
            <div className="relative w-full">
              <img
                className="h-[400px] w-full object-cover"
                src={anime.node.main_picture.large}
                alt={anime.node.title}
              />
              {/* Overlay icon container */}
              <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 opacity-0 transition-opacity duration-300 hover:opacity-100">
                <AddSeriesToFavorites series={anime} />
              </div>
            </div>
          </div>
          <div className="flex min-h-[80px] items-center justify-center">
            <div className="my-4 text-center font-medium">
              {anime.node.title}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimeCards_Seasonal;
