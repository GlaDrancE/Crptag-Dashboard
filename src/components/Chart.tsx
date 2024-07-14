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
import ReactApexChart from "react-apexcharts";

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
    <div className="p-4 bg-white rounded-lg shadow mt-4 w-full">
      <div className=" mb-4">
        <h2 className="text-lg font-semibold">Verification Overview</h2>
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

const totalEncodedTagsData: any = {
  series: [{ data: [21, 9, 36, 12, 44, 25, 59, 41, 66, 25] }],
  options: {
    chart: {
      height: 58,
      type: "line",
      fontFamily: "Nunito, sans-serif",
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        blur: 3,
        color: "#155eef",
        opacity: 0.4,
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#155eef"],
    grid: {
      padding: {
        top: 5,
        bottom: 5,
        left: 5,
        right: 5,
      },
    },
    tooltip: {
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: () => {
            return "";
          },
        },
      },
    },
  },
};
export function EncodeTagsData() {
  return (
    <ReactApexChart
      options={totalEncodedTagsData.options}
      series={totalEncodedTagsData.series}
      type="line"
      height={58}
      className="overflow-hidden"
    />
  );
}

const totalUsedTagsData: any = {
  series: [{ data: [9, 10, 7, 10, 8, 12, 10] }],
  options: {
    chart: {
      height: 58,
      type: "line",
      fontFamily: "Nunito, sans-serif",
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        blur: 3,
        color: "#4AB74B",
        opacity: 0.4,
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#4AB74B"],
    grid: {
      padding: {
        top: 5,
        bottom: 5,
        left: 5,
        right: 5,
      },
    },
    tooltip: {
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: () => {
            return "";
          },
        },
      },
    },
  },
};
export function UsedTagsData() {
  return (
    <ReactApexChart
      options={totalUsedTagsData.options}
      series={totalUsedTagsData.series}
      type="line"
      height={58}
      className="overflow-hidden"
    />
  );
}
const totalFakeData: any = {
  series: [{ data: [9, 10, 7, 10, 8, 12, 10] }],
  options: {
    chart: {
      height: 58,
      type: "line",
      fontFamily: "Nunito, sans-serif",
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        blur: 3,
        color: "#D34B59",
        opacity: 0.4,
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#D34B59"],
    grid: {
      padding: {
        top: 5,
        bottom: 5,
        left: 5,
        right: 5,
      },
    },
    tooltip: {
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: () => {
            return "";
          },
        },
      },
    },
  },
};
export function FakeScannedData() {
  return (
    <ReactApexChart
      options={totalFakeData.options}
      series={totalFakeData.series}
      type="line"
      height={58}
      className="overflow-hidden"
    />
  );
}
const totalBlacklistData: any = {
  series: [{ data: [1, 2, 5, 10, 8, 12, 10] }],
  options: {
    chart: {
      height: 58,
      type: "line",
      fontFamily: "Nunito, sans-serif",
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        blur: 3,
        color: "#000",
        opacity: 0.4,
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#000"],
    grid: {
      padding: {
        top: 5,
        bottom: 5,
        left: 5,
        right: 5,
      },
    },
    tooltip: {
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: () => {
            return "";
          },
        },
      },
    },
  },
};
export function BlacklistData() {
  return (
    <ReactApexChart
      options={totalBlacklistData.options}
      series={totalBlacklistData.series}
      type="line"
      height={58}
      className="overflow-hidden"
    />
  );
}
