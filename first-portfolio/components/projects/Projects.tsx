import { thumbnailList } from "@/data/projectList";
import ProjectCard from "./ProjectCard";
import { Noto_Serif_KR } from "next/font/google";
import classNames from "classnames";

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <hr />
      <div className="my-10" />
      <div className="grid xl:grid-cols-2 lg:grid-cols-1 gap-16 ">
        {thumbnailList.map((data, index) => (
          <ProjectCard thumbnailData={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
