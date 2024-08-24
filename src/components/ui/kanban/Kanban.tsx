"use client"; // This is a client component
import { Boardtype, addColumnToKanbanBoard } from "@/app/actions/kanbanActions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/shad-cn/select";
import { useState } from "react";
import { Button } from "../shad-cn/button";
import KanbanBoard from "./KanbanBoard";

const Kanban = ({ boards }: { boards: Boardtype[] }) => {
  // Initialize state with the first board or a default value
  const [selectedBoardTitle, setSelectedBoardTitle] = useState(
    boards?.[0]?.title || "Untitled",
  );

  // Find the selected board data based on the selected title
  const selectedBoard = boards?.find(
    (board) => board.title === selectedBoardTitle,
  );

  return (
    <section>
      <div className="flex flex-row justify-between gap-4">
        <Select onValueChange={(value) => setSelectedBoardTitle(value)}>
          <SelectTrigger className="w-auto gap-4 border-0 bg-primary text-lg font-medium text-secondary">
            <SelectValue placeholder={selectedBoardTitle || "Select a board"} />
          </SelectTrigger>
          <SelectContent>
            {boards?.map((board) => (
              <SelectItem
                key={board.id}
                className="text-sm font-medium"
                value={board.title}
              >
                {board.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {selectedBoard?.columns.length >= 4 ? (
          <div className="flex flex-row gap-2">
            <Button
              disabled
              onClick={() => addColumnToKanbanBoard(selectedBoard?.id)}
            >
              Add Column
            </Button>
          </div>
        ) : (
          <div className="flex flex-row gap-2">
            <Button onClick={() => addColumnToKanbanBoard(selectedBoard?.id)}>
              Add Column
            </Button>
          </div>
        )}
      </div>
      <KanbanBoard UserBoardData={selectedBoard} />
    </section>
  );
};

export default Kanban;
