"use client";

import { mainCompoState } from "@/atoms/atoms";
import { useRecoilValue } from "recoil";
import MainText from "./MainText";
import AboutMe from "../aboutme/AboutMe";
import Skills from "../skill/Skills";
import Projects from "../projects/Projects";

const MainComponent = () => {
  const mainCompo = useRecoilValue(mainCompoState);

  return (
    <>
      {mainCompo === "main" ? (
        <MainText />
      ) : mainCompo === "aboutme" ? (
        <AboutMe />
      ) : mainCompo === "skills" ? (
        <Skills />
      ) : (
        <Projects />
      )}
    </>
  );
};

export default MainComponent;
