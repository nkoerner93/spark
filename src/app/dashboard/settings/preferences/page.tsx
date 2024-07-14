"use client";
import { Button } from "@/components/ui/shad-cn/button";
import { useTheme } from "next-themes";

export default function PreferencesSettings() {
  const { setTheme } = useTheme();

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold text-primary">Preferences:</h2>
      <div className="flex flex-col gap-2">
        <h3 className="font-bold">Theme:</h3>
        <div className="flex flex-row gap-2">
          <Button
            className="bg-secondary text-primary hover:bg-primary hover:text-secondary"
            onClick={() => setTheme("light")}
          >
            Light
          </Button>
          <Button
            className="bg-secondary text-primary hover:bg-primary hover:text-secondary"
            onClick={() => setTheme("dark")}
          >
            Dark
          </Button>
        </div>
      </div>
    </div>
  );
}
