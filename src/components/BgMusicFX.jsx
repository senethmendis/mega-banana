import React, { useEffect, useState } from "react";
import { OptionButton } from "./OptionButton";
import { Volume2, VolumeOff } from "lucide-react";
import { bgMusic1 } from "../assets/sound";
import { Howl, Howler } from "howler";

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
      className={"absolute  top-[4rem] right-[21rem] "}
      onClick={toggleBgMusicFX}
    >
      {toggleMute ? <Volume2 color="#ffff33" /> : <VolumeOff color="#ffff33" />}
    </OptionButton>
  );
};

export default BgMusicFX;
