"use client";

import { Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({
  weight: "900",
  subsets: ["latin"],
});

const SideBar = () => {
  return (
    <>
      <div className="w-1/3 px-10 py-7 content-between">
        <div>
          <Link href={"/"}>
            <h2
              className={`${roboto.className} name text-4xl text-transparent font-bold`}
            >
              YOON HYEMIN
            </h2>
          </Link>
        </div>
        <div>
          <Link href={"/aboutme"}>about me</Link>
          <br />
          <Link href={"/skills"}>skills</Link>
          <br />
          <Link href={"/project"}>projects</Link>
        </div>
      </div>
    </>
  );
};

export default SideBar;
