import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import bgMusic from "../assets/sound/hover.mp3";

const MenuButton = ({ link, lable }) => {
  const [value, setvalue] = useState(0);

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
      onMouseEnter={() => {
        setvalue(value + 1);
        setVisible(true);
      }}
      onMouseLeave={() => setVisible(false)}
    >
      {lable}
    </Link>
  );
};

export default MenuButton;
