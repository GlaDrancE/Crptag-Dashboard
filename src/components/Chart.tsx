import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { BsThreeDots } from "react-icons/bs";

const data = [
  { month: "Jan", fake: 40, original: 80 },
  { month: "Feb", fake: 30, original: 60 },
  { month: "Mar", fake: 50, original: 90 },
  { month: "Apr", fake: 50, original: 100 },
  { month: "May", fake: 45, original: 95 },
  { month: "Jun", fake: 40, original: 90 },
  { month: "Jul", fake: 55, original: 110 },
  { month: "Aug", fake: 50, original: 100 },
  { month: "Sep", fake: 45, original: 95 },
  { month: "Oct", fake: 40, original: 90 },
  { month: "Nov", fake: 30, original: 70 },
  { month: "Dec", fake: 35, original: 75 },
];

export const DashboardChart: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded shadow mt-4 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Verification Overview</h2>
        <BsThreeDots />
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          barCategoryGap="20%"
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickLine={false} ticks={[0, 20, 40, 60, 80, 100, 120]} />
          <Tooltip />
          <Legend verticalAlign="top" align="right" />
          <Bar dataKey="fake" fill="#EA4335" radius={[10, 10, 0, 0]} />
          <Bar dataKey="original" fill="#34A853" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
