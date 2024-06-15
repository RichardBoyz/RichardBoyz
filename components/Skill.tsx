import { motion } from "framer-motion";
import React from "react";

type Props = {
  directionLeft?: boolean;
  url?: string;
  degree?: number;
};

function Skill({ directionLeft = false, url = "", degree = 60 }: Props) {
  return (
    <div className=" group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? 1 : 0, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={url}
        className="rounded-full border border-gray-500 
         object-contain w-14 h-14 md:w-24 md:h-24 xl:w-28 xl:h-28
        filter
        "
      />
      {/* <div */}
      {/*   className="absolute opacity-0 group-hover:opacity-80 transition duration-300  */}
      {/*  ease-in-out group-hover:bg-white w-full h-full rounded-full z-0" */}
      {/* > */}
      {/*   <div className="flex items-center justify-center h-full"> */}
      {/*     <p className=" text-lg md:text-3xl font-bold text-black opacity-100"> */}
      {/*       {degree}% */}
      {/*     </p> */}
      {/*   </div> */}
      {/* </div> */}
    </div>
  );
}

export default Skill;
