"use server";

import { SessionData } from "@/lib/lib";
import { getSession } from "./actions";
import prisma from "@/app/prisma"; // Adjust this import based on your Prisma setup

type Profile = {
  session: SessionData;
  user: {
    id: number;
    username: string;
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
