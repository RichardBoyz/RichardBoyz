import { motion } from "framer-motion";
import React from "react";

type Props = {};

function Projects({}: Props) {
  const projects = [
    {
      img: "https://i.imgur.com/l1OeJ2v.png",
      description:
        "實作 JWT 驗證和登入 (JSON Web Token) : 前端使用 React，後端使用 NestJS，資料庫使用 MongoDB",
    },
    {
      img: "https://i.imgur.com/JvmEzkp.png",
      description:
        "簡易問答遊戲 : Flutter App 使用 Bloc 狀態管理。可以記錄答對或答錯的次數，且每提倒數15秒的問答遊戲",
    },
    {
      img: "https://i.imgur.com/NXgBPuS.png",
      description:
        "簡易聊天室 : Flutter App 和 Firebase 結合資料處理，也使用 Pust Notification",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen relative flex overflow-hidden flex-col text-left md:flex-row
      w-screen py-[100px] justify-evenly mx-auto items-center z-0 dark:text-slate-200"
    >
      <div
        className="absolute top-28 uppercase tracking-[20px]
       text-gray-500 text-2xl"
      >
        Projects
      </div>

      <div
        className="relative w-full flex
       overflow-x-scroll overflow-y-hidden snap-x snap-mandatory
       z-20"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-screen flex-shrink-0 
          snap-center flex flex-col space-y-5 items-center justify-center
           p-20 md:p-40 h-screen"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 0.6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={project.img}
              alt=""
              className="max-h-[500px] lg:max-h-[550px] object-cover"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className=" text-2xl font-semibold text-center">
                <span className="underline decoration-[#04aef5]/50">
                  還在GitHub上之 {index + 1}
                </span>
              </h4>
              <p className="text-lg text-center md:text-left">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#04aef5]/10 left-0 h-[300px] md:h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
