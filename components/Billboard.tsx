"use client";

import React from "react";
import { Movie } from "@prisma/client";

import { AiOutlineInfoCircle } from "react-icons/ai";

type Props = {
  randomMovie: Movie | null;
};

const Billboard = async ({ randomMovie }: Props) => {
  return (
    <div className="relative h-[56.25vw]">
      <video
        poster={randomMovie?.thumbnailUrl}
        className="w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500"
        autoPlay
        muted
        loop
        src={randomMovie?.videoUrl}
      ></video>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          {randomMovie?.title}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {randomMovie?.description}
        </p>
        <div className="flex flex-row items-center gap-3 mt-3 md:mt-4">
          {/* <PlayButton movieId={randomMovie?.id} /> */}
          <button
            // onClick={handleOpenModal}
            className="flex flex-row items-center w-auto px-2 py-1 text-xs font-semibold text-white transition bg-white rounded-md bg-opacity-30 md:py-2 md:px-4 lg:text-lg hover:bg-opacity-20"
          >
            <AiOutlineInfoCircle className="w-4 mr-1 md:w-7" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
