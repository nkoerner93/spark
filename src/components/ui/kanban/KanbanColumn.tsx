"use client";
import {
  AddTaskToKanbanColumn,
  Columntype,
  updateColumnTitle,
} from "@/app/actions/kanbanActions";
import { Button } from "@/components/ui/shad-cn/button";
import { Card } from "@/components/ui/shad-cn/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/shad-cn/dialog";
import { Loader2 } from "lucide-react";
import { ChangeEvent, FormEvent, useState, useTransition } from "react";
import Task from "./Task";

// Define the prop types
interface KanbanColumnProps {
  column: Columntype;
}

const KanbanColumn = ({ column }: KanbanColumnProps) => {
  // Task-related states
  const [open, setOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Column-related states
  const [columnTitle, setColumnTitle] = useState<string>(column.title);
  const [isPending, startTransition] = useTransition();

  const handleBlur = () => {
    startTransition(() => {
      updateColumnTitle(column.id, columnTitle).then((result) => {
        if (!result.success) {
          console.error(result.message);
        } else if (result.column) {
          // Ensure the column exists
          // Optionally refetch or update local state to ensure UI sync
          setColumnTitle(result.column.title);
        }
      });
    });
  };

  const handleAddTask = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = await AddTaskToKanbanColumn(
      column.boardId,
      column.id,
      title,
      description,
    );
    if (result.success) {
      setTitle("");
      setDescription("");
      setOpen(false);
    } else {
      console.error(result.message);
    }

    setIsSubmitting(false);
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
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
        <Button
          className="mx-auto w-fit"
          variant={"ghost"}
          onClick={() => setOpen(true)}
        >
          Add Task
        </Button>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <div className="inline-flex">
              <Button type="button">Add Task</Button>
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <form onSubmit={handleAddTask}>
                <input
                  type="text"
                  placeholder="Task Title"
                  value={title}
                  onChange={handleTitleChange}
                  required
                  className="mb-2 w-full rounded border p-2"
                />
                <textarea
                  placeholder="Add a task description..."
                  value={description}
                  onChange={handleDescriptionChange}
                  className="mb-2 w-full rounded border p-2"
                ></textarea>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    "Add Task"
                  )}
                </Button>
              </form>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default KanbanColumn;
