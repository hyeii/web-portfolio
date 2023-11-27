import { Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({
  weight: "900",
  subsets: ["latin"],
});
const ProjectDetail3 = () => {
  return (
    <div>
      <div>
        <div className="project-number font-bold text-[10vw] text-[#363636]">
          03
        </div>
        <div className="flex content-center items-center">
          <p className={`${roboto.className} text-[3vw] font-extrabold`}>
            책도네
          </p>
          <div className="mx-10" />
          <div className="content-center">
            <Link className="animated-arrow" href={"/project/bookdone"}>
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
        <p>중고 도서 기부하기</p>
        <div className="my-10" />
        <p className="italic">23.10.10 ~ 23.11.17</p>
        <div className="my-10" />
        <div className="flex justify-between">
          <div>
            <p className="">역할</p>
            <p>UI/UX, Front-End</p>
          </div>
          <div>
            <p className="">참여 인원</p>
            <p>Back-End 4 | Front-End 1</p>
          </div>
        </div>
        <div className="my-10" />
        <p className="bg-white rounded-lg p-5 text-black font-bold">
          ✨ 중고 도서를 주고받으며 지속적인 기부 선순환을 유도하는 서비스
        </p>
      </div>
    </div>
  );
};
export default ProjectDetail3;
