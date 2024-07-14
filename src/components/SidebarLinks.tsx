import {
  ArrowBigDown,
  ArrowDown,
  ChevronDown,
  ChevronsDown,
  ChevronUp,
} from "lucide-react";
import { ReactElement, useState } from "react";
import { Link, NavLink, To } from "react-router-dom";
interface SidebarSubSectionProps {
  sectionName: string;
  sections: string[];
  sectionIcon: ReactElement;
  directLink?: string;
  isDirectLink?: boolean;
}
const SidebarLinks = ({
  sectionName,
  sections,
  sectionIcon,
  directLink,
  isDirectLink = false,
}: SidebarSubSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isActiveLink, setIsActiveLink] = useState(false);

  const handleExpand = (directLink: boolean) => {
    if (directLink) return;
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`w-full my-1 space-y-4 hover:!text-[#2267ba] ${
        isActiveLink && "text-[#2267ba]"
      }`}
    >
      <div
        className={`relative rounded-lg h-10 px-2 bg-gray-100 w-full min-w-full flex justify-center items-center cursor-default ${
          isDirectLink && "!cursor-pointer"
        }`}
      >
        <div
          className="flex items-center justify-between w-full"
          onClick={() => {
            handleExpand(isDirectLink);
          }}
        >
          {/* <img className="h-6 w-6 mr-2" alt="icon" src={sectionIcon} /> */}
          <div className="w-6">{sectionIcon}</div>
          {isDirectLink ? (
            <NavLink
              to={`${directLink}`}
              className={({ isActive }) => {
                if (isActive) {
                  setIsActiveLink(true);
                }
                return `text-[14px] text-black text-nowrap flex-grow font-sans font-medium overflow-hidden`;
              }}
            >
              {sectionName}
            </NavLink>
          ) : (
            <div
              className={`text-[14px] text-nowrap overflow-hidden  text-black flex-grow font-sans font-medium`}
            >
              {sectionName}
            </div>
          )}

          {!isDirectLink &&
            (!isExpanded ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronUp className="w-4 h-4" />
            ))}
        </div>
      </div>

      {
        <ul
          className={`ml-8 mt-2 h-0  overflow-hidden hidden ${
            isExpanded && "!h-full !block"
          }`}
        >
          {sections.map((section, index) => (
            <li
              key={index}
              className="text-[14px] text-black whitespace-nowrap mb-2 "
            >
              <NavLink
                to={`/${section.replace(/\s+/g, "-").toLowerCase()}`}
                className={({ isActive }) => {
                  if (isActive) {
                    setIsActiveLink(true);
                  }
                  return isActive
                    ? "text-primary active-link"
                    : "flex items-center text-black";
                }}
              >
                <span className="mr-2 font-bold text-lg scale-x-150 opacity-20">
                  -
                </span>{" "}
                {section}
              </NavLink>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export default SidebarLinks;
