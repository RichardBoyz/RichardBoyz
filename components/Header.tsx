import React from "react";
import { SocialIcon } from "react-social-icons";
import { MouseEventHandler } from "react";
import { motion } from "framer-motion";
import { FileText } from "@/assets";
type Props = { setDarkModeAction: MouseEventHandler };

export default function Header({ setDarkModeAction }: Props) {
  const sendEmail = () => {
    window.location.href = "mailto:r1382333@gmail.com";
  };
  return (
    <header className="header">
      <motion.div
        className="flex flex-row items-center"
        initial={{ x: -300, opacity: 0, scale: 0.1 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        // transition={{ duration: 0.2 }}
      >
        <SocialIcon
          url="https://github.com/RichardBoyz"
          fgColor="currentColor"
          bgColor="transparent"
          className="dark:text-blue-200 text-blue-950"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/richardboyz/"
          fgColor="currentColor"
          bgColor="transparent"
          className="dark:text-blue-200 text-blue-950"
        />
        <div
          className="flex justify-center items-center cursor-pointer"
          style={{ width: 50, height: 50 }}
        >
          <FileText className="dark:text-blue-200 w-full h-6 text-blue-950"></FileText>
        </div>
      </motion.div>
      <motion.div
        className="flex flex-row items-center text-slate-700 dark:text-slate-200"
        initial={{ x: 300, scale: 0.1, opacity: 0 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
      >
        <button
          className="dark:text-cyan-200 text-blue-950"
          onClick={setDarkModeAction}
        >
          Mode
        </button>
        <SocialIcon
          onClick={sendEmail}
          network="email"
          fgColor="currentColor"
          bgColor="transparent"
          className="dark:text-blue-200 text-blue-950"
        />
        <p
          className="mail--text text-blue-950 dark:text-cyan-200"
          onClick={sendEmail}
        >
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
}
