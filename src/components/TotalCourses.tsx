import { useAppSelector } from "../redux/hooks";

function TotalCourses() {
  const employeesData = useAppSelector((store) => store.data.data);
  const totalCourses = employeesData.total_completed_courses;

  return (
    <div className="flex flex-col h-1/2 border-t border-t-darkPurpleColor pt-3">
      <div className="flex items-center">
        <div className="flex items-center justify-center w-10 h-10 bg-lightPurpleColor rounded-full">
          <i className="uil uil-book text-xl text-darkPurpleColor"></i>
        </div>
        <div className="ml-3">
          <h2 className="font-gemunu tracking-wide text-xl font-semibold text-titleColor">
            Total Courses
          </h2>
        </div>
      </div>
      <div className="flex justify-between px-6 py-2 font-opensans">
        <h2 className="text-4xl font-semibold text-textColor font-gemunu">
          {totalCourses}
        </h2>
        <div
          className={
            "flex items-center bg-emerald-100 text-greenColor rounded-full px-2 py-1"
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
