"use client";
import { createTVSeries } from "@/app/actions/tvSeriesActions";
import { Check, Loader2, Plus } from "lucide-react";
import React, { useState } from "react";
import { Anime_Data_Seasonal } from "src/types/types";
import { useToast } from "@/components/ui/shad-cn/use-toast";
import { Tooltip, TooltipContent } from "./shad-cn/tooltip";
import { TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";

const AddSeriesToFavorites = ({ series }: { series: Anime_Data_Seasonal }) => {
  const { toast } = useToast();
  const [isAddingToFavorites, setIsAddingToFavorites] = useState(false);
  const [isSuccessfull, setIsSuccessfull] = useState(false);

  const handleAddToFavorites = async (series: Anime_Data_Seasonal) => {
    try {
      setIsAddingToFavorites(true);
      // Add the series to the user's favorites in the database
      await createTVSeries(series.node);
      toast({
        title: "Success!",
        description: `The series ${series.node.title} has been added to your favorites.`,
      });
      setIsAddingToFavorites(false);
      setIsSuccessfull(true);
      setTimeout(() => {
        setIsSuccessfull(false);
        setIsAddingToFavorites(false);
      }, 2500);
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
      {isAddingToFavorites ? (
        <Loader2 className="h-14 w-14 animate-spin text-2xl text-black hover:cursor-pointer" />
      ) : isSuccessfull ? (
        <Check className="h-14 w-14 text-2xl text-black hover:cursor-pointer" />
      ) : (
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger>
              <Plus
                onClick={() => handleAddToFavorites(series)}
                className="h-14 w-14 text-2xl text-black hover:cursor-pointer"
              />
            </TooltipTrigger>
            <TooltipContent>Save to favorites</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  );
};

export default AddSeriesToFavorites;
