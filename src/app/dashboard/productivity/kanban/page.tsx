import { getKanbanBoardDataBySession } from "@/app/actions/kanbanActions";
import HeroSection from "@/components/ui/HeroSection";
import KanbanBoard from "@/components/ui/kanban/KanbanBoard";
import { Button } from "@/components/ui/shad-cn/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/shad-cn/select";
import { Separator } from "@/components/ui/shad-cn/separator";
import Link from "next/link";

// Async server component
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
          <Button className="mx-auto flex w-[100]">Login</Button>
        </Link>
      </section>
    );
  }

  // Access the first title of the first object in the array
  const firstBoard = data?.[0]?.title || "Untitled";

  return (
    <section>
      <Select>
        <SelectTrigger className="w-[180px] border-0 text-lg font-bold">
          <SelectValue placeholder={firstBoard} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={firstBoard}>{firstBoard}</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
      <Separator className="my-2 w-[200px]" />
      <KanbanBoard UserBoardData={data} />
    </section>
  );
};

export default KanbanPage;
