import prisma from "@/app/prisma";
import { getSession } from "@/app/actions/actions";
import { Users } from "@prisma/client";
import { redirect } from "next/navigation";

// GET ALL PUBLIC USERS
export async function getPublicUsers(boolean: boolean): Promise<Users[]> {
  // Validate Session
  const session = await getSession();
  if (!session.userId) throw new Error("Not authenticated");

  const allusers = await prisma.users.findMany({
    where: { isPublic: boolean },
  });

  if (!allusers) {
    throw new Error("No users found.");
  } else {
    return allusers;
  }
}

// GET CURRENT USER
export async function getUserByName(username: string): Promise<Users | null> {
  const session = await getSession();
  if (!session.userId) return redirect("/login");

  const currentUser = await prisma.users.findFirst({
    where: { username: username },
  });

  if (!currentUser) return redirect("/dashboard");
  return currentUser;
}
