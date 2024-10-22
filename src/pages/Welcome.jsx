import React from "react";
import Footer from "../components/Footer";
import MenuButton from "../components/MenuButton";

const Welcome = () => {
  return (
    <section className="flex flex-col">
      {/* <WorldTimer /> */}

      <div className="w-full flex flex-col justify-center items-center gap-8">
        <MenuButton link={"/play"} lable={"Play as Guest"} />
        <MenuButton link={"/login"} lable={"Login"} />
        <MenuButton link={"/register"} lable={"Register"} />
      </div>

      <Footer visibility={false} />
    </section>
  );
};

export default Welcome;
