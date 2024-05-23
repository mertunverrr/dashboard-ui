import React from "react";
import { useAppSelector } from "../redux/hooks";

const ProgressBar: React.FC = () => {
  const employeesData = useAppSelector((store) => store.data.data);
  const averageEmpScore = parseFloat(employeesData.average_employee_score);
  const percentage = (averageEmpScore / 5) * 100;
  const circleCircumference = Math.PI * 50;

  const progress = (circleCircumference * (100 - percentage)) / 100;

  return (
    <div className="flex flex-col pt-3 px-6 basis-1/3 bg-green-300 rounded-xl">
      <h2 className="font-gemunu tracking-wide text-2xl font-semibold">
        Average Employee Score
      </h2>
      <div className="relative flex justify-center mt-2">
        <svg
          className="transform"
          width="224"
          height="120"
          viewBox="0 0 120 54"
        >
          <defs>
            <linearGradient id="grad1">
              <stop offset="0%" stop-color="yellow" />
              <stop offset="100%" stop-color="red" />
            </linearGradient>
          </defs>
          <path
            d={`M10,50 A${50},${50} 0 0,1 110,50`}
            stroke="#d3d3d3"
            strokeWidth="10"
            fill="none"
            stroke-linecap="round"
          />
          <path
            d={`M10,50 A${50},${50} 0 0,1 110,50`}
            stroke="url(#grad1)"
            strokeWidth="10"
            fill="none"
            strokeDasharray={circleCircumference}
            strokeDashoffset={progress}
            stroke-linecap="round"
          />
        </svg>
        <div className="absolute top-10 text-center flex flex-col">
          <span className="text-2xl font-bold tracking-wide">
            {averageEmpScore}/{5}
          </span>
          <span>
            Rate<i className="uil uil-smile ml-1"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
