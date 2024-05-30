"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Noto_Serif_KR, Roboto, Song_Myung } from "next/font/google";
import { thumbnailType } from "@/types/types";
import classNames from "classnames";

const song_myung = Song_Myung({
  weight: "400",
  subsets: ["latin"],
});

const notoSerifKr = Noto_Serif_KR({
  weight: "400",
  subsets: ["latin"],
});

const serif = classNames(`${notoSerifKr.className}`);

interface props {
  thumbnailData: thumbnailType;
}

const ProjectCard = ({ thumbnailData }: props) => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <div
      className="w-full aspect-w-3 aspect-h-2 bg-white text-black rounded-2xl relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover ? (
        <>
          <div className="w-full aspect-w-3 aspect-h-2 rounded-2xl bg-neutral-600 p-12">
            <div className="xl:p-12 lg:p-16 p-10 h-full text-white flex flex-col justify-between">
              <div>
                <h2
                  className={`${song_myung.className} lg:text-3xl text-2xl font-extrabold`}
                >
                  {thumbnailData.title}
                </h2>
                <span className="">{thumbnailData.text}</span>
              </div>
              <div className="flex justify-start">
                <Link className="animated-arrow" href={thumbnailData.link}>
                  <span className="the-arrow -left">
                    <span className="shaft"></span>
                  </span>
                  <span className="main">
                    <span className="text text-md">go</span>
                    <span className="the-arrow -right">
                      <span className="shaft"></span>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-wrap flex-col justify-between p-3">
          <div className="">
            <Image
              src={`${thumbnailData.imagesrc}`}
              alt="hot stock"
              className="rounded-t-2xl"
              layout="fill"
              objectFit="contain"
              objectPosition="top"
            />
          </div>
          <div className="lg:p-3 p-2/3">
            <h2
              className={`${song_myung.className} lg:text-2xl text-base font-extrabold`}
            >
              {thumbnailData.title}
            </h2>
            <p>
              <span className="lg:text-base text-sm">
                {thumbnailData.subtitle}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
