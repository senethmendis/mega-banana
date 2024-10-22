import React from "react";
import { normalbg, headerInstruction } from "../assets";

import { useNavigate } from "react-router-dom";

const HowToPlay = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col">
      {/* <img src={headerLogin} alt="logo" className="w-[450px] mx-auto" /> */}
      <div className="w-full h-[600px] flex flex-col justify-start items-center tracking-widest break-normal">
        <div className="w-full flex flex-col justify-center items-center gap-8">
          {/* content */}

          <div className="text-xl font-itim  text-white bg-black/90 p-10 border border-custom-green">
            <h1 className="md:text-lg lg:text-xl">
              <span className="font-bold text-2xl md:text-xl lg:text-3xl text-custom-green">
                Objective:{" "}
              </span>
              Your goal is to find the hidden number within the mathematical
              equations before time runs out and without losing all your lives.
            </h1>

            <h1 className="md:text-lg">
              <p className="font-bold text-3xl md:text-xl lg:text-3xl text-custom-green">
                Gameplay:
              </p>
              <div className="ml-16">
                <ul className="list-disc">
                  <li>
                    <h1>
                      Each question will display a mathematical equation with
                      some numbers hidden by a tomato.
                    </h1>
                  </li>

                  <li>
                    <h1>
                      If you select the correct number, you&apos;ll earn a point
                      and move on to the next question.
                    </h1>
                  </li>
                  <li>
                    <h1>
                      Be careful! Selecting the wrong number or if the timer
                      runs out it will cost you a life.
                    </h1>
                  </li>
                  <li>
                    <h1>
                      If you lose all your lives or run out of time, the game
                      will end.
                    </h1>
                  </li>
                </ul>
              </div>
            </h1>

            <h1 className="md:text-lg ">
              <p className="font-bold text-3xl text-custom-green">Hints:</p>
              <div className="ml-16">
                <ul className="list-disc">
                  <li>
                    <h1> Pay attention to the equations.</h1>
                  </li>
                  <li>
                    <h1>
                      Don&apos;t forget to keep an eye on the timer and your
                      remaining lives.
                    </h1>
                  </li>
                </ul>
              </div>
            </h1>

            <h1 className="md:text-lg ">
              <span className="font-bold text-3xl text-custom-green">
                Restart:{" "}
              </span>
              If you wish to restart the game at any time, you can do so from
              the restart button.
            </h1>
            <h1 className="text-center text-4xl mt-7 text-custom-neon-blue">
              Have Fun!: Enjoy the challenge and test your math skills in the
              Tomato Quiz Game!
            </h1>
          </div>
          <button
            className="w-[150px] bg-custom-green hover:text-white rounded-sm h-12 text-black my-4"
            onClick={() => navigate(-1)}
          >
            Go back
          </button>
        </div>
      </div>

      <img
        src={normalbg}
        alt="bg"
        className="w-screen h-screen absolute -z-10 top-0 left-0 right-0 bottom-0"
      />
    </section>
  );
};

export default HowToPlay;
