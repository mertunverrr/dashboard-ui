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
    <section className="flex rounded-md shadow-lg basis-7/12 bg-cardBgColor px-20 py-6 relative overflow-hidden">
      {index > 0 && (
        <button
          className="z-50 w-12 h-12 bg-lightPurpleColor text-secondTextColor absolute rounded-full flex justify-center items-center left-2 bottom-1/2 translate-y-1/2 opacity-70 hover:opacity-100"
          onClick={handlePrevious}
        >
          <IoIosArrowBack className="text-3xl" />
        </button>
      )}
      <div className={`w-full transition-transform ${animationClass}`}>
        {showDetail ? (
          <div className="grid grid-cols-3 gap-x-6 gap-y-4 relative h-full text-textColor">
            {currentTeam?.employees.map((employee, ind) => (
              <div key={ind} className="basis-1/2">
                <div className="flex justify-between items-center relative">
                  <div className="flex flex-col">
                    <h4 className="font-gemunu tracking-wide text-2xl font-semibold">
                      {employee.name}
                    </h4>
                    <h6 className="-mt-1.5 mb-1.5 whitespace-nowrap text-lg font-gemunu tracking-tight">
                      {employee.title}
                    </h6>
                  </div>
                  <FaStar className="text-titleColor text-5xl" />
                  <span className="text-sm font-bold absolute top-5.5 right-3.5 text-white">
                    {employee.current_score.toFixed(1)}
                  </span>
                </div>
                <div className="flex flex-col space-y-0.5">
                  <span className="text-sm">{employee.email}</span>
                  <p className="text-sm font-medium">
                    Skill being developed:{" "}
                    {employee.skills_being_developed.map((skill, i) => (
                      <span key={i} className="font-normal">
                        {skill}
                        {i < employee.skills_being_developed.length - 1 && ", "}
                      </span>
                    ))}
                  </p>
                  <p className="text-sm font-medium">
                    Lessons taken:{" "}
                    <span className="font-normal">
                      {employee.lessons_taken}
                    </span>
                  </p>
                </div>
              </div>
            ))}
            <div className="col-span-3 flex justify-start">
              <button
                className="w-32 py-2 bg-darkPurpleColor text-white text-sm font-semibold font-gemunu tracking-wider border rounded-xl shadow-md hover:scale-110 hover:brightness-125 transition duration-300  absolute -bottom-2.5 left-0"
                onClick={() => setShowDetail(false)}
              >
                Back
              </button>
              <button className="py-2 text-sm font-medium bg-redColor rounded-md px-4 text-white hover:scale-105 hover:brightness-110 brightness-95 absolute -bottom-2.5 right-0">
                Add New Employee
              </button>
            </div>
          </div>
        ) : currentTeam ? (
          <div className="flex flex-col h-full justify-between">
            <div className="flex flex-col">
              <div className="flex flex-row justify-between">
                <div className="flex justify-between items-center">
                  <h3 className="font-gemunu tracking-wide text-2xl font-semibold text-titleColor">
                    {currentTeam.title}
                  </h3>
                </div>
                <button className="text-sm font-medium bg-redColor rounded-md py-1 px-4 text-white hover:scale-105 hover:brightness-110 brightness-95">
                  Create new team
                </button>
              </div>

              <h6 className="font-medium mb-5 font-gemunu text-lg text-textColor">
                Team Score: <span>{currentTeam.overall_score}</span>
              </h6>
              <p className="text-textColor text-sm">
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
                className="bg-darkPurpleColor w-32 py-2 text-white text-sm font-semibold font-gemunu tracking-wider border rounded-xl shadow-md hover:scale-110 hover:brightness-125 transition duration-300 mt-4"
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
          className="w-12 h-12 bg-lightPurpleColor text-secondTextColor absolute rounded-full flex justify-center items-center right-2 bottom-1/2 translate-y-1/2 opacity-70 hover:opacity-100"
          onClick={handleNext}
        >
          <IoIosArrowForward className="text-3xl" />
        </button>
      )}
    </section>
  );
}

export default Teams;
