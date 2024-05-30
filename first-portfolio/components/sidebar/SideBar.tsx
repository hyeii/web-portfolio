"use client";

import { Roboto } from "next/font/google";
import Link from "next/link";
import classNames from "classnames";
import { useRecoilState } from "recoil";
import { mainCompoState, mainState } from "@/atoms/atoms";

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
    "lg:px-10 px-5 lg:py-7 py-2 flex flex-col justify-between transition-all duration-700",
    {
      "w-full": isMain,
      "lg:w-1/3 w-full": !isMain,
    }
  );

  const h2Title = classNames(
    `${roboto.className} name lg:text-transparent font-bold transition-all duration-700 cursor-pointer`,
    {
      "lg:text-mainTitle text-xl": isMain,
      "lg:text-subTitle": !isMain,
    }
  );

  const brStyle = classNames("lg:block", {
    block: isMain,
    hidden: !isMain,
  });

  return (
    <>
      <div className={divCss}>
        <div>
          <Link href={"/"}>
            <h2 className={h2Title} onClick={handleMain}>
              YOON <br className={brStyle} />
              HYEMIN
            </h2>
          </Link>
        </div>
        <div className="lg:block flex justify-between lg:h-full h-7">
          <Link href={"/"}>
            <span
              className="cursor-pointer hover:font-bold"
              onClick={handleAboutMe}
            >
              about me
            </span>
          </Link>
          <br />
          <Link href={"/"}>
            <span
              className="cursor-pointer hover:font-bold"
              onClick={handleSkills}
            >
              skills
            </span>
          </Link>
          <br />
          <Link href={"/"}>
            <span
              className="cursor-pointer hover:font-bold"
              onClick={handleProjects}
            >
              projects
            </span>
          </Link>
          <div className="my-60" />
        </div>
      </div>
    </>
  );
};

export default SideBar;
