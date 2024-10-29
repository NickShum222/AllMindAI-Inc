import React from "react";
import { ObjectiveCard } from "@/Components";

const Objective = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 mt-32 w-full">
        <div className="flex items-center justify-center flex-col gap-y-4 max-w-2xl mx-auto">
          <p className="text-lg tracking-[-0.015em] text-center">What we do</p>
          <h2 className="md:text-5xl text-3xl tracking-[-0.04em] text-center md:leading-[58px]">
            Powerful features and datasets for your analysis
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 mt-20 w-full">
          <ObjectiveCard title="Find top engineers">
            <div className="flex h-full w-full px-4 items-center justify-center">
              <div className="grid grid-cols-3 gap-4 relative">
                {[...Array(9)].map((_, i) => (
                  <TopEngineerCard key={i} />
                ))}
              </div>
            </div>
          </ObjectiveCard>
          <ObjectiveCard title="Get exclusive datapoints">
            <div className="items-center h-full w-full px-4">
              <div className="grid grid-cols-2 gap-4 px-[10%]">
                {[...Array(4)].map((_, i) => (
                  <DataPointCard key={i} />
                ))}
              </div>
            </div>
          </ObjectiveCard>
          <ObjectiveCard title="Seamless integrations">
            <div className="flex flex-1 justify-center items-center gap-2 h-full w-full px-[15%] mt-[15%]">
              {[...Array(5)].map((_, i) => (
                <IntegrationBadge key={i} />
              ))}
            </div>
          </ObjectiveCard>
          <ObjectiveCard title="Accurate employee vesting schedules">
          <div className="items-center h-full w-full px-4">
              <div className="flex flex-col items-center justify-center gap-4 px-[10%] flex-1">
                <div className="bg-black w-full aspect-video rounded-md"/>
                <div className="rounded-full w-[50%] bg-aviato_green h-[45px]"/>
              </div>
            </div>
          </ObjectiveCard>
          <ObjectiveCard title="Company emails and contacts">
          <div className="items-center h-full w-full px-4">
              <div className="flex flex-col items-center justify-center gap-4 px-[15%] flex-1 relative">
                <div className="bg-black w-full aspect-[28/9] rounded-md"/>
                <div className="bg-black w-full aspect-[36/9] rounded-md"/>

                <div className="rounded-full w-[50%] bg-aviato_green aspect-[42/9]"/>
              </div>
            </div>
          </ObjectiveCard>
          <ObjectiveCard title="Competitor Maps">
          <div className="items-center h-full w-full px-4">
              <div className="flex flex-col items-center justify-center gap-4 px-[12%] flex-1 relative">
              <div className="rounded-full w-[50%] bg-aviato_green aspect-[42/9]"/>

                <div className="bg-white grid grid-cols-3 rounded-[16px] w-full gap-2 aspect-[14/9] p-8">
                {[...Array(6)].map((_, i) => (
                <div className="bg-card_background w-full rounded-md"/>
              ))}
                </div>
              </div>
            </div>
          </ObjectiveCard>
        </div>
      </section>
    </>
  );
};

const TopEngineerCard = () => {
  return (
    <div className="bg-black rounded-md md:w-[126px] md:h-[126px] max-md:w-[18vw] max-md:h-[18vw]" />
  );
};
const DataPointCard = () => {
  return <div className="bg-black rounded-md w-full h-auto aspect-square" />;
};
const IntegrationBadge = () => {
  return <div className="bg-black rounded-full w-full h-full aspect-square" />;
};

export default Objective;
