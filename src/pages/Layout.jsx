import React from "react";
import { Outlet } from "react-router-dom";
import BgMusicFX from "../components/BgMusicFX";

const Layout = () => {
  return (
    <main className="max-w-[1024px] my-auto mx-auto h-[1000px]">
      <BgMusicFX />
      <Outlet />
    </main>
  );
};

export default Layout;
