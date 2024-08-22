const Task = ({ taskdata }) => {
  return (
    <div className="kanban-task">
      <h4>{taskdata.title}</h4>
      <p>{taskdata.description}</p>
      {/* Add more task fields as needed */}
    </div>
  );
};

export default Task;
