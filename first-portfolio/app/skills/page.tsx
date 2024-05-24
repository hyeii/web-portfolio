import SkillSet from "@/components/skill/SkillSet";

const familiarList = ["JavaScript", "TypeScript", "React", "Styled-Components"];
const triedList = ["Next.js", "Vue", "Tailwind CSS", "Java", "Flutter"];

const SkillPage = () => {
  return (
    <>
      <div>
        <h1>Skill</h1>
        <hr />
        <div className="my-24">
          <div className="grid grid-cols-[1fr_5fr] gap-7">
            <div>
              <span>familiar</span>
            </div>
            <div>
              {familiarList.map((skill, index) => (
                <SkillSet key={index} skill={skill} />
              ))}
            </div>
            <div>
              <span>tried</span>
            </div>
            <div>
              {triedList.map((skill, index) => (
                <SkillSet key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillPage;
