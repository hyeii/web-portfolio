import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "900",
  subsets: ["latin"],
});

const Page = () => {
  return (
    <div>
      <div className="project-number font-bold text-[10vw] text-[#363636]">
        01
      </div>
      <div className="flex content-center items-center">
        <p className={`${roboto.className} text-[3vw] font-extrabold`}>
          HOT STOCK
        </p>
        <div className="mx-10" />
        <div className="content-center"></div>
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
      <div className="my-10" />
      <p className="">개발 환경</p>
      <div className="my-10" />
      <p className="">주요 기능</p>
      <div className="my-2" />
      <ul className="bg-white rounded-lg p-5 text-black">
        <li>
          10분 단위로 <strong>실시간 뉴스를 크롤링</strong>하여 키워드를 추출해
          제공합니다
        </li>
        <li>
          빈도수에 따라 키워드를 랭킹화하고 그 결과를{" "}
          <strong>워드클라우드</strong>로 표현합니다
        </li>
        <li>
          각 키워드와 연관된 주식 테마를 추천하고, 테마에 따른 종목 내역 및
          종목의 실시간 정보를 제공합니다.
        </li>
      </ul>
      <div className="my-10" />
      <p className="">담당 업무</p>
      <div className="my-2" />
      <ul className="bg-white rounded-lg p-5 text-black">
        <li>
          Next.js 13의 App Routing을 적용, Layout 정의를 통해 불필요한
          리렌더링을 방지하였습니다.
        </li>
        <li>
          추출된 키워드의 상위 50개를 지구가 회전하는 듯한 워드클라우드의 형태로
          표현하여 시각적인 요소를 더했습니다.
        </li>
        <li>
          Tailwind CSS를 활용, 사이트의 주요 페이지를 반응형 웹으로
          작업하였습니다.
        </li>
      </ul>
    </div>
  );
};

export default Page;
