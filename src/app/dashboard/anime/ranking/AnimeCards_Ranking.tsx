import { Anime_Data_HighestRated } from "src/types/types";

export default function AnimeList({
  animes,
}: {
  animes: Anime_Data_HighestRated[];
}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {animes.map((anime) => (
        <div key={anime.node.id} className="p-2">
          <div className="flex flex-col items-center gap-2">
            <img
              className="h-[400px] object-cover hover:contrast-125"
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
  );
}
