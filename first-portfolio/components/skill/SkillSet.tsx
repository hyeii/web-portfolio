import { skillType } from "@/types/types";
import { Roboto_Mono } from "next/font/google";

const roboto_mono = Roboto_Mono({
  weight: "500",
  subsets: ["latin"],
});

const SkillSet = ({ skill, content, ability }: skillType) => {
  return (
    <div className="lg:grid lg:gap-1 lg:grid-cols-[1fr_1fr_3fr] lg:my-7 my-12">
      <div className="">
        <span
          className={`lg:mx-2 rounded-3xl px-3 lg:py-2  bg-white text-black ${roboto_mono.className} `}
        >
          {skill}
        </span>
      </div>
      <div className="">
        <span>{ability}</span>
      </div>
      <div className="">
        <span>{content}</span>
      </div>
    </div>
  );
};

export default SkillSet;
