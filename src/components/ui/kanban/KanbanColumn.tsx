import Task from "./Task";

const KanbanColumn = ({ column }) => {
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
