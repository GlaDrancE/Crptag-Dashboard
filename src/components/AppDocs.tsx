import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import axios from "axios";
import LayoutComponent from "./Layout";

const AppDocs: React.FC = () => {
  return (
    <LayoutComponent title="Documentation" link="/app-docs" subtitle="App Docs">
      <></>
    </LayoutComponent>
  );
};

export default AppDocs;
