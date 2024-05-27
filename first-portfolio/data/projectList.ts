import { projectType, thumbnailType } from "@/types/types";

export const p1HotStock: thumbnailType = {
  title: "HOT STOCK",
  subtitle: "실시간 키워드 기반 주식 추천 서비스",
  link: "/project/hotstock",
  text: "실시간 뉴스로부터 키워드를 추출해 관련 주식 테마를 제공하는 서비스. 현재 가장 뜨거운 종목이 궁금한 사람들에게 효과적인 정보를 제공.",
  imagesrc: "/hotstock.jpg",
};

export const p2MirrorView: thumbnailType = {
  title: "밀어: 뷰",
  subtitle: "취준생을 위한 화상 면접 스터디 플랫폼",
  link: "/project/mirrorview",
  text: "다양한 취업 관련 플랫폼이 존재하는 것에 비해 부족한 면접 스터디를 다뤄 취준생에게 도움을 주는 서비스",
  imagesrc: "/mirrorview.png",
};

export const p3BookDone: thumbnailType = {
  title: "책도네",
  subtitle: "지속적인 중고 도서 기부 선순환을 유도하는 서비스",
  link: "/project/bookdone",
  text: "중고책 활용의 필요성에 집중하여 금전이 오가지 않는 책의 기부를 유도, 선순환을 기대할 수 있는 서비스",
  imagesrc: "/bookdone2.png",
};

export const p4DailyMate: thumbnailType = {
  title: "데일리 메이트",
  subtitle: "일상의 모든 것을 한번에 관리하는 우리의 다이어리",
  link: "/project/dailymate",
  text: "온라인으로 모든 것을 해결할 수 있는 MZ세대를 위한 서비스.",
  imagesrc: "/dailymate.png",
};

export const thumbnailList: thumbnailType[] = [
  p1HotStock,
  p2MirrorView,
  p3BookDone,
  p4DailyMate,
];

export const p1Detail: projectType = {
  order: "01",
  title: "HOT STOCK",
  subtitle: "실시간 키워드 기반 주식 추천 서비스",
  date: "23.08.28 ~ 23.10.06",
  role: "UI/UX, Front-Dnd",
  member: "Back-End 5 | Front-End 1",
  goal: "현재 가장 뜨거운 트렌드와 주식을 관련짓고 싶은 사람들, 또 주식을 처음 시작하며 사람들에게 관심받는 종목이 궁금할 사람들에게 관련 정보를 용이하게 제공하고자 함.",
  environment: {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    backend: ["Python", "Flask", "Java", "Spring boot", "MySQL"],
    infra: ["EC2", "NGINX", "Docker", "Jenkins", "Grafana", "Prometheus"],
  },
  mainfunction: [
    "10분마다 실시간 뉴스를 크롤링하여 키워드 추출, 워드클라우드의 형태로 제공",
    "각 키워드와 연관된 주식 테마를 선정하여 종목 정보 제공",
  ],
  myRole: [
    "Next.js 13을 활용한 서버 사이드 렌더링 구현, App Routing 활용",
    "공통 layout을 활용한 불필요한 리렌더링 방지",
    "fetch를 통한 서버와의 api 통신",
    "워드클라우드와 마인드맵을 활용한 시각적 효과 향상",
    "Tailwind CSS를 적용해 일부 페이지 반응형 구성",
    "스켈레톤 로딩을 적용해 사용자 경험 향상",
  ],
  after: [
    "새롭게 업데이트된 Next.js 13을 적용하며 기존 버전의 Page Routing과 App Routing과의 차이 학습",
    "구글 크롬의 lighthouse를 활용해 속도 개선 및 검색 엔진 최적화",
    "프로젝트 도중 일부 종목의 상장 폐지로 인한 오류 발생. 조회가 되지 않는 종목 코드를 서버와 프론트단 모드에서 에러처리를 진행했으며 개발 그 자체뿐만 아니라 프로젝트 소재에 대한 충분한 이해가 미흡했음을 인지함",
  ],
  githubLink: "https://github.com/hyeii/new-hot-stock",
};

export const p2Detail: projectType = {
  order: "02",
  title: "밀어 : 뷰",
  subtitle: "취준생을 위한 화상 면접 스터디 플랫폼",
  date: "23.07.10 ~ 23.08.18",
  role: "UI/UX, Front-Dnd",
  member: "Back-End 4 | Front-End 2",
  goal: "다양한 취업 관련 플랫폼에 비해 실질적으로 도움을 줄 수 있는 화상 면접 스터디 관련 서비스는 존재하지 않아, 취준생에게 도움이 되고자 기획.",
  environment: {
    frontend: [
      "React",
      "Redux-toolkit",
      "JavaScript",
      "WebRTC",
      "Styled-Components",
    ],
    backend: ["Java", "Spring boot", "Spring Security", "MySQL"],
    infra: ["EC2", "NGINX", "Docker", "Jenkins"],
  },
  mainfunction: [
    "WebRTC를 활용한 면접 스터디 서비스 제공. 스터디 방 생성 시 직무 카테고리, 인원, 비밀 방 여부 설정 가능",
    "AI를 활용한 자소서 기반 자동 질문 생성 서비스 제공 및 스터디 중 피드백 작성 기능 제공",
    "오픈채팅을 활용해 사용자 간의 소통 및 친구 기능, 현재 온라인인 친구 여부 확인 기능 제공",
  ],
  myRole: [
    "React와 상태관리 라이브러리 Redux-toolkit의 적절한 사용",
    "axios를 활용한 서버 통신 구현",
    "준비 방, 면접관 방, 면접자 방의 컴포넌트를 적절히 분리하여 포지션에 적합한 WebRTC 화면 배치",
    "Styled-Components의 활용, 다양한 props를 통한 재사용",
  ],
  after: [
    "OpenVidu를 적용해 WebRTC는 처음임에도 실시간 영상 통신을 유연하게 적용",
    "익숙하지 않은 상태관리 라이브러리의 사용으로 다소 잦은 리팩토링에 시간을 소요함",
    "상태관리 뿐만 아니라 새로운 기술을 적용함에 있어 보다 구체적인 이해가 필요함을 인지",
  ],
  githubLink: "https://github.com/hyeii/mirror-view",
};

export const p3Detail: projectType = {
  order: "03",
  title: "책도네",
  subtitle: "중고 도서 기부를 통한 선순환 지속 플랫폼",
  date: "23.10.10 ~ 23.11.17",
  role: "UI/UX, Front-End",
  member: "Back-End 4 | Front-End 1",
  goal: "중고책 활용의 필요성이 대두되고 있는 요즘, 금전이 오가지 않는 책의 기부에 집중하여 중고책의 선순환을 기대해보고자 기획.",
  environment: {
    frontend: ["Flutter", "Dart", "Riverpod"],
    backend: [
      "Java",
      "Spring boot",
      "Spring Security",
      "MySQL",
      "Kafka",
      "Elastic Search",
    ],
    infra: ["EC2", "NGINX", "Docker", "Jenkins"],
  },
  mainfunction: [
    "도서의 ISBN 바코드를 인식하여 정보 인식 및 기부 게시글 작성 기능",
    "DB에 저장된 400만여권의 도서 정보를 Elastic Search를 통해 빠른 자동완성 기능 구현",
    "채팅 기능을 통해 기부자와 피기부자 간의 소통",
    "히스토리를 통해 책의 발자취를 저장하고 책갈피를 통해 일방적인 피기부를 방지하여 선순환의 지속에 집중",
  ],
  myRole: [
    "Flutter를 활용한 모바일 어플리케이션 개발. Hook widget을 활용해 코드의 간편화. Riverpod을 활용한 전역 상태관리",
    "카카오 소셜 로그인의 도입으로 사용자 유입의 간편화",
    "카메라로 바코드를 인식할 수 있는 기능 도입",
    "전국의 지역코드를 json 코드로 활용하여 기부 지역 설정 간편화",
  ],
  after: [
    "모바일 어플리케이션 개발은 처음으로, 웹 개발과는 위젯의 사용 등 확연히 다름을 인지",
    "Dart라는 새로운 언어를 학습하며 Null Safety의 중요성에 대해 인지하고 백엔드 팀원과의 소통으로 타입의 안전성 확보",
    "도서가 등록되면 기부자의 정보와 도서의 정보가 함께 저장되고, 기부의 반복으로 저장이 반복되는데 이 과정에서 블록체인을 도입한다면 보다 효율적인 도서 관리가 가능할 것이라고 추측되지만 기술적 한계로 시도하지 못함",
  ],
  githubLink: "https://github.com/hyeii/book-donations",
};

export const p4Detail: projectType = {
  order: "04",
  title: "데일리 메이트",
  subtitle: "일상의 모든 것을 한번에 관리하는 우리의 다이어리",
  date: "24.01.02 ~ 23.02.27",
  role: "UI/UX, Front-Dnd",
  member: "Back-End 4 | Front-End 1 | Ful-Stack 1",
  goal: "온라인으로 모든 것을 해결할 수 있는 요즈음의 MZ세대를 위해 다이어리, 가계부, 할 일 관리를 한번에 해결할 수 있는 통합 교류 플랫폼",
  environment: {
    frontend: ["React", "Recoil", "TypeScript", "Styled-Components"],
    backend: ["Java", "Spring boot", "Spring Security", "Maria DB", "Redis"],
    infra: [],
  },
  mainfunction: [
    "월별 가계부 조회 및 날짜를 클릭해 날짜별 가계부 내역 조회, 막대 그래프를 통해 간편한 확인",
    "사진, 기분, 날씨를 함께 기록할 수 있는 다이어리 기능, 다른 유저의 다이어리에 좋아요 및 댓글 기능",
    "할 일 리스트를 드래그 앤 드롭을 통해 편리하게 관리 및 달력에서 달성도 확인",
  ],
  myRole: [
    "React와 상태관리 라이브러리 Recoil의 사용",
    "Date-fns를 활용해 날짜를 일정한 형태로 포맷하여 직접 달력 컴포넌트를 구현, 다양한 페이지에 활용 가능하도록 설정",
    "axios를 활용한 서버와의 통신, interceptor를 적절히 사용해 request 시 baseURL 설정 및 response시 401에러를 확인, 토큰 재발급 적용",
    "React-chartjs-2의 사용으로 가계부 페이지를 시각화",
    "카카오 및 구글 소셜 로그인의 도입",
  ],
  after: [
    "소셜 로그인을 적용하는 과정에서 Redirect를 하는 시점, 서버에 유저 정보를 요청하는 시점, Oauth 시스템에 정보르 요청하는 시점 등을 다르게 적용하여 다양한 방법으로 소셜 로그인을 적용할 수 있음을 학습, 백엔드 팀원과의 지속적인 소통으로 보다 적절한 방법으로 구현",
    "기존 프로젝트에서 구현하였던 사이드바를 참고하되 개선된 CSS 설정과 상태관리를 통해 효율적인 컴포넌트 구현",
    "달력 컴포넌트를 직접 구현함에 있어 코드의 가독성이 저하되어 적절한 상태관리를 통해 코드의 가독성을 높일 필요성을 느낌",
  ],
  githubLink: "https://github.com/DailyMate/DailyMate",
};
