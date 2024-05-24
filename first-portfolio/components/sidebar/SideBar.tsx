"use client";

import { Roboto } from "next/font/google";
import Link from "next/link";
import { SideBarProvider, useSideBarContext } from "../context/SideBarContext";
import classNames from "classnames";

const roboto = Roboto({
  weight: "900",
  subsets: ["latin"],
});

const SideBar = () => {
  const { isMain, setIsMain } = useSideBarContext();

  const setIsNotMain = () => {
    if (!isMain) return;
    setIsMain(false);
  };

  const setMain = () => {
    if (isMain) return;
    setIsMain(true);
  };

  const divCss = classNames(
    "px-10 py-7 flex flex-col justify-between transition-all duration-700",
    {
      "w-full": isMain,
      "w-1/3": !isMain,
    }
  );

  const h2Title = classNames(
    `${roboto.className} name text-transparent font-bold transition-all duration-700`,
    {
      "text-mainTitle": isMain,
      "text-subTitle": !isMain,
    }
  );

  return (
    <>
      <div className={divCss}>
        <div>
          <Link href={"/"}>
            <h2 className={h2Title} onClick={setMain}>
              YOON
              <br />
              HYEMIN
            </h2>
          </Link>
        </div>
        <div>
          <Link href={"/aboutme"} onClick={setIsNotMain}>
            about me
          </Link>
          <br />
          <Link href={"/skills"} onClick={setIsNotMain}>
            skills
          </Link>
          <br />
          <Link href={"/project"} onClick={setIsNotMain}>
            projects
          </Link>
          <div className="my-60" />
        </div>
      </div>
    </>
  );
};

export default SideBar;
