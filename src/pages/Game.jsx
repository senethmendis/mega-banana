import React, { useEffect, useState } from "react";
import { mainMenuBg, playBanana, heart } from "../assets";
import MenuButton from "../components/MenuButton";
import Footer from "../components/Footer";
import TitleScreen from "./TitleScreen";
import axios from "axios";
import LoadingIcon from "../components/LoadingIcon";
import { coinSound, Loose } from "../assets/sound";

const Game = () => {
  const coinFX = new Howl({
    src: [coinSound],
    volume: 0.4,
  });

  const looseFX = new Howl({
    src: [Loose],
    volume: 0.4,
  });

  const [number, setNumber] = useState([...Array(10).keys()]);
  const [lives, setLives] = useState(3);
  const [solution, setSolution] = useState("");
  const [question, setQuestion] = useState("");
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchGameData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://marcconrad.com/uob/banana/api.php?out=json&base64=no"
      );
      const data = res.data;
      setSolution(data.solution);
      setQuestion(data.question);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const playCoinSoundFX = () => {
    coinFX.play();
  };
  const playLooseSoundFX = () => {
    looseFX.play();
  };

  //handle restart
  const handleRestart = () => {
    setLives(3);
    setScore(0);
  };

  //hadle user clicks
  const handleButtonClick = (number) => {
    if (solution === number) {
      // alert("Awnzer is Corret!");
      //set new score
      playCoinSoundFX();
      setScore(score + 100);
      //refetch a new question
      fetchGameData();
    } else {
      // wrong awnzer ? then remove 1 life
      playLooseSoundFX();
      setLives(lives - 1);
      fetchGameData();
    }
  };

  useEffect(() => {
    fetchGameData();
  }, []);

  console.log(solution);

  return (
    <section className="flex flex-col justify-center items-center">
      <TitleScreen image={playBanana} size="w-[500px]" />
      {/* <img src={playBanana} alt="logo" className="w-[700px] mx-auto" /> */}
      <div className="w-full h-[650px] flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center gap-8">
          <div className="w-[650px] flex flex-row gap-6 justify-between items-center">
            <div className="flex flex-row gap-5">
              <h1>Lives</h1>
              <div className="flex flex-row gap-4 items-center">
                {[...Array(lives).keys()].map((live, i) => (
                  <img key={i} src={heart} alt="lives" className="w-10" />
                ))}
              </div>
            </div>
            <h1>Score {score} </h1>
          </div>
          {/* main section that play out the game */}
          <div className="w-[650px] h-[350px] flex items-center justify-center">
            {loading ? (
              <LoadingIcon />
            ) : (
              <img src={question} alt="question" className="rounded-md" />
            )}
          </div>
          <div className="flex flex-row gap-7">
            {number.map((number) => (
              <button
                key={number}
                onClick={() => handleButtonClick(number)}
                className=" bg-custom-red px-3 py-2 rounded-md"
              >
                {number}
              </button>
            ))}
          </div>
        </div>
      </div>
      <Footer>
        <button
          onClick={handleRestart}
          className="text-2xl text-black hover:text-white
         bg-custom-green px-3 py-1 rounded-sm "
        >
          Restart
        </button>
      </Footer>
      <img
        src={mainMenuBg}
        alt="bg"
        className="w-screen h-screen absolute -z-10 top-0 left-0 right-0 bottom-0"
      />
    </section>
  );
};

export default Game;
