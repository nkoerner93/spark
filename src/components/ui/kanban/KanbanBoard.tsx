"use client";
import { Boardtype, Columntype } from "@/app/actions/kanbanActions";
import { useState } from "react";

import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
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
            className="flex flex-row gap-8"
          >
            {columns.map((column: Columntype, index: number) => (
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
  );
};

export default KanbanBoard;
