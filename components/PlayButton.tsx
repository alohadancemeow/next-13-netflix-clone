"use client";

import useInfModal from "@/hooks/useInfoModal";
import { useRouter } from "next/navigation";
import { BsFillPlayFill } from "react-icons/bs";

type Props = {
  movieId?: string;
};

const PlayButton = ({ movieId }: Props) => {
  const router = useRouter();
  const { closeModal } = useInfModal();

  return (
    <button
      onClick={() => {
        router.push(`/watch/${movieId}`);
        closeModal();
      }}
      className="flex flex-row items-center w-auto px-2 py-1 text-xs font-semibold transition bg-white rounded-md md:py-2 md:px-4 lg:text-lg hover:bg-neutral-300"
    >
      <BsFillPlayFill className="w-4 mr-1 text-black md:w-7" />
      Play
    </button>
  );
};

export default PlayButton;
