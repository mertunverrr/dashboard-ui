import { useAppSelector } from "../redux/hooks";

function TopSkills() {
  const employeesData = useAppSelector((store) => store.data.data);
  const topSkills = employeesData.top_skills;

  return (
    <div
      id="skills"
      className="container basis-1/4 bg-cardBgColor rounded-md shadow-lg pt-3 px-2 space-y-3"
    >
      <h2 className="font-gemunu tracking-wide text-xl ml-4 lg:text-2xl font-semibold text-titleColor">
        Most Used Skills
      </h2>
      <div className="flex justify-center flex-wrap space-x-1 xl:space-x-2 font-opensans">
        {topSkills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col justify-between items-center bg-lightPurpleColor rounded-3xl w-24 h-20 md:w-18 md:h-20 2xl:w-24 2xl:h-20 px-2 py-2.5 mb-2 hover:rotate-12 hover:scale-110 hover:bg-violet-400 transition duration-300 "
          >
            <span className="text-center text-xs 2xl:text-sm leading-4 font-medium text-textColor">
              {skill.skill}
            </span>
            <span className="rounded-full bg-darkPurpleColor text-white w-6 h-6 flex justify-center items-center text-sm font-semibold">
              {skill.employees}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopSkills;
