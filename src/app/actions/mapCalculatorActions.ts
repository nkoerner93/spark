"use server";
import { MapResult } from "@prisma/client";
import { revalidatePath } from "next/cache";
import prisma from "../prisma";
import { getSession } from "./actions";

// GET RECENT MAPS OF LOGGED-IN USER
export async function getRecentMaps(): Promise<MapResult[] | null> {
  const session = await getSession();
  if (!session.isLoggedIn) return null;
  const recentMaps = await prisma.mapResult.findMany({
    where: { userId: session.userId },
  });
  if (!recentMaps) {
    throw new Error("No Maps found.");
  }

  revalidatePath("/path-to-your-page");
  return recentMaps;
}

// ADD MAP TO RECENT MAPS
export async function createMapResult(values: any) {
  const session = await getSession();
  if (!session || !session.userId) return false;

  const result = await prisma.mapResult.create({
    data: {
      userId: session.userId,
      map: values.map,
      divine: values.divine,
      chaos: values.chaos,
      mapdrops: 0,
    },
  });

  revalidatePath("/dashboard/gaming/pathofexile/mapcalculator");

  return result;
}

// CLEAR ALL MAPS FROM USER
export async function deleteAllMapResults() {
  const session = await getSession();
  if (!session || !session.userId) return false;

  const result = await prisma.mapResult.deleteMany({
    where: { userId: session.userId },
  });

  revalidatePath("/dashboard/gaming/pathofexile/mapcalculator");

  return result;
}
