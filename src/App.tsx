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
    <div className="bg-bgColor min-h-screen space-y-4 pb-6 font-opensans">
      <Header />
      <div className="flex space-x-4 container">
        <div className="flex space-x-4 basis-3/4 ">
          <TotalEmployee />
          <ProgressBar />
          <ActivityHours />
        </div>
        <div className="flex basis-1/4">
          <LeaderboardEmp />
        </div>
      </div>
      <div className="flex space-x-4 container">
        <Graphs />
        <TopSkills />
      </div>
      <div className="flex container space-x-4">
        <Teams />
        <Courses />
      </div>
    </div>
  );
}

export default App;
