import React from "react";
import MenuButton from "../components/MenuButton";
import Footer from "../components/Footer";
import { mainMenuBg, playBanana } from "../assets";
import TitleScreen from "./TitleScreen";

const PlayGame = () => {
  return (
    <section className="flex flex-col justify-start items-start">
      <TitleScreen image={playBanana} />
      {/* <img src={playBanana} alt="logo" className="w-[700px] mx-auto" /> */}
      <div className="w-full h-[650px] flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-center items-start gap-8">
          <MenuButton link={"/game"} lable={"start"} />
          <MenuButton link={"/leaderboard"} lable={"leaderboard"} />
          <MenuButton link={"/help"} lable={"how to play"} />
        </div>
      </div>
      <Footer />
      <img
        src={mainMenuBg}
        alt="bg"
        className="w-screen h-screen absolute -z-10 top-0 left-0 right-0 bottom-0"
      />
    </section>
  );
};

export default PlayGame;
