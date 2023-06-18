import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
  const data = [
    {
      url: "https://images.ctfassets.net/ooa29xqb8tix/RrX9HCiZ8qPoIpJSlHphR/f9778b44e2b768d31fafb4ac70956682/vue-logo.png?w=400&q=50",
      degree: 75,
    },
    {
      url: "https://cdn-images-1.medium.com/v2/resize:fit:1200/1*5-aoK8IBmXve5whBQM90GA.png",
      degree: 70,
    },
    {
      url: "https://static-00.iconduck.com/assets.00/nestjs-icon-512x510-9nvpcyc3.png",
      degree: 65,
    },
    { url: "https://www.svgrepo.com/show/353657/django-icon.svg", degree: 80 },
    {
      url: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
      degree: 75,
    },
    {
      url: "https://cdn-icons-png.flaticon.com/512/5968/5968242.png",
      degree: 50,
    },
    {
      url: "https://cdn-icons-png.flaticon.com/512/1532/1532556.png",
      degree: 50,
    },
    {
      url: "https://cdn.iconscout.com/icon/free/png-256/free-mongodb-5-1175140.png",
      degree: 50,
    },
    {
      url: "https://cdn-icons-png.flaticon.com/512/5968/5968313.png",
      degree: 55,
    },
    {
      url: "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
      degree: 50,
    },
    {
      url: "https://cdn4.iconfinder.com/data/icons/redis-2/1451/Untitled-2-512.png",
      degree: 40,
    },
    {
      url: "https://min.io/resources/img/logo/MINIO_Bird.png",
      degree: 50,
    },
  ];
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
        滑鼠可移動到圖示上
      </h3>

      <div className="grid grid-cols-4 gap-5 xl:pt-8">
        {data.map((element, index) => (
          <Skill url={element.url} degree={element.degree} key={index} />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
