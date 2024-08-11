import prisma from "@/app/prisma";
import { getSession } from "./actions";
import { Users } from "@prisma/client";

//
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
