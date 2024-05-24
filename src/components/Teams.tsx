import { useState } from "react";
import { useAppSelector } from "../redux/hooks";
import { FaStar } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image1 from "../assets/pexels-alipazani-2613260.jpg";
import Image2 from "../assets/pexels-heitorverdifotos-2169434.jpg";
import Image3 from "../assets/pexels-italo-melo-881954-2379005.jpg";
import Image4 from "../assets/pexels-latronico-713520.jpg";
import Image5 from "../assets/pexels-pixabay-415829.jpg";

const images = [Image1, Image2, Image3, Image4, Image5];

function Teams() {
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const [animationClass, setAnimationClass] = useState<string>("");
  const employeesData = useAppSelector((store) => store.data.data);
  const teamsData = employeesData?.teams;

  const handlePrevious = () => {
    setShowDetail(false);
    setAnimationClass("animate-slideRightOut");
    setTimeout(() => {
      setIndex((prev) => Math.max(prev - 1, 0));
      setAnimationClass("animate-slideRightIn");
      setTimeout(() => {
        setAnimationClass("");
      }, 500);
    }, 500);
  };

  const handleNext = () => {
    setShowDetail(false);
    setAnimationClass("animate-slideLeftOut");
    setTimeout(() => {
      setIndex((prev) => Math.min(prev + 1, teamsData.length - 1));
      setAnimationClass("animate-slideLeftIn");
      setTimeout(() => {
        setAnimationClass("");
      }, 500);
    }, 500);
  };

  const currentTeam = teamsData?.[index];

  return (
    <section className="flex rounded-xl basis-7/12 bg-red-200 px-20 py-6 relative overflow-hidden">
      {index > 0 && (
        <button
          className="z-50 w-12 h-12 bg-yellow-300 absolute rounded-full flex justify-center items-center left-2 bottom-1/2 translate-y-1/2 opacity-80"
          onClick={handlePrevious}
        >
          <IoIosArrowBack className="text-3xl" />
        </button>
      )}
      <div className={`w-full transition-transform ${animationClass}`}>
        {showDetail ? (
          <div className="grid grid-cols-3 gap-x-6 gap-y-4 relative h-full">
            {currentTeam?.employees.map((employee, ind) => (
              <div key={ind} className="basis-1/2">
                <div className="flex justify-between items-center relative">
                  <div className="flex flex-col">
                    <h4 className="font-gemunu tracking-wide text-2xl font-semibold text-pink-500">
                      {employee.name}
                    </h4>
                    <h6 className="-mt-1.5 mb-1.5 whitespace-nowrap text-lg font-gemunu ">
                      {employee.title}
                    </h6>
                  </div>
                  <FaStar className="text-purple-300 text-5xl" />
                  <span className="text-sm font-bold absolute top-5.5 right-3.5">
                    {employee.current_score.toFixed(1)}
                  </span>
                </div>
                <div className="flex flex-col space-y-0.5">
                  <span className="text-sm">{employee.email}</span>
                  <p className="text-sm ">
                    Skill being developed:{" "}
                    {employee.skills_being_developed.map((skill, i) => (
                      <span key={i} className="text-yellow-600">
                        {skill}
                        {i < employee.skills_being_developed.length - 1 && ", "}
                      </span>
                    ))}
                  </p>
                  <p className="text-sm">
                    Lessons taken: <span>{employee.lessons_taken}</span>
                  </p>
                </div>
              </div>
            ))}
            <div className="col-span-3 flex justify-start">
              <button
                className="px-2 py-1 bg-blue-300 rounded-md absolute -bottom-2.5 left-0"
                onClick={() => setShowDetail(false)}
              >
                Back
              </button>
            </div>
          </div>
        ) : currentTeam ? (
          <div className="flex flex-col h-full justify-between">
            <div className="flex flex-col">
              <div className="flex justify-between items-center">
                <h3 className="font-gemunu tracking-wide text-2xl font-semibold text-pink-500">
                  {currentTeam.title}
                </h3>
              </div>
              <h6 className="font-medium mb-5 font-gemunu text-lg">
                Team Score: <span>{currentTeam.overall_score}</span>
              </h6>
              <p className="text-green-800 text-sm">
                {currentTeam.description}
              </p>
            </div>
            <div className="flex justify-between">
              <div className="flex">
                {Array.from({ length: currentTeam.total_employee_count }).map(
                  (_, i) => (
                    <img
                      key={i}
                      src={images[i % images.length]}
                      alt={`Employee ${i + 1}`}
                      className="rounded-full object-cover w-12 h-12 mb-1 -mr-4 opacity-85"
                    />
                  )
                )}
              </div>
              <button
                className="bg-gray-600 w-32 py-1 text-white text-xs font-semibold font-gemunu tracking-wider border rounded-xl shadow-md hover:scale-110 hover:bg-green-500 transition duration-300 mt-4"
                onClick={() => setShowDetail(true)}
              >
                {currentTeam.total_employee_count} Employees Detail
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center w-full h-full">
            <p className="text-gray-500">No team data available</p>
          </div>
        )}
      </div>
      {index < teamsData.length - 1 && (
        <button
          className="w-12 h-12 bg-yellow-300 absolute rounded-full flex justify-center items-center right-2 bottom-1/2 translate-y-1/2 opacity-80"
          onClick={handleNext}
        >
          <IoIosArrowForward className="text-3xl" />
        </button>
      )}
    </section>
  );
}

export default Teams;
