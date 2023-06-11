"use client";

import React, { useCallback, useMemo } from "react";

import { SafeUser } from "@/types";

import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";
import { useRouter } from "next/navigation";
import axios from "axios";

type Props = {
  movieId?: string;
  currentUser?: SafeUser | null;
};

const FavoriteButton = ({ movieId, currentUser }: Props) => {
  const router = useRouter();

  const isFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(movieId!);
  }, [currentUser, movieId]);

  const toggleFavorites = useCallback(async () => {
    if (!currentUser) {
      return router.push("/auth");
    }

    try {
      let request;

      if (isFavorite) {
        request = () => axios.delete(`/api/favorites/${movieId}`);
      } else {
        request = () => axios.post(`/api/favorites/${movieId}`);
      }

      await request();
      router.refresh();
    } catch (error: any) {
      console.log(error?.message);
    }
  }, [currentUser, isFavorite, movieId, router]);

  const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;

  return (
    <div
      onClick={toggleFavorites}
      className="flex items-center justify-center w-6 h-6 transition border-2 border-white rounded-full cursor-pointer group/item lg:w-10 lg:h-10 hover:border-neutral-300"
    >
      <Icon className="w-4 text-white group-hover/item:text-neutral-300 lg:w-6" />
    </div>
  );
};

export default FavoriteButton;
