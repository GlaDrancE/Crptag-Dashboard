// // import React from 'react';
// // import { FaChartLine, FaUserAlt, FaTags, FaCogs, FaBook } from 'react-icons/fa';
// // import { Link } from 'react-router-dom'; // If you are using react-router for navigation

// const Sidebar = () => {
//   return (
//     <div className="w-screen flex-grow bg-bg-light flex">
//     <div className="w-[250px] shadow-[0px_0px_25px_rgba(94,92,154,0.1)] rounded">
//       <div className="relative left-[7%] right-[3%] rounded h-10 bg-black bg-opacity-[0.08] w-[90%] top-[10px] flex items-center space-x-5">
//         <img
//           className="h-6 w-6 relative left-3"
//           alt="Home"
//           src="/home.svg"
//         />
//         <div className="text-[14px]  text-black flex-grow">Dashboard</div>
//         <img
//           className="h-6 w-6 relative right-3"
//           alt="Back Arrow"
//           src="/double-back-arrow.svg"
//         />
//       </div>
//     </div>
//     <div className="flex-grow bg-blue-500"></div>
//   </div>
//   );
// };

// export default Sidebar;

import React, { useRef, useState } from "react";
import SidebarLinks from "./SidebarLinks";
import { ChevronsLeft, ChevronsRight, KeyRoundIcon } from "lucide-react";
import IconMenuDashboard from "./Icon/Menu/IconMenuDashboard";
import IconMenuAttendance from "./Icon/IconMenuAttendance";
import IconMenuUsers from "./Icon/Menu/IconMenuUsers";
import { BiSticker } from "react-icons/bi";
import IconMenuCharts from "./Icon/Menu/IconMenuCharts";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaKey } from "react-icons/fa6";
import IconMenuPages from "./Icon/Menu/IconMenuPages";
interface SidebarProps {
  isMinimized: boolean;
  handleMinimize: any;
}
const Sidebar = ({ isMinimized, handleMinimize }: SidebarProps) => {
  const logoRef = useRef<HTMLImageElement>(null);
  const shrinkLogoRef = useRef<HTMLImageElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const subSections1 = ["API Keys", "Register Client", "Manage Clients"];
  const subSections2 = ["Add Tags", "Tags Information"];
  const subSections3 = ["Fraud Analytics", "Usage Analytics"];
  const subSections4 = ["User Management"];
  const subSections5 = ["API Docs", "App Docs", "Verification Flow Docs"];

  return (
    <div
      className={`flex flex-col pt-4 fixed h-screen z-50 px-4 top-0 bottom-0 max-w-60 w-full shadow-[0px_0px_25px_rgba(94,92,154,0.1)] rounded bg-white ${
        isMinimized ? "-left-60" : "left-0"
      }`}
      ref={sidebarRef}
      style={{ transition: "all .5s ease" }}
    >
      <div className={`pb-4 flex justify-between items-end`}>
        <div>
          <img src="/shrinkLogo.svg" className="h-0" ref={shrinkLogoRef} />
          <img src="/logo.svg" alt="Logo" className="" ref={logoRef} />
        </div>
        <div onClick={handleMinimize}>
          {/* {!isMinimized ? (
            <ChevronsLeft className="cursor-pointer" />
          ) : (
            <ChevronsRight className="cursor-pointer" />
          )} */}
          {!isMinimized && <ChevronsLeft className="cursor-pointer" />}
        </div>
      </div>
      <SidebarLinks
        sectionName={"Desktop"}
        sections={["test"]}
        sectionIcon={<IconMenuDashboard />}
        isDirectLink={true}
        directLink="/dashboard"
      />
      <SidebarLinks
        sectionName={"Client Management"}
        sections={subSections1}
        sectionIcon={<IconMenuUsers />}
      />
      <SidebarLinks
        sectionName={"Tag Management"}
        sections={subSections2}
        sectionIcon={<BiSticker size={20} />}
      />
      <SidebarLinks
        sectionName={"Analytics"}
        sections={subSections3}
        sectionIcon={<IconMenuCharts />}
      />
      <SidebarLinks
        sectionName={"Admin Setting"}
        sections={subSections4}
        sectionIcon={<FaKey />}
      />
      <SidebarLinks
        sectionName={"Documentation"}
        sections={subSections5}
        sectionIcon={<IconMenuPages />}
      />
    </div>
  );
};

export default Sidebar;
