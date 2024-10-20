import React from "react";
import ConvertableSlide from "./ConvertableSlide";

const ProjectSlide = () => {
  const slides = ["12345", "45678", "34567"];
  return (
    <div className="min-h-screen relative flex justify-center items-center text-white">
      {slides.map((value: string, index: number) => {
        return (
          <ConvertableSlide
            text={value}
            key={value}
            zIndex={index}
            index={index}
          ></ConvertableSlide>
        );
      })}
    </div>
  );
};

export default ProjectSlide;
