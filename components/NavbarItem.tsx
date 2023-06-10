"use client";

import React from "react";

type Props = {
  label: string;
  active?: boolean;
};

const NavbarItem = ({ label, active }: Props) => {
  return (
    <div
      className={
        active
          ? "text-white cursor-default"
          : "text-gray-200 hover:text-gray-300 cursor-pointer transition"
      }
    >
      {label}
    </div>
  );
};

export default NavbarItem;
