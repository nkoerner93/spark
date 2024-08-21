import HeroSection from "@/components/ui/HeroSection";
import React from "react";
import SeriesCards from "./SeriesCards";
import { getFavoriteTVSeriesBySession } from "@/app/actions/tvSeriesActions";
import { Subscribed_TVSeries } from "@prisma/client";

const FavoriteSeries = async () => {
  const series =
    (await getFavoriteTVSeriesBySession()) as Subscribed_TVSeries[];
  return (
    <div>
      <HeroSection
        title="Favorite Series"
        subtitle="Find all your selected favorite tv series"
      />
      <SeriesCards series={series} />
    </div>
  );
};

export default FavoriteSeries;
