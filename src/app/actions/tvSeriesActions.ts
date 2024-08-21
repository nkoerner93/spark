"use server";
import { redirect } from "next/navigation";
import prisma from "../prisma";
import { getSession } from "./actions";
import { Anime } from "src/types/types";
import { SeriesType, Subscribed_TVSeries } from "@prisma/client";

// ADD SERIES TO USER FAVORITES
export async function createTVSeries(anime: Anime) {
  const session = await getSession();
  if (!session || !session.userId)
    return { success: false, reason: "not_logged_in" };

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

// GET FAVORITE TV SERIES BY ACTIVE SESSION
export async function getFavoriteTVSeriesBySession() {
  const session = await getSession();
  if (!session || !session.userId)
    return { success: false, reason: "not_logged_in" };

  try {
    // Check if the anime already exists for this user
    const existingAnime = await prisma.subscribed_TVSeries.findMany({
      where: {
        userId: session.userId,
      },
    });

    if (!existingAnime) {
      // If the anime already exists, return a specific object
      return { success: false, reason: "No favorites found." };
    }

    return existingAnime;
  } catch (error) {
    console.error("Error find favorite series:", error);
    throw error; // Re-throw the error for further handling in the component
  }
}

// GET FAVORITE TV SERIES BY USERNAME
export async function getFavoriteTVSeriesByUsername(username: string) {
  try {
    // Fetch the user and their subscribed TV series by their username
    const user = await prisma.users.findUnique({
      where: {
        username: username,
      },
      include: {
        subscribed_series: true, // Include the subscribed TV series
      },
    });

    if (!user) {
      return {
        success: false,
        reason: "User not found.",
        totalSeries: 0,
        userData: null,
      };
    }

    const favoriteTVSeries = user.subscribed_series;
    const totalSeries = favoriteTVSeries.length;

    if (totalSeries === 0) {
      // If no favorite series found, return a specific object
      return {
        success: false,
        reason: "No favorites found.",
        totalSeries: 0,
        userData: user, // Return the user data even if no favorites are found
      };
    }

    return {
      success: true,
      userData: user, // Return the user object with favorite series
      totalSeries,
      reason: "", // No error message
    };
  } catch (error) {
    console.error("Error finding favorite series:", error);
    throw error; // Re-throw the error for further handling in the component
  }
}
