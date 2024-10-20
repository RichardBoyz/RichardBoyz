import React from "react";
import { motion } from "framer-motion";

type ConvertableProps = {
  text: string;
  index: number;
  zIndex: number;
};

const ConvertableSlide = (props: ConvertableProps) => {
  const { text, zIndex, index } = props;
  return (
    <motion.div
      className="bg-slate-400 w-12 py-12"
      initial={{
        y: index * 10,
        zIndex,
        x: index * -24,
        rotateX: -30, // 在 X 軸上旋轉
        rotateY: 15, // 在 Y 軸上旋轉
      }}
      whileHover={{
        y: index * 10 - 40,
        x: index * -24,
        scale: 1.05,
        rotateX: -30, // 在 X 軸上旋轉
        rotateY: 15, // 在 Y 軸上旋轉
        boxShadow: "0 20px 30px rgba(0,0,0,0.2)", // 懸浮時加強陰影
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20,
        },
        zIndex: 999,
      }}
    >
      {text}
    </motion.div>
  );
};

export default ConvertableSlide;
