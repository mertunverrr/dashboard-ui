import { useAppSelector } from "../redux/hooks";

function TopSkills() {
  const employeesData = useAppSelector((store) => store.data.data);
  const topSkills = employeesData.top_skills;

  return (
    <div className="container basis-1/4 bg-slate-400 rounded-xl pt-3 px-6 space-y-3">
      <h2 className="font-gemunu tracking-wide text-2xl font-semibold">
        Most Used Skills
      </h2>
      <div className="flex justify-center flex-wrap space-x-2 font-opensans">
        {topSkills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col justify-between items-center bg-amber-300 rounded-xl w-24 h-20 px-2 py-2.5 mb-2"
          >
            <span className="text-center text-sm leading-4">{skill.skill}</span>
            <span className="rounded-full bg-white w-6 h-6 flex justify-center items-center text-sm font-semibold">
              {skill.employees}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopSkills;
