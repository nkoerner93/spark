"use server";
import { TaskStatus } from "@prisma/client";
import prisma from "../prisma";
import { getSession } from "./actions";

export type Boardtype = {
  id: number;
  title: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  columns: Columntype[];
};

export type Columntype = {
  id: number;
  title: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  tasks: Tasktype[];
};

export type Tasktype = {
  id: number;
  title: string;
  description: string | null;
  columnId: number;
  status: TaskStatus;
  createdAt: Date;
  updatedAt: Date;
};

type KanbanBoardResponse = {
  success: boolean;
  data?: Boardtype[];
  reason?: string;
};

// Get the Kanban board data for the logged-in user (based on active-session)
export async function getKanbanBoardDataBySession(): Promise<KanbanBoardResponse> {
  const session = await getSession();

  if (!session || !session.userId) {
    return { success: false };
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
    return { success: false, reason: "Error fetching data" };
  }
}
