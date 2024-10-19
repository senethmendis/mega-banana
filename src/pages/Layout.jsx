import React from "react";
import { Outlet } from "react-router-dom";
import BgMusicFX from "../components/BgMusicFX";
import WorldTimer from "../components/WorldTimer";

const Layout = () => {
  return (
    <main className="max-w-[1024px] my-auto mx-auto h-[1000px]">
      <BgMusicFX />
      <Outlet />
      <WorldTimer />
    </main>
  );
};

export default Layout;
