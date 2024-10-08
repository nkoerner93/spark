"use server";
import { TaskStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";
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

export interface Columntype {
  id: number;
  title: string;
  boardId: number; // Make sure this property is present
  columnOrder: number;
  createdAt: Date;
  updatedAt: Date;
  tasks: Tasktype[];
}

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
export async function getKanbanBoardDataBySession() {
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

// Update the column title in the kanban input & update the users database
// i.E. change "Todo" to "In Progress"
export async function updateColumnTitle(columnId: number, newTitle: string) {
  // Retrieve the user session
  const session = await getSession();

  // Ensure the user is authenticated
  if (!session || !session.userId) {
    return { success: false, message: "Unauthorized" };
  }

  try {
    // Verify that the column belongs to the authenticated user
    const column = await prisma.column.findFirst({
      where: {
        id: columnId,
        board: {
          userId: session.userId,
        },
      },
    });

    if (!column) {
      return {
        success: false,
        message: "Column not found or you do not have access to it",
      };
    }

    // Update the column title
    const updatedColumn = await prisma.column.update({
      where: { id: columnId },
      data: { title: newTitle },
    });
    revalidatePath("/dashboard/productivity/kanban");
    return { success: true, column: updatedColumn };
  } catch (error) {
    console.error("Failed to update column title", error);
    return { success: false, message: "Failed to update column title", error };
  }
}

// Add Column to Kanban Board in the Database
export async function addColumnToKanbanBoard(boardId: number | undefined) {
  // Retrieve the user session
  const session = await getSession();

  // Ensure the user is authenticated
  if (!session || !session.userId) {
    return { success: false, message: "Unauthorized" };
  }
  console.log(boardId);

  try {
    // Verify that the board belongs to the authenticated user
    const board = await prisma.board.findFirst({
      where: {
        id: boardId,
        userId: session.userId,
      },
    });

    if (!board) {
      return {
        success: false,
        message: "Board not found or you don't have access to it.",
      };
    }

    // Create a new column for the board
    const createdColumn = await prisma.column.create({
      data: {
        boardId: boardId!,
        title: "New Column",
      },
    });

    // Revalidate the path after the update
    revalidatePath("/dashboard/productivity/kanban");

    return { success: true, column: createdColumn };
  } catch (error) {
    console.error("Failed to create column", error);
    return { success: false, message: "Failed to create column", error };
  }
}

interface AddTaskResult {
  success: boolean;
  message?: string;
  task?: Tasktype; // Assuming you have a TaskType interface for the task model
  error?: any;
}

export async function AddTaskToKanbanColumn(
  boardId: number,
  columnId: number,
  title: string,
  description: string,
): Promise<AddTaskResult> {
  const session = await getSession();

  if (!session || !session.userId) {
    return { success: false, message: "Unauthorized" };
  }

  try {
    const board = await prisma.board.findFirst({
      where: {
        id: boardId,
        userId: session.userId,
      },
    });

    if (!board) {
      return {
        success: false,
        message: "Board not found or you don't have access to it.",
      };
    }

    const createdTask = await prisma.task.create({
      data: {
        columnId: columnId,
        title: title,
        description: description,
      },
    });

    revalidatePath("/dashboard/productivity/kanban");

    return { success: true, task: createdTask };
  } catch (error) {
    console.error("Failed to create task", error);
    return { success: false, message: "Failed to create task", error };
  }
}

// Update Kanban-Boards Column Order in the Database when swapping columns with drag and drop.
export async function updateColumnOrderInDB(columns: Columntype[]) {
  try {
    // Start a transaction to update all columns
    await prisma.$transaction(
      columns.map((column, index) => {
        return prisma.column.update({
          where: { id: column.id },
          data: { columnOrder: index + 1 }, // Update the column order in the database
        });
      }),
    );

    return { success: true };
  } catch (error) {
    console.error("Failed to update column order", error);
    return { success: false, error: "Failed to update column order" };
  }
}
