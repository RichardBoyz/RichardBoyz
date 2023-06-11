"use client";
import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WorkExperience from "@/components/WorkExperience";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div
      className={`${
        darkMode ? "dark dark--mode__animation" : "light--mode__animation"
      } main--page__color`}
    >
      <main className="flex min-h-screen flex-col items-center overflow-visible dark:bg-black background--color z-0">
        {/* <section className="bg-blue-300 w-full h-12 flex fixed">
          <button onClick={() => setDarkMode(!darkMode)}>Dark mode</button>
        </section> */}
        <Header setDarkModeAction={toggleDarkMode} />

        <section id="hero" className=" snap-start">
          <Hero></Hero>
        </section>

        <section id="about" className=" snap-center">
          <About></About>
        </section>

        <section id="experience" className="snap-center">
          <WorkExperience></WorkExperience>
        </section>
      </main>
    </div>
  );
}
