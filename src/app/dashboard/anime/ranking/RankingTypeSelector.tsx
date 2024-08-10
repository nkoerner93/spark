"use client";

import { Button } from "@/components/ui/shad-cn/button";
import { useRouter } from "next/navigation";

export default function RankingTypeSelector({
  currentType,
}: {
  currentType: string;
}) {
  const router = useRouter();

  const handleRankingTypeChange = (rankingType: string) => {
    router.push(`?type=${rankingType}`);
  };

  return (
    <div className="flex flex-row gap-2 pb-1">
      <Button
        onClick={() => handleRankingTypeChange("all")}
        variant={currentType === "all" ? "default" : "outline"}
      >
        All
      </Button>
      <Button
        onClick={() => handleRankingTypeChange("airing")}
        variant={currentType === "airing" ? "default" : "outline"}
      >
        Airing
      </Button>
    </div>
  );
}
