"use client";
import { Boardtype, Columntype } from "@/app/actions/kanbanActions";
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "@hello-pangea/dnd";
import { useEffect, useState } from "react";
import KanbanColumn from "./KanbanColumn";

// Type for reorder function
const reorder = (
  list: Columntype[],
  startIndex: number,
  endIndex: number,
): Columntype[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

// Define the props type
interface KanbanBoardProps {
  UserBoardData: Boardtype | undefined;
}

const KanbanBoard = ({ UserBoardData }: KanbanBoardProps) => {
  const [columns, setColumns] = useState<Columntype[]>(
    UserBoardData?.columns || [],
  );

  const sortedColumns = UserBoardData?.columns.sort(
    (a, b) => a.columnOrder - b.columnOrder,
  );

  useEffect(() => {
    if (UserBoardData) {
      setColumns(sortedColumns || []);
    }
  }, [UserBoardData, sortedColumns]);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    // Dropped outside the list
    if (!destination) {
      return;
    }

    // Reorder within the same list
    if (source.droppableId === destination.droppableId) {
      const reorderedColumns = reorder(
        columns,
        source.index,
        destination.index,
      );
      setColumns(reorderedColumns);
    }
  };

  return (
    <section className="relative mt-4 overflow-hidden">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
          droppableId="kanban-board"
          direction="horizontal"
          type="COLUMN"
        >
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="flex w-full gap-4"
            >
              {columns.map((column, index) => (
                <Draggable
                  key={column.id}
                  draggableId={`${column.id}`}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        ...provided.draggableProps.style,
                        opacity: snapshot.isDragging ? 0.5 : 1,
                        flex: `1 1 0`,
                        maxWidth: "300px",
                        minWidth: "120px",
                        boxSizing: "border-box",
                      }}
                    >
                      <KanbanColumn column={column} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </section>
  );
};

export default KanbanBoard;
