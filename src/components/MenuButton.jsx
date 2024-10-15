import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import bgMusic from "../assets/sound/hover.mp3";
import Arrow from "../components/Arrow";
import PixelArrow from "../components/PixelArrow";

const MenuButton = ({ link, lable }) => {
  const [value, setvalue] = useState(0);
  const [visible, setVisible] = useState(false);
  const audioRef = useRef(new Audio(bgMusic)); // Reuse the same Audio instance

  const play = () => {
    audioRef.current.volume = 0.1;

    audioRef.current.play();
  };

  useEffect(() => {
    play(); // Play the sound when value changes
  }, [value]);

  useEffect(() => {
    audioRef.current.load(); // Load the audio when the component mounts
  }, []);

  return (
    <Link
      to={link}
      className="w-[400px] text-3xl hover:text-custom-yello flex items-start  gap-6"
      onMouseEnter={() => {
        setvalue(value + 1);
        setVisible(true);
      }}
      onMouseLeave={() => setVisible(false)}
    >
      {lable}
      {visible ? <PixelArrow onClick={() => navigate(-1)} /> : null}
    </Link>
  );
};

export default MenuButton;
