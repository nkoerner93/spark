import { Columntype } from "@/app/actions/kanbanActions";
import Task from "./Task";

const KanbanColumn = ({ column }: { column: Columntype }) => {
  return (
    <div className="kanban-column">
      <h3>{column.title}</h3>
      <div className="kanban-tasks">
        {column.tasks.map((task) => (
          <Task key={task.id} taskdata={task} />
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;
