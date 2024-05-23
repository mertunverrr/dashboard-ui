import { useAppSelector } from "../redux/hooks";
import image1 from "../assets/pexels-latronico-713520.jpg";
import image2 from "../assets/pexels-italo-melo-881954-2379005.jpg";
import image3 from "../assets/pexels-pixabay-415829.jpg";

function LeaderboardEmp() {
  const employeesData = useAppSelector((store) => store.data.data);
  const topEmployees = employeesData.top_employees;

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden w-full">
      <div className="bg-gradient-to-r from-purple-400 to-blue-500 px-6 py-3 flex justify-between">
        <h2 className="font-gemunu tracking-wide text-2xl font-semibold text-white">
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
            className="relative flex items-center justify-between mb-2 bg-gray-300 px-2.5 py-1 rounded-md hover:scale-105 transition duration-300"
          >
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 bg-purple-500 rounded-full text-white font-semibold">
                <i className="uil uil-trophy"></i>
              </div>
              <div className="ml-3.5">
                <h3 className="font-semibold text-gray-800 flex items-center">
                  {index === 0 && (
                    <img src={image1} className="w-5 h-5 rounded-full mr-2" />
                  )}
                  {index === 1 && (
                    <img src={image2} className="w-5 h-5 rounded-full mr-2" />
                  )}
                  {index === 2 && (
                    <img src={image3} className="w-5 h-5 rounded-full mr-2" />
                  )}
                  {employee.name}
                </h3>
                <div className="overflow-hidden relative -mt-0.5">
                  <p className="text-sm text-gray-600 mb-0 whitespace-nowrap">
                    {employee.title}
                  </p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xl font-semibold text-purple-500">
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
