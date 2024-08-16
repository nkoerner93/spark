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
      const result = await createTVSeries(series.node);

      if (!result.success) {
        if (result.reason === "already_exists") {
          toast({
            title: "Already in your list!",
            description: `The series ${series.node.title} is already in your favorites.`,
            variant: "destructive",
          });
        }
        setIsAddingToFavorites(false);
        return;
      }

      // Series successfully added
      toast({
        title: "Success!",
        description: `The series ${series.node.title} has been added to your favorites.`,
      });
      // Set States to change icons
      setIsAddingToFavorites(false);
      setIsSuccessfull(true);
      setTimeout(() => {
        setIsSuccessfull(false);
        setIsAddingToFavorites(false);
      }, 2500);
    } catch (error) {
      // Error adding series
      toast({
        title: "Error!",
        description: `There was an error adding ${series.node.title} to your favorites. Please try again.`,
        variant: "destructive",
      });
      console.error("Error adding series to favorites:", error);
      setIsAddingToFavorites(false);
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
