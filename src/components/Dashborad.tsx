import { useEffect, useState } from "react";
import Calendar from "./Calendar"; // Adjust the import path as necessary
import { DashboardChart } from "./Chart"; // Adjust the import path as necessary
import ActivityLog from "./ActivityLog"; // Adjust the import path as necessary
import MapChart, { MapData } from "./MapChart.js"; // Adjust the import path as necessary
import LayoutComponent from "./Layout";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IconSandClock } from "./Icon/IconSandClock";
import LineChart from "./LineChart.js";
const Dashboard = () => {
  const [performanceMaxTime, setPerformanceMaxTime] = useState("2.5"); // set the performance max time from database
  const [performanceMinTime, setPerformanceMinTime] = useState("2.5"); // set the performance max time from database

  // const SampleFraudData: MapData[] = [
  //   { id: 1, ip: "203.0.113.1", latitude: 28.6139, longitude: 77.209 },
  //   { id: 2, ip: "203.0.113.2", latitude: 19.076, longitude: 72.8777 },
  //   { id: 3, ip: "203.0.113.3", latitude: 13.0827, longitude: 80.2707 },
  //   { id: 4, ip: "203.0.113.4", latitude: 22.5726, longitude: 88.3639 },
  //   { id: 5, ip: "203.0.113.5", latitude: 12.9716, longitude: 77.5946 },
  //   { id: 6, ip: "203.0.113.6", latitude: 26.8467, longitude: 80.9462 },
  //   { id: 7, ip: "203.0.113.7", latitude: 17.385, longitude: 78.4867 },
  //   { id: 8, ip: "203.0.113.8", latitude: 18.5204, longitude: 73.8567 },
  //   { id: 9, ip: "203.0.113.9", latitude: 23.0225, longitude: 72.5714 },
  //   { id: 10, ip: "203.0.113.10", latitude: 21.1702, longitude: 72.8311 },
  //   { id: 11, ip: "203.0.113.11", latitude: 22.3072, longitude: 73.1812 },
  //   { id: 12, ip: "203.0.113.12", latitude: 15.2993, longitude: 74.124 },
  //   { id: 13, ip: "203.0.113.13", latitude: 11.0168, longitude: 76.9558 },
  //   { id: 14, ip: "203.0.113.14", latitude: 25.3176, longitude: 82.9739 },
  //   { id: 15, ip: "203.0.113.15", latitude: 22.7196, longitude: 75.8577 },
  //   { id: 16, ip: "203.0.113.16", latitude: 31.1048, longitude: 77.1734 },
  //   { id: 17, ip: "203.0.113.17", latitude: 10.8505, longitude: 76.2711 },
  //   { id: 18, ip: "203.0.113.18", latitude: 26.9124, longitude: 75.7873 },
  //   { id: 19, ip: "203.0.113.19", latitude: 26.1445, longitude: 91.7362 },
  //   { id: 20, ip: "203.0.113.20", latitude: 25.5941, longitude: 85.1376 },
  //   { id: 21, ip: "203.0.113.21", latitude: 23.3441, longitude: 85.3096 },
  //   { id: 22, ip: "203.0.113.22", latitude: 22.5726, longitude: 88.3639 },
  //   { id: 23, ip: "203.0.113.23", latitude: 27.1767, longitude: 78.0081 },
  //   { id: 24, ip: "203.0.113.24", latitude: 26.85, longitude: 80.949997 },
  //   { id: 25, ip: "203.0.113.25", latitude: 23.233, longitude: 77.434 },
  //   { id: 26, ip: "203.0.113.26", latitude: 30.7333, longitude: 76.7794 },
  //   { id: 27, ip: "203.0.113.27", latitude: 9.9252, longitude: 78.1198 },
  //   { id: 28, ip: "203.0.113.28", latitude: 24.5854, longitude: 73.7125 },
  //   { id: 29, ip: "203.0.113.29", latitude: 21.2514, longitude: 81.6296 },
  //   { id: 30, ip: "203.0.113.30", latitude: 26.2389, longitude: 73.0243 },
  //   { id: 31, ip: "203.0.113.31", latitude: 21.1458, longitude: 79.0882 },
  //   { id: 32, ip: "203.0.113.32", latitude: 10.998, longitude: 76.9616 },
  //   { id: 33, ip: "203.0.113.33", latitude: 11.6643, longitude: 78.146 },
  //   { id: 34, ip: "203.0.113.34", latitude: 22.8236, longitude: 86.2316 },
  //   { id: 35, ip: "203.0.113.35", latitude: 25.4484, longitude: 78.5685 },
  //   { id: 36, ip: "203.0.113.36", latitude: 22.6792, longitude: 88.3715 },
  //   { id: 37, ip: "203.0.113.37", latitude: 17.6868, longitude: 83.2185 },
  //   { id: 38, ip: "203.0.113.38", latitude: 22.5726, longitude: 88.3639 },
  //   { id: 39, ip: "203.0.113.39", latitude: 18.5204, longitude: 73.8567 },
  //   { id: 40, ip: "203.0.113.40", latitude: 19.076, longitude: 72.8777 },
  //   { id: 41, ip: "203.0.113.41", latitude: 11.0168, longitude: 76.9558 },
  //   { id: 42, ip: "203.0.113.42", latitude: 19.076, longitude: 72.8777 },
  //   { id: 43, ip: "203.0.113.43", latitude: 23.3441, longitude: 85.3096 },
  //   { id: 44, ip: "203.0.113.44", latitude: 18.5204, longitude: 73.8567 },
  //   { id: 45, ip: "203.0.113.45", latitude: 19.076, longitude: 72.8777 },
  //   { id: 46, ip: "203.0.113.46", latitude: 23.3441, longitude: 85.3096 },
  //   { id: 47, ip: "203.0.113.47", latitude: 18.5204, longitude: 73.8567 },
  //   { id: 48, ip: "203.0.113.48", latitude: 19.076, longitude: 72.8777 },
  //   { id: 49, ip: "203.0.113.49", latitude: 23.3441, longitude: 85.3096 },
  //   { id: 50, ip: "203.0.113.50", latitude: 18.5204, longitude: 73.8567 },
  //   { id: 51, ip: "203.0.113.51", latitude: 19.076, longitude: 72.8777 },
  //   { id: 52, ip: "203.0.113.52", latitude: 23.3441, longitude: 85.3096 },
  //   { id: 53, ip: "203.0.113.53", latitude: 18.5204, longitude: 73.8567 },
  //   { id: 54, ip: "203.0.113.54", latitude: 19.076, longitude: 72.8777 },
  //   { id: 55, ip: "203.0.113.55", latitude: 23.3441, longitude: 85.3096 },
  //   { id: 56, ip: "203.0.113.56", latitude: 18.5204, longitude: 73.8567 },
  //   { id: 57, ip: "203.0.113.57", latitude: 19.076, longitude: 72.8777 },
  //   { id: 58, ip: "203.0.113.58", latitude: 23.3441, longitude: 85.3096 },
  //   { id: 59, ip: "203.0.113.59", latitude: 18.5204, longitude: 73.8567 },
  //   { id: 60, ip: "203.0.113.60", latitude: 19.076, longitude: 72.8777 },
  //   { id: 61, ip: "203.0.113.61", latitude: 23.3441, longitude: 85.3096 },
  //   { id: 62, ip: "203.0.113.62", latitude: 18.5204, longitude: 73.8567 },
  //   { id: 63, ip: "203.0.113.63", latitude: 19.076, longitude: 72.8777 },
  //   { id: 64, ip: "203.0.113.64", latitude: 23.3441, longitude: 85.3096 },
  //   { id: 65, ip: "203.0.113.65", latitude: 18.5204, longitude: 73.8567 },
  //   { id: 66, ip: "203.0.113.66", latitude: 19.076, longitude: 72.8777 },
  //   { id: 67, ip: "203.0.113.67", latitude: 23.3441, longitude: 85.3096 },
  //   { id: 68, ip: "203.0.113.68", latitude: 18.5204, longitude: 73.8567 },
  //   { id: 69, ip: "203.0.113.69", latitude: 19.076, longitude: 72.8777 },
  //   { id: 70, ip: "203.0.113.70", latitude: 23.3441, longitude: 85.3096 },
  //   { id: 71, ip: "203.0.113.71", latitude: 18.5204, longitude: 73.8567 },
  //   { id: 72, ip: "203.0.113.72", latitude: 19.076, longitude: 72.8777 },
  //   { id: 73, ip: "203.0.113.73", latitude: 23.3441, longitude: 85.3096 },
  //   { id: 74, ip: "203.0.113.74", latitude: 18.5204, longitude: 73.8567 },
  //   { id: 75, ip: "203.0.113.75", latitude: 19.076, longitude: 72.8777 },
  //   { id: 76, ip: "203.0.113.76", latitude: 23.3441, longitude: 85.3096 },
  //   { id: 77, ip: "203.0.113.77", latitude: 18.5204, longitude: 73.8567 },
  //   { id: 78, ip: "203.0.113.78", latitude: 19.076, longitude: 72.8777 },
  //   { id: 79, ip: "203.0.113.79", latitude: 23.3441, longitude: 85.3096 },
  //   { id: 80, ip: "203.0.113.80", latitude: 18.5204, longitude: 73.8567 },
  //   { id: 81, ip: "203.0.113.81", latitude: 19.076, longitude: 72.8777 },
  //   { id: 82, ip: "203.0.113.82", latitude: 23.3441, longitude: 85.3096 },
  //   { id: 83, ip: "203.0.113.83", latitude: 18.5204, longitude: 73.8567 },
  //   { id: 84, ip: "203.0.113.84", latitude: 19.076, longitude: 72.8777 },
  //   { id: 85, ip: "203.0.113.85", latitude: 23.3441, longitude: 85.3096 },
  //   { id: 86, ip: "203.0.113.86", latitude: 18.5204, longitude: 73.8567 },
  //   { id: 87, ip: "203.0.113.87", latitude: 19.076, longitude: 72.8777 },
  //   { id: 88, ip: "203.0.113.88", latitude: 23.3441, longitude: 85.3096 },
  //   { id: 89, ip: "203.0.113.89", latitude: 18.5204, longitude: 73.8567 },
  //   { id: 90, ip: "203.0.113.90", latitude: 19.076, longitude: 72.8777 },
  //   { id: 91, ip: "203.0.113.91", latitude: 23.3441, longitude: 85.3096 },
  //   { id: 92, ip: "203.0.113.92", latitude: 18.5204, longitude: 73.8567 },
  //   { id: 93, ip: "203.0.113.93", latitude: 19.076, longitude: 72.8777 },
  //   { id: 94, ip: "203.0.113.94", latitude: 23.3441, longitude: 85.3096 },
  //   { id: 95, ip: "203.0.113.95", latitude: 18.5204, longitude: 73.8567 },
  //   { id: 96, ip: "203.0.113.96", latitude: 19.076, longitude: 72.8777 },
  //   { id: 97, ip: "203.0.113.97", latitude: 23.3441, longitude: 85.3096 },
  //   { id: 98, ip: "203.0.113.98", latitude: 18.5204, longitude: 73.8567 },
  //   { id: 99, ip: "203.0.113.99", latitude: 19.076, longitude: 72.8777 },
  //   { id: 100, ip: "203.0.113.100", latitude: 23.3441, longitude: 85.3096 },
  // ];

  const sampleData = [];
  useEffect(() => {
    // Data fetching will be placed here.
  });
  return (
    <LayoutComponent title="Dashboard" subtitle="Main">
      <div className="flex">
        {/* Main content */}
        <main className="flex-1 gap-4">
          <section className="grid grid-cols-3 gap-4 ">
            <div className="bg-white p-4 shadow-md">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold mb-2">Tag Overview</h3>
                <BsThreeDots />
              </div>
              <div className="flex">
                <div className="grow">
                  <p className="text-gray-500">Total Encoded Tags</p>
                  <p className="text-blue-600 font-semibold">1000</p>
                  <img src="/blue-line.png" />
                </div>
                <div className="grow">
                  <p className="text-gray-500">Total Used Tags</p>
                  <p className="text-blue-600 font-semibold">500</p>
                  <img src="/green-line.png" />
                </div>
              </div>
            </div>
            <div className="bg-white p-4 shadow-md">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold mb-2">Total Spend</h3>
                <BsThreeDots />
              </div>
              <div className="flex items-end">
                <span className="text-blue-700 text-2xl">₹ 45,141</span>
                <span className="text-xs ml-1 font-semibold">all time</span>
                <FaArrowTrendUp className="ml-5" color="green" />
              </div>
            </div>
            <div className="bg-white p-4 shadow-md">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold mb-2">Fraud Overview</h3>
                <BsThreeDots />
              </div>
              <div className="flex">
                <div className="grow">
                  <p className="text-gray-500">Total Fake</p>
                  <p className="text-blue-600 font-semibold">0</p>
                  <img src="/red-line.png" />
                </div>
                <div className="grow">
                  <p className="text-gray-500">Total Blacklist</p>
                  <p className="text-blue-600 font-semibold">20</p>
                  <img src="/black-line.png" />
                </div>
              </div>
            </div>
          </section>
          <div className="flex gap-4">
            <div className="flex flex-col grow gap-4">
              <section className="">
                <DashboardChart />
              </section>

              <section className="grow bg-white shadow-md rounded-lg w-full">
                <h3 className=" p-4">Top State Wise Scan Distribution</h3>
                <hr className="h-1" />
                <div className="flex items-end w-full p-4">
                  <LineChart />
                </div>
              </section>
            </div>
            <div className="flex flex-col w-[30%] gap-4 mt-4">
              <ActivityLog />
              <section className="grid grid-cols-1 gap-4 ">
                <div className="bg-white p-4 shadow-md rounded-lg">
                  <div className="flex justify-between">
                    <h3 className="font-bold mb-4">Performance Overview</h3>
                    <button className="border bg-secondary/20 bg-opacity-10 w-7 h-7 rounded-full flex justify-center items-center">
                      <BsThreeDotsVertical />
                    </button>
                  </div>
                  <div className="flex h-auto">
                    <p className="text-xs">
                      Average Verification Time:{" "}
                      <span className="text-xl font-bold">320ms</span>
                    </p>
                    <div className="h-full w-1/2">
                      <div className="bg-light-blue p-1 w-full rounded-lg h-full mb-1">
                        <div className="flex justify-center items-center">
                          <IconSandClock />
                          <div className="flex flex-col justify-center h-full">
                            <p className="leading-3">{performanceMaxTime}</p>
                            <span className="text-secondary text-xs text-nowrap leading-3">
                              Max Time
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-light-blue p-1 w-full rounded-lg h-full">
                        <div className="flex justify-center items-center">
                          <IconSandClock />
                          <div className="flex flex-col justify-center h-full">
                            <p className="leading-3">{performanceMaxTime}</p>
                            <span className="text-secondary text-xs text-nowrap leading-3">
                              Max Time
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <h3 className="font-bold mb-2">Calendar</h3>
                  <Calendar />
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </LayoutComponent>
  );
};

export default Dashboard;
