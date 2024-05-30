import classNames from "classnames";
import { Noto_Serif_KR } from "next/font/google";

const notoSerifKr = Noto_Serif_KR({
  weight: "400",
  subsets: ["latin"],
});

const notoSerifKr_bold = Noto_Serif_KR({
  weight: "900",
  subsets: ["latin"],
});

const serif = classNames(`${notoSerifKr.className}`);

const AboutMe = () => {
  return (
    <div>
      <h1>About Me</h1>
      <hr />
      <div className="my-24">
        <p className="">
          <span className="font-bold">꿈꾸던 무한한 상상</span>
          을 눈으로 볼 수 있게 구현하는 것에 매력을 느껴 <br />
          프론트엔드 개발자로 나아가고 있습니다. <br />
          <br />그 누구도 소외되지 않고{" "}
          <span className="font-bold">모두가 경험할 수 있는 서비스</span>
          를 만들어
          <br /> 보다 나은 세상을 바라보고자 합니다.
          <br />
        </p>
        <div className="my-24" />
        <span className="">
          🌊 삼성 청년 소프트웨어 아카데미 9기 (2023.01.04 ~ 2023.12.29)
        </span>
        <br />
        <span className="">🌃 경희대학교 물리학과 (2016 ~ 2021)</span>
        <br />
        <span>✉️ hyeii326@gmail.com</span>
        <div className="flex">
          <svg
            className="w-5 h-5"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>GitHub</title>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
          <div className="mx-1" />
          <p className="hover:font-bold">
            <a target="_blank" href="https://github.com/hyeii">
              hyeii
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
