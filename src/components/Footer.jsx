import { ArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = ({ children, visibility = true }) => {
  const navigate = useNavigate();

  return (
    <footer className=" w-full h-full">
      <div className="max-w-[850px] flex flex-row items-center justify-between mx-auto">
        {visibility ? (
          <ArrowLeft color="#ffff33" onClick={() => navigate(-1)} />
        ) : null}

        {children}
      </div>
    </footer>
  );
};

export default Footer;
