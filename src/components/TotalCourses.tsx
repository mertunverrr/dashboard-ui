import { useAppSelector } from "../redux/hooks";

function TotalCourses() {
  const employeesData = useAppSelector((store) => store.data.data);
  const totalCourses = employeesData.total_completed_courses;

  return (
    <div className="flex flex-col justify-between py-6 px-6 bg-white rounded-lg shadow-md basis-1/3">
      <div className="flex items-center">
        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
          <i className="uil uil-book text-xl text-blue-500"></i>
        </div>
        <div className="ml-3">
          <h2 className="font-gemunu tracking-wide text-2xl font-semibold text-blue-500">
            Total Courses
          </h2>
        </div>
      </div>
      <div className="flex justify-between px-6 py-2 font-opensans">
        <h2 className="text-3xl font-semibold text-gray-900">{totalCourses}</h2>
        <div
          className={
            "flex items-center bg-green-100 text-green-600 rounded-full px-2 py-1"
          }
        >
          <i className="uil uil-analysis"></i>
          <span className="ml-1 text-sm">7.52%</span>
        </div>
      </div>
    </div>
  );
}

export default TotalCourses;