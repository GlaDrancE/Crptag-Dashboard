import React, { useState, useEffect } from "react";
import LayoutComponent from "./Layout";
import { BsThreeDots } from "react-icons/bs";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  Legend as RechartsLegend,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import MapChart, { MapData } from "./MapChart.tsx";

const data = [
  { name: "Blacklisted UID", value: 126 },
  { name: "Blacklisted Devices", value: 20 },
  { name: "Blacklisted IPs", value: 141 },
  { name: "Fake Results", value: 1040 },
];

const COLORS = ["#4285F4", "#EA4335", "#FBBC05", "#34A853"];

const PieChartComponent: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow max-h-full w-96 flex flex-col items-center">
      <h3 className="text-center mb-4">Overview of Fraud</h3>
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          innerRadius={60}
          fill="#8884d8"
          dataKey="value"
          cornerRadius={5}
          paddingAngle={2}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <RechartsTooltip />
        <text
          x={100}
          y={100}
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-xl font-semibold"
          fill="#333"
        >
          Total
        </text>
        <text
          x={100}
          y={120}
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-xl font-semibold"
          fill="#333"
        >
          1992
        </text>
      </PieChart>
      <ul className="mt-1">
        {data.map((entry, index) => (
          <li key={`legend-${index}`} className="flex items-center my-1">
            <div
              className="w-4 h-4"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            ></div>
            <span className="ml-2">{entry.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
// Register Chart.js components
Chart.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

// Valid GeoJSON URL for India
const geoUrl =
  "https://raw.githubusercontent.com/datameet/maps/master/geojson/country/india_telengana.geojson";

const sampleOverviewData = {
  totalFakeCount: 100,
  totalBlacklist: 20,
  blacklistedIps: 141,
  blacklistedDevices: 20,
  blacklistedUid: 126,
  totalFakeResults: 1040,
  total: 1992,
};

const sampleMapData = [
  {
    properties: { name: "Delhi" },
    geometry: { coordinates: [77.1025, 28.7041] },
  },
  {
    properties: { name: "Mumbai" },
    geometry: { coordinates: [72.8777, 19.076] },
  },
  {
    properties: { name: "Kolkata" },
    geometry: { coordinates: [88.3639, 22.5726] },
  },
];

const SampleFraudData: MapData[] = [
  {
    id: 1,
    ip: "203.0.113.1",
    latitude: 28.6139,
    longitude: 77.209,
    value: Math.round(Math.random() * 100),
    state: "Delhi",
  },
  {
    id: 2,
    ip: "203.0.113.2",
    latitude: 19.076,
    longitude: 72.8777,
    value: Math.round(Math.random() * 100),
    state: "Maharashtra",
  },
  {
    id: 3,
    ip: "203.0.113.3",
    latitude: 13.0827,
    longitude: 80.2707,
    value: Math.round(Math.random() * 100),
    state: "Tamil Nadu",
  },
  {
    id: 4,
    ip: "203.0.113.4",
    latitude: 22.5726,
    longitude: 88.3639,
    value: Math.round(Math.random() * 100),
    state: "West Bengal",
  },
  {
    id: 5,
    ip: "203.0.113.5",
    latitude: 12.9716,
    longitude: 77.5946,
    value: Math.round(Math.random() * 100),
    state: "Karnataka",
  },
  {
    id: 6,
    ip: "203.0.113.6",
    latitude: 26.8467,
    longitude: 80.9462,
    value: Math.round(Math.random() * 100),
    state: "Uttar Pradesh",
  },
  {
    id: 7,
    ip: "203.0.113.7",
    latitude: 17.385,
    longitude: 78.4867,
    value: Math.round(Math.random() * 100),
    state: "Telangana",
  },
  {
    id: 8,
    ip: "203.0.113.8",
    latitude: 18.5204,
    longitude: 73.8567,
    value: Math.round(Math.random() * 100),
    state: "Maharashtra",
  },
  {
    id: 9,
    ip: "203.0.113.9",
    latitude: 23.0225,
    longitude: 72.5714,
    value: Math.round(Math.random() * 100),
    state: "Gujarat",
  },
  {
    id: 10,
    ip: "203.0.113.10",
    latitude: 21.1702,
    longitude: 72.8311,
    value: Math.round(Math.random() * 100),
    state: "Gujarat",
  },
  {
    id: 11,
    ip: "203.0.113.11",
    latitude: 22.3072,
    longitude: 73.1812,
    value: Math.round(Math.random() * 100),
    state: "Gujarat",
  },
  {
    id: 12,
    ip: "203.0.113.12",
    latitude: 15.2993,
    longitude: 74.124,
    value: Math.round(Math.random() * 100),
    state: "Goa",
  },
  {
    id: 13,
    ip: "203.0.113.13",
    latitude: 11.0168,
    longitude: 76.9558,
    value: Math.round(Math.random() * 100),
    state: "Tamil Nadu",
  },
  {
    id: 14,
    ip: "203.0.113.14",
    latitude: 25.3176,
    longitude: 82.9739,
    value: Math.round(Math.random() * 100),
    state: "Uttar Pradesh",
  },
  {
    id: 15,
    ip: "203.0.113.15",
    latitude: 22.7196,
    longitude: 75.8577,
    value: Math.round(Math.random() * 100),
    state: "Madhya Pradesh",
  },
  {
    id: 16,
    ip: "203.0.113.16",
    latitude: 31.1048,
    longitude: 77.1734,
    value: Math.round(Math.random() * 100),
    state: "Himachal Pradesh",
  },
  {
    id: 17,
    ip: "203.0.113.17",
    latitude: 10.8505,
    longitude: 76.2711,
    value: Math.round(Math.random() * 100),
    state: "Kerala",
  },
  {
    id: 18,
    ip: "203.0.113.18",
    latitude: 26.9124,
    longitude: 75.7873,
    value: Math.round(Math.random() * 100),
    state: "Rajasthan",
  },
  {
    id: 19,
    ip: "203.0.113.19",
    latitude: 26.1445,
    longitude: 91.7362,
    value: Math.round(Math.random() * 100),
    state: "Assam",
  },
  {
    id: 20,
    ip: "203.0.113.20",
    latitude: 25.5941,
    longitude: 85.1376,
    value: Math.round(Math.random() * 100),
    state: "Bihar",
  },
  {
    id: 21,
    ip: "203.0.113.21",
    latitude: 23.3441,
    longitude: 85.3096,
    value: Math.round(Math.random() * 100),
    state: "Jharkhand",
  },
  {
    id: 22,
    ip: "203.0.113.22",
    latitude: 22.5726,
    longitude: 88.3639,
    value: Math.round(Math.random() * 100),
    state: "West Bengal",
  },
  {
    id: 23,
    ip: "203.0.113.23",
    latitude: 27.1767,
    longitude: 78.0081,
    value: Math.round(Math.random() * 100),
    state: "Uttar Pradesh",
  },
  {
    id: 24,
    ip: "203.0.113.24",
    latitude: 26.85,
    longitude: 80.949997,
    value: Math.round(Math.random() * 100),
    state: "Uttar Pradesh",
  },
  {
    id: 25,
    ip: "203.0.113.25",
    latitude: 23.233,
    longitude: 77.434,
    value: Math.round(Math.random() * 100),
    state: "Madhya Pradesh",
  },
  {
    id: 26,
    ip: "203.0.113.26",
    latitude: 30.7333,
    longitude: 76.7794,
    value: Math.round(Math.random() * 100),
    state: "Chandigarh",
  },
  {
    id: 27,
    ip: "203.0.113.27",
    latitude: 9.9252,
    longitude: 78.1198,
    value: Math.round(Math.random() * 100),
    state: "Tamil Nadu",
  },
  {
    id: 28,
    ip: "203.0.113.28",
    latitude: 24.5854,
    longitude: 73.7125,
    value: Math.round(Math.random() * 100),
    state: "Rajasthan",
  },
  {
    id: 29,
    ip: "203.0.113.29",
    latitude: 21.2514,
    longitude: 81.6296,
    value: Math.round(Math.random() * 100),
    state: "Chhattisgarh",
  },
  {
    id: 30,
    ip: "203.0.113.30",
    latitude: 26.2389,
    longitude: 73.0243,
    value: Math.round(Math.random() * 100),
    state: "Rajasthan",
  },
  {
    id: 31,
    ip: "203.0.113.31",
    latitude: 21.1458,
    longitude: 79.0882,
    value: Math.round(Math.random() * 100),
    state: "Maharashtra",
  },
  {
    id: 32,
    ip: "203.0.113.32",
    latitude: 10.998,
    longitude: 76.9616,
    value: Math.round(Math.random() * 100),
    state: "Tamil Nadu",
  },
  {
    id: 33,
    ip: "203.0.113.33",
    latitude: 11.6643,
    longitude: 78.146,
    value: Math.round(Math.random() * 100),
    state: "Tamil Nadu",
  },
  {
    id: 34,
    ip: "203.0.113.34",
    latitude: 19.8762,
    longitude: 75.3433,
    value: Math.round(Math.random() * 100),
    state: "Maharashtra",
  },
  {
    id: 35,
    ip: "203.0.113.35",
    latitude: 19.2183,
    longitude: 72.9781,
    value: Math.round(Math.random() * 100),
    state: "Maharashtra",
  },
  {
    id: 36,
    ip: "203.0.113.36",
    latitude: 12.2958,
    longitude: 76.6394,
    value: Math.round(Math.random() * 100),
    state: "Karnataka",
  },
  {
    id: 37,
    ip: "203.0.113.37",
    latitude: 11.4014,
    longitude: 76.7014,
    value: Math.round(Math.random() * 100),
    state: "Tamil Nadu",
  },
  {
    id: 38,
    ip: "203.0.113.38",
    latitude: 22.3572,
    longitude: 72.8354,
    value: Math.round(Math.random() * 100),
    state: "Gujarat",
  },
  {
    id: 39,
    ip: "203.0.113.39",
    latitude: 25.3754,
    longitude: 86.473,
    value: Math.round(Math.random() * 100),
    state: "Bihar",
  },
  {
    id: 40,
    ip: "203.0.113.40",
    latitude: 28.4595,
    longitude: 77.0266,
    value: Math.round(Math.random() * 100),
    state: "Haryana",
  },
];

const stateWiseCases = [
  { name: "andhra-pradesh", value: 45 },
  { name: "arunachal-pradesh", value: 10 },
  { name: "assam", value: 30 },
  { name: "bihar", value: 60 },
  { name: "chhattisgarh", value: 20 },
  { name: "goa", value: 15 },
  { name: "gujarat", value: 55 },
  { name: "haryana", value: 25 },
  { name: "himachal-pradesh", value: 15 },
  { name: "jharkhand", value: 35 },
  { name: "karnataka", value: 40 },
  { name: "kerala", value: 45 },
  { name: "madhya-pradesh", value: 50 },
  { name: "maharashtra", value: 70 },
  { name: "manipur", value: 10 },
  { name: "meghalaya", value: 10 },
  { name: "mizoram", value: 5 },
  { name: "nagaland", value: 10 },
  { name: "odisha", value: 30 },
  { name: "punjab", value: 25 },
  { name: "rajasthan", value: 50 },
  { name: "sikkim", value: 5 },
  { name: "tamil-nadu", value: 60 },
  { name: "telangana", value: 40 },
  { name: "tripura", value: 5 },
  { name: "uttar-pradesh", value: 80 },
  { name: "uttarakhand", value: 20 },
  { name: "west-bengal", value: 50 },
  { name: "andaman-and-nicobar-islands", value: 5 },
  { name: "chandigarh", value: 5 },
  { name: "dadra-and-nagar-haveli-and-daman-and-diu", value: 5 },
  { name: "lakshadweep", value: 5 },
  { name: "delhi", value: 65 },
  { name: "puducherry", value: 5 },
  { name: "jammu-and-kashmir", value: 20 },
  { name: "ladak", value: 5 },
];
const sampleBarData = [
  { month: "Jan", fakeResults: 5 },
  { month: "Feb", fakeResults: 10 },
  { month: "Mar", fakeResults: 50 },
  { month: "Apr", fakeResults: 50 },
  { month: "May", fakeResults: 45 },
  { month: "Jun", fakeResults: 45 },
  { month: "Jul", fakeResults: 110 },
  { month: "Aug", fakeResults: 50 },
  { month: "Sep", fakeResults: 50 },
  { month: "Oct", fakeResults: 10 },
  { month: "Nov", fakeResults: 50 },
  { month: "Dec", fakeResults: 50 },
];

const CustomBarShape = (props: any) => {
  const { x, y, width, height, fill } = props;
  const radius = 10; // Adjust the radius for the circular top
  const barY = y + 9;
  return (
    <g>
      <rect x={x} y={barY} width={width} height={height - radius} fill={fill} />
      <path
        d={`M${x},${barY} a${radius},${radius} 0 0,1 ${radius},${-radius} h${
          width - 2 * radius
        } a${radius},${radius} 0 0,1 ${radius},${radius} Z`}
        fill={fill}
      />
    </g>
  );
};

const FraudAnalytics1: React.FC = () => {
  const [overviewData, setOverviewData] = useState<any>(sampleOverviewData);
  const [barData, setBarData] = useState<any>(sampleBarData);
  const [mapData, setMapData] = useState<any>(SampleFraudData);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    // Here you would normally fetch data, but we use static data for this example
    setOverviewData(sampleOverviewData);
    setBarData(sampleBarData);
  }, []);
  // const calculateCases = (st_nm: any) => {
  //   const value = mapData.filter((item: any) => item.state === st_nm).length;
  //   states.push({ name: st_nm, value: value });
  //   return value;
  // };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="rounded-lg mt-4">
      {overviewData && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
          <div className="bg-white p-4 shadow rounded-lg tex-left">
            <div className="flex justify-between">
              <h2 className="text-sm font-semibold mb-4">Fraud Overview</h2>
              <BsThreeDots />
            </div>
            <div className="flex justify-between gap-5">
              <div className="grow">
                <h3 className="text-gray-500">Total Fake Count</h3>
                <p className="text-blue-600">{overviewData.totalFakeCount}</p>
                <img className="mt-3" src="/blue-line.png" alt="" />
              </div>
              <div className="grow">
                <h3 className="text-gray-500">Total Blacklist</h3>
                <p className="text-blue-600">{overviewData.totalBlacklist}</p>
                <img className="mt-3" src="/green-line.png" alt="" />
              </div>
            </div>
          </div>

          <div className="bg-white p-4 shadow rounded-lg tex-left">
            <h3 className="text-sm font-semibold mb-4">Blacklisted IPs</h3>
            <p className="text-blue-600 text-2xl">
              {overviewData.blacklistedIps}
            </p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg tex-left">
            <h3 className="text-sm font-semibold mb-4">Blacklisted Devices</h3>
            <p className="text-blue-600 text-2xl">
              {overviewData.blacklistedDevices}
            </p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg tex-left">
            <h3 className="text-sm font-semibold mb-4">Blacklisted UID</h3>
            <p className="text-blue-600 text-2xl">
              {overviewData.blacklistedUid}
            </p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg tex-left">
            <h3 className="text-sm font-semibold mb-4">Total Fake Results</h3>
            <p className="text-blue-600 text-2xl">
              {overviewData.totalFakeResults}
            </p>
          </div>
        </div>
      )}
      <div className="flex gap-4 mb-4">
        {barData && (
          <div className="bg-white p-4 shadow rounded-lg grow">
            <h3 className="text-center mb-16">
              Fake Results Breakdown By Month
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barData} barSize={20} margin={{ bottom: 0 }}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <RechartsTooltip />
                <RechartsLegend />
                <Bar
                  dataKey="fakeResults"
                  fill="rgba(255, 99, 132, 0.5)"
                  shape={<CustomBarShape />}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
        {overviewData && (
          // <div className="bg-white p-4 shadow rounded-lg flex items-center justify-center">
          <PieChartComponent />
          // </div>
        )}
      </div>
      <div className="flex gap-4 min-h-svh h-svh">
        <div className="grow  bg-white shadow-md rounded-lg">
          <h3 className="p-4">Region Wise Distribution</h3>
          <hr className="h-px bg-secondary/20" />
          <MapChart displayData={stateWiseCases} />
        </div>
        <div className="w-1/3 h-full rounded-lg shadow-md bg-white">
          <h3 className="p-4">Region Wise Distribution</h3>
          <hr className="h-px bg-secondary/20" />
          <div className="p-4 overflow-hidden max-h-full h-[90%]">
            <ul className="overflow-auto max-h-full h-full regionTextCount">
              {stateWiseCases.map((s) => (
                <div className="flex items-center justify-between">
                  <li className="grow">{s.name}</li>
                  <li>{s.value}</li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const FraudAnalytics: React.FC = () => {
  return (
    <LayoutComponent title="Analytics" subtitle="Fraud Analytics">
      <FraudAnalytics1 />
    </LayoutComponent>
  );
};

export default FraudAnalytics;

// raw code

{
  /* <div className="bg-white p-4 shadow rounded-lg grow"> */
}
{
  /* <ComposableMap projection="geoAlbersUsa">
  <Geographies geography={geoUrl}>
    {({ geographies }) =>
      geographies.map(geo => (
        <Geography key={geo.rsmKey} geography={geo} fill="#EAEAEC" stroke="#D6D6DA" />
      ))
    }
  </Geographies>
  {mapData && mapData.map(({ properties, geometry }, index) => {
    if (!Array.isArray(geometry.coordinates) || geometry.coordinates.length !== 2) {
      console.error("Invalid coordinates for marker:", geometry);
      return null;
    }
    return (
      <Marker key={index} coordinates={geometry.coordinates}>
        <circle r={10} fill="#F53" />
        <text textAnchor="middle" y={-15} style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}>
          {properties.name}
        </text>
      </Marker>
    );
  })}
</ComposableMap> */
}
{
  /* <MapChart /> */
}
{
  /* </div> */
}
