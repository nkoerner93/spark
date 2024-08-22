import { getKanbanBoardDataBySession } from "@/app/actions/kanbanActions";
import KanbanBoard from "@/components/ui/kanban/KanbanBoard";

// Async server component
const KanbanPage = async () => {
  const result = await getKanbanBoardDataBySession();

  if (!result.success) {
    // Handle error or redirect as necessary
    return <div>{result.reason}</div>;
  }

  const userBoardData = result.data;

  return <KanbanBoard UserBoardData={userBoardData} />;
};

export default KanbanPage;
