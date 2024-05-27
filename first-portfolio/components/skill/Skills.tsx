import SkillSet from "@/components/skill/SkillSet";
import { familiarList, triedList } from "@/data/skillList";
import { Roboto_Mono } from "next/font/google";

const roboto_mono = Roboto_Mono({
  weight: "500",
  subsets: ["latin"],
});

const Skills = () => {
  return (
    <div>
      <h1>Skills</h1>
      <hr />
      <div className="my-12">
        <div className="">
          <div>
            <span className={`text-green-400  ${roboto_mono.className} `}>
              familiar
            </span>
          </div>
          <div>
            {familiarList.map((skill, index) => (
              <SkillSet
                key={index}
                skill={skill.skill}
                content={skill.content}
                ability={skill.ability}
              />
            ))}
          </div>
          <div className="my-12" />
          <div>
            <span className={`text-yellow-200 ${roboto_mono.className}`}>
              tried
            </span>
          </div>
          <div>
            {triedList.map((skill, index) => (
              <SkillSet
                key={index}
                skill={skill.skill}
                content={skill.content}
                ability={skill.ability}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
