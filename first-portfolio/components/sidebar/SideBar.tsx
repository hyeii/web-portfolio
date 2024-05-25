"use client";

import { Roboto } from "next/font/google";
import Link from "next/link";
import { SideBarProvider, useSideBarContext } from "../context/SideBarContext";
import classNames from "classnames";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { mainCompoState, mainState } from "@/atoms/atoms";
import { useEffect } from "react";

const roboto = Roboto({
  weight: "900",
  subsets: ["latin"],
});

const SideBar = () => {
  const [isMain, setIsMain] = useRecoilState(mainState);
  const [mainCompo, setMainCompo] = useRecoilState(mainCompoState);

  const setIsNotMain = () => {
    if (!isMain) return;
    setIsMain(false);
  };

  const setMain = () => {
    if (isMain) return;
    setIsMain(true);
  };

  const handleMain = () => {
    setMain();
    setMainCompo("main");
  };

  const handleAboutMe = () => {
    setIsNotMain();
    setMainCompo("aboutme");
  };

  const handleSkills = () => {
    setIsNotMain();
    setMainCompo("skills");
  };

  const handleProjects = () => {
    setIsNotMain();
    setMainCompo("projects");
  };

  const divCss = classNames(
    "px-10 py-7 flex flex-col justify-between transition-all duration-700",
    {
      "w-full": isMain,
      "w-1/3": !isMain,
    }
  );

  const h2Title = classNames(
    `${roboto.className} name text-transparent font-bold transition-all duration-700 cursor-pointer`,
    {
      "text-mainTitle": isMain,
      "text-subTitle": !isMain,
    }
  );

  return (
    <>
      <div className={divCss}>
        <div>
          <h2 className={h2Title} onClick={handleMain}>
            YOON
            <br />
            HYEMIN
          </h2>
        </div>
        <div>
          <span
            className="cursor-pointer hover:font-bold"
            onClick={handleAboutMe}
          >
            about me
          </span>
          <br />
          <span
            className="cursor-pointer hover:font-bold"
            onClick={handleSkills}
          >
            skills
          </span>
          <br />
          <span
            className="cursor-pointer hover:font-bold"
            onClick={handleProjects}
          >
            projects
          </span>
          <div className="my-60" />
        </div>
      </div>
    </>
  );
};

export default SideBar;
