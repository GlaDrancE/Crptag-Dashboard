import React, { useState } from "react";
// import Header from "./Header";
// import Sidebar from "./Sidebar";
// import Footer from "./Footer";
// import axios from 'axios';
import LayoutComponent from "./Layout";

const ApiDocs: React.FC = () => {
  return (
    <LayoutComponent title="Documentation" link="/api-docs" subtitle="API Docs">
      <iframe
        src="https://docs.cryptag.in/"
        className="min-h-screen h-full w-full"
      ></iframe>
    </LayoutComponent>
  );
};

export default ApiDocs;
