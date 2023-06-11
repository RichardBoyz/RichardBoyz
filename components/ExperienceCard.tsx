import { Django, Flutter, Nestjs, Nodejs, Vuejs } from "@/assets";
import { motion } from "framer-motion";
import React from "react";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
    w-[300px] md:w-1/2 xl:w-[900px] 
    snap-center pt-10 bg-[#5f75a7] dark:bg-[#282828]
    text-slate-200"
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://info.e-peer.tw/wp-content/uploads/2022/05/e-peer%E5%85%B1%E5%AD%B8%E5%B9%B3%E5%8F%B0_DM_OLai-16.png"
        alt=""
      />

      <div className="w-full p-10">
        <h4 className="text-4xl font-light">全端工程師</h4>
        <p className="font-bold text-2xl mt-1">Wizigo</p>
        <div className="flex space-x-2 my-2">
          <Vuejs className=" w-10 h-10 stroke-white hover:scale-150 transition duration-200" />
          <Nodejs className=" w-10 h-10 stroke-white hover:scale-150 transition duration-200" />
          <Nestjs className=" w-10 h-10 stroke-white hover:scale-150 transition duration-200" />
          <Flutter className=" w-10 h-10 stroke-white hover:scale-150 transition duration-200" />
          <Django className=" w-10 h-10 stroke-white hover:scale-150 transition duration-200" />
        </div>
        <p className="uppercase py-5 ">從 2020/9 ~ 現在</p>

        <ul className="list-disc space-y-4 ml-5 text-lg break-all">
          <li>功能開發、維護現有產品</li>
          <li>前端 RWD、UI component 設計，串接後端 API</li>
          <li>後端 RESTful 設計，資料表設計</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
