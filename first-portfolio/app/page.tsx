import AboutMe from "@/components/aboutMe/aboutMe";
import Projects from "@/components/projects/projects";
import Skill from "@/components/skill/skill";
import "@/styles/style.css";
import Image from "next/image";

const Home = () => {
  return (
    <main className="flex flex-col h-screen lg:flex-row">
      <div className="lg:w-1/3 bg-[#FFFFFF]">
        <div className="p-10">
          <h2 className="name text-[5vw] text-white font-bold">
            YOON
            <br />
            HYEMIN
          </h2>
        </div>
      </div>
      <div className="lg:w-2/3 bg-[#363636] text-white p-24 overflow-auto">
        <div className="flex justify-start ">
          <div className="hover:underline decoration-solid">About me</div>
          <div className="hover:underline decoration-solid">Skill</div>
          <div className="hover:underline decoration-solid">Projects</div>
        </div>
        <AboutMe />
        <Skill />
        <Projects />
      </div>
    </main>
  );
};

export default Home;
