import AddSeriesToFavorites from "@/components/ui/AddSeriesToFavorites";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/shad-cn/skeleton";
import { Anime_Data_Seasonal } from "src/types/types";

const AnimeCard = ({ anime }: { anime: Anime_Data_Seasonal }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = anime.node.main_picture.large;

    if (img.complete) {
      setImageLoaded(true);
    } else {
      img.onload = () => {
        setImageLoaded(true);
      };
    }

    return () => {
      img.onload = null;
    };
  }, [anime]);

  return (
    <div className="relative p-2">
      <div className="flex flex-col items-center gap-2">
        <div className="relative h-[400px] w-full">
          {!imageLoaded && (
            <Skeleton className="absolute left-0 top-0 h-full w-full" />
          )}
          <img
            className={`h-full w-full object-cover ${
              imageLoaded ? "opacity-100" : "opacity-0"
            } transition-opacity duration-300`}
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
        <div className="my-4 text-center font-medium">{anime.node.title}</div>
      </div>
    </div>
  );
};

export default AnimeCard;
