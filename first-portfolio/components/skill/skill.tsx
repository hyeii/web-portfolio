const Skill = () => {
  return (
    <div>
      <h1>Skill</h1>
      <hr />
      <div className="my-24">
        <div>
          <span className="bg-white text-[#363636] font-bold">React</span>
          <p>컴포넌트를 재사용, 재활용하여 효율적으로 코드를 작성합니다</p>
          <p>
            Redux를 활용한 상태관리 경험이 있으며, Recoil, React-Query 등을
            공부중입니다
          </p>
          <br />
          <span className="bg-white text-[#363636] font-bold">Next.js</span>
          <p>SSR 컴포넌트와 CSR 컴포넌트를 필요에 따라 적절히 설계합니다</p>
          <p>
            SEO 최적화를 통해 구글 검색 엔진에 프로젝트를 노출시킨 경험이
            있습니다
          </p>
          <br />
          <span className="bg-white text-[#363636] font-bold">TypeScript</span>
          <p>
            JavaScript 뿐만 아니라 TypeScript를 활용하여 React, Next.js를
            다룹니다
          </p>
          <p>적절한 타입 명시를 통해 에러를 최소화합니다</p>
          <br />
          <span className="bg-white text-[#363636] font-bold">Vue.js</span>{" "}
          <span className="bg-white text-[#363636] font-bold">
            Tailwind CSS
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skill;
