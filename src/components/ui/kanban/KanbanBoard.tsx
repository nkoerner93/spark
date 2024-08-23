"use client";
import { Boardtype } from "@/app/actions/kanbanActions";
import KanbanColumn from "./KanbanColumn";

const KanbanBoard = ({
  UserBoardData,
}: {
  UserBoardData: Boardtype | undefined;
}) => {
  return (
    <div>
      <div className="flex flex-row gap-8">
        {UserBoardData?.columns.map((column) => (
          <KanbanColumn key={column.id} column={column} />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
