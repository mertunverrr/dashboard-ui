import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { getInfo } from "./redux/fetchApiSlice";
import TopSkills from "./components/TopSkills";
import ProgressBar from "./components/ProgressBar";
import TotalEmployee from "./components/TotalEmployee";
import TotalCourses from "./components/TotalCourses";
import LeaderboardEmp from "./components/LeaderboardEmp";
import Graphs from "./components/Graphs";
import Header from "./components/Header";
import Teams from "./components/Teams";

function App() {
  const employeesData = useAppSelector((store) => store.data.data);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getInfo());
  }, []);
  useEffect(() => {
    console.log(employeesData);
  }, [employeesData]);

  return (
    <div className="bg-gray-200 min-h-screen space-y-4 pb-20 font-opensans">
      <Header />
      <div className="flex space-x-4 container">
        <div className="flex space-x-4 basis-3/4 ">
          <TotalEmployee />
          <TotalCourses />
          <ProgressBar />
        </div>
        <div className="flex basis-1/4">
          <LeaderboardEmp />
        </div>
      </div>
      <div className="flex space-x-4 container">
        <Graphs />
        <TopSkills />
      </div>
      <div className="flex container">
        <Teams />
      </div>
    </div>
  );
}

export default App;
