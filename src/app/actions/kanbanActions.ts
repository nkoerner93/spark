"use server";
import prisma from "../prisma";
import { getSession } from "./actions";

// Get the Kanban board data for the logged-in user
export async function getKanbanBoardDataBySession() {
  const session = await getSession();

  if (!session || !session.userId) {
    return { success: false, reason: "not_logged_in" };
  }

  try {
    // Fetch the user's board with columns and tasks
    const userBoardData = await prisma.board.findMany({
      where: {
        userId: session.userId,
      },
      include: {
        columns: {
          include: {
            tasks: true,
          },
        },
      },
    });

    if (!userBoardData.length) {
      return { success: false, reason: "No boards found." };
    }

    return { success: true, data: userBoardData };
  } catch (error) {
    console.error("Error fetching Kanban board data:", error);
    throw error; // Handle this in your page/component
  }
}
