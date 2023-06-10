"use client";

import React from "react";

const images = [
  "/images/default-blue.png",
  "/images/default-red.png",
  "/images/default-slate.png",
  "/images/default-green.png",
];

type Props = {
  name: string | undefined;
};

const UserCard = ({ name }: Props) => {
  const imgSrc = images[Math.floor(Math.random() * 4)];

  return (
    <div className="flex-row mx-auto group w-44">
      <div className="flex items-center justify-center overflow-hidden border-2 border-transparent rounded-md w-44 h-44 group-hover:cursor-pointer group-hover:border-white">
        <img
          draggable={false}
          className="object-contain w-max h-max"
          src={imgSrc}
          alt=""
        />
      </div>
      <div className="mt-4 text-2xl text-center text-gray-400 group-hover:text-white">
        {name}
      </div>
    </div>
  );
};

export default UserCard;
