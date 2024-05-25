import { useState } from "react";
import { useAppSelector } from "../redux/hooks";

function Courses() {
  const [changeScreen, setChangeScreen] = useState<string>("progress");
  const employeesData = useAppSelector((store) => store.data.data);
  const progressCourses = employeesData.in_progress_courses;
  const upcomingCourses = employeesData.upcoming_courses;

  return (
    <div
      id="courses"
      className="container px-6 py-3 bg-cardBgColor rounded-md shadow-lg basis-5/12 text-textColor"
    >
      <div className="flex space-x-8">
        <h4
          className={
            changeScreen === "progress"
              ? " mb-3 flex justify-center items-center font-gemunu text-titleColor cursor-pointer hover:text-darkPurpleColor"
              : " mb-3 flex justify-center items-center font-gemunu cursor-pointer hover:text-darkPurpleColor"
          }
          onClick={() => setChangeScreen("progress")}
        >
          {changeScreen === "progress" && (
            <span className="w-2 h-2 rounded-full bg-yellowColor mr-1"></span>
          )}
          In Progress Courses
        </h4>
        <h4
          className={
            changeScreen === "upcoming"
              ? " mb-3 flex justify-center items-center font-gemunu text-titleColor cursor-pointer hover:text-darkPurpleColor"
              : " mb-3 flex justify-center items-center font-gemunu cursor-pointer hover:text-darkPurpleColor"
          }
          onClick={() => setChangeScreen("upcoming")}
        >
          {changeScreen === "upcoming" && (
            <span className="w-2 h-2 rounded-full bg-greenColor mr-1"></span>
          )}
          Upcoming Courses
        </h4>
      </div>
      {changeScreen === "progress" &&
        progressCourses.map((course, index) => (
          <div
            key={index}
            className="bg-lightPurpleColor px-3 py-2 pb-3 rounded-lg mb-1"
          >
            <div className="flex items-center">
              <span className="w-2 h-2 bg-yellowColor rounded-full mr-2"></span>
              <h3 className="lg:text-lg font-gemunu font-semibold mb-1">
                {course.title}
              </h3>
            </div>

            <p className="mb-1 text-[13px] lg:text-sm">{course.description}</p>
            <div className="flex justify-between text-xs mb-0">
              <span>
                Instructor:{" "}
                <span className="font-medium cursor-pointer">
                  {course.assigned_to}
                </span>
              </span>
              <span>
                Due: <span>{course.due_date}</span>
              </span>
            </div>
          </div>
        ))}
      {changeScreen === "upcoming" &&
        upcomingCourses.map((course, index) => (
          <div
            key={index}
            className="bg-lightPurpleColor px-3 py-2 pb-3 rounded-lg mb-1"
          >
            <div className="flex items-center">
              <span className="w-2 h-2 bg-greenColor rounded-full mr-2"></span>
              <h3 className="lg:text-lg font-gemunu font-semibold mb-1">
                {course.title}
              </h3>
            </div>

            <p className="mb-1 text-[13px] lg:text-sm">{course.description}</p>
            <div className="flex justify-between text-xs mb-0">
              <span>
                Instructor:{" "}
                <span className="font-medium cursor-pointer">
                  {course.assigned_to}
                </span>
              </span>
              <span>
                Due: <span>{course.due_date}</span>
              </span>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Courses;
