// LayoutComponent.tsx
import React, { ReactNode, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

interface LayoutComponentProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

const LayoutComponent: React.FC<LayoutComponentProps> = ({
  children,
  title,
  subtitle,
}) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };
  return (
    <div className="flex flex-col h-screen nunito-normal">
      <Header handleMinimize={handleMinimize} />
      <div className="max-w-screen flex-grow flex relative">
        <Sidebar isMinimized={isMinimized} handleMinimize={handleMinimize} />
        <div
          className={`flex-grow w-full pt-16 ${
            isMinimized ? "ml-4" : "ml-64"
          } `}
          style={{ transition: "all .5s ease" }}
        >
          <div className="w-full max-w-full h-full flex flex-col">
            <div className="pl-[2%] pt-[1%] mb-[1%] flex-none">
              <span className="text-primary">{title}</span> / {subtitle}
            </div>
            <div className="rounded pr-4 grow flex flex-col">{children}</div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutComponent;
