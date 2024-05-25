import SkillSet from "@/components/skill/SkillSet";

const familiarList = ["JavaScript", "TypeScript", "React", "Styled-Components"];
const triedList = ["Next.js", "Vue", "Tailwind CSS", "Java", "Flutter"];

const Skills = () => {
  return (
    <div>
      <h1>Skill</h1>
      <hr />
      <div className="my-12">
        <div className="grid grid-cols-[1fr_5fr] gap-7">
          <div>
            <span className="text-green-400 font-bold">familiar</span>
          </div>
          <div>
            {familiarList.map((skill, index) => (
              <SkillSet key={index} skill={skill} />
            ))}
          </div>
          <div>
            <span className="text-yellow-200 font-bold">tried</span>
          </div>
          <div>
            {triedList.map((skill, index) => (
              <SkillSet key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
