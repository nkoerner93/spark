import { getAnimeList } from "@/app/actions/actions";
import React from "react";
import { Button } from "./shad-cn/button";
import { extractOffsetFromUrl } from "@/lib/utils/utils";
import { revalidatePath } from "next/cache";

interface AnimeCards_SeasonalProps {
  year: number;
  season: string;
}

type Anime_Data = {
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
    const { animes, animepage } = await getAnimeList(2024, "spring");

    const paginateAnimes = async () => {
      "use server";

      const offset = extractOffsetFromUrl(animepage.next);
      const { animes } = await getAnimeList(2024, "spring", offset as number);

      revalidatePath("/dashboard/anime");
      return animes;
    };

    return (
      <div className="flex flex-col items-center gap-8">
        <ul className="flex flex-row flex-wrap justify-center gap-8 text-center">
          {animes.map((anime: Anime_Data) => (
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
        <form action={paginateAnimes}>
          <Button className="mb-20" type="submit">
            Show me the next 10
          </Button>
        </form>
      </div>
    );
  } catch (error) {
    console.error("Error fetching anime list:", error);
    return <div>Error fetching anime list</div>; // Render error message
  }
};

export default AnimeCards_Seasonal;
