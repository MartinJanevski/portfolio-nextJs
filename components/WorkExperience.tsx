import experience from "portfolio-martin/schemas/experience";
import React, { Component } from "react";
import { Experience } from "typing";
import WorkExperienceCard from "./WorkExperienceCard";

type Props = {
  experiences: Experience[];
};

export default function WorkExperience({ experiences }: Props) {
  return (
    <div className="h-screen flex relative overflow-hidden flex-col text-left  md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10  snap-x snap-mandatory scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {experiences?.map((experience) => (
          <WorkExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </div>
  );
}
