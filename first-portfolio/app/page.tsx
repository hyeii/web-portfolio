"use client";

import React, { useRef } from "react";
import AboutMe from "@/components/aboutMe/aboutMe";
import Skill from "@/components/skill/skill";
import Image from "next/image";
import { Roboto } from "next/font/google";
import ProjectDetail from "@/components/projects/projectDetail";
import ProjectDetail2 from "@/components/projects/projectDetail2";
import ProjectDetail3 from "@/components/projects/projectDetail3";

const roboto = Roboto({
  weight: "900",
  subsets: ["latin"],
});

const Home = () => {
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const project1Ref = useRef<HTMLDivElement>(null);
  const project2Ref = useRef<HTMLDivElement>(null);
  const project3Ref = useRef<HTMLDivElement>(null);

  const aboutMeClick = () => {
    aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const skillClick = () => {
    skillRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const projectsClick = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const project1Click = () => {
    project1Ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const project2Click = () => {
    project2Ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const project3Click = () => {
    project3Ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main className="flex flex-col h-screen lg:flex-row">
      <div className="lg:w-1/3 p-10 content-between ">
        <div>
          <h2
            className={`${roboto.className} name text-[5vw] text-transparent font-bold lg:hidden`}
          >
            YOON HYEMIN
          </h2>
          <h2
            className={`${roboto.className} name text-[5vw] text-transparent font-bold hidden lg:block`}
          >
            YOON <br /> HYEMIN
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
            <div className="flex-row text-end">
              <div
                className="hover:underline decoration-solid cursor-pointer"
                onClick={projectsClick}
              >
                Projects
              </div>
              <br />
              <div className="sm:hidden lg:block">
                <div
                  className="hover:underline decoration-solid cursor-pointer"
                  onClick={project1Click}
                >
                  01
                </div>
                <div
                  className="hover:underline decoration-solid cursor-pointer"
                  onClick={project2Click}
                >
                  02
                </div>
                <div
                  className="hover:underline decoration-solid cursor-pointer"
                  onClick={project3Click}
                >
                  03
                </div>
              </div>
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
            <div>
              <h1>Projects</h1>
              <div>
                <hr />
                <div ref={project1Ref}>
                  <ProjectDetail />
                </div>
                <div className="my-10" />
                <div ref={project2Ref}>
                  <ProjectDetail2 />
                </div>
                <div className="my-10" />
                <div ref={project3Ref}>
                  <ProjectDetail3 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
