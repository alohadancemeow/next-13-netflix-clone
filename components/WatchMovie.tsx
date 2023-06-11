"use client";

import { useRouter } from "next/navigation";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Movie } from "@prisma/client";

type Props = {
  movie?: Movie | null;
};

const WatchMovie = ({ movie }: Props) => {
  const router = useRouter();

  return (
    <div className="w-screen h-screen bg-black">
      <nav className="fixed z-10 flex flex-row items-center w-full gap-8 p-4 bg-black bg-opacity-70">
        <AiOutlineArrowLeft
          onClick={() => router.push("/")}
          className="w-4 text-white transition cursor-pointer md:w-10 hover:opacity-80"
        />
        <p className="font-bold text-white text-1xl md:text-3xl">
          <span className="font-light">Watching:</span> {movie?.title}
        </p>
      </nav>
      <video
        className="w-full h-full"
        autoPlay
        controls
        src={movie?.videoUrl}
      ></video>
    </div>
  );
};

export default WatchMovie;
