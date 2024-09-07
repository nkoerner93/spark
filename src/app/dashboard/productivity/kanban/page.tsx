import { getKanbanBoardDataBySession } from "@/app/actions/kanbanActions";
import HeroSection from "@/components/ui/HeroSection";
import Kanban from "@/components/ui/kanban/Kanban";
import { Button } from "@/components/ui/shad-cn/button";
import Link from "next/link";

// This is a server component
const KanbanPage = async () => {
  const { success, data } = await getKanbanBoardDataBySession();

  if (!success) {
    // Handle error or redirect as necessary
    return (
      <section>
        <HeroSection
          title="My Kanban Board"
          subtitle="Please login to access your Kanban Boards"
        />
        <Link href={"/login"}>
          <Button className="mx-auto flex w-[100px]">Login</Button>
        </Link>
      </section>
    );
  }

  // Pass the fetched data to the client component
  return <Kanban boards={data} />;
};

export default KanbanPage;
