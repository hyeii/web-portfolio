import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "900",
  subsets: ["latin"],
});

const Page = () => {
  return (
    <div>
      <div className="project-number font-bold text-[10vw] text-[#363636]">
        03
      </div>
      <div className="flex content-center items-center">
        <p className={`${roboto.className} text-[3vw] font-extrabold`}>
          책도네
        </p>
        <div className="mx-10" />
        <div className="content-center"></div>
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
      <div className="my-10" />
      <p className="">개발 환경</p>
      <div className="my-10" />
      <p className="">주요 기능</p>
      <div className="my-2" />
      <ul className="bg-white rounded-lg p-5 text-black">
        <li>
          책의 ISBN 바코드를 조회하여 기부하고자 하는 책을 등록해 기부할 수
          있습니다.
        </li>
        <li>기부자에게 1대1 채팅을 신청하여 논의할 수 있습니다.</li>
        <li>
          각각의 책에 대한 히스토리를 기록, 미래의 책 소유자에게 책의 여정을
          전달합니다.
        </li>
        <li>
          책갈피라는 재화를 활용하여 기부 도서 수 대비 기부 받을 횟수를 제한,
          선순환을 유도합니다.
        </li>
      </ul>
      <div className="my-10" />
      <p className="">담당 업무</p>
      <div className="my-2" />
      <ul className="bg-white rounded-lg p-5 text-black">
        <li>Flutter를 활용해 모바일 앱 어플리케이션을 구현하였습니다</li>
        <li>
          Hook Widget을 활용하여 보다 직관적이고 간편한 코드를 작성하였습니다
        </li>
        <li>
          Riverpod을 활용한 상태관리로, 에러를 최소화하며 전역적인 상태관리가
          가능토록 진행하였습니다.
        </li>
      </ul>
    </div>
  );
};
export default Page;
