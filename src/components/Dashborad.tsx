import { useEffect, useState } from "react";
import Calendar from "./Calendar"; // Adjust the import path as necessary
import {
  BlacklistData,
  DashboardChart,
  EncodeTagsData,
  FakeScannedData,
  UsedTagsData,
} from "./Chart"; // Adjust the import path as necessary
import ActivityLog from "./ActivityLog"; // Adjust the import path as necessary
import MapChart, { MapData } from "./MapChart.js"; // Adjust the import path as necessary
import LayoutComponent from "./Layout";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IconSandClock } from "./Icon/IconSandClock";
import LineChart from "./LineChart.js";
import ReactApexChart from "react-apexcharts";
const Dashboard = () => {
  const [performanceMaxTime, setPerformanceMaxTime] = useState("2.5"); // set the performance max time from database
  const [performanceMinTime, setPerformanceMinTime] = useState("2.5"); // set the performance max time from database
  const [totalEncodedTags, setTotalEncodedTags] = useState(1000);
  const [totalUsedTags, setTotalUsedTags] = useState(500);
  const [totalFakes, setTotalFakes] = useState(50);
  const [totalBlacklist, setTotalBlacklist] = useState(20);

  const sampleData = [];
  useEffect(() => {
    // Data fetching will be placed here.
  });
  return (
    <LayoutComponent title="Dashboard" link="/dashboard" subtitle="Main">
      <div className="flex">
        {/* Main content */}
        <main className="flex-1 gap-4">
          <section className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ">
            <div className="bg-white p-4 rounded-lg shadow-md w-full">
              <div className="">
                <h3 className="font-semibold mb-2">Tag Overview</h3>
              </div>
              <div className="flex">
                <div className="w-1/2 mr-2">
                  <p className="text-gray-500 text-xs">Total Encoded Tags</p>
                  <p className="text-blue-600 font-semibold">
                    {totalEncodedTags}
                  </p>
                  <EncodeTagsData />
                </div>
                <div className="w-1/2">
                  <p className="text-gray-500 text-xs">Total Used Tags</p>
                  <p className="text-blue-600 font-semibold">{totalUsedTags}</p>
                  <UsedTagsData />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md w-full">
              <div className="">
                <h3 className="font-semibold mb-2">Total Spend</h3>
              </div>
              <div className="flex items-center">
                <span className="text-blue-700 text-2xl">₹ 45,141</span>
                <span className="text-xs ml-1 font-semibold">all time</span>
                <FaArrowTrendUp className="ml-5" color="green" />
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md w-full">
              <div className="">
                <h3 className="font-semibold mb-2">Fraud Overview</h3>
              </div>
              <div className="flex">
                <div className="w-1/2 mr-2">
                  <p className="text-gray-500 text-xs">Total Fake</p>
                  <p className="text-blue-600 font-semibold">{totalFakes}</p>
                  <FakeScannedData />
                </div>
                <div className="w-1/2">
                  <p className="text-gray-500 text-xs">Total Blacklist</p>
                  <p className="text-blue-600 font-semibold">
                    {totalBlacklist}
                  </p>
                  <BlacklistData />
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
              <section className="grid grid-cols-1 gap-4 h-full">
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
