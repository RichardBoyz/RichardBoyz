import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";

type Props = {};

function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" min-h-screen dark:text-slate-200 relative 
    flex flex-col text-left
     w-screen px-10 justify-evenly 
    mx-auto items-center py-[100px]"
    >
      <h3 className="uppercase text-center tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      {/* <div className="w-full flex space-x-5 overflow-x-scroll items-center p-16 mt-20 snap-x snap-mandatory">
        <ExperienceCard />
        <ExperienceCard />
      </div> */}
      <div className="w-full flex justify-center mt-20">
        <ExperienceCard />
      </div>
    </motion.div>
  );
}

export default WorkExperience;
