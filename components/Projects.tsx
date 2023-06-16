import React from "react";

type Props = {};

function Projects({}: Props) {
  return (
    <div
      className="min-h-screen relative flex overflow-hidden flex-col text-left md:flex-row
      w-screen py-[100px] justify-evenly mx-auto items-center z-0 dark:text-slate-200"
    >
      <div
        className="absolute top-24 uppercase tracking-[20px]
       text-gray-500 text-2xl"
      >
        Projects
      </div>
    </div>
  );
}

export default Projects;
