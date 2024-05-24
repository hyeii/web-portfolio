import MainText from "@/components/common/MainText";

const Home = () => {
  const string = "I want to be a Front-end Developer"; //원하는 텍스트를 string변수 선언
  const split = string.split("");

  return (
    <div className="w-full bg-[#363636] text-white overflow-auto text-3xl">
      <MainText />
    </div>
  );
};

export default Home;
