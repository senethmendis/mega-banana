import React, { useEffect, useState } from "react";
import { headerScore, scoreBoard } from "../assets";
import Footer from "../components/Footer";
import { DummytableData } from "../constant";
import TitleScreen from "./TitleScreen";

const Leaderboard = () => {
  const [tableData, setTableData] = useState([]);

  return (
    <section className="flex flex-col justify-start items-start">
      <TitleScreen image={headerScore} size="w-[500px]" />
      {/* <img src={headerScore} alt="logo" className="w-[700px] mx-auto" /> */}
      <div className="w-full h-[650px] flex flex-col justify-center items-center mb-5 bg-black/90 border border-custom-green ">
        <div className="w-full flex flex-col justify-center items-center gap-8">
          <div className="relative overflow-y-auto w-full h-[500px] hideScroll">
            <table className="w-full text-2xl text-center rtl:text-right text-white ">
              <thead className="text-2xl  uppercase  text-white">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    #
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Score
                  </th>
                </tr>
              </thead>
              <tbody>
                {DummytableData.sort((a, b) => b.score - a.score).map(
                  (row, i) => (
                    <tr
                      className={`hover:bg-gray-500
                        ${
                          i + 1 == 1
                            ? "text-red-600"
                            : "" || i + 1 == 2
                            ? "text-orange-500"
                            : "" || i + 1 == 3
                            ? "text-yellow-500"
                            : ""
                        } `}
                      key={i}
                    >
                      <th
                        scope="row"
                        className={`text-red-500 hover:bg-gray-500 px-6 py-4 font-medium whitespace-nowrap dark:text-white`}
                      >
                        <p
                          className={
                            i + 1 == 1
                              ? "text-red-600"
                              : "" || i + 1 == 2
                              ? "text-orange-500"
                              : "" || i + 1 == 3
                              ? "text-yellow-500"
                              : ""
                          }
                        >
                          {i + 1}
                        </p>
                      </th>
                      <td className="px-6 py-4">{row.name}</td>
                      <td className="px-6 py-4">{row.score}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
      <img
        src={scoreBoard}
        alt="bg"
        className="w-screen h-screen absolute -z-10 top-0 left-0 right-0 bottom-0"
      />
    </section>
  );
};

export default Leaderboard;
