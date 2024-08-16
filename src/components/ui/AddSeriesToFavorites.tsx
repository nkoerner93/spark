"use client";
import { createTVSeries } from "@/app/actions/tvSeriesActions";
import { Plus } from "lucide-react";
import React from "react";
import { Anime_Data_Seasonal } from "src/types/types";
import { useToast } from "@/components/ui/shad-cn/use-toast";

const AddSeriesToFavorites = ({ series }: { series: Anime_Data_Seasonal }) => {
  const { toast } = useToast();

  const handleAddToFavorites = async (series: Anime_Data_Seasonal) => {
    try {
      // Add the series to the user's favorites in the database
      await createTVSeries(series.node);
      toast({
        title: "Success!",
        description: `The series ${series.node.title} has been added to your favorites.`,
      });
    } catch (error) {
      toast({
        title: "Error!",
        description: `There was an error adding ${series.node.title} to your favorites. Please try again.`,
        variant: "destructive",
      });
      console.error("Error adding series to favorites:", error);
    }
  };

  return (
    <div>
      <Plus
        onClick={() => handleAddToFavorites(series)}
        className="h-14 w-14 text-2xl text-black hover:cursor-pointer hover:text-yellow-400"
      />
    </div>
  );
};

export default AddSeriesToFavorites;
