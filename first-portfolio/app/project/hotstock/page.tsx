import { Roboto } from "next/font/google";
import Link from "next/link";

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
        <p
          className={`${roboto.className} text-4xl lg:text-[3vw] font-extrabold`}
        >
          HOT STOCK
        </p>
        <div className="mx-10" />
        <div className="content-center"></div>
      </div>
      <p>지금 가장 핫한 주식 테마와 종목은?</p>
      <div className="my-2" />
      <a
        target="_blank"
        className="hover:font-extrabold"
        href={
          "https://alert-engine-558.notion.site/Hot-Stock-8c1547fa048c42ee847aa23c853cd66d?pvs=4"
        }
      >
        더 알아보기 &gt;
      </a>
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
      <p className="">주요 개발 환경</p>
      <div className="my-2" />
      <div className="my-2">
        <span>Back-End | </span>
        <span className="bg-white rounded-md p-1 mx-1 text-black ">
          Python Flask
        </span>
        <span className="bg-white rounded-md p-1 mx-1 text-black ">
          Java SpringBoot
        </span>

        <span className="bg-white rounded-md p-1 mx-1 text-black ">MySQL</span>
      </div>
      <div className="my-2">
        <span>Front-End | </span>
        <span className="bg-white rounded-md p-1 mx-1 text-black ">React</span>
        <span className="bg-white rounded-md p-1 mx-1 text-black ">
          Next.js
        </span>
        <span className="bg-white rounded-md p-1 mx-1 text-black ">
          TypeScript
        </span>
      </div>
      <div className="my-2">
        <span>infra | </span>
        <span className="bg-white rounded-md p-1 mx-1 text-black ">
          Jenkins
        </span>
        <span className="bg-white rounded-md p-1 mx-1 text-black ">Docker</span>
      </div>
      <div className="my-10" />
      <p className="">주요 기능</p>
      <div className="my-2" />
      <ul className="list-inside list-disc bg-white rounded-lg p-5 text-black">
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
      <ul className="list-inside list-disc">
        <li>
          Next.js 13의 App Routing을 적용, Layout 정의를 통해 불필요한
          리렌더링을 방지하였습니다.
        </li>
        <li>
          검색을 통해 노출될 내용을 메타데이터로 작성, 검색 엔진 최적화에
          기여하여 구글 검색에 노출되도록 설정하였습니다.
        </li>
        <li>
          Tailwind CSS를 활용, 사이트의 주요 페이지를 반응형 웹으로
          작업하였습니다.
        </li>
        <li>
          추출된 키워드의 상위 50개를 지구가 회전하는 듯한 워드클라우드의 형태로
          표현하여 시각적인 요소를 더했습니다.
        </li>
        <li>
          주식 종목과 관련된 테마를 마인드맵 형태로 표현하여 시각적 효과를
          더했습니다
        </li>
        <li>
          주식 종목 및 테마 컴포넌트에 스켈레톤 로딩을 적용하여 사용자 경험을
          개선하였습니다.
        </li>
      </ul>
    </div>
  );
};

export default Page;
