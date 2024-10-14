import { ArrowLeft, LogOut, Volume2, VolumeOff } from "lucide-react";
import React, { useState } from "react";
import { OptionButton } from "./OptionButton";
import { useNavigate } from "react-router-dom";

const Footer = ({ children, visibility = true }) => {
  const [toggle, setToggle] = useState(false);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  return (
    <footer className=" w-full h-full">
      <div className=" flex flex-row justify-between">
        {visibility ? <ArrowLeft onClick={() => navigate(-1)} /> : null}

        {children}
        <OptionButton onClick={() => setToggle((prev) => !prev)}>
          {toggle ? <VolumeOff /> : <Volume2 />}
        </OptionButton>
      </div>
    </footer>
  );
};

export default Footer;
