import { getRecentMaps } from "@/app/actions/mapCalculatorActions";
import Poe_CurrencyMapCalculator from "@/components/Poe_CurrencyMapCalculator";
import HeroSection from "@/components/ui/HeroSection";
import { Card, CardContent } from "@/components/ui/shad-cn/card";
import React from "react";

const POE_MapCalculator = async () => {
  const mapResults = await getRecentMaps();
  const totalDivines = mapResults.reduce(
    (sum, mapResult) => sum + (mapResult.divine || 0),
    0,
  );
  const totalChaos = mapResults.reduce(
    (sum, mapResult) => sum + (mapResult.chaos || 0),
    0,
  );
  return (
    <section className="flex h-screen flex-row p-2">
      <div className="relative w-[100%]">
        <HeroSection
          title="Path of Exile"
          subtitle={`Add a map to your log or pick an older session from the list on the left`}
        />
        <div className="m-4 flex gap-8 md:flex-row">
          <Card className="p-4 shadow-md">
            <div className="flex h-full flex-col justify-between">
              {/* RECENT MAPS */}
              <div>
                <h2 className="font-semibold text-primary ">Recent maps:</h2>
                {mapResults ? (
                  mapResults.map((map) => (
                    <div key={map.id} className="flex flex-col gap-2">
                      <span>{map.map}</span>
                      <span className="flex flex-row gap-1">
                        {map.divine}{" "}
                        <img
                          src="/images/pathofexile/currency_divineorb.png"
                          alt="divineorb"
                          width={25}
                          height={25}
                        />
                        {map.chaos}
                        {"  "}
                        <img
                          src="/images/pathofexile/currency_chaosorb.png"
                          alt="chaosorb"
                          width={25}
                          height={25}
                        />
                      </span>
                    </div>
                  ))
                ) : (
                  <span>Please enter maps</span>
                )}
              </div>
              {/* TOTAL MAPS + RESULTS */}
              <div className="flex flex-col gap-2">
                <span>Total:</span>
                <div className="flex flex-row gap-2">
                  <span className="flex flex-row gap-1">
                    {totalDivines}{" "}
                    <img
                      src="/images/pathofexile/currency_divineorb.png"
                      alt="divineorb"
                      width={25}
                      height={25}
                    />
                  </span>
                  <span className="flex flex-row gap-1">
                    {totalChaos}{" "}
                    <img
                      src="/images/pathofexile/currency_chaosorb.png"
                      alt="chaosorb"
                      width={25}
                      height={25}
                    />
                  </span>
                </div>
              </div>
            </div>
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
