import { useState } from "react";
import { useAppSelector } from "../redux/hooks";

function Courses() {
  const [changeScreen, setChangeScreen] = useState<string>("progress");
  const employeesData = useAppSelector((store) => store.data.data);
  const progressCourses = employeesData.in_progress_courses;
  const upcomingCourses = employeesData.upcoming_courses;

  return (
    <div className="container mx-auto px-6 py-3 bg-white rounded-lg shadow-md basis-5/12">
      <div className="flex space-x-8">
        <h4
          className={
            changeScreen === "progress"
              ? " mb-3 flex justify-center items-center font-gemunu text-red-500 cursor-pointer hover:text-red-500"
              : " mb-3 flex justify-center items-center font-gemunu cursor-pointer hover:text-red-500"
          }
          onClick={() => setChangeScreen("progress")}
        >
          {changeScreen === "progress" && (
            <span className="w-2 h-2 rounded-full bg-green-600 mr-1"></span>
          )}
          In Progress Courses
        </h4>
        <h4
          className={
            changeScreen === "upcoming"
              ? " mb-3 flex justify-center items-center font-gemunu text-red-500 cursor-pointer hover:text-red-500"
              : " mb-3 flex justify-center items-center font-gemunu cursor-pointer hover:text-red-500"
          }
          onClick={() => setChangeScreen("upcoming")}
        >
          {changeScreen === "upcoming" && (
            <span className="w-2 h-2 rounded-full bg-green-600 mr-1"></span>
          )}
          Upcoming Courses
        </h4>
      </div>
      {changeScreen === "progress" &&
        progressCourses.map((course, index) => (
          <div
            key={index}
            className="bg-blue-100 px-3 py-2 pb-3 rounded-lg mb-1"
          >
            <h3 className="text-lg font-gemunu font-semibold mb-1">
              {course.title}
            </h3>
            <p className="mb-1 text-sm">{course.description}</p>
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
            className="bg-blue-100 px-3 py-2 pb-3 rounded-lg mb-1"
          >
            <h3 className="text-lg font-gemunu font-semibold mb-1">
              {course.title}
            </h3>
            <p className="mb-1 text-sm">{course.description}</p>
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
