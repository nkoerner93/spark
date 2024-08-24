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
    <section className="flex flex-col rounded ">
      <div className="kanban-column flex flex-col gap-4 rounded-lg border-[1px] border-neutral-200 bg-slate-100 p-4">
        <input
          type="text"
          className="text-medium rounded border-[1px] border-neutral-200 bg-white py-2 text-center font-semibold text-primary dark:bg-secondary"
          value={columnTitle}
          onChange={(e) => setColumnTitle(e.target.value)}
          onBlur={handleBlur}
          disabled={isPending}
        />
        <Card className="bg-slate-100">
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
