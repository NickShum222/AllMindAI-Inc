import React from "react";
import { ObjectiveCard } from "@/Components";

const Objective = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 mt-32">
        <div className="flex items-center justify-center flex-col gap-y-4 max-w-2xl mx-auto">
          <p className="text-lg tracking-[-0.015em] text-center">What we do</p>
          <h2 className="md:text-5xl text-3xl tracking-[-0.04em] text-center md:leading-[58px]">
            Powerful features and datasets for your analysis
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 mt-20">
          <ObjectiveCard title="Find top engineers">
            <div className="flex h-full w-full px-4 items-center justify-center">
              <div className="grid grid-cols-3 gap-4 relative">
                {[...Array(9)].map((_, i) => (
                  <TopEngineerCard key={i} />
                ))}
              </div>
            </div>
          </ObjectiveCard>
          <ObjectiveCard title="Get exclusive datapoints"></ObjectiveCard>
          <ObjectiveCard title="Seamless integrations"></ObjectiveCard>
          <ObjectiveCard title="Accurate employee vesting schedules"></ObjectiveCard>
          <ObjectiveCard title="Company emails and contacts"></ObjectiveCard>
          <ObjectiveCard title="Competitor Maps"></ObjectiveCard>
        </div>
      </section>
    </>
  );
};

const TopEngineerCard = (() => {
  return (
    <div className="bg-black rounded-md md:w-[126px] md:h-[126px] max-md:w-[18vw] max-md:h-[18vw]">

    </div>
  )
}) 

export default Objective;
