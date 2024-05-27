import { projectType } from "@/types/types";
import { Roboto, Roboto_Mono } from "next/font/google";

const roboto = Roboto({
  weight: "900",
  subsets: ["latin"],
});

const roboto_mono = Roboto_Mono({
  weight: "500",
  subsets: ["latin"],
});

interface props {
  project: projectType;
}

interface environProps {
  title: string;
  items: string[];
}

const ProjectPage = ({ project }: props) => {
  const EnvironmentSection = ({ title, items }: environProps) => (
    <div className="my-2">
      <span>{title} | </span>
      {items.map((item, index) => (
        <span
          key={index}
          className={`bg-white rounded-md py-[0.1rem] px-1 mx-1 text-black ${roboto_mono.className}`}
        >
          {item}
        </span>
      ))}
    </div>
  );

  return (
    <div>
      <div className="project-number font-bold text-[10vw] text-[#363636]">
        01
      </div>
      <div className="flex content-center items-center">
        <p
          className={`${roboto.className} text-4xl lg:text-[3vw] font-extrabold`}
        >
          {project.title}
        </p>
        <div className="mx-10" />
        <div className="content-center"></div>
      </div>
      <p>{project.subtitle}</p>
      <div className="my-2" />
      <a
        target="_blank"
        className="hover:font-extrabold"
        href={project.githubLink}
      >
        &gt;&gt; github
      </a>
      <div className="my-10" />
      <p className="italic">23.08.28 ~ 23.10.06</p>
      <div className="my-10" />
      <div className="flex justify-between">
        <div>
          <p className="">역할</p>
          <p>{project.role}</p>
        </div>
        <div>
          <p className="">참여 인원</p>
          <p>{project.member}</p>
        </div>
      </div>
      <div className="my-10" />
      <p className="bg-white rounded-lg p-5 text-black font-bold">
        ✨ {project.goal}
      </p>
      <div className="my-10" />
      <p className="">주요 개발 환경</p>
      <div className="my-2" />

      <EnvironmentSection
        title="Back-End"
        items={project.environment.backend}
      />
      <EnvironmentSection
        title="Front-End"
        items={project.environment.frontend}
      />
      {project.environment.infra.length !== 0 ? (
        <EnvironmentSection title="infra" items={project.environment.infra} />
      ) : null}
      <div className="my-10" />
      <p className="">주요 기능</p>
      <div className="my-2" />
      <ul className="list-inside list-disc bg-white rounded-lg p-5 text-black">
        {project.mainfunction.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="my-10" />
      <p className="">담당 업무</p>
      <div className="my-2" />
      <ul className="list-inside list-disc">
        {project.myRole.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectPage;
