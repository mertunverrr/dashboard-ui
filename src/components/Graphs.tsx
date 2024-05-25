import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Rectangle,
  BarProps,
} from "recharts";
import { useAppSelector } from "../redux/hooks";

const renderRoundedBar = (
  props: BarProps & { fill: string; x: number; y: number }
) => {
  const { x, y, width, height, fill } = props;

  return (
    <Rectangle
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fill}
      radius={[8, 8, 0, 0]}
    />
  );
};

function Graphs() {
  const employeesData = useAppSelector((store) => store.data.data);
  const skillsInDev = employeesData.skills_in_development;

  return (
    <div className="h-60 w-full bg-cardBgColor rounded-md container basis-3/4 px-6 py-3 shadow-lg">
      <h3 className="font-gemunu tracking-wide text-2xl font-semibold text-titleColor mb-2.5">
        Skills in Development
      </h3>
      <ResponsiveContainer>
        <BarChart
          data={skillsInDev}
          margin={{
            top: 25,
            right: 15,
            left: -40,
            bottom: 35,
          }}
          className="bg-transparent"
        >
          <CartesianGrid
            strokeDasharray="3 5"
            stroke="#2E2E2E"
            horizontal={true}
            vertical={false}
          />
          <XAxis
            dataKey="skill"
            className="text-[11px] tracking-tight"
            interval={0}
            stroke="#2E2E2E"
          />
          <YAxis
            domain={[0, 6]}
            stroke="#2E2E2E"
            className="text-sm"
            label={{
              value: "People",
              position: "insideTop",
              dy: -30,
              dx: 32,
              fill: "#2E2E2E",
            }}
          />
          <Bar
            dataKey="employees"
            fill="#5A4FCF"
            barSize={50}
            shape={renderRoundedBar as any}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Graphs;
