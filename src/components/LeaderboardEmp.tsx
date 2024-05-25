import { useAppSelector } from "../redux/hooks";
import image1 from "../assets/pexels-latronico-713520.jpg";
import image2 from "../assets/pexels-italo-melo-881954-2379005.jpg";
import image3 from "../assets/pexels-pixabay-415829.jpg";

function LeaderboardEmp() {
  const employeesData = useAppSelector((store) => store.data.data);
  const topEmployees = employeesData.top_employees;

  return (
    <div
      id="leaderboard"
      className="bg-cardBgColor rounded-md shadow-lg overflow-hidden w-full"
    >
      <div className="bg-gradient-to-r from-violet-300 to-darkPurpleColor px-6 py-2.5 flex justify-between">
        <h2 className="font-gemunu tracking-wide text-xl lg:text-2xl font-semibold text-white">
          Leaderboard
        </h2>
        <button className="text-white px-2.5 text-xs font-semibold font-gemunu tracking-wider border rounded-xl shadow-md">
          view all
        </button>
      </div>
      <div className="px-5 pt-2.5 pb-1.5">
        {topEmployees.map((employee, index) => (
          <div
            key={index}
            className="relative flex items-center justify-between mb-2 bg-lightPurpleColor px-2.5 py-1 rounded-md hover:scale-105 transition duration-300"
          >
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 bg-purple-600 rounded-full text-white font-semibold">
                <i className="uil uil-trophy"></i>
              </div>
              <div className="ml-3.5">
                <h3 className="text-sm lg:text-base font-semibold text-textColor flex items-center">
                  {index === 0 && (
                    <img
                      src={image1}
                      className="w-4 h-4 lg:w-5 lg:h-5 rounded-full mr-2"
                    />
                  )}
                  {index === 1 && (
                    <img
                      src={image2}
                      className="w-4 h-4 lg:w-5 lg:h-5 rounded-full mr-2"
                    />
                  )}
                  {index === 2 && (
                    <img
                      src={image3}
                      className="w-4 h-4 lg:w-5 lg:h-5 rounded-full mr-2"
                    />
                  )}
                  {employee.name}
                </h3>
                <div className="overflow-hidden relative -mt-0.5">
                  <p className="text-[13px] lg:text-sm text-textColor font-light mb-0 whitespace-nowrap">
                    {employee.title}
                  </p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <span className="text-lg lg:text-xl font-semibold text-darkPurpleColor">
                {employee.current_score} Pts
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeaderboardEmp;
