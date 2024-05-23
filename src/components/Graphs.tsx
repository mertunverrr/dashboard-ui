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
  const radius = 10; // Yuvarlatma yarıçapı

  return (
    <Rectangle
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fill}
      radius={[radius, radius, 0, 0]} // Üst köşeleri yuvarlat
    />
  );
};

function Graphs() {
  const employeesData = useAppSelector((store) => store.data.data);
  const skillsInDev = employeesData.skills_in_development;

  return (
    <div className="h-60 w-full bg-white rounded-xl container basis-3/4 px-6 py-3 shadow-lg">
      <h3 className="font-gemunu tracking-wide text-2xl font-semibold text-indigo-600 mb-2.5">
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
            strokeDasharray="3 3"
            stroke="hsl(210, 22%, 90%)"
            horizontal={true}
            vertical={false}
          />
          <XAxis
            dataKey="skill"
            className="text-[11px]"
            interval={0}
            stroke="hsl(210, 22%, 70%)"
          />
          <YAxis
            domain={[0, 6]}
            stroke="hsl(210, 22%, 70%)"
            className="text-sm"
            label={{
              value: "People",
              position: "insideTop",
              dy: -30,
              dx: 32,
              fill: "hsl(210, 22%, 70%)",
            }}
          />
          <Bar
            dataKey="employees"
            fill="hsl(228, 34%, 66%)"
            barSize={50}
            shape={renderRoundedBar as any} // shape özelliği için renderRoundedBar işlevini kullan
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Graphs;
