"use client"; // This is a client component
import { Boardtype } from "@/app/actions/kanbanActions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/shad-cn/select";
import { Separator } from "@/components/ui/shad-cn/separator";
import { resetServerContext } from "@hello-pangea/dnd";
import { useState } from "react";
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

  resetServerContext();
  return (
    <section>
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
      <Separator className="my-2 w-[200px]" />
      <KanbanBoard UserBoardData={selectedBoard} />
    </section>
  );
};

export default Kanban;
