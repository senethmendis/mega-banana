import React from "react";
import { headerLogin, normalbg } from "../assets";
import MenuButton from "../components/MenuButton";
import Footer from "../components/Footer";
import InputField from "../components/InputField";
import { OptionButton } from "../components/OptionButton";
import { useNavigate } from "react-router-dom";
import TitleScreen from "./TitleScreen";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col">
      <TitleScreen image={headerLogin} size="w-[400px]" />
      {/* <img src={headerLogin} alt="logo" className="w-[450px] mx-auto" /> */}
      <div className="w-full h-[600px] flex flex-col justify-start items-center">
        <div className="w-full flex flex-col justify-center items-center gap-8">
          {/* content */}

          <div className="bg-black bg-black/50 p-20">
            <form className="flex flex-col gap-3 items-center ">
              <div className="flex gap-4 items-center">
                <label className="text-xl">UserName</label>
                <InputField placeholder={"username"} />
              </div>
              <div className="flex gap-4 items-center">
                <label className="text-xl">password</label>
                <InputField placeholder={"password"} type={"password"} />
              </div>

              <OptionButton
                className="border py-2 rounded-md w-full bg-gradient-to-r from-yellow-400 to-green-500"
                onClick={() => navigate("/play")}
              >
                Login
              </OptionButton>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      <img
        src={normalbg}
        alt="bg"
        className="w-screen h-screen absolute -z-10 top-0 left-0 right-0 bottom-0"
      />
    </section>
  );
};

export default LoginPage;
