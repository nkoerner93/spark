"use server";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { sessionOptions, SessionData, defaultSession } from "@/lib/lib";
import { getIronSession } from "iron-session";
import prisma from "../prisma";
import { redirect } from "next/navigation";
import { Users } from "@prisma/client";
import {
  AnimeRankingType,
  Anime_Data_HighestRated,
  Anime_Data_Seasonal,
} from "src/types/types";

// ===============================
// LOGIN
// ===============================
export async function loginUser(email: string, password: string) {
  const session = await getSession();
  try {
    const user = await prisma.users.findUnique({ where: { email } });

    // Does the User exist?
    if (!user) {
      return false;
    }
    // Password Validation
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return false;
    }

    session.email = user.email;
    session.userId = user.id;
    session.username = user.username;
    session.isLoggedIn = true;

    // Save Session
    await session.save();

    return true;
  } catch (error) {
    return { success: false, error: "Login failed." }; // Return error response
  }
}

// ===============================
// LOGOUT
// ===============================
export async function logout() {
  // false => no db call for logout
  const session = await getSession();
  session.destroy();
  redirect("/");
}

// ===============================
// GET SESSION
// ===============================
export async function getSession() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }
  return session;
}

// ===============================
// CREATE USER
// ===============================

export const createUserToDB = async (userData: {
  username: string;
  email: string;
  password: string;
}): Promise<Users> => {
  try {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    console.log(`Hashed Password: ${hashedPassword}`);
    const user = await prisma.users.create({
      data: {
        username: userData.username.toLowerCase(),
        email: userData.email,
        password: hashedPassword, // Make sure to hash the password before saving
      },
    });
    return user;
  } catch (error) {
    throw new Error("Error creating user: " + error);
  }
};

// GET ANIME LIST BY SEASON from MyAnimeList API

export const getAnimeListBySeason = async (
  year: number,
  season: string,
  offset: number = 0,
): Promise<Anime_Data_Seasonal[]> => {
  // Specify the return type as an array of Anime_Data_Seasonal
  try {
    const res = await fetch(
      `https://api.myanimelist.net/v2/anime/season/${year}/${season}?offset=${offset}&limit=50`,
      {
        headers: {
          "X-MAL-CLIENT-ID": "55c19f03ea57271a9b33ff0edbaed468",
        },
        cache: "force-cache",
      },
    );

    // Check if response is not ok
    if (!res.ok) {
      throw new Error("Failed to fetch anime list");
    }

    // Parse response body as JSON
    const data = await res.json();

    // Ensure data.data is an array
    if (!Array.isArray(data.data)) {
      throw new Error("Unexpected data format: Expected an array");
    }

    // Return the parsed JSON data
    return data.data;
  } catch (error) {
    // Handle errors if needed
    console.error("Error fetching anime list:", error);
    throw error; // Re-throw the error to propagate it
  }
};

// GET ANIME LIST BY HIGHEST RATING from MyAnimeList API

export const getAnimeListByRanking = async (
  rankingtype: AnimeRankingType,
  limit: number = 50,
): Promise<Anime_Data_HighestRated[]> => {
  // Specify the return type as an array of Anime_Data_Seasonal
  try {
    const res = await fetch(
      `https://api.myanimelist.net/v2/anime/ranking?ranking_type=${rankingtype}&limit=${limit}`,
      {
        headers: {
          "X-MAL-CLIENT-ID": "55c19f03ea57271a9b33ff0edbaed468",
        },
        cache: "force-cache",
      },
    );

    // Check if response is not ok
    if (!res.ok) {
      throw new Error("Failed to fetch anime list");
    }

    // Parse response body as JSON
    const data = await res.json();

    // Ensure data.data is an array
    if (!Array.isArray(data.data)) {
      throw new Error("Unexpected data format: Expected an array");
    }

    // Return the parsed JSON data
    return data.data;
  } catch (error) {
    // Handle errors if needed
    console.error("Error fetching anime list:", error);
    throw error; // Re-throw the error to propagate it
  }
};
