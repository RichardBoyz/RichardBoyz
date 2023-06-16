import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" min-h-screen dark:text-slate-200 relative 
  flex flex-col text-left
   w-screen px-10 justify-center 
  mx-auto items-center xl:space-y-0"
    >
      <h3 className=" absolute top-28 uppercase text-center tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className=" absolute top-40 uppercase text-center tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for currency proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
}

export default Skills;
