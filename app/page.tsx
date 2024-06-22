"use client";
import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import { MouseEventHandler, useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const handleScroll: MouseEventHandler<HTMLImageElement> = (event) => {
    const { name } = event.currentTarget.dataset;
    if (name) {
      const element = document.getElementById(name);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
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

        <section id="skills" className="snap-center">
          <Skills></Skills>
        </section>

        <section id="projects" className="snap-center">
          <Projects></Projects>
        </section>

        {/* <section id="contact" className="snap-start">
          <ContactMe></ContactMe>
        </section> */}

        <footer className="sticky bottom-5 w-full">
          <div className="flex items-center justify-center">
            <img
              onClick={handleScroll}
              data-name="hero"
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://hackmd.io/_uploads/BksxgoCc6.jpg"
              alt=""
            />
          </div>
        </footer>
      </main>
    </div>
  );
}
