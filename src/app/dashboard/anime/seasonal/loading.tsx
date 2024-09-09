import HeroSection from "@/components/ui/HeroSection";
import { getCurrentSeason } from "@/lib/utils/utils";
import { Loader2 } from "lucide-react";

export default function Loading() {
  const season = getCurrentSeason();
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div>
      <HeroSection
        title="Seasonal Animes"
        subtitle={`Discover all the latest animes from ${season} season.`}
      />
      <div className="w-full">
        <Loader2 className="mx-auto animate-spin text-center" />
      </div>
    </div>
  );
}
