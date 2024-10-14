import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <main className="max-w-[1024px] my-auto mx-auto h-[1000px]">
      <Outlet />
    </main>
  );
};

export default Layout;
