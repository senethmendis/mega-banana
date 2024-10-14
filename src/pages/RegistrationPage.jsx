import React from "react";
import { headerRegister, normalbg } from "../assets";
import MenuButton from "../components/MenuButton";
import Footer from "../components/Footer";
import InputField from "../components/InputField";
import { OptionButton } from "../components/OptionButton";
import { useNavigate } from "react-router-dom";
import TitleScreen from "./TitleScreen";

const RegistrationPage = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col">
      <TitleScreen image={headerRegister} size="w-[500px]" />
      {/* <img src={headerLogin} alt="logo" className="w-[450px] mx-auto" /> */}
      <div className="w-full h-[600px] flex flex-col justify-start items-center">
        <div className="w-full flex flex-col justify-center items-center gap-8">
          {/* content */}

          <div className="bg-black bg-black/50 p-20">
            <form className="flex flex-col gap-3 items-end ">
              <div className="flex gap-4 items-center">
                <label className="text-xl">UserName</label>
                <InputField placeholder={"username"} />
              </div>
              <div className="flex gap-4 items-center">
                <label className="text-xl">Email</label>
                <InputField placeholder={"email"} />
              </div>
              <div className="flex gap-4 items-center">
                <label className="text-xl">password</label>
                <InputField placeholder={"password"} type={"password"} />
              </div>

              <OptionButton
                className="border py-2 rounded-md w-full "
                onClick={() => navigate("/login")}
              >
                Register
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

export default RegistrationPage;
