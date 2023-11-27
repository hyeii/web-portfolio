import { Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({
  weight: "900",
  subsets: ["latin"],
});
const ProjectDetail2 = () => {
  return (
    <div>
      <div>
        <div className="project-number font-bold text-[10vw] text-[#363636]">
          02
        </div>
        <div className="flex content-center items-center">
          <p className={`${roboto.className} text-[3vw] font-extrabold`}>
            밀어: 뷰
          </p>
          <div className="mx-10" />
          <div className="content-center">
            <Link className="animated-arrow" href={"/project/mirrorview"}>
              <span className="the-arrow -left">
                <span className="shaft"></span>
              </span>
              <span className="main">
                <span className="text text-sm">go</span>
                <span className="the-arrow -right">
                  <span className="shaft"></span>
                </span>
              </span>
            </Link>
          </div>
        </div>
        <p>지금 당장 면접 스터디를 해야한다면</p>
        <div className="my-10" />
        <p className="italic">23.07.10 ~ 23.08.18</p>
        <div className="my-10" />
        <div className="flex justify-between">
          <div>
            <p className="">역할</p>
            <p>UI/UX, Front-End</p>
          </div>
          <div>
            <p className="">참여 인원</p>
            <p>Back-End 4 | Front-End 2</p>
          </div>
        </div>
        <div className="my-10" />
        <p className="bg-white rounded-lg p-5 text-black font-bold">
          ✨ 스터디방을 개설하여 면접관, 면접자의 역할을 바꿔가며 면접 스터디를
          진행할 수 있습니다.
        </p>
      </div>
    </div>
  );
};
export default ProjectDetail2;
