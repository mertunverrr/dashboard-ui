import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { getInfo } from "./redux/fetchApiSlice";
import TopSkills from "./components/TopSkills";
import ProgressBar from "./components/ProgressBar";
import TotalEmployee from "./components/TotalEmployee";
import LeaderboardEmp from "./components/LeaderboardEmp";
import Graphs from "./components/Graphs";
import Header from "./components/Header";
import Teams from "./components/Teams";
import Courses from "./components/Courses";
import ActivityHours from "./components/ActivityHours";

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
    <div className="bg-bgColor min-h-screen space-y-4 pb-6 font-opensans px-2 lg:px-0">
      <Header />
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-x-4 lg:space-y-0 lg:container">
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-x-4 lg:space-y-0 basis-3/4 ">
          <TotalEmployee />
          <ProgressBar />
          <ActivityHours />
        </div>
        <div className="flex flex-col lg:flex-row basis-1/4">
          <LeaderboardEmp />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row  lg:space-y-0 lg:space-x-4 container">
        <Graphs />
        <TopSkills />
      </div>
      <div className="flex flex-col lg:flex-row container space-y-4 lg:space-y-0 lg:space-x-4">
        <Teams />
        <Courses />
      </div>
      <p className="text-xs text-center font-semibold tracking-wider text-textColor">
        © mertunverrr
      </p>
    </div>
  );
}

export default App;
