"use server";
import { redirect } from "next/navigation";
import prisma from "../prisma";
import { getSession } from "./actions";
import { MapResult } from "@prisma/client";
import { revalidatePath } from "next/cache";

// GET RECENT MAPS OF LOGGED-IN USER
export async function getRecentMaps(): Promise<MapResult[]> {
  const session = await getSession();
  if (!session) return redirect("/login");
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
  if (!session || !session.userId) return redirect("/login");

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
