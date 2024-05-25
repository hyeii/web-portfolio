interface props {
  skill: string;
}

const SkillSet = ({ skill }: props) => {
  return (
    // <p className="">
    <span className="mx-2 rounded-3xl px-3 py-2 bg-white text-black">
      {skill}
    </span>
    // </p>
  );
};

export default SkillSet;
