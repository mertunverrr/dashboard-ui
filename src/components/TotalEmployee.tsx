import { useAppSelector } from "../redux/hooks";
import TotalCourses from "./TotalCourses";

function TotalEmployee() {
  const employeesData = useAppSelector((store) => store.data.data);
  const totalEmployees = employeesData.total_employees;

  return (
    <div className="flex flex-col justify-between py-3 px-6 bg-white rounded-lg shadow-md basis-1/3">
      <div className="flex flex-col h-1/2">
        <div className="flex items-center">
          <div className="flex items-center justify-center w-10 h-10 bg-purple-100 rounded-full">
            <i className="uil uil-users-alt text-xl text-purple-500"></i>
          </div>
          <div className="ml-3">
            <h2 className="font-gemunu tracking-wide text-xl font-semibold text-purple-500">
              Total Employee
            </h2>
          </div>
        </div>
        <div className="flex justify-between px-6 py-2 font-opensans">
          <h2 className="text-4xl font-semibold text-gray-900 font-gemunu">
            {totalEmployees}
          </h2>
          <div
            className={
              "flex items-center bg-red-100 text-red-600 rounded-full px-2 py-1"
            }
          >
            <i className="uil uil-analysis"></i>
            <span className="ml-1 text-sm">12.5%</span>
          </div>
        </div>
      </div>

      <TotalCourses />
    </div>
  );
}

export default TotalEmployee;
