import { motion } from "framer-motion";
import Link from "next/link";
import React, { MouseEventHandler } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["我叫李明修", "可以叫我 Richard", "好欸"],
    loop: true,
    delaySpeed: 1500,
  });
  const handleScroll: MouseEventHandler<HTMLButtonElement> = (event) => {
    const { name } = event.currentTarget.dataset;
    if (name) {
      const element = document.getElementById(name);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <div className=" p-12 w-screen flex flex-col items-center min-h-screen">
      <div className="water--container">
        <motion.div
          className="absolute"
          initial={{ y: 0 }}
          animate={{ y: -10 }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <img
            className="my--photo rounded-full h-[100px] w-[100px] object-cover"
            src="https://drive.google.com/uc?id=1KVr3bH8vgATepmnDf1vSQ3yuOPZoPixO"
            alt=""
          />
        </motion.div>

        <h1 className=" relative top-28 md:top-36">
          <span className="dark:text-white text-teal-100 text-lg">{text}</span>
          <Cursor cursorColor="#6495ed"></Cursor>
        </h1>
      </div>
      <div className=" text-gray-500 p-8 tracking-[10px] text-center">
        Software engineer
      </div>
      <div className="dark:text-slate-300 pt-5 flex gap-2 flex-wrap">
        {/* <Link href="#about">
          <button className=" custom--btn">About</button>
        </Link>
        <Link href="#experience">
          <button className=" custom--btn">Experience</button>
        </Link>
        <Link href="#skills">
          <button className=" custom--btn">Skills</button>
        </Link>
        <Link href="#projects">
          <button className=" custom--btn">Projects</button>
        </Link> */}
        <button
          className=" custom--btn"
          onClick={handleScroll}
          data-name="about"
        >
          About
        </button>

        <button
          className=" custom--btn"
          onClick={handleScroll}
          data-name="experience"
        >
          Experience
        </button>

        <button
          className=" custom--btn"
          onClick={handleScroll}
          data-name="skills"
        >
          Skills
        </button>

        <button
          className=" custom--btn"
          onClick={handleScroll}
          data-name="projects"
        >
          Projects
        </button>
      </div>
    </div>
  );
}
