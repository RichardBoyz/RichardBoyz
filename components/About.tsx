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
     md:text-left max-w-7xl px-10  pt-[100px]
     justify-evenly mx-auto items-center"
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <div className="flex flex-col md:flex-row w-full items-center">
        <motion.img
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          whileInView={{ x: 0, opacity: 1 }}
          className=" md:mb-0 flex-shrink-0 w-56 h-56
        rounded-full object-cover md:rounded-lg
         md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]
         mt-5 md:mt-0
        "
          src="https://drive.google.com/uc?id=1b7saXJaSwXDi9Q_6u_rYia5wnpoLcLdf"
        />

        <div className="space-y-10 px-0 md:px-10 pt-4 md:pt-0">
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
      </div>
    </motion.div>
  );
}
