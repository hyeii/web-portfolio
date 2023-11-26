import "../../styles/style.css";

const ProjectDetail = () => {
  return (
    <div>
      <div>
        <div className="project-number text-[10vw] text-[#363636]">01</div>
        <p className="text-[3vw] font-extrabold">HOT STOCK</p>
        <p>지금 가장 핫한 주식 테마와 종목은?</p>
        <div className="flex justify-between">
          <div>
            <p>역할</p>
            <p>Front-End</p>
          </div>
          <div>
            <p>참여 인원</p>
            <p>Back-End 5 | Front-End 1</p>
          </div>
        </div>
        <p>프로젝트 기간</p>
        <p>202020202020</p>
        <p>프로젝트 개요</p>
        <p>
          실시간으로 뉴스를 크롤링하여 뉴스의 키워드를 추출하고, 키워드와 관련된
          주식 테마와 해당하는 종목들을 추천합니다.
        </p>
        <p>개발 환경</p>
        <p>주요 기능</p>
        <p>어쩌구 저쩌구 한 다섯개</p>
        <p>담당 업무</p>
      </div>
    </div>
  );
};
export default ProjectDetail;
