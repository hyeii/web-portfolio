import { projectType } from "@/types/types";
import { Roboto, Roboto_Mono } from "next/font/google";
import ImageList from "../images/ImageList";

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
      <h1 className="project-number font-bold text-[10vw] text-[#363636]">
        {project.order}
      </h1>
      <div className="flex content-center items-center">
        <p
          className={`${roboto.className} text-4xl lg:text-[3vw] font-extrabold`}
        >
          {project.title}
        </p>
        <div className="mx-10" />
        <div className="content-center"></div>
      </div>
      <div className="flex justify-between">
        <p>{project.subtitle}</p>
        <a
          target="_blank"
          className="hover:scale-110 fill-gray-400 hover:fill-white transform transition-colors duration-300"
          href={project.githubLink}
        >
          <svg
            className="w-7 h-7 "
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>GitHub 바로가기</title>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </a>
      </div>
      <div className="my-2" />
      <div className="my-10" />
      <p className="italic">23.08.28 ~ 23.10.06</p>
      <div className="my-10" />
      <div className="flex justify-between">
        <div>
          <p className="font-bold">역할</p>
          <p>{project.role}</p>
        </div>
        <div>
          <p className="font-bold">참여 인원</p>
          <p>{project.member}</p>
        </div>
      </div>
      <div className="my-10" />
      <p className="bg-white rounded-lg p-5 text-black font-bold">
        ✨ {project.goal}
      </p>
      <div className="my-10" />
      <p className="font-bold">개발 환경</p>
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
      <p className="font-bold">주요 기능</p>
      <div className="my-2" />
      <ul className="list-inside list-disc bg-white rounded-lg p-5 text-black">
        {project.mainfunction.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="my-10" />
      <p className="font-bold">담당 구현 내역</p>
      <div className="my-2" />
      <ul className="list-inside list-disc">
        {project.myRole.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="my-12" />
      <div>
        <ImageList imageList={project.images} />
      </div>
    </div>
  );
};

export default ProjectPage;
