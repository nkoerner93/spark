"use server";
import { redirect } from "next/navigation";
import prisma from "../prisma";
import { getSession } from "./actions";
import { Anime } from "src/types/types";
import { SeriesType } from "@prisma/client";

// ADD SERIES TO USER FAVORITES
export async function createTVSeries(anime: Anime) {
  const session = await getSession();
  if (!session || !session.userId) return redirect("/login");

  try {
    // Check if the anime already exists for this user
    const existingAnime = await prisma.subscribed_TVSeries.findFirst({
      where: {
        userId: session.userId,
        title: anime.title,
        type: SeriesType.ANIME,
      },
    });

    if (existingAnime) {
      // If the anime already exists, return a specific object
      return { success: false, reason: "already_exists" };
    }

    const result = await prisma.subscribed_TVSeries.create({
      data: {
        userId: session.userId,
        title: anime.title,
        imgurl: anime.main_picture.medium,
        type: SeriesType.ANIME,
      },
    });

    return { success: true, data: result };
  } catch (error) {
    console.error("Error adding series to favorites:", error);
    throw error; // Re-throw the error for further handling in the component
  }
}
