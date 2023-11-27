import { Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({
  weight: "900",
  subsets: ["latin"],
});
const ProjectDetail = () => {
  return (
    <div>
      <div>
        <div className="project-number font-bold text-[10vw] text-[#363636]">
          01
        </div>
        <div className="flex content-center items-center">
          <p className={`${roboto.className} text-[3vw] font-extrabold`}>
            HOT STOCK
          </p>
          <div className="mx-10" />
          <div className="content-center">
            <Link className="animated-arrow" href={"/project/hotstock"}>
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
        <span>지금 가장 핫한 주식 테마와 종목은?</span>
        <div className="my-10" />
        <p className="italic">23.08.28 ~ 23.10.06</p>
        <div className="my-10" />
        <div className="flex justify-between">
          <div>
            <p className="">역할</p>
            <p>UI/UX, Front-End</p>
          </div>
          <div>
            <p className="">참여 인원</p>
            <p>Back-End 5 | Front-End 1</p>
          </div>
        </div>
        <div className="my-10" />
        <p className="bg-white rounded-lg p-5 text-black font-bold">
          ✨ 실시간으로 뉴스를 크롤링하여 뉴스의 키워드를 추출하고, 키워드와
          관련된 주식 테마와 해당하는 종목들을 추천합니다.
        </p>
      </div>
    </div>
  );
};
export default ProjectDetail;
