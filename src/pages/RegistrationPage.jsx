import React from "react";
import { normalbg } from "../assets";

import Footer from "../components/Footer";
import InputField from "../components/InputField";

import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col">
      {/* <img src={headerLogin} alt="logo" className="w-[450px] mx-auto" /> */}
      <div className="w-full h-[600px] flex flex-col justify-start items-center">
        <div className="w-full flex flex-col justify-center items-center gap-8">
          {/* content */}

          <div className="bg-black bg-black/80 p-20 border border-custom-green">
            <form className="flex flex-col gap-3 items-end text-custom-green ">
              <div className="flex flex-col gap-4 items-start">
                <label className="text-xl">UserName</label>
                <InputField placeholder={"username"} />
              </div>
              <div className="flex flex-col gap-4 items-start">
                <label className="text-xl">Email</label>
                <InputField placeholder={"email"} />
              </div>
              <div className="flex flex-col gap-4 items-start">
                <label className="text-xl">password</label>
                <InputField placeholder={"password"} type={"password"} />
              </div>

              <button
                className="w-full bg-custom-green hover:text-white rounded-sm h-12 text-black my-4"
                onClick={() => navigate("/login")}
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default RegistrationPage;
