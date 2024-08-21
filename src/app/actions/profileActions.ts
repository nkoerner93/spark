"use server";

import prisma from "@/app/prisma"; // Adjust this import based on your Prisma setup
import { SessionData } from "@/lib/lib";
import { Users } from "@prisma/client";
import { getSession } from "./actions";

type Profile = {
  session: SessionData;
  user: {
    isPublic: boolean | null;
  } | null;
};

export async function getProfile(): Promise<Profile> {
  const session = await getSession();
  if (!session.userId) throw new Error("Not authenticated");

  const user = await prisma.users.findUnique({
    where: { id: session.userId },
    select: { isPublic: true },
  });

  return { session, user };
}

export async function updateProfile(data: { isPublic: boolean }) {
  const session = await getSession();
  if (!session.userId) throw new Error("Not authenticated");

  await prisma.users.update({
    where: { id: session.userId },
    data: { isPublic: data.isPublic },
  });

  return { success: true };
}

// GET USERPROFILE DATA
export interface GetUserProfileResponse {
  success: boolean;
  reason: string;
  totalSeries: number;
  userData: Users | null; // Prisma type for Users
}

// Define a function that uses Prisma Client
export async function getUserProfile(
  username: string,
): Promise<GetUserProfileResponse> {
  try {
    // Fetch the user and their subscribed TV series by their username
    const user = await prisma.users.findUnique({
      where: { username },
      include: { subscribed_series: true },
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
      return {
        success: false,
        reason: "No favorites found.",
        totalSeries: 0,
        userData: user,
      };
    }

    return {
      success: true,
      userData: user,
      totalSeries,
      reason: "",
    };
  } catch (error) {
    console.error("Error finding favorite series:", error);
    throw error; // Re-throw the error for further handling in the component
  }
}
