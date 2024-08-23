"use client";
import { Columntype, updateColumnTitle } from "@/app/actions/kanbanActions";
import { useState, useTransition } from "react";
import { Card } from "../shad-cn/card";
import Task from "./Task";

const KanbanColumn = ({ column }: { column: Columntype }) => {
  const [columnTitle, setColumnTitle] = useState(column.title);
  const [isPending, startTransition] = useTransition();

  const handleBlur = () => {
    startTransition(() => {
      updateColumnTitle(column.id, columnTitle).then((result) => {
        if (!result.success) {
          console.error(result.message);
        } else {
          // Optionally refetch or update local state to ensure UI sync
          setColumnTitle(result.column.title);
        }
      });
    });
  };

  return (
    <section className="mt-6 flex flex-row">
      <div className="kanban-column w-auto max-w-[400px]">
        <input
          type="text"
          className="py-2 text-center text-xl font-semibold text-primary"
          value={columnTitle}
          onChange={(e) => setColumnTitle(e.target.value)}
          onBlur={handleBlur}
          disabled={isPending}
        />
        <Card className="bg-slate-100 p-6">
          <div className="kanban-tasks">
            {column.tasks.map((task) => (
              <Task key={task.id} taskdata={task} />
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default KanbanColumn;
