import { Roboto_Mono } from "next/font/google";

interface props {
  skill: string;
}

const roboto_mono = Roboto_Mono({
  weight: "500",
  subsets: ["latin"],
});

const SkillSet = ({ skill }: props) => {
  return (
    <span
      className={`mx-2 rounded-3xl px-3 py-2 bg-white text-black ${roboto_mono.className} `}
    >
      {skill}
    </span>
  );
};

export default SkillSet;
