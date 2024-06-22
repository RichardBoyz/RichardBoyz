import { motion } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

type Props = {};

function Projects({}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectRefs = useRef([]);
  const scrollContainerRef = useRef(null);

  const projects = [
    {
      img: "https://i.imgur.com/w7nv1WQ.jpeg",
      description:
        "可以多人連線對戰的剪刀石頭布遊戲 : 前端使用 React，配合 Firebase 實現及時對戰",
      note: "我是連結 Click me",
      link: "https://rock-paper-scissors-4a35f.web.app/",
    },
    {
      img: "https://i.imgur.com/l1OeJ2v.png",
      description:
        "實作 JWT 驗證和登入 (JSON Web Token) : 前端使用 React，後端使用 NestJS，資料庫使用 MongoDB",
      note: "還在GitHub上之 1",
    },
    {
      img: "https://i.imgur.com/JvmEzkp.png",
      description:
        "簡易問答遊戲 : Flutter App 使用 Bloc 狀態管理。可以記錄答對或答錯的次數，且每提倒數15秒的問答遊戲",
      note: "還在GitHub上之 2",
    },
    {
      img: "https://i.imgur.com/NXgBPuS.png",
      description:
        "簡易聊天室 : Flutter App 和 Firebase 結合資料處理，也使用 Push Notification",
      note: "還在GitHub上之 3",
    },
  ];

  const handleClickProject = () => {
    window.open("https://rock-paper-scissors-4a35f.web.app/");
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, clientWidth } = scrollContainerRef.current;
    const fullWidth = (projects.length - 1) * clientWidth;
    if (Math.floor(scrollLeft) === 0) {
      setCurrentIndex(0);
    } else {
      const newIndex =
        projects.length -
        1 -
        Math.floor((fullWidth - Math.floor(scrollLeft)) / clientWidth);
      setCurrentIndex(newIndex);
    }
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      (scrollContainerRef.current as any).addEventListener(
        "scroll",
        handleScroll
      );
    }

    return () => {
      if (scrollContainerRef.current) {
        (scrollContainerRef.current as any).removeEventListener(
          "scroll",
          handleScroll
        );
      }
    };
  }, []);
  const handleClickNext = () => {
    console.log(`handleClickNext currentIndex: ${currentIndex}`);
    if (currentIndex < projects.length - 1) {
      (projectRefs.current[currentIndex + 1] as any).scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleClickPrev = () => {
    if (currentIndex > 0) {
      (projectRefs.current[currentIndex - 1] as any).scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
      setCurrentIndex(currentIndex - 1);
    }
  };

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

      {currentIndex > 0 && (
        <div
          onClick={handleClickPrev}
          className="absolute left-[1rem] z-30 p-2 bg-gray-700 text-white rounded-full cursor-pointer"
        >
          <ArrowLeftIcon className="text-[#5f9ea0] h-7 w-7 animate-pulse" />
        </div>
      )}

      <div
        ref={scrollContainerRef}
        className="relative w-full flex
       overflow-x-scroll overflow-y-hidden snap-x snap-mandatory
       scrollbar scrollbar-thumb-[#5f9ea0]/80 scrollbar-track-gray-700
        scrollbar-thin z-20"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el: any) => ((projectRefs.current[index] as any) = el)}
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
              className="max-h-[300px] md:max-h-[500px] lg:max-h-[550px] object-cover"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className=" text-2xl font-semibold text-center">
                <span
                  className="underline decoration-[#04aef5]/50"
                  onClick={project.link ? handleClickProject : () => {}}
                  style={project.link ? { cursor: "pointer" } : {}}
                >
                  {project.note}
                </span>
              </h4>
              <p className="text-lg text-center md:text-left">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {currentIndex < projects.length - 1 && (
        <div
          onClick={handleClickNext}
          className="absolute right-[1rem] z-30 p-2 bg-gray-700 text-white rounded-full cursor-pointer"
        >
          <ArrowRightIcon className="text-[#5f9ea0] h-7 w-7 animate-pulse" />
        </div>
      )}

      <div className="w-full absolute top-[30%] bg-[#04aef5]/10 left-0 h-[300px] md:h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
