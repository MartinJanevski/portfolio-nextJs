/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { Experience } from "typing";

type Props = {
  experience: Experience;
};

export default function WorkExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 first-letter:cursor-pointer transition-opacity duration-200 over">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-45 h-32 -scale-90 rouned-full object-cover object-center"
        src={urlFor(experience?.companyImage)?.url()}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-xl font-light">FRONT END DEVELOPER</h4>
        <p className="font-bold text-2xl mt-1">{experience?.company}</p>
        <div className="flex space-x-2 my-2">
          {experience?.technologies?.map((technology) => {
            // <p key={technology?._id}>{technology?.title}</p>
            if (technology?.image)
              return (
                <img
                  key={technology?._id}
                  className="h-10 w-10 rounded-full"
                  src={urlFor(technology?.image && technology?.image)?.url()}
                  alt="img"
                />
              );
          })}
        </div>
        <p></p>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience?.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-sm">
          {experience?.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
