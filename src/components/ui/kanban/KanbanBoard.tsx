"use client";
import { Boardtype } from "@/app/actions/kanbanActions";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { useEffect, useState } from "react";
import KanbanColumn from "./KanbanColumn";

const reorder = (list: any[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const KanbanBoard = ({
  UserBoardData,
}: {
  UserBoardData: Boardtype | undefined;
}) => {
  const [columns, setColumns] = useState(UserBoardData?.columns || []);

  useEffect(() => {
    if (UserBoardData) {
      setColumns(UserBoardData.columns);
    }
  }, [UserBoardData]);

  const onDragEnd = (result) => {
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
    <section className="relative overflow-hidden">
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
                        flex: `1 0 ${100 / columns.length}%`, // Dynamically adjust width
                        maxWidth: `calc(${100 / columns.length}% - 16px)`, // Account for gap
                        minWidth: "150px", // Set a reasonable min width
                        boxSizing: "border-box", // Include padding in width calculations
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
