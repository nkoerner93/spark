// Task.tsx

import { Tasktype } from "@/app/actions/kanbanActions";
import { Separator } from "../shad-cn/separator";

const Task = ({ taskdata }: { taskdata: Tasktype }) => {
  return (
    <div className="rounded-sm bg-white p-4">
      <h4 className="font-medium">{taskdata.title}</h4>
      <Separator className="my-2 bg-primary" />
      <p>{taskdata.description}</p>
    </div>
  );
};

export default Task;
