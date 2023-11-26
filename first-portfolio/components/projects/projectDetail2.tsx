import { Roboto } from "next/font/google";

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
        <p className={`${roboto.className} text-[3vw] font-extrabold`}>
          밀어: 뷰
        </p>
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
        <div className="my-10" />
        <p className="">개발 환경</p>
        <div className="my-10" />
        <p className="">주요 기능</p>
        <div className="my-2" />
        <ul className="bg-white rounded-lg p-5 text-black">
          <li>
            면접 스터디의 목적, 인원 수 등을 설정하여 스터디방을 개설,
            참가자들과 스터디를 진행합니다
          </li>
          <li>
            대기 시간동안 참가자들의 자소서를 읽고 스터디에 활용할 질문을 미리
            작성하거나, AI에게 질문 작성을 부탁합니다
          </li>
          <li>
            친구 기능 및 채팅을 통해 참가자들과 교류, 지속적인 스터디를 진행할
            수 있습니다
          </li>
        </ul>
        <div className="my-10" />
        <p className="">담당 업무</p>
        <div className="my-2" />
        <ul className="bg-white rounded-lg p-5 text-black">
          <li>
            React를 활용, 컴포넌트를 적절히 배치하여 효율적인 프로젝트를
            구성하였습니다
          </li>
          <li>
            스터디방 내부, 면접자 혹은 면접관과 같이 사용자의 상태에 따라 화면을
            다르게 구성하여 편리성을 높였습니다
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ProjectDetail2;
