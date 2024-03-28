import Poe_CurrencyMapCalculator from "@/components/Poe_CurrencyMapCalculator";
import HeroSection from "@/components/ui/HeroSection";
import { Card, CardContent } from "@/components/ui/shad-cn/card";
import React from "react";

const POE_MapCalculator = () => {
  return (
    <section className="flex h-screen flex-row p-2">
      <div className="relative w-[100%]">
        <HeroSection
          title="Path of Exile"
          subtitle={`Add a map to your log or pick an older session from the left list`}
        />
        <div className="m-4 flex flex-col-reverse justify-center gap-8 md:flex-row">
          <Card className="p-4 shadow-md">
            <h2 className="font-semibold text-primary ">Recent maps:</h2>
          </Card>
          <div>
            <Poe_CurrencyMapCalculator />
          </div>
        </div>
      </div>
    </section>
  );
};

export default POE_MapCalculator;
