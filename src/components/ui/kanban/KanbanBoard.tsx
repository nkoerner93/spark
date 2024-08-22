import KanbanColumn from "./KanbanColumn";

const KanbanBoard = ({ UserBoardData }) => {
  return (
    <div>
      {UserBoardData.map((board) => (
        <div key={board.id}>
          <h2>{board.title}</h2>
          <div className="kanban-columns">
            {board.columns.map((column) => (
              <KanbanColumn key={column.id} column={column} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
