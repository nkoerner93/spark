import { Subscribed_TVSeries } from "@prisma/client";
import { Anime_Data_HighestRated } from "src/types/types";

export default function SeriesCards({
  series,
}: {
  series: Subscribed_TVSeries[];
}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {series.map((series) => (
        <div key={series.id} className="p-2">
          <div className="flex flex-col items-center gap-2">
            <img
              className="object-cover hover:contrast-125 md:h-[400px]"
              src={series.imgurl}
              alt={series.title}
            />
          </div>
          <div className="flex flex-col items-center justify-center pt-8">
            <div className="text-center font-medium">{series.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
