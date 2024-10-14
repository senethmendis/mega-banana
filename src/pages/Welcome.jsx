import React from "react";
import { headerLogo, mainMenuBg } from "../assets";
import Footer from "../components/Footer";
import MenuButton from "../components/MenuButton";
import { motion } from "framer-motion";
import TitleScreen from "./TitleScreen";

const Welcome = () => {
  return (
    <section className="flex flex-col">
      <TitleScreen image={headerLogo} />

      <div className="w-full h-[650px] flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center gap-8">
          <MenuButton link={"/play"} lable={"Play as Guest"} />
          <MenuButton link={"/login"} lable={"Login"} />
          <MenuButton link={"/register"} lable={"Register"} />
        </div>
      </div>
      <Footer visibility={false} />
      <img
        src={mainMenuBg}
        alt="bg"
        className="w-screen h-screen absolute -z-10 top-0 left-0 right-0 bottom-0"
      />
    </section>
  );
};

export default Welcome;
