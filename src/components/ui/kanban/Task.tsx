// Task.tsx

import { Tasktype } from "@/app/actions/kanbanActions";

const Task = ({ taskdata }: { taskdata: Tasktype }) => {
  return (
    <div className="kanban-task">
      <h4>{taskdata.title}</h4>
      <p>{taskdata.description}</p>
    </div>
  );
};

export default Task;
