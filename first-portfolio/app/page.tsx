"use client";

import React, { useRef } from "react";
import AboutMe from "@/components/aboutMe/aboutMe";
import Projects from "@/components/projects/projects";
import Skill from "@/components/skill/skill";
import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "900",
  subsets: ["latin"],
});

const Home = () => {
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const aboutMeClick = () => {
    aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const skillClick = () => {
    skillRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const projectsClick = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main className="flex flex-col h-screen lg:flex-row">
      <div className="lg:w-1/3 p-10 content-between ">
        <div>
          <h2
            className={`${roboto.className} name text-[5vw] text-transparent font-bold`}
          >
            YOON
            <br />
            HYEMIN
          </h2>
          <div className="my-5" />
          <div className="flex justify-between text-[#363636]">
            <div
              className="hover:underline decoration-solid cursor-pointer"
              onClick={aboutMeClick}
            >
              About me
            </div>
            <div
              className="hover:underline decoration-solid cursor-pointer"
              onClick={skillClick}
            >
              Skill
            </div>
            <div
              className="hover:underline decoration-solid cursor-pointer"
              onClick={projectsClick}
            >
              Projects
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-2/3 bg-[#363636] text-white p-[5vw] overflow-auto">
        <div className="">
          <div ref={aboutMeRef}>
            <AboutMe />
          </div>
          <div ref={skillRef}>
            <Skill />
          </div>
          <div ref={projectsRef}>
            <Projects />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
