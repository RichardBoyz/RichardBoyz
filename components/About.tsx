import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" h-screen relative flex flex-col dark:text-slate-200
     md:text-left md:flex-row max-w-7xl px-10 
     justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -300, opacity: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        whileInView={{ x: 0, opacity: 1 }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56
        rounded-full object-cover md:rounded-lg
         md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]
        "
        src="https://drive.google.com/uc?id=1b7saXJaSwXDi9Q_6u_rYia5wnpoLcLdf"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          這是一個{" "}
          <span className="underline decoration-[#f7ab0a]/50">簡單</span>{" "}
          的個人描述
        </h4>
        <p className=" text-base">
          我叫李明修🎈，喜歡新奇和有趣的事物。
          <br />
          平時有運動習慣，休閒是和朋友一起玩遊戲，不管桌遊或電腦遊戲都可以~
          <br />
          雖然目前算是全端工程師，但還是想先專研前端技術🧠
        </p>
      </div>
    </motion.div>
  );
}
