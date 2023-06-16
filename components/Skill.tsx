import { motion } from "framer-motion";
import React from "react";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft = false }: Props) {
  return (
    <div className=" group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? 1 : 0, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://images.ctfassets.net/ooa29xqb8tix/RrX9HCiZ8qPoIpJSlHphR/f9778b44e2b768d31fafb4ac70956682/vue-logo.png?w=400&q=50"
        className="rounded-full border border-gray-500 
        object-cover w-14 h-14 md:w-24 md:h-24 xl:w-32 xl:h-32
        filter group-hover:grayscale transition duration-300 ease-in-out
        "
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 
       ease-in-out group-hover:bg-white w-full h-full rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
