"use server";
import { redirect } from "next/navigation";
import prisma from "../prisma";
import { getSession } from "./actions";
import { Anime } from "src/types/types";

// ADD SERIES TO USER FAVORITES
export async function createTVSeries(anime: Anime) {
  const session = await getSession();
  if (!session || !session.userId) return redirect("/login");

  try {
    const result = await prisma.subscribed_TVSeries.create({
      data: {
        userId: session.userId,
        title: anime.title,
        imgurl: anime.main_picture.medium,
        type: "ANIME",
      },
    });

    return result;
  } catch (error) {
    console.error("Error adding series to favorites:", error);
    throw error; // Re-throw the error for further handling in the component
  }
}
