import React, { useEffect, useState } from "react";
import { OptionButton } from "./OptionButton";
import { Volume2, VolumeOff } from "lucide-react";
import { bgMusic1 } from "../assets/sound";
import { Howl, Howler } from "howler";
import { pre } from "framer-motion/client";

const BgMusicFX = () => {
  const [toggleMute, setToggleMute] = useState(false);
  const music = new Howl({
    src: [bgMusic1],
    volume: 0.09,
    mute: toggleMute,
  });

  const toggleBgMusicFX = (toggle) => {
    setToggleMute((prev) => !prev);
    Howler.mute(toggleMute);
  };

  useEffect(() => {
    music.play();
  }, []);

  return (
    <OptionButton
      className={"absolute bottom-[6rem] right-[10rem] "}
      onClick={toggleBgMusicFX}
    >
      {toggleMute ? <Volume2 /> : <VolumeOff />}
    </OptionButton>
  );
};

export default BgMusicFX;
