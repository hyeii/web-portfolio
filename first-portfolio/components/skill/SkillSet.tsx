import { skillType } from "@/types/types";
import { Roboto_Mono } from "next/font/google";

const roboto_mono = Roboto_Mono({
  weight: "500",
  subsets: ["latin"],
});

const SkillSet = ({ skill, content, ability }: skillType) => {
  return (
    <div className="grid gap-1 grid-cols-[1fr_1fr_3fr] my-7">
      <div className="">
        <span
          className={`mx-2 rounded-3xl px-3 py-2 bg-white text-black ${roboto_mono.className} `}
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
