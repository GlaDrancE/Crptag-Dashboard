// import React, { useState } from "react";
// import Header from "./Header";
// import Sidebar from "./Sidebar";
// import Footer from "./Footer";
// import axios from 'axios';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
// import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
// import geoData from '../us-states.json'; // You need to have a GeoJSON file for the map
// import LayoutComponent from "./Layout";

// const markers = [
//   { markerOffset: -15, name: "New York", coordinates: [-74.006, 40.7128] },
//   { markerOffset: -15, name: "Los Angeles", coordinates: [-118.2437, 34.0522] },
//   { markerOffset: -15, name: "Chicago", coordinates: [-87.6298, 41.8781] },
// ];

// const RegionWiseScanDistribution: React.FC = () => {
//   return (
//     <div className="p-4 bg-white rounded shadow mt-4">
//       <h2 className="text-lg font-semibold mb-4">Region Wise Scan Distribution</h2>
//       <ComposableMap projection="geoAlbersUsa">
//         <Geographies geography={geoData}>
//           {({ geographies }) =>
//             geographies.map((geo) => (
//               <Geography key={geo.rsmKey} geography={geo} fill="#EAEAEC" stroke="#D6D6DA" />
//             ))
//           }
//         </Geographies>
//         {markers.map(({ name, coordinates, markerOffset }) => (
//           <Marker key={name} coordinates={coordinates}>
//             <circle r={10} fill="#F53" />
//             <text textAnchor="middle" y={markerOffset} style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}>
//               {name}
//             </text>
//           </Marker>
//         ))}
//       </ComposableMap>
//     </div>
//   );
// };

// // export default RegionWiseScanDistribution;

// // import React from 'react';

// // const OverviewSection: React.FC = () => {
// //   return (
// //     <div className="grid grid-cols-5 gap-4 p-4">
// //       <div className="bg-white p-4 rounded shadow">
// //         <h2 className="text-lg font-semibold mb-2">Total Scan Count</h2>
// //         <p className="text-3xl">1420</p>
// //         <p className="text-blue-500">Originality Ratio: 9:1</p>
// //       </div>
// //       <div className="bg-white p-4 rounded shadow">
// //         <h2 className="text-lg font-semibold mb-2">Total Registered IPs</h2>
// //         <p className="text-3xl">141</p>
// //       </div>
// //       <div className="bg-white p-4 rounded shadow border-blue-500 border-2">
// //         <h2 className="text-lg font-semibold mb-2">Total Devices Used</h2>
// //         <p className="text-3xl">20</p>
// //       </div>
// //       <div className="bg-white p-4 rounded shadow">
// //         <h2 className="text-lg font-semibold mb-2">Total Tags</h2>
// //         <p className="text-3xl">126</p>
// //       </div>
// //       <div className="bg-white p-4 rounded shadow">
// //         <h2 className="text-lg font-semibold mb-2">Total Original Results</h2>
// //         <p className="text-3xl">1040</p>
// //       </div>
// //     </div>
// //   );
// // };

// const OverviewSection: React.FC = () => {
//   return (
//     <div className="bg-white border border-blue-300 rounded-lg shadow-lg p-6 max-w-sm mx-auto">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-lg font-semibold">Usage Overview</h2>
//         <div className="text-gray-500 cursor-pointer">...</div>
//       </div>
//       <div className="flex justify-between">
//         <div className="text-center">
//           <p className="text-sm text-gray-500">Total Scan Count</p>
//           <p className="text-2xl font-bold text-blue-600">1420</p>
//           <svg className="w-24 h-12 mx-auto" viewBox="0 0 100 20" fill="none" stroke="blue" strokeWidth="2">
//             <path d="M0 15 Q 10 10, 20 15 T 40 15 T 60 15 T 80 15 T 100 15" />
//           </svg>
//         </div>
//         <div className="text-center">
//           <p className="text-sm text-gray-500">Originality Ratio</p>
//           <p className="text-2xl font-bold text-green-600">9:1</p>
//           <svg className="w-24 h-12 mx-auto" viewBox="0 0 100 20" fill="none" stroke="green" strokeWidth="2">
//             <path d="M0 15 Q 10 10, 20 15 T 40 15 T 60 15 T 80 15 T 100 15" />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// };
// // export default OverviewSection;

// // import React from 'react';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const ScanCountByMonth: React.FC = () => {
//   const data = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//     datasets: [
//       {
//         label: 'Scan Count',
//         data: [20, 10, 50, 30, 70, 90, 100, 60, 80, 40, 20, 60],
//         backgroundColor: 'rgba(75, 192, 192, 0.6)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: false,
//       },
//       title: {
//         display: true,
//         text: 'Scan Count By Month',
//       },
//     },
//   };

//   return (
//     <div className="p-4 bg-white rounded shadow mt-4">
//       <Bar data={data} options={options} />
//     </div>
//   );
// };

// // export default ScanCountByMonth;

// // import React from 'react';

// const UsageAnalytics: React.FC = () => {

//   return (

//     <LayoutComponent title="Analytics" subtitle="Usage Analytics">
//       <OverviewSection />
//       <ScanCountByMonth />
//       <RegionWiseScanDistribution />
//     </LayoutComponent>
//   );
// };

// export default UsageAnalytics;

import React, { useState, useEffect } from "react";
import LayoutComponent from "./Layout";
import { BsThreeDots } from "react-icons/bs";

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
} from "recharts";
import MapChart from "./MapChart";
import { EncodeTagsData, UsedTagsData } from "./Chart";

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
// const geoUrl =
//   "https://raw.githubusercontent.com/datameet/maps/master/geojson/country/india_telengana.geojson";

const sampleOverviewData = {
  totalScanCount: 1420,
  originalityRatio: "9:1",
  totalRegisteredIps: 141,
  totalDevicesUsed: 20,
  totalTags: 126,
  totalOriginalResults: 1040,
  total: 1992,
};
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

const sampleBarData = [
  { month: "Jan", scanCount: 5 },
  { month: "Feb", scanCount: 10 },
  { month: "Mar", scanCount: 50 },
  { month: "Apr", scanCount: 50 },
  { month: "May", scanCount: 45 },
  { month: "Jun", scanCount: 45 },
  { month: "Jul", scanCount: 110 },
  { month: "Aug", scanCount: 50 },
  { month: "Sep", scanCount: 50 },
  { month: "Oct", scanCount: 10 },
  { month: "Nov", scanCount: 50 },
  { month: "Dec", scanCount: 50 },
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

const UsageAnalytics1: React.FC = () => {
  const [overviewData, setOverviewData] = useState<any>(sampleOverviewData);
  const [barData, setBarData] = useState<any>(sampleBarData);
  const [mapData, setMapData] = useState<any>(sampleMapData);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Here you would normally fetch data, but we use static data for this example
    setOverviewData(sampleOverviewData);
    setBarData(sampleBarData);
    setMapData(sampleMapData);
  }, []);

  useEffect(() => {
    console.log("Map Data:", mapData);
  }, [mapData]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="">
      {overviewData && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <div className="bg-white p-4 shadow rounded tex-left">
            <div className="flex justify-between">
              <h2 className="text-sm font-semibold mb-4">Usage Overview</h2>
              <BsThreeDots />
            </div>
            <div className="flex justify-between gap-5">
              <div className="grow">
                <h3 className="text-gray-500 text-xs">Total Scan Count</h3>
                <p className="text-blue-600">{overviewData.totalScanCount}</p>
                <EncodeTagsData />
              </div>
              <div className="grow">
                <h3 className="text-gray-500 text-xs">Originality Ratio</h3>
                <p className="text-blue-600">{overviewData.originalityRatio}</p>
                <UsedTagsData />
              </div>
            </div>
          </div>

          <div className="bg-white p-4 shadow rounded tex-left">
            <h3 className="text-sm font-semibold mb-4">Total Registered IPs</h3>
            <p className="text-blue-600 text-2xl">
              {overviewData.totalRegisteredIps}
            </p>
          </div>
          <div className="bg-white p-4 shadow rounded tex-left">
            <h3 className="text-sm font-semibold mb-4">Total Devices Used</h3>
            <p className="text-blue-600 text-2xl">
              {overviewData.totalDevicesUsed}
            </p>
          </div>
          <div className="bg-white p-4 shadow rounded tex-left">
            <h3 className="text-sm font-semibold mb-4">Total Tags</h3>
            <p className="text-blue-600 text-2xl">{overviewData.totalTags}</p>
          </div>
          <div className="bg-white p-4 shadow rounded tex-left">
            <h3 className="text-sm font-semibold mb-4">
              Total Original Results
            </h3>
            <p className="text-blue-600 text-2xl">
              {overviewData.totalOriginalResults}
            </p>
          </div>
        </div>
      )}
      {barData && (
        <div className="bg-white p-4 shadow rounded mb-8">
          <h3 className="text-center mb-4">Scan By Month</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData} barSize={20} margin={{ bottom: 0 }}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <RechartsTooltip />
              <RechartsLegend />
              <Bar
                dataKey="scanCount"
                fill="rgba(0, 200, 0, 0.5)"
                shape={<CustomBarShape />}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

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
        {/* <ComposableMap projection="geoAlbersUsa">
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
          </ComposableMap> */}
      </div>
    </div>
  );
};

const UsageAnalytics: React.FC = () => {
  return (
    <LayoutComponent
      title="Analytics"
      link="/usage-analytics"
      subtitle="Usage Analytics"
    >
      <UsageAnalytics1 />
    </LayoutComponent>
  );
};

export default UsageAnalytics;
