import React from "react";
import MenuButton from "../components/MenuButton";
import Footer from "../components/Footer";
import { mainMenuBg, playBanana } from "../assets";

const PlayGame = () => {
  return (
    <section className="flex flex-col justify-start items-start">
      <div className="w-full h-[650px] flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-center items-start gap-8">
          <MenuButton link={"/game"} lable={"start"} />
          <MenuButton link={"/leaderboard"} lable={"leaderboard"} />
          <MenuButton link={"/help"} lable={"how to play"} />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default PlayGame;
